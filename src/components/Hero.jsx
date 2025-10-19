export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container section grid md:grid-cols-2 items-center gap-10">
        <div>
          <span className="badge">Nonprofit • Youth-led</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Empowering Young Minds <span className="text-primary">Through AI & Education</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide free math, Java, and Python tutoring, AI awareness workshops, and literacy drives
            for students in New Jersey and India — building confidence, community, and curiosity.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#involved" className="btn btn-primary">Become a Tutor</a>
            <a href="#programs" className="btn btn-ghost">Explore Programs</a>
          </div>
        </div>
        <div className="relative">
          <img src="/images/fmai_02.jpg" alt="Future Minds AI workshop" className="rounded-2xl shadow-xl w-full object-cover"/>
        </div>
      </div>
    </section>
  )
}
