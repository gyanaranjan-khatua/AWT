"use client"
import { motion } from "framer-motion"
import { Shield, Award, Clock, Users, ChevronRight, Sparkles, Target, Heart, Zap } from "lucide-react"
import aboutimg from '../assets/airticket.jpg'
import bgcar from '../assets/cruise.jpg'
import { Link } from 'react-router-dom'
const AboutContent = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const stats = [
    { number: "10,000+", label: "Travelers Assisted", icon: Users },
    { number: "1,000+", label: "Destinations Covered", icon: Award },
    { number: "24/7", label: "Global Support", icon: Clock },
    { number: "Top-Rated", label: "Customer Satisfaction", icon: Shield },
  ];


  const values = [
    {
      icon: Sparkles,
      title: "Personalized Experiences",
      description: "Crafting unique itineraries that cater to your individual travel dreams.",
    },
    {
      icon: Target,
      title: "Seamless Planning",
      description: "From flights to accommodations, we handle every detail for a stress-free journey.",
    },
    {
      icon: Heart,
      title: "Customer-First Approach",
      description: "Your satisfaction is our priority, ensuring comfort and joy at every step.",
    },
    {
      icon: Zap,
      title: "Innovation in Travel",
      description: "Utilizing cutting-edge tools to provide efficient and memorable travel solutions.",
    },
  ];


  return (
    <>
      <div className=" min-h-screen overflow-hidden bg-white text-gray-900"> {/* Dark background added here */}
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-5">
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              className="flex flex-col md:flex-row items-center md:space-x-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Text Section */}
              <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
                <motion.div
                  className="inline-flex items-center gap-2 shadow-lg backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-400 mb-6" /* Adjusted for dark theme */
                  variants={scaleVariants}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Our Story
                </motion.div>

          <motion.h1
  className="text-4xl md:text-4xl text-gray-900 roboto lg:text-5xl font-extrabold mb-6 leading-tight"
  variants={itemVariants}
>
  About{" "}
  <span className="text-red-500">
    Aquilo <span className="text-red-500">World Tour LLP</span>
  </span>
</motion.h1>

<motion.p className="text-gray-900 text-lg md:text-xl mb-3 leading-relaxed" variants={itemVariants}>
  Aquilo World Tour LLP | Your Trusted Travel Partner for Seamless Global Journeys
</motion.p>



<motion.p className="text-gray-900 text-lg md:text-xl mb-3 leading-relaxed" variants={itemVariants}>
  With extensive experience in the travel industry and a dedicated team, we offer a wide range of services:
  <br /><br />
  - Customized Holiday & Tour Packages<br />
  - Hotel Reservation Services Worldwide<br />
  - Passport & Visa Assistance<br />
  - Air Ticket Booking (Domestic & International)<br />
  - Foreign Exchange & Travel Insurance
</motion.p>





                <motion.div variants={itemVariants}>
                  <Link to="/book">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"> {/* Darker gradient for button */}
                    Plan Your Trip
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Section with floating elements */}
              <motion.div className="md:w-1/2 relative" variants={fadeInUpVariants} initial="hidden" animate="visible">
                <div className="relative z-10">
                  <motion.div
                    className="absolute -top-4 -left-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg" /* Adjusted for dark theme */
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-200">Established 2010</span> {/* Adjusted for dark theme */}
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg" /* Adjusted for dark theme */
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-gray-200">Your Travel Partner</span> {/* Adjusted for dark theme */}
                    </div>
                  </motion.div>

                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-700" /* Darker border */
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={aboutimg}
                      alt="Happy people shaking hands, symbolizing trust and partnership"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-gray-950 lg:px-8 relative"> {/* Darker background */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800 backdrop-blur-sm rounded-sm p-6 shadow-lg border-t-2 border-blue-600 hover:shadow-xl transition-all duration-300" /* Darker card background, brighter border */
                    variants={fadeInUpVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="shadow-lg w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gray-700"> {/* Darker icon background */}
                      <IconComponent className="w-6 h-6 text-sky-400" /> {/* Brighter icon color */}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.number}</h3> {/* Adjusted for dark theme */}
                    <p className="text-gray-400">{stat.label}</p> {/* Adjusted for dark theme */}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          className="py-16 px-6 lg:px-8 relative text-white bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bgcar})` }} // Replace with your image path
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div> {/* Slightly more opaque overlay */}

          {/* Existing radial pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-10"></div> {/* More subtle pattern */}

          <motion.div
            className="max-w-7xl mx-auto relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold roboto mb-4 text-white"> {/* Adjusted for dark theme */}
                Our Core Values
              </h2>
              <p className="text-gray-300 max-w-2xl text-lg mx-auto"> {/* Adjusted for dark theme */}
                These values drive everything we do at JetSetGO—from how we curate
                your journey to how we ensure every moment is extraordinary.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-900/70 shadow-lg backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300" /* Darker card, subtle border, and hover */
                    variants={fadeInUpVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gray-900 shadow-lg w-12 h-12 rounded-full flex items-center justify-center mb-4"> {/* Darker icon background */}
                      <IconComponent className="w-6 h-6 text-sky-400" /> {/* Brighter icon color */}
                    </div>
                    <h3 className="text-xl text-white font-bold mb-2"> {/* Adjusted for dark theme */}
                      {value.title}
                    </h3>
                    <p className="text-gray-300">{value.description}</p> {/* Adjusted for dark theme */}
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black"> {/* Darker gradient for CTA section */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden" /* Darker card background */
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-1/2 p-8 md:p-12 text-gray-900"> {/* Adjusted for dark theme */}
                  <h2 className="text-3xl font-bold roboto  mb-4">Ready to Explore the World?</h2> {/* Adjusted for dark theme */}
                  <p className="text-gray-900 mb-6"> {/* Adjusted for dark theme */}
                    Join thousands of satisfied travelers who trust **World Tour LLP** for unforgettable journeys, seamless planning, and exceptional adventures—any destination, any dream.
                  </p>

                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"> {/* Darker gradient for button */}
                    <Link to='/book'>Start Your Adventure</Link>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-900 p-8 md:p-12 text-white"> {/* New darker, richer gradient */}
                  <h3 className="text-2xl font-bold roboto mb-4">World Tour LLP</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span>Expertly curated itineraries for every traveler</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span>Comprehensive support from booking to return</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span>Exclusive deals and personalized recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span>Unwavering commitment to your safety and enjoyment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

    </>
  )
}

export default AboutContent;