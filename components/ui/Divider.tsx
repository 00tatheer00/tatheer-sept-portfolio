import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  /** Show accent dot in the center */
  accent?: boolean;
  /** Vertical spacing */
  spacing?: "sm" | "md" | "lg";
}

/**
 * Visual separator between content blocks.
 */
export function Divider({
  className,
  accent = false,
  spacing = "md",
}: DividerProps) {
  const spacingStyles = {
    sm: "my-6",
    md: "my-10",
    lg: "my-16",
  };

  if (accent) {
    return (
      <div
        className={cn(
          "flex items-center gap-4",
          spacingStyles[spacing],
          className
        )}
        role="separator"
        aria-hidden="true"
      >
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </div>
    );
  }

  return (
    <hr
      className={cn(
        "border-none h-px bg-[var(--color-border)]",
        spacingStyles[spacing],
        className
      )}
      aria-hidden="true"
    />
  );
}
