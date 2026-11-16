import PageHero from "@/components/PageHero";
import { BLOG_POSTS, CLINIC } from "@/lib/data";

export const metadata = {
  title: "Women's Health Blog | PCOD, Pregnancy, Hygiene Tips",
  description:
    "Read expert articles on PCOD, pregnancy care, women's hygiene and menstrual health by Dr. Salama Hanif at We Care Medical Zone, Raebareli.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <style>{`
        /* ============================================================
           BLOG V2 — scoped styles
           ============================================================ */
        .blog-v2 *,
        .blog-v2 *::before,
        .blog-v2 *::after { box-sizing: border-box; }

        /* ============= INTRO ============= */
        .blog-v2 .blog-intro {
          padding: 72px 0 12px;
          text-align: center;
        }
        .blog-v2 .blog-intro__inner { max-width: 720px; margin: 0 auto; }
        .blog-v2 .blog-eyebrow {
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
        .blog-v2 .blog-eyebrow__line {
          width: 24px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
        }
        .blog-v2 .blog-intro__title {
          font-size: clamp(1.7rem, 3.4vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #1a1220;
          margin-bottom: 14px;
        }
        .blog-v2 .blog-intro__sub {
          font-size: 1rem;
          line-height: 1.7;
          color: #6b6173;
          margin: 0;
        }

        /* ============= FEATURED POST ============= */
        .blog-v2 .blog-featured {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(26, 18, 32, 0.08);
          box-shadow: 0 20px 50px rgba(26, 18, 32, 0.08);
          margin: 48px 0 56px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .blog-v2 .blog-featured:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 60px rgba(194, 24, 91, 0.14);
        }
        .blog-v2 .blog-featured__media {
          position: relative;
          min-height: 360px;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .blog-v2 .blog-featured__emoji {
          font-size: 8rem;
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .blog-v2 .blog-featured:hover .blog-featured__emoji {
          transform: scale(1.1) rotate(-6deg);
        }
        .blog-v2 .blog-featured__ribbon {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c2185b;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .blog-v2 .blog-featured__body {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .blog-v2 .blog-featured__tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c2185b;
          padding: 6px 12px;
          background: rgba(194, 24, 91, 0.08);
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .blog-v2 .blog-featured__title {
          font-size: clamp(1.35rem, 2.4vw, 1.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.25;
          color: #1a1220;
          margin: 0 0 14px;
        }
        .blog-v2 .blog-featured__excerpt {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #6b6173;
          margin: 0 0 24px;
        }
        .blog-v2 .blog-featured__meta {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid rgba(26, 18, 32, 0.08);
        }
        .blog-v2 .blog-featured__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #6b6173;
          font-weight: 500;
        }
        .blog-v2 .blog-featured__meta-item i { color: #c2185b; }
        .blog-v2 .blog-featured__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 18px rgba(194, 24, 91, 0.28);
        }
        .blog-v2 .blog-featured__cta:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(194, 24, 91, 0.38);
        }
        .blog-v2 .blog-featured__cta i { transition: transform 0.25s ease; }
        .blog-v2 .blog-featured__cta:hover i { transform: translateX(4px); }

        @media (max-width: 767px) {
          .blog-v2 .blog-featured { grid-template-columns: 1fr; }
          .blog-v2 .blog-featured__media { min-height: 220px; }
          .blog-v2 .blog-featured__emoji { font-size: 5rem; }
          .blog-v2 .blog-featured__body { padding: 28px 24px; }
          .blog-v2 .blog-featured__cta { margin-left: 0; margin-top: 8px; }
        }

        /* ============= GRID HEADER ============= */
        .blog-v2 .blog-grid-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(26, 18, 32, 0.08);
        }
        .blog-v2 .blog-grid-head__title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #1a1220;
          margin: 0;
        }
        .blog-v2 .blog-grid-head__count {
          font-size: 0.82rem;
          color: #6b6173;
          font-weight: 500;
        }

        /* ============= BLOG CARDS ============= */
        .blog-v2 .blog-card-v2 {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(26, 18, 32, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease,
            border-color 0.4s ease;
        }
        .blog-v2 .blog-card-v2:hover {
          transform: translateY(-6px);
          border-color: rgba(194, 24, 91, 0.2);
          box-shadow: 0 24px 48px rgba(194, 24, 91, 0.14);
        }
        .blog-v2 .blog-card-v2__media {
          position: relative;
          aspect-ratio: 16 / 9;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .blog-v2 .blog-card-v2__emoji {
          font-size: 4rem;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.12));
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .blog-v2 .blog-card-v2:hover .blog-card-v2__emoji {
          transform: scale(1.15) rotate(6deg);
        }
        .blog-v2 .blog-card-v2__tag {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a1220;
        }
        .blog-v2 .blog-card-v2__body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-v2 .blog-card-v2__title {
          font-size: 1.02rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.4;
          color: #1a1220;
          margin: 0 0 10px;
          transition: color 0.25s ease;
        }
        .blog-v2 .blog-card-v2:hover .blog-card-v2__title {
          color: #c2185b;
        }
        .blog-v2 .blog-card-v2__excerpt {
          font-size: 0.87rem;
          line-height: 1.65;
          color: #6b6173;
          margin: 0 0 20px;
          flex: 1;
        }
        .blog-v2 .blog-card-v2__foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(26, 18, 32, 0.08);
        }
        .blog-v2 .blog-card-v2__meta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          color: #6b6173;
          flex-wrap: wrap;
        }
        .blog-v2 .blog-card-v2__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .blog-v2 .blog-card-v2__meta-item i { color: #c2185b; font-size: 0.72rem; }
        .blog-v2 .blog-card-v2__read {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #c2185b;
          text-decoration: none;
          transition: gap 0.25s ease;
          white-space: nowrap;
        }
        .blog-v2 .blog-card-v2__read-arrow {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(194, 24, 91, 0.1);
          font-size: 0.7rem;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease;
        }
        .blog-v2 .blog-card-v2:hover .blog-card-v2__read { gap: 10px; }
        .blog-v2 .blog-card-v2:hover .blog-card-v2__read-arrow {
          background: #c2185b;
          color: #fff;
          transform: translateX(2px);
        }

        /* ============= NEWSLETTER ============= */
        .blog-v2 .blog-newsletter {
          position: relative;
          margin-top: 64px;
          padding: 48px;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(135deg, #2a0e1b 0%, #4a1230 55%, #7c1d47 100%);
          color: #fff;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(42, 14, 27, 0.28);
        }
        .blog-v2 .blog-newsletter::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 111, 145, 0.35), transparent 65%);
          top: -220px;
          right: -160px;
          filter: blur(60px);
          z-index: -1;
          pointer-events: none;
        }
        .blog-v2 .blog-newsletter::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 211, 110, 0.3), transparent 65%);
          bottom: -140px;
          left: -100px;
          filter: blur(50px);
          z-index: -1;
          pointer-events: none;
        }
        .blog-v2 .blog-newsletter__inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .blog-v2 .blog-newsletter__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ffd36e;
          margin-bottom: 14px;
        }
        .blog-v2 .blog-newsletter__title {
          font-size: clamp(1.4rem, 2.6vw, 1.9rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #fff;
          margin: 0 0 10px;
        }
        .blog-v2 .blog-newsletter__desc {
          font-size: 0.92rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        .blog-v2 .blog-newsletter__form {
          display: flex;
          gap: 8px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          backdrop-filter: blur(10px);
        }
        .blog-v2 .blog-newsletter__input {
          flex: 1;
          padding: 12px 20px;
          background: transparent;
          border: 0;
          outline: none;
          color: #fff;
          font-size: 0.9rem;
          border-radius: 999px;
          font-family: inherit;
        }
        .blog-v2 .blog-newsletter__input::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }
        .blog-v2 .blog-newsletter__btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 0;
          font-size: 0.86rem;
          font-weight: 600;
          color: #c2185b;
          background: #fff;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        }
        .blog-v2 .blog-newsletter__btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25);
        }
        .blog-v2 .blog-newsletter__note {
          margin: 14px 0 0;
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.55);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .blog-v2 .blog-newsletter__note i { color: #ffd36e; }

        @media (max-width: 767px) {
          .blog-v2 .blog-newsletter { padding: 32px 24px; margin-top: 48px; }
          .blog-v2 .blog-newsletter__inner { grid-template-columns: 1fr; gap: 24px; }
          .blog-v2 .blog-newsletter__form { flex-direction: column; border-radius: 16px; }
          .blog-v2 .blog-newsletter__btn { justify-content: center; padding: 14px 24px; }
        }

        /* ============= REDUCED MOTION ============= */
        @media (prefers-reduced-motion: reduce) {
          .blog-v2 .blog-card-v2,
          .blog-v2 .blog-featured,
          .blog-v2 .blog-card-v2__emoji,
          .blog-v2 .blog-featured__emoji {
            transition: none !important;
          }
        }
      `}</style>

      <PageHero
        current="Blog"
        title="Women's Health Blog"
        subtitle={`Expert health articles and tips from ${CLINIC.doctor} to help you live a healthier life.`}
      />

      <div className="blog-v2">
        {/* INTRO */}
        <section className="blog-intro">
          <div className="container">
            <div className="blog-intro__inner">
              <div className="blog-eyebrow">
                <span className="blog-eyebrow__line" />
                <span>From the Doctor&apos;s Desk</span>
                <span className="blog-eyebrow__line" />
              </div>
              <h2 className="blog-intro__title">
                Insightful Reads for <span style={{ color: "#c2185b" }}>Every Woman</span>
              </h2>
              <p className="blog-intro__sub">
                Evidence-based tips, myth-busting, and gentle guidance on PCOD, pregnancy,
                hygiene, and everything in between.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ paddingTop: 0 }}>
          <div className="container">

            {/* GRID HEADER */}
            <div className="blog-grid-head">
              <h3 className="blog-grid-head__title">Latest Articles</h3>
              <span className="blog-grid-head__count">
                {rest.length} article{rest.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* BLOG GRID */}
            <div className="row g-4">
              {rest.map((post) => (
                <div className="col-md-6 col-lg-4 fade-up" key={post.title}>
                  <article className="blog-card-v2">
                    <div
                      className="blog-card-v2__media"
                      style={{ background: post.gradient }}
                    >
                      <span className="blog-card-v2__tag">{post.tag}</span>
                      <span className="blog-card-v2__emoji">{post.emoji}</span>
                    </div>
                    <div className="blog-card-v2__body">
                      <h4 className="blog-card-v2__title">{post.title}</h4>
                      <p className="blog-card-v2__excerpt">{post.excerpt}</p>
                      <div className="blog-card-v2__foot">
                        <div className="blog-card-v2__meta">
                          <span className="blog-card-v2__meta-item">
                            <i className="bi bi-person-circle" />
                            {CLINIC.doctor}
                          </span>
                          <span className="blog-card-v2__meta-item">
                            <i className="bi bi-calendar3" />
                            {post.date}
                          </span>
                        </div>
                        <a href="#" className="blog-card-v2__read">
                          Read
                          <span className="blog-card-v2__read-arrow">
                            <i className="bi bi-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}