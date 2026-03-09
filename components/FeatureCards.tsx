import React from "react";
import Link from "next/link";
import { FaCampground, FaHome, FaTree, FaImages, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";

interface FeatureCard {
  title: string;
  icon: React.ReactNode;
  href: string;
  description?: string;
}

const features: FeatureCard[] = [
  {
    title: "Seasonal Campground",
    icon: <FaCampground size={28} className="text-green-600" />,
    href: "/seasonal",
    description: "Full-service RV sites and riverfront camping",
  },
  {
    title: "Cabins",
    icon: <FaHome size={28} className="text-green-600" />,
    href: "/cabins",
    description: "Cozy cabins for families and groups",
  },
  {
    title: "Amenities",
    icon: <FaTree size={28} className="text-green-600" />,
    href: "/amenities",
    description: "Playground, trails, bathrooms, and more",
  },
  {
    title: "Gallery",
    icon: <FaImages size={28} className="text-green-600" />,
    href: "/gallery",
    description: "Photos of our campground, cabins, and wildlife",
  },
  {
    title: "Location",
    icon: <FaMapMarkedAlt size={28} className="text-green-600" />,
    href: "/location",
    description: "Find us along the Belly River",
  },
  {
    title: "Contact",
    icon: <FaEnvelope size={28} className="text-green-600" />,
    href: "/contact",
    description: "Get in touch or send us a message",
  },
];

export default function FeatureCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            {feature.description && (
              <p className="text-gray-500 text-sm">{feature.description}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}