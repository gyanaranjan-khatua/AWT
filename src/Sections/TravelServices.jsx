import { useState } from "react"
import airticket from "./../assets/airticket.jpg"
import PassportAssistance from "./../assets/PassportAssistance.jpg"
import visa from "./../assets/visa.jpg"
import HotelBooking from "./../assets/HotelBooking.jpg"
import ForexAssistance from "./../assets/ForexAssistance.jpg"
import cruise from "./../assets/cruise.jpg"


import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Plane,
  FileText,
  Globe,
  Building,
  DollarSign,
  Shield,
  Car,
  Heart,
  Users,
  MapPin,
  Compass,
  Camera,
  Palmtree,
  Mountain,
  X, // Added for close button
} from "lucide-react"

// Custom Button Component
const Button = ({ children, className = "", ...props }) => (
  <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${className}`} {...props}>
    {children}
  </button>
)

// Custom Card Components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
)
const services = [
  {
    id: 1,
    title: "Holiday & Tour Packages",
    description: "Explore curated domestic and international holiday packages tailored to your needs.",
    icon: Palmtree,
    image: airticket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Hotel Preservation",
    description: "Reserve top-rated hotels and accommodations with ease and exclusive deals.",
    icon: Building,
    image: HotelBooking,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "Passport & VISA",
    description: "Get complete assistance for passport and visa processing for all countries.",
    icon: Globe,
    image: visa,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "Cruise Booking",
    description: "Book luxurious cruises across oceans and rivers with unforgettable experiences.",
    icon: Compass,
    image: cruise,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Air Ticketing",
    description: "Book domestic and international flight tickets at the best available prices.",
    icon: Plane,
    image: airticket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Forex",
    description: "Secure and fast foreign exchange services for all your international travels.",
    icon: DollarSign,
    image: ForexAssistance,
    gradient: "from-orange-500 to-red-500",
  },
]


const floatingIcons = [
  { icon: MapPin, delay: 0, duration: 6 },
  { icon: Compass, delay: 1, duration: 8 },
  { icon: Camera, delay: 2, duration: 7 },
  { icon: Palmtree, delay: 3, duration: 9 },
  { icon: Mountain, delay: 4, duration: 6.5 },
  { icon: Plane, delay: 5, duration: 7.5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const FloatingIcon = ({ icon: Icon, delay, duration }) => (
  <motion.div
    className="absolute text-blue-200/20 pointer-events-none"
    initial={{
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
      rotate: 0,
    }}
    animate={{
      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
      rotate: 360,
    }}
    transition={{
      duration,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "linear",
    }}
  >
    <Icon size={24} />
  </motion.div>
)

export default function TravelServices() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleBookNowClick = (title) => {
    setSelectedServiceTitle(title)
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    setFormData({ name: "", phone: "", email: "" }) // Reset form data
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const phoneNumber = "+919668504726" // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `🌍 Service Inquiry: ${selectedServiceTitle}\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}`
    )
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    window.open(whatsappUrl, "_blank")
    handleClosePopup() // Close popup after submission
  }

  return (
    <section className="relative min-h-screen bg-gray-900 py-20 px-4 overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <FloatingIcon key={index} icon={item.icon} delay={item.delay} duration={item.duration} />
        ))}
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-2 bg-blue-100 rounded-full mb-4"
          >
            <Compass className="w-8 h-8 text-blue-600" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Our Premium Services
          </h2>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of travel services designed to make your journey seamless, memorable, and
            extraordinary. From flights to destination weddings, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="h-full bg-white backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.gradient}/ opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>

                      {/* Floating Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: service.id * 0.1 }}
                        className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      >
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: service.id * 0.1 + 0.3 }}
                        className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: service.id * 0.1 + 0.4 }}
                        className="text-gray-600 mb-6 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: service.id * 0.1 + 0.5 }}
                      >
                        <Button
                          className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-semibold py-3 rounded-xl`}
                          onClick={() => handleBookNowClick(service.title)}
                        >
                          Book Now
                        </Button>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-100 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Contact our travel experts today and let us create an unforgettable experience tailored just for you.
            </p>
            <Link to="/book"  >
            <Button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
              Get Started Today
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Booking Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-2xl relative w-full max-w-md"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book {selectedServiceTitle}</h2>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-lg font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="e.g., +919876543210"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Submit via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  )
}