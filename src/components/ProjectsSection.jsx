import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Snapline"
          description="A tool that helps AI coding agents keep generated UI consistent with a design system."
          tech="TypeScript · Compiler API"
          link="https://github.com/gael55x/Snapline"
        />
        <ProjectCard
          year="2026"
          title="Grape"
          description="A context tool that helps coding agents reuse what they already know about a repository."
          tech="TypeScript · MCP · CLI"
          link="https://github.com/gael55x/Grape"
        />
        <ProjectCard
          year="2026"
          title="CSIT340 Lab 3 Portfolio"
          description="This page, rebuilt from the provided HTML using React components."
          tech="React · HTML"
          link="https://github.com/gailleamolong/CSIT340-Lab3-Amolong"
        />
        <ProjectCard
          year="2024"
          title="Ren"
          description="A mobile app with motivational messages tailored to how a user feels."
          tech="React Native · Flask"
          link="https://github.com/gael55x/Ren"
        />
      </div>
    </section>
  )
}
