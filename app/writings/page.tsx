import { Navigation } from "@/components/navigation"
import { WritingsGrid } from "@/components/writings-grid"

export const metadata = {
  title: "Writings | Design with Renxingcheng",
  description: "Thoughts on design, passive income, and technology.",
}

export default function WritingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Writings</h1>
            <p className="text-gray-400 text-xl">Thoughts on design, passive income, and technology.</p>
          </div>
          <WritingsGrid />
        </div>
      </section>
    </main>
  )
}
