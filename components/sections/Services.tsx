"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface ServiceItem {
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  iconPath: string;
}

const services: ServiceItem[] = [
  {
    iconBg: "bg-amber-50 border border-amber-200/60",
    iconColor: "text-amber-500",
    title: "Product Design",
    description: "Designing intuitive and engaging user interfaces for web and mobile products.",
    iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    iconBg: "bg-purple-50 border border-purple-200/60",
    iconColor: "text-purple-600",
    title: "UI/UX Design",
    description: "Creating seamless user experiences through research, wireframing and prototyping.",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    iconBg: "bg-blue-50 border border-blue-200/60",
    iconColor: "text-blue-600",
    title: "Design Systems",
    description: "Building scalable design systems and component libraries for consistent experiences.",
    iconPath: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  },
  {
    iconBg: "bg-teal-50 border border-teal-200/60",
    iconColor: "text-teal-600",
    title: "User Research",
    description: "Understanding users deeply through research and data to inform better design.",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
];

/**
 * Services Section — 1000% Matched to Reference Design Image.
 * Features:
 * - WHAT I DO badge
 * - "Services I Offer" heading
 * - 4 Frosted glass cards with color icon boxes, title, description, and bottom-right ↗ arrow
 * - Floating 3D translucent liquid glass sphere on the right
 */
export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24">
      <Container className="relative">
        {/* Floating 3D Liquid Glass Sphere (Reference matched) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-8 -top-12 z-0 hidden lg:block w-48 h-48 opacity-80"
          aria-hidden="true"
        >
          <Image
            src="/glass-sphere.png"
            alt=""
            width={192}
            height={192}
            className="object-contain filter drop-shadow-xl"
          />
        </motion.div>

        {/* Section Tag */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
            WHAT I DO
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-12">
          Services I Offer
        </h2>

        {/* 4 Cards Grid */}
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden"
            >
              <div>
                {/* Icon Box */}
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} shadow-sm transition-transform duration-200 group-hover:scale-110`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-[#0F172A] tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>

              {/* Bottom Right Arrow Link */}
              <div className="mt-8 flex justify-end">
                <Link
                  href="/services"
                  aria-label={`Learn more about ${item.title}`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-[#94A3B8] transition-all duration-200 group-hover:bg-[#0F172A] group-hover:text-white group-hover:scale-110"
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
