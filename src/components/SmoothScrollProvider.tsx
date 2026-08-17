"use client";

import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Calculate precise positioning to center the target in viewport or frame it below navbar
          const navbarHeight = 84;
          const rect = targetElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = targetElement.offsetHeight;
          const viewportHeight = window.innerHeight;

          let targetScrollY = elementTop - navbarHeight;

          // If the element comfortably fits inside viewport, center it
          if (elementHeight < viewportHeight - navbarHeight - 40) {
            const verticalOffset = (viewportHeight - navbarHeight - elementHeight) / 2;
            targetScrollY = elementTop - navbarHeight - verticalOffset;
          }

          // Ensure it does not scroll into negative space
          targetScrollY = Math.max(0, targetScrollY);

          // Smoothly scroll to the target
          window.scrollTo({
            top: targetScrollY,
            behavior: "smooth",
          });

          // Update URL hash without causing an instant layout jump
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
