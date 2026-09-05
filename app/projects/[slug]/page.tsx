import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ProjectArchitectureMap } from "@/components/projects/ProjectArchitectureMap";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} — Case Study | S Tatheer Hussain`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Technical Case Study | S Tatheer Hussain`,
      description: project.shortDescription,
      url: `https://tatheer.dev/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const cs = project.caseStudy;

  return (
    <>
      <main className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--color-background)]">
        <Container>
          {/* Breadcrumbs & Category */}
          <div className="flex items-center gap-3 mb-6 text-xs font-mono text-[var(--color-foreground-subtle)]">
            <Link
              href="/projects"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              ← Back to Project Lab
            </Link>
            <span>/</span>
            <span className="text-[var(--color-accent)]">Project {project.number}</span>
          </div>

          {/* Case Study Header Hero */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="accent" size="sm" className="font-mono text-xs uppercase">
                {project.categoryLabel}
              </Badge>
              {project.status && (
                <span className="font-mono text-xs text-[var(--color-foreground-muted)]">
                  Status: {project.status}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.08] mb-6">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[var(--color-foreground-muted)] font-light leading-relaxed mb-8">
              {project.tagline}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-xs">
              <div>
                <span className="text-[var(--color-foreground-subtle)] block mb-1">
                  My Role
                </span>
                <span className="text-[var(--color-foreground)] font-semibold">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-[var(--color-foreground-subtle)] block mb-1">
                  Context / Client
                </span>
                <span className="text-[var(--color-foreground)] font-semibold">
                  {project.clientContext ?? "Verified Engagement"}
                </span>
              </div>
              {project.year && (
                <div>
                  <span className="text-[var(--color-foreground-subtle)] block mb-1">
                    Timeline
                  </span>
                  <span className="text-[var(--color-foreground)] font-semibold">
                    {project.year}
                  </span>
                </div>
              )}
              <div>
                <span className="text-[var(--color-foreground-subtle)] block mb-1">
                  Domain
                </span>
                <span className="text-[var(--color-accent)] font-semibold">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* 10-Chapter Case Study Editorial Structure */}
          <div className="grid gap-12 lg:grid-cols-12 mb-24">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* 01 — OVERVIEW */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  01 · Overview
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  What is this system?
                </h2>
                <p className="text-base text-[var(--color-foreground-muted)] leading-relaxed">
                  {cs.overview}
                </p>
              </section>

              {/* 02 — THE CHALLENGE & OBJECTIVE */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 space-y-6">
                <div>
                  <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                    02 · The Challenge
                  </span>
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                    The Problem Space
                  </h2>
                  <p className="text-base text-[var(--color-foreground-muted)] leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                    03 · Objective
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[var(--color-foreground)] mb-3">
                    Target Execution Goal
                  </h3>
                  <p className="text-base text-[var(--color-foreground-muted)] leading-relaxed">
                    {cs.goal}
                  </p>
                </div>
              </section>

              {/* 04 — MY PERSONAL ROLE */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  04 · Personal Contribution
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  What Did I Personally Handle?
                </h2>
                <p className="text-base text-[var(--color-foreground-muted)] leading-relaxed">
                  {cs.myRole}
                </p>
              </section>

              {/* 05 — ARCHITECTURE VISUALIZATION */}
              <section className="space-y-4">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block">
                  05 · System Design
                </span>
                <ProjectArchitectureMap
                  nodes={cs.architectureFlow}
                  title={`${project.title} — System Flow`}
                />
                <p className="text-sm font-mono text-[var(--color-foreground-subtle)] px-2">
                  {cs.architectureOverview}
                </p>
              </section>

              {/* 06 — TECHNOLOGY BREAKDOWN */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  06 · Technology Stack
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-6">
                  Layered Implementation
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {cs.stackLayers.map((layer) => (
                    <div
                      key={layer.layer}
                      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-5"
                    >
                      <span className="font-mono text-xs text-[var(--color-accent)] font-semibold block mb-2">
                        {layer.layer}
                      </span>
                      <p className="text-xs text-[var(--color-foreground-muted)] mb-3">
                        {layer.purpose}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--color-foreground)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 07 — KEY FEATURES */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  07 · Deliverables
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-6">
                  What Was Actually Built?
                </h2>

                <div className="space-y-4">
                  {cs.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="border-l-2 border-[var(--color-accent)]/50 pl-4 py-1"
                    >
                      <h3 className="font-heading font-bold text-base text-[var(--color-foreground)] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 08 & 09 — CHALLENGES & SOLUTION */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 space-y-6">
                <div>
                  <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                    08 · Engineering Hurdles
                  </span>
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                    Challenges Encountered & Resolved
                  </h2>

                  <div className="space-y-4 mb-6">
                    {cs.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 space-y-2"
                      >
                        <div className="text-xs font-mono text-[var(--color-accent)] font-semibold">
                          CHALLENGE:
                        </div>
                        <p className="text-sm text-[var(--color-foreground)]">{c.problem}</p>
                        <div className="text-xs font-mono text-[var(--color-foreground-subtle)] font-semibold pt-2 border-t border-[var(--color-border)]">
                          RESOLUTION:
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--color-foreground-muted)]">
                          {c.resolution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                    09 · Synthesis
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[var(--color-foreground)] mb-3">
                    Architectural Solution
                  </h3>
                  <p className="text-base text-[var(--color-foreground-muted)] leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </section>

              {/* 10 — OUTCOME */}
              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  10 · Measurable Outcome
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  Documented Impact
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-foreground)] leading-relaxed">
                  {cs.outcome}
                </p>
              </section>

              {/* Optional Testimonial if verified */}
              {cs.testimonial && (
                <section className="rounded-3xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-6 sm:p-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block mb-3">
                    Verified Feedback
                  </span>
                  <blockquote className="text-lg sm:text-xl font-medium text-[var(--color-foreground)] italic leading-relaxed mb-4">
                    “{cs.testimonial.quote}”
                  </blockquote>
                  <div className="font-mono text-xs text-[var(--color-foreground-muted)]">
                    <span className="font-bold text-[var(--color-foreground)]">
                      {cs.testimonial.author}
                    </span>{" "}
                    · {cs.testimonial.role} ({cs.testimonial.context})
                  </div>
                </section>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 sticky top-28 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-2">
                    System Checklist
                  </span>
                  <div className="space-y-2 text-xs font-mono text-[var(--color-foreground-muted)]">
                    <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                      <span>Production Tested</span>
                      <span className="text-[var(--color-accent)] font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                      <span>Verified Client/Context</span>
                      <span className="text-[var(--color-accent)] font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-[var(--color-border)]">
                      <span>Zero Fake Metrics</span>
                      <span className="text-[var(--color-accent)] font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span>Documented Architecture</span>
                      <span className="text-[var(--color-accent)] font-semibold">✓</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-3">
                    All Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1 font-mono text-[0.65rem] text-[var(--color-foreground-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <Link
                    href="/experience#identity-synthesis"
                    className="block text-center rounded-xl bg-[var(--color-accent)] py-3 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
                  >
                    Discuss Similar System →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Adjacent Projects Navigation */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              <Link
                href={`/projects/${prev.slug}`}
                className="group p-4 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <span className="font-mono text-xs text-[var(--color-foreground-subtle)] block mb-1">
                  ← PREVIOUS SYSTEM
                </span>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                  {prev.title}
                </h4>
                <p className="text-xs font-mono text-[var(--color-foreground-muted)] mt-1">
                  {prev.categoryLabel}
                </p>
              </Link>

              <Link
                href={`/projects/${next.slug}`}
                className="group p-4 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors text-left sm:text-right"
              >
                <span className="font-mono text-xs text-[var(--color-foreground-subtle)] block mb-1">
                  NEXT SYSTEM →
                </span>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                  {next.title}
                </h4>
                <p className="text-xs font-mono text-[var(--color-foreground-muted)] mt-1">
                  {next.categoryLabel}
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
