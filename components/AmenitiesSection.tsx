"use client";

import React from "react";
import { FaTree, FaDog, FaBasketballBall, FaShower } from "react-icons/fa";
import { MdPlayCircleFilled } from "react-icons/md"; // Playground icon alternative
import { GiCampingTent } from "react-icons/gi"; // Coming soon icon

interface Amenity {
  title: string;
  icon: React.ReactNode;
  items: string[];
  comingSoon?: boolean;
}

const amenities: Amenity[] = [
  {
    title: "Playground",
    icon: <MdPlayCircleFilled size={32} className="text-green-600" />,
    items: ["Climbing dome", "Play structure", "Swing set", "Sandpile", "Teeter totters", "Green space"],
  },
  {
    title: "Facilities",
    icon: <FaShower size={32} className="text-green-600" />,
    items: ["Bathrooms with flush toilets", "Dog off-leash area", "Walking trails", "River berm trail"],
  },
  {
  title: "Coming Soon",
  icon: <GiCampingTent size={32} className="text-yellow-500 animate-pulse" />,
  items: [
    "Laundry Facilities",
    "Shower facility",
    "Recreation center",
    "Pickleball courts",
    "Entertainment room",
    "Basketball court"
  ],
  comingSoon: true,
},
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Amenities
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Enjoy a wide range of amenities at Cottonwood Canyon Campground designed for families, kids, and nature lovers.
        </p>
      </div>

      {/* Amenity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {amenities.map((amenity) => (
          <div
            key={amenity.title}
            className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition hover:shadow-xl hover:scale-105`}
          >
            <div className="mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
            <ul className="text-gray-500 list-disc list-inside space-y-1">
              {amenity.items.map((item, idx) => (
                <li key={idx} className={`${amenity.comingSoon ? "opacity-70" : ""}`}>
                  {item}
                </li>
              ))}
            </ul>
            {amenity.comingSoon && (
              <span className="mt-3 text-yellow-500 font-medium text-sm">Coming Soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}