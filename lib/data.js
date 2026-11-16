// ============================================================
// We Care Medical Zone — shared site content
// Centralised here so pages stay declarative (map over data)
// instead of repeating near-identical markup.
// ============================================================

export const CLINIC = {
  name: "We Care Medical Zone",
  doctor: "Dr. Salama Hanif",
  role: "Gynecologist & Obstetrician",
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
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const HERO_STATS = [
  { count: 5000, suffix: "+", label: "Happy Patients" },
  { count: 10, suffix: "+", label: "Years Ayurvedic Experience" },
  { count: 15, suffix: "+", label: "Services Offered" },
];

export const ABOUT_STRIP_HIGHLIGHTS = [
  "Ayurvedic PCOD & Infertility",
  "Ayurvedic Pregnancy Care",
  "Normal Delivery Support",
  "Ayurvedic Menopause Care",
  "Skin & Hair (Ayurveda)",
  "Mental Wellness (Yoga & Meditation)",
];

export const ABOUT_STRIP_STATS = [
  { variant: "white", icon: "bi-hospital-fill", count: 10, suffix: "+", label: "Years Ayurvedic Experience" },
  { variant: "pink", icon: "bi-people-fill", count: 5000, suffix: "+", label: "Patients Treated Naturally" },
  { variant: "blue", icon: "bi-award-fill", count: 15, suffix: "+", label: "Ayurvedic Services Offered" },
];

// Home page — 9 featured service cards (with images)
export const HOME_SERVICES = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKqilDOCmgBdgNKBWQChX5678oW-TcxHfHEW6Yfejf3P9ZoT0hoYkfDk&s=10",
    title: "Ayurvedic PCOD / PCOS Treatment",
    desc: "Hormonal balancing with Ayurvedic herbs, lifestyle counseling and dietary management for polycystic ovary syndrome.",
  },
  {
    img: "https://srisriayurvedahospital.org/wp-content/uploads/2024/03/Fertility-copy-1024x577.jpg",
    title: "Ayurvedic Infertility Treatment",
    desc: "Comprehensive Ayurvedic evaluation and treatment plans including Panchakarma to help couples achieve a healthy pregnancy.",
  },
  {
    img: "https://dranshumala.com/wp-content/uploads/2021/09/Ovarian-cystectomy.jpg",
    title: "Ovarian Cyst Treatment (Ayurveda)",
    desc: "Diagnosis and natural management of ovarian cysts using herbal medications and dosha balancing.",
  },
  {
    img: "https://punyahospitals.com/assets/images/service/specialities/fibroid-treatment.jpg",
    title: "Fibroid Treatment (Ayurvedic)",
    desc: "Non-surgical Ayurvedic options for uterine fibroids tailored to individual constitution and needs.",
  },
  {
    img: "https://regencyhealthcare.in/wp-content/uploads/2025/03/Irregular-Periods.png",
    title: "Irregular Periods & Pain (Ayurveda)",
    desc: "Diagnosis and natural treatment for menstrual irregularities, dysmenorrhea and heavy bleeding using Ayurvedic principles.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloKNRwxuU_ci4VI0Ow-w74o6PYrEpdnUPOkQ8TuN_BUB0uX5L2W5OqiM&s=10",
    title: "Ayurvedic Pregnancy & Normal Delivery",
    desc: "Complete antenatal care (Garbhini Paricharya), delivery support and postnatal Ayurvedic guidance for healthy motherhood.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0q7Zc9O519KAYDEc-JVujnPOpRL6emgxzAIUqqO4l0hdkk3p7xHFeTzq&s=10",
    title: "Ayurvedic Menopause Management",
    desc: "Natural hormone balancing with Ayurvedic herbs and lifestyle support to ease menopause symptoms and improve quality of life.",
  },
  {
    img: "https://images.ctfassets.net/6mz6gnctx58g/3XCew63wVyzQeFL1G0H4yU/10c9e9122e81bf03a807c2d42b306317/3XCew63wVyzQeFL1G0H4yU-DT_Banner_2x.png",
    title: "White Discharge & UTI (Ayurveda)",
    desc: "Accurate Ayurvedic diagnosis and effective herbal treatment for leucorrhoea and urinary tract infections.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp4z_Msu87QuH2SQaQ0ui_JmLLeVDITr2rUImSrl0PfzIX0mZDm6CsvaQ&s=10",
    title: "Skin, Hair & Wellness (Ayurvedic)",
    desc: "Natural treatment for acne, pigmentation, hair fall, piles and depression counseling with Ayurveda for women.",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "bi-person-check-fill",
    title: "Expert Ayurvedic Specialist",
    desc: "Dr. Salama Hanif brings 10+ years of dedicated Ayurvedic gynecological expertise.",
  },
  {
    icon: "bi-shield-heart-fill",
    title: "Safe & Natural Healing",
    desc: "Sterile environment with authentic Ayurvedic preparations ensuring your complete safety.",
  },
  {
    icon: "bi-cash-coin",
    title: "Affordable Ayurvedic Care",
    desc: "50% off first consultation, 30% off lab tests, 15% off Ayurvedic medicines.",
  },
  {
    icon: "bi-heart-fill",
    title: "Patient-First Approach",
    desc: "Every patient receives personalized Ayurvedic attention in a private, comfortable setting.",
  },
];

