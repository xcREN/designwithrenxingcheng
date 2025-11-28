"use client"

import { useState } from "react"
import Image from "next/image"
import { ProductDetailModal } from "./product-detail-modal"

const products = [
  {
    id: 1,
    title: "设计师被动收入经验攻略包",
    description: "用你的设计力，创造属于自己的小金库。从0到0.5，打造被动收入的迷你小金库。",
    image: "/design-guide-cover.jpg",
    category: "DESIGN",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Desktop and Mobile Wireframe Interior PDF",
    description: "UX/UI 屏幕+手机线框图书笔记本内容 (6x9 吋 KDP 120页 Goodnotes/Notability 数位应用)",
    price: "$5",
    image: "/wireframe-template.jpg",
    category: "TOOLS",
    cta: "Purchase Now",
  },
]

export function ShopGrid() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="bg-white text-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="relative h-64 bg-gray-200">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold tracking-widest text-gray-600">{product.category}</span>
                {product.price && <span className="text-lg font-bold">{product.price}</span>}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{product.description}</p>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                {product.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  )
}
