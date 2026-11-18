// ============================================================
// Dr. Salama Haneef — shared site content
// Centralised here so pages stay declarative (map over data)
// instead of repeating near-identical markup.
// ============================================================

export const CLINIC = {
  name: "Dr. Salama Haneef",
  doctor: "Dr. Salama Haneef",
  role: "Gynecologist & Skin Expert",
  tagline: "Dedicated to Hope, Healing and Recovery",
  phone: "6389933191",
  phoneDisplay: "6389933191",
  whatsapp: "https://wa.me/916389933191",
  address:
    "585/14 Parsadepur Rd, Near Government ITI College, Gorabazar, Sri Nagar, Raebareli, Uttar Pradesh 229001",
  addressShort: "585/14 Parsadepur Rd, Sri Nagar, Raebareli, UP 229001",
  mapEmbedHome:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5265286508907!2d81.2596859!3d26.2120761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba70c021d7f71%3A0x1c7d8760bb7f743d!2sDr.%20Salama%20Hanif!5e0!3m2!1sen!2sin!4v1784365639795!5m2!1sen!2sin",
  mapEmbedContact:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7!2d81.2167!3d26.2298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzQ3LjMiTiA4McKwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
  mapsDirectionsUrl: "https://maps.google.com?q=585/14+Parsadepur+Rd+Raebareli+UP",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/treatments", label: "Treatments" },
  { href: "/gallery", label: "Care Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const HERO_STATS = [
  { count: 50, suffix: "%", label: "Off on First Consultation" },
  { count: 30, suffix: "%", label: "Off on Blood & Urine Tests" },
  { count: 15, suffix: "%", label: "Off on Medicines" },
];

export const ABOUT_STRIP_HIGHLIGHTS = [
  "PCOD / PCOS Treatment",
  "Infertility Treatment",
  "Pregnancy Care",
  "Fibroid & Ovarian Cyst",
  "Skin & Hair Care",
  "Clinical Nutrition Guidance",
];

export const ABOUT_STRIP_STATS = [
  { variant: "white", icon: "bi-gift-fill", count: 50, suffix: "%", label: "Off First Consultation" },
  { variant: "pink", icon: "bi-droplet-fill", count: 30, suffix: "%", label: "Off Blood & Urine Tests" },
  { variant: "blue", icon: "bi-capsule-pill", count: 15, suffix: "%", label: "Off on Medicines" },
];

// Home page — 9 featured service cards (with images)
export const HOME_SERVICES = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKqilDOCmgBdgNKBWQChX5678oW-TcxHfHEW6Yfejf3P9ZoT0hoYkfDk&s=10",
    title: "PCOD / PCOS Treatment",
    desc: "Personalised care for polycystic ovary syndrome — hormonal balance, lifestyle and diet guidance, including Ayurvedic guidance where suitable.",
  },
  {
    img: "https://srisriayurvedahospital.org/wp-content/uploads/2024/03/Fertility-copy-1024x577.jpg",
    title: "Infertility Treatment",
    desc: "Careful evaluation and guidance for couples facing difficulty in conceiving, with a compassionate, step-by-step approach.",
  },
  {
    img: "https://dranshumala.com/wp-content/uploads/2021/09/Ovarian-cystectomy.jpg",
    title: "Ovarian Cyst Treatment",
    desc: "Diagnosis and proper management of ovarian cysts with clear explanation at every stage.",
  },
  {
    img: "https://punyahospitals.com/assets/images/service/specialities/fibroid-treatment.jpg",
    title: "Fibroid Treatment",
    desc: "Evaluation and treatment guidance for uterine fibroids, tailored to each woman's symptoms and needs.",
  },
  {
    img: "https://regencyhealthcare.in/wp-content/uploads/2025/03/Irregular-Periods.png",
    title: "Irregular Periods & Menstrual Pain",
    desc: "Diagnosis and care for irregular cycles, painful periods and other menstrual problems.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloKNRwxuU_ci4VI0Ow-w74o6PYrEpdnUPOkQ8TuN_BUB0uX5L2W5OqiM&s=10",
    title: "Pregnancy Care",
    desc: "Regular antenatal check-ups, nutrition and lifestyle guidance for a healthy pregnancy and a healthy baby.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0q7Zc9O519KAYDEc-JVujnPOpRL6emgxzAIUqqO4l0hdkk3p7xHFeTzq&s=10",
    title: "Hormonal Imbalance Care",
    desc: "Identifying the hidden signs of hormonal imbalance and treating the cause, not just the symptoms.",
  },
  {
    img: "https://images.ctfassets.net/6mz6gnctx58g/3XCew63wVyzQeFL1G0H4yU/10c9e9122e81bf03a807c2d42b306317/3XCew63wVyzQeFL1G0H4yU-DT_Banner_2x.png",
    title: "White Discharge, UTI & Intimate Care",
    desc: "Treatment for white discharge, urinary burning or pain, vaginal itching and odour — with practical intimate-hygiene guidance.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp4z_Msu87QuH2SQaQ0ui_JmLLeVDITr2rUImSrl0PfzIX0mZDm6CsvaQ&s=10",
    title: "Skin, Hair & Piles Care",
    desc: "Care for acne, pigmentation, hair fall and piles in women, along with diet and lifestyle guidance.",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "bi-person-check-fill",
    title: "Experienced Specialist",
    desc: "Dr. Salama Haneef is a Banaras Hindu University (BHU) graduate and an experienced women's health specialist.",
  },
  {
    icon: "bi-shield-heart-fill",
    title: "Gynecology, Skin & Nutrition",
    desc: "Expert care as a Gynecologist & Skin Expert, along with clinical nutrition and health guidance.",
  },
  {
    icon: "bi-cash-coin",
    title: "Affordable Care",
    desc: "50% off first consultation, 30% off blood & urine tests, 15% off medicines.",
  },
  {
    icon: "bi-heart-fill",
    title: "Compassionate, Patient-First Care",
    desc: "Compassionate care, modern medicine and patient trust — every woman is heard and treated with dignity.",
  },
];

