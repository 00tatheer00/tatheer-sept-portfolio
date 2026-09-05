import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects";
import { ProjectLabClient } from "@/components/projects/ProjectLabClient";

export const metadata: Metadata = {
  title: "Project Lab — Systems I've Built | S Tatheer Hussain",
  description:
    "Explore the Digital Engineering Lab of S Tatheer Hussain: Deep-dive case studies across education platforms, enterprise ERP systems, SaaS architectures, and API modernizations.",
  openGraph: {
    title: "Project Lab — Systems I've Built | S Tatheer Hussain",
    description:
      "Real software systems designed, engineered, and delivered. Full-stack case studies with architecture visualizations and verified outcomes.",
    url: "https://tatheer.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--color-background)]">
        <Container>
          {/* Lab Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] mb-5">
              <span className="flex items-center gap-1.5 rounded border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                SYS.REGISTRY // 07 VERIFIED ARCHITECTURES
              </span>
              <span className="hidden sm:inline text-[var(--color-foreground-subtle)]">·</span>
              <span className="hidden sm:inline text-[var(--color-foreground-subtle)]">34.0151° N, 71.5249° E</span>
              <span className="hidden sm:inline text-[var(--color-foreground-subtle)]">·</span>
              <span className="text-emerald-400">STATUS: ONLINE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.05] mb-6">
              SYSTEMS I&apos;VE <br />
              <span className="text-[var(--color-accent)]">BUILT</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-foreground-muted)] font-light leading-relaxed">
              From institutional learning management systems to enterprise operations software, SaaS platforms and high-throughput APIs. Real production systems engineered for reliability, modular architectures, and verifiable impact.
            </p>
          </div>

          {/* Interactive Project Lab Client (Filter + Alternating Layouts) */}
          <ProjectLabClient initialProjects={projects} />

          {/* Bottom Conversion Section */}
          <div className="mt-28 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-14 text-center relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]"
              aria-hidden="true"
            />

            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block mb-3">
              Collaboration &amp; Engineering
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
              HAVE A PROBLEM WORTH SOLVING? <br />
              <span className="text-[var(--color-accent)]">LET&apos;S BUILD IT.</span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] max-w-xl mx-auto mb-8">
              Whether you need to architect a new multi-tenant SaaS platform, stabilize a critical API layer, or digitize complex operational workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_30px_rgba(200,169,110,0.3)]"
              >
                Start A Project →
              </Link>
              <Link
                href="/experience"
                className="w-full sm:w-auto rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-8 py-3.5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)]/50"
              >
                Inspect Professional Experience
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
