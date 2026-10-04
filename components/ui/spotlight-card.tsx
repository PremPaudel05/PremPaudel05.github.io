"use client";

import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 80 },
  purple: { base: 270, spread: 90 },
  green: { base: 150, spread: 70 },
  red: { base: 0, spread: 60 },
  orange: { base: 30, spread: 60 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { base, spread } = glowColorMap[glowColor];

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      if (!cardRef.current) return;

      const { clientX: x, clientY: y } = event;
      cardRef.current.style.setProperty("--x", x.toFixed(2));
      cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
      cardRef.current.style.setProperty("--y", y.toFixed(2));
      cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer, { passive: true });
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const style = {
    "--base": base,
    "--spread": spread,
    "--size": "250",
    "--spotlight-size": "calc(var(--size) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread)))",
    width: width === undefined ? undefined : typeof width === "number" ? `${width}px` : width,
    height: height === undefined ? undefined : typeof height === "number" ? `${height}px` : height,
  } as CSSProperties;

  return (
    <div
      ref={cardRef}
      data-glow
      style={style}
      className={`${customSize ? "" : sizeMap[size]} group relative overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50/85 p-6 shadow-[0_16px_44px_-30px_rgba(15,23,42,0.28)] transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_50px_-28px_rgba(79,70,229,0.28)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(var(--hue) 90% 70% / 0.18), transparent 64%)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
