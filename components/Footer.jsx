import Link from "next/link";
import { CLINIC } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <span>We Care</span> Medical Zone
            </div>
            <p style={{ fontSize: ".88rem", color: "#8492a6", maxWidth: 300, lineHeight: 1.8 }}>
              Dedicated to Hope, Healing and Recovery. Expert Ayurvedic gynecological care by{" "}
              {CLINIC.doctor} in Raebareli, Uttar Pradesh.
            </p>
            <div className="mt-3">
              <a href="#" className="social-btn"><i className="bi bi-facebook" /></a>
              <a href="#" className="social-btn"><i className="bi bi-instagram" /></a>
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn"><i className="bi bi-whatsapp" /></a>
              <a href="#" className="social-btn"><i className="bi bi-youtube" /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6>Quick Links</h6>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">About Doctor</Link>
            <Link href="/services" className="footer-link">Services</Link>
            <Link href="/treatments" className="footer-link">Treatments</Link>
            <Link href="/gallery" className="footer-link">Gallery</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6>Services</h6>
            <Link href="/services" className="footer-link">Ayurvedic PCOD Treatment</Link>
            <Link href="/services" className="footer-link">Ayurvedic Infertility</Link>
            <Link href="/services" className="footer-link">Ayurvedic Pregnancy Care</Link>
            <Link href="/services" className="footer-link">Ovarian Cyst (Ayurveda)</Link>
            <Link href="/services" className="footer-link">Fibroid (Ayurveda)</Link>
            <Link href="/services" className="footer-link">Menopause (Ayurveda)</Link>
            <Link href="/services" className="footer-link">Skin & Hair (Ayurveda)</Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6>Contact Us</h6>
            <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
              <i className="bi bi-geo-alt-fill text-pink mt-1" />
              <span style={{ fontSize: ".85rem", color: "#8492a6" }}>{CLINIC.address}</span>
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
              <i className="bi bi-telephone-fill text-pink" />
              <a href={`tel:${CLINIC.phone}`} style={{ fontSize: ".85rem", color: "#8492a6" }}>
                {CLINIC.phoneDisplay}
              </a>
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "center" }}>
              <i className="bi bi-clock-fill text-pink" />
              <span style={{ fontSize: ".85rem", color: "#8492a6" }}>
                Mon–Thu, Sat: 9AM–12PM & 6PM–9PM | Fri: Closed
              </span>
            </div>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#apptModal"
              className="btn-pink btn"
              style={{ fontSize: ".88rem", padding: "10px 22px" }}
            >
              <i className="bi bi-calendar-plus me-2" />
              Book Appointment
            </a>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span>© {new Date().getFullYear()} We Care Medical Zone. All Rights Reserved.</span>
          <span>{CLINIC.doctor} | Ayurvedic Gynecologist &amp; Obstetrician | Raebareli, UP</span>
        </div>
      </div>
    </footer>
  );
}
