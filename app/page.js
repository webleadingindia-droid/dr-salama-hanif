"use client"
import Link from "next/link";
import Counter from "@/components/Counter";
import {
  CLINIC,
  HERO_STATS,
  ABOUT_STRIP_HIGHLIGHTS,
  ABOUT_STRIP_STATS,
  HOME_SERVICES,
  WHY_CHOOSE_US,
  DISCOUNT_CHIPS,
  AWARENESS_CARDS,
  TESTIMONIALS,
  GALLERY_PREVIEW,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-v2">
        <div className="hero-v2__bg" aria-hidden>
          <div className="hero-v2__blob hero-v2__blob--1" />
          <div className="hero-v2__blob hero-v2__blob--2" />
          <div className="hero-v2__grid" />
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="hero-v2__badge">
                <span className="hero-v2__badge-dot" />
                <span>Trusted Ayurvedic Women&apos;s Health Care</span>
                <i className="bi bi-shield-check-fill" />
              </div>

              <h1 className="hero-v2__title">
                Expert Ayurvedic
                <br />
                Care for{" "}
                <span className="hero-v2__title-accent">
                  Women&apos;s
                  <svg className="hero-v2__underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                    <path d="M2,8 C60,2 120,10 180,5 S280,9 298,4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                Health &amp; Wellness
              </h1>

              <p className="hero-v2__tagline">
                Dedicated to Hope, Healing and Recovery.{" "}
                <strong>{CLINIC.doctor}</strong> brings compassionate, expert Ayurvedic
                gynecological care to Raebareli — rooted in tradition, guided by science.
              </p>

              <div className="hero-v2__ctas">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#apptModal"
                  className="btn-hero btn-hero--primary"
                >
                  <i className="bi bi-calendar2-plus" />
                  <span>Book Free Consultation</span>
                  <i className="bi bi-arrow-right btn-hero__arrow" />
                </a>
                <Link href="/about" className="btn-hero btn-hero--ghost">
                  <i className="bi bi-person-circle" />
                  <span>Meet the Doctor</span>
                </Link>
              </div>

              <div className="hero-v2__stats">
                {HERO_STATS.map((stat) => (
                  <div className="hero-v2__stat" key={stat.label}>
                    <div className="hero-v2__stat-num">
                      <Counter target={stat.count} suffix={stat.suffix} />
                    </div>
                    <div className="hero-v2__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-v2__visual">
                <div className="hero-v2__img-frame">
                  <div className="hero-v2__img-ring" aria-hidden />
                  <img
                    src="https://plain-apac-prod-public.komododecks.com/202611/16/VKuscGrJVlV1QXuNCOud/image.png"
                    alt="Ayurvedic treatment for women's wellness"
                    className="hero-v2__img"
                  />
                  <div className="hero-v2__img-glow" aria-hidden />
                </div>

                <div className="hero-v2__chip hero-v2__chip--1">
                  <div className="hero-v2__chip-icon hero-v2__chip-icon--green">
                    <i className="bi bi-patch-check-fill" />
                  </div>
                  <div>
                    <strong>BAMS + MD</strong>
                    <small>Ayurveda Specialist</small>
                  </div>
                </div>

                <div className="hero-v2__chip hero-v2__chip--2">
                  <div className="hero-v2__chip-icon hero-v2__chip-icon--pink">
                    <i className="bi bi-clock-fill" />
                  </div>
                  <div>
                    <strong>Mon–Sat</strong>
                    <small>9AM–12PM | 6PM–9PM</small>
                  </div>
                </div>

                <div className="hero-v2__chip hero-v2__chip--3">
                  <div className="hero-v2__avatar-stack">
                    <span style={{ background: "linear-gradient(135deg,#f8bbd9,#c2185b)" }}>A</span>
                    <span style={{ background: "linear-gradient(135deg,#c5e1a5,#558b2f)" }}>R</span>
                    <span style={{ background: "linear-gradient(135deg,#ffe082,#ff8f00)" }}>S</span>
                  </div>
                  <div>
                    <strong>2,000+</strong>
                    <small>Happy Patients</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFER STRIP (marquee) ===== */}
      <div className="marquee-strip">
        <div className="marquee-strip__track">
          {[0, 1].map((i) => (
            <span className="marquee-strip__group" key={i} aria-hidden={i === 1}>
              <span className="marquee-chip">
                <i className="bi bi-gift-fill" /> 50% OFF on First Ayurvedic Consultation
              </span>
              <span className="marquee-chip">
                <i className="bi bi-capsule-pill" /> 15% Discount on Ayurvedic Medicines
              </span>
              <span className="marquee-chip">
                <i className="bi bi-droplet-fill" /> 30% OFF on Lab &amp; Prakriti Tests
              </span>
              <span className="marquee-chip">
                <i className="bi bi-heart-fill" /> Expert Ayurvedic Women&apos;s Health Care
              </span>
              <span className="marquee-chip">
                <i className="bi bi-telephone-fill" /> Call: {CLINIC.phone}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== ABOUT STRIP ===== */}
      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 fade-up">
              <div className="eyebrow">
                <span className="eyebrow__line" />
                <span>About We Care Medical Zone</span>
              </div>
              <h2 className="section-title-v2">
                Compassionate Ayurvedic Care,
                <br />
                <span className="text-pink">Modern Healing</span>
              </h2>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                We Care Medical Zone is Raebareli&apos;s trusted destination for women&apos;s
                health. Led by <strong>{CLINIC.doctor}</strong>, a highly experienced Ayurvedic
                Gynecologist &amp; Obstetrician, we provide personalized, evidence-based Ayurvedic
                treatment in a warm and supportive environment.
              </p>

              <ul className="check-list">
                {ABOUT_STRIP_HIGHLIGHTS.map((item) => (
                  <li key={item}>
                    <span className="check-list__icon">
                      <i className="bi bi-check2" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link href="/about" className="btn-hero btn-hero--primary">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right btn-hero__arrow" />
                </Link>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#apptModal"
                  className="btn-hero btn-hero--ghost"
                >
                  <i className="bi bi-calendar2-plus" />
                  <span>Book Visit</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 fade-up">
              <div className="about-v2__visual">
                <div className="about-v2__main">
                  <img
                    src="https://ayurhealing.net/wp-content/uploads/2025/08/ayurvedic-treatment-for-womens-wellness.jpg"
                    alt="We Care Medical Zone clinic"
                  />
                  <div className="about-v2__main-badge">
                    <i className="bi bi-award-fill" />
                    <div>
                      <strong>15+ Years</strong>
                      <small>of Excellence</small>
                    </div>
                  </div>
                </div>

                <div className="about-v2__stats">
                  {ABOUT_STRIP_STATS.map((s) => (
                    <div className={`stat-tile stat-tile--${s.variant}`} key={s.label}>
                      <i className={`bi ${s.icon}`} />
                      <div className="stat-tile__num">
                        <Counter target={s.count} suffix={s.suffix} />
                      </div>
                      <div className="stat-tile__label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-pad bg-soft">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Our Ayurvedic Services</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              Comprehensive Care for <span className="text-pink">Every Stage</span> of Womanhood
            </h2>
            <p className="section-sub-v2">
              From routine Ayurvedic check-ups to specialized treatments — we cover every aspect
              of women&apos;s health naturally.
            </p>
          </div>

          <div className="row g-4">
            {HOME_SERVICES.map((svc, i) => (
              <div className="col-md-6 col-lg-4 fade-up" key={svc.title}>
                <article className="service-card">
                  <div className="service-card__media">
                    <img src={svc.img} alt={svc.title} />
                    <div className="service-card__media-overlay" />
                    <span className="service-card__index">0{i + 1}</span>
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{svc.title}</h3>
                    <p className="service-card__desc">{svc.desc}</p>
                    <Link href="/services" className="service-card__link">
                      <span>Learn more</span>
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/services" className="btn-hero btn-hero--primary">
              <span>View All Services</span>
              <i className="bi bi-arrow-right btn-hero__arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Why Choose Us</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              The We Care <span className="text-pink">Ayurvedic Difference</span>
            </h2>
          </div>

          <div className="why-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <div className="why-card-v2 fade-up" key={item.title}>
                <div className="why-card-v2__num">0{i + 1}</div>
                <div className="why-card-v2__icon">
                  <i className={`bi ${item.icon}`} />
                </div>
                <h3 className="why-card-v2__title">{item.title}</h3>
                <p className="why-card-v2__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DISCOUNT OFFERS ===== */}
      <section className="section-pad">
        <div className="container">
          <div className="offers-v2 fade-up">
            <div className="offers-v2__bg" aria-hidden>
              <div className="offers-v2__glow" />
            </div>

            <div className="row align-items-center gy-5 position-relative">
              <div className="col-lg-7">
                <div className="offers-v2__eyebrow">
                  <i className="bi bi-stars" />
                  <span>Exclusive Ayurvedic Offers</span>
                </div>
                <h2 className="offers-v2__title">
                  Special Discounts for
                  <br />
                  <span className="offers-v2__title-accent">New Patients</span>
                </h2>

                <div className="offers-v2__chips">
                  {DISCOUNT_CHIPS.map((chip) => (
                    <div className="offer-tile" key={chip.label}>
                      <div className="offer-tile__num">{chip.num}</div>
                      <div className="offer-tile__label">{chip.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-5 text-lg-end">
                <div className="offers-v2__cta">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apptModal"
                    className="btn-hero btn-hero--light btn-hero--lg"
                  >
                    <i className="bi bi-calendar2-plus" />
                    <span>Claim Your Discount</span>
                  </a>
                  <p className="offers-v2__note">
                    *Valid for new patients only. T&amp;C apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AWARENESS ===== */}
      <section className="section-pad bg-soft">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Ayurvedic Women&apos;s Health Awareness</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              Know Your Health <span className="text-pink">Through Ayurveda</span>
            </h2>
          </div>

          <div className="row g-4">
            {AWARENESS_CARDS.map((card) => (
              <div className="col-md-4 fade-up" key={card.title}>
                <div className={`awareness-v2 awareness-v2--${card.variant}`}>
                  <div className="awareness-v2__icon">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <div>
                    <h3 className="awareness-v2__title">{card.title}</h3>
                    <p className="awareness-v2__desc">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-pad">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Patient Stories</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              What Our Patients Say About <span className="text-pink">Ayurvedic Care</span>
            </h2>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t) => (
              <div className="col-md-4 fade-up" key={t.name}>
                <div className="testimonial-v2">
                  <div className="testimonial-v2__quote-mark">&ldquo;</div>
                  <div className="testimonial-v2__stars">
                    {Array.from({ length: Math.floor(t.stars) }).map((_, i) => (
                      <i className="bi bi-star-fill" key={i} />
                    ))}
                    {t.stars % 1 !== 0 && <i className="bi bi-star-half" />}
                  </div>
                  <p className="testimonial-v2__text">{t.quote}</p>
                  <div className="testimonial-v2__author">
                    <div
                      className="testimonial-v2__avatar"
                      style={{ background: t.avatarGradient }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <div className="testimonial-v2__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section-pad bg-soft">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Our Ayurvedic Clinic</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              Inside <span className="text-pink">We Care</span>
            </h2>
          </div>

          <div className="row g-3">
            {GALLERY_PREVIEW.map((item) => (
              <div className="col-6 col-md-3 fade-up" key={item.label}>
                <div className="gallery-tile">
                  <div className="gallery-tile__inner">
                    <i className={`bi ${item.icon}`} />
                    <small>{item.label}</small>
                  </div>
                  <div className="gallery-tile__overlay">
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/gallery" className="btn-hero btn-hero--ghost">
              <span>View Full Gallery</span>
              <i className="bi bi-arrow-right btn-hero__arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== APPOINTMENT CTA ===== */}
      <section className="section-pad">
        <div className="container">
          <div className="cta-v2 fade-up">
            <div className="cta-v2__bg" aria-hidden>
              <div className="cta-v2__blob cta-v2__blob--1" />
              <div className="cta-v2__blob cta-v2__blob--2" />
            </div>
            <div className="cta-v2__inner">
              <div className="row align-items-center gy-4">
                <div className="col-lg-7">
                  <div className="cta-v2__eyebrow">
                    <i className="bi bi-heart-pulse-fill" />
                    <span>Begin Your Healing Journey</span>
                  </div>
                  <h2 className="cta-v2__title">
                    Ready to Experience
                    <br />
                    <span className="cta-v2__title-accent">Ayurvedic Healing?</span>
                  </h2>
                  <p className="cta-v2__desc">
                    Schedule your consultation today and get <strong>50% off</strong> on your
                    first visit with {CLINIC.doctor}.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="cta-v2__actions">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#apptModal"
                      className="btn-hero btn-hero--light btn-hero--lg"
                    >
                      <i className="bi bi-calendar2-plus" />
                      <span>Book Appointment</span>
                      <i className="bi bi-arrow-right btn-hero__arrow" />
                    </a>
                    <a href={`tel:${CLINIC.phone}`} className="btn-hero btn-hero--outline-light btn-hero--lg">
                      <i className="bi bi-telephone-fill" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section-pad-sm bg-soft">
        <div className="container">
          <div className="section-head-v2 text-center fade-up">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Visit Us</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="section-title-v2">
              Find Us in <span className="text-pink">Raebareli</span>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-5 fade-up">
              <div className="contact-v2">
                <div className="contact-v2__header">
                  <div className="contact-v2__logo">
                    <i className="bi bi-hospital-fill" />
                  </div>
                  <div>
                    <h3>We Care Medical Zone</h3>
                    <p>{CLINIC.doctor} – Ayurvedic Gynecologist &amp; Obstetrician</p>
                  </div>
                </div>

                <div className="contact-v2__item">
                  <div className="contact-v2__icon contact-v2__icon--pink">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>{CLINIC.address}</p>
                  </div>
                </div>

                <div className="contact-v2__item">
                  <div className="contact-v2__icon contact-v2__icon--green">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href={`tel:${CLINIC.phone}`}>{CLINIC.phoneDisplay}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-v2__item">
                  <div className="contact-v2__icon contact-v2__icon--amber">
                    <i className="bi bi-clock-fill" />
                  </div>
                  <div>
                    <strong>Clinic Timings</strong>
                    <div className="contact-v2__timings">
                      <div className="contact-v2__timing">
                        <span>Mon – Sat</span>
                        <span>
                          <i className="bi bi-sun-fill" /> 10:00AM – 1:30 PM
                        </span>
                      </div>
                      <div className="contact-v2__timing">
                        <span>Mon – Sat</span>
                        <span>
                          <i className="bi bi-moon-stars-fill" /> 4:30PM – 9:00 PM
                        </span>
                      </div>
                      <div className="contact-v2__timing">
                        <span>Sunday</span>
                        <span className="contact-v2__closed">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 fade-up">
              <div className="contact-v2__map">
                <iframe
                  src={CLINIC.mapEmbedHome}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="We Care Medical Zone Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STYLES ===== */}
      <style jsx global>{`
        /* ================= BASE TOKENS ================= */
        :root {
          --brand: #c2185b;
          --brand-2: #ff6f91;
          --brand-3: #ffd36e;
          --ink: #1a1220;
          --muted: #6b6173;
          --soft: #fdf7f9;
          --border: rgba(26, 18, 32, 0.08);
        }
        .bg-soft { background: var(--soft); }
        .section-pad { padding: 92px 0; }
        .section-pad-sm { padding: 72px 0; }
        @media (max-width: 767px) {
          .section-pad { padding: 60px 0; }
          .section-pad-sm { padding: 48px 0; }
        }

        /* ================= EYEBROW / SECTION HEAD ================= */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 16px;
        }
        .eyebrow--center { justify-content: center; }
        .eyebrow__line {
          width: 24px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
        }
        .section-title-v2 {
          font-size: clamp(1.75rem, 3.6vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 16px;
        }
        .section-sub-v2 {
          color: var(--muted);
          max-width: 620px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.7;
        }
        .section-head-v2 { margin-bottom: 56px; }

        /* ================= HERO ================= */
        .hero-v2 {
          position: relative;
          padding: 100px 0 80px;
          overflow: hidden;
          background: linear-gradient(180deg, #fffafc 0%, #fef6f9 100%);
        }
        .hero-v2__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-v2__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }
        .hero-v2__blob--1 {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, #ffc1d8 0%, transparent 70%);
          top: -200px;
          right: -100px;
        }
        .hero-v2__blob--2 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, #ffe3b0 0%, transparent 70%);
          bottom: -150px;
          left: -100px;
        }
        .hero-v2__grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(194, 24, 91, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(194, 24, 91, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000, transparent 80%);
        }

        .hero-v2__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(194, 24, 91, 0.15);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ink);
          box-shadow: 0 4px 16px rgba(194, 24, 91, 0.08);
          margin-bottom: 24px;
        }
        .hero-v2__badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12); }
        }
        .hero-v2__badge i { color: var(--brand); font-size: 0.9rem; }

        .hero-v2__title {
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 22px;
        }
        .hero-v2__title-accent {
          position: relative;
          display: inline-block;
          color: var(--brand);
          white-space: nowrap;
        }
        .hero-v2__underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          color: var(--brand-2);
          opacity: 0.7;
        }

        .hero-v2__tagline {
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--muted);
          max-width: 540px;
          margin-bottom: 32px;
        }

        .hero-v2__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }

        .btn-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          border: 0;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.25s ease, background 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-hero__arrow {
          transition: transform 0.25s ease;
          font-size: 0.95rem;
        }
        .btn-hero:hover .btn-hero__arrow {
          transform: translateX(4px);
        }
        .btn-hero--lg { padding: 16px 28px; font-size: 0.95rem; }

        .btn-hero--primary {
          background: linear-gradient(135deg, var(--brand) 0%, #e91e63 55%, var(--brand-2) 100%);
          background-size: 200% 100%;
          color: #fff;
          box-shadow: 0 10px 24px rgba(194, 24, 91, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
        }
        .btn-hero--primary:hover {
          color: #fff;
          transform: translateY(-2px);
          background-position: 100% 0;
          box-shadow: 0 14px 30px rgba(194, 24, 91, 0.4);
        }

        .btn-hero--ghost {
          background: #fff;
          color: var(--ink);
          border: 1.5px solid rgba(194, 24, 91, 0.18);
          box-shadow: 0 4px 14px rgba(26, 18, 32, 0.05);
        }
        .btn-hero--ghost:hover {
          color: var(--brand);
          border-color: var(--brand);
          transform: translateY(-2px);
        }

        .btn-hero--light {
          background: #fff;
          color: var(--brand);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
        }
        .btn-hero--light:hover {
          color: var(--brand);
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
        }

        .btn-hero--outline-light {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }
        .btn-hero--outline-light:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border-color: #fff;
        }

        .hero-v2__stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .hero-v2__stat { min-width: 100px; }
        .hero-v2__stat-num {
          font-size: clamp(1.5rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-v2__stat-label {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 500;
        }

        /* Hero Visual */
        .hero-v2__visual {
          position: relative;
          padding: 24px;
        }
        .hero-v2__img-frame {
          position: relative;
          border-radius: 32px 32px 32px 120px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(194, 24, 91, 0.22),
            0 10px 24px rgba(26, 18, 32, 0.08);
          aspect-ratio: 4 / 5;
          max-width: 460px;
          margin: 0 auto;
        }
        .hero-v2__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 0.6s ease;
        }
        .hero-v2__img-frame:hover .hero-v2__img {
          transform: scale(1.06);
        }
        .hero-v2__img-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 55%,
            rgba(194, 24, 91, 0.2) 100%
          );
          pointer-events: none;
        }
        .hero-v2__img-ring {
          position: absolute;
          inset: -10px;
          border: 1.5px dashed rgba(194, 24, 91, 0.22);
          border-radius: 32px 32px 32px 120px;
          pointer-events: none;
          z-index: -1;
        }

        .hero-v2__chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 28px rgba(26, 18, 32, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.6);
          z-index: 3;
        }
        .hero-v2__chip strong {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
        }
        .hero-v2__chip small {
          font-size: 0.7rem;
          color: var(--muted);
        }
        .hero-v2__chip-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-size: 1rem;
        }
        .hero-v2__chip-icon--green {
          background: rgba(34, 197, 94, 0.14);
          color: #16a34a;
        }
        .hero-v2__chip-icon--pink {
          background: rgba(194, 24, 91, 0.12);
          color: var(--brand);
        }

        .hero-v2__chip--1 {
          top: 30px;
          left: -16px;
          animation: float1 5s ease-in-out infinite;
        }
        .hero-v2__chip--2 {
          bottom: 90px;
          right: -16px;
          animation: float2 6s ease-in-out infinite;
        }
        .hero-v2__chip--3 {
          bottom: 20px;
          left: 20px;
          animation: float3 5.5s ease-in-out infinite;
        }
        @keyframes float1 {
          50% { transform: translateY(-8px); }
        }
        @keyframes float2 {
          50% { transform: translateY(8px); }
        }
        @keyframes float3 {
          50% { transform: translateY(-6px); }
        }

        .hero-v2__avatar-stack {
          display: flex;
        }
        .hero-v2__avatar-stack span {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #fff;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          margin-left: -8px;
        }
        .hero-v2__avatar-stack span:first-child { margin-left: 0; }

        @media (max-width: 991px) {
          .hero-v2 { padding: 70px 0 60px; }
          .hero-v2__chip--1 { left: 0; }
          .hero-v2__chip--2 { right: 0; }
          .hero-v2__stats { gap: 24px; }
        }

        /* ================= MARQUEE STRIP ================= */
        .marquee-strip {
          background: linear-gradient(90deg, var(--brand) 0%, #e91e63 50%, var(--brand-2) 100%);
          color: #fff;
          overflow: hidden;
          padding: 14px 0;
          position: relative;
        }
        .marquee-strip::before,
        .marquee-strip::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-strip::before {
          left: 0;
          background: linear-gradient(90deg, var(--brand), transparent);
        }
        .marquee-strip::after {
          right: 0;
          background: linear-gradient(-90deg, var(--brand-2), transparent);
        }
        .marquee-strip__track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-strip__group {
          display: flex;
          gap: 40px;
          padding-right: 40px;
        }
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
        .marquee-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          white-space: nowrap;
        }
        .marquee-chip i { font-size: 1rem; opacity: 0.9; }

        /* ================= ABOUT ================= */
        .check-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 20px;
        }
        @media (max-width: 575px) {
          .check-list { grid-template-columns: 1fr; }
        }
        .check-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--ink);
          font-weight: 500;
        }
        .check-list__icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(194, 24, 91, 0.1);
          color: var(--brand);
          display: grid;
          place-items: center;
          font-size: 0.75rem;
        }

        .about-v2__visual {
          position: relative;
          padding-bottom: 24px;
        }
        .about-v2__main {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(26, 18, 32, 0.14);
          aspect-ratio: 5 / 4;
        }
        .about-v2__main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .about-v2__main:hover img { transform: scale(1.05); }
        .about-v2__main-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .about-v2__main-badge i {
          color: var(--brand);
          font-size: 1.2rem;
        }
        .about-v2__main-badge strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--ink);
        }
        .about-v2__main-badge small {
          font-size: 0.72rem;
          color: var(--muted);
        }

        .about-v2__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 20px;
        }
        .stat-tile {
          text-align: center;
          padding: 18px 12px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid var(--border);
          box-shadow: 0 4px 14px rgba(26, 18, 32, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(194, 24, 91, 0.12);
        }
        .stat-tile i {
          font-size: 1.2rem;
          margin-bottom: 8px;
          display: block;
        }
        .stat-tile__num {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .stat-tile__label {
          font-size: 0.72rem;
          color: var(--muted);
          margin-top: 6px;
          font-weight: 500;
        }
        .stat-tile--pink i { color: var(--brand); }
        .stat-tile--green i { color: #16a34a; }
        .stat-tile--amber i { color: #f59e0b; }
        .stat-tile--blue i { color: #3b82f6; }

        /* ================= SERVICES ================= */
        .service-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(194, 24, 91, 0.15);
          border-color: rgba(194, 24, 91, 0.2);
        }
        .service-card__media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .service-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .service-card:hover .service-card__media img {
          transform: scale(1.08);
        }
        .service-card__media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 40%,
            rgba(26, 18, 32, 0.4) 100%
          );
        }
        .service-card__index {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          display: grid;
          place-items: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--brand);
          letter-spacing: 0.04em;
        }
        .service-card__body {
          padding: 22px 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .service-card__title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }
        .service-card__desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--muted);
          margin-bottom: 18px;
          flex: 1;
        }
        .service-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--brand);
          text-decoration: none;
          transition: gap 0.25s ease;
        }
        .service-card__link:hover {
          gap: 10px;
          color: var(--brand);
        }

        /* ================= WHY CHOOSE ================= */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 991px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
          .why-grid { grid-template-columns: 1fr; }
        }

        .why-card-v2 {
          position: relative;
          padding: 28px 22px;
          background: #fff;
          border-radius: 20px;
          border: 1px solid var(--border);
          transition: transform 0.35s ease, box-shadow 0.35s ease,
            border-color 0.35s ease;
          overflow: hidden;
        }
        .why-card-v2::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .why-card-v2:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(194, 24, 91, 0.12);
          border-color: rgba(194, 24, 91, 0.15);
        }
        .why-card-v2:hover::before {
          transform: scaleX(1);
        }
        .why-card-v2__num {
          position: absolute;
          top: 18px;
          right: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(194, 24, 91, 0.25);
          letter-spacing: 0.1em;
        }
        .why-card-v2__icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(194, 24, 91, 0.1), rgba(255, 111, 145, 0.15));
          color: var(--brand);
          display: grid;
          place-items: center;
          font-size: 1.4rem;
          margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-card-v2:hover .why-card-v2__icon {
          transform: scale(1.08) rotate(-4deg);
        }
        .why-card-v2__title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .why-card-v2__desc {
          font-size: 0.85rem;
          line-height: 1.65;
          color: var(--muted);
          margin: 0;
        }

        /* ================= OFFERS ================= */
        .offers-v2 {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          padding: 56px 48px;
          background: linear-gradient(135deg, #2a0e1b 0%, #4a1230 45%, #7c1d47 100%);
          color: #fff;
          isolation: isolate;
        }
        .offers-v2__bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
        }
        .offers-v2__glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 111, 145, 0.35), transparent 65%);
          top: -200px;
          right: -100px;
          filter: blur(60px);
        }
        .offers-v2__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ffd36e;
          margin-bottom: 18px;
        }
        .offers-v2__title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 32px;
          color: #fff;
        }
        .offers-v2__title-accent {
          color: #ffd36e;
        }
        .offers-v2__chips {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 767px) {
          .offers-v2 { padding: 40px 24px; }
          .offers-v2__chips { grid-template-columns: 1fr; }
        }

        .offer-tile {
          padding: 22px 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          transition: background 0.3s ease, border-color 0.3s ease,
            transform 0.3s ease;
        }
        .offer-tile:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 211, 110, 0.4);
          transform: translateY(-3px);
        }
        .offer-tile__num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffd36e;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .offer-tile__label {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .offers-v2__cta {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-end;
        }
        @media (max-width: 991px) {
          .offers-v2__cta { align-items: flex-start; }
        }
        .offers-v2__note {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        /* ================= AWARENESS ================= */
        .awareness-v2 {
          display: flex;
          gap: 16px;
          padding: 24px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid var(--border);
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .awareness-v2:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(26, 18, 32, 0.08);
        }
        .awareness-v2__icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-size: 1.3rem;
        }
        .awareness-v2--pink .awareness-v2__icon {
          background: rgba(194, 24, 91, 0.1);
          color: var(--brand);
        }
        .awareness-v2--green .awareness-v2__icon {
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
        }
        .awareness-v2--amber .awareness-v2__icon {
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        }
        .awareness-v2--blue .awareness-v2__icon {
          background: rgba(59, 130, 246, 0.12);
          color: #3b82f6;
        }
        .awareness-v2__title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .awareness-v2__desc {
          font-size: 0.84rem;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        /* ================= TESTIMONIALS ================= */
        .testimonial-v2 {
          position: relative;
          padding: 36px 28px 28px;
          background: #fff;
          border-radius: 20px;
          border: 1px solid var(--border);
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-v2:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px rgba(194, 24, 91, 0.1);
        }
        .testimonial-v2__quote-mark {
          position: absolute;
          top: 10px;
          left: 24px;
          font-size: 5rem;
          line-height: 1;
          font-family: Georgia, serif;
          color: rgba(194, 24, 91, 0.12);
          pointer-events: none;
        }
        .testimonial-v2__stars {
          display: flex;
          gap: 3px;
          color: #f59e0b;
          font-size: 0.85rem;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .testimonial-v2__text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 22px;
          position: relative;
          z-index: 1;
        }
        .testimonial-v2__author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }
        .testimonial-v2__avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .testimonial-v2__author strong {
          display: block;
          font-size: 0.9rem;
          color: var(--ink);
        }
        .testimonial-v2__role {
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* ================= GALLERY ================= */
        .gallery-tile {
          position: relative;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }
        .gallery-tile__inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #fff, #fdf2f7);
          border: 1px solid var(--border);
          transition: background 0.4s ease;
        }
        .gallery-tile__inner i {
          font-size: 1.8rem;
          color: var(--brand);
          opacity: 0.85;
          transition: transform 0.4s ease;
        }
        .gallery-tile__inner small {
          font-size: 0.75rem;
          color: var(--muted);
          font-weight: 500;
        }
        .gallery-tile:hover .gallery-tile__inner {
          background: linear-gradient(135deg, #ffe7ef, #ffd9e5);
        }
        .gallery-tile:hover .gallery-tile__inner i {
          transform: scale(1.15);
        }
        .gallery-tile__overlay {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(194, 24, 91, 0.9);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 0.8rem;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .gallery-tile:hover .gallery-tile__overlay {
          opacity: 1;
          transform: scale(1);
        }

        /* ================= CTA BANNER ================= */
        .cta-v2 {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(135deg, #c2185b 0%, #e91e63 60%, #ff6f91 100%);
          color: #fff;
          box-shadow: 0 24px 60px rgba(194, 24, 91, 0.28);
        }
        .cta-v2__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .cta-v2__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
        }
        .cta-v2__blob--1 {
          width: 340px;
          height: 340px;
          background: rgba(255, 211, 110, 0.35);
          top: -120px;
          right: 10%;
        }
        .cta-v2__blob--2 {
          width: 280px;
          height: 280px;
          background: rgba(255, 255, 255, 0.2);
          bottom: -120px;
          left: 5%;
        }
        .cta-v2__inner {
          position: relative;
          z-index: 2;
          padding: 48px;
        }
        .cta-v2__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 16px;
        }
        .cta-v2__title {
          font-size: clamp(1.6rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .cta-v2__title-accent {
          color: #ffd36e;
        }
        .cta-v2__desc {
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          max-width: 480px;
        }
        .cta-v2__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
        }
        @media (max-width: 991px) {
          .cta-v2__inner { padding: 36px 28px; }
          .cta-v2__actions { justify-content: flex-start; }
        }

        /* ================= CONTACT ================= */
        .contact-v2 {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid var(--border);
          height: 100%;
          box-shadow: 0 4px 16px rgba(26, 18, 32, 0.04);
        }
        .contact-v2__header {
          display: flex;
          gap: 14px;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 22px;
        }
        .contact-v2__logo {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--brand), var(--brand-2));
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .contact-v2__header h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 4px;
        }
        .contact-v2__header p {
          font-size: 0.8rem;
          color: var(--muted);
          margin: 0;
        }
        .contact-v2__item {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
        }
        .contact-v2__item:last-child { margin-bottom: 0; }
        .contact-v2__icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 0.95rem;
        }
        .contact-v2__icon--pink {
          background: rgba(194, 24, 91, 0.1);
          color: var(--brand);
        }
        .contact-v2__icon--green {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        }
        .contact-v2__icon--amber {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        .contact-v2__item strong {
          display: block;
          font-size: 0.82rem;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .contact-v2__item p {
          font-size: 0.85rem;
          color: var(--muted);
          margin: 0;
          line-height: 1.55;
        }
        .contact-v2__item p a {
          color: var(--brand);
          font-weight: 600;
          text-decoration: none;
        }
        .contact-v2__item p a:hover {
          text-decoration: underline;
        }
        .contact-v2__timings {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-v2__timing {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--muted);
        }
        .contact-v2__timing i {
          font-size: 0.78rem;
          margin-right: 4px;
          color: var(--brand);
        }
        .contact-v2__closed {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
        .contact-v2__map {
          border-radius: 20px;
          overflow: hidden;
          height: 100%;
          min-height: 420px;
          box-shadow: 0 12px 32px rgba(26, 18, 32, 0.1);
          border: 1px solid var(--border);
        }

        /* ================= REDUCED MOTION ================= */
        @media (prefers-reduced-motion: reduce) {
          .hero-v2__chip--1,
          .hero-v2__chip--2,
          .hero-v2__chip--3,
          .hero-v2__badge-dot,
          .marquee-strip__track {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}