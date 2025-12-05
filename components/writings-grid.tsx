"use client"

import { useState } from "react"
import Link from "next/link"
import { WritingDetailModal } from "./writing-detail-modal"

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
      "负责国际消费性电子产品的UI/UX设计、产品包装设计及海外亚马逊视频剪辑等工作。",
    fullContent: `**工作内容:**

- 主导高迪数码消费性电子产品（运动相机、打猎相机、夜视仪、行车记录仪、安防监控等）的**人机交互（HMI）和用户体验（UX）设计**
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

export function WritingsGrid() {
  const [selectedWriting, setSelectedWriting] = useState<(typeof writings)[0] | null>(null)

  // 检查URL hash以自动打开对应的写作详情模态框
  useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = parseInt(hash.substring(1));
        const writing = writings.find(w => w.id === id);
        if (writing) {
          setSelectedWriting(writing);
        }
      }

      // 监听hash变化
      const onHashChange = () => {
        const newHash = window.location.hash;
        if (newHash) {
          const id = parseInt(newHash.substring(1));
          const writing = writings.find(w => w.id === id);
          if (writing) {
            setSelectedWriting(writing);
          }
        }
      };

      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }
  });

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {writings.map((writing) => (
          <div
            key={writing.id}
            id={writing.id.toString()}
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