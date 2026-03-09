"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  { src: "/HeroGallery/hero1.jpg" },
  { src: "/HeroGallery/hero2.jpg" },
  { src: "/HeroGallery/hero3.jpg" },
  { src: "/HeroGallery/hero4.jpg" },
  { src: "/HeroGallery/hero5.jpg" },
  { src: "/HeroGallery/hero7.jpg" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 9000); // image stays longer
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[65vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? [1, 1.08] : 1, // continuous zoom
            }}
            transition={{
              duration: 9, // match slide display time
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt="Cottonwood Canyon Campground"
              fill
              priority={i === 0}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              max-w-lg
              bg-black/40
              backdrop-blur-sm
              text-white
              p-6
              md:p-8
              rounded-xl
              shadow-xl
            "
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Cottonwood Canyon
              <span className="block text-green-300">Campground</span>
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-6">
              A peaceful seasonal campground beside the Belly River.
              Enjoy full-service RV sites, modern cabins, and easy access
              to Waterton National Park.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/seasonal"
                className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-md font-medium transition text-center"
              >
                Seasonal Camping
              </Link>
              <Link
                href="/cabins"
                className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-md font-medium transition text-center"
              >
                View Cabins
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-white"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}