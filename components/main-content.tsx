"use client"

import { Overview } from "@/components/sections/overview"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

export function MainContent() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pb-28 sm:pb-32">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          <Overview />
          <About />
          <Experience />
          <Projects />
          <Skills />
          {/* <Contact /> */}
        </div>
      </div>
    </main>
  )
}
