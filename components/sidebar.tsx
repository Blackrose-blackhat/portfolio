"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    // { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform -translate-x-full md:translate-x-0 md:static md:inset-0">
        <div className="flex flex-col h-full animate-pulse">
          <div className="p-6 border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </aside>
    )
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-background/80 backdrop-blur-sm border shadow-lg hover:scale-105 transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-4 h-4">
          <Menu
            className={`absolute h-4 w-4 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          />
          <X
            className={`absolute h-4 w-4 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </div>
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 md:w-64 bg-background/95 md:bg-background backdrop-blur-sm md:backdrop-blur-none border-r border-border transform transition-all duration-300 ease-out md:translate-x-0 md:static md:inset-0 ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="animate-fade-in-up">
                <h1 className="text-lg font-semibold text-foreground">Musharaf Parwej</h1>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 hover:bg-accent hover:scale-105 transition-all duration-200"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-3 text-sm rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1 active:scale-95"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex justify-center space-x-2">
              {[
                { href: "https://github.com/Blackrose-blackhat", icon: Github },
                { href: "https://linkedin.com/in/mushraf-parwej", icon: Linkedin },
                { href: "mailto:musharafz2k3@gmail.com", icon: Mail },
                { href: "https://musharaf-parwej.vercel.app", icon: ExternalLink },
              ].map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 hover:bg-accent hover:scale-110 transition-all duration-200"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden animate-fade-in backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
