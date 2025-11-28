"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Linkedin, Youtube } from "lucide-react"
import { useState } from "react"
import { AboutModal } from "./about-modal"

export function AboutProfile() {
  const [showAbout, setShowAbout] = useState(false)

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-800 mx-auto mb-8">
          <Image
            src="/designer-portrait.png"
            alt="Cupi"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-2">Renxingcheng</h1>
        <p className="text-gray-400">@designwithrenxingcheng</p>
      </div>

      <div className="space-y-3 mb-8">
        <Link
          href="https://threads.net"
          className="block w-full bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Read on bilibili
        </Link>
        <button
          onClick={() => setShowAbout(true)}
          className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          A bit more about me
        </button>
        <Link
          href="/shop"
          className="block w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          Work with me
        </Link>
      </div>

      <div className="flex justify-center gap-6">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:text-white transition"
          >
            <social.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  )
}
