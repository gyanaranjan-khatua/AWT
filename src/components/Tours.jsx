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

const International = Object.keys(intlImages);
const Indian = Object.keys(indiaImages);

// ✅ Card Component
const Card = ({ name, img, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -8 }}
    transition={{ type: "spring", stiffness: 230, damping: 17 }}
    onClick={() => onClick(name)}
    className="group relative rounded-sm border-b-2 border-white  shadow-xl bg-white overflow-hidden cursor-pointer"
  >
    <img src={img} alt={name} className="w-full h-44 object-cover group-hover:scale-110 transition" />
    <div className="p-4">
      <h3 className="text-lg text-center font-bold text-gray-900">{name}</h3>
      {/* <span className="block h-1 w-full bg-gradient-to-r from-white via-orange-300 rounded-full to-white mt-2" /> */}
      <p className=" p-1 shadow-md rounded-full text-center text-white bg-gradient-to-r mt-1 from-blue-500 to-cyan-600 ">Explore Now</p>
      
    </div>
  </motion.div>
);

// ✅ DestinationShowcase Page
const DestinationShowcase = () => {
  const navigate = useNavigate();

   const handleCardClick = (place) => {
    navigate(`/destination/${encodeURIComponent(place)}`, {
      state: { title: place },
    });
  };


  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-100 to-cyan-500 bg-clip-text text-transparent mb-6">
           Elite Travel Services Just for You
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of travel services crafted to make every part of your journey smooth, exciting, and unforgettable. From Holiday Packages to Hotel Reservations, Passport & VISA, Cruise Bookings, Forex Assistance, and Air Ticketing — we’ve got it all covered for you.
          </p>
      </div>

<div className="max-w-7xl mx-auto mb-16">
  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-gray-900 via-blue-500 to-gray-900 p-3 font-semibold text-white mb-6">International Destinations</h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {International.map((place) => (
      <motion.div
        key={place}
        className="p-[2px] rounded-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-yellow-500"
        style={{
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%", // loop back
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="rounded-xl bg-black w-full h-full">
          <Card
            name={place}
            img={intlImages[place]}
            onClick={handleCardClick}
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>


      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center bg-gradient-to-r from-black via-cyan-600 to-black p-3 mb-6">National Destinations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Indian.map((place) => (
            <Card key={place} name={place} img={indiaImages[place]} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationShowcase;
