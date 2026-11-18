import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { SEO_PAGES, GROUPS } from "@/lib/seo/keywords";
import { SITE_URL } from "@/lib/site";
import "./seo.css";

const title = "Women's Health & Skin Care Guides for Raebareli | Dr. Salama Haneef";
const description = "Guides to gynecologist, lady doctor, PCOD, infertility, pregnancy, skin and hair care in Raebareli by Dr. Salama Haneef, Gynecologist & Skin Expert. Call 6389933191.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/raebareli` },
  openGraph: { title, description, url: `${SITE_URL}/raebareli`, type: "website", locale: "en_IN" },
};

export default function Hub() {
  const hindi = SEO_PAGES.filter((p) => p.lang === "hi");
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    url: `${SITE_URL}/raebareli`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SEO_PAGES.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/raebareli/${p.slug}`, name: p.kw })),
    },
  };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero current="Raebareli Health Guides" title="Women's Health & Skin Care in Raebareli" subtitle="Find the right care close to home — guides from Dr. Salama Haneef, Gynecologist & Skin Expert, Gorabazar, Raebareli." />
      <div className="rb">
        <section className="section-pad-sm">
          <div className="container">
            <p className="rb-lead">Browse our Raebareli guides on gynecology, pregnancy, PCOD, infertility, skin, hair and nutrition. Each guide explains the condition and how Dr. Salama Haneef can help. To book, call <a href="tel:6389933191">6389933191</a>.</p>
            <div className="row g-4">
              {Object.entries(GROUPS).map(([g, pages]) => (
                <div className="col-md-6 col-lg-4" key={g}>
                  <div className="rb-hub__card">
                    <h2>{g}</h2>
                    <ul>{pages.map((p) => <li key={p.slug}><Link href={`/raebareli/${p.slug}`}>{p.kw}</Link></li>)}</ul>
                  </div>
                </div>
              ))}
              <div className="col-md-6 col-lg-4">
                <div className="rb-hub__card" lang="hi">
                  <h2>हिंदी में जानकारी</h2>
                  <ul>{hindi.map((p) => <li key={p.slug}><Link href={`/raebareli/${p.slug}`}>{p.kw}</Link></li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
