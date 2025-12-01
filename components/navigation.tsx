"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Home, FileText, Gem, BookOpen, Search, Smile } from "lucide-react"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: FileText, href: "/writings", label: "Writings" },
  { icon: Gem, href: "/shop", label: "Shop" },
  { icon: BookOpen, href: "/resources", label: "Resources" },
  { icon: Smile, href: "/about", label: "About" },
]

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const handleGetResources = () => {
    router.push("/shop")
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
        {navItems.slice(0, 5).map((item) => {
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-2 rounded-full transition-all ${active ? "bg-gray-900 text-white" : "bg-transparent text-gray-900 hover:bg-gray-100"}`}
            >
              <item.icon className="w-5 h-5" />
            </Link>
          )
        })}
        <div className="w-px h-6 bg-gray-200" />
        <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:brightness-150 transition-all duration-200" />
        <button
          onClick={handleGetResources}
          className="ml-2 hidden sm:block bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Get resources
        </button>
      </div>
    </nav>
  )
}
