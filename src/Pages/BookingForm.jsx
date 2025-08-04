import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import bgImg from "../assets/in13.jpg";

const BookingForm = () => {
  const location = useLocation();
  const { country, place, image } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    yourLocation: "",
    email: "",
    age: "",
    gender: "",
    groupType: "Single",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleWhatsAppClick = () => {
    const phoneNumber = "919668504726";
    const message = encodeURIComponent(
      `🌍 *Travel Trip Booking*\n\n📍 Destination Country: ${country}\n🏞️ Place: ${place}\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📍 From: ${formData.yourLocation}\n📧 Email: ${formData.email}\n🎂 Age: ${formData.age}\n⚧️ Gender: ${formData.gender}\n👥 Group Type: ${formData.groupType}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main Booking Container */}
      <motion.div
        className="relative z-10 w-full max-w-5xl bg-black/30 backdrop-blur-lg dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image and Info */}
          <div className="md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-100 dark:text-white mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Trip Overview
            </motion.h2>

            {image && (
              <motion.img
                src={image}
                alt={place}
                className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            )}

            <div className="space-y-2 text-gray-100 dark:text-gray-300">
              <p className="text-lg font-medium">
                🌍 <span className="font-semibold">Country:</span> {country}
              </p>
              <p className="text-lg font-medium">
                🏞️ <span className="font-semibold">Place:</span> {place}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-100 dark:text-white">
              Confirm Your Trip Booking
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="text"
                name="yourLocation"
                placeholder="Where are you from?"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <select
                name="gender"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="groupType"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Single">Single</option>
                <option value="Couple">Couple</option>
                <option value="Group">Group</option>
                <option value="Family">Family</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339.6 55.8 281.3 32 224 32S108.4 55.8 67.1 97.1 32 195.3 32 252.6s23.8 155.5 65.1 196.9c41.3 41.3 99.6 65.1 156.9 65.1s115.6-23.8 156.9-65.1c41.3-41.3 65.1-99.6 65.1-156.9s-23.8-115.6-65.1-156.9zM224 432c-47.5 0-92.7-19.4-126.1-52.8S64 300.5 64 253V157.9c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v95.1c0 23.3 9.2 45.4 25.7 61.9 16.5 16.5 38.6 25.7 61.9 25.7s45.4-9.2 61.9-25.7c16.5-16.5 25.7-38.6 25.7-61.9v-95.1c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v95.1c0 47.5-19.4 92.7-52.8 126.1S271.5 432 224 432z" />
                  </svg>
                  Confirm Booking on WhatsApp
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingForm;
