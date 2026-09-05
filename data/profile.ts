import type { PersonalProfile } from "@/types";

export const profile: PersonalProfile = {
  firstName: "S Tatheer",
  lastName: "Hussain",
  fullName: "S Tatheer Hussain",
  initials: "TH",
  tagline: "Engineer. Educator. Entrepreneur.",
  identityLabels: ["Engineer", "Educator", "Entrepreneur"],
  bio: "Full-Stack Software Engineer and SaaS Developer with a passion for building scalable digital products, educating the next generation of engineers, and leading technology ventures from concept to impact.",
  shortBio:
    "Building scalable software, educating engineers, and leading technology ventures.",
  location: {
    city: "Peshawar",
    country: "Pakistan",
  },
  roles: [
    "Full-Stack Software Engineer",
    "SaaS Developer",
    "Technical Educator",
    "University Lecturer",
    "Founder & CEO of Tech4Edges",
    "Director of Emerging Edge School of Technology",
  ],
  website: "https://tatheer.dev",
  socials: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/tatheer-hussain",
      description: "Professional network & career updates",
    },
    {
      label: "GitHub",
      url: "https://github.com/00tatheer00",
      description: "Open-source projects & code",
    },
    {
      label: "Projects",
      url: "https://tatheer-projects.vercel.app",
      description: "Full project portfolio",
    },
  ],
};
