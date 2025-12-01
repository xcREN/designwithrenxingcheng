"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AboutModal } from "./about-modal"

export function Hero() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 w-screen overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-12 w-full">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-800">
            <Image
              src="/designer-portrait.png"
              alt="Cupi"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-xs sm:text-sm font-mono tracking-widest text-gray-400 mb-4 sm:mb-6 px-2">
          DESIGN AND AI TIPS & UXUI DESIGN SERVICES
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 sm:mb-8 leading-tight px-2">
          Design with <span className="italic">Renxingcheng</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="/writings"
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium text-sm sm:text-base rounded-full hover:bg-gray-100 transition"
          >
            View articles
          </Link>
          <button
            onClick={() => setShowAbout(true)}
            className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-600 text-white font-medium text-sm sm:text-base rounded-full hover:bg-white/10 transition"
          >
            About Renxingcheng
          </button>
        </div>
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </section>
  )
}
