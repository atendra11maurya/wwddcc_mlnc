export interface Initiative {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  video?: string;
  accent: string;
  years: string[];
}

export const initiatives: Initiative[] = [
  {
    slug: "bebakh",
    name: "BEBAKH",
    description: "Our flagship gender and sexuality awareness festival, challenging norms and creating dialogue.",
    heroImage: "/wdc/bebakh-hero.jpg",
    video: "/videos/bebak.mp4",
    accent: "bg-seafoam",
    years: ["2025", "2024", "2023"]
  },
  {
    slug: "rehnuma",
    name: "REHNUMA",
    description: "A platform for perspectives and conversations that often remain unheard.",
    heroImage: "/wdc/rehnuma-01.jpg",
    video: "/videos/rehnuma.mp4",
    accent: "bg-muted-lilac", // These are tailwind colors, wait, I need to add them to tailwind theme.
    years: ["2025", "2024"]
  },
  {
    slug: "podcast",
    name: "PODCAST",
    description: "Audio conversations around identity, relationships, and unlearning.",
    heroImage: "/wdc/podcast-01.jpg",
    video: "https://www.youtube.com/embed/vMmHmeldgfo",
    accent: "bg-powder-blue",
    years: ["Season 2", "Season 1"]
  }
];
