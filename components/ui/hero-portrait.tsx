"use client";

import { useEffect, useRef } from "react";

export function HeroPortrait() {
  const stageRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const portrait = portraitRef.current;
    const hero = stage?.closest("section");
    if (!stage || !portrait || !hero) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = 0;
    let visible = true;
    let start = 0;
    let distance = 1;
    let travel = 0;
    let current = 0;
    let target = 0;

    const paint = () => { portrait.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`; };
    const animate = (now: number) => {
      frame = 0;
      const elapsed = previousTime ? Math.min(now - previousTime, 64) : 16;
      previousTime = now;
      current += (target - current) * (1 - Math.exp(-elapsed / 85));
      if (Math.abs(target - current) < 0.1) current = target;
      paint();
      if (current !== target && visible) frame = requestAnimationFrame(animate);
      else previousTime = 0;
    };
    const update = () => {
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      target = motion.matches ? 0 : progress * travel;
      if (motion.matches || !visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        current = target;
        paint();
      } else if (!frame && current !== target) frame = requestAnimationFrame(animate);
    };
    const measure = () => {
      const bounds = stage.getBoundingClientRect();
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      // On stacked mobile layouts, let the entire portrait enter before hiding it.
      start = Math.max(heroTop, bounds.bottom + window.scrollY - window.innerHeight * 0.9);
      distance = Math.max(280, Math.min(bounds.height * 0.75, 560));
      travel = bounds.height + 60;
      update();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    const resize = new ResizeObserver(measure);
    measure();
    observer.observe(stage);
    resize.observe(hero);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    motion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      motion.removeEventListener("change", update);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-portrait-stage">
      <div className="portrait-orbits" aria-hidden="true" />
      <div ref={portraitRef} className="hero-portrait-motion">
        <img
          src="/images/prem-portrait-cutout.webp"
          alt="Prem Paudel wearing his graduation cap"
          width={1254}
          height={1254}
          fetchPriority="high"
          className="hero-portrait-cutout"
        />
      </div>
    </div>
  );
}
