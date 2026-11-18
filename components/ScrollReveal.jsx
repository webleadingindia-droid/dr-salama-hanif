"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ports the remaining page-wide behaviour from the original script.js
 * that isn't tied to one specific component:
 *   - navbar "scrolled" class toggle on window scroll
 *   - fade-up reveal animation via IntersectionObserver
 * Re-initializes the fade-up observer whenever the route changes,
 * since Next.js swaps page content without a full reload.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Wait a tick so the new page's DOM has painted before observing.
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

      // Store so cleanup can disconnect if the route changes quickly.
      window.__revealObserver = observer;
    });

    return () => {
      cancelAnimationFrame(raf);
      window.__revealObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
