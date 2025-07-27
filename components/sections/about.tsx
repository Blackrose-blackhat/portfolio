"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="mb-16">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>About</h2>
        <p>
          I'm a passionate full-stack developer with a strong foundation in computer science and hands-on experience in
          building scalable applications. My journey spans from traditional web development to cutting-edge technologies
          like blockchain integration and AI-powered tools.
        </p>

        <p>
          I enjoy tackling complex problems and turning them into elegant, user-friendly solutions. Whether it's
          optimizing database queries, integrating smart contracts, or building intuitive user interfaces, I approach
          each challenge with curiosity and attention to detail.
        </p>
      </div>

      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Education</h3>
              <p className="text-sm font-medium">B.Tech in Computer Science</p>
              <p className="text-sm text-muted-foreground">C.V Raman Global University</p>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                Oct 2021 – Apr 2025 • CGPA: 8.0/10.0
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Coursework:</strong> Software Testing, Database Systems, Data Structures & Algorithms, Web
                Technologies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
