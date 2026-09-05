"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { achievements } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function AwardsRecognition() {
  const shouldReduceMotion = useReducedMotion();
  // Filter out certification since that is highlighted in the credentials section
  const nonCertAchievements = achievements.filter((a) => a.type !== "certification");

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-background)] relative">
      <Container>
        <SectionHeading
          label="Honors & Distinctions"
          title="AWARDS & RECOGNITIONS"
          description="Documented distinctions across pedagogical excellence, competitive algorithmic challenges, and collegiate academic merit."
          className="mb-16"
        />

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {nonCertAchievements.map((item) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/80"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge
                    variant={item.id === "smit-best-teacher-2025" ? "accent" : "outline"}
                    size="sm"
                    className="font-mono text-[0.65rem] uppercase tracking-wider"
                  >
                    {item.type}
                  </Badge>
                  <span className="font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[var(--color-foreground)] mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-[var(--color-accent)] mb-4">
                  {item.issuer}
                </p>

                <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[var(--color-border)] flex items-center justify-between font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                <span>Verified Distinction</span>
                <span className="text-[var(--color-accent)]">✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
