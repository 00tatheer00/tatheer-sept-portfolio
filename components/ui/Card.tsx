import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Apply hover effect */
  interactive?: boolean;
  /** Card padding size */
  padding?: "sm" | "md" | "lg" | "none";
  as?: "div" | "article" | "li";
}

/**
 * Flexible card container with subtle border and optional hover state.
 */
export function Card({
  children,
  className,
  interactive = false,
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--color-border)]",
        "bg-[var(--color-card)]",
        "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
        interactive && [
          "hover:border-[var(--color-border-hover)]",
          "hover:bg-[var(--color-card-hover)]",
          "hover:shadow-[var(--shadow-md)]",
        ],
        padding === "sm" && "p-4",
        padding === "md" && "p-6",
        padding === "lg" && "p-8 sm:p-10",
        padding === "none" && "p-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}
