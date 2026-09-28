import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="CSIT340 Lab 3 Portfolio"
          description="This portfolio rebuilt from the provided HTML page using React components."
          tech="React · Tailwind CSS"
          link="https://github.com/gailleamolong/CSIT340-Lab3-Amolong"
        />
        <ProjectCard
          year="2026"
          title="CSIT340 Group 5 Lab 3"
          description="A React class exercise showing subjects, units, and a calculated total."
          tech="React · CSS"
          link="https://github.com/gailleamolong/CSIT340G5-Lab3-Amolong"
        />
        <ProjectCard
          year="2026"
          title="CSIT340 Lab 1"
          description="My Lab 1 activity for CSIT340."
          tech="JavaScript · React"
          link="https://github.com/gailleamolong/CSIT340-Lab1-Amolong"
        />
        <ProjectCard
          year="2026"
          title="CSIT340 Group 5 Project 1"
          description="A group project for CSIT340."
          tech="JavaScript"
          link="https://github.com/gailleamolong/CSIT340G5-proj-1"
        />
      </div>
    </section>
  )
}
