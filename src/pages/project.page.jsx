import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import { getAllProjects, getFeaturedProjects } from "@/lib/projects-data"

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const featuredProjects = getFeaturedProjects()
  const otherProjects = allProjects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work demonstrating expertise in full-stack development, modern web technologies, and
            creating impactful solutions for real-world problems.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 font-[family-name:var(--font-playfair)]">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative h-48 md:h-auto overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.status && (
                          <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm mb-3">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 5).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && <Badge variant="outline" className="text-xs">+{project.tags.length - 5}</Badge>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm">
                        <Link to={`/projects/${project.id}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 font-[family-name:var(--font-playfair)]">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button asChild size="sm">
                      <Link to={`/projects/${project.id}`}>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Details
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}