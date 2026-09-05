"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/**
 * 11 — Footer Component.
 * Strictly Faithful to Reference Design.
 * Features:
 * - Left: STH monogram + S TATHEER HUSSAIN + "Engineer. Educator. Entrepreneur."
 * - Center: Horizontal navigation links (Home, About, Projects, Services, Contact)
 * - Right: Circular social icon links (LinkedIn, GitHub, YouTube/Website, Email)
 * - Bottom: "© 2024 S Tatheer Hussain. All rights reserved." + "Build · Teach · Lead · Create Opportunities"
 */
export function Footer() {
  const currentYear = 2024; // Preserved exactly as shown in reference

  return (
    <footer className="relative border-t border-[#1E293B] bg-[#06080F] py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1E293B]/60">
          {/* Left: STH Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="font-heading text-2xl font-black tracking-tight text-gradient-cyan-blue">
              STH
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                S Tatheer Hussain
              </span>
              <span className="text-[0.65rem] text-[#64748B]">
                Engineer. Educator. Entrepreneur.
              </span>
            </div>
          </div>

          {/* Center: Horizontal Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-[#94A3B8] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Circular Social Media Icons */}
          <div className="flex items-center gap-2.5">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tatheer-hussain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/60 hover:bg-[#151C30] hover:text-[#00D2FF]"
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
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/60 hover:bg-[#151C30] hover:text-[#00D2FF]"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            {/* YouTube / Project Showcase */}
            <a
              href="https://tatheer-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projects Showcase"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/60 hover:bg-[#151C30] hover:text-[#00D2FF]"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 21c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 3c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
            </a>

            {/* Email */}
            <Link
              href="/contact"
              aria-label="Direct Email"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E293B] bg-[#0E1322] text-[#94A3B8] transition-all hover:border-[#00D2FF]/60 hover:bg-[#151C30] hover:text-[#00D2FF]"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[0.68rem] text-[#64748B]">
          <div>
            © {currentYear} S Tatheer Hussain. All rights reserved.
          </div>
          <div>
            Build · Teach · Lead · Create Opportunities
          </div>
        </div>
      </Container>
    </footer>
  );
}
