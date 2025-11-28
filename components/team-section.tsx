"use client"

import { Github, ExternalLink, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "./animate-on-scroll"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "React Query",
  "AI Integration",
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bizning Jamoa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">AgroAI loyihasining asosiy ishtirokchilari</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="flex justify-center">
            <Card className="max-w-md w-full border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <User className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">Bobur Oripov</h3>
                <p className="text-primary font-medium mb-4">Founder & Frontend Developer</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                  >
                    <a
                      href="https://polite-lollipop-13b82b.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Portfolio
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                  >
                    <a
                      href="https://github.com/fenix1409"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
