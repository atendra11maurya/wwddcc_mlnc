export interface Article {
  slug: string;
  title: string;
  author?: string;
  anonymous: boolean;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export const articlesData: Article[] = [
  {
    slug: "sample-article-1",
    title: "SAMPLE: The Space Between Roles",
    anonymous: true,
    category: "Identity",
    date: "April 2026",
    excerpt: "An anonymous reflection on navigating campus spaces.",
    content: "[Full article content to be provided]",
  },
  {
    slug: "sample-article-2",
    title: "SAMPLE: Unlearning in the Classroom",
    author: "Student Writer",
    anonymous: false,
    category: "Culture",
    date: "March 2026",
    excerpt: "How small dialogues change the broader narrative.",
    content: "[Full article content to be provided]",
  }
];
