export default function Footer() {
  return (
    <footer id="footer" className="bg-stone-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold mb-2">
            Cottonwood Canyon Campground
          </h3>
          <p>Seasonal camping beside the Belly River.</p>
        </div>

        <div>
          <p>Phone: 403-308-5231</p>
          <p>Email: CottonwoodCanyonCampground@gmail.com</p>
        </div>

        <div>
          <a
            href="https://www.facebook.com/cottonwoodcanyoncampground"
            className="underline"
          >
            Facebook
          </a>
        </div>

      </div>
    </footer>
  );
}