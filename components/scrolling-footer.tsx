"use client"

export function ScrollingFooter() {
  const tags = [
    "UXUI",
    "TEMPLATE",
    "DESIGN",
    "AI",
    "UXUI",
    "TEMPLATE",
    "DESIGN",
    "AI",
    "UXUI",
    "TEMPLATE",
    "DESIGN",
    "AI",
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 overflow-hidden bg-background border-t border-zinc-800">
      <div className="relative w-full py-3 flex items-center whitespace-nowrap">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .scroll-container {
            animation: scroll 30s linear infinite;
          }
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="scroll-container flex gap-8">
          {/* First set of tags */}
          {tags.map((tag, index) => (
            <span key={`tag-1-${index}`} className="text-xs text-zinc-600 font-medium tracking-wider">
              {tag}
              <span className="mx-4">·</span>
            </span>
          ))}

          {/* Duplicate set for seamless loop */}
          {tags.map((tag, index) => (
            <span key={`tag-2-${index}`} className="text-xs text-zinc-600 font-medium tracking-wider">
              {tag}
              <span className="mx-4">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
