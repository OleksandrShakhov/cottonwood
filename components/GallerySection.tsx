"use client";

import React, { useState } from "react";
import Image from "next/image";
import galleryData from "../data/gallery.json";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const visibleImages = galleryData.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, galleryData.length));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Gallery Highlights
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Take a glimpse of Cottonwood Canyon Campground. Click on any image to view it in full.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {visibleImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg break-inside"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-2 text-white text-sm text-center">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < galleryData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition"
          >
            See More Images
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition"
              >
                <IoClose />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="object-contain rounded-xl"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}