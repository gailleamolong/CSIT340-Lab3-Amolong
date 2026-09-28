import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="Sep 2025 – Present"
          title="Software Engineer, AI & Security Platform"
          place="Willed"
          description="Building security monitoring and AI workflows for a legal-tech platform."
        />
        <TimelineItem
          period="Nov 2025 – Aug 2026"
          title="Contract Software Engineer"
          place="Referrin Health"
          description="Worked on healthcare referral workflows and AI-assisted intake."
        />
        <TimelineItem
          period="May 2025 – Present"
          title="Lead Software Engineer"
          place="BitWork Solutions"
          description="Leading software projects across AI, ecommerce, and platform engineering."
        />
      </ol>
    </section>
  )
}
