"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { profile } from "@/data/profile";

const recommendationThemes = [
  {
    theme: "Pedagogical Clarity",
    icon: "💡",
    highlight: "Deconstructing Complex Concepts",
    note: "Consistently recognized for transforming intimidating computational and full-stack topics into intuitive, accessible mental models.",
  },
  {
    theme: "Technical Depth",
    icon: "⚡",
    highlight: "End-to-End System Competence",
    note: "Endorsed for thorough engineering execution spanning client-side reactivity, backend API design, and database normalization.",
  },
  {
    theme: "Dedicated Mentorship",
    icon: "🤝",
    highlight: "Student & Peer Growth",
    note: "Valued by aspiring engineers for actionable career advice, code reviews, and unwavering commitment to student success.",
  },
  {
    theme: "Professional Execution",
    icon: "🎯",
    highlight: "Integrity & Communication",
    note: "Acknowledged by institutional peers and founders for reliable delivery, structured workflows, and proactive communication.",
  },
];

export function RecommendationsTrust() {
  const shouldReduceMotion = useReducedMotion();
  const linkedinUrl =
    profile.socials.find((s) => s.label === "LinkedIn")?.url ??
    "https://linkedin.com/in/tatheer-hussain";

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 relative">
      <Container>
        <SectionHeading
          label="Peer & Student Endorsements"
          title="RECOMMENDATIONS & TRUST"
          description="Transparent, independently verified endorsements on LinkedIn reflecting teaching impact, software engineering capabilities, and professional reliability."
          className="mb-16"
        />

        {/* 4 Endorsement Pillars Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14"
        >
          {recommendationThemes.map((item) => (
            <motion.div
              key={item.theme}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <Badge variant="outline" size="sm" className="font-mono text-[0.65rem] mb-2 uppercase">
                  {item.theme}
                </Badge>
                <h4 className="font-heading font-bold text-base text-[var(--color-foreground)] mb-2">
                  {item.highlight}
                </h4>
                <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                  {item.note}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[var(--color-border)] font-mono text-[0.65rem] text-[var(--color-accent)]">
                Verified LinkedIn Endorsement
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Direct Pathway to LinkedIn */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block mb-1">
              Social Proof & Integrity
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--color-foreground)]">
              10+ Verified Recommendations on LinkedIn
            </h3>
            <p className="text-sm text-[var(--color-foreground-muted)] max-w-xl mt-1">
              Read uncensored testimonials and recommendations directly on LinkedIn from students, university colleagues, and industry peers.
            </p>
          </div>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_25px_rgba(200,169,110,0.3)]"
          >
            <span>View Verified Endorsements</span>
            <span className="font-mono">↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
