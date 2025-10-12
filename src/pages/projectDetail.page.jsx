import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft, CheckCircle2, Layers, Zap, Shield } from "lucide-react"
import { getProjectById } from "@/lib/projects-data"

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
                  {project.title}
                </h1>
                {project.status && (
                  <Badge variant={project.status === "Live" ? "default" : "secondary"} className="text-sm">
                    {project.status}
                  </Badge>
                )}
              </div>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <Button asChild size="lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild size="lg" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* Challenge, Solution, Results */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.challenge}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      {project.architecture && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)]">System Architecture</h2>
            </div>
            <Card className="mb-8">
              <CardHeader>
                <CardDescription className="text-base">{project.architecture.description}</CardDescription>
              </CardHeader>
              {project.architecture.image && (
                <CardContent>
                  <div className="max-w-3xl mx-auto relative rounded-lg overflow-hidden shadow-lg bg-secondary/10 p-4">
                    <img
                      src={project.architecture.image}
                      alt="System Architecture Diagram"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CardContent>
              )}
            </Card>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architecture.components.map((component, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{component}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.techStack.map((stack, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-playfair)]">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}