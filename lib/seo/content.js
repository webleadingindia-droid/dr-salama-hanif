import { CLINIC } from "@/lib/data";
import { TOPICS, HI } from "./topics";
import { SITE_URL, CLINIC_GEO } from "@/lib/site";

const ADDR = CLINIC.address;
const PH = CLINIC.phone;
const OFFER = "New patients get 50% off the first consultation (terms apply).";

function clip(s, n = 158) {
  if (s.length <= n) return s;
  const c = s.slice(0, n - 1);
  return c.slice(0, c.lastIndexOf(" ")) + "…";
}

export function metaFor(page) {
  const kw = page.kw;
  const full = `${kw} | Dr. Salama Haneef`;
  const title = full.length <= 64 || page.lang === "hi" ? full : kw;
  const candidates =
    page.lang === "hi"
      ? [`${kw} — डॉ. सलामा हनीफ, गायनेकोलॉजिस्ट एवं स्किन एक्सपर्ट, गोराबाजार, रायबरेली। पहली कंसल्टेशन पर 50% छूट। कॉल: ${PH}`, `${kw} — डॉ. सलामा हनीफ, गोराबाजार, रायबरेली। 50% छूट। कॉल: ${PH}`]
      : [`${kw}: Dr. Salama Haneef, BHU graduate Gynecologist & Skin Expert, Gorabazar, Raebareli. 50% off first visit. Call ${PH}.`, `${kw}: Dr. Salama Haneef, Gynecologist & Skin Expert, Gorabazar, Raebareli. 50% off first visit. Call ${PH}.`, `${kw}: Dr. Salama Haneef, Gynecologist & Skin Expert, Raebareli. Call ${PH}.`];
  const description = candidates.find((c) => c.length <= 160) || clip(candidates[candidates.length - 1]);
  return { title, description };
}

function extraBlock(page, t) {
  const n = t.noun;
  switch (page.intent) {
    case "best":
      return { title: `How to choose the right doctor for ${n}`, paras: [`Dr. Salama Haneef is a BHU graduate Gynecologist & Skin Expert and Clinical Nutritionist who follows a patient-first approach: compassionate care, modern medicine and patient trust.`], list: ["Check the doctor's qualifications and experience in the relevant area", "Look for a doctor who listens and explains clearly without rushing", "Make sure you feel private and comfortable — many women prefer a woman doctor", "Ask why each test or medicine is advised", "Prefer honest advice, transparent pricing and proper follow-up"] };
    case "specialist":
      return { title: `What a specialist looks at in ${n}`, paras: [`A specialist looks beyond a single symptom. For ${n}, evaluation usually considers your cycle and medical history, a focused examination and, where appropriate, tests that confirm the cause.`, `Treatment then targets the cause and is supported by diet, lifestyle guidance and follow-up so that improvement lasts.`] };
    case "nearme":
      return { title: "Finding the clinic in Raebareli", paras: [`The clinic is at ${ADDR}. It is on Parsadepur Road, near Government ITI College, in the Gorabazar and Sri Nagar area of Raebareli.`, `Call ${PH} before you come so your visit can be planned, and use the map on this page for directions.`] };
    case "symptoms":
      return { title: `Common symptoms and possible causes of ${n}`, paras: [`If these symptoms sound familiar, it is better to speak to a doctor than to wait. The possible causes below are only a guide — a consultation is needed to know the exact reason.`], list: t.causes };
    case "cost":
      return { title: `What affects the cost of ${n} care`, paras: [`The cost depends on your individual situation, so it cannot be fairly quoted without a consultation. Consultation fees are best confirmed by phone on ${PH}.`, `${OFFER} The clinic also offers 30% off blood and urine tests and 15% off medicines — please confirm current offers when you call.`], list: ["The condition and how severe it is", "Whether tests such as blood tests or ultrasound are needed", "The number of follow-up visits", "The medicines prescribed"] };
    case "lady":
      return { title: "Why many women prefer a woman doctor", paras: [`Many women feel more comfortable discussing periods, discharge, pregnancy and intimate concerns with a woman doctor. Dr. Salama Haneef offers a private, respectful and judgment-free consultation.`, `You can speak openly, ask every question and take the time to understand your options.`] };
    case "locality":
      return { title: `Visiting the Raebareli clinic from ${page.loc}`, paras: [`Women from ${page.loc} and surrounding villages can consult Dr. Salama Haneef at her clinic in Raebareli city on Parsadepur Road, Gorabazar. The clinic itself is not in ${page.loc}.`, `To plan your visit, call ${PH} and briefly share your concern so the clinic can guide you on timing. Use the map on this page for directions.`] };
    default:
      return { title: "What to expect at your first visit", paras: [`Your first consultation for ${n} begins with listening. Dr. Salama Haneef takes your history, understands your symptoms and daily routine, and examines you in a private setting.`, `Tests such as blood tests or an ultrasound are advised only when they will help — and you will be told why. You leave with a clear explanation, a treatment plan and guidance on diet and lifestyle.`] };
  }
}

