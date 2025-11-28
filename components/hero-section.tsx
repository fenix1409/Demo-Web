"use client"

import { ArrowDown, Sprout, Cloud, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex justify-center gap-4 mb-8">
          {[Sprout, Cloud, Droplets].map((Icon, index) => (
            <div
              key={index}
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Icon className="h-8 w-8 text-primary" />
            </div>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          AgroAI – AI-powered
          <span className="text-primary block mt-2">Smart Farming Assistant</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          AgroAI helps farmers improve crop yield with AI solutions such as disease detection, irrigation optimization,
          and weather-based recommendations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base px-8 hover:scale-105 transition-transform"
            onClick={() => scrollToSection("demo")}
          >
            Demo ko'rish
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent hover:scale-105 transition-transform"
            onClick={() => scrollToSection("team")}
          >
            Jamoa Bilan Tanishing
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("problem")}
          className="inline-flex items-center justify-center mt-16 p-3 rounded-full border border-border bg-background hover:bg-secondary hover:border-primary transition-all animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
