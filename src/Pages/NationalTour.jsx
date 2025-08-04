"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Image imports

import in1 from "../assets/in1.JPG";
import in2 from "../assets/in2.JPG";
import in3 from "../assets/in3.JPG";
import in4 from "../assets/in4.JPG";
import in5 from "../assets/in5.JPG";
import in6 from "../assets/in6.JPG";
import in7 from "../assets/in7.webp";
import in8 from "../assets/in8.JPG";
import in9 from "../assets/in9.JPG";
import in10 from "../assets/in10.JPG";
import in11 from "../assets/in11.JPG";
import in12 from "../assets/in12.JPG";
import in13 from "../assets/in13.JPG";
import in14 from "../assets/in14.JPG";
import in15 from "../assets/in15.JPG";
import in16 from "../assets/in16.JPG";
import in17 from "../assets/in17.JPG";
import in18 from "../assets/in18.JPG";

// ✅ Image mapping


const indiaImages = {
  "Guwahati -Shillong": in1,
  "Arunachal Pradesh": in2,
  "Sikkim -Darjeeling": in3,
  Kolkata: in4,
  Odisha: in5,
  "Madhya Pradesh": in6,
  Visakhapatnam: in7,
  Tamilnadu: in8,
  Kerala: in9,
  "Hyderabad Telangana": in10,
  Maharashtra: in11,
  Uttarakhand: in12,
  Gujarat: in13,
  Rajasthan: in14,
  Himachal: in15,
  Kashmir: in16,
  Uttarpradesh: in17,
  "Leh-Ladakh": in18,
};


const Indian = Object.keys(indiaImages);

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
const NationalTour = () => {
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
          Explore <span className="text-blue-400">World & India</span> Tours
        </h2>
        <p className="text-gray-400 mt-4">Handpicked destinations for your next adventure.</p>
      </div>

    

      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-purple-400 mb-6">Indian Destinations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Indian.map((place) => (
            <Card key={place} name={place} img={indiaImages[place]} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalTour;
