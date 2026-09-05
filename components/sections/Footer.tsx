"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Footer Component — Light Liquid Glass Aesthetic.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/80 bg-white/40 backdrop-blur-xl py-10 mt-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60">
          {/* Left: Brand Monogram & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0F172A] text-white font-bold text-xs shadow-xs transition-transform duration-200 group-hover:scale-105">
              TH
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#0F172A] tracking-tight">
                S Tatheer Hussain
              </span>
              <span className="text-[10px] text-[#64748B]">
                Digital Product Designer &amp; Engineer
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tatheer-hussain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white text-[#475569] shadow-xs hover:text-[#6366F1] hover:scale-110 transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.31a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/00tatheer00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white text-[#475569] shadow-xs hover:text-[#6366F1] hover:scale-110 transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@tatheer.me"
              aria-label="Email Tatheer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 border border-white text-[#475569] shadow-xs hover:text-[#6366F1] hover:scale-110 transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-[#94A3B8]">
            &copy; {currentYear} S Tatheer Hussain. Crafted with porcelain precision &amp; liquid glass.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#94A3B8]">
            <span>ENGINEER</span>
            <span>&bull;</span>
            <span>EDUCATOR</span>
            <span>&bull;</span>
            <span>ENTREPRENEUR</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
