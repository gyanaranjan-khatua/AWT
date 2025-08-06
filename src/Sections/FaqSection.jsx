"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Data remains the same for easy integration
const faqData = [
  {
    question: "What does your Holiday & Tour Packages service include?",
    answer:
      "Our holiday packages include curated itineraries, accommodation, sightseeing, guided tours, and travel support for a seamless vacation experience.",
    icon: "🌍",
  },
  {
    question: "Can I book hotels in advance through your platform?",
    answer:
      "Yes, we offer hotel reservations across all budget ranges, including luxury stays, boutique hotels, and budget-friendly lodgings with special deals.",
    icon: "🏨",
  },
  {
    question: "How do you assist with Passport and VISA services?",
    answer:
      "We offer complete support with passport applications, renewals, and visa processing for tourist, business, student, and work travel purposes.",
    icon: "🛂",
  },
  {
    question: "Do you provide Cruise Booking services?",
    answer:
      "Yes, we book cruise vacations with top cruise lines — domestic and international — including cabin selection, meals, and excursion planning.",
    icon: "🛳️",
  },
  {
    question: "What kind of help do you provide with Forex Assistance?",
    answer:
      "We help travelers obtain foreign currency legally and at competitive rates, along with guidance on currency regulations and card usage abroad.",
    icon: "💱",
  },
  {
    question: "Can I book air tickets with you for domestic and international travel?",
    answer:
      "Absolutely! We offer quick and affordable air ticketing for both domestic and international flights with instant confirmations.",
    icon: "✈️",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24 px-6 md:px-12 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle, moving light blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Ethereal, floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 1.5}px)`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-700 to-purple-600 rounded-full p-4 mb-6 shadow-2xl"
          >
            <HelpCircle className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-50 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Common Questions, Clear Answers
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-500 mx-auto mb-6 rounded-full"
          />

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We know you have questions. We have the answers. Explore our comprehensive services and find out how we make your journey unforgettable.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 cursor-pointer transition-all duration-300 ${
                  openIndex === index ? "shadow-[0_0_40px_rgba(99,102,241,0.5)] border-indigo-500/50" : "shadow-lg hover:shadow-2xl hover:border-white/20"
                }`}
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Dynamic Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-500 p-[2px] transition-opacity duration-500 ${
                    openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="bg-black/90 rounded-[1.4rem] h-full w-full" />
                </div>

                <div className="relative z-10">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left focus:outline-none group"
                  >
                    <div className="flex items-center space-x-6 flex-1">
                      <motion.div
                        className="text-4xl leading-none"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {faq.icon}
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                        openIndex === index
                          ? "bg-gradient-to-br from-indigo-600 to-purple-500 text-white shadow-lg"
                          : "bg-gray-800 text-gray-400 group-hover:bg-indigo-900 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-white/10">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start space-x-4"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <Sparkles className="w-6 h-6 text-indigo-400" />
                            </div>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 text-white shadow-2xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              {"Don't hesitate to reach out! Our team is ready to provide personalized support."}
            </p>
            <Link to="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-br from-indigo-600 to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-10" />
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}