"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const activationLine = Math.max(
        (navRef.current?.getBoundingClientRect().bottom ?? 72) + 24,
        window.innerHeight * 0.28,
      );
      let current = "";
      for (const { id } of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) current = id;
      }
      // A short final section may not reach the activation line before page end.
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = "contact";
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Main navigation" className="site-nav">
      <div className="nav-inner">
        <div className="flex items-center gap-1 text-sm text-stone-600">
          {sections.slice(0, -1).map(({ id, label }) => (
            <a key={id} className="nav-link" href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact" aria-current={activeSection === "contact" ? "location" : undefined}>Contact</a>
      </div>
    </nav>
  );
}
