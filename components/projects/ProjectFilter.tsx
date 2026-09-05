"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  selectedCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts?: Record<string, number>;
}

export function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex items-center overflow-x-auto pb-2 scrollbar-none gap-2">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = counts?.[cat];

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={cn(
              "relative px-4 py-2 text-xs font-mono rounded-full transition-colors flex items-center gap-2 shrink-0 cursor-pointer border",
              isSelected
                ? "text-[var(--color-foreground)] border-[var(--color-border)]"
                : "text-[var(--color-foreground-muted)] border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
            )}
          >
            {isSelected && (
              <motion.span
                layoutId="project-category-pill"
                className="absolute inset-0 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/50"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 font-medium",
                isSelected && "text-[var(--color-accent)] font-semibold"
              )}
            >
              {cat}
            </span>
            {count !== undefined && (
              <span className="relative z-10 text-[0.6rem] text-[var(--color-foreground-subtle)]">
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
