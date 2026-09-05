"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ArchitectureFlowNode } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectArchitectureMapProps {
  nodes: ArchitectureFlowNode[];
  title?: string;
  className?: string;
}

export function ProjectArchitectureMap({
  nodes,
  title = "System Architecture & Execution Flow",
  className,
}: ProjectArchitectureMapProps) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeNode = nodes[activeNodeIndex] ?? nodes[0];

  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10 relative overflow-hidden",
        className
      )}
    >
      {/* Header with Conceptual System Flow Label */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-[var(--color-border)]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              CONCEPTUAL SYSTEM FLOW
            </span>
            <span className="text-[var(--color-border)]">·</span>
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE TELEMETRY
            </span>
          </div>
          <h4 className="font-heading font-bold text-lg text-[var(--color-foreground)]">
            {title}
          </h4>
        </div>
        <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
          {nodes.length} Verified Architectural Nodes
        </span>
      </div>

      {/* Nodes Flow Track with Request -> Response Flow Indicator */}
      <div className="mb-8 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center justify-between gap-3 min-w-[620px]">
          {nodes.map((node, i) => {
            const isActive = i === activeNodeIndex;

            return (
              <div key={`${node.label}-${i}`} className="flex items-center gap-3 flex-1">
                <button
                  type="button"
                  onClick={() => setActiveNodeIndex(i)}
                  className={cn(
                    "flex-1 rounded-xl border p-3.5 text-center transition-all cursor-pointer relative group",
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 shadow-[0_0_20px_rgba(200,169,110,0.25)]"
                      : "border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-border-hover)]"
                  )}
                >
                  <div className="flex items-center justify-between mb-1 font-mono text-[0.6rem]">
                    <span className="text-[var(--color-accent)]">0{i + 1}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-ping" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "font-heading font-bold text-xs tracking-wider uppercase block truncate",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-foreground)] group-hover:text-[var(--color-foreground)]"
                    )}
                  >
                    {node.label}
                  </span>
                  {node.sublabel && (
                    <span className="font-mono text-[0.6rem] text-[var(--color-foreground-muted)] block truncate mt-0.5">
                      {node.sublabel}
                    </span>
                  )}
                </button>

                {i < nodes.length - 1 && (
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <span
                      aria-hidden="true"
                      className="text-[var(--color-accent)] font-mono text-xs"
                    >
                      ➔
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Node Detail Deep-Dive */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.label}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/90 p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
                NODE 0{activeNodeIndex + 1}:
              </span>
              <span className="font-heading font-bold text-base text-[var(--color-foreground)]">
                {activeNode.label}
              </span>
            </div>
            {activeNode.sublabel && (
              <span className="rounded bg-[var(--color-surface)] px-2.5 py-0.5 font-mono text-xs text-[var(--color-foreground-muted)] border border-[var(--color-border)]">
                {activeNode.sublabel}
              </span>
            )}
          </div>
          <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
            {activeNode.role}
          </p>

          <div className="mt-4 pt-3 border-t border-[var(--color-border)]/50 flex items-center justify-between font-mono text-[0.6rem] text-[var(--color-foreground-subtle)]">
            <span>PIPELINE POSITION: {activeNodeIndex + 1} OF {nodes.length}</span>
            <span>CONTRACT: STRICT VALIDATION</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
