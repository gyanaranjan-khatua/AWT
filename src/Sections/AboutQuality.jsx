import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carImage from "../assets/drivingpic.jpg"; // Left image
import bgRight from "../assets/roadbg.jpg";     // Background image for right side

const tabs = [
  {
    label: "LUXURY FLEET",
    key: "luxury",
    description:
      "DriveZones offers a premium fleet of well-maintained luxury vehicles that provide comfort, style, and performance for every journey.",
  },
  {
    label: "SUPPORT TEAM",
    key: "support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any queries or issues. We ensure a smooth and hassle-free experience.",
  },
  {
    label: "FLEXIBLE RENTALS",
    key: "flexible",
    description:
      "Our booking process is simple and straightforward, and we provide flexible payment options to make it convenient for our customers. Whether you need a car for a day, a week, or a month, we have a variety of rental plans to choose from.",
  },
];

export default function AboutQuality() {
  const [activeTab, setActiveTab] = useState("flexible");
  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">
        {/* Left - Image */}
        
        <div className="w-full h-64 md:h-auto">
             <div className="p-[4px]  bg-gradient-to-r from-yellow-500 via-yellow-300 to-black animate-bgMove shadow-lg">
          <img
            src={carImage}
            alt="Happy Driver"
            className="w-full h-full object-cover"
          />
          </div>
        </div>

        {/* Right - Text and Buttons */}
        
        <div
          className="relative flex flex-col justify-center items-center text-center px-4 py-10 md:py-16 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgRight})`,
          }}
        >
                        

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-xl text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Only Quality For Clients
            </h2>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm md:text-base font-semibold px-4 py-2 rounded transition-all duration-200 ${
                    activeTab === tab.key
                      ? "bg-lime-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base leading-relaxed"
              >
                {currentTab.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
