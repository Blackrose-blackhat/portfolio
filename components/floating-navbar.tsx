"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, User, Briefcase, Code, Wrench, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export function FloatingNavbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "overview", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Wrench },
    // { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <>
      {/* Theme toggle button - top right */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-background/80 backdrop-blur-sm border shadow-lg hover:scale-105 transition-all duration-200"
      >
        <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Floating bottom navbar - properly centered */}
      <div className="fixed bottom-4 left-0  right-0 z-50 flex justify-center px-4">
        <nav className="animate-slide-in-up ">
          <div className="bg-background/90 shadow-xl backdrop-blur-md border rounded-full px-2 py-2  max-w-fit">
            <div className="flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-2 py-2 sm:px-3 sm:py-2 rounded-full transition-all duration-200 hover:scale-105 min-w-[40px] sm:min-w-[44px] h-10 sm:h-11 `}
                     
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="sr-only md:not-sr-only md:ml-2 text-xs font-medium hidden md:inline whitespace-nowrap">
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    )}
                  </Button>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
