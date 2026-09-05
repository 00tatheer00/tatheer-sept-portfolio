import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

/**
 * Small label/tag badge for categorization and status.
 */
export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium",
        "transition-colors duration-[var(--duration-fast)]",
        /* Variants */
        variant === "default" && [
          "bg-[var(--color-surface)] text-[var(--color-foreground-secondary)]",
          "border border-[var(--color-border)]",
        ],
        variant === "accent" && [
          "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
          "border border-[var(--color-accent-muted)]",
        ],
        variant === "outline" && [
          "bg-transparent text-[var(--color-foreground-muted)]",
          "border border-[var(--color-border)]",
        ],
        /* Sizes */
        size === "sm" &&
          "h-6 px-2.5 text-[0.6875rem] rounded-[var(--radius-md)]",
        size === "md" &&
          "h-7 px-3 text-xs rounded-[var(--radius-md)]",
        className
      )}
    >
      {children}
    </span>
  );
}