export const DISCOUNT_CHIPS = [
  { num: "50%", label: "First Consultation" },
  { num: "15%", label: "On Medicines" },
  { num: "30%", label: "Blood & Urine Tests" },
];

export const AWARENESS_CARDS = [
  {
    variant: "pink",
    icon: "bi-exclamation-triangle-fill",
    title: "Hormonal Imbalance: Hidden Signs",
    desc: "Irregular periods, sudden weight gain, acne, hair fall and mood changes can be early signs of hormonal imbalance or PCOD. Early treatment prevents complications.",
  },
  {
    variant: "blue",
    icon: "bi-heart-pulse-fill",
    title: "Pregnancy: Diet & Check-ups",
    desc: "Your daily diet directly impacts your baby's growth. Eat a balanced diet, keep up with regular check-ups, and don't believe myths like complete bed rest being necessary.",
  },
  {
    variant: "gold",
    icon: "bi-shield-check-fill",
    title: "Intimate Hygiene",
    desc: "Wear breathable cotton, keep the area dry and clean, and never ignore itching, white discharge or irritation — especially in summer.",
  },
];

export const TESTIMONIALS = [
  {
    stars: 0,
    quote:
      "Every woman is heard with kindness and treated with dignity — your comfort and confidence matter as much as your treatment.",
    name: "Compassionate Care",
    role: "Our promise to every patient",
    avatar: "C",
    avatarGradient: "linear-gradient(135deg, var(--pink), var(--blue))",
  },
  {
    stars: 0,
    quote:
      "Accurate diagnosis and up-to-date treatment, explained clearly so you always understand the next step.",
    name: "Modern Medicine",
    role: "Our promise to every patient",
    avatar: "M",
    avatarGradient: "linear-gradient(135deg, var(--teal), var(--blue))",
  },
  {
    stars: 0,
    quote:
      "Your health is our priority — honest advice and personal attention at every visit.",
    name: "Patient Trust",
    role: "Our promise to every patient",
    avatar: "T",
    avatarGradient: "linear-gradient(135deg, #f6c23e, #e67e22)",
  },
];

export const GALLERY_PREVIEW = [
  { icon: "bi-hospital-fill", label: "Gynecology Care" },
  { icon: "bi-brightness-high", label: "Skin & Hair Care" },
  { icon: "bi-baby", label: "Pregnancy Care" },
  { icon: "bi-flower2", label: "Clinical Nutrition" },
];

