import type { Metadata } from "next";
import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { CareerEvolution } from "@/components/experience/CareerEvolution";
import { RoleTimeline } from "@/components/experience/RoleTimeline";
import { SystemArchitecture } from "@/components/experience/SystemArchitecture";
import { EngineeringPhilosophy } from "@/components/experience/EngineeringPhilosophy";
import { TeachingEcosystem } from "@/components/experience/TeachingEcosystem";
import { ImpactMetrics } from "@/components/experience/ImpactMetrics";
import { EducationCredentials } from "@/components/experience/EducationCredentials";
import { AwardsRecognition } from "@/components/experience/AwardsRecognition";
import { SpeakingThoughtLeadership } from "@/components/experience/SpeakingThoughtLeadership";
import { PublicationsPreview } from "@/components/experience/PublicationsPreview";
import { RecommendationsTrust } from "@/components/experience/RecommendationsTrust";
import { IdentitySynthesis } from "@/components/experience/IdentitySynthesis";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Experience & Journey — S Tatheer Hussain",
  description:
    "Explore the career evolution, system architecture depth, developer education, university lecturing, and venture leadership of S Tatheer Hussain.",
  openGraph: {
    title: "Experience & Journey — S Tatheer Hussain",
    description:
      "Full-stack software engineer, university lecturer, tech educator, and founder. Discover how systems thinking meets human impact.",
    url: "https://tatheer.dev/experience",
    type: "profile",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Section 01: Editorial Experience Intro */}
        <ExperienceHero />

        {/* Section 02: Interactive Career Progression */}
        <CareerEvolution />

        {/* Section 03: Detailed Roles & Engagements */}
        <RoleTimeline />

        {/* Section 04: Interactive System Architecture & Tech Depth */}
        <SystemArchitecture />

        {/* Section 05: Engineering Philosophy ("I DON'T JUST WRITE CODE") */}
        <EngineeringPhilosophy />

        {/* Section 06 & 07: Teaching Ecosystem & EEST LMS Portal */}
        <TeachingEcosystem />

        {/* Section 08: Verified Impact & Metrics */}
        <ImpactMetrics />

        {/* Section 09 & 10: Education & AWS Cloud Credential */}
        <EducationCredentials />

        {/* Section 11: Awards & Distinctions */}
        <AwardsRecognition />

        {/* Section 12 & 13: Speaking & Community Involvement */}
        <SpeakingThoughtLeadership />

        {/* Section 14: Publications & Insights */}
        <PublicationsPreview />

        {/* Section 15: Recommendations & Trust */}
        <RecommendationsTrust />

        {/* Section 16: Professional Identity Synthesis Climax */}
        <IdentitySynthesis />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
