/**
 * Track conversion events for SolarSales AI
 * Fires to Google Analytics 4
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...eventData,
      timestamp: new Date().toISOString(),
    })
  }
}

/**
 * Track lead capture form submissions
 */
export const trackLeadCapture = (source: string, formType: "pilot" | "exit_modal" | "guide") => {
  trackEvent("lead_captured", {
    source,
    form_type: formType,
    utm_source: new URLSearchParams(window.location.search).get("utm_source"),
    utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
    utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
  })
}

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (buttonText: string, section: string) => {
  trackEvent("cta_clicked", {
    button_text: buttonText,
    section,
  })
}

/**
 * Track engagement metrics (scroll depth, time on page)
 */
export const trackEngagement = (metric: string, value: number | string) => {
  trackEvent("engagement", {
    metric,
    value,
  })
}

/**
 * Track section views (for scroll tracking)
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_viewed", {
    section: sectionName,
  })
}

/**
 * Track video or audio playback
 */
export const trackMediaPlay = (mediaType: "audio" | "video", mediaName: string) => {
  trackEvent("media_played", {
    media_type: mediaType,
    media_name: mediaName,
  })
}

/**
 * Track comparison table views
 */
export const trackComparisonView = () => {
  trackEvent("comparison_viewed", {
    feature: "competitive_comparison",
  })
}

/**
 * Track resource downloads
 */
export const trackResourceDownload = (resourceName: string) => {
  trackEvent("resource_downloaded", {
    resource: resourceName,
  })
}

/**
 * Track scroll depth for engagement analysis
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    depth_percent: percentage,
  })
}

// GTags type definition for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void
    dataLayer?: any[]
  }
}
