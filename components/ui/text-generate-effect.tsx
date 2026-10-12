"use client";

import { motion, useInView, useReducedMotion, type Transition } from "motion/react";
import { type ElementType, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

export type TextGenerateEffectProps = {
  children: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  trigger?: boolean;
  staggerDuration?: number;
  transition?: Transition;
  filter?: boolean;
};

export function TextGenerateEffect({
  children,
  as = "p",
  className,
  wordClassName,
  trigger = true,
  staggerDuration = 0.1,
  transition = { duration: 0.5 },
  filter = true,
}: TextGenerateEffectProps) {
  const words = useMemo(() => children.split(" "), [children]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const MotionTag = useMemo(() => motion.create(as), [as]) as typeof motion.div;
  const reveal = reducedMotion || (trigger && inView);

  return (
    <MotionTag ref={ref} className={cn("inline-block", className)}>
      <span className="sr-only">{children}</span>
      {words.map((word, i) => (
        <motion.span
          animate={{
            filter: filter && !reducedMotion ? (reveal ? "blur(0px)" : "blur(4px)") : undefined,
            opacity: reveal ? 1 : 0,
          }}
          aria-hidden="true"
          className={cn("text-generate-word inline-block whitespace-pre", wordClassName)}
          initial={{ filter: filter ? "blur(4px)" : undefined, opacity: 0 }}
          key={`${i}-${word}`}
          transition={reducedMotion ? { duration: 0, delay: 0 } : {
            ...transition,
            delay: reveal ? i * staggerDuration : 0,
          }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
      <noscript><style>{`.text-generate-word { opacity: 1 !important; filter: none !important; }`}</style></noscript>
    </MotionTag>
  );
}

export default TextGenerateEffect;
