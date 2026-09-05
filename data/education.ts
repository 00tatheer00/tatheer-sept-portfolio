import type { Education } from "@/types";

/**
 * Verified academic education records.
 * Factual and concise without invented dates or unverified metrics.
 */
export const educations: Education[] = [
  {
    id: "uop-bcs",
    institution: "University of Peshawar",
    degree: "Bachelor of Computer Science (BCS)",
    field: "Computer Science & Software Engineering",
    startDate: "Peshawar",
    isCurrent: false,
    location: "Peshawar, Pakistan",
    description:
      "Comprehensive theoretical and practical study of computational foundations, including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering methodologies.",
    achievements: [
      "Rigorous grounding in computational theory and algorithmic problem solving.",
      "Hands-on laboratory implementation across C++, Java, and relational database systems.",
    ],
    institutionUrl: "https://uop.edu.pk",
  },
];
