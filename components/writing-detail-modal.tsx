"use client"

import Markdown from 'react-markdown'

interface WritingDetailModalProps {
  writing: {
    id: number
    category: string
    date: string
    title: string
    excerpt: string
    fullContent?: string
  }
  onClose: () => void
}

export function WritingDetailModal({ writing, onClose }: WritingDetailModalProps) {
  // 将fullContent处理成数组，按段落分割
  const formatContent = (content: string) => {
    if (!content) return []
    // 按换行符分割内容
    return content.split('\n').filter(line => line.trim() !== '')
  }

  const contentSections = writing.fullContent ? formatContent(writing.fullContent) : []

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div
        className="bg-gray-950 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="float-right text-gray-400 hover:text-white transition">
          ✕
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white text-gray-900 text-xs font-semibold rounded-full">
              {writing.category}
            </span>
            <span className="text-gray-500">{writing.date}</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-4">{writing.title}</h2>
          <p className="text-gray-400 italic">{writing.excerpt}</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {writing.fullContent && (
            <div className="text-gray-300 leading-relaxed space-y-4">
              {contentSections.map((section, index) => (
                <Markdown 
                  key={index} 
                  components={{
                    strong: ({node, ...props}) => <span className="font-bold text-white" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-1" {...props} />,
                    li: ({node, ...props}) => <li className="pl-2" {...props} />
                  }}
                >
                  {section.trim()}
                </Markdown>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}