export const DISCOUNT_CHIPS = [
  { num: "50%", label: "First Ayurvedic Consultation" },
  { num: "15%", label: "On Ayurvedic Medicines" },
  { num: "30%", label: "Blood, Urine & Prakriti Tests" },
];

export const AWARENESS_CARDS = [
  {
    variant: "pink",
    icon: "bi-exclamation-triangle-fill",
    title: "PCOD Early Signs (Ayurvedic View)",
    desc: "Irregular periods, sudden weight gain, excess hair growth, and acne are early warning signs of PCOD as per Ayurveda. Early treatment with herbs prevents complications.",
  },
  {
    variant: "blue",
    icon: "bi-heart-pulse-fill",
    title: "Ayurvedic Pregnancy Care",
    desc: "Regular Garbhini Paricharya (antenatal Ayurvedic routine) is crucial for monitoring baby's growth. Don't skip Ayurvedic checkups — they detect issues early.",
  },
  {
    variant: "gold",
    icon: "bi-shield-check-fill",
    title: "Ayurvedic Menstrual Hygiene",
    desc: "Proper menstrual hygiene prevents infections as per Ayurveda. Use clean, natural products, follow Ritucharya, and never ignore persistent pain or irregular cycles.",
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "Dr. Salama Hanif is an exceptional Ayurvedic doctor. She treated my PCOS with such care and expertise using natural herbs. After years of irregular periods, I finally have hope. Highly recommended!",
    name: "Priya Sharma",
    role: "PCOD Patient, Raebareli",
    avatar: "P",
    avatarGradient: "linear-gradient(135deg, var(--pink), var(--blue))",
  },
  {
    stars: 5,
    quote:
      "I was struggling with infertility for 3 years. Dr. Hanif's Ayurvedic treatment was so thorough and compassionate. I am now a proud mother. She is truly a blessing!",
    name: "Sunita Verma",
    role: "Infertility Patient, Lucknow",
    avatar: "S",
    avatarGradient: "linear-gradient(135deg, var(--teal), var(--blue))",
  },
  {
    stars: 4.5,
    quote:
      "The clinic is very clean and the staff is welcoming. Dr. Salama explained Ayurvedic pregnancy care so clearly. Smooth normal delivery experience with natural support!",
    name: "Anjali Singh",
    role: "Ayurvedic Pregnancy Care, Raebareli",
    avatar: "A",
    avatarGradient: "linear-gradient(135deg, #f6c23e, #e67e22)",
  },
];

