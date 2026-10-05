"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".content-card, .contact-card"));
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      sections.forEach((section) => section.removeAttribute("data-reveal"));
      if (motion.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: "0px 0px -20px 0px" });
      sections.forEach((section) => {
        // Keep initially visible content and direct anchor destinations readable.
        if (section.getBoundingClientRect().top >= window.innerHeight && `#${section.id}` !== window.location.hash) {
          section.dataset.reveal = "pending";
          observer?.observe(section);
        }
      });
    };
    setup();
    motion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", setup);
      sections.forEach((section) => section.removeAttribute("data-reveal"));
    };
  }, []);

  return null;
}
