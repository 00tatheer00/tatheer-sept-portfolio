import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/sections/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <main className="flex min-h-[70vh] items-center justify-center pt-32 pb-24 bg-[var(--color-background)]">
        <Container size="narrow" className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] block mb-4">
            System Lookup Error · 404
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
            PROJECT NOT FOUND.
          </h1>

          <p className="text-sm sm:text-base text-[var(--color-foreground-muted)] max-w-md mx-auto mb-8 font-mono">
            The requested engineering system case study does not exist in the verified project registry.
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
          >
            <span>Return to Project Lab</span>
            <span className="font-mono">→</span>
          </Link>
        </Container>
      </main>

      <Footer />
    </>
  );
}
