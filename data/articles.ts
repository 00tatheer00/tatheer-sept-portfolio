import type { Article } from "@/types";

/**
 * Published technical articles and developer insights by S Tatheer Hussain.
 */
export const articles: Article[] = [
  {
    id: "how-i-solve-problems",
    title: "How I Solve Web Development Problems",
    slug: "how-i-solve-web-development-problems",
    excerpt:
      "A pragmatic blueprint for dissecting complex bugs, reasoning through architectural bottlenecks, and turning ambiguous client requirements into clear, testable technical systems.",
    publishedDate: "2024",
    readingTime: "5 min read",
    tags: ["Engineering", "Problem Solving", "Architecture", "Best Practices"],
    isFeatured: true,
  },
  {
    id: "top-tools-beginners",
    title: "Top Web Development Tools for Beginners",
    slug: "top-web-development-tools-for-beginners",
    excerpt:
      "An opinionated walkthrough of modern developer tooling—from terminal environments and Git workflows to browser devtools and modern component inspectors.",
    publishedDate: "2024",
    readingTime: "6 min read",
    tags: ["Web Dev", "Tooling", "Beginners", "Developer Productivity"],
    isFeatured: true,
  },
  {
    id: "enchanting-frontend",
    title:
      "The Enchanting World of Front-End Development: Where Creativity Meets Functionality",
    slug: "the-enchanting-world-of-front-end-development",
    excerpt:
      "Exploring the harmonious intersection of computational logic, micro-interactions, accessibility, and visual psychology in crafting memorable modern digital experiences.",
    publishedDate: "2023",
    readingTime: "7 min read",
    tags: ["Frontend", "UI/UX", "Creativity", "Human-Centered Design"],
    isFeatured: true,
  },
];
