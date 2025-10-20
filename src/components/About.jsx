export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
        <p className="mt-4 text-gray-600">
          It has grown into a cross-continental community where tutors and students learn side-by-side, share ideas, debug problems, and celebrate progress. 
          In 2025, we donated 472 books to underserved children throughout New Jersey to support the development of literacy skills and to encourage a love of reading.
        </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
            <li className="card"><div className="text-3xl font-extrabold text-primary">65+</div><div className="text-xs text-gray-500">Students Served</div></li>
            <li className="card"><div className="text-3xl font-extrabold text-primary">472</div><div className="text-xs text-gray-500">Books Donated</div></li>
          </ul>
          <a
          href={`${import.meta.env.BASE_URL}docs/book-drive-letter.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our Bridge of Books thank-you letter
        </a>
        </div>
        <div>
          <img src={`${import.meta.env.BASE_URL}images/fmai_09.jpg`} alt="FMAI team and students" className="rounded-2xl shadow-xl w-full object-cover"/>
        </div>
      </div>
    </section>
  )
}
