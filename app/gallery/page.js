import PageHero from "@/components/PageHero";
import { GALLERY_ITEMS, GALLERY_FILTERS } from "@/lib/data";

export const metadata = {
  title: "Care Areas | Dr. Salama Haneef",
  description:
    "Explore the care areas offered by Dr. Salama Haneef in Raebareli – gynecology, pregnancy care, skin and hair care and clinical nutrition guidance.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        current="Care Areas"
        title="Our Care Areas"
        subtitle="Gynecology, skin care and clinical nutrition guidance — compassionate care by Dr. Salama Haneef."
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-head text-center fade-up">
            <div className="section-label">What We Care For</div>
            <div className="divider-pink mx-auto" />
            <h2 className="section-title">Complete Care for Women's Health</h2>
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
            <p className="text-muted mb-3">Want to consult Dr. Salama Haneef? Schedule an appointment today.</p>
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
