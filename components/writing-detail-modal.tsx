"use client"

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
              <p>{writing.fullContent}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
