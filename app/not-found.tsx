import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center py-20">
      <Container size="narrow" className="text-center">
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          404 · Error State
        </span>

        <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
          Not Everything Exists.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm text-[var(--color-foreground-muted)] leading-relaxed">
          The requested route is outside this system&apos;s active index or has been relocated.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-xl bg-[var(--color-accent)] px-6 font-mono text-xs uppercase tracking-wider font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
          >
            Return Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
          >
            Explore Projects
          </Link>
        </div>
      </Container>
    </main>
  );
}
