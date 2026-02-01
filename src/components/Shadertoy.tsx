"use client";

import { useEffect, useRef } from "react";

interface ShadertoyProps {
  className?: string;
  shader?: "fire" | "plasma" | "waves" | "noise";
}

// Shader source code for different effects
const SHADERS = {
  fire: `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amplitude * smoothNoise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      uv.y = 1.0 - uv.y;
      
      float n = fbm(uv * 4.0 + vec2(0.0, iTime * 0.5));
      n = fbm(uv * 3.0 + vec2(n, iTime * 0.3));
      
      float intensity = pow(1.0 - uv.y, 2.0) * n;
      
      vec3 col = vec3(0.0);
      col += vec3(1.0, 0.3, 0.05) * intensity * 2.0;
      col += vec3(1.0, 0.6, 0.1) * pow(intensity, 2.0) * 3.0;
      col += vec3(1.0, 0.9, 0.4) * pow(intensity, 4.0) * 2.0;
      
      gl_FragColor = vec4(col, intensity * 0.8);
    }
  `,
  plasma: `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    
    void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      
      float v1 = sin(uv.x * 10.0 + iTime);
      float v2 = sin(10.0 * (uv.x * sin(iTime / 2.0) + uv.y * cos(iTime / 3.0)) + iTime);
      float v3 = sin(sqrt(100.0 * ((uv.x - 0.5) * (uv.x - 0.5) + (uv.y - 0.5) * (uv.y - 0.5))) + iTime);
      float v = v1 + v2 + v3;
      
      vec3 col = vec3(
        sin(v * 3.14159) * 0.5 + 0.5,
        sin(v * 3.14159 + 2.094) * 0.5 + 0.5,
        sin(v * 3.14159 + 4.188) * 0.5 + 0.5
      );
      
      // Orange tint
      col = mix(col, vec3(0.976, 0.451, 0.086), 0.3);
      
      gl_FragColor = vec4(col * 0.3, 0.5);
    }
  `,
  waves: `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    
    void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      uv = uv * 2.0 - 1.0;
      uv.x *= iResolution.x / iResolution.y;
      
      float d = length(uv);
      float wave = sin(d * 10.0 - iTime * 2.0) * 0.5 + 0.5;
      wave *= exp(-d * 2.0);
      
      vec3 col = vec3(0.976, 0.451, 0.086) * wave;
      
      gl_FragColor = vec4(col, wave * 0.6);
    }
  `,
  noise: `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    void main() {
      vec2 uv = gl_FragCoord.xy / iResolution.xy;
      
      float n = random(uv + iTime * 0.1);
      n = pow(n, 3.0);
      
      vec3 col = vec3(0.976, 0.451, 0.086) * n;
      
      gl_FragColor = vec4(col, n * 0.3);
    }
  `,
};

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export default function Shadertoy({ className = "", shader = "plasma" }: ShadertoyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { premultipliedAlpha: false, alpha: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, VERTEX_SHADER);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, SHADERS[shader]);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const iTime = gl.getUniformLocation(program, "iTime");
    const iResolution = gl.getUniformLocation(program, "iResolution");

    // Handle resize
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    let animationId: number;
    const startTime = Date.now();

    const render = () => {
      const time = (Date.now() - startTime) / 1000;
      
      gl.uniform1f(iTime, time);
      gl.uniform2f(iResolution, canvas.width, canvas.height);
      
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, [shader]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
