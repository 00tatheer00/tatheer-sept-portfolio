import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Render as a link */
  href?: string;
  /** External link (opens new tab) */
  isExternal?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-foreground)] text-[var(--color-background)]",
    "hover:bg-[var(--color-foreground)]/90",
    "active:bg-[var(--color-foreground)]/80",
  ].join(" "),
  secondary: [
    "border border-[var(--color-border)] bg-transparent",
    "text-[var(--color-foreground)]",
    "hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-foreground-secondary)]",
    "hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]",
  ].join(" "),
  accent: [
    "bg-[var(--color-accent)] text-[var(--color-background)]",
    "hover:bg-[var(--color-accent-hover)]",
    "active:bg-[var(--color-accent)]/80",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-[var(--radius-md)]",
  md: "h-10 px-5 text-sm gap-2 rounded-[var(--radius-md)]",
  lg: "h-12 px-7 text-base gap-2.5 rounded-[var(--radius-lg)]",
};

/**
 * Polymorphic button component — renders as <button> or <Link>.
 * Supports four visual variants and three sizes.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  const sharedStyles = cn(
    "inline-flex items-center justify-center font-medium",
    "transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedStyles}
          {...linkProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={sharedStyles} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={sharedStyles} {...buttonProps}>
      {children}
    </button>
  );
}
