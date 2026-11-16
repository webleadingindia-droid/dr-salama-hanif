import PageHero from "@/components/PageHero";
import { GALLERY_ITEMS, GALLERY_FILTERS } from "@/lib/data";

export const metadata = {
  title: "Clinic Gallery | We Care Medical Zone",
  description:
    "View the clinic gallery of We Care Medical Zone – modern facilities, consultation rooms and patient care areas by Dr. Salama Hanif, Raebareli.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        current="Gallery"
        title="Clinic Gallery"
        subtitle="A glimpse into our modern, clean and patient-friendly clinic environment."
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center fade-up">
            <div className="section-label">Our Facilities</div>
            <div className="divider-pink mx-auto" />
            <h2 className="section-title">Modern Clinic Infrastructure</h2>
          </div>

          {/* Filter Tabs */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5 fade-up">
            {GALLERY_FILTERS.map((filter, i) => (
              <button
                key={filter}
                type="button"
                className={i === 0 ? "btn-pink btn btn-sm" : "btn-outline-pink btn btn-sm"}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="row g-3">
            {GALLERY_ITEMS.map((item) => (
              <div className="col-6 col-md-4 col-lg-3 fade-up" key={item.label}>
                <div className="gallery-item">
                  <div className="gallery-item-inner" style={{ background: item.gradient }}>
                    <i className={`bi ${item.icon}`} />
                    <small className="text-muted">{item.label}</small>
                  </div>
                  <div className="gallery-overlay"><i className="bi bi-zoom-in" /></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 fade-up">
            <p className="text-muted mb-3">Want to visit our clinic? Schedule an appointment today.</p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#apptModal" className="btn-pink btn btn-lg">
              <i className="bi bi-calendar-plus me-2" />
              Book Your Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
