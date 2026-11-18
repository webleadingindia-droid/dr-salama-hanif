import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { CLINIC } from "@/lib/data";
import { SITE_URL } from "@/lib/site";
import { SEO_PAGES, getRelated } from "@/lib/seo/keywords";
import { pickImages } from "@/lib/seo/images";
import { build, graphFor } from "@/lib/seo/content";
import "@/app/raebareli/seo.css";

const TOWNS = SEO_PAGES.filter((p) => p.intent === "locality");

export default function SeoPage({ page }) {
  const d = build(page);
  const t = d.t;
  const L = d.labels;
  const hi = page.lang === "hi";
  const images = pickImages(page, t);
  const url = `${SITE_URL}/raebareli/${page.slug}`;
  const related = getRelated(page);
  const symptoms = hi ? d.hi.symptoms : t.symptoms;
  const see = hi ? d.hi.see : t.see;

  return (
    <>
      <JsonLd data={graphFor(page, d, url, images)} />
      <PageHero
        current={page.kw}
        title={page.kw}
        subtitle={hi ? "डॉ. सलामा हनीफ · गायनेकोलॉजिस्ट एवं स्किन एक्सपर्ट · गोराबाजार, रायबरेली" : "Dr. Salama Haneef · Gynecologist & Skin Expert · Gorabazar, Raebareli"}
      />
      <div className="rb" lang={hi ? "hi" : "en"}>
        <section className="section-pad-sm">
          <div className="container">
            <div className="row g-4">
              <article className="col-lg-8 rb-article">
                <div className="rb-short" role="note">
                  <strong>{L.short}:</strong> {d.short}
                </div>
                <p className="rb-lead">{d.intro}</p>

                <div className="rb-gallery">
                  {images.map((im, i) => (
                    <figure key={im.src} className={`rb-fig rb-fig--${i}`}>
                      <img src={im.src} alt={im.alt} width={800} height={520} loading={i === 0 ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" />
                      <figcaption>{im.caption}</figcaption>
                    </figure>
                  ))}
                </div>

                {!hi && (
                  <section id="what">
                    <h2>{L.what}</h2>
                    {t.what.map((p) => <p key={p}>{p}</p>)}
                  </section>
                )}

                <section id="symptoms">
                  <h2>{L.symptoms}</h2>
                  <ul className="rb-list">{symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
                </section>

                <section id="see-doctor">
                  <h2>{L.see}</h2>
                  <ul className="rb-list">{see.map((s) => <li key={s}>{s}</li>)}</ul>
                </section>

                <section id="extra">
                  <h2>{d.extra.title}</h2>
                  {d.extra.paras.map((p) => <p key={p}>{p}</p>)}
                  {d.extra.list && <ul className="rb-list">{d.extra.list.map((s) => <li key={s}>{s}</li>)}</ul>}
                </section>

                {!hi && (
                  <section id="approach">
                    <h2>{L.approach}</h2>
                    <ol className="rb-steps">{t.approach.map((s) => <li key={s}>{s}</li>)}</ol>
                  </section>
                )}

                <section id="why">
                  <h2>{L.why}</h2>
                  <ul className="rb-list rb-list--check">{d.why.map((s) => <li key={s}>{s}</li>)}</ul>
                  <div className="rb-cta">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn-pink btn">{L.book}</a>
                    <a href={`tel:${CLINIC.phone}`} className="btn-outline-pink btn">{L.call}: {CLINIC.phoneDisplay}</a>
                  </div>
                </section>

                <section id="areas">
                  <h2>{L.areas}</h2>
                  <p>{hi ? "गोराबाजार, श्रीनगर, पारसादेपुर रोड और गवर्नमेंट आईटीआई कॉलेज क्षेत्र के साथ-साथ लालगंज, ऊँचाहार, सलोन, डलमऊ, जायस, महाराजगंज, बछरावां, सरेनी, हरचंदपुर और शिवगढ़ जैसे आसपास के कस्बों से आने वाली महिलाएं भी क्लिनिक में परामर्श ले सकती हैं।" : "Dr. Salama Haneef's clinic is in Gorabazar, Sri Nagar, on Parsadepur Road near Government ITI College. Women from nearby towns also visit for consultation:"}</p>
                  {!hi && (
                    <ul className="rb-chips">
                      {TOWNS.map((p) => <li key={p.slug}><Link href={`/raebareli/${p.slug}`}>{p.loc}</Link></li>)}
                    </ul>
                  )}
                </section>

                <section id="visit">
                  <h2>{L.visit}</h2>
                  <address className="rb-nap">
                    <strong>Dr. Salama Haneef</strong> — {CLINIC.role}<br />
                    {CLINIC.address}<br />
                    <a href={`tel:${CLINIC.phone}`}>{CLINIC.phoneDisplay}</a> · <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a> · <a href={CLINIC.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">{hi ? "दिशा-निर्देश" : "Get directions"}</a>
                  </address>
                  <div className="rb-map">
                    <iframe src={CLINIC.mapEmbedHome} width="100%" height="320" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Dr. Salama Haneef clinic location – ${page.kw}`} />
                  </div>
                </section>

                <section id="faq">
                  <h2>{L.faq}</h2>
                  <div className="rb-faq">
                    {d.faqs.map(([q, a]) => (
                      <div className="rb-faq__item" key={q}>
                        <h3>{q}</h3>
                        <p>{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="related">
                  <h2>{L.related}</h2>
                  <ul className="rb-related">
                    {related.map((p) => <li key={p.slug}><Link href={`/raebareli/${p.slug}`}>{p.kw}</Link></li>)}
                    <li><Link href="/raebareli">{hi ? "सभी विषय देखें" : "All Raebareli health guides"}</Link></li>
                  </ul>
                </section>

                <p className="rb-disclaimer">{L.disclaimer}</p>
              </article>

              <aside className="col-lg-4">
                <div className="rb-side">
                  <div className="rb-side__card rb-side__card--primary">
                    <h3>{hi ? "डॉ. सलामा हनीफ से मिलें" : "Consult Dr. Salama Haneef"}</h3>
                    <p>{CLINIC.role} · {hi ? "BHU से स्नातक" : "BHU graduate"}</p>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn btn-white w-100 mb-2">{L.book}</a>
                    <a href={`tel:${CLINIC.phone}`} className="btn btn-outline-light w-100">{CLINIC.phoneDisplay}</a>
                    <small>{hi ? "नए मरीज़: पहली कंसल्टेशन पर 50% छूट*" : "New patients: 50% off first consultation*"}</small>
                  </div>
                  <nav className="rb-side__card" aria-label="On this page">
                    <h4>{hi ? "इस पेज पर" : "On this page"}</h4>
                    <ul>
                      {!hi && <li><a href="#what">{t.name}</a></li>}
                      <li><a href="#symptoms">{hi ? "लक्षण" : "Symptoms"}</a></li>
                      <li><a href="#see-doctor">{hi ? "डॉक्टर से कब मिलें" : "When to see a doctor"}</a></li>
                      <li><a href="#visit">{hi ? "पता और नक्शा" : "Address & map"}</a></li>
                      <li><a href="#faq">FAQ</a></li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
