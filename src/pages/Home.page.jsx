import { HeroSection } from "@/components/home/hero-section"
import { SkillsSection } from "@/components/home/skills-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { StatsSection } from "@/components/home/stats-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <StatsSection />
    </>
  )
}