import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    "Crafting modern web experiences with React.js & TypeScript",
    "Building scalable SaaS platforms and innovative solutions",
    "Specializing in full-stack development and cloud technologies",
    "Creating intuitive user interfaces with modern design principles",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
      style={{ 
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundColor: 'rgba(59, 130, 246, 0.25)'
      }}
    >
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Animated Background Elements with enhanced blue shades */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-blue-500 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <span className="font-[family-name:var(--font-playfair)]">Fathima Zafra</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Full-Stack Developer
          </span>
        </h1>

        {/* Rotating Subtitle */}
        <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {texts[currentText]}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button asChild size="lg" className="group">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">
              <Code2 className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          {["React.js", "TypeScript", "Node.js", "AWS", "MongoDB", "Next.js"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}