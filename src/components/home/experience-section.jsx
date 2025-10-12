// src/components/home/experience-section.jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building real-world solutions and gaining valuable industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Seller Tower</CardTitle>
                  <CardDescription className="text-base">Software Engineer Intern</CardDescription>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit">
                Nov 2024 - Present
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Currently developing a SaaS platform to assist retailers in managing products and business operations,
                with a focus on delivering intuitive and scalable solutions using React.js, TypeScript, and AWS
                services.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Key Achievements:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Built responsive frontend interfaces using React.js and TypeScript</li>
                  <li>Integrated with GoLang backend and DynamoDB</li>
                  <li>Implemented AWS S3 for image storage</li>
                  <li>Participated in Agile development with Jira</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React.js", "TypeScript", "GoLang", "DynamoDB", "AWS"].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

        
        </div>
      </div>
    </section>
  )
}