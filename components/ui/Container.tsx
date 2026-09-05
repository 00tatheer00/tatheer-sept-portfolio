import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** "default" = 1280px, "wide" = 1440px, "narrow" = 720px */
  size?: "default" | "wide" | "narrow";
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
}

/**
 * Responsive content container with consistent horizontal padding.
 * Constrains content width and centers it horizontally.
 */
export function Container({
  children,
  size = "default",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-[var(--container-max)]",
        size === "wide" && "max-w-[var(--container-wide)]",
        size === "narrow" && "max-w-[var(--container-narrow)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
