import { SITE_URL } from "@/lib/site";
import { SEO_PAGES } from "@/lib/seo/keywords";

export const dynamic = "force-static";

export function GET() {
  const key = SEO_PAGES.filter((p) => p.lang === "en" && ["best", "treatment"].includes(p.intent) && p.topic !== "gyn" || p.slug === "best-gynecologist-in-raebareli" || p.slug === "lady-doctor-in-raebareli");
  const body = `# Dr. Salama Haneef — Gynecologist & Skin Expert, Raebareli

> Dr. Salama Haneef is a Banaras Hindu University (BHU) graduate, Gynecologist & Skin Expert and Clinical Nutritionist in Raebareli, Uttar Pradesh. Services: PCOD/PCOS, infertility, pregnancy care, ovarian cyst, fibroid, irregular periods, white discharge, UTI, vaginal itching, piles in women, hair fall, acne and pigmentation, hormonal imbalance, counseling and clinical nutrition guidance.

## Clinic
- Address: 585/14 Parsadepur Rd, Near Government ITI College, Gorabazar, Sri Nagar, Raebareli, Uttar Pradesh 229001, India
- Phone / WhatsApp: +91 6389933191
- Offers for new patients (terms apply): 50% off first consultation, 30% off blood & urine tests, 15% off medicines
- Website: ${SITE_URL}

## Key pages
- [Raebareli health guides (all topics)](${SITE_URL}/raebareli)
- [About Dr. Salama Haneef](${SITE_URL}/about)
- [Services](${SITE_URL}/services)
- [Treatments](${SITE_URL}/treatments)
- [Contact](${SITE_URL}/contact)
${key.map((p) => `- [${p.kw}](${SITE_URL}/raebareli/${p.slug})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
