"use client"

import { useState } from "react"
import Link from "next/link"
import { WritingDetailModal } from "./writing-detail-modal"

const writings = [
  {
    id: 1,
    category: "PASSIVE INCOME",
    date: "Feb 28, 2024",
    title: "Designer Passive Income Series (Vol. 1-7)",
    excerpt: "From Stock Photos to Etsy and KDP: A complete journey on building passive income streams as a designer.",
    fullContent: `最初认识图库经验的时候是大概2年前，俺去设计师驻点地做了7 10年多的图库...`,
  },
  {
    id: 2,
    category: "TOOLS",
    date: "Mar 15, 2024",
    title: "Designer's Toolkit: Eagle & Arc",
    excerpt:
      "Sharing two essential tools that changed my workflow: The smartest file organizer and a browser that you can't go back from.",
  },
]

export function WritingsGrid() {
  const [selectedWriting, setSelectedWriting] = useState<(typeof writings)[0] | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {writings.map((writing) => (
          <div
            key={writing.id}
            onClick={() => setSelectedWriting(writing)}
            className="bg-white text-gray-900 rounded-2xl p-8 cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-widest">{writing.category}</span>
              <span className="text-xs text-gray-500">{writing.date}</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">{writing.title}</h3>
            <p className="text-gray-600 mb-6">{writing.excerpt}</p>
            <Link href="#" className="text-gray-500 hover:text-gray-700 transition">
              Read Article →
            </Link>
          </div>
        ))}
      </div>

      {selectedWriting && <WritingDetailModal writing={selectedWriting} onClose={() => setSelectedWriting(null)} />}
    </>
  )
}
