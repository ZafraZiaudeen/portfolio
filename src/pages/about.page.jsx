import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Code2, Database, Cloud, Wrench, Users } from "lucide-react"

export default function AboutPage() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "GoLang", level: 40},
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "Mongoose", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Database Design", level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: [
        { name: "AWS Services", level: 75 },
        { name: "Git & GitLab", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Jira", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "Payment & Integration",
      skills: [
        { name: "Stripe API", level: 85 },
        { name: "Third-party APIs", level: 90 },
        { name: "Webhooks", level: 80 },
        { name: "OAuth", level: 75 },
        { name: "JWT Authentication", level: 85 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Agile Methodologies", level: 85 },
        { name: "Continuous Learning", level: 95 },
      ],
    },
  ]

  const certifications = [
    {
      title: "Full-Stack Engineer - AI Professional Certification",
      issuer: "STEM Link",
      year: "2023",
      description: "Comprehensive 4-month certification covering MERN Stack, LLMs, RAG pipelines, and Vector Databases. Completed a Hotel Discovery and Booking Platform with AI features.",
      url: "https://stemlink.online/certificates/cmal0xlxw00032x7oe738b5kx",
      modules: [
        "React Essentials",
        "Advanced React Development",
        "Backend Basics and Foundations",
        "LLM Foundations and Integrations",
        "Advanced Backend Development and Deployment",
        "Project Implementation"
      ],
      duration: "4 Months"
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Fathima Zafra
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A passionate full-stack developer with a strong foundation in modern web technologies, currently
                pursuing a BSc in Software Engineering at ICBT Kandy while gaining valuable industry experience through
                internships and real-world projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="px-4 py-2">React.js Specialist</Badge>
                <Badge className="px-4 py-2">TypeScript Expert</Badge>
                <Badge className="px-4 py-2">Full-Stack Developer</Badge>
                <Badge className="px-4 py-2">Problem Solver</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <img
                  src="/professional-developer-portrait.jpg"
                  alt="Fathima Zafra"
                  className="relative rounded-full w-80 h-80 object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">My Journey</h2>
            <p className="text-xl text-muted-foreground">From curious student to professional developer</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              My journey into software engineering began with a fascination for how technology can solve real-world
              problems. As a student at ICBT Kandy pursuing my BSc in Software Engineering, I've had the opportunity to
              dive deep into various programming languages and frameworks, with a particular passion for modern web
              development.
            </p>

            <p>
              My internship at Seller Tower has been a transformative experience, allowing me to work on a real SaaS
              platform that helps retailers manage their businesses more effectively. This hands-on experience has
              taught me the importance of writing clean, maintainable code and collaborating effectively in a team
              environment.
            </p>

            <p>
              I'm particularly passionate about React.js and TypeScript, as they enable me to build scalable, type-safe
              applications with excellent user experiences. My project portfolio includes a hotel booking platform that
              demonstrates my ability to work with complex state management, payment integrations, and responsive design
              principles.
            </p>

            <p>
              When I'm not coding, I enjoy learning about new technologies and best practices in software development.
              I'm always excited to take on new challenges and continue growing as a developer, whether it's exploring
              new frameworks, improving my understanding of system architecture, or contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical capabilities and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Formal education and continuous learning through professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>BSc (Hons) in Software Engineering</CardTitle>
                    <CardDescription>ICBT Kandy, Sri Lanka</CardDescription>
                    <Badge variant="secondary" className="w-fit mt-2">
                      2022 - Present (Expected 2025)
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive program covering software development, algorithms, database systems, and modern web
                      technologies. Currently in final year with strong academic performance.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>HDCSE in Computing and Software Engineering</CardTitle>
                    <CardDescription>ICBT Kandy, Sri Lanka</CardDescription>
                    <Badge variant="secondary" className="w-fit mt-2">
                      Completed 2022
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Higher Diploma providing foundational knowledge in computing principles, programming, and software
                      development methodologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <Card 
                    key={idx} 
                    className="hover:shadow-md transition-shadow"
                  >
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:no-underline"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {cert.issuer} • {cert.year} {cert.duration && `• ${cert.duration}`}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                        {cert.modules && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {cert.modules.map((module, moduleIdx) => (
                              <Badge 
                                key={moduleIdx} 
                                variant="secondary" 
                                className="text-xs"
                              >
                                {module}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}