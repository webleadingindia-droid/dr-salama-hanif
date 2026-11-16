import PageHero from "@/components/PageHero";
import { CLINIC, TREATMENTS } from "@/lib/data";
import "./treatments.css";

export const metadata = {
  title: "Women's Health Treatments | PCOD, Infertility, Pregnancy",
  description:
    "Detailed information on PCOD, infertility, pregnancy care, menstrual problems, menopause, fibroid and ovarian cyst treatments at We Care Medical Zone by Dr. Salama Hanif.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        current="Treatments"
        title="Women's Health Treatments"
        subtitle="In-depth information about the conditions we treat and our approach to healing."
      />

      {/* ===== INTRO ===== */}
      <section className="tr-intro">
        <div className="container">
          <div className="tr-intro__inner">
            <div className="eyebrow eyebrow--center">
              <span className="eyebrow__line" />
              <span>Conditions We Treat</span>
              <span className="eyebrow__line" />
            </div>
            <h2 className="tr-intro__title">
              Expert Care for <span className="text-pink">Every Concern</span>
            </h2>
            <p className="tr-intro__sub">
              From PCOD to pregnancy, menopause to fibroids — explore how we diagnose and treat
              each condition with personalized Ayurvedic &amp; gynecological care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad tr-section">
        <div className="container">
          <div className="row g-5">
            {/* ===== ACCORDION ===== */}
            <div className="col-lg-8">
              <div className="accordion tr-accordion" id="treatmentAccordion">
                {TREATMENTS.map((t, i) => (
                  <div className="accordion-item tr-item" key={t.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button tr-item__btn${
                          t.open ? "" : " collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${t.id}`}
                      >
                        <span className="tr-item__num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="tr-item__icon">
                          <i className={`bi ${t.icon}`} />
                        </span>
                        <span className="tr-item__label">{t.title}</span>
                        <span className="tr-item__chevron" aria-hidden>
                          <i className="bi bi-plus-lg" />
                        </span>
                      </button>
                    </h2>

                    <div
                      id={t.id}
                      className={`accordion-collapse collapse${
                        t.open ? " show" : ""
                      }`}
                      data-bs-parent="#treatmentAccordion"
                    >
                      <div className="accordion-body tr-item__body">
                        <p className="tr-item__intro">{t.intro}</p>

                        {t.list && (
                          <div className="tr-block">
                            <h6 className="tr-block__title">{t.listTitle}</h6>
                            <ul className="tr-list">
                              {t.list.map((li) => (
                                <li key={li}>
                                  <span className="tr-list__tick">
                                    <i className="bi bi-check2" />
                                  </span>
                                  <span>{li}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {t.approach && (
                          <div className="tr-block">
                            <h6 className="tr-block__title">
                              {t.approachTitle}
                            </h6>
                            <p className="tr-block__text">{t.approach}</p>
                          </div>
                        )}

                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#apptModal"
                          className="tr-cta"
                        >
                          <i className="bi bi-calendar2-plus" />
                          <span>Book Consultation</span>
                          <i className="bi bi-arrow-right tr-cta__arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== SIDEBAR ===== */}
            <aside className="col-lg-4">
              <div className="tr-side">
                <div className="tr-side__card tr-side__card--primary">
                  <div className="tr-side__card-head">
                    <div className="tr-side__card-icon">
                      <i className="bi bi-calendar2-check" />
                    </div>
                    <div>
                      <h3 className="tr-side__card-title">Book a Consultation</h3>
                      <p className="tr-side__card-sub">
                        Get personalized diagnosis &amp; care
                      </p>
                    </div>
                  </div>

                  <p className="tr-side__desc">
                    Expert Ayurvedic gynecological care from{" "}
                    <strong>{CLINIC.doctor}</strong> — in a warm, supportive
                    environment.
                  </p>

                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apptModal"
                    className="tr-side__btn tr-side__btn--primary"
                  >
                    <i className="bi bi-calendar2-plus" />
                    <span>Book Appointment</span>
                  </a>

                  <a
                    href={`tel:${CLINIC.phone}`}
                    className="tr-side__btn tr-side__btn--ghost"
                  >
                    <i className="bi bi-telephone-fill" />
                    <span>{CLINIC.phone}</span>
                  </a>

                  <div className="tr-side__timings">
                    <div className="tr-side__timing">
                      <span>
                        <i className="bi bi-sun-fill" /> Morning
                      </span>
                      <span>9 AM – 12 PM</span>
                    </div>
                    <div className="tr-side__timing">
                      <span>
                        <i className="bi bi-moon-stars-fill" /> Evening
                      </span>
                      <span>6 PM – 9 PM</span>
                    </div>
                    <div className="tr-side__timing">
                      <span>
                        <i className="bi bi-x-circle-fill" /> Friday
                      </span>
                      <span className="tr-side__closed">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="tr-side__card tr-side__card--offer">
                  <div className="tr-side__offer-badge">
                    <i className="bi bi-gift-fill" />
                    <span>New Patient Offers</span>
                  </div>
                  <ul className="tr-side__offers">
                    <li>
                      <span className="tr-side__offer-pct">50%</span>
                      <span>off first consultation</span>
                    </li>
                    <li>
                      <span className="tr-side__offer-pct">15%</span>
                      <span>off on medicines</span>
                    </li>
                    <li>
                      <span className="tr-side__offer-pct">30%</span>
                      <span>off on lab tests</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apptModal"
                    className="tr-side__offer-cta"
                  >
                    Claim now <i className="bi bi-arrow-right" />
                  </a>
                  <div className="tr-side__offer-glow" aria-hidden />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}