import SectionHeading from './SectionHeading.jsx'
import Fact from './Fact.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I&apos;m Gaille Amolong, a third year BSIT student at CIT-U based in
        Minglanilla. I build software for work and publish open source tools.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Minglanilla" />
      </dl>
    </section>
  )
}