export function build(page) {
  if (page.lang === "hi") return buildHi(page);
  const t = TOPICS[page.topic];
  const loc = page.loc ? ` Women from ${page.loc} and nearby villages visit this Raebareli city clinic.` : "";
  const faqs = [
    ...t.faqs,
    ["Where is Dr. Salama Haneef's clinic in Raebareli?", `The clinic is at ${ADDR}.${page.loc ? ` It is in Raebareli city, not in ${page.loc}.` : ""}`],
    [`How can I book an appointment for ${t.noun}?`, `Call ${PH} or use the Book Appointment button on this website. ${OFFER}`],
  ];
  return {
    lang: "en",
    t,
    intro: `If you are searching for “${page.kw}”, Dr. Salama Haneef — a Banaras Hindu University (BHU) graduate, Gynecologist & Skin Expert and Clinical Nutritionist — consults at her clinic on Parsadepur Road, Gorabazar, Sri Nagar, Raebareli. ${t.intro}`,
    short: `For ${t.noun} in Raebareli, you can consult Dr. Salama Haneef, a BHU graduate Gynecologist & Skin Expert, at ${ADDR}. Call ${PH} to book. ${OFFER}${loc}`,
    extra: extraBlock(page, t),
    faqs,
    why: ["BHU graduate — experienced women's health specialist", "Gynecologist & Skin Expert and Clinical Nutritionist: women's health, skin and diet guidance from one doctor", "Compassionate care, modern medicine and patient trust", "Clear explanations — you always know why a test or medicine is advised", "Offers for new patients: 50% off first consultation, 30% off blood & urine tests, 15% off medicines (terms apply)", "Easy to reach on Parsadepur Road, near Government ITI College, Gorabazar"],
    labels: { what: `${t.name}: what you should know`, symptoms: `Symptoms of ${t.noun}`, see: `When to see a doctor for ${t.noun} in Raebareli`, approach: `Our approach to ${t.noun} treatment in Raebareli`, why: "Why choose Dr. Salama Haneef in Raebareli", areas: "Areas we serve around Raebareli", visit: "Clinic address, phone & map", faq: `Frequently asked questions about ${t.noun}`, related: "Related health guides for Raebareli", short: "Quick answer", book: "Book Appointment", call: "Call Now", disclaimer: "This page is for general information and is not a substitute for a medical consultation. Please see a doctor for diagnosis and treatment. In an emergency, go to the nearest hospital." },
    topicName: t.name,
    cond: t.cond,
  };
}