export const GALLERY_PREVIEW = [
  { icon: "bi-hospital-fill", label: "Ayurvedic Reception" },
  { icon: "bi-activity", label: "Ayurvedic Consultation Room" },
  { icon: "bi-cpu", label: "Ayurvedic Equipment & Herbs" },
  { icon: "bi-bag-heart-fill", label: "Ayurvedic Patient Care" },
];

export const GALLERY_ITEMS = [
  { icon: "bi-hospital-fill", label: "Reception Area", gradient: "linear-gradient(145deg,#fce4f0,#f3e8f9)" },
  { icon: "bi-chat-dots-fill", label: "Consultation Room", gradient: "linear-gradient(145deg,#e8f3fc,#f0faff)" },
  { icon: "bi-cpu-fill", label: "Ultrasound Machine", gradient: "linear-gradient(145deg,#f0f9f0,#e8f5e9)" },
  { icon: "bi-bag-heart-fill", label: "Patient Care", gradient: "linear-gradient(145deg,#fef9e7,#fdf6d3)" },
  { icon: "bi-person-circle", label: "Doctor's Cabin", gradient: "linear-gradient(145deg,#fce4f0,#ffe0ec)" },
  { icon: "bi-shield-plus-fill", label: "Sterilization Room", gradient: "linear-gradient(145deg,#e8eaf6,#e3f2fd)" },
  { icon: "bi-droplet-fill", label: "Lab Testing Area", gradient: "linear-gradient(145deg,#fff3e0,#fff8e1)" },
  { icon: "bi-flower2", label: "Waiting Lounge", gradient: "linear-gradient(145deg,#f3e5f5,#ede7f6)" },
  { icon: "bi-heart-fill", label: "Cardiac Monitor", gradient: "linear-gradient(145deg,#e0f7fa,#e0f2f1)" },
  { icon: "bi-baby-fill", label: "Maternity Section", gradient: "linear-gradient(145deg,#fce4f0,#e8f3fc)" },
  { icon: "bi-prescription2", label: "Pharmacy Corner", gradient: "linear-gradient(145deg,#f0f9f0,#fce4f0)" },
  { icon: "bi-emoji-smile-fill", label: "Happy Patients", gradient: "linear-gradient(145deg,#e8f3fc,#f0f9f0)" },
];

export const GALLERY_FILTERS = ["All Photos", "Reception", "Consultation", "Equipment", "Patient Care"];

