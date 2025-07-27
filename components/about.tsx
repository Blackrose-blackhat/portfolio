"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and contributing to open-source projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a full-stack engineer with a passion for building production-grade applications across Web3, AI, and
              cloud-native ecosystems. My experience spans from integrating smart contracts in DEX platforms to
              developing AI-powered developer tools.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in fast-moving remote teams and have a strong track record of contributing to open-source
              projects. My approach combines technical expertise with a focus on user experience and performance
              optimization.
            </p>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">B.Tech in Computer Science</h4>
                <p className="text-muted-foreground">C.V Raman Global University</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Oct 2021 – Apr 2025
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  CGPA: 8.0/10.0
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Coursework:</strong> Software Testing, Database, Data Structures and Algorithms, Web
                  Technologies
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
