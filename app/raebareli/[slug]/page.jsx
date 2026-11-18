import { notFound } from "next/navigation";
import SeoPage from "@/components/SeoPage";
import { SEO_PAGES, getPage } from "@/lib/seo/keywords";
import { metaFor } from "@/lib/seo/content";
import { pickImages } from "@/lib/seo/images";
import { TOPICS } from "@/lib/seo/topics";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: "Not found" };
  const { title, description } = metaFor(page);
  const url = `${SITE_URL}/raebareli/${page.slug}`;
  const img = pickImages(page, TOPICS[page.topic])[0].src;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: page.lang === "hi" ? "hi_IN" : "en_IN", siteName: "Dr. Salama Haneef", images: [{ url: img }] },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <SeoPage page={page} />;
}
