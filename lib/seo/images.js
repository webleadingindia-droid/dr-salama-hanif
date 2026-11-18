// Image pool for the Raebareli landing pages.
// These reuse the images already used on the site (hero/doctor photo + service images).
// To use different pictures, edit the URLs below — every page picks 5 automatically.
import { HOME_SERVICES } from "@/lib/data";
import { DOCTOR_IMG } from "@/lib/site";

const ABOUT_IMG = "https://ayurhealing.net/wp-content/uploads/2025/08/ayurvedic-treatment-for-womens-wellness.jpg";
const POOL = [...HOME_SERVICES.map((s) => s.img), ABOUT_IMG];

function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }

export function pickImages(page, topic) {
  const lead = HOME_SERVICES[topic.img % HOME_SERVICES.length].img;
  const chosen = [lead, DOCTOR_IMG];
  let i = hash(page.slug);
  while (chosen.length < 5) {
    const c = POOL[i % POOL.length]; i += 3;
    if (!chosen.includes(c)) chosen.push(c);
  }
  const kw = page.kw;
  const caps = [
    [`${kw} – ${topic.name} care`, `${topic.name} care`],
    [`Dr. Salama Haneef, Gynecologist & Skin Expert in Raebareli`, `Dr. Salama Haneef`],
    [`Women's health consultation in Raebareli – ${kw}`, `Women's health consultation`],
    [`Personalised treatment plan – ${kw}`, `Personalised treatment`],
    [`Compassionate care for women in Raebareli, Uttar Pradesh`, `Compassionate care`],
  ];
  return chosen.map((src, k) => ({ src, alt: caps[k][0], caption: caps[k][1] }));
}
