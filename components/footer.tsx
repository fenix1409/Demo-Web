import { Leaf, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <span className="font-bold text-lg">AgroAI</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@agroai.uz"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@agroai.uz
            </a>
            <a
              href="https://github.com/fenix1409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} AgroAI. AI500 Hackathon Demo.
          </p>
        </div>
      </div>
    </footer>
  )
}
