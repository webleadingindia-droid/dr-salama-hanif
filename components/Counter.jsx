"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated stat counter — ports the [data-count] IntersectionObserver
 * logic from the original script.js so numbers count up once they
 * scroll into view.
 */
export default function Counter({ target, suffix = "", as: Tag = "strong", className, style }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const step = target / 60;
            const timer = setInterval(() => {
              count = Math.min(count + step, target);
              setValue(Math.floor(count));
              if (count >= target) clearInterval(timer);
            }, 25);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {value}
      {suffix}
    </Tag>
  );
}
