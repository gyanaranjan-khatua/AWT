import React, { useState } from "react";
import { motion } from "framer-motion";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    groupType: "Single",
    yourLocation: "",
    destination: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919668504726"; // Your WhatsApp number
    const message = encodeURIComponent(
      `🌍 *Travel Trip Booking*\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📍 From: ${formData.yourLocation}\n🏁 To: ${formData.destination}\n📅 Trip Date: ${formData.date}\n👥 Group Type: ${formData.groupType}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 border-l-4 border-cyan-500 w-full max-w-2xl p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-8">
          🧳 Book Your Travel Trip
        </h2>

        <div className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border shadow border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border shadow border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          />
          <input
            type="text"
            name="yourLocation"
            placeholder="Your Location"
            value={formData.yourLocation}
            onChange={handleChange}
            className="w-full p-3 border shadow border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-3 border shadow border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          />
          <select
            name="groupType"
            value={formData.groupType}
            onChange={handleChange}
            className="w-full p-3 border shadow border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
          >
            <option value="Single">Single</option>
            <option value="Friends">Friends</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
          </select>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:bg-green-700 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
          >
            📲 Submit via WhatsApp
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
