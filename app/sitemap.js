import { SITE_URL } from "@/lib/site";
import { SEO_PAGES } from "@/lib/seo/keywords";
import { BLOG_POSTS } from "@/lib/data";

const toSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/about", "/services", "/treatments", "/gallery", "/blog", "/contact", "/appointment", "/raebareli"];
  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r}`,
      lastModified: now,
      changeFrequency: r === "" ? "weekly" : "monthly",
      priority: r === "" ? 1 : r === "/raebareli" ? 0.9 : 0.8,
    })),
    ...BLOG_POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug || toSlug(p.title)}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
    ...SEO_PAGES.map((p) => ({ url: `${SITE_URL}/raebareli/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: p.intent === "best" || p.slug.startsWith("gynecologist-in-raebareli") ? 0.9 : 0.7 })),
  ];
}
