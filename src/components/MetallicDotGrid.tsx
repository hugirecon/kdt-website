"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";

interface MetallicDotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
}

export default function MetallicDotGrid({
  dotSize = 8,
  gap = 24,
  baseColor = "#2a2a2a",
  activeColor = "#f97316",
  proximity = 80,
  className = "",
}: MetallicDotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<{ cx: number; cy: number; pressed: number }[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  const hexToRgb = (hex: string) => {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 42, g: 42, b: 42 };
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
  };

  const baseRgb = hexToRgb(baseColor);
  const activeRgb = hexToRgb(activeColor);

  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cell = dotSize + gap;
    const cols = Math.ceil(rect.width / cell) + 1;
    const rows = Math.ceil(rect.height / cell) + 1;

    const gridW = cell * cols;
    const gridH = cell * rows;
    const startX = (rect.width - gridW) / 2 + cell / 2;
    const startY = (rect.height - gridH) / 2 + cell / 2;

    const dots: { cx: number; cy: number; pressed: number }[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          pressed: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, width / dpr, height / dpr);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const proxSq = proximity * proximity;

    for (const dot of dotsRef.current) {
      const dx = dot.cx - mx;
      const dy = dot.cy - my;
      const distSq = dx * dx + dy * dy;

      // Calculate press amount based on distance
      let targetPress = 0;
      if (distSq < proxSq) {
        const dist = Math.sqrt(distSq);
        targetPress = 1 - dist / proximity;
      }

      // Smooth transition
      dot.pressed += (targetPress - dot.pressed) * 0.15;

      const press = dot.pressed;
      const size = dotSize * (1 - press * 0.3); // Shrink when pressed
      const depth = press * 2; // Shadow depth

      // Calculate color blend
      const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * press);
      const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * press);
      const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * press);

      // Draw outer shadow (makes it look pressed in)
      if (press > 0.01) {
        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, size / 2 + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${0.3 * press})`;
        ctx.fill();
      }

      // Draw metallic gradient for the dot
      const gradient = ctx.createRadialGradient(
        dot.cx - size * 0.2,
        dot.cy - size * 0.2,
        0,
        dot.cx,
        dot.cy,
        size / 2
      );

      // Metallic effect - lighter top-left, darker bottom-right
      const highlightR = Math.min(255, r + 40);
      const highlightG = Math.min(255, g + 40);
      const highlightB = Math.min(255, b + 40);
      const shadowR = Math.max(0, r - 30);
      const shadowG = Math.max(0, g - 30);
      const shadowB = Math.max(0, b - 30);

      gradient.addColorStop(0, `rgb(${highlightR}, ${highlightG}, ${highlightB})`);
      gradient.addColorStop(0.5, `rgb(${r}, ${g}, ${b})`);
      gradient.addColorStop(1, `rgb(${shadowR}, ${shadowG}, ${shadowB})`);

      // Main dot
      ctx.beginPath();
      ctx.arc(dot.cx + depth * 0.5, dot.cy + depth * 0.5, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Inner highlight (metallic shine)
      if (press < 0.5) {
        ctx.beginPath();
        ctx.arc(dot.cx - size * 0.15, dot.cy - size * 0.15, size * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * (1 - press * 2)})`;
        ctx.fill();
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [dotSize, proximity, baseRgb, activeRgb]);

  useEffect(() => {
    buildGrid();

    const handleResize = () => buildGrid();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [buildGrid]);

  useEffect(() => {
    draw();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
