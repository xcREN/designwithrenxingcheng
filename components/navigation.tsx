"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, FileText, Gem, BookOpen, Search, Settings } from "lucide-react"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: FileText, href: "/writings", label: "Writings" },
  { icon: Gem, href: "/shop", label: "Shop" },
  { icon: BookOpen, href: "/resources", label: "Resources" },
  { icon: Settings, href: "/about", label: "About" },
]

export function Navigation() {
  const router = useRouter()

  const handleGetResources = () => {
    router.push("/shop")
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
        {navItems.slice(0, 5).map((item) => (
          <Link key={item.href} href={item.href}>
            <item.icon className="w-5 h-5 text-gray-900 hover:brightness-150 hover:text-gray-600 transition-all duration-200 cursor-pointer" />
          </Link>
        ))}
        <div className="w-px h-6 bg-gray-200" />
        <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:brightness-150 transition-all duration-200" />
        <button
          onClick={handleGetResources}
          className="ml-2 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Get resources
        </button>
      </div>
    </nav>
  )
}
