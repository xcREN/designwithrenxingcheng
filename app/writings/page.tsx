import { Navigation } from "@/components/navigation"
import { WritingsGrid } from "@/components/writings-grid"

export const metadata = {
  title: "Career Milestones | Design with Renxingcheng",
  description: "A curated showcase of my significant achievements and career milestones across various organizations and projects.",
}

export default function WritingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Career Milestones</h1>
            <p className="text-gray-400 text-xl">A curated showcase of my significant achievements and career milestones across various organizations and projects.</p>
          </div>
          <WritingsGrid />
        </div>
      </section>
    </main>
  )
}
