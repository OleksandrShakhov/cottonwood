"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-4">
          Have questions about Cottonwood Canyon Campground? Send us a message.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — Contact Info + Location */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
            
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900">
                Contact Info
              </h3>
              <p className="text-gray-600"><strong>Name:</strong> Derrick Beck</p>
              <p className="text-gray-600">
                <strong>Email:</strong> 
                <a href="mailto:CottonwoodCanyonCampground@gmail.com" className="text-green-700 hover:underline ml-1">
                  CottonwoodCanyonCampground@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> 
                <a href="tel:4033085231" className="text-green-700 hover:underline ml-1">
                  403-308-5231
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Facebook:</strong> 
                <a href="https://www.facebook.com" target="_blank" className="text-green-700 hover:underline ml-1">
                  Visit our page
                </a>
              </p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Location */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Location
              </h3>
              <p className="text-gray-600">
                Cottonwood Canyon Campground
              </p>
              <p className="text-gray-600">
                587R+VM, Mountain View, AB T0K 1N0
              </p>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.727413272612!2d-113.658259!3d49.164744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536f3f4b359708b3%3A0xdbd8d962556b877d!2sCottonwood%20Canyon%20Campground!5e1!3m2!1sen!2sca!4v1773695959500!5m2!1sen!2sca"
                  width="100%"
                  height="350"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>

    </section>
  );
}