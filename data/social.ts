import type { SocialLink } from "@/types";

/**
 * Social links — also available via profile.socials,
 * but exported separately for components that only need links.
 */
export const socialLinks: SocialLink[] = [
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
];
