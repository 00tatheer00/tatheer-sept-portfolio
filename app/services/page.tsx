import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections/Footer";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Production-tested full-stack web and SaaS engineering, API modernization, computer science instruction, and venture MVP scoping by S Tatheer Hussain.",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28 sm:pt-36">
      {/* Hero */}
      <section className="relative pb-16 sm:pb-24">
        <Container>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Capabilities & Offerings
            </span>

            <h1 className="mb-6 text-[clamp(2.25rem,5vw,4.5rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--color-foreground)]">
              Systems, Education &amp; Advisory.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-foreground-muted)] max-w-2xl">
              From enterprise SaaS engineering and database architecture to university lecturing and founder technical advisory. Here is how I collaborate with teams and organizations.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)]"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--color-foreground-subtle)] border border-[var(--color-border)] rounded px-2 py-0.5">
                      {service.shortTitle}
                    </span>
                  </div>

                  <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h2>

                  <p className="mb-8 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                    {service.description}
                  </p>

                  <div className="border-t border-[var(--color-border)] pt-6">
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                      Core Deliverables &amp; Focus:
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-foreground-muted)]"
                        >
                          <span className="text-[var(--color-accent)] font-mono">
                            ›
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] hover:text-white transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Philosophy */}
          <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Engineering Standard
              </span>
              <h3 className="mt-2 mb-4 text-xl sm:text-2xl font-bold text-[var(--color-foreground)]">
                Transparent Execution. Zero Fluff.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-foreground-muted)]">
                Whether writing high-throughput API endpoints, architecting full-stack Next.js applications, or training the next cohort of engineers, I prioritize code readability, testability, relational correctness, and practical business outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
