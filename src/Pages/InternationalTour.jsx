"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Image imports
import id1 from "../assets/id1.JPG";
import id2 from "../assets/id2.JPG";
import id3 from "../assets/id3.JPG";
import id4 from "../assets/id4.JPG";
import id5 from "../assets/id5.JPG";
import id6 from "../assets/id6.JPG";
import id7 from "../assets/id7.JPG";
import id8 from "../assets/id8.JPG";
import id9 from "../assets/id9.JPG";
import id10 from "../assets/id10.JPG";
import id11 from "../assets/id11.JPG";
import id12 from "../assets/id12.JPG";
import id13 from "../assets/id13.JPG";
import id14 from "../assets/id14.JPG";
import id15 from "../assets/id15.JPG";
import id16 from "../assets/id16.JPG";
import id17 from "../assets/id17.JPG";
import id18 from "../assets/id18.JPG";
import id19 from "../assets/id19.JPG";
import id20 from "../assets/id20.JPG";
import id21 from "../assets/id21.JPG";
import id22 from "../assets/id22.JPG";
import id23 from "../assets/id23.JPG";
import id24 from "../assets/id24.JPG";

// ✅ Image mapping
const intlImages = {
  Australia: id1,
  Azerbaijan: id2,
  Almaty: id3,
  Bali: id4,
  Bhutan: id5,
  Dubai: id6,
  Europe: id7,
  Georgia: id8,
  Hongkong: id9,
  Japan: id10,
  Cambodia: id11,
  Malaysia: id12,
  Maldives: id13,
  Mauritius: id14,
  Nepal: id15,
  Newzealand: id16,
  Oman: id17,
  Philipines: id18,
  Srilanka: id19,
  Singapore: id20,
  Tajikistan: id21,
  Thailand: id22,
  Turkey: id23,
  Vietnam: id24,
};



const International = Object.keys(intlImages);


// ✅ Card Component
const Card = ({ name, img, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -8 }}
    transition={{ type: "spring", stiffness: 230, damping: 17 }}
    onClick={() => onClick(name)}
    className="group relative rounded-2xl shadow-xl bg-gray-800/90 overflow-hidden cursor-pointer"
  >
    <img src={img} alt={name} className="w-full h-44 object-cover group-hover:scale-110 transition" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <span className="block h-1 w-8 bg-blue-500 mt-2" />
    </div>
  </motion.div>
);

// ✅ DestinationShowcase Page
const InternationalTour = () => {
  const navigate = useNavigate();

   const handleCardClick = (place) => {
    navigate(`/destination/${encodeURIComponent(place)}`, {
      state: { title: place },
    });
  };


  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          Explore <span className="text-blue-400">World</span> Tours
        </h2>
        <p className="text-gray-400 mt-4">Handpicked destinations for your next adventure.</p>
      </div>

      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">International Holidays</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {International.map((place) => (
            <Card key={place} name={place} img={intlImages[place]} onClick={handleCardClick} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default InternationalTour;
