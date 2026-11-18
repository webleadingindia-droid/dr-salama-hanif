"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ===== DESKTOP / TABLET NAVBAR ===== */}
      <header
        className={`fixed-top nav-shell ${scrolled ? "nav-shell--scrolled" : ""}`}
      >
        <div className="container">
          <nav className="nav-bar">
            {/* Brand */}
            <Link href="/" className="nav-brand" aria-label="Home">
              <span className="nav-brand__mark">
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202611/16/67xMxn73fwp6hypx41d1/image.png"
                  alt="Ayurvedic treatment for women's wellness"
                />
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="nav-links d-none d-lg-flex">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link-custom ${active ? "is-active" : ""}`}
                    >
                      <span>{link.label}</span>
                      <span className="nav-link__dot" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <a href="tel:+910000000000" className="nav-call" aria-label="Call us">
                <i className="bi bi-telephone-fill" />
                <span className="d-none d-xl-inline">Call</span>
              </a>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#apptModal"
                className="btn-book"
              >
                <span className="btn-book__shine" aria-hidden />
                <i className="bi bi-calendar2-check" />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              className={`nav-burger d-lg-none ${open ? "is-open" : ""}`}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      {/* ===== MOBILE FULLSCREEN MENU ===== */}
      <div
        className={`mobile-sheet d-lg-none ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mobile-sheet__bg" aria-hidden />
        <div className="mobile-sheet__inner">
          <div className="mobile-sheet__head">
            <span className="mobile-sheet__title">Menu</span>
            <button
              className="mobile-sheet__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>

          <ul className="mobile-sheet__links">
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{ animationDelay: `${80 + i * 55}ms` }}
                >
                  <Link
                    href={link.href}
                    className={`mobile-link ${active ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-link__index">0{i + 1}</span>
                    <span className="mobile-link__label">{link.label}</span>
                    <i className="bi bi-arrow-up-right mobile-link__arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-sheet__foot">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#apptModal"
              className="btn-book btn-book--full"
              onClick={() => setOpen(false)}
            >
              <i className="bi bi-calendar2-check" />
              <span>Book Appointment</span>
            </a>
            <a href="tel:+910000000000" className="btn-call">
              <i className="bi bi-telephone-fill" />
              <span>Talk to an expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx global>{`
        :root {
          --brand: #c2185b;
          --brand-2: #ff6f91;
          --ink: #1a1220;
          --muted: #6b6173;
          --border-soft: rgba(26, 18, 32, 0.08);
        }

        /* ===== SHELL (flat sticky header) ===== */
        .nav-shell {
          padding: 10px 0;
          z-index: 1040;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-soft);
          transition: padding 0.35s ease, background 0.35s ease,
            box-shadow 0.35s ease;
        }
        .nav-shell--scrolled {
          padding: 6px 0;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 12px rgba(26, 18, 32, 0.05);
        }

        .nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 0;
          border-radius: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        /* ===== BRAND ===== */
        .nav-brand {
          display: inline-flex;
          align-items: center;
          padding: 0;
          border-radius: 0;
          text-decoration: none;
        }
        .nav-brand__mark {
          display: grid;
          place-items: center;
          width: 84px;
          height: 46px;
          overflow: hidden;
          position: relative;
        }
        .nav-brand__mark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        /* ===== DESKTOP LINKS ===== */
        .nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 4px;
        }
        .nav-link-custom {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link-custom:hover {
          color: var(--brand);
        }
        .nav-link-custom.is-active {
          color: var(--brand);
          font-weight: 600;
        }
        .nav-link__dot {
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--brand);
          transform: translateX(-50%) scale(0);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nav-link-custom.is-active .nav-link__dot,
        .nav-link-custom:hover .nav-link__dot {
          transform: translateX(-50%) scale(1);
        }

        /* ===== CALL BUTTON ===== */
        .nav-call {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 38px;
          justify-content: center;
          padding: 0 14px;
          border-radius: 999px;
          color: var(--brand);
          background: rgba(194, 24, 91, 0.08);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .nav-call:hover {
          background: rgba(194, 24, 91, 0.15);
          color: var(--brand);
          transform: translateY(-1px);
        }

        /* ===== PRIMARY CTA ===== */
        .btn-book {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(
            135deg,
            var(--brand) 0%,
            #e91e63 50%,
            var(--brand-2) 100%
          );
          background-size: 200% 100%;
          box-shadow: 0 4px 14px rgba(194, 24, 91, 0.25);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background-position 0.6s ease;
        }
        .btn-book:hover {
          color: #fff;
          transform: translateY(-1px);
          background-position: 100% 0;
          box-shadow: 0 6px 18px rgba(194, 24, 91, 0.35);
        }
        .btn-book__shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          animation: shine 3.2s ease-in-out infinite;
        }
        @keyframes shine {
          0%,
          60% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .btn-book i {
          font-size: 0.95rem;
        }
        .btn-book--full {
          width: 100%;
          justify-content: center;
          padding: 16px 20px;
          font-size: 0.95rem;
        }

        /* ===== BURGER ===== */
        .nav-burger {
          position: relative;
          width: 44px;
          height: 20px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          display: grid;
          place-items: center;
          gap: 5px;
          cursor: pointer;
        }
        .nav-burger span {
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 2px;
          background: var(--brand);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.2s ease;
        }
        .nav-burger.is-open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-burger.is-open span:nth-child(2) {
          opacity: 0;
        }
        .nav-burger.is-open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ===== MOBILE SHEET ===== */
        .mobile-sheet {
          position: fixed;
          inset: 0;
          z-index: 1050;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .mobile-sheet.is-open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-sheet__bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              120% 60% at 100% 0%,
              rgba(255, 111, 145, 0.25),
              transparent 60%
            ),
            radial-gradient(
              100% 70% at 0% 100%,
              rgba(194, 24, 91, 0.18),
              transparent 60%
            ),
            rgba(20, 12, 24, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .mobile-sheet__inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          padding: 22px;
          background: #fffdfc;
          transform: translateY(8px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.3s ease;
        }
        .mobile-sheet.is-open .mobile-sheet__inner {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-sheet__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border-soft);
        }
        .mobile-sheet__title {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .mobile-sheet__close {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 0;
          background: rgba(194, 24, 91, 0.08);
          color: var(--brand);
          font-size: 1rem;
          display: grid;
          place-items: center;
          cursor: pointer;
        }
        .mobile-sheet__links {
          list-style: none;
          margin: 18px 0 0;
          padding: 0;
          flex: 1;
          overflow-y: auto;
        }
        .mobile-sheet__links li {
          opacity: 0;
          transform: translateY(14px);
        }
        .mobile-sheet.is-open .mobile-sheet__links li {
          animation: slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 8px;
          border-bottom: 1px dashed var(--border-soft);
          color: var(--ink);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mobile-link__index {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--brand);
          opacity: 0.7;
          width: 22px;
        }
        .mobile-link__label {
          flex: 1;
          font-size: 1.35rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .mobile-link__arrow {
          color: var(--muted);
          font-size: 1.1rem;
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .mobile-link:hover,
        .mobile-link.is-active {
          color: var(--brand);
        }
        .mobile-link:hover .mobile-link__arrow,
        .mobile-link.is-active .mobile-link__arrow {
          color: var(--brand);
          transform: translate(2px, -2px);
        }
        .mobile-sheet__foot {
          display: grid;
          gap: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--border-soft);
        }
        .btn-call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--brand);
          text-decoration: none;
          background: rgba(194, 24, 91, 0.08);
          border: 1px solid rgba(194, 24, 91, 0.15);
          transition: background 0.25s ease;
        }
        .btn-call:hover {
          background: rgba(194, 24, 91, 0.14);
          color: var(--brand);
        }

        /* ===== BODY OFFSET ===== */
        body {
          padding-top: 72px;
        }
        @media (max-width: 991.98px) {
          body {
            padding-top: 66px;
          }
          .nav-brand__mark {
            width: 72px;
            height: 42px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </>
  );
}