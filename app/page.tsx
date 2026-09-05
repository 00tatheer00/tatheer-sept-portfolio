import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Engineer } from "@/components/sections/Engineer";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Journey } from "@/components/sections/Journey";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Entrepreneur } from "@/components/sections/Entrepreneur";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — Master Redesign.
 * Strictly Faithful to Visual Source of Truth (Reference Image):
 *
 * 01. Hero (S Tatheer Hussain, portrait with glowing aura, role triad, CTAs)
 * 02. Identity (I BUILD. I TEACH. I LEAD. + Software, People, Opportunities)
 * 03. Engineer (HOW I THINK AS AN ENGINEER + 6-stage process line)
 * 04. Featured Work (Real Projects. Real Impact. + 3 project cards)
 * 05. The Journey (Student to Founder + 5 milestone nodes)
 * 06. Technical Expertise (Turned Into Real Solutions + 6 domain cards)
 * 07. Organizations (Building Beyond Code + Tech4Edges & EEST + script quote)
 * 08. Kind Words (What People Say + testimonial carousel)
 * 09. Final CTA (HAVE A PROBLEM WORTH SOLVING? + aurora landscape)
 * 10. Footer (STH logo, navigation, socials, signature tagline)
 */
export default function HomePage() {
  return (
    <>
      <main id="main-content">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — I BUILD. I TEACH. I LEAD. */}
        <Identity />

        {/* 03 — How I Think As An Engineer */}
        <Engineer />

        {/* 04 — Featured Work */}
        <FeaturedWork />

        {/* 05 — The Journey */}
        <Journey />

        {/* 06 — Technical Expertise */}
        <WhatIBuild />

        {/* 07 — Organizations Creating Impact */}
        <Entrepreneur />

        {/* 08 — Kind Words */}
        <Testimonials />

        {/* 09 — Final CTA */}
        <FinalCTA />
      </main>

      {/* 10 — Footer */}
      <Footer />
    </>
  );
}
