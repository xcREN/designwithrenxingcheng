import { Navigation } from "@/components/navigation"
import { ResourcesGrid } from "@/components/resources-grid"

export const metadata = {
  title: "AI-Driven Workflow | Design with Renxingcheng",
  description: "Detail my proficiency with various design and development tools, with a dedicated focus on my AI-powered workflow.",
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">AI-Driven Workflow</h1>
            <p className="text-gray-400 text-xl">Detail my proficiency with various design and development tools, with a dedicated focus on my AI-powered workflow.</p>
          </div>
          <ResourcesGrid />
        </div>
      </section>
    </main>
  )
}
