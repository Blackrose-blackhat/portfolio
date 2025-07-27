"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Wrench, Smartphone, Server, Palette, GitBranch } from "lucide-react"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      skills: [
        { name: "React.js", level: "Expert", years: "3+" },
        { name: "Next.js", level: "Expert", years: "2+" },
        { name: "TypeScript", level: "Advanced", years: "2+" },
        { name: "JavaScript", level: "Expert", years: "4+" },
        { name: "HTML/CSS", level: "Expert", years: "4+" },
        { name: "Tailwind CSS", level: "Advanced", years: "2+" },
        { name: "Redux Toolkit", level: "Intermediate", years: "1+" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      skills: [
        { name: "Node.js", level: "Advanced", years: "3+" },
        { name: "Express.js", level: "Advanced", years: "2+" },
        { name: "Go", level: "Intermediate", years: "1+" },
        { name: "Python", level: "Intermediate", years: "2+" },
        { name: "REST APIs", level: "Advanced", years: "3+" },
        { name: "GraphQL", level: "Beginner", years: "6m" },
      ],
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      skills: [
        { name: "PostgreSQL", level: "Advanced", years: "2+" },
        { name: "MongoDB", level: "Advanced", years: "3+" },
        { name: "PouchDB", level: "Intermediate", years: "1+" },
        { name: "Supabase", level: "Intermediate", years: "1+" },
        { name: "Redis", level: "Beginner", years: "6m" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      skills: [
        { name: "AWS", level: "Intermediate", years: "1+" },
        { name: "Vercel", level: "Advanced", years: "2+" },
        { name: "Firebase", level: "Intermediate", years: "1+" },
        { name: "Docker", level: "Intermediate", years: "1+" },
        { name: "Linux", level: "Intermediate", years: "2+" },
        { name: "CI/CD", level: "Beginner", years: "6m" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      icon: <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      skills: [
        { name: "Git", level: "Advanced", years: "3+" },
        { name: "GitHub", level: "Advanced", years: "3+" },
        { name: "VS Code", level: "Expert", years: "4+" },
        { name: "Figma", level: "Intermediate", years: "1+" },
        { name: "Postman", level: "Advanced", years: "2+" },
        { name: "Vercel AI SDK", level: "Intermediate", years: "6m" },
      ],
    },
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      skills: [
        { name: "JavaScript", level: "Expert", years: "4+" },
        { name: "TypeScript", level: "Advanced", years: "2+" },
        { name: "Go", level: "Intermediate", years: "1+" },
        { name: "Python", level: "Intermediate", years: "2+" },
        { name: "C++", level: "Intermediate", years: "2+" },
        { name: "Java", level: "Beginner", years: "1+" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Beginner":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const filteredCategories =
    activeCategory === "all" ? skillCategories : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="animate-fade-in-up px-4 sm:px-0">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl">Skills & Technologies</h2>
        <p className="text-sm sm:text-base">Click on a category to explore my technical expertise in detail.</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 animate-slide-in-up animation-delay-200">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("all")}
          className="hover:scale-105 transition-all duration-200 text-xs sm:text-sm h-8 sm:h-9"
        >
          <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          <span className="hidden xs:inline">All Skills</span>
          <span className="xs:hidden">All</span>
        </Button>
        {skillCategories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className="hover:scale-105 transition-all duration-200 text-xs sm:text-sm h-8 sm:h-9"
          >
            {category.icon}
            <span className="ml-1 sm:ml-2 hidden xs:inline">{category.title}</span>
            <span className="ml-1 xs:hidden">{category.title.split(" ")[0]}</span>
          </Button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="space-y-4 sm:space-y-6">
        {filteredCategories.map((category, index) => (
          <Card
            key={category.id}
            className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${category.color}`}>{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold flex-1">{category.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {category.skills.length} skills
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-200 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${400 + skillIndex * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-xs sm:text-sm truncate pr-2">{skill.name}</span>
                      <Badge variant="secondary" className={`${getLevelColor(skill.level)} text-xs flex-shrink-0`}>
                        {skill.level}
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <GitBranch className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span>{skill.years} experience</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      {activeCategory === "all" && (
        <Card className="mt-6 sm:mt-8 animate-fade-in-up animation-delay-500">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Skills Overview</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="p-3 rounded-lg bg-muted">
                <div className="text-xl sm:text-2xl font-bold text-primary">25+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="text-xl sm:text-2xl font-bold text-primary">4+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="text-xl sm:text-2xl font-bold text-primary">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}
