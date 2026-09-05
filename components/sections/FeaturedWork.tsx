"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const selectedWorks = [
  {
    image: "/project-eest-hd.png",
    category: "Mobile & Web App Design",
    title: "Finova — Finance App & Portal",
    href: "/projects/eest-portal",
  },
  {
    image: "/project-erp-hd.png",
    category: "Web Application",
    title: "Analytics Operations Dashboard",
    href: "/projects/erp-operations-platform",
  },
  {
    image: "/project-saas-hd.png",
    category: "Web Design & Architecture",
    title: "SaaS Enterprise Landing Page",
    href: "/projects/dashboard-api-revamp",
  },
];

/**
 * Featured Work / Selected Work — 1000% Matched to Reference Design Image.
 * Features:
 * - FEATURED PROJECTS badge
 * - "Selected Work" heading + "View All Projects ↗" button
 * - 3 Frosted glass cards with UI preview mockups, titles, categories, and bottom-right circular arrow button
 */
export function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
                FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
              Selected Work
            </h2>
          </div>

          <div>
            <Link
              href="/projects"
              className="btn-glass-pill inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold text-[#0F172A] shadow-sm"
            >
              <span>View All Projects</span>
              <span className="text-xs font-bold text-[#6366F1]">↗</span>
            </Link>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card group rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Preview Image Container */}
              <Link href={work.href} className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-4">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Card Meta & Bottom Arrow */}
              <div className="flex items-center justify-between gap-3 px-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#6366F1] transition-colors">
                    <Link href={work.href}>{work.title}</Link>
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#64748B] font-medium">
                    {work.category}
                  </span>
                </div>

                <Link
                  href={work.href}
                  aria-label={`View ${work.title}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 border border-white text-[#0F172A] shadow-sm transition-all duration-200 group-hover:bg-[#0F172A] group-hover:text-white group-hover:scale-110"
                >
                  <span className="text-xs font-bold">↗</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
