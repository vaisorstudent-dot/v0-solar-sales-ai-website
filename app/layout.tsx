import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SolarSales AI - Managed Intake & Revival Service for Solar Companies",
  description:
    "Turn more paid leads into kept appointments with our managed AI voice + SMS service. We run your intake, qualify prospects, and book appointments so your team can focus on closing.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
