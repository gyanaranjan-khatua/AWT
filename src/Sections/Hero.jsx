"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPlane,
  FaSuitcaseRolling,
  FaPassport,
  FaTicketAlt,
  FaHotel,
  FaMapMarkedAlt,
  FaCameraRetro,
  FaUmbrellaBeach,
  FaShip,
  FaTrain,
  FaBus,
  FaGlobeAmericas,
} from "react-icons/fa"
import { Luggage, PlaneTakeoff, MapPin, Compass } from "lucide-react"
import { Star, Phone, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import DisneyLandParis from "./../assets/heroimg/DisneyLandParis.jpeg"
import MountTitlis from "./../assets/heroimg/MountTitlis.jpeg"
import SwarovskiCrystalMuseum from "./../assets/heroimg/SwarovskiCrystalMuseum.jpeg"
import Interlaken from "./../assets/heroimg/Interlaken.jpeg"
import Grindewald from "./../assets/heroimg/Grindewald.jpeg"
import Amsterdam from "./../assets/heroimg/Amsterdam.jpeg"
import Vietnam from "./../assets/heroimg/Vietnam.jpeg"

// Travel-specific floating icons
const floatingIcons = [
  { icon: FaPlane, delay: 0 },
  { icon: FaSuitcaseRolling, delay: 0.3 },
  { icon: FaPassport, delay: 0.6 },
  { icon: FaTicketAlt, delay: 0.9 },
  { icon: FaHotel, delay: 1.2 },
  { icon: FaMapMarkedAlt, delay: 1.5 },
  { icon: FaCameraRetro, delay: 1.8 },
  { icon: FaUmbrellaBeach, delay: 2.1 },
  { icon: FaShip, delay: 2.4 },
  { icon: FaTrain, delay: 2.7 },
  { icon: FaBus, delay: 3.0 },
  { icon: FaGlobeAmericas, delay: 3.3 },
  { icon: PlaneTakeoff, delay: 3.6 },
  { icon: Luggage, delay: 3.9 },
  { icon: Compass, delay: 4.2 },
]

// Sample slides data (using placeholder images)
const slides = [
  {
    image: DisneyLandParis,
    title: "Disney Land Paris",
    description: "Feel the beauty of untouched wilderness and discover hidden gems",
    location: "Swiss Alps",
    rating: 4.9,
  },
  {
    image: MountTitlis,
    title: "Mount Titlis",
    description: "Discover vibrant cityscapes and urban adventures",
    location: "Kerala, India",
    rating: 4.8,
  },
  {
    image: SwarovskiCrystalMuseum,
    title: "Swarovski Crystal museum",
    description: "Experience the golden sands and mystical desert landscapes",
    location: "Sahara Desert",
    rating: 4.7,
  },
  {
    image: Interlaken,
    title: "Interlaken",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image: Grindewald,
    title: "Grindelwald",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image: Amsterdam,
    title: "Amsterdam",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image: Vietnam,
    title: "Vietnam",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentData = slides[currentSlide]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-sky-400 overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.3, 0.2],
              scale: [0.8, 1.3, 1, 0.8],
              rotate: [0, 180, 360],
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
            }}
            transition={{
              duration: 12,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
            }}
          >
            <item.icon size={Math.random() * 20 + 20} />
          </motion.div>
        ))}
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
          animate={{
            x: [0, 200, -100, 0],
            opacity: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-sky-300/40 to-transparent"
          animate={{
            x: [0, -150, 100, 0],
            opacity: [0, 0.8, 0.3, 0],
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-10 py-5">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Location Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-blue-900 shadow-xl border border-white/20"
              key={`location-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin size={16} className="text-blue-600" />
              {currentData.location}
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                Explore{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  {currentData.title}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {currentData.description}
              </motion.p>
            </AnimatePresence>

            {/* Rating */}
            <motion.div
              className="flex items-center gap-2"
              key={`rating-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${i < Math.floor(currentData.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">{currentData.rating}</span>
              <span className="text-blue-200">(2,847 reviews)</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-lg">
                <Calendar className="" size={20} />
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent flex items-center justify-center gap-2 font-semibold text-lg backdrop-blur-sm">
                <Phone className="" size={20} />
                Call Now
              </button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 border border-white/30 ${
                    index === currentSlide ? "bg-white w-8 shadow-lg" : "bg-white/30 w-3 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
             <div className="relative inline-block overflow-hidden rounded-3xl shadow-2xl bg-white p-4">
  <AnimatePresence mode="wait">
    <motion.img
      key={currentSlide}
      src={currentData.image}
      alt={currentData.title}
      className="w-auto h-auto object-contain rounded-2xl"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7 }}
    />
  </AnimatePresence>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
  >
    <ChevronLeft size={24} className="text-gray-700" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
  >
    <ChevronRight size={24} className="text-gray-700" />
  </button>
</div>


              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/80 to-transparent pointer-events-none" />
    </section>
  )
}