// Services page — 12 detailed cards (icon based)
export const SERVICES_FULL = [
  {
    icon: "bi-activity",
    title: "PCOD / PCOS Treatment",
    desc: "Comprehensive hormonal testing, lifestyle counseling, nutritional guidance and medical management to regulate cycles and reduce PCOD symptoms.",
  },
  {
    icon: "bi-flower2",
    title: "Infertility Treatment",
    desc: "Complete fertility workup for both partners, ovulation induction, IUI consultation and personalized treatment for conception success.",
  },
  {
    icon: "bi-heart-pulse",
    title: "Ovarian Cyst Treatment",
    desc: "Ultrasound diagnosis, hormonal therapy and surgical management options for functional and complex ovarian cysts.",
  },
  {
    icon: "bi-bandaid",
    title: "Fibroid Treatment",
    desc: "Medical and minimally invasive treatment options for uterine fibroids causing heavy bleeding, pain or fertility problems.",
  },
  {
    icon: "bi-calendar-heart",
    title: "Irregular Periods",
    desc: "Diagnosis and treatment for oligomenorrhea, amenorrhea and other menstrual irregularities with hormonal therapy and lifestyle changes.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Menstrual Pain",
    desc: "Effective pain management for primary and secondary dysmenorrhea including medical therapy, physiotherapy and lifestyle modifications.",
  },
  {
    icon: "bi-droplet",
    title: "White Discharge Treatment",
    desc: "Accurate microbiological diagnosis and targeted antibiotic/antifungal treatment for leucorrhoea and vaginal infections.",
  },
  {
    icon: "bi-thermometer-sun",
    title: "Menopause Problems",
    desc: "Hormone replacement therapy, bone health monitoring and wellness counseling to help women transition through menopause comfortably.",
  },
  {
    icon: "bi-baby",
    title: "Pregnancy Care",
    desc: "Complete antenatal care from conception to delivery — nutrition guidance, immunizations, ultrasound monitoring and birth planning.",
  },
  {
    icon: "bi-heart-fill",
    title: "Normal Delivery Consultation",
    desc: "Expert guidance and support for natural vaginal delivery including labor coaching, pain management and post-delivery care.",
  },
  {
    icon: "bi-shield-plus",
    title: "Urinary Infection Treatment",
    desc: "Culture-based antibiotic therapy for UTIs with prevention strategies to avoid recurrence in women prone to urinary tract infections.",
  },
  {
    icon: "bi-brightness-high",
    title: "Skin Issues (Acne, Pigmentation)",
    desc: "Treatment for hormonal acne, melasma, pigmentation and white spots with topical, oral therapy and cosmetic procedures.",
  },
  {
    icon: "bi-scissors",
    title: "Hair Fall Issues",
    desc: "Diagnosis and treatment of hormonal hair loss (PCOD-related), nutritional deficiencies causing hair fall, and alopecia in women.",
  },
  {
    icon: "bi-emoji-expressionless",
    title: "Piles in Women",
    desc: "Conservative and medical management of hemorrhoids (piles) in women, particularly common during and after pregnancy.",
  },
  {
    icon: "bi-emoji-smile",
    title: "Depression & Confidence Counseling",
    desc: "Supportive counseling for women experiencing postpartum depression, anxiety, low self-esteem and emotional health challenges.",
    link: "/contact",
  },
];

export const OFFER_BAND = [
  { num: "50%", title: "First Consultation", desc: "New patients get 50% off on their first visit", variant: "white" },
  { num: "15%", title: "On Medicines", desc: "Discount on all prescribed medicines at our pharmacy", variant: "pink" },
  { num: "30%", title: "Lab Tests", desc: "Discount on blood and urine diagnostic tests", variant: "white" },
];

