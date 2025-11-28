"use client"

import { Bug, Calendar, Wallet, UserX, CloudSun, Scan, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "./animate-on-scroll"

const problems = [
  {
    icon: Bug,
    title: "Kasalliklarni kech aniqlash",
    description: "O'simlik kasalliklari kech aniqlanib, hosil yo'qotiladi",
  },
  {
    icon: Calendar,
    title: "Noto'g'ri ekish vaqti",
    description: "Qaysi ekinni qachon ekishni bilmaslik",
  },
  {
    icon: Wallet,
    title: "Xarajat muammolari",
    description: "Xarajatlarni noto'g'ri rejalashtirish",
  },
  {
    icon: UserX,
    title: "Mutaxassis yetishmasligi",
    description: "Agronom maslahatlariga yetishmaslik",
  },
]

const solutions = [
  {
    icon: CloudSun,
    title: "AI Weather Optimizer",
    description: "Ob-havo asosida ekish va sug'orish tavsiyasi",
  },
  {
    icon: Scan,
    title: "AI Plant Doctor",
    description: "O'simlik kasalliklarini suratdan aniqlaydi",
  },
  {
    icon: BarChart3,
    title: "Productivity Dashboard",
    description: "Hosil prognozi va real-time monitoring",
  },
]

export function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Real Muammo va AI Yechim</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fermerlar duch keladigan asosiy muammolar va ularning sun'iy intellekt yechimlari
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems */}
          <AnimateOnScroll delay={100}>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive text-sm font-bold">!</span>
                </span>
                Muammolar
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-destructive/30 hover:shadow-md transition-all cursor-default group"
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded-lg shrink-0 group-hover:bg-destructive/20 transition-colors">
                        <problem.icon className="h-5 w-5 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{problem.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Solutions */}
          <AnimateOnScroll delay={200}>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">✓</span>
                </span>
                AI Yechimlar
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className="border-primary/20 bg-primary/5 hover:bg-primary/10 hover:shadow-md transition-all cursor-default group"
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg shrink-0 group-hover:bg-primary/30 transition-colors">
                        <solution.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{solution.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{solution.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
