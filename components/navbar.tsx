"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Muammo", href: "#problem" },
  { name: "Jamoa", href: "#team" },
  { name: "Nega Biz", href: "#why-us" },
  { name: "Yo'l Xaritasi", href: "#roadmap" },
  { name: "Texnologiya", href: "#tech" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Track active section
      const sections = navLinks.map((link) => link.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId)
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">AgroAI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <Button
            className="hidden md:flex"
            size="sm"
            onClick={() => {
              const demoSection = document.getElementById("demo")
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            }}
          >
            Demo
          </Button>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="w-fit">
                Demo
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
