"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { educations } from "@/data/education";
import { achievements } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function EducationCredentials() {
  const shouldReduceMotion = useReducedMotion();
  const awsCert = achievements.find((a) => a.id === "aws-amplify-cert");
  const uopEdu = educations[0];

  return (
    <section
      id="credentials"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 relative"
    >
      <Container>
        <SectionHeading
          label="Academic & Cloud Credentials"
          title="FOUNDATION & CERTIFICATION"
          description="Rigorous collegiate computer science roots paired with verified cloud architecture credentials."
          className="mb-16"
        />

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 lg:grid-cols-12"
        >
          {/* Section 09: Education Card */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            className="lg:col-span-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="outline" size="sm" className="font-mono text-xs uppercase">
                  Academic Degree
                </Badge>
                <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
                  {uopEdu.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-1">
                {uopEdu.degree}
              </h3>

              <p className="text-sm font-mono text-[var(--color-accent)] mb-6">
                {uopEdu.institution}
              </p>

              <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                {uopEdu.description}
              </p>

              <div className="space-y-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-foreground-subtle)] block">
                  Curriculum Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures",
                    "Algorithm Analysis",
                    "OOP (C++ & Java)",
                    "Relational DBMS",
                    "Computer Architecture",
                    "Software Engineering",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-foreground-subtle)]">
              <span>Department of Computer Science</span>
              <span className="text-[var(--color-accent)]">Verified BCS</span>
            </div>
          </motion.div>

          {/* Section 10: AWS Amplify Certification Card */}
          {awsCert && (
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="lg:col-span-6 rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] to-blue-400"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="accent" size="sm" className="font-mono text-xs uppercase">
                    Official Cloud Credential
                  </Badge>
                  <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
                    Issued: {awsCert.date}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">☁️</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                    {awsCert.issuer}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
                  {awsCert.title}
                </h3>

                <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                  {awsCert.description}
                </p>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 space-y-2 font-mono text-xs text-[var(--color-foreground-muted)]">
                  <div className="flex items-center justify-between">
                    <span>Full-Stack Architecture</span>
                    <span className="text-[var(--color-accent)]">Validated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Serverless GraphQL / REST</span>
                    <span className="text-[var(--color-accent)]">Validated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cloud Cognito Auth & Storage</span>
                    <span className="text-[var(--color-accent)]">Validated</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--color-foreground-subtle)]">
                  Cloud Engineering Mastery
                </span>
                <span className="text-[var(--color-accent)] flex items-center gap-1 font-semibold">
                  <span>✓</span> Certified
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
