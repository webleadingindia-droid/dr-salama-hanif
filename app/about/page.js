import PageHero from "@/components/PageHero";
import { CLINIC, EDUCATION, SPECIALIZATIONS } from "@/lib/data";

export const metadata = {
  title: "About Dr. Salama Hanif | Gynecologist Raebareli",
  description:
    "Learn about Dr. Salama Hanif, expert gynecologist & obstetrician at We Care Medical Zone, Raebareli. 10+ years experience in women's health.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About Doctor"
        title={`About ${CLINIC.doctor}`}
        subtitle="Expert Gynecologist & Obstetrician committed to women's health in Raebareli"
      />

      {/* DOCTOR PROFILE */}
      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5 fade-up">
              <div className="doctor-img-box" style={{ minHeight: 510, overflow: "hidden", position: "relative" }}>
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202611/16/VKuscGrJVlV1QXuNCOud/image.png"
                  alt={CLINIC.doctor}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                  }}
                />
                <div className="doctor-badge-wrap">
                  <div className="exp-badge">
                    <strong>10+</strong>
                    <span>Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 fade-up">
              <div className="section-label">About the Doctor</div>
              <div className="divider-pink" />
              <h2 className="section-title mb-3">{CLINIC.doctor}</h2>
              <h6 className="text-pink mb-4" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>
                {CLINIC.role} | We Care Medical Zone, Raebareli
              </h6>
              <p className="text-muted mb-3">
                {CLINIC.doctor} is a highly qualified and compassionate Gynecologist &amp;
                Obstetrician with over 10 years of dedicated experience in women&apos;s health.
                She has helped thousands of women across Raebareli and surrounding regions with
                personalized, evidence-based treatments.
              </p>
              <p className="text-muted mb-4">
                Her patient-first approach, clear communication style, and commitment to holistic
                wellness have made her one of the most trusted names in gynecology in Uttar
                Pradesh.
              </p>
              <div className="mb-4">
                <span className="cred-pill"><i className="bi bi-patch-check-fill me-1" />MBBS</span>
                <span className="cred-pill"><i className="bi bi-patch-check-fill me-1" />MD – Obstetrics &amp; Gynecology</span>
                <span className="cred-pill"><i className="bi bi-award-fill me-1" />10+ Years Experience</span>
                <span className="cred-pill"><i className="bi bi-people-fill me-1" />5000+ Patients</span>
              </div>
              <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn-pink btn">
                <i className="bi bi-calendar-plus me-2" />
                Book Appointment
              </a>
              <a href={`tel:${CLINIC.phone}`} className="btn-outline-pink btn ms-2">
                <i className="bi bi-telephone me-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section-pad bg-grey">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 fade-up">
              <h4 className="mb-4" style={{ fontSize: "1.3rem" }}>Education &amp; Qualifications</h4>
              <div className="mb-4">
                {EDUCATION.map((edu, i) => (
                  <div
                    style={{ display: "flex", gap: 16, marginBottom: i < EDUCATION.length - 1 ? 20 : 0 }}
                    key={edu.title}
                  >
                    <div className="edu-icon">
                      {edu.icon && <i className={`bi ${edu.icon}`} />}
                    </div>
                    <div>
                      <strong style={{ fontSize: ".92rem" }}>{edu.title}</strong>
                      <p className="text-muted mb-0" style={{ fontSize: ".83rem" }}>{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 fade-up">
              <h4 className="mb-4" style={{ fontSize: "1.3rem" }}>Specializations</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {SPECIALIZATIONS.map((item, i) => (
                  <li
                    className={`d-flex align-items-center gap-2${i < SPECIALIZATIONS.length - 1 ? " mb-2" : ""}`}
                    key={item}
                  >
                    <i className="bi bi-check-circle-fill text-pink" />
                    <span style={{ fontSize: ".9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 fade-up">
              <h4 className="mb-4" style={{ fontSize: "1.3rem" }}>Mission &amp; Vision</h4>
              <div className="mission-box">
                <h6 style={{ color: "var(--pink)", marginBottom: 8 }}>
                  <i className="bi bi-bullseye me-2" />
                  Our Mission
                </h6>
                <p className="mb-0" style={{ fontSize: ".87rem", color: "var(--text-mid)" }}>
                  To provide accessible, affordable and world-class gynecological care to every
                  woman in Raebareli and beyond, treating each patient with dignity, compassion
                  and expertise.
                </p>
              </div>
              <div className="vision-box">
                <h6 style={{ color: "var(--blue)", marginBottom: 8 }}>
                  <i className="bi bi-eye-fill me-2" />
                  Our Vision
                </h6>
                <p className="mb-0" style={{ fontSize: ".87rem", color: "var(--text-mid)" }}>
                  To be Raebareli&apos;s most trusted women&apos;s health center — a place where
                  every woman feels heard, respected and empowered to live her healthiest life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="cta-banner text-center fade-up">
            <h2 style={{ color: "#fff", marginBottom: 14 }} className="section-title">
              Book Your Consultation Today
            </h2>
            <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 28 }}>
              Get 50% off on your first appointment with {CLINIC.doctor}
            </p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn-white btn btn-lg">
              <i className="bi bi-calendar-plus me-2" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}