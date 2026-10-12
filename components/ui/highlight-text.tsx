import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  variant?: "lime" | "yellow" | "pink" | "cyan" | "orange";
}

const highlightVariants: Record<NonNullable<HighlightTextProps["variant"]>, string> = {
  lime: "bg-accent-green",
  yellow: "bg-yellow-300",
  pink: "bg-pink-300",
  cyan: "bg-cyan-300",
  orange: "bg-orange-300",
};

export function HighlightText({ children, className, variant = "lime" }: HighlightTextProps) {
  return (
    <span className="relative inline-block isolate px-1 font-medium text-slate-950">
      <span
        className={cn(
          "absolute inset-x-0 inset-y-[0.18em] scale-x-105 scale-y-90 -skew-y-1 rounded-[2px]",
          highlightVariants[variant],
          className,
        )}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}

export default HighlightText;
