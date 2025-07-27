"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "C++", "Java", "Go", "React.js", "Next.js", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "PouchDB", "Supabase"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Vercel", "Firebase", "Docker", "Linux"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Tailwind CSS", "Redux Toolkit", "Vercel AI SDK"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
