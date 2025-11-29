import { Leaf, Github, Mail } from "lucide-react"
import Link from "next/link"

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
            <Link
              href="mailto:oripovbobur@gmail.com"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              oripovbobur208@gmail.com
            </Link>
            <Link
              href="https://github.com/fenix1409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
