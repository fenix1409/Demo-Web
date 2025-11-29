"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const roadmapItems = [
  {
    title: "Prototip",
    description: "Asosiy UI va tuzilmani yaratish",
    status: "completed",
    progress: 100,
  },
  {
    title: "Kasallik aniqlash modeli",
    description: "AI vision modelini integratsiya qilish",
    status: "in-progress",
    progress: 50,
  },
  {
    title: "Weather API ulash",
    description: "Open-Meteo API integratsiyasi",
    status: "upcoming",
    progress: 0,
  },
  {
    title: "MVP Release",
    description: "Birinchi tayyor versiyani chiqarish",
    status: "upcoming",
    progress: 0,
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Yo'l xaritasi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">AgroAI loyihasining rivojlanish bosqichlari</p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {roadmapItems.map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 150}>
                <div className="relative md:grid md:grid-cols-2 md:gap-8 md:py-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="h-8 w-8 text-primary bg-background rounded-full" />
                    ) : item.status === "in-progress" ? (
                      <div className="h-8 w-8 rounded-full border-4 border-primary bg-background flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                      </div>
                    ) : (
                      <Circle className="h-8 w-8 text-muted-foreground bg-background rounded-full" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div
                      className={`p-6 rounded-xl border transition-all hover:shadow-md ${
                        item.status === "completed"
                          ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                          : item.status === "in-progress"
                            ? "bg-secondary border-primary/50 shadow-md hover:shadow-lg"
                            : "bg-background border-border hover:border-muted-foreground/50"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 md:hidden">
                        {item.status === "completed" ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : item.status === "in-progress" ? (
                          <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                          </div>
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span
                          className={`text-xs font-medium ${
                            item.status === "completed"
                              ? "text-primary"
                              : item.status === "in-progress"
                                ? "text-primary"
                                : "text-muted-foreground"
                          }`}
                        >
                          {item.status === "completed"
                            ? "Tugallandi"
                            : item.status === "in-progress"
                              ? "Jarayonda"
                              : "Rejalashtirilgan"}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                      {/* Progress bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 inline-block">
                        {item.progress}% tugallandi
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
