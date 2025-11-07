// useHashTracking.js
import { useEffect } from "react";


/**
 * Handles hash navigation + custom event tracking for Google Analytics
 */
export function useAnalytics() {
  // 1. Track hash-based page navigation
  useEffect(() => {
    const trackHashChange = () => {
      if (window.gtag && import.meta.env.MODE === "production") {
        const pagePath = window.location.pathname + window.location.hash;
        window.gtag("config", import.meta.env.VITE_GA_ID, { page_path: pagePath });
      }
    };

    trackHashChange();
    window.addEventListener("hashchange", trackHashChange);
    return () => window.removeEventListener("hashchange", trackHashChange);
  }, []);

  // 2. Track scroll depth
  useEffect(() => {
    let lastTrackedDepth = 0;

    const handleScroll = () => {
      if (!window.gtag || import.meta.env.MODE !== "production") return;

      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      // Only fire at 25%, 50%, 75%, 100%
      if (scrollDepth >= lastTrackedDepth + 25 && scrollDepth <= 100) {
        lastTrackedDepth += 25;
        window.gtag("event", "scroll_depth", { percent: lastTrackedDepth });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}


/**
 * Helper function to trigger custom GA events manually
 * Example: trackEvent('click_resume', { link_text: 'Download Resume' });
 */
export function trackEvent(eventName, params = {}) {
  if (window.gtag && import.meta.env.MODE === "production") {
    window.gtag("event", eventName, params);
  }
}
