"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Database, Brain, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Neurobase",
      description: "AI-powered developer tool to query PostgreSQL and MongoDB in natural language.",
      longDescription:
        "Built modular agent-based architecture with Vercel AI SDK. Supports SQL and NoSQL with query traceability and error feedback.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "XcuseHub",
      description: "AI-powered platform that roasts and reviews developer portfolios with brutal honesty.",
      longDescription:
        "Built a full-stack app where devs upload resumes and GitHub profiles for sarcastic, AI-generated feedback. Used Go for backend services including file parsing, API routing, and LLM interaction.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Go", "Next.js", "TypeScript", "Gemini API", "ShadcnUI"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "TeamUp",
      description: "Platform where users post gigs and apply based on matching skillsets.",
      longDescription: "Developed a matching system to recommend gigs by comparing user skill profiles.",
      icon: <Users className="h-6 w-6" />,
      technologies: ["Next.js", "MongoDB", "Clerk", "Nodemailer", "ShadcnUI"],
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work showcasing different technologies and approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                project.featured ? "ring-2 ring-blue-500/20" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">{project.icon}</div>
                  {project.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
