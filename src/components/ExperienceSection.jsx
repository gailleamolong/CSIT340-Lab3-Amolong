import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="Current"
          title="BS Information Technology"
          place="CIT-U"
          description="Third year student learning web development."
        />
        <TimelineItem
          period="2026"
          title="CSIT340 Lab 1"
          place="CIT-U"
          description="Completed my Lab 1 activity."
        />
        <TimelineItem
          period="2026"
          title="CSIT340 Group 5 Lab 3"
          place="CIT-U"
          description="Built a React exercise for my CSIT340 class."
        />
      </ol>
    </section>
  )
}
