import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/topbg2.jpg"; // Replace with your actual image

const TopHero = (props) => {
  return (
    <div
      className="relative w-full h-[30vh] md:h-[50vh] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-60 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center text-white px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{props.name}</h1>
        <p className="text-lg md:text-xl font-medium">
          Complete Travel Solutions including{" "}
          <span className="text-green-100">Visa</span>,{" "}
          <span className="text-blue-100">Air Ticket</span>,{" "}
          <span className="text-yellow-100">Hotel</span>,{" "}
          <span className="text-pink-100">Car</span> & More.
        </p>
      </motion.div>
    </div>
  );
};

export default TopHero;
