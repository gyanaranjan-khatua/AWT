"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"


const faqData = [
  {
    question: "Do you offer Air Ticket booking for domestic and international travel?",
    answer:
      "Yes, we provide hassle-free booking for both domestic and international flights with best price deals and instant ticketing.",
    icon: "✈️",
  },
  {
    question: "How can I get assistance with applying for a Passport?",
    answer:
      "Our experts help you complete your passport application, book appointments, and ensure all documents are submitted correctly.",
    icon: "🛂",
  },
  {
    question: "Do you help with Visa processing?",
    answer:
      "Absolutely. We guide you through every step of visa documentation and submission for tourist, business, and student visas.",
    icon: "📄",
  },
  {
    question: "Can you help me book hotels during my trip?",
    answer:
      "Yes, we offer hotel booking services for all budgets and preferences — from budget stays to luxury resorts.",
    icon: "🏨",
  },
  {
    question: "What is Forex Assistance and how do you help?",
    answer:
      "We help travelers get the best foreign currency exchange rates legally and securely before international travel.",
    icon: "💱",
  },
  {
    question: "Do you provide Travel Insurance?",
    answer:
      "Yes, we offer travel insurance policies that cover emergencies, cancellations, medical expenses, and more.",
    icon: "🛡️",
  },
  {
    question: "Can I rent a car through your service?",
    answer:
      "Yes, we offer car rental services across cities, including self-drive and chauffeur-driven vehicles of all categories.",
    icon: "🚗",
  },
  {
    question: "What is Destination Wedding support?",
    answer:
      "We manage end-to-end travel, guest accommodations, and logistics for unforgettable destination weddings in India or abroad.",
    icon: "💍",
  },
  {
    question: "Do you organize MICE Tourism (Meetings, Incentives, Conferences, and Exhibitions)?",
    answer:
      "Yes, we provide full support for corporate events including venue booking, travel coordination, and event execution.",
    icon: "🎤",
  },
  {
    question: "Can I book group tours through your platform?",
    answer:
      "Yes, we organize customized group tours for families, corporate teams, and educational institutions with complete planning.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    question: "Do you help with honeymoon packages?",
    answer:
      "Absolutely! We offer tailored honeymoon packages with romantic destinations, activities, and accommodation at great prices.",
    icon: "🌹",
  },
  {
    question: "Is airport pickup and drop available?",
    answer:
      "Yes, we provide reliable airport transfers with timely pickups and drops using comfortable and clean vehicles.",
    icon: "🚕",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>

    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900 to-black py-14 px-6 md:px-12 overflow-hidden text-white">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-900 to-purple-900 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-900 to-yellow-900 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-900 to-blue-900 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div> */}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mb-6 shadow-lg"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
            Frequently Asked Questions
            
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mb-6 rounded-full"
          />

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our mission, services, and how you can get involved in making a
            difference.
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
                className={`relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 cursor-pointer transition-all duration-300 ${
                  openIndex === index ? "shadow-2xl shadow-blue-900/20 border-blue-700/50" : "shadow-lg hover:shadow-xl"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r  from-red-600  to-orange-400 p-[2px] transition-opacity duration-300 ${
                    openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-90"
                  }`}
                >
                  <div className="bg-gray-900 rounded-3xl h-full w-full" />
                </div>

                <div className="relative z-10">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left focus:outline-none group"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <motion.div
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {faq.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                        openIndex === index
                          ? "bg-gradient-to-r from-red-700 to-orange-800 text-white shadow-lg"
                          : "bg-gray-700 text-gray-400 group-hover:bg-blue-900 group-hover:text-blue-200"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-gradient-to-r from-blue-900 to-purple-900">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <Sparkles className="w-5 h-5 text-blue-500" />
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-700 to-sky-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              {"We're here to help! Reach out to us for any additional information."}
            </p>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}