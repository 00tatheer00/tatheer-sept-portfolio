export interface SpeakingEngagement {
  id: string;
  title: string;
  category: "keynote" | "panel" | "workshop" | "community";
  event: string;
  institution?: string;
  description: string;
  topics: string[];
  isFeatured?: boolean;
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: "web-dev-2026",
    title: "Web Development in 2026: Skills, Roadmap, and Opportunities",
    category: "keynote",
    event: "Technology Thought Leadership Keynote",
    institution: "University Tech Summits & Developer Communities",
    description:
      "A strategic presentation exploring the architectural shift in modern web systems, the role of AI-assisted engineering, and pragmatic career roadmaps for new and experienced developers.",
    topics: [
      "Future of Modern Web Development",
      "Full-Stack Architectures & Cloud Edges",
      "AI-Assisted Engineering Workflows",
      "Essential High-Demand Developer Skills",
      "Actionable Learning Roadmaps",
      "Global Freelancing & Remote Career Opportunities",
    ],
    isFeatured: true,
  },
  {
    id: "uet-tech-panel",
    title: "Engineering Education & Industry Alignment",
    category: "panel",
    event: "Annual CS & Engineering Colloquium",
    institution: "University of Engineering and Technology (UET) Peshawar",
    description:
      "Panel discussion alongside university faculty addressing the bridge between traditional university coursework and production-grade software demands.",
    topics: [
      "Curriculum Modernization",
      "Bridging the University-to-Industry Gap",
      "Open Source Contribution as Learning",
    ],
  },
  {
    id: "gdgoc-job-fair",
    title: "Industry Readiness & Portfolio Engineering",
    category: "community",
    event: "GDGoC Annual Job Fair & Tech Expo",
    institution: "Islamia College University Peshawar",
    description:
      "Mentoring graduating developers on technical interview preparation, project case studies, and building production-tested GitHub repositories.",
    topics: [
      "Technical Portfolio Design",
      "Software Interview Preparation",
      "Community Networking",
    ],
  },
  {
    id: "smit-hackathon-mentorship",
    title: "Overnight Hackathon Architecture & Mentorship",
    category: "workshop",
    event: "SMIT Regional Hackathon Series",
    institution: "Saylani Mass IT Training",
    description:
      "Guiding participating student teams through rapid wireframing, schema normalization, API integration, and deployment under 24-hour sprint pressure.",
    topics: [
      "Rapid Prototyping",
      "Team Git Branching Strategies",
      "MVP Delivery & Live Demoing",
    ],
  },
];

export const communityInitiatives = [
  {
    title: "Developer Mentorship",
    description:
      "One-on-one and cohort guidance for emerging engineers transitioning from fundamental syntax to full-stack production software.",
  },
  {
    title: "Job Fairs & Career Fairs",
    description:
      "Active participant and advisor in regional university recruitment drives, including Google Developer Groups on Campus (GDGoC) fairs.",
  },
  {
    title: "Hackathons & Code Sprints",
    description:
      "Participant, prize winner, and mentor across competitive collegiate hackathons and algorithmic programming challenges.",
  },
  {
    title: "Webinars & Open Tech Forums",
    description:
      "Regular online broadcasts dissecting state management, API security, and the future of JavaScript tooling.",
  },
];