export const GALLERY_ITEMS = [
  { icon: "bi-hospital-fill", label: "Gynecology Care", gradient: "linear-gradient(145deg,#fce4f0,#f3e8f9)" },
  { icon: "bi-activity", label: "PCOD & PCOS Care", gradient: "linear-gradient(145deg,#e8f3fc,#f0faff)" },
  { icon: "bi-flower2", label: "Infertility Guidance", gradient: "linear-gradient(145deg,#f0f9f0,#e8f5e9)" },
  { icon: "bi-baby-fill", label: "Pregnancy Care", gradient: "linear-gradient(145deg,#fef9e7,#fdf6d3)" },
  { icon: "bi-heart-pulse", label: "Ovarian Cyst & Fibroid", gradient: "linear-gradient(145deg,#fce4f0,#ffe0ec)" },
  { icon: "bi-calendar-heart", label: "Menstrual Health", gradient: "linear-gradient(145deg,#e8eaf6,#e3f2fd)" },
  { icon: "bi-droplet-fill", label: "White Discharge & Intimate Care", gradient: "linear-gradient(145deg,#fff3e0,#fff8e1)" },
  { icon: "bi-shield-plus-fill", label: "Urinary Health", gradient: "linear-gradient(145deg,#f3e5f5,#ede7f6)" },
  { icon: "bi-brightness-high-fill", label: "Skin Care", gradient: "linear-gradient(145deg,#e0f7fa,#e0f2f1)" },
  { icon: "bi-scissors", label: "Hair Care", gradient: "linear-gradient(145deg,#fce4f0,#e8f3fc)" },
  { icon: "bi-prescription2", label: "Clinical Nutrition", gradient: "linear-gradient(145deg,#f0f9f0,#fce4f0)" },
  { icon: "bi-emoji-smile-fill", label: "Counseling & Confidence", gradient: "linear-gradient(145deg,#e8f3fc,#f0f9f0)" },
];

export const GALLERY_FILTERS = ["All", "Gynecology", "Pregnancy", "Skin & Hair", "Wellness"];

export const SERVICES_FULL = [
  {
    icon: "bi-activity",
    title: "PCOD / PCOS Treatment",
    desc: "Evaluation, lifestyle and diet guidance and treatment to regulate cycles and manage PCOD symptoms.",
  },
  {
    icon: "bi-flower2",
    title: "Infertility Treatment",
    desc: "Proper evaluation and personalised guidance for women and couples trying to conceive.",
  },
  {
    icon: "bi-heart-pulse",
    title: "Ovarian Cyst Treatment",
    desc: "Diagnosis and management of ovarian cysts with clear advice on the next steps.",
  },
  {
    icon: "bi-bandaid",
    title: "Fibroid Treatment",
    desc: "Evaluation and treatment options for uterine fibroids causing heavy bleeding, pain or other problems.",
  },
  {
    icon: "bi-calendar-heart",
    title: "Irregular Periods",
    desc: "Diagnosis and care for irregular, delayed or missed periods and the hormonal causes behind them.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Menstrual Pain",
    desc: "Relief-focused care for painful periods, with medical treatment and lifestyle guidance.",
  },
  {
    icon: "bi-droplet",
    title: "White Discharge Treatment",
    desc: "Diagnosis and treatment for chronic white discharge and related infections.",
  },
  {
    icon: "bi-shield-check",
    title: "Vaginal Itching, Odour & Intimate Hygiene",
    desc: "Treatment and practical guidance for itching, irritation, odour and everyday intimate care.",
  },
  {
    icon: "bi-shield-plus",
    title: "Urinary Problems",
    desc: "Care for burning or painful urination, urine retention and recurrent urinary infections.",
  },
  {
    icon: "bi-baby",
    title: "Pregnancy Care",
    desc: "Antenatal check-ups, diet and lifestyle guidance, and support for a healthy mother and baby.",
  },
  {
    icon: "bi-brightness-high",
    title: "Acne, Pigmentation & Skin Care",
    desc: "Skin care for acne, pigmentation, white spots and uneven skin tone with visible improvement.",
  },
  {
    icon: "bi-scissors",
    title: "Hair Fall Treatment",
    desc: "Finding the cause of hair fall — hormonal, nutritional or otherwise — and treating it.",
  },
  {
    icon: "bi-emoji-expressionless",
    title: "Piles in Women",
    desc: "Care and guidance for piles (bawasir) in women, handled with privacy and sensitivity.",
  },
  {
    icon: "bi-emoji-smile",
    title: "Depression & Confidence Counseling",
    desc: "Supportive counseling for low confidence, stress and emotional well-being.",
    link: "/contact",
  },
];

