"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface TechItem {
  name: string;
  category: string;
  iconSvg: React.ReactNode;
}

const techItems: TechItem[] = [
  {
    name: "Figma",
    category: "Design",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Sketch",
    category: "Vector",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#F7B500">
        <polygon points="12 1.5 22 8.5 18 22 6 22 2 8.5 12 1.5" />
        <polygon points="12 1.5 18 22 6 22 12 1.5" fill="#FCD835" />
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    category: "Prototype",
    iconSvg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#470137] text-[#FF61F6] text-xs font-black">
        Xd
      </div>
    ),
  },
  {
    name: "Photoshop",
    category: "Editing",
    iconSvg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#001E36] text-[#31A8FF] text-xs font-black">
        Ps
      </div>
    ),
  },
  {
    name: "Illustrator",
    category: "Vector",
    iconSvg: (
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#330000] text-[#FF9A00] text-xs font-black">
        Ai
      </div>
    ),
  },
  {
    name: "Webflow",
    category: "Web",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#146EF5">
        <path d="M16.9 7.8c-.8 2.2-2.1 4.2-3.8 5.8l-1.6-4.4c-.4-1.1-.9-2.1-1.6-2.9-.6-.8-1.5-1.2-2.6-1.2-1.2 0-2.2.5-3 1.5-.7 1-1.1 2.3-1.1 3.9v5.9h3.7v-5.4c0-.7.1-1.3.4-1.7.3-.4.7-.6 1.2-.6.7 0 1.2.3 1.5 1 .3.7.6 1.5.9 2.5l2.4 6.7c.3.8.7 1.5 1.2 2 .5.5 1.2.8 2.1.8 1.1 0 2-.4 2.8-1.3.7-.9 1.4-2.1 2-3.6l3.9-10.4h-3.9l-2.4 5.9z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    category: "Motion",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0055FF">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "Docs",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.106 2.482c-.467.047-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.213.98l14.522-.84c.84-.046.933-.56.933-1.166V6.448c0-.606-.233-.886-.793-.84l-15.082.886c-.607.047-.793.327-.793.794zm13.729 1.26v10.592c0 .42-.187.56-.607.56-.374 0-.607-.14-.934-.513l-5.696-8.913v8.307c.373.14.7.28.7.607 0 .28-.187.42-.653.42l-2.755.14c-.28 0-.467-.14-.467-.42 0-.327.327-.467.7-.607v-9.566c-.373-.14-.7-.28-.7-.607 0-.28.187-.42.653-.42l3.456-.233c.42 0 .7.14.933.513l5.51 8.68V7.934c-.374-.14-.7-.28-.7-.607 0-.28.186-.42.653-.42l2.755-.14c.28 0 .467.14.467.42 0 .327-.327.467-.7.607z" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Code",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#61DAFB">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Fullstack",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.667 17.5L9.333 6.833h2.334l8.333 10.667h-2.333zM7.5 6.833h2.167v10.334H7.5V6.833z" />
      </svg>
    ),
  },
];

/**
 * Technologies Section — 1000% Matched to Reference Design Image.
 * Features:
 * - TOOLS & SKILLS badge
 * - "Technologies I Use" heading
 * - Horizontal frosted glass strip with rounded tile icons
 */
export function Technologies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="technologies" className="relative py-12 sm:py-16">
      <Container>
        {/* Section Tag */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
            TOOLS &amp; SKILLS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-8">
          Technologies I Use
        </h2>

        {/* Frosted Glass Container Strip */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-4 sm:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center rounded-xl bg-white/75 hover:bg-white border border-white p-3 min-w-[76px] sm:min-w-[88px] h-20 sm:h-22 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {tech.iconSvg}
                </div>
                <span className="text-[11px] font-semibold text-[#334155] group-hover:text-[#0F172A] tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
