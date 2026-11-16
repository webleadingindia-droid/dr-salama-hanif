import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CLINIC } from "@/lib/data";

export const metadata = {
  title: "Contact We Care Medical Zone | Raebareli UP",
  description:
    "Contact We Care Medical Zone in Raebareli. Address: 585/14 Parsadepur Rd, Gorabazar, Sri Nagar, Raebareli, UP. Phone: 6389933191. Dr. Salama Hanif – Gynecologist.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for appointments, queries, or directions to the clinic."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-4 fade-up">
              <div className="contact-card">
                <h5 className="mb-4">Get In Touch</h5>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-geo-alt-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Clinic Address</strong>
                    <p className="text-muted mb-0" style={{ fontSize: ".84rem" }}>{CLINIC.address}</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-telephone-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Phone / WhatsApp</strong>
                    <p className="mb-0"><a href={`tel:${CLINIC.phone}`} className="text-pink fw-600" style={{ fontSize: ".95rem" }}>{CLINIC.phoneDisplay}</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-clock-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Clinic Timings</strong>
                    <div className="mt-2">
                      <div className="timing-row"><span style={{ fontSize: ".82rem" }}><i className="bi bi-sun text-warning me-1" />Morning</span><span style={{ fontSize: ".82rem" }}>9 AM – 12 PM</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".82rem" }}><i className="bi bi-moon-stars text-pink me-1" />Evening</span><span style={{ fontSize: ".82rem" }}>6 PM – 9 PM</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".82rem" }}>Mon – Thu, Sat</span><span className="badge-open">Open</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".82rem" }}>Friday</span><span className="badge-closed">Closed</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".82rem" }}>Sunday</span><span className="badge-closed">Closed</span></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-pink btn w-100 mb-2">
                    <i className="bi bi-whatsapp me-2" />
                    WhatsApp Us
                  </a>
                  <a href={`tel:${CLINIC.phone}`} className="btn-outline-pink btn w-100">
                    <i className="bi bi-telephone me-2" />
                    Call: {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-4 fade-up">
              <div className="contact-card">
                <h5 className="mb-4">Send Us a Message</h5>
                <ContactForm />
                <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--grey-border)" }}>
                  <p className="text-muted mb-2" style={{ fontSize: ".84rem" }}>
                    <strong>Or book an appointment directly:</strong>
                  </p>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn-outline-pink btn w-100">
                    <i className="bi bi-calendar-plus me-2" />
                    Book Appointment (50% Off)
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Quick Info */}
            <div className="col-lg-4 fade-up">
              <div className="contact-card contact-card-soft mb-3">
                <h5 className="mb-3">Follow Us</h5>
                <p className="text-muted" style={{ fontSize: ".87rem", marginBottom: 20 }}>
                  Stay connected for health tips, clinic updates and offers.
                </p>
                <div className="d-grid gap-2">
                  <a href="#" className="btn social-follow-btn social-fb"><i className="bi bi-facebook me-2" />Facebook</a>
                  <a href="#" className="btn social-follow-btn social-ig"><i className="bi bi-instagram me-2" />Instagram</a>
                  <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn social-follow-btn social-wa"><i className="bi bi-whatsapp me-2" />WhatsApp</a>
                  <a href="#" className="btn social-follow-btn social-yt"><i className="bi bi-youtube me-2" />YouTube</a>
                </div>
              </div>
              <div className="offer-box-dark">
                <h6 style={{ color: "#fff", marginBottom: 14 }}><i className="bi bi-star-fill text-warning me-2" />Patient Offers</h6>
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                  <span style={{ fontSize: ".85rem" }}>First Consultation</span>
                  <span className="text-pink fw-600">50% OFF</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                  <span style={{ fontSize: ".85rem" }}>Medicines</span>
                  <span className="text-pink fw-600">15% OFF</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: ".85rem" }}>Blood &amp; Urine Tests</span>
                  <span className="text-pink fw-600">30% OFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-5 fade-up">
            <h4 className="mb-4">Find Our Clinic on Map</h4>
            <div className="rounded-xl overflow-hidden" style={{ height: 420, boxShadow: "var(--shadow-sm)" }}>
              <iframe
                src={CLINIC.mapEmbedContact}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="We Care Medical Zone – clinic location"
              />
            </div>
            <div className="mt-3 d-flex flex-wrap gap-3">
              <a href={CLINIC.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-pink btn">
                <i className="bi bi-map-fill me-2" />
                Get Directions
              </a>
              <a href={`tel:${CLINIC.phone}`} className="btn-outline-pink btn">
                <i className="bi bi-telephone me-2" />
                Call for Help Finding Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
