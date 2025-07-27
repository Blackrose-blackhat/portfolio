"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Quranium",
      location: "Remote",
      period: "Apr 2025 – Present",
      current: true,
      achievements: [
        "Integrated 4+ smart contracts into a live DEX product, enabling secure swaps and liquidity pooling",
        "Collaborated across backend/frontend teams to ensure seamless API integration and app performance",
        "Optimized front-end data fetches, reducing latency by 30%",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company: "Claw Enterprises",
      location: "Remote",
      period: "July 2024 – Sep 2024",
      current: false,
      achievements: [
        "Led the redesign of an AI-integrated courtroom platform using React.js and TailwindCSS",
        "Implemented responsive UI and smart UX features across all major screen sizes",
        "Integrated Redux Toolkit to manage complex state and data synchronization",
      ],
    },
  ]

  return (
    <section id="experience" className="mb-16">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Experience</h2>
      </div>

      <div className="space-y-8 mt-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-muted pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                {exp.current && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Current
                  </Badge>
                )}
              </div>

              <p className="font-medium text-primary mb-2">{exp.company}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {exp.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {exp.period}
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm flex items-start">
                  <span className="text-muted-foreground mr-2 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
