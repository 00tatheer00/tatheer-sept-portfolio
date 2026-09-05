"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // In production, error telemetry can be sent to a monitoring service here
  }, [error]);

  return (
    <main className="flex min-h-dvh items-center justify-center py-20 bg-[var(--color-background)]">
      <Container size="narrow" className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />
          SYS.EXCEPTION // RECOVERY PROTOCOL ACTIVE
        </div>

        <h1 className="mb-4 text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
          Unexpected System Anomaly.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm text-[var(--color-foreground-muted)] leading-relaxed font-mono">
          The runtime encountered an unhandled exception. The component subtree has been isolated to protect session stability.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-11 items-center rounded-xl bg-[var(--color-accent)] px-6 font-mono text-xs uppercase tracking-wider font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
          >
            Reinitialize Session
          </button>
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
