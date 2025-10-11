// src/components/home/skills-section.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Cloud, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { name: "React.js & TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "MongoDB & Mongoose", level: 80 },
        { name: "DynamoDB", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Services", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git & GitLab", level: 90 },
        { name: "CI/CD", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ]

  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable web applications with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
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
  )
}