"use client"

import { Code2, Database, Brain, Cloud, Palette, Server } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const techStack = [
  { name: "Next.js / React", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next API Routes", icon: Server },
  { name: "Mongoose + Express", icon: Database },
]

const aiTools = [
  { name: "GPT-4o / GPT-5 Vision", icon: Brain, description: "Plant disease detection" },
  { name: "Weather API", icon: Cloud, description: "Open-Meteo" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Texnik yechim</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AgroAI da foydalaniladigan texnologiyalar va vositalar
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Tech Stack */}
          <AnimateOnScroll delay={100}>
            <div className="bg-background rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Tech Stack
              </h3>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary hover:scale-[1.02] transition-all cursor-default group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <tech.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* AI Tools */}
          <AnimateOnScroll delay={200}>
            <div className="bg-background rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Tools
              </h3>
              <div className="space-y-4">
                {aiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 hover:scale-[1.02] transition-all cursor-default group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground block">{tool.name}</span>
                      <span className="text-sm text-muted-foreground">{tool.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
