import React from "react";
import { FaPlug, FaTint, FaWater, FaToilet, FaWifi, FaTree, FaUsers } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

export default function SeasonalCampingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Intro */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Seasonal Camping at Cottonwood Canyon
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Discover the perfect seasonal getaway at Cottonwood Canyon Campground.  
          Nestled along the serene Belly River, our campground offers full-service RV sites,  
          modern cabins, and family-friendly amenities. Explore the river, watch wildlife,  
          and enjoy easy access to Waterton National Park.  
          Each site is designed for comfort and convenience, whether you’re here for a weekend escape or a long seasonal stay.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaPlug size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">30 Amp Power</h3>
          <p className="text-gray-500 text-sm">
            Keep your RV powered with reliable 30 amp electrical hookups at every site.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaTint size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Potable Water Hookups</h3>
          <p className="text-gray-500 text-sm">
            Fresh water directly at your site, ready for drinking and cooking.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaWater size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Irrigation Water Hookups</h3>
          <p className="text-gray-500 text-sm">
            Convenient irrigation water available for RVs and landscaping needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaToilet size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Sewer Hookups</h3>
          <p className="text-gray-500 text-sm">
            Safe and easy sewer connections for a worry-free camping experience.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaTree size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Graveled Trailer Pads</h3>
          <p className="text-gray-500 text-sm">
            Level, durable gravel pads for comfortable RV placement.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaWifi size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Communal Wi-Fi</h3>
          <p className="text-gray-500 text-sm">
            Stay connected while enjoying nature with reliable campground Wi-Fi.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaTree size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">180 Acres of River Property</h3>
          <p className="text-gray-500 text-sm">
            Plenty of open space to explore, walk, and enjoy the beautiful riverfront.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
          <FaUsers size={36} className="text-green-600 mb-4" />
          <h3 className="font-semibold mb-2">Family-Friendly Campground</h3>
          <p className="text-gray-500 text-sm">
            Safe and welcoming environment for families and groups of all sizes.
          </p>
        </div>
      </div>

      {/* PDF Site Map Card */}
      <div className="flex justify-center">
        <a
          href="pdf/site-map.pdf"
          target="_blank"
          className="flex flex-col sm:flex-row items-center bg-green-50 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-xl transition hover:scale-105 max-w-md"
        >
          <AiFillFilePdf size={48} className="text-red-600 mr-0 sm:mr-4 mb-2 sm:mb-0" />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              View Campground Site Map
            </h3>
            <p className="text-gray-600 text-sm">
              Click to open the full PDF and see all campground locations: RV sites, cabins, amenities, and walking trails.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}