function buildHi(page) {
  const h = HI[page.topic];
  const t = TOPICS[page.topic];
  const faqs = [
    ...h.faqs,
    ["डॉ. सलामा हनीफ का क्लिनिक रायबरेली में कहाँ है?", "क्लिनिक का पता: 585/14 पारसादेपुर रोड, गवर्नमेंट आईटीआई कॉलेज के पास, गोराबाजार, श्रीनगर, रायबरेली, उत्तर प्रदेश 229001।"],
    ["अपॉइंटमेंट कैसे बुक करें?", `${PH} पर कॉल करें या वेबसाइट पर 'Book Appointment' बटन का उपयोग करें। नए मरीज़ों को पहली कंसल्टेशन पर 50% छूट (शर्तें लागू)।`],
  ];
  return {
    lang: "hi",
    t,
    intro: `रायबरेली में “${page.kw.replace("रायबरेली में ", "")}” खोज रही हैं? डॉ. सलामा हनीफ — बनारस हिंदू विश्वविद्यालय (BHU) से स्नातक, गायनेकोलॉजिस्ट एवं स्किन एक्सपर्ट और क्लिनिकल न्यूट्रिशनिस्ट — पारसादेपुर रोड, गोराबाजार, श्रीनगर, रायबरेली स्थित अपने क्लिनिक में परामर्श देती हैं। ${h.intro}`,
    short: `रायबरेली में ${h.name} के लिए आप डॉ. सलामा हनीफ से 585/14 पारसादेपुर रोड, गवर्नमेंट आईटीआई कॉलेज के पास, गोराबाजार, श्रीनगर, रायबरेली (229001) में मिल सकती हैं। अपॉइंटमेंट के लिए ${PH} पर कॉल करें। नए मरीज़ों को पहली कंसल्टेशन पर 50% छूट (शर्तें लागू)।`,
    extra: { title: "पहली विज़िट में क्या होता है", paras: [`पहली कंसल्टेशन में डॉ. सलामा हनीफ आपकी बात ध्यान से सुनती हैं, आपके लक्षण और दिनचर्या समझती हैं और निजी माहौल में जांच करती हैं।`, `ज़रूरत होने पर ही ब्लड टेस्ट या अल्ट्रासाउंड जैसी जांच सुझाई जाती हैं, और आपको बताया जाता है कि वह क्यों ज़रूरी है। आपको स्पष्ट जानकारी, इलाज की योजना और डाइट-जीवनशैली की सलाह मिलती है।`] },
    faqs,
    why: ["BHU से स्नातक, अनुभवी महिला रोग विशेषज्ञ", "गायनेकोलॉजिस्ट, स्किन एक्सपर्ट और क्लिनिकल न्यूट्रिशनिस्ट — एक ही डॉक्टर से सलाह", "करुणामयी देखभाल, आधुनिक चिकित्सा और मरीज़ों का भरोसा", "पहली कंसल्टेशन पर 50%, ब्लड-यूरिन टेस्ट पर 30% और दवाओं पर 15% की छूट (नए मरीज़ों के लिए, शर्तें लागू)", "पारसादेपुर रोड, गवर्नमेंट आईटीआई कॉलेज के पास, गोराबाजार में आसानी से पहुँच"],
    labels: { what: `${h.name} क्या है`, symptoms: `${h.name} के आम लक्षण`, see: "डॉक्टर से कब मिलें", approach: "हमारा तरीका", why: "डॉ. सलामा हनीफ से परामर्श क्यों", areas: "रायबरेली के आसपास हम किन क्षेत्रों की सेवा करते हैं", visit: "क्लिनिक का पता, फोन और नक्शा", faq: "अक्सर पूछे जाने वाले सवाल", related: "रायबरेली के लिए संबंधित जानकारी", short: "संक्षिप्त उत्तर", book: "अपॉइंटमेंट बुक करें", call: "अभी कॉल करें", disclaimer: "यह पृष्ठ केवल सामान्य जानकारी के लिए है और डॉक्टर की सलाह का विकल्प नहीं है। निदान और इलाज के लिए कृपया डॉक्टर से मिलें। आपातकाल में नज़दीकी अस्पताल जाएं।" },
    hi: h,
    topicName: h.name,
    cond: t.cond,
  };
}

export function graphFor(page, data, url, images) {
  const { title, description } = metaFor(page);
  const physician = {
    "@type": ["Physician", "MedicalBusiness"],
    "@id": `${SITE_URL}/#physician`,
    name: "Dr. Salama Haneef",
    description: "BHU graduate Gynecologist & Skin Expert and Clinical Nutritionist in Raebareli, Uttar Pradesh.",
    url: SITE_URL,
    telephone: "+91-6389933191",
    image: images[1].src,
    medicalSpecialty: ["Gynecologic", "Obstetric", "Dermatology"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Banaras Hindu University" },
    address: { "@type": "PostalAddress", streetAddress: "585/14 Parsadepur Rd, Near Government ITI College, Gorabazar, Sri Nagar", addressLocality: "Raebareli", addressRegion: "Uttar Pradesh", postalCode: "229001", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: CLINIC_GEO.lat, longitude: CLINIC_GEO.lng },
    hasMap: CLINIC.mapsDirectionsUrl,
    areaServed: { "@type": "City", name: "Raebareli" },
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      physician,
      {
        "@type": ["MedicalWebPage", "WebPage"],
        "@id": `${url}#webpage`,
        url, name: title, description,
        inLanguage: page.lang === "hi" ? "hi-IN" : "en-IN",
        about: { "@type": "MedicalCondition", name: data.cond },
        primaryImageOfPage: { "@type": "ImageObject", url: images[0].src },
        mainEntity: { "@id": `${SITE_URL}/#physician` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".rb-short"] },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Raebareli Health Guides", item: `${SITE_URL}/raebareli` },
          { "@type": "ListItem", position: 3, name: page.kw, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };
}
