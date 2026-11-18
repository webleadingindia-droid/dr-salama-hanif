import PageHero from "@/components/PageHero";
import AppointmentPageForm from "@/components/AppointmentPageForm";
import { CLINIC } from "@/lib/data";

export const metadata = {
  title: "Book Appointment | Dr. Salama Haneef",
  description:
    "Book an appointment with Dr. Salama Haneef in Raebareli. Get 50% off on your first consultation. Call 6389933191.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        current="Book Appointment"
        title="Book Your Appointment"
        subtitle="Take the first step towards better health. Our team will confirm your appointment within 2 hours."
      />

      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left: Info */}
            <div className="col-lg-5 fade-up">
              <div className="contact-card mb-4">
                <h5 className="mb-1">{CLINIC.doctor}</h5>
                <p className="text-pink mb-3" style={{ fontSize: ".88rem", fontWeight: 600 }}>{CLINIC.role}</p>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-clock-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Clinic Timings</strong>
                    <div className="mt-2">
                      <div className="timing-row"><span style={{ fontSize: ".84rem" }}>Mon – Thu</span><span style={{ fontSize: ".84rem" }}>9 AM–12 PM &amp; 6–9 PM</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".84rem" }}>Saturday</span><span style={{ fontSize: ".84rem" }}>9 AM–12 PM &amp; 6–9 PM</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".84rem" }}>Friday</span><span className="badge-closed">Closed</span></div>
                      <div className="timing-row"><span style={{ fontSize: ".84rem" }}>Sunday</span><span className="badge-closed">Closed</span></div>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-telephone-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Call to Book</strong>
                    <p className="mb-0"><a href={`tel:${CLINIC.phone}`} className="text-pink fw-600">{CLINIC.phoneDisplay}</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-geo-alt-fill" /></div>
                  <div>
                    <strong style={{ fontSize: ".88rem" }}>Clinic Address</strong>
                    <p className="text-muted mb-0" style={{ fontSize: ".84rem" }}>{CLINIC.addressShort}</p>
                  </div>
                </div>
              </div>

              <div className="offer-box-pink">
                <h6 className="mb-3"><i className="bi bi-gift-fill me-2" />New Patient Special Offers</h6>
                <div className="d-flex align-items-center gap-2 mb-2"><i className="bi bi-check-circle-fill" /><span style={{ fontSize: ".87rem" }}>50% off on first consultation</span></div>
                <div className="d-flex align-items-center gap-2 mb-2"><i className="bi bi-check-circle-fill" /><span style={{ fontSize: ".87rem" }}>15% off on all medicines</span></div>
                <div className="d-flex align-items-center gap-2"><i className="bi bi-check-circle-fill" /><span style={{ fontSize: ".87rem" }}>30% off on blood &amp; urine tests</span></div>
                <p style={{ fontSize: ".76rem", opacity: 0.8, marginTop: 12, marginBottom: 0 }}>
                  *Valid for new patients. T&amp;C apply.
                </p>
              </div>
            </div>

            {/* Right: Full Form */}
            <div className="col-lg-7 fade-up">
              <div className="contact-card">
                <h5 className="mb-4">Fill Appointment Details</h5>
                <AppointmentPageForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
