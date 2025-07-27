"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="animate-fade-in-up px-4 sm:px-0">
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl">Contact</h2>
        <p className="text-sm sm:text-base">Let's discuss opportunities or collaborate on interesting projects.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="animate-slide-in-left">
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a
                href="mailto:musharafz2k3@gmail.com"
                className="text-sm hover:text-primary transition-colors break-all sm:break-normal"
              >
                musharafz2k3@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <a href="tel:9608405064" className="text-sm hover:text-primary transition-colors">
                9608405064
              </a>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200">
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Ranchi, Jharkhand</span>
            </div>
          </div>
        </div>

        <Card className="animate-slide-in-right">
          <CardContent className="p-4 sm:p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  className="transition-all duration-200 focus:scale-[1.02] h-10 sm:h-11 text-sm sm:text-base"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="transition-all duration-200 focus:scale-[1.02] h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <Input
                placeholder="Subject"
                className="transition-all duration-200 focus:scale-[1.02] h-10 sm:h-11 text-sm sm:text-base"
              />
              <Textarea
                placeholder="Message"
                className="min-h-[100px] sm:min-h-[120px] transition-all duration-200 focus:scale-[1.02] resize-none text-sm sm:text-base"
              />
              <Button
                type="submit"
                className="w-full hover:scale-105 transition-all duration-200 active:scale-95 h-10 sm:h-11 text-sm sm:text-base"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
