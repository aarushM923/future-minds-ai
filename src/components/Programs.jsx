const tiles = [
  {
    title: "STEM Tutoring",
    desc: "Free small‑group sessions in Math, Java, and Python that build problem‑solving skills and confidence.",
    cta: "Join as Student",
    href: "#contact"
  },
  {
    title: "AI Awareness Workshops",
    desc: "Hands‑on activities that introduce real‑world AI concepts, ethics, and creativity.",
    cta: "Host a Workshop",
    href: "#contact"
  },
  {
    title: "Book Drives & Literacy",
    desc: "Hosted book drives in local libraries; donated to Bridge of Books Foundation to expand access to books for kids across New Jersey.",
    cta: "Donate Books",
    href: "#involved"
  },
  {
    title: "Mentor Network",
    desc: "High‑school mentors support peers globally with structured lesson plans and office hours.",
    cta: "Become a Tutor",
    href: "#involved"
  }
]

export default function Programs() {
  return (
    <section id="programs" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Programs</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {tiles.map((t) => (
            <div key={t.title} className="card">
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-gray-600">{t.desc}</p>
              <a href={t.href} className="btn btn-primary mt-4">{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
