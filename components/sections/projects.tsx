"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Neurobase",
      description: "AI-powered developer tool to query PostgreSQL and MongoDB in natural language.",
      details:
        "Built modular agent-based architecture with Vercel AI SDK. Supports SQL and NoSQL with query traceability and error feedback.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
      github: "https://github.com/Blackrose-blackhat/Neurobase",
      live: "https://neurobase-gpt.vercel.app/",
    },
    {
      title: "XcuseHub",
      description: "AI-powered platform that roasts and reviews developer portfolios with brutal honesty.",
      details:
        "Built a full-stack app where devs upload resumes and GitHub profiles for sarcastic, AI-generated feedback. Used Go for backend services including file parsing, API routing, and LLM interaction.",
      technologies: ["Go", "Next.js", "TypeScript", "Gemini API", "ShadcnUI"],
     github: "https://github.com/Blackrose-blackhat/404SkillNotFound-frontend",
      live: "https://xcuseshub.vercel.app/",
    },
    {
      title: "TeamUp",
      description: "Platform where users post gigs and apply based on matching skillsets.",
      details: "Developed a matching system to recommend gigs by comparing user skill profiles.",
      technologies: ["Next.js", "MongoDB", "Clerk", "Nodemailer", "ShadcnUI"],
      github: "https://github.com/Blackrose-blackhat/TeamUP2",
      live: "https://teamuphacks.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="animate-fade-in-up px-4 sm:px-0">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl">Projects</h2>
        <p className="text-sm sm:text-base">
          A selection of projects that showcase my technical skills and problem-solving approach.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 justify-start sm:justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-all duration-200 bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    asChild
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="ml-1 sm:ml-2">Code</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-all duration-200 bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    asChild
                  >
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="ml-1 sm:ml-2">Live</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{project.details}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs hover:bg-accent transition-colors duration-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
