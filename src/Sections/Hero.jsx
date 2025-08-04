import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPlane, FaSuitcaseRolling, FaPassport, FaTicketAlt, FaHotel,
  FaMapMarkedAlt, FaCameraRetro, FaUmbrellaBeach, FaShip, FaTrain,
  FaBus, FaGlobeAmericas,
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

// Floating travel icons
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

// Slides data
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
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-700 to-sky-400 overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/30"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.4, 0.3],
              scale: [0.8, 1.25, 1, 0.8],
              rotate: [0, 180, 360],
              x: [0, 100, -75, 0],
              y: [0, -80, 60, 0],
            }}
            transition={{
              duration: 14,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 70}%`,
              filter: "drop-shadow(0 0 10px rgba(56,189,248,0.16))",
            }}
          >
            <item.icon size={Math.random() * 18 + 28} />
          </motion.div>
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[3px] h-full bg-gradient-to-b from-transparent via-amber-200/40 to-transparent"
          animate={{
            x: [0, 220, -100, 0],
            opacity: [0, 0.9, 0.4, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-300/40 to-transparent"
          animate={{
            x: [0, -170, 85, 0],
            opacity: [0, 0.6, 0.25, 0],
          }}
          transition={{
            duration: 12,
            delay: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-10 min-h-[80vh] items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8 md:pr-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Location Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 text-sm font-medium text-indigo-900 shadow-xl border border-white/20"
              key={`location-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin size={16} className="text-sky-700" />
              {currentData.location}
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                Explore{" "}
                <span className="bg-gradient-to-r from-amber-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                  {currentData.title}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-base sm:text-lg md:text-xl text-indigo-100 leading-relaxed max-w-xl drop-shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                {currentData.description}
              </motion.p>
            </AnimatePresence>

            {/* Rating */}
            <motion.div
              className="flex items-center gap-2"
              key={`rating-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < Math.floor(currentData.rating) ? "text-amber-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">{currentData.rating.toFixed(1)}</span>
              <span className="text-indigo-100 text-base hidden sm:inline">(2,847 reviews)</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="bg-gradient-to-r from-indigo-700 to-fuchsia-600 hover:from-indigo-900 hover:to-fuchsia-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold text-base sm:text-lg">
                <Calendar size={20} />
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-fuchsia-800 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent flex items-center justify-center gap-2 font-semibold text-base sm:text-lg backdrop-blur-sm">
                <Phone size={20} />
                Call Now
              </button>
            </motion.div>
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 border-2 border-white/50 ${
                    index === currentSlide ? "bg-white w-8 shadow-lg" : "bg-white/30 w-3 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          {/* Right Column / Image */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative inline-block overflow-hidden rounded-3xl shadow-2xl bg-white/95 p-2 md:p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={currentData.image}
                  alt={currentData.title}
                  className="w-[88vw] max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl aspect-video"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-fuchsia-100 transition-all duration-300 hover:scale-110 focus:outline-none"
                aria-label="Previous Slide"
                tabIndex={0}
              >
                <ChevronLeft size={26} className="text-indigo-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-fuchsia-100 transition-all duration-300 hover:scale-110 focus:outline-none"
                aria-label="Next Slide"
                tabIndex={0}
              >
                <ChevronRight size={26} className="text-indigo-700" />
              </button>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-pink-400 rounded-full opacity-80"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 24, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-sky-400 rounded-full opacity-50"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-indigo-950/95 to-transparent pointer-events-none" />
    </section>
  )
}
