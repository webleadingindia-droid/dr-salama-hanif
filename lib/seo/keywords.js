// 120 Raebareli keyword landing pages. [keyword, topic, intent]
// intents: treatment | best | specialist | nearme | symptoms | cost | lady | locality
import { TOPICS } from "./topics";

const E = [
  // --- General gynecologist / lady doctor (20)
  ["Best Gynecologist in Raebareli", "gyn", "best"],
  ["Gynecologist in Raebareli", "gyn", "treatment"],
  ["Lady Doctor in Raebareli", "gyn", "lady"],
  ["Best Lady Doctor in Raebareli", "gyn", "best"],
  ["Female Gynecologist in Raebareli", "gyn", "lady"],
  ["Gynecologist Near Me in Raebareli", "gyn", "nearme"],
  ["Women Doctor in Raebareli", "gyn", "lady"],
  ["Gynecology Clinic in Raebareli", "gyn", "specialist"],
  ["Women's Health Clinic in Raebareli", "gyn", "specialist"],
  ["Gynecologist Appointment in Raebareli", "gyn", "treatment"],
  ["Gynecologist Consultation Fees in Raebareli", "gyn", "cost"],
  ["Female Doctor for Women's Problems in Raebareli", "gyn", "lady"],
  ["Gynecologist in Gorabazar, Raebareli", "gyn", "nearme"],
  ["Gynecologist in Sri Nagar, Raebareli", "gyn", "nearme"],
  ["Gynecologist on Parsadepur Road, Raebareli", "gyn", "nearme"],
  ["Gynecologist Near Government ITI College, Raebareli", "gyn", "nearme"],
  ["Top Gynecologist in Raebareli Uttar Pradesh", "gyn", "best"],
  ["Women Specialist Doctor in Raebareli", "gyn", "specialist"],
  ["Women's Health Check-up in Raebareli", "gyn", "treatment"],
  ["Best Women's Doctor in Raebareli UP", "gyn", "best"],
  // --- Nearby towns (10)
  ...["Lalganj", "Unchahar", "Salon", "Dalmau", "Jais", "Maharajganj", "Bachhrawan", "Sareni", "Harchandpur", "Shivgarh"].map(
    (l) => [`Gynecologist Near ${l} (Raebareli)`, "gyn", "locality", l]
  ),
  // --- Skin (7)
  ["Skin Specialist in Raebareli", "skin", "specialist"],
  ["Best Skin Specialist in Raebareli", "skin", "best"],
  ["Skin Doctor in Raebareli", "skin", "treatment"],
  ["Dermatologist in Raebareli", "skin", "specialist"],
  ["Lady Skin Doctor in Raebareli", "skin", "lady"],
  ["Skin Specialist Near Me in Raebareli", "skin", "nearme"],
  ["Skin Treatment in Raebareli", "skin", "treatment"],
  // --- Acne / pigmentation (6)
  ["Pimples Treatment in Raebareli", "acne", "treatment"],
  ["Acne Treatment in Raebareli", "acne", "treatment"],
  ["Best Doctor for Acne in Raebareli", "acne", "best"],
  ["Pigmentation Treatment in Raebareli", "acne", "treatment"],
  ["Dark Spots Treatment in Raebareli", "acne", "symptoms"],
  ["Melasma Treatment in Raebareli", "acne", "symptoms"],
  // --- Hair (4)
  ["Hair Fall Treatment in Raebareli", "hair", "treatment"],
  ["Best Doctor for Hair Fall in Raebareli", "hair", "best"],
  ["Hair Loss Treatment for Women in Raebareli", "hair", "specialist"],
  ["Hair Fall Specialist Near Me in Raebareli", "hair", "nearme"],
  // --- Nutrition (4)
  ["Clinical Nutritionist in Raebareli", "nutrition", "specialist"],
  ["Dietitian in Raebareli", "nutrition", "specialist"],
  ["Diet Plan Consultation in Raebareli", "nutrition", "treatment"],
  ["Weight Loss Diet Consultation in Raebareli", "nutrition", "treatment"],
  // --- PCOD (8)
  ["PCOD Treatment in Raebareli", "pcod", "treatment"],
  ["Best Doctor for PCOD in Raebareli", "pcod", "best"],
  ["PCOD Specialist in Raebareli", "pcod", "specialist"],
  ["PCOD Treatment Near Me in Raebareli", "pcod", "nearme"],
  ["Lady Doctor for PCOD in Raebareli", "pcod", "lady"],
  ["PCOS Treatment in Raebareli", "pcod", "treatment"],
  ["PCOS Symptoms and Treatment in Raebareli", "pcod", "symptoms"],
  ["PCOD Treatment Cost in Raebareli", "pcod", "cost"],
  // --- Infertility (7)
  ["Infertility Treatment in Raebareli", "infertility", "treatment"],
  ["Best Infertility Doctor in Raebareli", "infertility", "best"],
  ["Infertility Specialist in Raebareli", "infertility", "specialist"],
  ["Infertility Treatment Near Me in Raebareli", "infertility", "nearme"],
  ["Infertility Treatment Cost in Raebareli", "infertility", "cost"],
  ["Female Infertility Treatment in Raebareli", "infertility", "symptoms"],
  ["Difficulty Conceiving Treatment in Raebareli", "infertility", "symptoms"],
  // --- Pregnancy (7)
  ["Pregnancy Checkup in Raebareli", "pregnancy", "treatment"],
  ["Best Doctor for Pregnancy in Raebareli", "pregnancy", "best"],
  ["Pregnancy Care Near Me in Raebareli", "pregnancy", "nearme"],
  ["Antenatal Care in Raebareli", "pregnancy", "specialist"],
  ["Pregnancy Diet Consultation in Raebareli", "pregnancy", "treatment"],
  ["Lady Doctor for Pregnancy in Raebareli", "pregnancy", "lady"],
  ["Pregnancy Problems Treatment in Raebareli", "pregnancy", "symptoms"],
  // --- Cyst (4), Fibroid (4)
  ["Ovarian Cyst Treatment in Raebareli", "cyst", "treatment"],
  ["Ovarian Cyst Specialist in Raebareli", "cyst", "specialist"],
  ["Best Doctor for Ovarian Cyst in Raebareli", "cyst", "best"],
  ["Ovarian Cyst Symptoms and Treatment in Raebareli", "cyst", "symptoms"],
  ["Fibroid Treatment in Raebareli", "fibroid", "treatment"],
  ["Uterine Fibroid Specialist in Raebareli", "fibroid", "specialist"],
  ["Best Doctor for Fibroid in Raebareli", "fibroid", "best"],
  ["Fibroid Symptoms and Treatment in Raebareli", "fibroid", "symptoms"],
  // --- Periods (5) + pain (4)
  ["Irregular Periods Treatment in Raebareli", "periods", "treatment"],
  ["Best Doctor for Irregular Periods in Raebareli", "periods", "best"],
  ["Delayed Periods Treatment in Raebareli", "periods", "symptoms"],
  ["Irregular Periods Treatment Near Me in Raebareli", "periods", "nearme"],
  ["Heavy Bleeding During Periods Treatment in Raebareli", "periods", "symptoms"],
  ["Period Pain Treatment in Raebareli", "pain", "treatment"],
  ["Painful Periods Doctor in Raebareli", "pain", "best"],
  ["Menstrual Cramps Treatment in Raebareli", "pain", "symptoms"],
  ["Lady Doctor for Period Problems in Raebareli", "pain", "lady"],
  // --- Discharge (5), UTI (4), itching (3)
  ["White Discharge Treatment in Raebareli", "discharge", "treatment"],
  ["Best Doctor for White Discharge in Raebareli", "discharge", "best"],
  ["Leucorrhoea Treatment in Raebareli", "discharge", "symptoms"],
  ["White Discharge Treatment Near Me in Raebareli", "discharge", "nearme"],
  ["Lady Doctor for White Discharge in Raebareli", "discharge", "lady"],
  ["UTI Treatment for Women in Raebareli", "uti", "treatment"],
  ["Urine Infection Treatment in Raebareli", "uti", "symptoms"],
  ["Burning Urination Treatment in Raebareli", "uti", "symptoms"],
  ["Best Doctor for UTI in Raebareli", "uti", "best"],
  ["Vaginal Itching Treatment in Raebareli", "itching", "treatment"],
  ["Vaginal Infection Treatment in Raebareli", "itching", "symptoms"],
  ["Intimate Hygiene Doctor in Raebareli", "itching", "specialist"],
  // --- Piles (3), hormonal (3), mood (2)
  ["Piles Treatment for Women in Raebareli", "piles", "treatment"],
  ["Piles Doctor for Women in Raebareli", "piles", "best"],
  ["Piles During Pregnancy Treatment in Raebareli", "piles", "symptoms"],
  ["Hormonal Imbalance Treatment in Raebareli", "hormonal", "treatment"],
  ["Hormonal Imbalance Symptoms in Raebareli", "hormonal", "symptoms"],
  ["Best Doctor for Hormonal Problems in Raebareli", "hormonal", "best"],
  ["Depression Counseling for Women in Raebareli", "mood", "treatment"],
  ["Low Confidence and Stress Counseling in Raebareli", "mood", "symptoms"],
];

