import { getDevpadClient } from "~/lib/devpad";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  url: string;
};

const FALLBACK_POSTS: BlogPost[] = [
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

let _cache: BlogPost[] | null = null;

const formatDate = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

async function fetchPosts(): Promise<BlogPost[]> {
  if (_cache) return _cache;

  const client = getDevpadClient();
  if (!client) {
    _cache = FALLBACK_POSTS;
    return _cache;
  }

  const result = await client.blog.posts.list({ status: "published" });

  if (!result.ok) {
    console.warn("[gallery] Failed to fetch blog posts, using fallback:", result.error);
    _cache = FALLBACK_POSTS;
    return _cache;
  }

  const posts = result.value.posts
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: formatDate(p.publish_at ?? p.created_at),
      url: `https://forbit.dev/blog/${p.slug}`,
      _sort: (p.publish_at ?? p.created_at).getTime(),
    }))
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort, ...post }) => post);

  _cache = posts.length > 0 ? posts : FALLBACK_POSTS;
  return _cache;
}

export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  const posts = await fetchPosts();
  return posts.slice(0, count);
}
