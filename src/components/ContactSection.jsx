import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="GitHub" href="https://github.com/gailleamolong" text="github.com/gailleamolong" />
        <ContactLink label="Portfolio" href="https://github.com/gailleamolong/CSIT340-Lab3-Amolong" text="CSIT340-Lab3-Amolong" />
        <ContactLink label="Lab 1" href="https://github.com/gailleamolong/CSIT340-Lab1-Amolong" text="CSIT340-Lab1-Amolong" />
      </ul>
    </section>
  )
}
