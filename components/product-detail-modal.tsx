"use client"

import Image from "next/image"

interface ProductDetailModalProps {
  product: {
    id: number
    title: string
    description: string
    image: string
    category: string
    price?: string
  }
  onClose: () => void
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-950 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-800">
          <h2 className="text-2xl font-serif font-bold">{product.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              给 UX/UI、设计新手、還有設計工作坊師傅打造的桌面+手機線框圖書記本 ❤️
            </h3>
            <p className="text-gray-300 leading-relaxed">
              專為 UX/UI 設計師、初學者、以及設計工作坊師傅打造的桌面+手機線框圖書記本 (UX/UI Wireframe Notebook
              Templates (Desktop & Mobile))。無論您想在 iPad 上快速選想、練習繪圖、或是作為 Amazon KDP
              低內容書的內容，這套 6x9 吋的 PDF 都能完美滿足您的需求
            </p>
          </div>

          <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get it now
          </button>
        </div>
      </div>
    </div>
  )
}