// Treatments accordion content
export const TREATMENTS = [
  {
    id: "t1",
    icon: "bi-activity",
    title: "PCOD / PCOS (Polycystic Ovary Syndrome)",
    intro:
      "PCOD (Polycystic Ovarian Disease) is a hormonal disorder affecting women of reproductive age. Tiny cysts develop on the ovaries, leading to hormonal imbalance.",
    listTitle: "Common Symptoms:",
    list: [
      "Irregular or missed periods",
      "Excess facial/body hair (hirsutism)",
      "Sudden weight gain, especially around the abdomen",
      "Acne and oily skin",
      "Hair thinning or loss on the scalp",
      "Difficulty conceiving",
    ],
    approachTitle: "Our Treatment Approach:",
    approach:
      "Dr. Salama Hanif provides personalized PCOD treatment including hormonal therapy, insulin sensitizers, lifestyle counseling and fertility management. Early diagnosis and treatment can prevent long-term complications like diabetes and heart disease.",
    open: true,
  },
  {
    id: "t2",
    icon: "bi-flower2",
    title: "Infertility Treatment",
    intro:
      "Infertility affects approximately 1 in 6 couples. It is defined as inability to conceive after 12 months of regular unprotected intercourse.",
    listTitle: "Causes in Women:",
    list: [
      "PCOD/PCOS causing anovulation",
      "Blocked or damaged fallopian tubes",
      "Uterine abnormalities (fibroids, polyps)",
      "Premature ovarian failure",
      "Thyroid or prolactin disorders",
    ],
    approachTitle: "Our Treatment Protocol:",
    approach:
      "Comprehensive evaluation including hormone blood tests, ultrasound, HSG (hysterosalpingography) and ovulation tracking. Treatment includes ovulation induction, IUI consultation and referral for IVF when needed.",
  },
  {
    id: "t3",
    icon: "bi-baby",
    title: "Pregnancy Care & Normal Delivery",
    intro:
      "Comprehensive antenatal care ensures a healthy pregnancy journey for both mother and baby from the first trimester through delivery and beyond.",
    listTitle: "Our Antenatal Services Include:",
    list: [
      "First trimester confirmation and dating scan",
      "Nutritional counseling and supplement prescription",
      "Regular fetal growth monitoring via ultrasound",
      "Blood tests for hemoglobin, thyroid, sugar, infections",
      "Vaccination (Tetanus, Flu)",
      "High-risk pregnancy management",
      "Birth planning and normal delivery support",
      "Postnatal care and breastfeeding guidance",
    ],
  },
  {
    id: "t4",
    icon: "bi-calendar-heart",
    title: "Menstrual Problems",
    intro:
      "Menstrual problems are among the most common reasons women seek gynecological care. These include irregular cycles, heavy bleeding, painful periods and absent periods.",
    listTitle: "Conditions We Treat:",
    list: [
      "Dysmenorrhea (painful periods)",
      "Menorrhagia (heavy periods)",
      "Oligomenorrhea (infrequent periods)",
      "Amenorrhea (absent periods)",
      "Intermenstrual bleeding",
      "Premenstrual Syndrome (PMS)",
    ],
    approachTitle: "Treatment Options:",
    approach:
      "Hormonal therapy, anti-inflammatory medications, nutritional support, and in some cases minor procedures to address the underlying cause.",
  },
  {
    id: "t5",
    icon: "bi-thermometer-sun",
    title: "Menopause Management",
    intro:
      "Menopause typically occurs between ages 45–55. The transition involves significant hormonal changes that can affect physical and emotional well-being.",
    listTitle: "Common Symptoms:",
    list: [
      "Hot flashes and night sweats",
      "Sleep disturbances and fatigue",
      "Vaginal dryness and discomfort",
      "Mood swings, anxiety and depression",
      "Bone density loss (risk of osteoporosis)",
      "Memory and concentration issues",
    ],
    approachTitle: "Our Approach:",
    approach:
      "Personalized Hormone Replacement Therapy (HRT) when appropriate, bone density monitoring, cardiovascular health assessment and psychological support for a smooth transition.",
  },
  {
    id: "t6",
    icon: "bi-bandaid",
    title: "Fibroid Treatment",
    intro:
      "Uterine fibroids are non-cancerous growths in the uterus that can cause heavy bleeding, pressure symptoms and fertility problems.",
    listTitle: "Symptoms:",
    list: [
      "Heavy and prolonged menstrual periods",
      "Pelvic pressure or pain",
      "Frequent urination",
      "Back or leg pain",
      "Difficulty conceiving",
    ],
    approachTitle: "Treatment:",
    approach:
      "Depending on size, location and symptoms — options include watchful waiting, hormonal therapy to shrink fibroids, non-surgical procedures (endometrial ablation) and myomectomy for those wanting to preserve fertility.",
  },
  {
    id: "t7",
    icon: "bi-heart-pulse",
    title: "Ovarian Cyst Treatment",
    intro:
      "Ovarian cysts are fluid-filled sacs that form on or inside an ovary. While most are harmless and resolve on their own, some require medical attention.",
    listTitle: "Types of Cysts Treated:",
    list: [
      "Functional cysts (follicular, corpus luteum)",
      "Endometriomas (chocolate cysts)",
      "Dermoid cysts",
      "PCOS-related cysts",
    ],
    approachTitle: "Management:",
    approach:
      "Regular ultrasound monitoring for small cysts, hormonal therapy for functional cysts, and referral for laparoscopic surgery for large or complex cysts. CA-125 testing for ruling out malignancy when indicated.",
  },
];

