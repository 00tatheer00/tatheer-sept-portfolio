import { cn } from "@/lib/utils";
import { Container } from "./Container";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: "default" | "wide" | "narrow";
  /** Extra spacing above/below */
  spacing?: "default" | "compact" | "large";
  /** Apply background variant */
  background?: "default" | "alt" | "surface";
  /** Skip container wrapper (useful for full-bleed layouts) */
  fullBleed?: boolean;
}

/**
 * Page section with consistent vertical spacing and optional container.
 * Use for every major content block.
 */
export function Section({
  children,
  id,
  className,
  containerSize = "default",
  spacing = "default",
  background = "default",
  fullBleed = false,
}: SectionProps) {
  const spacingStyles = {
    compact: "py-12 sm:py-16 lg:py-20",
    default: "py-20 sm:py-24 lg:py-32",
    large: "py-28 sm:py-32 lg:py-40",
  };

  const bgStyles = {
    default: "",
    alt: "bg-[var(--color-background-alt)]",
    surface: "bg-[var(--color-surface)]",
  };

  return (
    <section
      id={id}
      className={cn(spacingStyles[spacing], bgStyles[background], className)}
    >
      {fullBleed ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}
