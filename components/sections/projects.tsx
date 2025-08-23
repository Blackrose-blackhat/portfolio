"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import projects from "@/data/projects.json"

export function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  const project = openProject ? projects.find((p) => p.slug === openProject) : null

  return (
    <section id="projects" className="animate-fade-in-up w-full px-4 sm:px-6 lg:px-8">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl">Projects</h2>
        <p className="text-sm sm:text-base">
          A selection of projects that showcase my technical skills and problem-solving approach.
        </p>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((proj) => (
            <Card
              key={proj.slug}
              className="w-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl font-semibold mb-2">{proj.title}</CardTitle>
                <p className="text-muted-foreground mb-3 text-sm sm:text-base leading-relaxed">
                  {proj.description}
                </p>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setOpenProject(proj.slug)}
                    >
                      Case Study
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-muted-foreground text-background text-sm">
                    View full case study for {proj.title}
                  </TooltipContent>
                </Tooltip>
              </CardHeader>

              <CardContent className="pt-0 flex flex-wrap gap-2">
                {proj.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:bg-accent transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog */}
        {project && (
          <Dialog open={!!project} onOpenChange={() => setOpenProject(null)}>
            <DialogContent className="w-full sm:max-w-3xl p-6 sm:p-8 sm:rounded-2xl bg-background">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-bold">{project.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4 w-full">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Role & Timeline</h3>
                  <p><span className="font-medium">Role:</span> {project.role}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-medium">Timeline:</span> {project.timeline}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Problem</h3>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Impact</h3>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex gap-4 mt-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-muted-foreground rounded-xl hover:bg-accent transition-colors"
                      >
                        GitHub
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="c text-background text-sm">
                      View source code on GitHub
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-muted-foreground rounded-xl hover:bg-accent transition-colors"
                      >
                        Live Demo
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-muted text-background text-sm">
                      Check out the live project
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <DialogClose asChild />
            </DialogContent>
          </Dialog>
        )}
      </TooltipProvider>
    </section>
  )
}
