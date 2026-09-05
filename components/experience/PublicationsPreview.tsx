"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PublicationsPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-background)] relative">
      <Container>
        <SectionHeading
          label="Written Thoughts & Guidance"
          title="PUBLICATIONS & INSIGHTS"
          description="Documenting real-world problem-solving methodologies, tooling perspectives, and frontend engineering philosophy."
          className="mb-16"
        />

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]/80"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[0.65rem] text-[var(--color-foreground-subtle)]">
                  <span>{article.publishedDate}</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[var(--color-foreground)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)] mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-0.5 font-mono text-[0.6rem] text-[var(--color-foreground-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-xs font-mono text-[var(--color-accent)] font-medium">
                  <span>Read Article</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
