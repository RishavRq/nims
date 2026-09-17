import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which section is currently most visible in the viewport.
 * Uses IntersectionObserver for performance.
 *
 * @param sectionIds - IDs of section elements to observe
 * @param enabled - Whether observation is active (delays setup to allow DOM transitions)
 */
export function useScrollProgress(sectionIds: string[], enabled: boolean = true) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    // Allow DOM time to settle after AnimatePresence transitions
    const setupTimer = setTimeout(() => {
      const ratios = new Map<string, number>();

      observerRef.current = new IntersectionObserver(
        (observed) => {
          observed.forEach((entry) => {
            ratios.set(entry.target.id, entry.intersectionRatio);
          });

          let maxRatio = 0;
          let maxId = '';
          ratios.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              maxId = id;
            }
          });

          if (maxId && maxRatio > 0) {
            setActiveSection(maxId);
          }
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observerRef.current?.observe(el);
      });
    }, 600);

    return () => {
      clearTimeout(setupTimer);
      observerRef.current?.disconnect();
    };
  }, [sectionIds, enabled]);

  return { activeSection };
}
