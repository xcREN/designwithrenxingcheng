"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ProductDetailModal } from "./product-detail-modal"

const products = [
  {
    id: 1,
    title: "设计师被动收入经验攻略包",
    description: "用你的设计力，创造属于自己的小金库。从0到0.5，打造被动收入的迷你小金库。",
    image: "/design-guide-cover.jpg",
    category: "STRATEGY",
    tag: "CASE STUDY",
    cta: "查看案例研究",
  },
  {
    id: 2,
    title: "桌面和移动线框图模板集",
    description: "适用于桌面和移动设备的高质量线框图模板集合，包含多种页面类型和组件，帮助你快速创建专业的UI原型。",
    image: "/wireframe-template.jpg",
    category: "DESIGN SYSTEM",
    tag: "TEMPLATES",
    cta: "探索设计系统",
  },
  {
    id: 3,
    title: "创意设计作品集展示",
    description: "专业的作品集设计方案，展示了多种布局和风格选择，适用于各类创意设计师展示他们的精选作品。",
    image: "/3.jpg",
    category: "PORTFOLIO",
    tag: "FEATURED",
    cta: "查看项目详情",
  },
  {
    id: 4,
    title: "UI组件设计套件",
    description: "完整的UI组件库，包含按钮、表单、导航等常用组件，适用于Web和移动应用设计，提高设计效率和一致性。",
    image: "/4.jpg",
    category: "UI COMPONENTS",
    tag: "DESIGN SYSTEM",
    cta: "检视组件库",
  },
  {
    id: 5,
    title: "色彩搭配与视觉设计指南",
    description: "精心策划的色彩搭配方案指南，包含多种主题色彩组合和视觉层次结构，帮助设计师创建和谐统一的用户界面。",
    image: "/5.jpg",
    category: "VISUAL DESIGN",
    tag: "GUIDE",
    cta: "深入了解",
  },
  {
    id: 6,
    title: "动态交互动效展示",
    description: "一套完整的交互动效设计方案，展示了用户界面中的过渡动画和微交效，提升用户体验和界面质感。",
    image: "/6.jpg",
    category: "ANIMATION",
    tag: "USER MANUAL",
    cta: "深入了解",
  },
  {
    id: 7,
    title: "动态交互动效展示",
    description: "一套完整的交互动效设计方案，展示了用户界面中的过渡动画和微交效，提升用户体验和界面质感。",
    image: "/smartsolo爆破振动云平台.jpg",
    category: "ANIMATION",
    tag: "VIDEO",
    cta: "观看演示",
    videos: ["/smartsolo爆破振动云平台.mp4"]
  },
  {
    id: 8,
    title: "动态交互动效展示",
    description: "一套完整的交互动效设计方案，展示了用户界面中的过渡动画和微交效，提升用户体验和界面质感。",
    image: "/地震监测云平台.jpg",
    category: "ANIMATION",
    tag: "VIDEO",
    cta: "观看演示",
    videos: ["/地震监测云平台v1.0（英文版快速指南）.mp4", "/地震监测云平台v1.0（中文版PPT）.mp4"]
  },
]

export function ShopGrid() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  // 检查URL hash以自动打开对应的产品详情模态框
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash) {
          const id = parseInt(hash.substring(1));
          const product = products.find(p => p.id === id);
          if (product) {
            setSelectedProduct(product);
          }
        }
      }
    };

    // 组件挂载时检查一次
    handleHashChange();

    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            id={product.id.toString()}
            onClick={() => setSelectedProduct(product)}
            className="bg-white text-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="relative h-64 bg-gray-200">
              {product.videos && product.videos.length > 0 ? (
                // 多个视频缩略图展示
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-bold">{product.videos.length}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {product.videos.length}个视频
                  </div>
                </div>
              ) : product.video ? (
                // 单个视频缩略图展示
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    视频
                  </div>
                </div>
              ) : (
                // 图片展示
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold tracking-widest text-gray-600">{product.category}</span>
                {product.tag && (
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-500 rounded-full text-white">
                    {product.tag}
                  </span>
                )}
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