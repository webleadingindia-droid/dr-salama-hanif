import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SERVICES_FULL, OFFER_BAND } from "@/lib/data";
import "./services.css";

export const metadata = {
  title: "Women's Health Services | Dr. Salama Hanif",
  description:
    "Explore all women's health services at We Care Medical Zone – PCOD, infertility, pregnancy, fibroid, menopause and more by Dr. Salama Hanif in Raebareli.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        current="Services"
        title="Our Services"
        subtitle="Comprehensive women's health services under one roof — from routine care to specialized treatments."
      />

      {/* ===== INTRO EYEBROW ===== */}
      <section className="svc-intro">
        <div className="container">
          <div className="svc-intro__inner">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>What We Offer</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="svc-intro__title">
              Specialized Care for <span className="text-pink">Every Woman</span>
            </h2>
            <p className="svc-intro__sub">
              From adolescence to menopause — every stage of a woman&apos;s life deserves expert,
              compassionate care. Explore our full range of Ayurvedic &amp; gynecological services.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section-pad svc-section">
        <div className="container">
          <div className="row g-4">
            {SERVICES_FULL.map((svc, i) => (
              <div className="col-md-6 col-lg-4" key={svc.title}>
                <article
                  className="svc-card"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="svc-card__top">
                    <div className="svc-card__icon">
                      <i className={`bi ${svc.icon}`} />
                    </div>
                    <span className="svc-card__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="svc-card__title">{svc.title}</h3>
                  <p className="svc-card__desc">{svc.desc}</p>

                  <Link
                    href={svc.link || "/treatments"}
                    className="svc-card__link"
                  >
                    <span>Learn more</span>
                    <span className="svc-card__link-arrow">
                      <i className="bi bi-arrow-right" />
                    </span>
                  </Link>

                  <div className="svc-card__glow" aria-hidden />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER BAND ===== */}
      <section className="svc-offers">
        <div className="container">
          <div className="svc-offers__head">
            <div className="eyebrow eyebrow--center eyebrow--light">
              <span className="eyebrow__line" />
              <span>Limited Time Offers</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="svc-offers__title">
              Save More, <span className="svc-offers__title-accent">Heal Better</span>
            </h2>
          </div>

          <div className="row g-4">
            {OFFER_BAND.map((offer, i) => (
              <div className="col-md-4" key={offer.title}>
                <div
                  className={`svc-offer svc-offer--${offer.variant}`}
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="svc-offer__num">{offer.num}</div>
                  <h3 className="svc-offer__title">{offer.title}</h3>
                  <p className="svc-offer__desc">{offer.desc}</p>
                  <div className="svc-offer__shine" aria-hidden />
                </div>
              </div>
            ))}
          </div>

          <div className="svc-offers__cta">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#apptModal"
              className="svc-cta-btn"
            >
              <i className="bi bi-calendar2-check" />
              <span>Book an Appointment</span>
              <i className="bi bi-arrow-right svc-cta-btn__arrow" />
            </a>
            <p className="svc-offers__note">
              *Offers valid for new patients only. T&amp;C apply.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}