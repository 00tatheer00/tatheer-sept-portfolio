"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { cn } from "@/lib/utils";

interface Category {
  label: string;
  flow: string[];
}

const categories: Category[] = [
  { label: "SAAS", flow: ["Auth", "Tenancy", "API", "Database", "Cloud"] },
  { label: "BUSINESS SOFTWARE", flow: ["Workflow", "Data", "Integration", "Reports", "Scale"] },
  { label: "WEB APPLICATIONS", flow: ["Design", "Frontend", "API", "Backend", "Deploy"] },
  { label: "MOBILE APPLICATIONS", flow: ["UI/UX", "Logic", "API", "Storage", "Publish"] },
  { label: "APIs", flow: ["Schema", "Routes", "Auth", "Logic", "Docs"] },
  { label: "AI-POWERED SOLUTIONS", flow: ["Data", "Models", "Pipeline", "API", "Monitor"] },
  { label: "EDUCATION TECHNOLOGY", flow: ["Students", "Courses", "Trainers", "Progress", "Management"] },
];

/**
 * 09 — What I Build section.
 * Interactive category list where hovering reveals the system architecture flow.
 */
export function WhatIBuild() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="what-i-build"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <Container>
        <Reveal>
          <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Capabilities
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            What I Build
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-16 max-w-lg text-base text-[var(--color-foreground-secondary)] sm:mb-24">
            Every category is a complete system — from concept to deployment.
          </p>
        </Reveal>

        <div className="grid gap-0 lg:grid-cols-5">
          {/* Category list */}
          <div className="lg:col-span-3">
            {categories.map(({ label }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  data-cursor="view"
                  className={cn(
                    "group flex w-full items-center justify-between border-t border-[var(--color-border)] py-5 text-left transition-all duration-300 sm:py-7",
                    activeIndex === i
                      ? "border-[var(--color-accent)]/30"
                      : "hover:border-[var(--color-border-hover)]"
                  )}
                >
                  <span
                    className={cn(
                      "text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-2xl lg:text-3xl",
                      activeIndex === i
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-foreground)] group-hover:text-[var(--color-foreground)]"
                    )}
                  >
                    {label}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[0.6rem] tracking-widest transition-all duration-300",
                      activeIndex === i
                        ? "translate-x-0 text-[var(--color-accent)] opacity-100"
                        : "translate-x-2 text-[var(--color-foreground-subtle)] opacity-0"
                    )}
                  >
                    EXPLORE →
                  </span>
                </button>
              </Reveal>
            ))}
            {/* Bottom border */}
            <div className="border-t border-[var(--color-border)]" />
          </div>

          {/* Flow visualization (desktop) */}
          <div className="hidden items-center justify-center lg:col-span-2 lg:flex">
            <div className="relative flex min-h-[320px] w-full items-center justify-center rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <AnimatePresence mode="wait">
                {activeIndex !== null ? (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                    className="flex flex-col items-center gap-4 px-8 py-10"
                  >
                    {categories[activeIndex].flow.map((step, i) => (
                      <motion.div
                        key={step}
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldReduceMotion ? 0 : i * 0.08 }}
                        className="flex flex-col items-center"
                      >
                        <span className="rounded-[var(--radius-md)] border border-[var(--color-accent)]/20 bg-[var(--color-accent-subtle)] px-5 py-2 font-mono text-xs font-medium tracking-wider text-[var(--color-accent)]">
                          {step}
                        </span>
                        {i < categories[activeIndex].flow.length - 1 && (
                          <motion.span
                            initial={shouldReduceMotion ? {} : { opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: shouldReduceMotion ? 0 : i * 0.08 + 0.04 }}
                            className="mt-2 text-[0.5rem] text-[var(--color-accent)]"
                          >
                            ↓
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <p className="font-mono text-xs text-[var(--color-foreground-subtle)]">
                      Hover a category
                      <br />
                      to see the system
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
