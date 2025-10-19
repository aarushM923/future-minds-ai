export default function News() {
  return (
    <section id="news" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">News & Impact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <article className="card">
            <h3 className="text-xl font-semibold">Bridge of Books: 472 Books Donated</h3>
            <p className="mt-2 text-gray-600">Thanks to our community, we collected and donated 472 high‑quality children’s books to the Bridge of Books Foundation, expanding access across New Jersey.</p>
            <a href="/docs/book-drive-letter.pdf" className="btn btn-ghost mt-4">Read Thank‑You Letter</a>
          </article>
          <article className="card">
            <h3 className="text-xl font-semibold">Cross‑Continental Workshops</h3>
            <p className="mt-2 text-gray-600">Our live coding sessions now connect classrooms in NJ and India, with students working together on projects and problem‑solving.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
