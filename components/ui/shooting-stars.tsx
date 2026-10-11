"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/utils";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export function ShootingStars({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}: ShootingStarsProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const starRef = useRef<SVGRectElement>(null);
  const gradientId = `shooting-star-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const svg = svgRef.current;
    const rect = starRef.current;
    if (!svg || !rect) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let visible = false;
    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const canAnimate = () => visible && !motion.matches && !document.hidden;

    const stop = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      rect.setAttribute("opacity", "0");
    };

    const createStar = () => {
      if (!canAnimate() || !width || !height) return;
      const side = Math.floor(Math.random() * 4);
      const angle = 45 + side * 90;
      let x = side === 1 ? width : side === 3 ? 0 : Math.random() * width;
      let y = side === 0 ? 0 : side === 2 ? height : Math.random() * height;
      const speed = Math.max(1, minSpeed + Math.random() * (maxSpeed - minSpeed));
      const radians = angle * Math.PI / 180;
      let distance = 0;
      let previous = 0;

      const move = (now: number) => {
        if (!canAnimate()) return;
        // Normalize the supplied per-frame speeds across different refresh rates.
        const step = speed * (previous ? Math.min(now - previous, 40) / (1000 / 60) : 1);
        previous = now;
        x += step * Math.cos(radians);
        y += step * Math.sin(radians);
        distance += step;
        const length = starWidth * Math.min(1 + distance / 100, 10);
        rect.setAttribute("x", String(x));
        rect.setAttribute("y", String(y));
        rect.setAttribute("width", String(length));
        rect.setAttribute("transform", `rotate(${angle}, ${x}, ${y})`);
        rect.setAttribute("opacity", ".75");
        if (x < -length || x > width + length || y < -length || y > height + length) {
          rect.setAttribute("opacity", "0");
          timer = setTimeout(createStar, Math.max(0, minDelay + Math.random() * (maxDelay - minDelay)));
          return;
        }
        frame = requestAnimationFrame(move);
      };
      frame = requestAnimationFrame(move);
    };

    const restart = () => {
      stop();
      if (canAnimate()) timer = setTimeout(createStar, 300 + Math.random() * 700);
    };
    const resize = new ResizeObserver(() => {
      const bounds = svg.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      restart();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    resize.observe(svg);
    observer.observe(svg);
    motion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    return () => {
      stop();
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth]);

  return (
    <svg ref={svgRef} aria-hidden="true" focusable="false" className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={trailColor} stopOpacity={0} />
          <stop offset="100%" stopColor={starColor} stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect ref={starRef} width={starWidth} height={starHeight} fill={`url(#${gradientId})`} opacity={0} />
    </svg>
  );
}
