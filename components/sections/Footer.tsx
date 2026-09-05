"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Architecture", href: "/experience#system-architecture" },
  { label: "Teaching", href: "/experience#teaching-ecosystem" },
  { label: "Contact", href: "/contact" },
];

/**
 * 14 — Footer.
 * Premium footer with identity, navigation, and social links.
 */
export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Main footer content */}
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: Identity */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
                S TATHEER HUSSAIN
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mb-6 flex gap-2">
                {profile.identityLabels.map((label, i) => (
                  <span key={label}>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {label}
                    </span>
                    {i < profile.identityLabels.length - 1 && (
                      <span className="ml-2 text-[var(--color-border)]">·</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-sm text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                {profile.shortBio}
              </p>
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
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <motion.li
                    key={label}
                    variants={shouldReduceMotion ? undefined : fadeInUp}
                  >
                    <Link
                      href={href}
                      className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-200 hover:text-[var(--color-foreground)]"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Right: Social + Contact */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
              Connect
            </p>
            <ul className="mb-6 space-y-3">
              {profile.socials.map(({ label, url }) => (
                <motion.li
                  key={label}
                  variants={shouldReduceMotion ? undefined : fadeInUp}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                  >
                    {label}
                    <span className="ml-1 text-[0.6rem] text-[var(--color-foreground-subtle)]">
                      ↗
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={shouldReduceMotion ? undefined : fadeInUp}>
              <p className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)]">
                Website
              </p>
              <a
                href="https://tatheer.dev"
                className="text-sm text-[var(--color-foreground-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                tatheer.dev
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="font-mono text-[0.6rem] text-[var(--color-foreground-subtle)]">
            © {currentYear} S Tatheer Hussain. All rights reserved.
          </p>
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[var(--color-foreground-subtle)]/50">
            Peshawar, Pakistan
          </p>
        </Container>
      </div>
    </footer>
  );
}
