import { PreEntry } from "@/components/sections/PreEntry";
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { Engineer } from "@/components/sections/Engineer";
import { Educator } from "@/components/sections/Educator";
import { Entrepreneur } from "@/components/sections/Entrepreneur";
import { Journey } from "@/components/sections/Journey";
import { Impact } from "@/components/sections/Impact";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { EESTStory } from "@/components/sections/EESTStory";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — cinematic interactive portfolio experience.
 * Streamlined visual narrative:
 * WHO IS HE → HOW HE THINKS → HOW HE TEACHES → HOW HE BUILDS VENTURES →
 * CAREER TRAJECTORY → VERIFIED IMPACT → TECHNICAL STACK → FLAGSHIP PLATFORM →
 * SELECTED WORK → LET'S BUILD
 */
export default function HomePage() {
  return (
    <>
      {/* 01 — Branded entrance */}
      <PreEntry />

      <main>
        {/* 02 — Immersive hero */}
        <Hero />

        {/* 03 — Identity statement */}
        <Identity />

        {/* 04 — Engineer chapter (6-stage pipeline) */}
        <Engineer />

        {/* 05 — Educator chapter (pedagogy & ecosystem) */}
        <Educator />

        {/* 06 — Entrepreneur chapter (Tech4Edges & EEST) */}
        <Entrepreneur />

        {/* 07 — Career journey (student to founder) */}
        <Journey />

        {/* 08 — Impact numbers */}
        <Impact />

        {/* 09 — Technical domains & stack layers */}
        <WhatIBuild />

        {/* 10 — Flagship software case study: EEST LMS */}
        <EESTStory />

        {/* 11 — Featured projects from Project Lab */}
        <FeaturedWork />

        {/* 12 — Final call-to-action */}
        <FinalCTA />
      </main>

      {/* 13 — Footer */}
      <Footer />
    </>
  );
}
