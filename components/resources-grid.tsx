"use client"

import Link from "next/link"

const resources = [
  {
    id: 1,
    category: ["PRODUCTIVITY", "TOOL"],
    title: "Eagle",
    description: "The smartest way to collect, search, and organize your design files and inspiration.",
    link: "www.baidu.com",
  },
  {
    id: 2,
    category: ["DEV", "HOSTING"],
    title: "Zeabur",
    description: "The best deployment platform for Vibe Coding and n8n workflows. Simple and powerful.",
    link: "www.bing.com",
    featured: true,
    detail:
      "我的 n8n 和这个站点都用 Zeabur 部署，操作方便、速度稳定。使用后我基本不想回头，目前也有每月 5 USD 的 Credits 可用来跑自动化工作流。\n\nZeabur is a lightweight deployment platform ideal for Vibe Coding and n8n workflows — simple, reliable and cost-effective.",
  },
  {
    id: 3,
    category: ["DOMAIN", "WEB"],
    title: "Namecheap",
    description: "Reliable domain registrar. I purchase all my domains here.",
    link: "#",
  },
  {
    id: 4,
    category: ["AI", "ETSY"],
    title: "Etsy Listing Writer",
    description: "AI assistant helper optimized for writing engaging Etsy product listings.",
    link: "#",
  },
  {
    id: 5,
    category: ["AI", "STOCK"],
    title: "Stock Keywords AI",
    description: "Generate relevant keywords for stock photography to boost discoverability.",
    link: "#",
  },
  {
    id: 6,
    category: ["AI", "DESIGN"],
    title: "Seamless Pattern AI",
    description: "Generate seamless patterns for backgrounds, textures, and print on demand.",
    link: "#",
  },
]

export function ResourcesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {resources.map((resource) => {
        const href = resource.link && resource.link.match(/^https?:\/\//i) ? resource.link : `https://${resource.link}`

        return (
          <div
            key={resource.id}
            role="link"
            tabIndex={0}
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(href, "_blank", "noopener,noreferrer")
              }
            }}
            className="group cursor-pointer"
          >
            <div className={`relative overflow-hidden h-full rounded-2xl p-8 transition hover:shadow-lg group-hover:scale-[1.01] bg-white text-gray-900 border border-transparent`}>
              <div className="flex gap-2 mb-4">
                {resource.category.map((cat, idx) => (
                  <span key={idx} className={`text-xs font-semibold tracking-widest text-gray-600`}>
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className={`text-2xl font-serif font-bold mb-3 text-gray-900`}>{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`mt-6 inline-block font-semibold rounded-full px-5 py-3 transition bg-black text-white hover:bg-gray-900`}>
                View Resource →
              </a>

              {(resource.detail || resource.description) && (
                <div className="absolute inset-0 bg-gray-900/95 text-gray-100 p-8 rounded-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                  <div className="h-full overflow-auto">
                    <div className="mb-4 text-xs font-semibold tracking-widest text-gray-400">{resource.category.join(' · ')}</div>
                    <h4 className="text-2xl font-serif font-bold mb-3">{resource.title}</h4>
                    <div className="prose prose-sm text-gray-200 max-w-none whitespace-pre-wrap">{resource.detail ?? resource.description}</div>
                    <div className="mt-6">
                      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold rounded-full px-5 py-3 bg-white text-black">
                        View Resource →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
