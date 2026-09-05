"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberCounter } from "@/components/animation/NumberCounter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const verifiedMetrics = [
  {
    value: 500,
    suffix: "+",
    label: "MERN Stack Students Mentored",
    category: "Developer Training",
    description:
      "Trained across SMIT, NAVTTC, and technology bootcamps in full-stack JavaScript.",
  },
  {
    value: 200,
    suffix: "+",
    label: "EEST Module 1 Graduates",
    category: "EdTech Platform",
    description:
      "Developers successfully certified through the self-built EEST LMS curriculum.",
  },
  {
    value: 15,
    suffix: "K+",
    label: "LinkedIn Professional Reach",
    category: "Thought Leadership",
    description:
      "Developers, students, and engineers actively following tech insights and career roadmaps.",
  },
  {
    value: 500,
    suffix: "+",
    label: "Industry Professional Connections",
    category: "Global Network",
    description:
      "Active network of software engineers, founders, recruiters, and tech leaders.",
  },
  {
    value: 10,
    suffix: "",
    label: "Verified Recommendations",
    category: "Peer & Student Trust",
    description:
      "Endorsements on LinkedIn highlighting technical depth, clarity, and reliability.",
  },
];

export function ImpactMetrics() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-background)] relative">
      <Container>
        <SectionHeading
          label="Quantifiable Impact"
          title="VERIFIED NUMBERS. REAL OUTCOMES."
          description="Every metric represents documented reality across students instructed, platform adoption, and community engagement."
          className="mb-16"
        />

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {verifiedMetrics.map((item) => (
            <motion.div
              key={item.label}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]/80"
            >
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] block mb-4">
                  {item.category}
                </span>

                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--color-foreground)] tracking-tight mb-2 flex items-baseline">
                  <NumberCounter value={item.value} suffix={item.suffix} />
                </div>

                <h3 className="font-heading font-semibold text-sm sm:text-base text-[var(--color-foreground)] mb-3">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed pt-4 border-t border-[var(--color-border)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
