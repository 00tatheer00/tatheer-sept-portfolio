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
}

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/**
 * Global Navigation Bar — Faithful to Reference Design.
 * Features STH monogram logo, centered link cluster, and gradient 'Let's Talk' CTA.
 */
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close mobile drawer on route change
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
          ? "bg-[#06080F]/90 backdrop-blur-md border-b border-[#1E293B]/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo (Reference: STH + S TATHEER HUSSAIN + Subtext) */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
        >
          <div className="font-heading text-xl sm:text-2xl font-black tracking-tight text-gradient-cyan-blue flex items-center">
            STH
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              S Tatheer Hussain
            </span>
            <span className="text-[0.62rem] text-[var(--color-foreground-muted)] tracking-wide">
              Engineer. Educator. Entrepreneur.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-[#1E293B] bg-[#0E1322]/80 px-4 py-1.5 backdrop-blur-md"
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
                  "relative px-3.5 py-1 text-xs font-medium transition-colors duration-200 rounded-full",
                  isActive
                    ? "text-white"
                    : "text-[#94A3B8] hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill-active"
                    className="absolute inset-0 rounded-full bg-[#1E293B]/90 border border-[#334155]/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Let's Talk ↗ */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full btn-gradient-violet px-4 py-1.5 text-xs font-semibold text-white tracking-wide"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-xs">↗</span>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E293B] bg-[#0E1322] text-white md:hidden"
          >
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
            className="overflow-hidden border-b border-[#1E293B] bg-[#06080F]/95 backdrop-blur-xl md:hidden"
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
                        ? "bg-[#0E1322] text-[#00D2FF] border border-[#1E293B]"
                        : "text-[#94A3B8] hover:bg-[#0E1322] hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-[#1E293B]">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-full btn-gradient-violet py-2.5 text-xs font-semibold text-white tracking-wider"
                >
                  Let&apos;s Talk ↗
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
