"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Tab = "story" | "services" | "chinese"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
  /** Optional: when opened, show this tab */
  initialTab?: Tab
}

export function AboutModal({ isOpen, onClose, initialTab }: AboutModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("story")

  useEffect(() => {
    if (isOpen && typeof initialTab !== "undefined") {
      setActiveTab(initialTab)
    }
  }, [isOpen, initialTab])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-800">
          <h2 className="text-3xl font-serif font-bold">About Renxingcheng</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="p-1 text-gray-300 hover:bg-gray-700/40 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-8 pt-6 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("story")}
            className={`pb-4 font-medium transition ${activeTab === "story" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-200"
              }`}
          >
            My Story
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`pb-4 font-medium transition ${activeTab === "services" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-200"
              }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("chinese")}
            className={`pb-4 font-medium transition ${activeTab === "chinese" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-200"
              }`}
          >
            中文介绍
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {activeTab === "story" && (
            <div className="space-y-4 text-gray-300">
              <p>
                8+ years UXUI design experience. Over the past 3 years, I have been using AI tools extensively.
                Specialized in UXUI user experience design, AI-assisted design and automation.
              </p>
              <p>
                As a personal, I create business websites & mobile applications. I also use off-hours design tools and
                share design templates, galleries, etc. to help foster in-house designers.
              </p>
              <p>
                Currently, I share design x AI knowledge on my personal site, analyze design experiences that have been
                influenced, and provide business website design, work collection, UXUI resources, and galleries.
              </p>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-4">Work with me</h3>
                <p className="text-gray-400 mb-6">
                  I offer specialized services to help you grow as a designer or improve your business.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "UXUI Portfolio review & Coaching",
                  "1:1 AI & Design tutorial (AI/ Figma / Canva)",
                  "UXUI Audit / Heuristic evaluation (Full Site)",
                  "AI vibe-coding website (CMS-less)",
                  "Etsy Shop review & design support",
                  "Other graphic design package",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                    <span className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full" />
                    </span>
                    <span className="text-white">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "chinese" && (
            <div className="space-y-4 text-gray-300 text-sm">
              <p>8+ 年 UXUI 设计经验；最近 3 年沉浸用 AI 工具。专精于 UXUI 用户体验设计、AI 辅助设计及自动化。</p>
              <p>
                上班主要做产品云平台、设备软件、商业网站 & 手机 APP 等框架设计，也有利用下班后的时间创造资用的设计工具跟贩售设计模板、图库等。专注创造设计师专用的被动收入。
              </p>
              <p>
                目前主要在个人站分享设计 x AI 知识，分享经验被动收入的心得，并提供专业网页设计、作品集建议、UXUI 资源 & 产品等。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

