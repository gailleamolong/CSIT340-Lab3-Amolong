import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:gaille.amolong1@gmail.com" text="gaille.amolong1@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/gael55x" text="github.com/gael55x" />
        <ContactLink label="Website" href="https://gailleamolong.vercel.app/" text="gailleamolong.vercel.app" />
      </ul>
    </section>
  )
}
