import { Navigation } from "@/components/navigation"
import { ShopGrid } from "@/components/shop-grid"

export const metadata = {
  title: "Shop | Design with Renxingcheng",
  description: "Digital products and tools to supercharge your workflow.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Shop</h1>
            <p className="text-gray-400 text-xl">Digital products and tools to supercharge your workflow.</p>
          </div>
          <ShopGrid />
        </div>
      </section>
    </main>
  )
}
