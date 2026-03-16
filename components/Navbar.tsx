"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Seasonal Camping", href: "/#seasonal-camping" },
  { name: "Cabins", href: "/#cabins" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Location", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0">
      <div className="backdrop-blur-md bg-white/80 border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/colorlogo.png"
              alt="Cottonwood Canyon Campground"
              width={48}
              height={48}
              className="rounded-md"
            />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-700 transition font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Book / Contact
            </Link>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-gray-800"></span>
            <span className="w-6 h-[2px] bg-gray-800"></span>
            <span className="w-6 h-[2px] bg-gray-800"></span>
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="md:hidden bg-white shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-4">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-green-700"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/#contact"
                  className="mt-2 bg-green-700 text-white py-3 text-center rounded-lg"
                >
                  Book / Contact
                </Link>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </header>
  );
}