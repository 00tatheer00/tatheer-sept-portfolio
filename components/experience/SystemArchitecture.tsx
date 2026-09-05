"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { systemLayers } from "@/data/skills";
import { cn } from "@/lib/utils";

const systemFlowNodes = [
  { id: "frontend", shortLabel: "CLIENT / UI", pipelineName: "UI", icon: "💻" },
  { id: "backend", shortLabel: "SERVER & APIS", pipelineName: "API & BACKEND", icon: "⚙️" },
  { id: "database", shortLabel: "DATA PERSISTENCE", pipelineName: "DATABASE", icon: "🗄️" },
  { id: "cloud", shortLabel: "CLOUD & DEVOPS", pipelineName: "CLOUD", icon: "☁️" },
  { id: "ai", shortLabel: "AI INTELLIGENCE", pipelineName: "AI SERVICES", icon: "⚡" },
  { id: "testing", shortLabel: "QA & TESTING", pipelineName: "TESTING", icon: "🛡️" },
  { id: "tools", shortLabel: "DEV WORKFLOW", pipelineName: "TOOLING", icon: "🛠️" },
];

const corePipeline = [
  { id: "frontend", label: "UI", role: "Client Application & Micro-interactions" },
  { id: "backend", label: "API", role: "Contracts, Gateway & Route Handlers" },
  { id: "backend", label: "BACKEND", role: "Business Logic, Services & Auth" },
  { id: "database", label: "DATABASE", role: "Normalized Persistence & Caching" },
  { id: "cloud", label: "CLOUD", role: "Edge Delivery, CI/CD & Scaling" },
];

export function SystemArchitecture() {
  const [activeLayerId, setActiveLayerId] = useState("frontend");
  const shouldReduceMotion = useReducedMotion();

  const currentLayer =
    systemLayers.find((l) => l.id === activeLayerId) ?? systemLayers[0];

  return (
    <section
      id="system-architecture"
      className="py-24 md:py-32 border-b border-[var(--color-border)] bg-[var(--color-surface)]/20 relative"
    >
      <Container>
        <SectionHeading
          label="Full-Stack Technical Depth"
          title="SYSTEM ARCHITECTURE & EXPERTISE"
          description="Software engineered as cohesive, distributed systems—not disconnected libraries. No artificial percentages, just deep end-to-end architectural capability."
          className="mb-14"
        />

        {/* Dynamic System Relationship Pipeline: UI ↓ API ↓ BACKEND ↓ DATABASE ↓ CLOUD */}
        <div className="mb-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold block mb-1">
                End-to-End Execution Pipeline
              </span>
              <h3 className="font-heading font-bold text-lg text-[var(--color-foreground)]">
                The Architectural Data Loop
              </h3>
            </div>
            <p className="font-mono text-xs text-[var(--color-foreground-muted)] max-w-md text-center md:text-right">
              Systems-level thinking: Every layer has explicit contracts and zero ambiguity.
            </p>
          </div>

          {/* Interactive Pipeline Track */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {corePipeline.map((node, i) => {
              const isLayerActive = node.id === activeLayerId;

              return (
                <div key={`${node.label}-${i}`} className="relative flex flex-col">
                  <div
                    onClick={() => setActiveLayerId(node.id)}
                    className={cn(
                      "cursor-pointer rounded-xl border p-4 transition-all text-center flex-1 flex flex-col justify-center",
                      isLayerActive
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 shadow-[0_0_20px_rgba(200,169,110,0.25)]"
                        : "border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-border-hover)]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-heading font-extrabold text-sm sm:text-base tracking-wider mb-1 block",
                        isLayerActive
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-foreground)]"
                      )}
                    >
                      {node.label}
                    </span>
                    <span className="text-[0.65rem] font-mono text-[var(--color-foreground-muted)] leading-tight">
                      {node.role}
                    </span>
                  </div>

                  {/* Flow Arrow Between Blocks */}
                  {i < corePipeline.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 font-mono text-xs text-[var(--color-accent)] pointer-events-none"
                    >
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Layer Selector Ribbon */}
        <div className="mb-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3 sm:p-4">
          <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2 sm:pb-0 scrollbar-none">
            {systemFlowNodes.map((node, i) => {
              const isActive = node.id === activeLayerId;

              return (
                <div key={node.id} className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveLayerId(node.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-mono transition-all",
                      isActive
                        ? "bg-[var(--color-accent)] text-[var(--color-background)] font-bold shadow-[0_0_15px_rgba(200,169,110,0.3)]"
                        : "bg-[var(--color-background)] text-[var(--color-foreground-muted)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-foreground)] border border-[var(--color-border)]"
                    )}
                  >
                    <span>{node.icon}</span>
                    <span>{node.shortLabel}</span>
                  </button>

                  {/* Flow arrow */}
                  {i < systemFlowNodes.length - 1 && (
                    <span className="hidden lg:inline text-[var(--color-foreground-subtle)] font-mono text-xs">
                      ➔
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Layer System Deep-Dive */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLayer.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 lg:p-12 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--color-border)]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider">
                      System Layer
                    </span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span className="font-mono text-xs text-[var(--color-foreground-subtle)]">
                      Tier {systemLayers.findIndex((l) => l.id === currentLayer.id) + 1} of{" "}
                      {systemLayers.length}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
                    {currentLayer.name}
                  </h3>
                </div>

                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--color-foreground-subtle)] block">
                    Architectural Stance
                  </span>
                  <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
                    {currentLayer.tagline}
                  </span>
                </div>
              </div>

              {/* Layer Description */}
              <p className="text-base sm:text-lg text-[var(--color-foreground-muted)] leading-relaxed mb-8 max-w-3xl">
                {currentLayer.description}
              </p>

              {/* Skills Grid */}
              <div className="mb-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-foreground-subtle)] mb-4">
                  Technologies & Frameworks Deployed
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {currentLayer.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-3.5 transition-all hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]"
                    >
                      <span className="text-xs sm:text-sm font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                        {skill}
                      </span>
                      <span className="font-mono text-[0.6rem] text-[var(--color-foreground-subtle)] opacity-0 group-hover:opacity-100 transition-opacity">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Relationship Banner */}
              {currentLayer.connectionToNext && (
                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]/80 px-5 py-3.5">
                  <span className="text-base">⚡</span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                    <span className="font-mono uppercase tracking-wider text-[var(--color-foreground-subtle)]">
                      Pipeline Integration:
                    </span>
                    <span className="text-[var(--color-foreground-muted)] font-mono">
                      {currentLayer.connectionToNext}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
