export default function GetInvolved() {
  return (
    <section id="involved" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Get Involved</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Volunteer</h3>
            <p className="mt-2 text-gray-600">Tutor Math, Java, or Python. Mentor students and co‑create lesson plans.</p>
            <a href="#contact" className="btn btn-primary mt-4">Sign Up</a>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Donate</h3>
            <p className="mt-2 text-gray-600">Support our book drives or help fund laptops, snacks, and classroom supplies.</p>
            <a href="#contact" className="btn btn-primary mt-4">Donate</a>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Partner</h3>
            <p className="mt-2 text-gray-600">Schools and nonprofits: host a workshop or start a chapter of FMAI.</p>
            <a href="#contact" className="btn btn-primary mt-4">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
