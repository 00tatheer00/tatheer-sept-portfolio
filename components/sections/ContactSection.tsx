"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Contact Section — 1000% Matched to Reference Design Image.
 * Features:
 * - LET'S CONNECT badge
 * - Large frosted glass container
 * - Left: "Have a project in mind? / Let's create something amazing together." + direct info
 * - Right: Frosted form fields + black pill "Send Message ✈"
 * - Floating 3D translucent liquid crystal ribbon knot on the right border
 */
export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", project: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Tag */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
            LET&apos;S CONNECT
          </span>
        </div>

        {/* Master Frosted Container */}
        <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          {/* Floating 3D Liquid Ribbon Knot on the Right (Reference matched) */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-16 -bottom-16 sm:-right-12 sm:-bottom-12 z-0 hidden md:block w-72 h-72 lg:w-96 lg:h-96 opacity-85"
            aria-hidden="true"
          >
            <Image
              src="/glass-knot.png"
              alt=""
              width={384}
              height={384}
              className="object-contain filter drop-shadow-2xl"
            />
          </motion.div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column: Heading + Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-4">
                Have a project in mind?<br />
                Let&apos;s create something amazing together.
              </h2>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
                Whether you have an upcoming SaaS product, want to redesign a system architecture, or need a technical advisor, my inbox is always open.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:tatheerabidi00@gmail.com"
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] hover:text-[#6366F1] transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-white text-[#6366F1] shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">tatheerabidi00@gmail.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923275792600"
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] hover:text-[#6366F1] transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-white text-[#6366F1] shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">+92 327 5792600</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 border border-white text-[#6366F1] shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                {/* Row 1: Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white/80 border border-white px-4 py-3 text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-xs backdrop-blur-md focus:bg-white focus:border-[#6366F1] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white/80 border border-white px-4 py-3 text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-xs backdrop-blur-md focus:bg-white focus:border-[#6366F1] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Project Type Select */}
                <div>
                  <label htmlFor="project" className="sr-only">
                    Your Project
                  </label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full rounded-xl bg-white/80 border border-white px-4 py-3 text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-xs backdrop-blur-md focus:bg-white focus:border-[#6366F1] focus:outline-none transition-all"
                  >
                    <option value="">Your Project</option>
                    <option value="Product Design">Product Design / UI/UX</option>
                    <option value="Full-Stack Engineering">Full-Stack SaaS Development</option>
                    <option value="System Architecture">System Architecture &amp; Cloud</option>
                    <option value="Technical Consultation">Technical Advisory &amp; Training</option>
                  </select>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-white/80 border border-white px-4 py-3 text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-xs backdrop-blur-md focus:bg-white focus:border-[#6366F1] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-pill w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs sm:text-sm font-semibold tracking-wide disabled:opacity-50"
                  >
                    {isSent ? (
                      <span>Message Sent Successfully! ✓</span>
                    ) : isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
