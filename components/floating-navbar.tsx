"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Briefcase, Code, Wrench } from "lucide-react";

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "overview", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Wrench },
    // { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Floating bottom navbar - properly centered */}
      <div className="fixed bottom-4 left-0  right-0 z-50 flex justify-center px-4">
        <nav>
          <div className="bg-background/90 backdrop-blur-md border rounded-full px-2 py-2 max-w-fit">
            <div className="flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-2 py-2 sm:px-3 sm:py-2 rounded-full transition-colors duration-150 min-w-[40px] sm:min-w-[44px] h-10 sm:h-11"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="sr-only md:not-sr-only md:ml-2 text-xs font-medium hidden md:inline whitespace-nowrap">
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
