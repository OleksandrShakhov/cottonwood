"use client";

import React, { useState } from "react";
import Image from "next/image";
import galleryData from "../data/gallery.json";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title?: string;
    description?: any;
} | null>(null);

  type GalleryImage = {
    src: string;
    title?: string;
    description?: any;
  };

  const typedGalleryData: GalleryImage[] = galleryData;

  const visibleImages = typedGalleryData.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, galleryData.length));
  };

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">

      {/* Section Title & Description */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
        <p className="text-gray-600 mt-4">
          Explore our beautiful Cottonwood Canyon Campground through these images. 
          From scenic views to cozy camping spots, get a glimpse of what awaits you.
        </p>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            onClick={() => setSelectedImage(img)}
          >
            <div className="relative aspect-square">
              <Image
                src={img.src}
                alt={img.title || `Gallery image ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            {/* Optional overlay with title */}
            {img.title && (
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 text-sm font-medium">
                {img.title}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < galleryData.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSeeMore}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition shadow-md"
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition"
              >
                <IoClose />
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.title || "Gallery Image"}
                width={1400}
                height={900}
                className="object-contain rounded-2xl w-full h-auto"
              />
              {selectedImage.title && (
                <p className="text-white mt-4 text-center text-lg">{selectedImage.title}</p>
              )}
              {selectedImage.description && (
                <p className="text-gray-300 mt-2 text-center">{selectedImage.description}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}