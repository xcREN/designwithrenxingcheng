"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"

interface ProductDetailModalProps {
  product: {
    id: number
    title: string
    description: string
    image: string
    category: string
    tag?: string
    cta?: string
    video?: string
    videos?: string[]
  }
  onClose: () => void
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const videoRefs = useRef<HTMLVideoElement[]>([])

  // 自动播放第一个视频（如果有的话）
  useEffect(() => {
    if (product.videos && product.videos.length > 0 && videoRefs.current[0]) {
      videoRefs.current[0].load()
    } else if (product.video && videoRefs.current[0]) {
      videoRefs.current[0].load()
    }
  }, [product.video, product.videos])

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-950 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-serif font-bold">{product.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-semibold tracking-widest text-gray-400">{product.category}</span>
              {product.tag && (
                <span className="text-xs font-semibold px-2 py-1 bg-blue-500 rounded-full text-white">
                  {product.tag}
                </span>
              )}
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden">
            {product.videos && product.videos.length > 0 ? (
              // 多个视频展示
              <div className="space-y-4">
                {product.videos.map((video, index) => (
                  <div key={index} style={{ marginBottom: '0', backgroundColor: 'inherit' }}>
                    <video
                      ref={(el) => { el && (videoRefs.current[index] = el); }}
                      controls
                      autoPlay={index === 0}
                      loop
                      muted
                      playsInline
                      className="w-full h-auto max-h-[60vh]"
                    >
                      <source src={video} type="video/mp4" />
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                ))}
              </div>
            ) : product.video ? (
              // 单个视频展示
              <div style={{ marginBottom: '0', backgroundColor: 'inherit' }}>
                <video
                  ref={(el) => { el && (videoRefs.current[0] = el); }}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[60vh]"
                >
                  <source src={product.video} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            ) : (
              // 图片展示
              <div className="aspect-auto w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            {product.cta || "View Details"}
          </button>
        </div>
      </div>
    </div>
  )
}