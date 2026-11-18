import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, CLINIC } from "@/lib/data";

/* ---------- slug helper ---------- */
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getPostSlug(post) {
  return post.slug || toSlug(post.title);
}

/* ---------- SEO ---------- */
export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => getPostSlug(p) === params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Dr. Salama Haneef`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

/* ---------- static params for SSG ---------- */
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: getPostSlug(post) }));
}

/* ---------- page ---------- */
export default function BlogDetailPage({ params }) {
  const post = BLOG_POSTS.find((p) => getPostSlug(p) === params.slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter(
    (p) => getPostSlug(p) !== params.slug && p.tag === post.tag
  ).slice(0, 2);

  const fallbackRelated = BLOG_POSTS.filter(
    (p) => getPostSlug(p) !== params.slug
  ).slice(0, 2);

  const related = relatedPosts.length ? relatedPosts : fallbackRelated;

  return (
    <>
      <style>{`
        /* ============ BLOG DETAIL — scoped ============ */
        .bd-v2 *, .bd-v2 *::before, .bd-v2 *::after { box-sizing: border-box; }

        /* ============ HERO ============ */
        .bd-v2 .bd-hero {
          position: relative;
          padding: 56px 0 64px;
          overflow: hidden;
          isolation: isolate;
        }
        .bd-v2 .bd-hero__bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .bd-v2 .bd-hero__bg::before {
          content: "";
          position: absolute;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 111, 145, 0.22), transparent 65%);
          top: -260px;
          right: -180px;
          filter: blur(70px);
        }
        .bd-v2 .bd-hero__bg::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 211, 110, 0.22), transparent 65%);
          bottom: -180px;
          left: -140px;
          filter: blur(60px);
        }

        /* Breadcrumb */
        .bd-v2 .bd-crumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #6b6173;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .bd-v2 .bd-crumb a {
          color: #6b6173;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .bd-v2 .bd-crumb a:hover { color: #c2185b; }
        .bd-v2 .bd-crumb i { font-size: 0.65rem; opacity: 0.5; }
        .bd-v2 .bd-crumb__current {
          color: #1a1220;
          font-weight: 500;
          max-width: 320px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Title block */
        .bd-v2 .bd-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c2185b;
          padding: 6px 12px;
          background: rgba(194, 24, 91, 0.08);
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .bd-v2 .bd-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: #1a1220;
          margin: 0 0 22px;
          max-width: 900px;
        }
        .bd-v2 .bd-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding: 16px 0;
          border-top: 1px solid rgba(26, 18, 32, 0.08);
          border-bottom: 1px solid rgba(26, 18, 32, 0.08);
        }
        .bd-v2 .bd-meta__item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #6b6173;
        }
        .bd-v2 .bd-meta__avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.82rem;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          box-shadow: 0 6px 14px rgba(194, 24, 91, 0.3);
        }
        .bd-v2 .bd-meta__strong {
          color: #1a1220;
          font-weight: 600;
        }
        .bd-v2 .bd-meta__divider {
          width: 1px;
          height: 20px;
          background: rgba(26, 18, 32, 0.1);
        }

        /* ============ FEATURED IMAGE ============ */
        .bd-v2 .bd-cover {
          position: relative;
          margin-top: 40px;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 21 / 9;
          display: grid;
          place-items: center;
          box-shadow: 0 30px 70px rgba(26, 18, 32, 0.18);
        }
        .bd-v2 .bd-cover__emoji {
          font-size: clamp(5rem, 10vw, 9rem);
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.18));
          animation: bd-float 6s ease-in-out infinite;
        }
        @keyframes bd-float {
          50% { transform: translateY(-12px); }
        }
        .bd-v2 .bd-cover__badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c2185b;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* ============ BODY LAYOUT ============ */
        .bd-v2 .bd-body {
          padding: 56px 0 80px;
        }
        .bd-v2 .bd-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .bd-v2 .bd-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        /* ============ ARTICLE CONTENT ============ */
        .bd-v2 .bd-article {
          font-size: 1.02rem;
          line-height: 1.85;
          color: #2a2230;
        }
        .bd-v2 .bd-article > *:first-child { margin-top: 0; }
        .bd-v2 .bd-article p { margin-bottom: 22px; color: #3a3240; }
        .bd-v2 .bd-article h2 {
          font-size: clamp(1.35rem, 2.4vw, 1.7rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #1a1220;
          margin: 40px 0 16px;
          line-height: 1.3;
          scroll-margin-top: 100px;
        }
        .bd-v2 .bd-article h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1220;
          margin: 28px 0 12px;
          line-height: 1.35;
        }
        .bd-v2 .bd-article ul,
        .bd-v2 .bd-article ol {
          margin: 0 0 22px;
          padding-left: 0;
          list-style: none;
        }
        .bd-v2 .bd-article ul li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 10px;
          color: #3a3240;
        }
        .bd-v2 .bd-article ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff6f91;
          box-shadow: 0 0 0 4px rgba(194, 24, 91, 0.1);
        }
        .bd-v2 .bd-article blockquote {
          margin: 28px 0;
          padding: 22px 26px;
          border-left: 4px solid #c2185b;
          background: linear-gradient(90deg, #fdf7f9, transparent);
          border-radius: 0 14px 14px 0;
          font-size: 1.05rem;
          font-style: italic;
          color: #2a2230;
          position: relative;
        }
        .bd-v2 .bd-article blockquote::before {
          content: "\\201C";
          font-family: Georgia, serif;
          position: absolute;
          top: -8px;
          left: 8px;
          font-size: 3rem;
          color: rgba(194, 24, 91, 0.18);
          line-height: 1;
        }
        .bd-v2 .bd-article a {
          color: #c2185b;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
        }
        .bd-v2 .bd-article a:hover { color: #a01448; }
        .bd-v2 .bd-article img {
          max-width: 100%;
          border-radius: 14px;
          margin: 24px 0;
        }

        /* Lead paragraph */
        .bd-v2 .bd-lead {
          font-size: 1.15rem;
          line-height: 1.75;
          color: #1a1220;
          font-weight: 500;
          padding-left: 18px;
          border-left: 3px solid #ff6f91;
          margin-bottom: 32px !important;
        }

        /* Key takeaways card */
        .bd-v2 .bd-takeaways {
          margin: 32px 0;
          padding: 26px 28px;
          border-radius: 18px;
          background: linear-gradient(135deg, #fdf7f9, #fef6ec);
          border: 1px solid rgba(194, 24, 91, 0.15);
        }
        .bd-v2 .bd-takeaways__title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #c2185b;
          margin: 0 0 14px;
        }
        .bd-v2 .bd-takeaways__title i { font-size: 1rem; }
        .bd-v2 .bd-takeaways ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bd-v2 .bd-takeaways li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          line-height: 1.55;
          color: #2a2230;
          padding-left: 0 !important;
        }
        .bd-v2 .bd-takeaways li::before { display: none !important; }
        .bd-v2 .bd-takeaways__tick {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(194, 24, 91, 0.1);
          color: #c2185b;
          font-size: 0.7rem;
          margin-top: 2px;
        }

        /* CTA card */
        .bd-v2 .bd-inline-cta {
          margin: 40px 0;
          padding: 28px;
          border-radius: 18px;
          background: linear-gradient(135deg, #2a0e1b, #4a1230 55%, #7c1d47);
          color: #fff;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .bd-v2 .bd-inline-cta::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 111, 145, 0.35), transparent 65%);
          top: -140px;
          right: -80px;
          filter: blur(40px);
          z-index: -1;
        }
        .bd-v2 .bd-inline-cta__icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 1.3rem;
          box-shadow: 0 10px 22px rgba(255, 111, 145, 0.4);
        }
        .bd-v2 .bd-inline-cta__content { flex: 1; min-width: 200px; }
        .bd-v2 .bd-inline-cta__title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 4px;
          color: #fff;
        }
        .bd-v2 .bd-inline-cta__desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.75);
          margin: 0;
          line-height: 1.5;
        }
        .bd-v2 .bd-inline-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 600;
          color: #c2185b;
          background: #fff;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          white-space: nowrap;
        }
        .bd-v2 .bd-inline-cta__btn:hover {
          color: #c2185b;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.28);
        }

        /* Share row */
        .bd-v2 .bd-share {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          padding: 24px 0;
          margin-top: 40px;
          border-top: 1px solid rgba(26, 18, 32, 0.08);
          border-bottom: 1px solid rgba(26, 18, 32, 0.08);
        }
        .bd-v2 .bd-share__label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #1a1220;
        }
        .bd-v2 .bd-share__btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #1a1220;
          background: #f5eff3;
          text-decoration: none;
          font-size: 0.92rem;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease;
        }
        .bd-v2 .bd-share__btn:hover {
          background: #c2185b;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Author box */
        .bd-v2 .bd-author {
          margin-top: 40px;
          display: flex;
          gap: 18px;
          padding: 24px;
          border-radius: 18px;
          background: #fdf7f9;
          border: 1px solid rgba(194, 24, 91, 0.12);
          align-items: center;
          flex-wrap: wrap;
        }
        .bd-v2 .bd-author__avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.2rem;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          flex-shrink: 0;
          box-shadow: 0 8px 18px rgba(194, 24, 91, 0.3);
        }
        .bd-v2 .bd-author__content { flex: 1; min-width: 200px; }
        .bd-v2 .bd-author__name {
          font-size: 0.98rem;
          font-weight: 700;
          color: #1a1220;
          margin: 0 0 2px;
        }
        .bd-v2 .bd-author__role {
          font-size: 0.8rem;
          color: #6b6173;
          margin: 0 0 8px;
        }
        .bd-v2 .bd-author__bio {
          font-size: 0.85rem;
          color: #6b6173;
          line-height: 1.55;
          margin: 0;
        }
        .bd-v2 .bd-author__link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #c2185b;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .bd-v2 .bd-author__link:hover { color: #a01448; }

        /* ============ SIDEBAR ============ */
        .bd-v2 .bd-side {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        @media (max-width: 991px) {
          .bd-v2 .bd-side { position: static; }
        }
        .bd-v2 .bd-side__card {
          background: #fff;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid rgba(26, 18, 32, 0.08);
          box-shadow: 0 4px 16px rgba(26, 18, 32, 0.04);
        }
        .bd-v2 .bd-side__head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(26, 18, 32, 0.08);
        }
        .bd-v2 .bd-side__head-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #c2185b, #ff6f91);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 0.9rem;
        }
        .bd-v2 .bd-side__head-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #1a1220;
          margin: 0;
          line-height: 1.2;
        }
        .bd-v2 .bd-side__head-sub {
          font-size: 0.72rem;
          color: #6b6173;
          margin: 2px 0 0;
        }
        .bd-v2 .bd-side__desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: #6b6173;
          margin: 0 0 18px;
        }
        .bd-v2 .bd-side__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px 16px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background 0.25s ease;
          margin-bottom: 10px;
        }
        .bd-v2 .bd-side__btn:last-child { margin-bottom: 0; }
        .bd-v2 .bd-side__btn--primary {
          color: #fff;
          background: linear-gradient(135deg, #c2185b, #e91e63, #ff6f91);
          background-size: 200% 100%;
          box-shadow: 0 8px 18px rgba(194, 24, 91, 0.28);
        }
        .bd-v2 .bd-side__btn--primary:hover {
          color: #fff;
          transform: translateY(-2px);
          background-position: 100% 0;
          box-shadow: 0 12px 24px rgba(194, 24, 91, 0.4);
        }
        .bd-v2 .bd-side__btn--ghost {
          color: #c2185b;
          background: #fff;
          border: 1.5px solid rgba(194, 24, 91, 0.25);
        }
        .bd-v2 .bd-side__btn--ghost:hover {
          color: #c2185b;
          background: rgba(194, 24, 91, 0.06);
          border-color: #c2185b;
        }

        /* Table of contents */
        .bd-v2 .bd-toc {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .bd-v2 .bd-toc li { margin-bottom: 4px; }
        .bd-v2 .bd-toc a {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.83rem;
          color: #6b6173;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .bd-v2 .bd-toc a::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(194, 24, 91, 0.25);
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .bd-v2 .bd-toc a:hover {
          background: #fdf7f9;
          color: #c2185b;
        }
        .bd-v2 .bd-toc a:hover::before { background: #c2185b; }

        /* ============ RELATED POSTS ============ */
        .bd-v2 .bd-related {
          padding: 64px 0 80px;
          background: #fdf7f9;
        }
        .bd-v2 .bd-related__head {
          text-align: center;
          margin-bottom: 40px;
        }
        .bd-v2 .bd-related__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c2185b;
          margin-bottom: 12px;
        }
        .bd-v2 .bd-related__eyebrow-line {
          width: 22px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
        }
        .bd-v2 .bd-related__title {
          font-size: clamp(1.4rem, 2.6vw, 1.9rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #1a1220;
          margin: 0;
        }
        .bd-v2 .bd-rel-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(26, 18, 32, 0.08);
          text-decoration: none;
          transition: transform 0.35s ease, box-shadow 0.35s ease,
            border-color 0.35s ease;
        }
        .bd-v2 .bd-rel-card:hover {
          transform: translateY(-5px);
          border-color: rgba(194, 24, 91, 0.2);
          box-shadow: 0 20px 40px rgba(194, 24, 91, 0.12);
        }
        .bd-v2 .bd-rel-card__media {
          aspect-ratio: 16 / 10;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .bd-v2 .bd-rel-card__emoji {
          font-size: 3.2rem;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .bd-v2 .bd-rel-card:hover .bd-rel-card__emoji {
          transform: scale(1.15) rotate(6deg);
        }
        .bd-v2 .bd-rel-card__body { padding: 20px; }
        .bd-v2 .bd-rel-card__tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c2185b;
        }
        .bd-v2 .bd-rel-card__title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #1a1220;
          margin: 8px 0;
          line-height: 1.4;
          transition: color 0.25s ease;
        }
        .bd-v2 .bd-rel-card:hover .bd-rel-card__title { color: #c2185b; }
        .bd-v2 .bd-rel-card__date {
          font-size: 0.75rem;
          color: #6b6173;
        }

        /* ============ FLOATING BACK ============ */
        .bd-v2 .bd-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #c2185b;
          background: #fff;
          border: 1.5px solid rgba(194, 24, 91, 0.2);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .bd-v2 .bd-back:hover {
          color: #fff;
          background: #c2185b;
          border-color: #c2185b;
          transform: translateX(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .bd-v2 .bd-cover__emoji { animation: none; }
          .bd-v2 * { transition: none !important; }
        }

        @media (max-width: 767px) {
          .bd-v2 .bd-hero { padding: 40px 0 48px; }
          .bd-v2 .bd-cover { aspect-ratio: 4 / 3; margin-top: 28px; }
          .bd-v2 .bd-body { padding: 40px 0 60px; }
          .bd-v2 .bd-inline-cta { padding: 22px; }
          .bd-v2 .bd-inline-cta__btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="bd-v2">
        {/* HERO */}
        <section className="bd-hero">
          <div className="bd-hero__bg" aria-hidden />
          <div className="container">
            {/* Breadcrumb */}
            <nav className="bd-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <i className="bi bi-chevron-right" />
              <Link href="/blog">Blog</Link>
              <i className="bi bi-chevron-right" />
              <span className="bd-crumb__current">{post.title}</span>
            </nav>

            {/* Title block */}
            <span className="bd-tag">
              <i className="bi bi-bookmark-fill" />
              {post.tag}
            </span>
            <h1 className="bd-title">{post.title}</h1>

            <div className="bd-meta">
              <div className="bd-meta__item">
                <div className="bd-meta__avatar">
                  {CLINIC.doctor
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="bd-meta__strong">{CLINIC.doctor}</div>
                  <div style={{ fontSize: "0.75rem" }}>{CLINIC.role}</div>
                </div>
              </div>
              <div className="bd-meta__divider" />
              <div className="bd-meta__item">
                <i className="bi bi-calendar3" />
                {post.date}
              </div>
              <div className="bd-meta__divider" />
              <div className="bd-meta__item">
                <i className="bi bi-clock-history" />
                5 min read
              </div>
            </div>

            {/* Cover */}
            <div
              className="bd-cover"
              style={{ background: post.gradient }}
            >
              <span className="bd-cover__emoji">{post.emoji}</span>
              <span className="bd-cover__badge">
                <i className="bi bi-shield-check" />
                Doctor Reviewed
              </span>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="bd-body">
          <div className="container">
            <div className="bd-grid">
              {/* ARTICLE */}
              <article className="bd-article">
                <p className="bd-lead">{post.excerpt}</p>

                <p>
                  Women&apos;s health is a lifelong journey — and understanding your body is
                  the first step toward caring for it well. In this article,{" "}
                  <strong>{CLINIC.doctor}</strong> shares practical, evidence-informed
                  guidance drawn from her gynecological practice.
                </p>

                {/* Key takeaways */}
                <div className="bd-takeaways">
                  <div className="bd-takeaways__title">
                    <i className="bi bi-lightbulb-fill" />
                    Key Takeaways
                  </div>
                  <ul>
                    <li>
                      <span className="bd-takeaways__tick">
                        <i className="bi bi-check2" />
                      </span>
                      Early awareness and screening go a long way in preventing complications.
                    </li>
                    <li>
                      <span className="bd-takeaways__tick">
                        <i className="bi bi-check2" />
                      </span>
                      Lifestyle, diet, and stress management play a vital role in long-term wellbeing.
                    </li>
                    <li>
                      <span className="bd-takeaways__tick">
                        <i className="bi bi-check2" />
                      </span>
                      Personalized care and modern medicine work best together.
                    </li>
                  </ul>
                </div>

                <h2 id="understanding">Understanding the Condition</h2>
                <p>
                  Many women experience subtle symptoms they dismiss as &quot;just stress&quot; or
                  &quot;normal tiredness.&quot; In reality, the body often signals imbalance
                  much earlier than the disease fully manifests. Recognising these signals is
                  powerful — it gives you the chance to act early.
                </p>
                <p>
                  With {CLINIC.doctor}, every consultation begins with listening —
                  to your history, your routine, and your concerns. From there, we build a
                  care plan that respects your lifestyle and your body&apos;s natural rhythms.
                </p>

                <blockquote>
                  The goal of treatment is not just to relieve symptoms, but to find and
                  address the root cause — so healing becomes lasting, not temporary.
                </blockquote>

                <h2 id="symptoms">Common Symptoms to Watch For</h2>
                <ul>
                  <li>Irregular or painful menstrual cycles</li>
                  <li>Persistent fatigue or low energy</li>
                  <li>Unexplained weight changes</li>
                  <li>Mood swings or sleep disturbances</li>
                  <li>Hair thinning, acne, or skin changes</li>
                </ul>

                <p>
                  If you notice one or more of these symptoms for more than a few weeks,
                  it&apos;s worth a conversation with a specialist. Early action saves
                  months of uncertainty.
                </p>

                {/* Inline CTA */}
                <div className="bd-inline-cta">
                  <div className="bd-inline-cta__icon">
                    <i className="bi bi-calendar2-heart-fill" />
                  </div>
                  <div className="bd-inline-cta__content">
                    <h3 className="bd-inline-cta__title">
                      Have questions about your health?
                    </h3>
                    <p className="bd-inline-cta__desc">
                      Book a free first consultation with {CLINIC.doctor} — 50% off
                      for new patients.
                    </p>
                  </div>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apptModal"
                    className="bd-inline-cta__btn"
                  >
                    <i className="bi bi-calendar2-plus" />
                    Book Now
                  </a>
                </div>

                <h2 id="our-approach">Our Approach to Care</h2>
                <p>
                  Women&apos;s health works best when looked at as a whole — hormones,
                  nutrition, sleep and stress together. Rather than managing one symptom
                  in isolation, the treatment plan supports the whole system.
                </p>
                <p>
                  Depending on your symptoms and test results, the plan may include
                  medicines, dietary adjustments and lifestyle routines that fit naturally
                  into your day.
                </p>

                <h3>Key principles we follow:</h3>
                <ul>
                  <li>Personalized treatment — no two bodies are the same</li>
                  <li>Gentle, non-invasive first-line approaches</li>
                  <li>Integration with modern diagnostics when needed</li>
                  <li>Focus on long-term balance, not quick fixes</li>
                </ul>

                <h2 id="when-to-see">When to See a Doctor</h2>
                <p>
                  If symptoms interfere with daily life, persist beyond a few weeks, or
                  worsen over time — see a specialist. A consultation is a conversation,
                  not a verdict; it&apos;s the fastest way to clarity and peace of mind.
                </p>

                {/* Share */}
                <div className="bd-share">
                  <span className="bd-share__label">Share this article:</span>
                  <a
                    href="#"
                    className="bd-share__btn"
                    aria-label="Share on Facebook"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    href="#"
                    className="bd-share__btn"
                    aria-label="Share on Twitter"
                  >
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a
                    href="#"
                    className="bd-share__btn"
                    aria-label="Share on WhatsApp"
                  >
                    <i className="bi bi-whatsapp" />
                  </a>
                  <a
                    href="#"
                    className="bd-share__btn"
                    aria-label="Copy link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>

                {/* Author box */}
                <div className="bd-author">
                  <div className="bd-author__avatar">
                    {CLINIC.doctor
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="bd-author__content">
                    <p className="bd-author__name">{CLINIC.doctor}</p>
                    <p className="bd-author__role">
                      {CLINIC.role}
                    </p>
                    <p className="bd-author__bio">
                      {CLINIC.doctor}, a BHU graduate, combines compassionate care with modern
                      medicine, diet and lifestyle guidance to help women heal confidently.
                    </p>
                  </div>
                  <Link href="/about" className="bd-author__link">
                    View Profile <i className="bi bi-arrow-right" />
                  </Link>
                </div>

                <div className="text-center mt-4">
                  <Link href="/blog" className="bd-back">
                    <i className="bi bi-arrow-left" />
                    Back to all articles
                  </Link>
                </div>
              </article>

              {/* SIDEBAR */}
              <aside className="bd-side">
                {/* Book card */}
                <div className="bd-side__card">
                  <div className="bd-side__head">
                    <div className="bd-side__head-icon">
                      <i className="bi bi-calendar2-check-fill" />
                    </div>
                    <div>
                      <h3 className="bd-side__head-title">Book a Consultation</h3>
                      <p className="bd-side__head-sub">50% off first visit</p>
                    </div>
                  </div>
                  <p className="bd-side__desc">
                    Get a personalized diagnosis and treatment plan from {CLINIC.doctor}.
                  </p>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#apptModal"
                    className="bd-side__btn bd-side__btn--primary"
                  >
                    <i className="bi bi-calendar2-plus" />
                    Book Appointment
                  </a>
                  <a
                    href={`tel:${CLINIC.phone}`}
                    className="bd-side__btn bd-side__btn--ghost"
                  >
                    <i className="bi bi-telephone-fill" />
                    {CLINIC.phone}
                  </a>
                </div>

                {/* TOC */}
                <div className="bd-side__card">
                  <div className="bd-side__head">
                    <div className="bd-side__head-icon">
                      <i className="bi bi-list-ul" />
                    </div>
                    <div>
                      <h3 className="bd-side__head-title">In This Article</h3>
                    </div>
                  </div>
                  <ul className="bd-toc">
                    <li>
                      <a href="#understanding">Understanding the Condition</a>
                    </li>
                    <li>
                      <a href="#symptoms">Common Symptoms</a>
                    </li>
                    <li>
                      <a href="#our-approach">Our Approach to Care</a>
                    </li>
                    <li>
                      <a href="#when-to-see">When to See a Doctor</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="bd-related">
            <div className="container">
              <div className="bd-related__head">
                <div className="bd-related__eyebrow">
                  <span className="bd-related__eyebrow-line" />
                  <span>Keep Reading</span>
                  <span className="bd-related__eyebrow-line" />
                </div>
                <h2 className="bd-related__title">Related Articles</h2>
              </div>
              <div className="row g-4">
                {related.map((rp) => (
                  <div className="col-md-6" key={rp.title}>
                    <Link
                      href={`/blog/${getPostSlug(rp)}`}
                      className="bd-rel-card"
                    >
                      <div
                        className="bd-rel-card__media"
                        style={{ background: rp.gradient }}
                      >
                        <span className="bd-rel-card__emoji">{rp.emoji}</span>
                      </div>
                      <div className="bd-rel-card__body">
                        <span className="bd-rel-card__tag">{rp.tag}</span>
                        <h3 className="bd-rel-card__title">{rp.title}</h3>
                        <span className="bd-rel-card__date">
                          <i className="bi bi-calendar3 me-1" />
                          {rp.date}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}