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
import { Tech4Edges } from "@/components/sections/Tech4Edges";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

/**
 * Homepage — cinematic interactive portfolio experience.
 * 14 sections forming a continuous visual narrative:
 * WHO IS HE → WHAT DOES HE DO → WHY IS HE DIFFERENT →
 * WHAT HAS HE BUILT → WHY SHOULD I WORK WITH HIM → LET'S TALK
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

        {/* 04 — Engineer chapter */}
        <Engineer />

        {/* 05 — Educator chapter */}
        <Educator />

        {/* 06 — Entrepreneur chapter */}
        <Entrepreneur />

        {/* 07 — Career journey */}
        <Journey />

        {/* 08 — Impact numbers */}
        <Impact />

        {/* 09 — Capabilities showcase */}
        <WhatIBuild />

        {/* 10 — EEST featured story */}
        <EESTStory />

        {/* 11 — Tech4Edges venture */}
        <Tech4Edges />

        {/* 12 — Featured projects */}
        <FeaturedWork />

        {/* 13 — Final call-to-action */}
        <FinalCTA />
      </main>

      {/* 14 — Footer */}
      <Footer />
    </>
  );
}
