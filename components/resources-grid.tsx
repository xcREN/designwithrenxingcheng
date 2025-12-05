"use client"

import Link from "next/link"

const resources = [
  {
    id: 1,
    category: ["DESIGN", "PROTOTYPING"],
    title: "Figma",
    description: "行业领先的 UI/UX 设计与协作工具，用于人机界面（HMI）、SaaS平台及移动应用的视觉设计与原型制作。",
    link: "figma.com",
  },
  {
    id: 2,
    category: ["DEVELOPMENT", "CODE"],
    title: "VS Code",
    description: "用于前端样式、结构代码编写（如 HTML/CSS/JS）及 PHP 网站维护的轻量级代码编辑器。",
    link: "code.visualstudio.com",
    featured: true,
    detail:
      "使用 VS Code 进行样式及结构代码编写、维护 PHP 网站，并通过内置终端和丰富的扩展程序提升开发效率。",
  },
  {
    id: 3,
    category: ["DESIGN", "MEDIA"],
    title: "Adobe Creative Suite",
    description: "涵盖 Illustrator, Photoshop, Premiere Pro 等，用于品牌宣传物料、产品包装和海外电商视频剪辑。",
    link: "https://www.adobe.com/",
  },
  {
    id: 4,
    category: ["AI", "PROTOTYPING"],
    title: "V0",
    description: "利用 AI 快速生成 UI 组件和原型草图，加速设计概念验证。",
    link: "v0.app",
  },
  {
    id: 5,
    category: ["AI", "PROMPT ENGINEERING"],
    title: "Google AI Studio / ChatGPT / Few-shot Prompting",
    description: "用于大型语言模型（LLM）的测试、微调及少量样本提示（Few-shot Prompting）策略，以优化 AI 知识库的搭建与应用。",
    link: "https://aistudio.google.com/",
  },
  {
    id: 6,
    category: ["AI", "DEVELOPMENT"],
    title: "Cursor / GitHub Copilot",
    description: "AI 驱动的开发工具，用于代码补全、错误修复及重构，大幅提高编码和维护工作的效率。",
    link: "https://cursor.com/",
  },
  {
    id: 7,
    category: ["DEVELOPMENT", "HOSTING"],
    title: "Vercel",
    description: "用于前端应用的部署、托管和持续集成，确保项目的高速稳定运行。",
    link: "https://vercel.com/",
  },
  {
    id: 8,
    category: ["DOCUMENTATION", "TOOL"],
    title: "LaTeX",
    description: "专业的文档排版系统，用于编写和标准化产品用户手册、技术文档及学术资料，确保输出质量。",
    link: "https://www.latex-project.org/",
  },
  {
    id: 9,
    category: ["AI", "GRAPHICS"],
    title: "ComfyUI / Blender",
    description: "ComfyUI：高级生成式 AI 工作流界面；Blender：用于 3D 建模和渲染，结合 AI 技术生成素材。",
    link: "https://www.comfy.org/",
  },
  {
    id: 10,
    category: ["AI", "GENERATIVE DESIGN"],
    title: "Lovart",
    description: "AI 驱动的艺术与图像生成工具，用于快速创作概念图、设计素材或辅助品牌视觉内容。",
    link: "https://www.lovart.ai/",
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
