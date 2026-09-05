import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About — S Tatheer Hussain",
  description:
    "The story, values, and vision of S Tatheer Hussain: Software Engineer, Technical Educator, University Lecturer, and Technology Founder.",
  openGraph: {
    title: "About — S Tatheer Hussain",
    description:
      "Bridging computational systems, developer education, and technology entrepreneurship in Peshawar, Pakistan.",
    url: "https://tatheer.dev/about",
  },
};

const personalPrinciples = [
  {
    title: "Architectural Integrity",
    description:
      "Code is temporary; system design and data models endure. I prioritize clean domain boundaries, strict typing, and maintainable architectures over quick hacks.",
  },
  {
    title: "Knowledge Multiplication",
    description:
      "Engineering knowledge is most powerful when shared. Training 500+ developers has sharpened my ability to explain, design, and lead with clarity.",
  },
  {
    title: "Empirical Pragmatism",
    description:
      "Technology choices must serve real human problems and business viability, not resume vanity. Pragmatic execution beats theoretical complexity every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--color-background)]">
        <Container>
          {/* Eyebrow & Hero Title */}
          <div className="max-w-3xl mb-16">
            <Badge variant="accent" size="sm" className="font-mono uppercase tracking-widest mb-4">
              Biographical Narrative
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--color-foreground)] leading-tight mb-6">
              THE STORY BEHIND <br />
              <span className="text-[var(--color-accent)]">THE THREE IDENTITIES</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-foreground-muted)] font-light leading-relaxed">
              Based in Peshawar, Pakistan, S Tatheer Hussain operates at the convergence of
              production software engineering, university pedagogy, and technology venture
              leadership.
            </p>
          </div>

          {/* Editorial Narrative Split */}
          <div className="grid gap-12 lg:grid-cols-12 mb-20">
            {/* Story Chapters */}
            <div className="lg:col-span-8 space-y-8 text-base text-[var(--color-foreground-muted)] leading-relaxed">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  Chapter 01 · The Craft
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  The Foundations of an Engineer
                </h2>
                <p className="mb-4">
                  My software journey began with the fundamentals of Computer Science at the
                  University of Peshawar. Long before modern JavaScript frameworks dominated the
                  landscape, I immersed myself in data structures, memory management, and algorithmic
                  reasoning using C++ and Java.
                </p>
                <p>
                  That foundation shaped how I perceive engineering today: not as stitching together
                  external libraries, but as systematic domain modeling, edge case anticipation, and
                  resilient architecture.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  Chapter 02 · The Calling
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  Multiplying Impact Through Education
                </h2>
                <p className="mb-4">
                  As I gained production experience, I observed a critical disconnect: university
                  curricula often lagged behind production standards, while aspiring developers lacked
                  the structured guidance to build real-world systems.
                </p>
                <p>
                  This led me into high-impact teaching at Saylani Mass IT Training (SMIT), NAVTTC,
                  and as a Visiting Lecturer at the University of Peshawar. Mentoring over 500
                  students reinforced my belief that true mastery is demonstrated by the ability to
                  explain complex abstractions simply and reliably.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
                <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                  Chapter 03 · The Ventures
                </span>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-foreground)] mb-4">
                  Building Tech4Edges & EEST
                </h2>
                <p className="mb-4">
                  Teaching and consulting naturally evolved into venture building. As Founder & CEO
                  of Tech4Edges, I partner with companies to engineer custom SaaS applications and
                  intelligent workflow automations.
                </p>
                <p>
                  Simultaneously, as Director of Emerging Edge School of Technology (EEST), I
                  personally architected our custom LMS portal—transforming our educational vision
                  into a scalable, living digital infrastructure.
                </p>
              </div>
            </div>

            {/* Quick Profile Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] block mb-4">
                  Profile Snapshot
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-[var(--color-foreground-subtle)] block">Name:</span>
                    <span className="text-[var(--color-foreground)] font-bold text-sm">
                      {profile.fullName}
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--color-foreground-subtle)] block">Location:</span>
                    <span className="text-[var(--color-foreground)]">
                      {profile.location.city}, {profile.location.country}
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--color-foreground-subtle)] block">Education:</span>
                    <span className="text-[var(--color-foreground)]">
                      Bachelor of Computer Science, UoP
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--color-foreground-subtle)] block">Ventures:</span>
                    <span className="text-[var(--color-accent)]">Tech4Edges & EEST</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--color-border)]">
                  <Link
                    href="/experience"
                    className="block text-center rounded-xl bg-[var(--color-accent)] py-2.5 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
                  >
                    View Experience Timeline →
                  </Link>
                </div>
              </div>

              {/* Guiding Principles */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block">
                  Guiding Principles
                </span>
                {personalPrinciples.map((principle) => (
                  <div key={principle.title} className="space-y-1">
                    <h3 className="font-heading font-bold text-xs text-[var(--color-foreground)]">
                      {principle.title}
                    </h3>
                    <p className="text-[0.75rem] text-[var(--color-foreground-muted)] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deep Navigation Pathways */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
              Explore the Depths of the Work
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] max-w-xl mx-auto mb-8">
              Dive into the verified 16-chapter professional timeline or review recent architectural case studies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/experience#career-evolution"
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold text-[var(--color-background)]"
              >
                Explore Career Evolution
              </Link>
              <Link
                href="/experience#system-architecture"
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-6 py-3 text-xs font-semibold text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50"
              >
                Inspect System Architecture
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-6 py-3 text-xs font-semibold text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50"
              >
                Visit Project Lab
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
