"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactChannels() {
  const [copied, setCopied] = useState(false);
  const email = "tatheer@tatheer.dev";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Availability Status card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            Available for Select Collaborations
          </span>
        </div>
        <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
          Open to consulting on scalable SaaS architectures, technical advisory for startups, and engineering mentorship engagements.
        </p>
      </div>

      {/* Direct Email with Quick Copy */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm">
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] mb-2">
          Direct Email
        </span>
        <div className="flex items-center justify-between gap-3">
          <a
            href={`mailto:${email}`}
            className="font-mono text-base sm:text-lg font-semibold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 font-mono text-xs text-[var(--color-foreground-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            aria-label="Copy email address"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </div>

      {/* Verified Professional Channels */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm">
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] mb-4">
          Verified Networks
        </span>
        <div className="space-y-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/50 px-4 py-3 text-sm text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] transition-all group"
            >
              <span className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                {s.label}
              </span>
              <span className="font-mono text-xs text-[var(--color-foreground-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
                ↗
              </span>
            </a>
          ))}
          <a
            href="https://tatheer-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/50 px-4 py-3 text-sm text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] transition-all group"
          >
            <span className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
              Project Lab Archive (Vercel)
            </span>
            <span className="font-mono text-xs text-[var(--color-foreground-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Geographic / Timezone Context */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 backdrop-blur-sm">
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-foreground-subtle)] mb-1">
          Location & Timezone
        </span>
        <p className="font-mono text-xs text-[var(--color-foreground-muted)]">
          Peshawar, Pakistan · Pakistan Standard Time (PKT, UTC+5)
        </p>
        <p className="mt-1 text-xs text-[var(--color-foreground-subtle)]">
          Collaborating with remote teams across Europe, North America, and the Middle East.
        </p>
      </div>
    </div>
  );
}
