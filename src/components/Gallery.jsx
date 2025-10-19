const IMAGES = [
  'fmai_01.jpg',,'fmai_03.jpg','fmai_04.jpg',
  'fmai_05.jpg','fmai_06.jpg','fmai_07.jpg','fmai_08.jpg'
];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
        <p className="mt-2 text-gray-600">Learning across NJ and India — coding, community, and curiosity.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((file, i) => (
            <img
              key={i}
              src={`${import.meta.env.BASE_URL}images/${file}`}
              alt={`FMAI photo ${i + 1}`}
              className="rounded-xl shadow object-cover w-full h-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
