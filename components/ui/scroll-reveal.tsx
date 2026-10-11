"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".portfolio-sections h2, #about .mt-7 > div, .about-quote, #education article, .experience-entry, [data-glow], .skill-card, .contact-details"));
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      sections.forEach((section) => { section.removeAttribute("data-reveal"); section.style.removeProperty("--reveal-delay"); });
      if (motion.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
      sections.forEach((section) => {
        // Keep initially visible content and direct anchor destinations readable.
        if (section.getBoundingClientRect().top >= window.innerHeight && `#${section.closest("section")?.id}` !== window.location.hash) {
          section.dataset.reveal = "pending";
          const siblings = Array.from(section.parentElement?.children ?? []);
          section.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(section), 2) * 90}ms`);
          observer?.observe(section);
        }
      });
    };
    setup();
    motion.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", setup);
      sections.forEach((section) => { section.removeAttribute("data-reveal"); section.style.removeProperty("--reveal-delay"); });
    };
  }, []);

  return null;
}