export const OFFER_BAND = [
  { num: "50%", title: "First Consultation", desc: "New patients get 50% off on their first visit", variant: "white" },
  { num: "15%", title: "On Medicines", desc: "Discount on prescribed medicines", variant: "pink" },
  { num: "30%", title: "Blood & Urine Tests", desc: "Discount on blood and urine diagnostic tests", variant: "white" },
];

// Treatments accordion content
export const TREATMENTS = [
  {
    id: "t1",
    icon: "bi-activity",
    title: "PCOD / PCOS (Polycystic Ovary Syndrome)",
    intro:
      "PCOD is a hormonal condition affecting women of reproductive age, leading to hormonal imbalance, irregular cycles and other symptoms.",
    listTitle: "Common Symptoms:",
    list: [
      "Irregular or missed periods",
      "Excess facial/body hair",
      "Sudden weight gain, especially around the abdomen",
      "Acne and oily skin",
      "Hair thinning or hair fall",
      "Difficulty conceiving",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Dr. Salama Haneef provides personalised PCOD care based on your symptoms and tests, along with diet and lifestyle guidance. Early diagnosis and treatment help prevent long-term complications.",
    open: true,
  },
  {
    id: "t2",
    icon: "bi-flower2",
    title: "Infertility Treatment",
    intro:
      "Infertility means difficulty in conceiving after a year of regular, unprotected intercourse. It can have many causes and needs proper evaluation.",
    listTitle: "Possible Causes in Women:",
    list: [
      "PCOD/PCOS affecting ovulation",
      "Blocked or damaged fallopian tubes",
      "Uterine problems such as fibroids",
      "Thyroid or other hormonal problems",
      "Lifestyle and nutritional factors",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Dr. Salama Haneef begins with a careful evaluation and then suggests a treatment plan suited to your situation, explained clearly at every step.",
  },
  {
    id: "t3",
    icon: "bi-baby",
    title: "Pregnancy Care",
    intro:
      "Regular antenatal care and a balanced diet play a crucial role in your baby's growth and your own health throughout pregnancy.",
    listTitle: "Our Pregnancy Care Includes:",
    list: [
      "Regular antenatal check-ups",
      "Nutrition and diet guidance for mother and baby",
      "Monitoring of the baby's growth",
      "Guidance on safe activity and rest during pregnancy",
      "Clearing common myths about pregnancy",
      "Postnatal care guidance",
    ],
  },
  {
    id: "t4",
    icon: "bi-calendar-heart",
    title: "Menstrual Problems",
    intro:
      "Menstrual problems are among the most common reasons women seek gynecological care. Your cycle is an important sign of your overall health.",
    listTitle: "Conditions We Treat:",
    list: [
      "Irregular or missed periods",
      "Painful periods",
      "Heavy bleeding",
      "Hormonal imbalance symptoms",
      "Premenstrual symptoms",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Treatment depends on the underlying cause and may include medicines, diet and lifestyle changes. Persistent pain or irregular cycles should never be ignored.",
  },
  {
    id: "t5",
    icon: "bi-bandaid",
    title: "Fibroid Treatment",
    intro:
      "Uterine fibroids are non-cancerous growths in the uterus that can cause heavy bleeding, pain and pressure symptoms.",
    listTitle: "Symptoms:",
    list: [
      "Heavy or prolonged periods",
      "Pelvic pressure or pain",
      "Frequent urination",
      "Back or leg pain",
      "Difficulty conceiving",
    ],
    approachTitle: "Our Approach:",
    approach:
      "The right option depends on the size and location of the fibroid and your symptoms. After evaluation, the doctor will explain the choices available to you.",
  },
  {
    id: "t6",
    icon: "bi-heart-pulse",
    title: "Ovarian Cyst Treatment",
    intro:
      "Ovarian cysts are fluid-filled sacs on or inside an ovary. Many are harmless, but some need medical attention.",
    listTitle: "Common Signs:",
    list: [
      "Pelvic or lower abdominal pain",
      "Bloating or heaviness",
      "Irregular periods",
      "Pain during periods or intercourse",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Proper evaluation decides whether a cyst needs monitoring or treatment. You will get clear guidance on what to do next.",
  },
  {
    id: "t7",
    icon: "bi-droplet",
    title: "White Discharge & Intimate Health",
    intro:
      "Occasional discharge is normal, but itching, irritation, odour or persistent white discharge needs proper care.",
    listTitle: "Warning Signs:",
    list: [
      "Persistent white discharge",
      "Itching or irritation",
      "Unusual odour",
      "Burning or painful urination",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Treatment depends on the cause, along with simple intimate-hygiene habits such as breathable cotton clothing and keeping the area clean and dry.",
  },
];

export const TREATMENT_OPTIONS = [
  "PCOD / PCOS Treatment",
  "Infertility Treatment",
  "Ovarian Cyst",
  "Fibroid Treatment",
  "Irregular Periods",
  "Menstrual Pain",
  "Pregnancy Care",
  "White Discharge / Intimate Care",
  "Urinary Problems",
  "Skin / Hair Issues",
  "Piles",
  "Depression & Confidence Counseling",
  "Other",
];

export const BLOG_POSTS = [
  {
    emoji: "🩸",
    gradient: "linear-gradient(145deg,#fce4f0,#f3e8f9)",
    tag: "Periods & Exercise",
    title: "Myth vs Fact: Is Exercise During Periods Harmful?",
    excerpt:
      "Many women avoid exercise during periods, believing it harms the body. In reality, light to moderate exercise can ease cramps, improve mood and boost circulation. Know the myths and the facts.",
    date: "Health Awareness",
  },
  {
    emoji: "🌿",
    gradient: "linear-gradient(145deg,#e8f3fc,#f0faff)",
    tag: "Hormonal Health",
    title: "Hidden Signs of Hormonal Imbalance in Women",
    excerpt:
      "Irregular periods, sudden weight gain, acne, hair fall and mood changes can all point to hormonal imbalance. Learn which signs not to ignore and when to see a gynecologist.",
    date: "Health Awareness",
  },
  {
    emoji: "🌸",
    gradient: "linear-gradient(145deg,#f0f9f0,#e8f5e9)",
    tag: "Intimate Care",
    title: "Summer Intimate Care: Don't Ignore Itching and White Discharge",
    excerpt:
      "Tight clothes, damp underwear and poor hygiene can cause infections in summer. Simple habits like wearing cotton and keeping dry help protect your intimate health.",
    date: "Health Awareness",
  },
  {
    emoji: "🤱",
    gradient: "linear-gradient(145deg,#fef9e7,#fdf6d3)",
    tag: "Pregnancy Care",
    title: "How Your Daily Diet Affects Your Baby's Growth",
    excerpt:
      "Everything you eat during pregnancy plays a role in your baby's development. A balanced diet supports growth, energy and the health of both mother and child.",
    date: "Health Awareness",
  },
];

export const EDUCATION = [
  { icon: "bi-mortarboard-fill", title: "Graduate, Banaras Hindu University", desc: "BHU — experienced women's health specialist" },
  { icon: "bi-award-fill", title: "Gynecologist & Skin Expert", desc: "Women's health, gynecology and skin care" },
  { icon: "bi-star-fill", title: "Clinical Nutritionist & Health Expert", desc: "Diet and lifestyle guidance for healing from within" },
];

export const SPECIALIZATIONS = [
  "PCOD & PCOS Management",
  "Infertility Treatment",
  "Pregnancy Care",
  "Ovarian Cyst & Fibroid",
  "Menstrual Disorders",
  "White Discharge & Intimate Health",
  "Skin & Hair Care",
  "Clinical Nutrition & Lifestyle Guidance",
];

export const CLINIC_TIMINGS = [
  { day: "Mon – Thu, Sat", time: "9:00AM – 12:00 PM", icon: "bi-sun", period: "morning" },
  { day: "Mon – Thu, Sat", time: "6:00PM – 9:00 PM", icon: "bi-moon-stars", period: "evening" },
  { day: "Sunday", time: null, closed: true },
];
