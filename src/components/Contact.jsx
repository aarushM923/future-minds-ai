export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-4 text-gray-600">Have questions, want to partner, or ready to volunteer? We’d love to hear from you.</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>Email:</strong> futuremindsai95@gmail.com</li>
          </ul>
        </div>
        <form className="card grid gap-3">
          <input className="border rounded-xl px-4 py-3" type="text" placeholder="Your name" required />
          <input className="border rounded-xl px-4 py-3" type="email" placeholder="Your email" required />
          <textarea className="border rounded-xl px-4 py-3" rows="5" placeholder="How would you like to get involved?" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}
