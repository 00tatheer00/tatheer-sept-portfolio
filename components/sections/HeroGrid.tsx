"use client";

import { useRef, useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

interface HeroGridProps {
  className?: string;
}

/* ── Desktop detection via useSyncExternalStore ───────────── */

function subscribeToHover(cb: () => void) {
  const query = window.matchMedia("(hover: hover)");
  query.addEventListener("change", cb);
  return () => query.removeEventListener("change", cb);
}

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover)").matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Interactive technical grid background for the hero section.
 * Renders a fine SVG grid with coordinate markers and nodes
 * that react subtly to cursor movement (desktop only).
 */
export function HeroGrid({ className }: HeroGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });

  const isDesktop = useSyncExternalStore(
    subscribeToHover,
    getIsDesktop,
    getServerSnapshot
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current || !isDesktop) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePosRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
      /* Update CSS custom properties for GPU-friendly reactivity */
      containerRef.current.style.setProperty(
        "--cursor-x",
        `${mousePosRef.current.x * 100}%`
      );
      containerRef.current.style.setProperty(
        "--cursor-y",
        `${mousePosRef.current.y * 100}%`
      );
    },
    [isDesktop]
  );

  const gridSize = 80;
  const cols = 20;
  const rows = 14;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "pointer-events-auto absolute inset-0 overflow-hidden",
        className
      )}
      style={
        {
          "--cursor-x": "50%",
          "--cursor-y": "50%",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* Cursor-reactive radial light */}
      {isDesktop && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), rgba(200,169,110,0.04), transparent 60%)",
          }}
        />
      )}

      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />

        {/* Coordinate axis markers */}
        {Array.from({ length: cols }).map((_, i) => (
          <text
            key={`x-${i}`}
            x={i * gridSize + gridSize / 2}
            y={12}
            fill="rgba(255,255,255,0.06)"
            fontSize="8"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {String(i).padStart(2, "0")}
          </text>
        ))}
        {Array.from({ length: rows }).map((_, i) => (
          <text
            key={`y-${i}`}
            x={6}
            y={i * gridSize + gridSize / 2 + 3}
            fill="rgba(255,255,255,0.06)"
            fontSize="8"
            fontFamily="monospace"
          >
            {String(i).padStart(2, "0")}
          </text>
        ))}

        {/* Static intersection nodes */}
        {[
          { x: 3, y: 2 }, { x: 7, y: 4 }, { x: 12, y: 3 },
          { x: 5, y: 6 }, { x: 15, y: 5 }, { x: 9, y: 8 },
          { x: 2, y: 9 }, { x: 14, y: 7 }, { x: 6, y: 10 },
          { x: 11, y: 11 }, { x: 16, y: 9 }, { x: 4, y: 4 },
          { x: 8, y: 1 }, { x: 13, y: 6 }, { x: 10, y: 5 },
        ].map(({ x, y }, idx) => (
          <circle
            key={`node-${idx}`}
            cx={x * gridSize}
            cy={y * gridSize}
            r={2}
            fill="rgba(200,169,110,0.12)"
          />
        ))}

        {/* Architecture connection lines between fixed nodes */}
        {[
          { x1: 3, y1: 2, x2: 4, y2: 4 },
          { x1: 4, y1: 4, x2: 7, y2: 4 },
          { x1: 7, y1: 4, x2: 5, y2: 6 },
          { x1: 12, y1: 3, x2: 13, y2: 6 },
          { x1: 13, y1: 6, x2: 15, y2: 5 },
          { x1: 9, y1: 8, x2: 11, y2: 11 },
          { x1: 10, y1: 5, x2: 9, y2: 8 },
        ].map(({ x1, y1, x2, y2 }, idx) => (
          <line
            key={`line-${idx}`}
            x1={x1 * gridSize}
            y1={y1 * gridSize}
            x2={x2 * gridSize}
            y2={y2 * gridSize}
            stroke="rgba(200,169,110,0.06)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-background)] to-transparent" />

      {/* Side gradient fades */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent" />
    </div>
  );
}
