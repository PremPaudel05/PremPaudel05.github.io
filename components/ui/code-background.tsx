"use client";

import { useEffect, useRef } from "react";

const glyphs = Array.from(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>/=+-_*#@$%λΣΩπ"
);

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -500, y: -500, tx: -500, ty: -500 };

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let last = performance.now();

    const spacing = 28;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;

      pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 9);
      pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 9);

      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = '12px "JetBrains Mono", "Geist Mono", ui-monospace, monospace';

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - dist / 190);
          const seed = Math.abs(Math.sin(x * 0.017 + y * 0.013));
          const showGlyph = influence > 0.18 && seed > 0.55;

          if (showGlyph) {
            const index = Math.floor((x * 7 + y * 11 + now * 0.012) % glyphs.length);
            ctx.globalAlpha = 0.12 + influence * 0.35;
            ctx.fillStyle = influence > 0.65 ? "#8ea7ff" : "#71809d";
            ctx.fillText(glyphs[index], x, y);
          } else {
            ctx.globalAlpha = 0.08 + influence * 0.12;
            ctx.fillStyle = "#8b98aa";
            ctx.beginPath();
            ctx.arc(x, y, 1.05, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      if (reduced) draw(performance.now());
    };

    const onLeave = () => {
      pointer.tx = -500;
      pointer.ty = -500;
      if (reduced) draw(performance.now());
    };

    resize();
    draw(performance.now());

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="code-background" aria-hidden="true">
      <canvas ref={canvasRef} className="code-background-canvas" />
      <div className="code-background-fade" />
    </div>
  );
}
