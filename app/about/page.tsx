import { Navigation } from "@/components/navigation"
import { AboutProfile } from "@/components/about-profile"

export const metadata = {
  title: "About | Design with Renxingcheng",
  description: "Learn more about Renxingcheng and connect.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
        <AboutProfile />
      </section>
    </main>
  )
}
