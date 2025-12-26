export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  url: string;
};

export const posts: BlogPost[] = [
  {
    slug: "recent-thoughts-about-gen-ai",
    title: "recent thoughts about gen-ai",
    date: "2024-12",
    url: "https://forbit.dev/blog/devto/recent-thoughts-about-gen-ai-57hj",
  },
  {
    slug: "devpad-7",
    title: "devpad #7 - Decoupling API from AstroJS with Bun + Hono",
    date: "2024-11",
    url: "https://forbit.dev/blog/dev/devpad-redesign-7",
  },
  {
    slug: "glossy-selects-webkit",
    title: "How to fix glossy selects in webkit (Safari)",
    date: "2024-10",
    url: "https://forbit.dev/blog/devto/how-to-fix-glossy-selects-in-webkit-safari-3okh",
  },
  {
    slug: "devpad-6",
    title: "devpad #6 - MVP Progress",
    date: "2024-09",
    url: "https://forbit.dev/blog/dev/devpad-redesign-6",
  },
  {
    slug: "golang-drizzle-minio",
    title: "Stack setup for golang API with bun testing, postgres, S3",
    date: "2024-08",
    url: "https://forbit.dev/blog/dev/golang-drizzle-minio-api-example-1",
  },
];

export const getLatestPosts = (count: number = 3) => posts.slice(0, count);
