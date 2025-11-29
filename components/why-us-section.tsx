"use client"

import { Lightbulb, Zap, Users, TrendingUp, Target } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const reasons = [
  {
    icon: Lightbulb,
    title: "Real problems + real AI solutions",
    description: "Haqiqiy dehqonchilik muammolariga amaliy sun'iy intellekt yechimlari",
  },
  {
    icon: Zap,
    title: "Frontend tajriba",
    description: "Dashboards, AI integratsiya bo'yicha katta tajriba",
  },
  {
    icon: TrendingUp,
    title: "Tez prototip",
    description: "Mahsulotni tez prototip qilish qobiliyati",
  },
  {
    icon: Users,
    title: "Ijtimoiy foyda",
    description: "Dehqonlar uchun katta ijtimoiy foyda keltiradi",
  },
  {
    icon: Target,
    title: "Kam raqobat",
    description: "Bozorda raqobatchilar deyarli yo'qligi",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nega aynan men?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">AgroAI ni tanlashingiz uchun asosiy sabablar</p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <div className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all">
                    <reason.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
