import { Navigation } from "@/components/navigation"
import { ShopGrid } from "@/components/shop-grid"

export const metadata = {
  title: "Full-Stack Design | Design with Renxingcheng",
  description: "Featuring full UI/UX case studies, finalized Web/App frontend projects, and creative endeavors in graphic design, 3D rendering, and video animation.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Full-Stack Design</h1>
            <p className="text-gray-400 text-xl">Featuring full UI/UX case studies, finalized Web/App frontend projects, and creative endeavors in graphic design, 3D rendering, and video animation.</p>
          </div>
          <ShopGrid />
        </div>
      </section>
    </main>
  )
}
