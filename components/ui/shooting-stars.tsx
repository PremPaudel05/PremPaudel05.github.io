"use client";

import { useEffect, useRef } from "react";
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
  starColor = "#d5ecff",
  trailColor = "#70baff",
  starWidth = 10,
  starHeight = 1,
  className,
}: ShootingStarsProps) {
  const skyRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sky = skyRef.current;
    const star = starRef.current;
    if (!sky || !star) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let visible = false;
    let animation: Animation | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const canAnimate = () => visible && !motion.matches && !document.hidden;
    const random = (min: number, max: number) => min + Math.random() * Math.max(0, max - min);

    const stop = () => {
      clearTimeout(timer);
      if (animation) {
        animation.onfinish = null;
        animation.cancel();
        animation = undefined;
      }
    };

    const createStar = () => {
      if (!canAnimate() || !width || !height) return;
      const length = Math.min(Math.max(starWidth * 9, 60), width * 0.35);
      const x = random(width * 0.25, width * 0.95);
      const y = random(0, height * 0.22);
      const distance = Math.min(width * 0.7, height * 0.8, 650);
      const dx = -distance * 0.85;
      const dy = distance * 0.53;
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      const transform = (progress: number) =>
        `translate3d(${x + dx * progress}px, ${y + dy * progress}px, 0) rotate(${angle}deg)`;
      star.style.width = `${length}px`;
      // Only transform and opacity change in flight; the browser drives the motion.
      animation = star.animate([
        { transform: transform(0), opacity: 0, offset: 0 },
        { transform: transform(0.12), opacity: 0.8, offset: 0.12 },
        { transform: transform(0.65), opacity: 0.65, offset: 0.65 },
        { transform: transform(1), opacity: 0, offset: 1 },
      ], {
        duration: Math.max(900, distance / (Math.max(1, random(minSpeed, maxSpeed)) * 60) * 1000),
        easing: "linear",
      });
      animation.onfinish = () => {
        animation?.cancel();
        animation = undefined;
        if (canAnimate()) timer = setTimeout(createStar, Math.max(0, random(minDelay, maxDelay)));
      };
    };

    const restart = () => {
      stop();
      if (canAnimate()) timer = setTimeout(createStar, random(600, 1400));
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      restart();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    resize.observe(sky);
    observer.observe(sky);
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
    <div ref={skyRef} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span ref={starRef} style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: starHeight,
        opacity: 0,
        borderRadius: "999px",
        transformOrigin: "right center",
        background: `linear-gradient(90deg, transparent, ${trailColor} 70%, ${starColor})`,
      }} />
    </div>
  );
}
