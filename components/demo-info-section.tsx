"use client"

import { Info, Unlock } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function DemoInfoSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Info className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Demo Haqida</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4">Bu sayt AgroAI 1-bosqich demo taqdimotidir.</p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Unlock className="h-5 w-5" />
              <span>Hamma uchun ochiq — login talab qilinmaydi</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