// Hindi pages: [keyword, slug, topic]
const H = [
  ["रायबरेली में लेडी डॉक्टर", "raebareli-me-lady-doctor", "gyn"],
  ["रायबरेली में स्त्री रोग विशेषज्ञ", "raebareli-me-stree-rog-visheshagya", "gyn"],
  ["रायबरेली में पीसीओडी का इलाज", "raebareli-me-pcod-ka-ilaj", "pcod"],
  ["रायबरेली में बांझपन का इलाज", "raebareli-me-banjhpan-ka-ilaj", "infertility"],
  ["रायबरेली में प्रेगनेंसी चेकअप", "raebareli-me-pregnancy-checkup", "pregnancy"],
  ["रायबरेली में अनियमित पीरियड्स का इलाज", "raebareli-me-irregular-periods-ka-ilaj", "periods"],
  ["रायबरेली में सफेद पानी की समस्या का इलाज", "raebareli-me-safed-pani-ka-ilaj", "discharge"],
  ["रायबरेली में महिलाओं में बवासीर का इलाज", "raebareli-me-mahilao-me-bawasir-ka-ilaj", "piles"],
  ["रायबरेली में बाल झड़ने का इलाज", "raebareli-me-baal-jhadne-ka-ilaj", "hair"],
  ["रायबरेली में पिंपल्स और दाग-धब्बों का इलाज", "raebareli-me-pimples-ka-ilaj", "acne"],
];

