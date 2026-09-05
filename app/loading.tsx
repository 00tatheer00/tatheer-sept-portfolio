export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center bg-[var(--color-background)]/60 backdrop-blur-sm pointer-events-none"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-ping" />
          <span>INITIALIZING VIEW...</span>
        </div>
      </div>
    </div>
  );
}
