"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import dommyimg from "./../assets/dommyman.png"
import { Link } from "react-router-dom"
const testimonials = [
  {
    id: 1,
    name: "Abhilash Panda",
    // role: "Business Owner",
    // company: "Tech Solutions Ltd.",
    content:
      "Jet set go for me is awesome . They planned my Dubai trip nicely. My entire trip was awesome . They arranged everything for me like hotel, transport. Air fair … all they have arranged …",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 2,
    name: "Santilata Maharana",
    // role: "Newlyweds",
    // company: "Destination Wedding",
    content:
      "he Vietnam trip through ' Jet set go' was extremely satisfactory. We have enjoyed a lot during our visit to various site seeing spots as well as our stay in cruise ship.. ",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 3,
    name: "Kalpana Satapathy",
    // role: "Travel Blogger",
    // company: "Wanderlust Chronicles",
    content:
      "Dear Biswa, I wanted to express my heartfelt gratitude to you for the exceptional service you provided during our Europe trip from Seamless booking to helpful guidance your tour planning exceeds our expectations.",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 4,
    name: "Prof. Pradeep Kumar Jena",
    // role: "Family Traveler",
    // company: "Family Vacation",
    content:
      "It was a great experience. Starting from the inception and initial planning and to the process of procuring obtaining VISA and all the itienary, places to visit, transportation, arrangement of lunch and dinner were excellent...",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 5,
    name: "sushanta mohanty",
    // role: "Corporate Executive",
    // company: "Global Enterprises",
    content:
      "Jet Set Go is a reliable and trustworthy travel agency in Odisha. Our family tour plan to Madurai, Rameshwaram Kanyakumari Tirubantapuram well organised by Mr. Biswa. Hotel accommodations were superb...",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 6,
    name: "Kalpana patro",
    // role: "Adventure Enthusiast",
    // company: "Solo Traveler",
    content:
      "Very nice,beautiful country Vietnam.The people are so good & polite . Jet set go is perfect traveller for the trip.",
    avatar: dommyimg,
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const Testimonial = () => (
  <section className=" relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
    </div>

    {/* Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

    <div className="relative max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6"
        >
          <span className="text-white text-sm font-medium tracking-wide">CLIENT EXPERIENCES</span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6 tracking-tight"
        >
          What Our Travelers
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Are Saying</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="flex items-center justify-center mb-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our clients have to say about their
          <span className="text-blue-300 font-semibold"> amazing travel experiences</span> with JetSetGO.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="relative  "
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
            bulletClass: "swiper-pagination-bullet !w-3 !h-3 !bg-slate-600 !opacity-50 transition-all duration-300",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-gradient-to-r !from-blue-500 !to-cyan-500 !opacity-100 !scale-125",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="pb-20"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="!w-96 my-10">
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3,
                }}
                className="group relative h-full"
              >
                {/* Card Background with Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center mb-8 mt-4">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full border-2 border-white/30 shadow-xl object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-blue-300 font-medium text-sm">{testimonial.role}</p>
                      <p className="text-slate-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="flex-1 text-slate-200 text-lg leading-relaxed mb-8 font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Rating and Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400 font-medium tracking-wider">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="testimonial-pagination flex justify-center items-center space-x-3 mt-8"></div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center flex justify-center mt-2 "
      >
        {/* <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="flex -space-x-2">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <img
                key={testimonial.id}
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-8 h-8 rounded-full border-2 border-white/50 shadow-lg"
                style={{ zIndex: testimonials.length - index }}
              />
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold">Join 2000+ Happy Travelers</p>
            <p className="text-slate-300 text-sm">Let JetSetGO plan your next adventure</p>
          </div>
        </div> */}
        <Link to="https://www.google.com/search?sca_esv=4280d836da54d7ab&rlz=1C1GCEJ_enIN976IN976&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E46da67bwjd8TrVnxQJkR7uO5jD4gmBsQAI18h649oMY46k6zjr-A5ZCJQJJpjf-6X4iVXIDZCkjV6P6o-fAmiul32OxhtKaGPX2oE2n7dnWG90emA%3D%3D&q=Jet+Set+Go+Holidays+Reviews&sa=X&ved=2ahUKEwih5aKLxuuOAxVeUGwGHXvYGA8Q0bkNegQIIhAE&cshid=1754117826547857&biw=1536&bih=730&dpr=1.25#lrd=0x3a19a798ab5adb8f:0xe0a210e0ffc58b38,3,,,," target="_blank" rel="noopener noreferrer">
        <h1 className="text-sm bg-gradient-to-r from-yellow-500 via-white to-orange-300 p-2 md:text-md lg:text-lg font-bold text-black rounded border border-white mt-10">
          Review In Google
        </h1>
        </Link>
      </motion.div>
    </div>

    <style jsx global>{`
      .animate-spin-slow {
        animation: spin 20s linear infinite;
      }
      
      .swiper-slide {
        transition: all 0.3s ease;
      }
      
      .swiper-slide-active {
        transform: scale(1.05);
      }
      
      .swiper-pagination-bullet {
        transition: all 0.3s ease !important;
      }
    `}</style>
  </section>
)

export default Testimonial
