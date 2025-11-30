"use client"

import { useEffect, useState } from "react"

interface ABTestVariant {
  name: string
  variant: "control" | "variant_a" | "variant_b"
}

/**
 * Hook to manage A/B testing variants and analytics
 */
export const useABTest = (testName: string): ABTestVariant => {
  const [variant, setVariant] = useState<ABTestVariant>({
    name: testName,
    variant: "control",
  })

  useEffect(() => {
    // Get or create variant from localStorage
    const storageKey = `ab_test_${testName}`
    const stored = localStorage.getItem(storageKey)

    if (stored) {
      const parsed = JSON.parse(stored)
      setVariant(parsed)
    } else {
      // Randomly assign variant
      const variants: Array<"control" | "variant_a" | "variant_b"> = ["control", "variant_a", "variant_b"]
      const assigned = variants[Math.floor(Math.random() * variants.length)]

      const newVariant = { name: testName, variant: assigned }
      setVariant(newVariant)
      localStorage.setItem(storageKey, JSON.stringify(newVariant))

      // Track variant assignment
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "ab_test_assigned", {
          test_name: testName,
          variant: assigned,
        })
      }
    }
  }, [testName])

  return variant
}

/**
 * Hook to track scroll depth
 */
export const useScrollDepth = () => {
  const [maxScroll, setMaxScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrolled / documentHeight) * 100

      if (scrollPercent > maxScroll) {
        setMaxScroll(Math.round(scrollPercent))

        // Track at key thresholds
        if ([25, 50, 75, 100].includes(Math.round(scrollPercent)) && Math.round(scrollPercent) % 25 === 0) {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "scroll_depth", {
              depth_percent: Math.round(scrollPercent),
            })
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [maxScroll])

  return maxScroll
}

/**
 * Hook to track time on page
 */
export const useTimeOnPage = () => {
  useEffect(() => {
    const startTime = Date.now()

    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_engagement", {
          time_on_page_seconds: timeOnPage,
          page_path: window.location.pathname,
        })
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])
}

// GTags type definition
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void
  }
}
