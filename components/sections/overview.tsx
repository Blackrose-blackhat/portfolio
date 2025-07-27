"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Phone, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { useCallback } from "react"
import { DownloadResumeButton } from "../DownloadResume"

const RESUME_PATH = "/resume.pdf"
const RESUME_NAME = "Musharaf_Parwej_Resume.pdf"
export function Overview() {


  
  
  return (
    <section id="overview" className="animate-fade-in-up pt-4 sm:pt-8 lg:pt-12">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        {/* Profile Avatar */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/20 flex items-center justify-center animate-scale-in">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">MP</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-foreground animate-slide-in-left leading-tight">
          Musharaf Parwej
        </h1>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed animate-slide-in-left animation-delay-100 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
          Full-stack engineer building production-grade tools across Web3, AI, and cloud-native ecosystems.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 lg:gap-6 justify-center mb-6 sm:mb-8 lg:mb-10 animate-slide-in-left animation-delay-200 px-4 sm:px-0">
          <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
            <span>Ranchi, Jharkhand</span>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
            <a href="tel:9608405064" className="hover:text-foreground transition-colors">
              9608405064
            </a>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
            <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
            <a
              href="mailto:musharafz2k3@gmail.com"
              className="hover:text-foreground transition-colors break-all sm:break-normal"
            >
              musharafz2k3@gmail.com
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12 animate-slide-in-left animation-delay-300 px-4 sm:px-0">
          <DownloadResumeButton />

          <div className="flex gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-all duration-200 bg-transparent h-10 w-10 sm:h-11 sm:w-11"
              asChild
            >
              <a href="https://github.com/Blackrose-blackhat" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-all duration-200 bg-transparent h-10 w-10 sm:h-11 sm:w-11"
              asChild
            >
              <a href="https://linkedin.com/in/mushraf-parwej" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            
          </div>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none animate-fade-in-up animation-delay-400 px-4 sm:px-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl">Summary</h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          Experienced in architecting full-stack applications with TypeScript, Next.js, and Docker. Strong contributor
          to open-source projects and thrives in fast-moving remote teams. Passionate about creating innovative
          solutions that bridge the gap between complex backend systems and intuitive user experiences.
        </p>

        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 justify-center sm:justify-start">
          {["Web3", "AI/ML", "Cloud-Native", "Full-Stack", "Open Source"].map((tag, index) => (
            <Badge
              key={tag}
              variant="secondary"
              className="animate-scale-in hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
