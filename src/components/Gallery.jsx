const IMAGES = [
  "/images/fmai_01.jpg",
  "/images/fmai_02.jpg",
  "/images/fmai_03.jpg",
  // ... (rest of your images)
];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
        <p className="mt-2 text-gray-600">
          Learning across NJ and India — coding, community, and lots of curiosity.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`FMAI photo ${i + 1}`}
              className="rounded-xl shadow object-cover w-full h-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
