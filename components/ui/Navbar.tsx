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
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Global Capsule Navigation Bar — 1000% Matched to Reference Image.
 * Features:
 * - Left: Dark monogram rounded tile (TH) + "S Tatheer Hussain" + "Digital Product Engineer"
 * - Center: Frosted pill cluster with active white pill tab
 * - Right: Frosted glass pill button "Let's Talk ↗"
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
          ? "bg-white/75 backdrop-blur-xl border-b border-white/60 py-2.5 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo (Reference: Square badge with letter + Name + Subtitle) */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F172A] text-white font-bold text-sm shadow-sm transition-transform duration-200 group-hover:scale-105">
            TH
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-[#0F172A]">
              S Tatheer Hussain
            </span>
            <span className="text-[0.65rem] text-[#64748B] font-medium tracking-wide">
              Digital Product Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Centered Pill Container */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-white/80 bg-white/60 p-1 backdrop-blur-xl shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
        >
          {navLinks.map((item) => {
            const isHome = item.label === "Home";
            const isActive = isHome ? pathname === "/" : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full",
                  isActive
                    ? "text-[#0F172A] font-semibold"
                    : "text-[#64748B] hover:text-[#0F172A]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08)] border border-white"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
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
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/85 hover:bg-white text-[#0F172A] border border-white px-4 py-1.5 text-xs font-semibold shadow-[0_2px_10px_rgba(15,23,42,0.05)] transition-all duration-200 hover:scale-105"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-xs font-bold text-[#6366F1]">↗</span>
          </Link>

          {/* Mobile toggle button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/80 bg-white/70 text-[#0F172A] shadow-sm md:hidden"
          >
            <div className="flex flex-col gap-1.5 w-4">
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0F172A] transition-transform duration-200",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0F172A] transition-opacity duration-200",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0F172A] transition-transform duration-200",
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
            className="overflow-hidden border-b border-white/80 bg-white/95 backdrop-blur-2xl md:hidden shadow-lg"
          >
            <Container className="py-5 flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2 text-sm font-medium text-[#334155] hover:bg-indigo-50/60 hover:text-[#6366F1] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#94A3B8]">↗</span>
                </Link>
              ))}

              <div className="pt-2 border-t border-slate-100 mt-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-full bg-[#0F172A] py-2.5 text-xs font-semibold text-white tracking-wider shadow-md"
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
