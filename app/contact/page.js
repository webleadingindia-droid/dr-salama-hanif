import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CLINIC } from "@/lib/data";

export const metadata = {
  title: "Contact Dr. Salama Haneef | Raebareli UP",
  description:
    "Contact Dr. Salama Haneef in Raebareli. Address: 585/14 Parsadepur Rd, Gorabazar, Sri Nagar, Raebareli, UP. Phone: 6389933191. Gynecologist & Skin Expert.",
};

export default function ContactPage() {
  return (
    <>
      <style>{`
        /* ============================================================
           CONTACT V2 — scoped styles
           ============================================================ */
        .contact-v2 *,
        .contact-v2 *::before,
        .contact-v2 *::after { box-sizing: border-box; }

        /* ============= INTRO ============= */
        .contact-v2 .cv-intro {
          padding: 72px 0 12px;
          text-align: center;
        }
        .contact-v2 .cv-intro__inner { max-width: 720px; margin: 0 auto; }
        .contact-v2 .cv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c2185b;
          margin-bottom: 16px;
        }
        .contact-v2 .cv-eyebrow__line {
          width: 24px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
        }
        .contact-v2 .cv-intro__title {
          font-size: clamp(1.7rem, 3.4vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #1a1220;
          margin-bottom: 14px;
        }
        .contact-v2 .cv-intro__sub {
          font-size: 1rem;
          line-height: 1.7;
          color: #6b6173;
          margin: 0;
        }

        /* ============= CARDS ============= */
        .contact-v2 .cv-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(26, 18, 32, 0.08);
          box-shadow: 0 4px 16px rgba(26, 18, 32, 0.04);
          height: 100%;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .contact-v2 .cv-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(26, 18, 32, 0.08);
        }
        .contact-v2 .cv-card__head {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 18px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(26, 18, 32, 0.08);
        }
        .contact-v2 .cv-card__head-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 1.05rem;
          color: #fff;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          box-shadow: 0 8px 18px rgba(194, 24, 91, 0.28);
        }
        .contact-v2 .cv-card__head-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: #1a1220;
          margin: 0;
          line-height: 1.2;
        }
        .contact-v2 .cv-card__head-sub {
          font-size: 0.75rem;
          color: #6b6173;
          margin: 2px 0 0;
        }

        /* ============= INFO ITEMS ============= */
        .contact-v2 .cv-info-item {
          display: flex;
          gap: 14px;
          margin-bottom: 22px;
        }
        .contact-v2 .cv-info-item:last-child { margin-bottom: 0; }
        .contact-v2 .cv-info-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 0.92rem;
        }
        .contact-v2 .cv-info-icon--pink {
          background: rgba(194, 24, 91, 0.1);
          color: #c2185b;
        }
        .contact-v2 .cv-info-icon--green {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        }
        .contact-v2 .cv-info-icon--amber {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        .contact-v2 .cv-info-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1a1220;
          margin-bottom: 5px;
        }
        .contact-v2 .cv-info-text {
          font-size: 0.86rem;
          line-height: 1.6;
          color: #6b6173;
          margin: 0;
        }
        .contact-v2 .cv-info-phone {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.98rem;
          font-weight: 700;
          color: #c2185b;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-v2 .cv-info-phone:hover { color: #a01448; }

        /* Timings */
        .contact-v2 .cv-timings {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }
        .contact-v2 .cv-timing {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-size: 0.84rem;
          padding: 7px 0;
          border-bottom: 1px dashed rgba(26, 18, 32, 0.06);
        }
        .contact-v2 .cv-timing:last-child { border-bottom: 0; }
        .contact-v2 .cv-timing__label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1a1220;
          font-weight: 500;
        }
        .contact-v2 .cv-timing__label i {
          font-size: 0.8rem;
          color: #c2185b;
        }
        .contact-v2 .cv-timing__value {
          color: #6b6173;
          font-weight: 500;
        }
        .contact-v2 .cv-status {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .contact-v2 .cv-status--open {
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
        }
        .contact-v2 .cv-status--closed {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        /* ============= BUTTONS ============= */
        .contact-v2 .cv-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 20px;
          border-radius: 999px;
          border: 0;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background-position 0.5s ease;
          margin-bottom: 10px;
        }
        .contact-v2 .cv-btn:last-child { margin-bottom: 0; }
        .contact-v2 .cv-btn--primary {
          color: #fff;
          background: linear-gradient(135deg, #c2185b 0%, #e91e63 55%, #ff6f91 100%);
          background-size: 200% 100%;
          box-shadow: 0 10px 22px rgba(194, 24, 91, 0.3);
        }
        .contact-v2 .cv-btn--primary:hover {
          color: #fff;
          transform: translateY(-2px);
          background-position: 100% 0;
          box-shadow: 0 14px 28px rgba(194, 24, 91, 0.4);
        }
        .contact-v2 .cv-btn--ghost {
          color: #c2185b;
          background: #fff;
          border: 1.5px solid rgba(194, 24, 91, 0.22);
        }
        .contact-v2 .cv-btn--ghost:hover {
          color: #c2185b;
          background: rgba(194, 24, 91, 0.06);
          border-color: #c2185b;
        }

        /* ============= BOOKING CARD ============= */
        .contact-v2 .cv-booking {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed rgba(26, 18, 32, 0.08);
        }
        .contact-v2 .cv-booking__label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #6b6173;
          margin-bottom: 12px;
          display: block;
        }

        /* ============= SOCIAL ============= */
        .contact-v2 .cv-social {
          display: grid;
          gap: 10px;
        }
        .contact-v2 .cv-social-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          color: #fff;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-v2 .cv-social-btn i {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          display: grid;
          place-items: center;
          font-size: 0.95rem;
        }
        .contact-v2 .cv-social-btn span {
          flex: 1;
          text-align: left;
        }
        .contact-v2 .cv-social-btn__arrow {
          opacity: 0.7;
          font-size: 0.8rem;
        }
        .contact-v2 .cv-social-btn:hover {
          color: #fff;
          transform: translateX(3px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
        }
        .contact-v2 .cv-social-btn--fb { background: linear-gradient(135deg, #1877f2, #0c5cd6); }
        .contact-v2 .cv-social-btn--ig { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366); }
        .contact-v2 .cv-social-btn--wa { background: linear-gradient(135deg, #25d366, #128c7e); }
        .contact-v2 .cv-social-btn--yt { background: linear-gradient(135deg, #ff0000, #c4302b); }

        /* ============= OFFER PANEL ============= */
        .contact-v2 .cv-offer {
          position: relative;
          margin-top: 20px;
          padding: 24px;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #2a0e1b 0%, #4a1230 55%, #7c1d47 100%);
          color: #fff;
          isolation: isolate;
          box-shadow: 0 20px 40px rgba(42, 14, 27, 0.28);
        }
        .contact-v2 .cv-offer::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 211, 110, 0.35), transparent 65%);
          top: -130px;
          right: -100px;
          filter: blur(40px);
          z-index: -1;
        }
        .contact-v2 .cv-offer__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffd36e;
          margin-bottom: 16px;
        }
        .contact-v2 .cv-offer__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.86rem;
        }
        .contact-v2 .cv-offer__row:last-child { border-bottom: 0; padding-bottom: 0; }
        .contact-v2 .cv-offer__row-label { color: rgba(255, 255, 255, 0.85); }
        .contact-v2 .cv-offer__row-pct {
          font-size: 1rem;
          font-weight: 800;
          color: #ffd36e;
          letter-spacing: -0.01em;
        }

        /* ============= MAP SECTION ============= */
        .contact-v2 .cv-map-section {
          margin-top: 56px;
        }
        .contact-v2 .cv-map-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .contact-v2 .cv-map-head__title {
          font-size: clamp(1.3rem, 2.4vw, 1.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #1a1220;
          margin: 0;
        }
        .contact-v2 .cv-map-head__sub {
          font-size: 0.85rem;
          color: #6b6173;
          margin: 0;
        }
        .contact-v2 .cv-map-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          height: 420px;
          box-shadow: 0 20px 50px rgba(26, 18, 32, 0.12);
          border: 1px solid rgba(26, 18, 32, 0.08);
        }
        .contact-v2 .cv-map-wrap iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .contact-v2 .cv-map-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }
        .contact-v2 .cv-map-actions .cv-btn {
          width: auto;
          margin-bottom: 0;
        }

        /* ============= EMERGENCY STRIP ============= */
        .contact-v2 .cv-emergency {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          border-radius: 16px;
          background: linear-gradient(135deg, #fdf7f9, #fff5ec);
          border: 1px solid rgba(194, 24, 91, 0.15);
          flex-wrap: wrap;
        }
        .contact-v2 .cv-emergency__icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(194, 24, 91, 0.1);
          color: #c2185b;
          font-size: 1.1rem;
          position: relative;
        }
        .contact-v2 .cv-emergency__icon::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(194, 24, 91, 0.25);
          animation: cv-pulse 2s ease-out infinite;
        }
        @keyframes cv-pulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .contact-v2 .cv-emergency__text {
          flex: 1;
          min-width: 200px;
        }
        .contact-v2 .cv-emergency__title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1a1220;
          margin: 0 0 2px;
        }
        .contact-v2 .cv-emergency__desc {
          font-size: 0.8rem;
          color: #6b6173;
          margin: 0;
        }

        /* ============= RESPONSIVE ============= */
        @media (max-width: 991px) {
          .contact-v2 .cv-intro { padding: 48px 0 8px; }
          .contact-v2 .cv-map-section { margin-top: 40px; }
        }
        @media (max-width: 767px) {
          .contact-v2 .cv-card { padding: 22px; }
          .contact-v2 .cv-map-wrap { height: 320px; border-radius: 18px; }
          .contact-v2 .cv-emergency { flex-direction: column; align-items: flex-start; text-align: left; }
        }

        /* ============= REDUCED MOTION ============= */
        @media (prefers-reduced-motion: reduce) {
          .contact-v2 .cv-emergency__icon::after {
            animation: none;
            display: none;
          }
          .contact-v2 * { transition: none !important; }
        }
      `}</style>

      <PageHero
        current="Contact"
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for appointments, queries, or directions to the clinic."
      />

      <div className="contact-v2">
        {/* INTRO */}
        <section className="cv-intro">
          <div className="container">
            <div className="cv-intro__inner">
              <div className="cv-eyebrow">
                <span className="cv-eyebrow__line" />
                <span>Get In Touch</span>
                <span className="cv-eyebrow__line" />
              </div>
              <h2 className="cv-intro__title">
                We&apos;re Here to <span style={{ color: "#c2185b" }}>Help You</span>
              </h2>
              <p className="cv-intro__sub">
                Call, message, or walk in — whichever feels easiest. We&apos;ll make sure you
                get the care and clarity you need.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ paddingTop: 24 }}>
          <div className="container">
            <div className="row g-4">
              {/* ===== CONTACT INFO ===== */}
              <div className="col-lg-4 fade-up">
                <div className="cv-card">
                  <div className="cv-card__head">
                    <div className="cv-card__head-icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <div>
                      <h3 className="cv-card__head-title">Get In Touch</h3>
                      <p className="cv-card__head-sub">Clinic details &amp; hours</p>
                    </div>
                  </div>

                  <div className="cv-info-item">
                    <div className="cv-info-icon cv-info-icon--pink">
                      <i className="bi bi-geo-alt-fill" />
                    </div>
                    <div>
                      <span className="cv-info-label">Clinic Address</span>
                      <p className="cv-info-text">{CLINIC.address}</p>
                    </div>
                  </div>

                  <div className="cv-info-item">
                    <div className="cv-info-icon cv-info-icon--green">
                      <i className="bi bi-telephone-fill" />
                    </div>
                    <div>
                      <span className="cv-info-label">Phone / WhatsApp</span>
                      <a
                        href={`tel:${CLINIC.phone}`}
                        className="cv-info-phone"
                      >
                        <i className="bi bi-telephone-outbound" />
                        {CLINIC.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="cv-info-item">
                    <div className="cv-info-icon cv-info-icon--amber">
                      <i className="bi bi-clock-fill" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <span className="cv-info-label">Clinic Timings</span>
                      <div className="cv-timings">
                        <div className="cv-timing">
                          <span className="cv-timing__label">
                            <i className="bi bi-sun-fill" /> Morning
                          </span>
                          <span className="cv-timing__value">9 AM – 12 PM</span>
                        </div>
                        <div className="cv-timing">
                          <span className="cv-timing__label">
                            <i className="bi bi-moon-stars-fill" /> Evening
                          </span>
                          <span className="cv-timing__value">6 PM – 9 PM</span>
                        </div>
                        <div className="cv-timing">
                          <span className="cv-timing__label">Mon – Thu, Sat</span>
                          <span className="cv-status cv-status--open">Open</span>
                        </div>
                        <div className="cv-timing">
                          <span className="cv-timing__label">Friday</span>
                          <span className="cv-status cv-status--closed">Closed</span>
                        </div>
                        <div className="cv-timing">
                          <span className="cv-timing__label">Sunday</span>
                          <span className="cv-status cv-status--closed">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={CLINIC.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-btn cv-btn--primary"
                    >
                      <i className="bi bi-whatsapp" />
                      WhatsApp Us
                    </a>
                    <a href={`tel:${CLINIC.phone}`} className="cv-btn cv-btn--ghost">
                      <i className="bi bi-telephone-fill" />
                      Call: {CLINIC.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* ===== FORM ===== */}
              <div className="col-lg-4 fade-up">
                <div className="cv-card">
                  <div className="cv-card__head">
                    <div className="cv-card__head-icon">
                      <i className="bi bi-chat-left-dots-fill" />
                    </div>
                    <div>
                      <h3 className="cv-card__head-title">Send Us a Message</h3>
                      <p className="cv-card__head-sub">We reply within a day</p>
                    </div>
                  </div>

                  <ContactForm />

                  <div className="cv-booking">
                    <span className="cv-booking__label">
                      Or book an appointment directly:
                    </span>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#apptModal"
                      className="cv-btn cv-btn--primary"
                    >
                      <i className="bi bi-calendar2-plus" />
                      Book Appointment
                      <span
                        style={{
                          fontSize: "0.7rem",
                          padding: "2px 8px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.2)",
                          marginLeft: 4,
                        }}
                      >
                        50% OFF
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ===== SOCIAL + OFFERS ===== */}
              <div className="col-lg-4 fade-up">
                <div className="cv-card" style={{ marginBottom: 20 }}>
                  <div className="cv-card__head">
                    <div className="cv-card__head-icon">
                      <i className="bi bi-share-fill" />
                    </div>
                    <div>
                      <h3 className="cv-card__head-title">Follow Us</h3>
                      <p className="cv-card__head-sub">
                        Health tips &amp; updates
                      </p>
                    </div>
                  </div>

                  <div className="cv-social">
                    <a href="#" className="cv-social-btn cv-social-btn--fb">
                      <i className="bi bi-facebook" />
                      <span>Facebook</span>
                      <i className="bi bi-arrow-up-right cv-social-btn__arrow" />
                    </a>
                    <a href="#" className="cv-social-btn cv-social-btn--ig">
                      <i className="bi bi-instagram" />
                      <span>Instagram</span>
                      <i className="bi bi-arrow-up-right cv-social-btn__arrow" />
                    </a>
                    <a
                      href={CLINIC.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-social-btn cv-social-btn--wa"
                    >
                      <i className="bi bi-whatsapp" />
                      <span>WhatsApp</span>
                      <i className="bi bi-arrow-up-right cv-social-btn__arrow" />
                    </a>
                    <a href="#" className="cv-social-btn cv-social-btn--yt">
                      <i className="bi bi-youtube" />
                      <span>YouTube</span>
                      <i className="bi bi-arrow-up-right cv-social-btn__arrow" />
                    </a>
                  </div>

                  <div className="cv-offer">
                  <div className="cv-offer__eyebrow">
                    <i className="bi bi-star-fill" />
                    <span>Patient Offers</span>
                  </div>
                  <div className="cv-offer__row">
                    <span className="cv-offer__row-label">
                      First Consultation
                    </span>
                    <span className="cv-offer__row-pct">50% OFF</span>
                  </div>
                  <div className="cv-offer__row">
                    <span className="cv-offer__row-label">Medicines</span>
                    <span className="cv-offer__row-pct">15% OFF</span>
                  </div>
                  <div className="cv-offer__row">
                    <span className="cv-offer__row-label">
                      Blood &amp; Urine Tests
                    </span>
                    <span className="cv-offer__row-pct">30% OFF</span>
                  </div>
                </div>
                </div>

                
              </div>
            </div>

            {/* ===== MAP ===== */}
            <div className="cv-map-section fade-up">
              <div className="cv-map-head">
                <h3 className="cv-map-head__title">Find Our Clinic on Map</h3>
                <p className="cv-map-head__sub">
                  <i className="bi bi-geo-alt-fill" style={{ color: "#c2185b" }} />{" "}
                  Gorabazar, Raebareli
                </p>
              </div>

              <div className="cv-map-wrap">
                <iframe
                  src={CLINIC.mapEmbedContact}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Salama Haneef – clinic location"
                />
              </div>

              <div className="cv-map-actions">
                <a
                  href={CLINIC.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-btn cv-btn--primary"
                >
                  <i className="bi bi-map-fill" />
                  Get Directions
                </a>
                <a href={`tel:${CLINIC.phone}`} className="cv-btn cv-btn--ghost">
                  <i className="bi bi-telephone-fill" />
                  Call for Help Finding Us
                </a>
              </div>

              {/* Emergency strip */}
              <div className="cv-emergency">
                <div className="cv-emergency__icon">
                  <i className="bi bi-heart-pulse-fill" />
                </div>
                <div className="cv-emergency__text">
                  <p className="cv-emergency__title">
                    Need urgent help or same-day appointment?
                  </p>
                  <p className="cv-emergency__desc">
                    Call us directly — we&apos;ll do our best to fit you in quickly.
                  </p>
                </div>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="cv-btn cv-btn--primary"
                  style={{ width: "auto", marginBottom: 0 }}
                >
                  <i className="bi bi-telephone-fill" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}