export function slugify(s) {
  return s.toLowerCase().replace(/&/g, "and").replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const SEO_PAGES = [
  ...E.map(([kw, topic, intent, loc]) => ({ kw, slug: slugify(kw), topic, intent, loc, lang: "en" })),
  ...H.map(([kw, slug, topic]) => ({ kw, slug, topic, intent: "treatment", lang: "hi" })),
];

export function getPage(slug) {
  return SEO_PAGES.find((p) => p.slug === slug);
}

// Internal links: same topic first, then related topics, then general pages.
export function getRelated(page, n = 8) {
  const t = TOPICS[page.topic];
  const out = [];
  const add = (p) => { if (p && p.slug !== page.slug && !out.includes(p)) out.push(p); };
  const sameLang = (p) => p.lang === page.lang;
  SEO_PAGES.filter((p) => p.topic === page.topic && sameLang(p)).forEach((p) => out.length < 4 && add(p));
  (t.related || []).forEach((rk) => add(SEO_PAGES.find((p) => p.topic === rk && sameLang(p) && p.intent === "treatment")));
  SEO_PAGES.filter((p) => p.topic === page.topic && p.lang === "en").forEach((p) => out.length < 6 && add(p));
  ["best-gynecologist-in-raebareli", "lady-doctor-in-raebareli", "pcod-treatment-in-raebareli"].forEach((s) => add(getPage(s)));
  return out.slice(0, n);
}

export const GROUPS = (() => {
  const g = {};
  SEO_PAGES.filter((p) => p.lang === "en").forEach((p) => {
    const name = p.intent === "locality" ? "Nearby Towns" : TOPICS[p.topic].group;
    (g[name] = g[name] || []).push(p);
  });
  return g;
})();
