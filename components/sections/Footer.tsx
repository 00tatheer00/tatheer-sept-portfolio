"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/**
 * 13 — Footer (Rebuilt).
 * The final chapter: S TATHEER HUSSAIN · ENGINEER. EDUCATOR. ENTREPRENEUR.
 * Concise closing message with social and navigational clarity.
 */
export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Main footer content */}
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: Identity & Closing Chapter */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
                S TATHEER HUSSAIN
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent)] font-semibold">
                ENGINEER. EDUCATOR. ENTREPRENEUR.
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-foreground-muted)] mb-6">
                Architecting resilient production software, educating hundreds of future engineers, and building enduring technology ventures from Peshawar, Pakistan to international partners.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Available for high-impact advisory &amp; engineering</span>
              </div>
            </Reveal>
          </div>

          {/* Center: Navigation */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map(({ label, href }) => (
                  <motion.li
                    key={label}
                    variants={shouldReduceMotion ? undefined : fadeInUp}
                  >
                    <Link
                      href={href}
                      className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Right: Connect */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
              Connect &amp; Verify
            </p>
            <ul className="mb-6 space-y-2.5">
              {profile.socials.map(({ label, url }) => (
                <motion.li
                  key={label}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-200 hover:text-[var(--color-accent)] inline-flex items-center gap-1.5"
                  >
                    <span>{label}</span>
                    <span className="text-[0.65rem] text-[var(--color-foreground-subtle)]">↗</span>
                  </a>
                </motion.li>
              ))}
              <motion.li variants={shouldReduceMotion ? undefined : fadeInUp}>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--color-accent)] transition-colors duration-200 hover:text-white"
                >
                  Direct Inquiry →
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="font-mono text-[0.6rem] text-[var(--color-foreground-subtle)]">
            © {currentYear} S Tatheer Hussain. All rights reserved.
          </p>
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]/70">
            Peshawar, Pakistan · 34.0151° N, 71.5249° E
          </p>
        </Container>
      </div>
    </footer>
  );
}
