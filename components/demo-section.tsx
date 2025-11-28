"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, Loader2, Leaf, AlertTriangle, CheckCircle, Camera, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "./animate-on-scroll"

interface DiagnosisResult {
  disease: string
  confidence: number
  description: string
  treatment: string
  severity: "low" | "medium" | "high"
}

// Simulated AI diagnosis results
const mockDiagnoses: DiagnosisResult[] = [
  {
    disease: "Mildiy (Powdery Mildew)",
    confidence: 87,
    description:
      "O'simlik barglarida oq kukunsimon qoplam aniqlandi. Bu zamburug'li kasallik nam va iliq sharoitda tez tarqaladi.",
    treatment: "Fungitsid purkash, zararlangan barglarni olib tashlash, havo aylanishini yaxshilash tavsiya etiladi.",
    severity: "medium",
  },
  {
    disease: "Bakterial dog' (Bacterial Spot)",
    confidence: 92,
    description: "Barglarda qoramtir dog'lar aniqlandi. Bakterial infeksiya yomg'ir va sug'orish orqali tarqaladi.",
    treatment: "Mis asosidagi preparatlar, zararlangan o'simliklarni ajratish, sug'orish rejimini o'zgartirish kerak.",
    severity: "high",
  },
  {
    disease: "Sog'lom o'simlik",
    confidence: 95,
    description: "O'simlik sog'lom ko'rinadi. Kasallik belgilari aniqlanmadi.",
    treatment: "Muntazam parvarish va profilaktik choralarni davom ettiring.",
    severity: "low",
  },
]

export function DemoSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DiagnosisResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2500))

    // Random diagnosis for demo
    const randomResult = mockDiagnoses[Math.floor(Math.random() * mockDiagnoses.length)]
    setResult(randomResult)
    setIsAnalyzing(false)
  }

  const handleReset = () => {
    setSelectedImage(null)
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "text-primary bg-primary/10"
      case "medium":
        return "text-yellow-600 bg-yellow-500/10"
      case "high":
        return "text-destructive bg-destructive/10"
      default:
        return "text-muted-foreground bg-muted"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return CheckCircle
      case "medium":
        return AlertTriangle
      case "high":
        return AlertTriangle
      default:
        return Leaf
    }
  }

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Demo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">O'simlik kasalligini aniqlash</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O'simlik suratini yuklang va AI tizimimiz kasallikni aniqlashga yordam beradi
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <Card className="border-border overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              {!selectedImage ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 hover:bg-secondary/30 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Rasm yuklash</h3>
                  <p className="text-sm text-muted-foreground mb-4">O'simlik bargining suratini yuklang</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    <span>JPG, PNG, WEBP - 10MB gacha</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative rounded-xl overflow-hidden bg-secondary">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Uploaded plant"
                      className="w-full h-64 object-contain"
                    />
                    <button
                      onClick={handleReset}
                      className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {!result && (
                    <Button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full" size="lg">
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Tahlil qilinmoqda...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5 mr-2" />
                          AI bilan tahlil qilish
                        </>
                      )}
                    </Button>
                  )}

                  {result && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className={`flex items-center gap-3 p-4 rounded-lg ${getSeverityColor(result.severity)}`}>
                        {(() => {
                          const Icon = getSeverityIcon(result.severity)
                          return <Icon className="h-6 w-6 shrink-0" />
                        })()}
                        <div>
                          <h4 className="font-semibold">{result.disease}</h4>
                          <p className="text-sm opacity-80">Ishonchlilik: {result.confidence}%</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-foreground mb-1">Tavsif:</h5>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-foreground mb-1">Davolash:</h5>
                          <p className="text-sm text-muted-foreground">{result.treatment}</p>
                        </div>
                      </div>

                      <Button onClick={handleReset} variant="outline" className="w-full bg-transparent">
                        Yangi rasm yuklash
                      </Button>
                    </div>
                  )}
                </div>
              )}

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
            </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Bu demo versiya. Haqiqiy AI modeli MVP bosqichida integratsiya qilinadi.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
