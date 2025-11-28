import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollingFooter } from "@/components/scrolling-footer"
import SpotlightBg from "@/components/spotlight-bg"
import AboutModalController from "@/components/about-modal-controller"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Design with Renxingcheng",
  description: "UXUI Design, AI Tools & Consulting Services",
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
    <html lang="en">
      <body className={`font-sans antialiased dark`}>
        <SpotlightBg />
        <AboutModalController />
        <div className="relative z-10">
          {children}
          <ScrollingFooter />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
