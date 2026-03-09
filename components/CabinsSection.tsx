"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // ✅ Correct import for Swiper 10+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface Cabin {
  name: string;
  images: string[];
  description: string;
  features: string[];
  airbnbLink: string;
}

const cabins: Cabin[] = [
  {
    name: "Cabin 1",
    images: [
      "/cabins/image0.jpeg",
      "/cabins/image1.jpeg",
      "/cabins/image2.jpeg",
      "/cabins/image3.jpeg",
      "/cabins/image4.jpeg",
      "/cabins/image5.jpeg",
      "/cabins/image6.jpeg",
      "/cabins/image7.jpeg",
      "/cabins/image8.jpeg",
      "/cabins/image9.jpeg",
      "/cabins/image10.jpeg",
      "/cabins/image11.jpeg",
      "/cabins/image12.jpeg",
    ],
    description: "Sleeps up to 8 people with all bedding and kitchen supplies provided.",
    features: [
      "2 bedrooms with queen beds",
      "2 sofa beds",
      "Stand-up shower",
      "Kitchen cookware",
      "BBQ on deck",
      "Fire ring & complimentary firewood",
      "Camping chairs & beach towels",
      "Pet friendly cabin available",
    ],
    airbnbLink: "https://www.airbnb.ca/rooms/978577984567501427",
  },
  {
    name: "Cabin 2",
    images: [
      "/cabins/image0.jpeg",
      "/cabins/image1.jpeg",
      "/cabins/image2.jpeg",
      "/cabins/image3.jpeg",
      "/cabins/image4.jpeg",
      "/cabins/image5.jpeg",
      "/cabins/image6.jpeg",
      "/cabins/image7.jpeg",
      "/cabins/image8.jpeg",
      "/cabins/image9.jpeg",
      "/cabins/image10.jpeg",
      "/cabins/image11.jpeg",
      "/cabins/image12.jpeg",
    ],
    description: "Cozy cabin for families or small groups with all amenities.",
    features: [
      "2 bedrooms with queen beds",
      "2 sofa beds",
      "Stand-up shower",
      "Kitchen cookware",
      "BBQ on deck",
      "Fire ring & complimentary firewood",
      "Camping chairs & beach towels",
      "Pet friendly cabin available",
    ],
    airbnbLink: "https://www.airbnb.ca/rooms/992298227748138136",
  },
];

export default function CabinsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Cabins
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Cozy cabins nestled along the Belly River. Perfect for families, groups, or anyone looking for a comfortable, relaxing stay.
        </p>
      </div>

      {/* Cabin List */}
      <div className="space-y-20">
        {cabins.map((cabin) => (
          <div
            key={cabin.name}
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
          >
            {/* Cabin Image Carousel */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop
                className="h-[300px] md:h-[400px]"
              >
                {cabin.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={img}
                      alt={`${cabin.name} image ${idx + 1}`}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Cabin Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{cabin.name}</h3>
              <p className="text-gray-600 mb-4">{cabin.description}</p>

              <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
                {cabin.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <Link
                href={cabin.airbnbLink}
                target="_blank"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Book on Airbnb
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}