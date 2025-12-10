"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { X, FileText, Gem, BookOpen } from "lucide-react"

// 定义搜索结果类型
interface SearchResult {
  id: number | string
  title: string
  description: string
  category?: string[]
  type: "writing" | "product" | "resource"
  url: string
}

// 模拟数据 - 实际项目中应该从相应的数据源获取
const writings = [
  {
    id: 1,
    category: "EARTH SCIENCE SERVICES",
    date: "2021年7月至今",
    title: "SmartSolo: UI/UX 设计师",
    excerpt: "负责SmartSolo品牌旗下智能地球科学仪器产品的UI/UX设计、用户体验优化和设计规范维护。专注于提升产品易用性和界面美观度。",
    fullContent: `**工作内容:**

- 主导并深化SmartSolo品牌产品的**人机交互（HMI）与用户体验（UX）研究**，为产品提供前瞻性的设计策略。
- 驱动产品从概念、原型到最终上线的全流程设计支持，确保设计方案的高效落地与质量控制。
- 负责建立、迭代与维护**设计系统（Design System）与设计规范**，保障多产品线界面的统一性与开发效率。
- 覆盖多平台设计任务，包括**产品上位机、云平台、人机界面（机械臂示教器、手持器）、移动端APP与小程序，以及内部LMS/CRM系统**的界面设计与优化。
- 承担前端样式及结构代码（如CSS/HTML）的编写工作，并负责**PHP网站的日常修改与维护**。
- 利用**LaTeX**工具，编写和标准化专业级的**产品用户手册及技术文档**，提升文档规范性。
- 负责公司**品牌宣传物料**的策划与设计，包括宣传手册、大型展会海报、画册以及公司自媒体视觉内容。
- 牵头完成**企业AI知识库**的从零到一搭建，通过集成阿里云**OpenSearch**和**百炼**等技术，实现知识库在公众号或官方网站上的嵌入应用。`,
  },
  {
    id: 2,
    category: "CONSUMER ELECTRONICS",
    date: "2017年4月至2021年7月",
    title: "Gd Digital Ltd: UI/UX、短视频剪辑、产品包装设计师",
    excerpt:
      "负责国际消费性电子产品（运动相机、打猎相机、夜视仪、行车记录仪、安防监控等）的UI/UX设计、产品包装设计及海外亚马逊视频剪辑等工作。",
    fullContent: `**工作内容:**

- 主导高迪数码（Gd Digital Ltd）消费性电子产品（运动相机、打猎相机、夜视仪、行车记录仪、安防监控等）的**人机交互（HMI）和用户体验（UX）设计**
- 负责产品**全生命周期**的包装设计与品牌视觉规范的创建与落地，保障终端零售环节的品牌形象一致性
- 独立完成面向**海外亚马逊平台**的产品宣传、**产品摄影**与功能演示视频的策划、拍摄与**后期剪辑工作**，支持国际电商渠道营销
- 参与产品迭代过程，紧密配合研发中心，确保设计方案的技术可行性与量产标准`,
  },
  {
    id: 3,
    category: "SAAS PLATFORM",
    date: "2015年3月至2017年3月",
    title: "sinxinit: UI/UX 设计师",
    excerpt:
      "负责智慧农贸批发市场数字化领域的SaaS平台、物联网硬件及智慧农批电子秤应用一体化解决方案的UI/UX设计与体验优化。",
    fullContent: `**工作内容：**

- 主导**智慧农贸批发市场SaaS平台**的界面设计与用户体验优化，覆盖供应链管理、交易结算、数据可视化等核心业务模块。
- 负责**软硬件一体化解决方案**的人机界面（HMI）设计，包括智能溯源电子秤、分拣与收货智能秤等关键IoT设备的交互流程与视觉设计。
- 参与**人工智能（AI）功能**的用户界面设计，例如智能溯源电子秤的**自动识别菜品**流程，实现技术与商业效率的有效结合。
- 推进**多端应用**（包括供应商/商户App、线上平台、内部管理系统）的设计规范和跨平台体验一致性。
- 围绕“降本增效”核心愿景，优化业务流程，致力于通过设计提升平台30%以上的经营效率。`,
  },
]

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
    videos: ["https://res.cloudinary.com/dpljdltny/video/upload/v1765364356/smartsolo1.1_cfsm0w.mp4"]
  },
  {
    id: 8,
    title: "动态交互动效展示",
    description: "一套完整的交互动效设计方案，展示了用户界面中的过渡动画和微交效，提升用户体验和界面质感。",
    image: "/地震监测云平台.jpg",
    category: "ANIMATION",
    tag: "VIDEO",
    cta: "观看演示",
    videos: ["https://res.cloudinary.com/dpljdltny/video/upload/v1765364349/smartsolo2.1_skzz9a.mp4", "https://res.cloudinary.com/dpljdltny/video/upload/v1765364360/smartsolo2.2_a4fxf3.mp4"]
  },
]

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

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // 搜索函数
  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // 模拟搜索延迟
    setTimeout(() => {
      const termLower = term.toLowerCase()

      // 搜索 writings
      const writingResults: SearchResult[] = writings
        .filter(writing =>
          writing.title.toLowerCase().includes(termLower) ||
          writing.excerpt.toLowerCase().includes(termLower) ||
          writing.category?.toLowerCase().includes(termLower)
        )
        .map(writing => ({
          id: writing.id,
          title: writing.title,
          description: writing.excerpt,
          category: [writing.category],
          type: "writing",
          url: `/writings#${writing.id}`  // 添加锚点链接
        }))

      // 搜索 products
      const productResults: SearchResult[] = products
        .filter(product =>
          product.title.toLowerCase().includes(termLower) ||
          product.description.toLowerCase().includes(termLower) ||
          product.category.toLowerCase().includes(termLower)
        )
        .map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          category: [product.category],
          type: "product",
          url: `/shop#${product.id}`  // 添加锚点链接
        }))

      // 搜索 resources
      const resourceResults: SearchResult[] = resources
        .filter(resource =>
          resource.title.toLowerCase().includes(termLower) ||
          resource.description.toLowerCase().includes(termLower) ||
          resource.category.some(cat => cat.toLowerCase().includes(termLower))
        )
        .map(resource => {
          // 确保链接有正确的协议前缀
          const fullUrl = resource.link.match(/^https?:\/\//i)
            ? resource.link
            : `https://${resource.link}`;

          return {
            id: resource.id,
            title: resource.title,
            description: resource.description,
            category: resource.category,
            type: "resource",
            url: fullUrl
          }
        })

      // 合并结果
      const allResults = [...writingResults, ...productResults, ...resourceResults]

      setResults(allResults)
      setIsLoading(false)
    }, 300)
  }, [])

  // 监听搜索词变化
  useEffect(() => {
    performSearch(searchTerm)
  }, [searchTerm, performSearch])

  // 处理按键事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // 自动聚焦搜索框
      setTimeout(() => {
        const searchInput = document.getElementById("search-input")
        if (searchInput) {
          searchInput.focus()
        }
      }, 100)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // 处理结果点击
  const handleResultClick = (url: string, type: string) => {
    // 如果是资源类型，直接打开新窗口
    if (type === "resource") {
      window.open(url, "_blank", "noopener,noreferrer");
      onClose();
      return;
    }

    // 对于写作和产品，在当前窗口中导航
    router.push(url);
    onClose();
  }

  // 渲染类型图标
  const renderTypeIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "writing":
        return <FileText className="w-4 h-4" />
      case "product":
        return <Gem className="w-4 h-4" />
      case "resource":
        return <BookOpen className="w-4 h-4" />
      default:
        return null
    }
  }

  // 渲染类型标签
  const renderTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "writing":
        return "Writing"
      case "product":
        return "Product"
      case "resource":
        return "Resource"
      default:
        return ""
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* 背景遮罩 */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 模态框 */}
      <div className="relative w-full max-w-2xl bg-background rounded-2xl shadow-xl z-10 overflow-hidden border border-border">
        {/* 头部搜索框 */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <input
              id="search-input"
              type="text"
              placeholder="Search writings, products, and resources..."
              className="w-full px-4 py-3 bg-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 结果区域 */}
        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">
              Searching...
            </div>
          ) : searchTerm.trim() === "" ? (
            <div className="p-8 text-center text-muted-foreground">
              Type something to search writings, products, and resources
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No results found for "{searchTerm}"
            </div>
          ) : (
            <div className="divide-y divide-border">
              {results.map((result) => (
                <div
                  key={`${result.type}-${result.id}`}
                  className="p-4 hover:bg-accent cursor-pointer transition-colors"
                  onClick={() => handleResultClick(result.url, result.type)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-muted-foreground">
                      {renderTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full text-foreground">
                          {renderTypeLabel(result.type)}
                        </span>
                        {result.category && result.category.length > 0 && (
                          <span className="text-xs text-muted-foreground">
                            {result.category.join(", ")}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground truncate">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 底部信息 */}
        <div className="p-3 bg-muted border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Press ESC to close
          </p>
        </div>
      </div>
    </div>
  )
}