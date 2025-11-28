import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { TeamSection } from "@/components/team-section"
import { WhyUsSection } from "@/components/why-us-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { DemoSection } from "@/components/demo-section"
import { DemoInfoSection } from "@/components/demo-info-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <TeamSection />
      <WhyUsSection />
      <RoadmapSection />
      <TechStackSection />
      <DemoSection />
      <DemoInfoSection />
      <Footer />
    </main>
  )
}
