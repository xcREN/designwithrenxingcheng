import { Navigation } from "@/components/navigation"
import { ResourcesGrid } from "@/components/resources-grid"

export const metadata = {
  title: "Resources | Design with Renxingcheng",
  description: "Curated tools and links I use daily.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Resources</h1>
            <p className="text-gray-400 text-xl">Curated tools and links I use daily.</p>
          </div>
          <ResourcesGrid />
        </div>
      </section>
    </main>
  )
}
