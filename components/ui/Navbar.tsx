"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-background)]/85 backdrop-blur-md border-b border-[var(--color-border)] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-[var(--color-foreground)] transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-xs font-bold text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/40 group-hover:bg-[var(--color-accent)]/10">
            TH
          </span>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-foreground-muted)] group-hover:text-[var(--color-foreground)] transition-colors">
            S Tatheer Hussain
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1.5 backdrop-blur-sm"
        >
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full flex items-center gap-1.5",
                  isActive
                    ? "text-[var(--color-foreground)]"
                    : "text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {item.badge && (
                  <span className="relative z-10 rounded px-1 py-0.2 text-[0.55rem] font-mono uppercase tracking-wider bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-medium text-[var(--color-accent)] transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:shadow-[0_0_20px_rgba(200,169,110,0.3)]"
          >
            Connect
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] md:hidden hover:border-[var(--color-border-hover)]"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5 w-4">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform duration-200",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-opacity duration-200",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform duration-200",
                  isOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl md:hidden"
          >
            <Container className="py-6 flex flex-col gap-3">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[var(--color-surface)] text-[var(--color-accent)] border border-[var(--color-border)]"
                        : "text-[var(--color-foreground-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="rounded px-1.5 py-0.5 text-[0.6rem] font-mono uppercase tracking-wider bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-[var(--color-border)]">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-lg bg-[var(--color-accent)] py-2.5 text-xs font-semibold text-[var(--color-background)]"
                >
                  Connect &amp; Inquire
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
