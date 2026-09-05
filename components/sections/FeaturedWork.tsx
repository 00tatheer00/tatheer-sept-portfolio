"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animation/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const featuredProjects = [
  {
    image: "/project-eest-hd.png",
    badge: "EDUCATION / LMS",
    badgeColor: "bg-[#8B5CF6]/15 text-[#A78BFA] border-[#8B5CF6]/30",
    title: "EEST Portal / LMS",
    description: "A complete learning management system supporting students, trainers and educational workflows.",
    href: "/projects/eest-portal",
  },
  {
    image: "/project-erp-hd.png",
    badge: "BUSINESS / ERP",
    badgeColor: "bg-[#00D2FF]/15 text-[#38BDF8] border-[#00D2FF]/30",
    title: "Custom ERP Platform",
    description: "A tailored ERP/operations platform for a logistics client in Lahore, improving business workflows and efficiency.",
    href: "/projects/erp-operations-platform",
  },
  {
    image: "/project-saas-hd.png",
    badge: "SAAS",
    badgeColor: "bg-[#3B82F6]/15 text-[#60A5FA] border-[#3B82F6]/30",
    title: "Startup Dashboard Revamp",
    description: "Dashboard modernization and API improvements for an Islamabad-based startup.",
    href: "/projects/dashboard-api-revamp",
  },
];

/**
 * 05 — Featured Work Section.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Header: FEATURED WORK / Real Projects. Real Impact. + "View All Projects ➔"
 * - 3 Project Cards with large mockups, category badges, titles, descriptions, and "View Case Study ➔"
 */
export function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="featured-work"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#06080F] border-t border-[#1E293B]/60"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
                Featured Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Real Projects. Real Impact.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/projects"
              data-cursor="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0E1322] px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:border-[#00D2FF]/50 hover:bg-[#151C30]"
            >
              <span>View All Projects</span>
              <span className="text-sm font-bold">➔</span>
            </Link>
          </Reveal>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={shouldReduceMotion ? undefined : fadeInUp}
              className="group relative rounded-2xl border border-[#1E293B] bg-[#0D1220] overflow-hidden transition-all duration-300 hover:border-[#334155] hover:bg-[#12182B] flex flex-col justify-between"
            >
              {/* Preview Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0E1A] border-b border-[#1E293B]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Badge */}
                  <div className="mb-3">
                    <span className={`inline-block font-mono text-[0.6rem] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={project.href}
                    data-cursor="project"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#00D2FF] transition-colors group-hover:text-white"
                  >
                    <span>View Case Study</span>
                    <span className="transition-transform group-hover:translate-x-1">➔</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
