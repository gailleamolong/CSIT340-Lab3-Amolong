import SectionHeading from './SectionHeading.jsx'
import SkillTag from './SkillTag.jsx'

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="TypeScript" />
            <SkillTag name="Python" />
            <SkillTag name="JavaScript" />
            <SkillTag name="SQL" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Web stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Next.js" />
            <SkillTag name="FastAPI" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="Docker" />
            <SkillTag name="AWS" />
            <SkillTag name="PostgreSQL" />
          </div>
        </div>
      </div>
    </section>
  )
}
