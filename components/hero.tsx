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

        <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white mb-4 md:mb-6 px-2 uppercase">
          DESIGN AND AI TIPS & UXUI DESIGN SERVICES
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 md:mb-12 leading-none px-2">
          Design with <span className="italic font-light">Renxingcheng</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="/writings"
            className="px-6 py-3 md:px-8 md:py-3.5 bg-white text-black font-medium text-sm md:text-base rounded-full hover:bg-gray-100 transition-all hover:px-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            View articles
          </Link>
          <button
            onClick={() => setShowAbout(true)}
            className="px-6 py-3 md:px-8 md:py-3.5 border border-white/30 text-white font-medium text-sm md:text-base rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            About Renxingcheng
          </button>
        </div>
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </section>
  )
}
