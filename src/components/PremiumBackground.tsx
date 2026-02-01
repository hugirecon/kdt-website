"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Create glowing orbs
    const orbs: THREE.Mesh[] = [];
    const orbData: { velocity: THREE.Vector3; originalPos: THREE.Vector3 }[] = [];
    
    const createOrb = (size: number, color: number, x: number, y: number, z: number, intensity: number) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: intensity,
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(x, y, z);
      
      // Add glow sprite
      const spriteMaterial = new THREE.SpriteMaterial({
        map: createGlowTexture(color),
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: intensity * 0.6,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(size * 8, size * 8, 1);
      orb.add(sprite);
      
      scene.add(orb);
      orbs.push(orb);
      orbData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        originalPos: new THREE.Vector3(x, y, z),
      });
    };

    // Create glow texture
    function createGlowTexture(color: number): THREE.Texture {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d")!;
      
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      const c = new THREE.Color(color);
      gradient.addColorStop(0, `rgba(${Math.floor(c.r*255)}, ${Math.floor(c.g*255)}, ${Math.floor(c.b*255)}, 1)`);
      gradient.addColorStop(0.2, `rgba(${Math.floor(c.r*255)}, ${Math.floor(c.g*255)}, ${Math.floor(c.b*255)}, 0.5)`);
      gradient.addColorStop(0.5, `rgba(${Math.floor(c.r*255)}, ${Math.floor(c.g*255)}, ${Math.floor(c.b*255)}, 0.1)`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    // Main orange orbs (KDT brand color)
    createOrb(2.5, 0xf97316, 0, 5, -10, 0.3);
    createOrb(1.8, 0xf97316, -15, -5, -15, 0.25);
    createOrb(2.0, 0xf97316, 12, 8, -20, 0.2);
    
    // Accent orbs - cyan/teal
    createOrb(1.5, 0xf59e0b, 18, -8, -12, 0.15);
    createOrb(1.2, 0xfb923c, -20, 12, -18, 0.12);
    
    // Deep background orbs
    createOrb(3.0, 0xf97316, 0, -15, -35, 0.08);
    createOrb(2.5, 0xd97706, 25, 0, -40, 0.06);

    // Particle system
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 20;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf97316,
      size: 0.15,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Light beam from top
    const beamGeometry = new THREE.CylinderGeometry(0.1, 2, 40, 32, 1, true);
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.set(0, 25, -5);
    scene.add(beam);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.005;
      
      // Animate orbs
      orbs.forEach((orb, i) => {
        const data = orbData[i];
        orb.position.x = data.originalPos.x + Math.sin(time + i) * 3;
        orb.position.y = data.originalPos.y + Math.cos(time * 0.7 + i * 0.5) * 2;
        orb.position.z = data.originalPos.z + Math.sin(time * 0.5 + i * 0.3) * 1;
      });
      
      // Animate particles
      particles.rotation.y = time * 0.05;
      particles.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      // Animate beam
      beam.rotation.y = time * 0.2;
      beam.material.opacity = 0.06 + Math.sin(time * 2) * 0.02;
      
      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.3) * 2;
      camera.position.y = Math.cos(time * 0.2) * 1;
      camera.lookAt(0, 0, -10);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, #000000, #050505)' }}
    />
  );
}
