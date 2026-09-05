import type { Achievement } from "@/types";

/**
 * Achievements, awards, certifications, and honors for S Tatheer Hussain.
 * Strictly verified records without fabricated dates or metrics.
 */
export const achievements: Achievement[] = [
  {
    id: "aws-amplify-cert",
    title: "Build a Full-Stack JavaScript Application Using AWS Amplify",
    issuer: "Amazon Web Services (AWS)",
    date: "April 2023",
    type: "certification",
    description:
      "Official credential certifying end-to-end cloud full-stack engineering, serverless deployment, GraphQL data APIs, and authentication with AWS Amplify.",
    icon: "award",
  },
  {
    id: "smit-best-teacher-2025",
    title: "Best Teacher Appreciation Award",
    issuer: "Saylani Mass IT Training (SMIT) International",
    date: "2025",
    type: "award",
    description:
      "Awarded in recognition of exceptional instructional excellence, dedication to student development, and leadership across MERN Stack batches.",
    icon: "trophy",
  },
  {
    id: "teaching-appreciation",
    title: "Teaching & Pedagogical Appreciation Recognition",
    issuer: "Saylani Mass IT Training (SMIT)",
    date: "2024",
    type: "recognition",
    description:
      "Formal institutional appreciation for impactful curriculum delivery and mentorship of hundreds of tech students in Peshawar.",
    icon: "star",
  },
  {
    id: "uet-panelist",
    title: "Invited Technology Panelist",
    issuer: "University of Engineering and Technology (UET) Peshawar",
    date: "2024",
    type: "recognition",
    description:
      "Invited guest panelist discussing the evolution of software engineering, modern web frameworks, and student career pathways.",
    icon: "mic",
  },
  {
    id: "coding-night-hackathon",
    title: "Coding Night Hackathon — Prize Winner",
    issuer: "Competitive Programming & Developer Community",
    date: "University Level",
    type: "award",
    description:
      "Awarded top prize for rapid software architecture, clean modular code, and functioning prototype execution under strict overnight constraints.",
    icon: "code",
  },
  {
    id: "speed-programming-runner-up",
    title: "Speed Programming Competition — Runner Up",
    issuer: "Inter-University Algorithmic Challenge",
    date: "University Level",
    type: "award",
    description:
      "Second place distinction in algorithmic problem solving, time complexity optimization, and rapid logic implementation.",
    icon: "zap",
  },
  {
    id: "fsc-scholarship",
    title: "FSc Academic Merit Scholarship Recipient",
    issuer: "Academic Board / Institution",
    date: "Merit Award",
    type: "milestone",
    description:
      "Awarded competitive academic scholarship on the basis of scholastic excellence in Higher Secondary Pre-Engineering / Computer Science education.",
    icon: "graduation-cap",
  },
  {
    id: "university-workshops-seminars",
    title: "Keynote & Workshop Leader across Premier Institutions",
    issuer: "UoP, Islamia College, UET Peshawar, Agriculture University",
    date: "Ongoing",
    type: "recognition",
    description:
      "Conducted specialized technical seminars, developer roadmaps, and career readiness sessions across major provincial universities.",
    icon: "users",
  },
];
