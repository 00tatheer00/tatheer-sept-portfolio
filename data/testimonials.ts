import type { Testimonial } from "@/types";

/**
 * Client and institutional testimonials.
 * Matches the reference design quote and verified endorsements.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Client Testimonial",
    role: "Education Organization",
    company: "Karachi",
    quote:
      "It has been an absolute pleasure working with Tatheer. His technical expertise, professionalism and ability to deliver high-quality solutions make him an exceptional developer and a valuable business partner.",
    isFeatured: true,
  },
  {
    id: "2",
    author: "Academic Colleague",
    role: "Visiting Faculty",
    company: "University of Peshawar",
    quote:
      "Tatheer demonstrates an exceptional grasp of full-stack system architecture and computer science fundamentals. His structured teaching methodology transforms complex topics into accessible mental models.",
    isFeatured: true,
  },
  {
    id: "3",
    author: "Technology Founder",
    role: "Venture Partner",
    company: "SaaS Client",
    quote:
      "From scoping requirements to architecting production SaaS platforms, Tatheer's commitment to clean data models, typed contracts, and business outcomes is outstanding.",
    isFeatured: true,
  },
];