export const TREATMENT_OPTIONS = [
  "Ayurvedic PCOD / PCOS Treatment",
  "Ayurvedic Infertility Treatment",
  "Ovarian Cyst (Ayurveda)",
  "Fibroid Treatment (Ayurvedic)",
  "Irregular Periods (Ayurveda)",
  "Menstrual Pain (Ayurveda)",
  "Ayurvedic Pregnancy Care",
  "Normal Delivery Consultation (Ayurvedic)",
  "Ayurvedic Menopause Problems",
  "Urinary Infection (Ayurveda)",
  "Ayurvedic Skin / Hair Issues",
  "Depression Counseling (Ayurveda)",
  "Other",
];

export const BLOG_POSTS = [
  {
    emoji: "🩺",
    gradient: "linear-gradient(145deg,#fce4f0,#f3e8f9)",
    tag: "PCOD Awareness",
    title: "PCOD / PCOS: Understanding the Silent Epidemic in Young Women",
    excerpt:
      "PCOD affects nearly 1 in 5 women of reproductive age in India, yet most cases go undiagnosed for years. Learn the early warning signs, the difference between PCOD and PCOS, and what you can do to manage symptoms naturally alongside medical treatment.",
    date: "Nov 15, 2024",
  },
  {
    emoji: "🤱",
    gradient: "linear-gradient(145deg,#e8f3fc,#f0faff)",
    tag: "Pregnancy Care",
    title: "10 Essential Pregnancy Care Tips Every Expectant Mother Should Know",
    excerpt:
      "Pregnancy is one of life's most beautiful journeys — but it also requires careful attention to your health. From nutrition and iron supplementation to regular antenatal checkups and safe exercises, here's everything you need to know to have a healthy pregnancy.",
    date: "Oct 28, 2024",
  },
  {
    emoji: "🌸",
    gradient: "linear-gradient(145deg,#f0f9f0,#e8f5e9)",
    tag: "Women's Hygiene",
    title: "Complete Guide to Women's Intimate Hygiene — Myths vs Facts",
    excerpt:
      "Good intimate hygiene is fundamental to women's health, yet it is surrounded by myths and misinformation. Dr. Salama Hanif breaks down the science of vaginal health, what products to use (and avoid), how to prevent infections, and when to see a doctor.",
    date: "Oct 10, 2024",
  },
  {
    emoji: "🩸",
    gradient: "linear-gradient(145deg,#fef9e7,#fdf6d3)",
    tag: "Menstrual Health",
    title: "Menstrual Health Guide: What Your Period is Telling You About Your Body",
    excerpt:
      "Your menstrual cycle is a vital sign. Changes in cycle length, flow, color, and associated symptoms can reveal important clues about your hormonal health, thyroid function, nutrition and overall wellbeing. This comprehensive guide helps you decode your period.",
    date: "Sep 20, 2024",
  },
];

export const EDUCATION = [
  { icon: "bi-mortarboard-fill", title: "MBBS", desc: "Bachelor of Medicine & Bachelor of Surgery" },
  { icon: "bi-award-fill", title: "MD – Obstetrics & Gynecology", desc: "Post-graduate specialization in women's health" },
  { icon: "bi-star-fill", title: "Fellowship Training", desc: "Advanced laparoscopy & reproductive medicine" },
];

export const SPECIALIZATIONS = [
  "PCOD & PCOS Management",
  "Infertility Treatment",
  "High-Risk Pregnancy Care",
  "Normal & Complicated Deliveries",
  "Ovarian Cyst & Fibroid",
  "Menstrual Disorders",
  "Menopause Management",
  "Women's Wellness & Counseling",
];

export const CLINIC_TIMINGS = [
  { day: "Mon – Thu, Sat", time: "9:00AM – 12:00 PM", icon: "bi-sun", period: "morning" },
  { day: "Mon – Thu, Sat", time: "6:00PM – 9:00 PM", icon: "bi-moon-stars", period: "evening" },
  { day: "Sunday", time: null, closed: true },
];
