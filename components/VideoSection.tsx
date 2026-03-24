export default function VideoSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Experience Cottonwood Canyon
      </h2>

      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/abgSppN_Zis?si=pq_Uw9_yoPq-JcUt"
          title="Cottonwood Canyon Campground Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}