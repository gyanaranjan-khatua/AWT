"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dommyimg from "./../assets/dommyman.png";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    content:
      "Aquilo World Tour LLP handled our Thailand holiday package with exceptional care. From booking hotels to guided tours and visa assistance, everything was flawless. ",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    content:
      "Extremely professional and responsive team. Aquilo arranged my Europe business trip with smooth hotel bookings, quick visa processing, and forex support. ",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Rout",
    content:
      "We chose Aquilo World Tour LLP for our honeymoon in Bali. They took care of everything – flights, romantic resort stays, and sightseeing.",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Amitava Sen",
    content:
      "Thanks to Aquilo, our senior citizen group tour to Dubai went smoothly. The itinerary, hotel, visa assistance, and transportation were well-managed.",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 5,
    name: "Meena Nanda",
    content:
      "Aquilo World Tour LLP gave us the best deal on airfare and hotel combos for our Kerala vacation. Support team was always available for last-minute queries. ",
    avatar: dommyimg,
    rating: 5,
  },
  {
    id: 6,
    name: "Ajay Patra",
    content:
      "I needed urgent passport and visa help for a student visa to Canada. Aquilo handled everything fast and professionally. They are experts in travel documentation and guidance.",
    avatar: dommyimg,
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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
};

const TestimonialGrid = () => (
  <section className="relative min-h-screen bg-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Subtle Background Gradients */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-cyan-500/20 rounded-full blur-[100px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.p
          variants={itemVariants}
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-blue-500/20 border border-blue-500/30"
        >
          Client Experiences
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight"
        >
          What Our Travelers Are Saying
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto"
        >
          Hear directly from our clients about their incredible journeys and
          the experiences that made them unforgettable.
        </motion.p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: (testimonial.id - 1) * 0.1,
            }}
            whileHover={{ y: -8, scale: 1.02, rotate: "1deg" }}
            className="break-inside-avoid-column"
          >
            <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Quote Icon */}
              <svg
                className="absolute top-6 right-6 w-12 h-12 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <blockquote className="relative z-10 text-white text-lg leading-relaxed mb-6 font-light">
                "{testimonial.content}"
              </blockquote>

              {/* Footer */}
              <div className="relative z-10 flex items-center pt-4 border-t border-white/10">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-base font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <Link
          to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.6475768698812!2d85.83292995872193!3d20.275819100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70384186e41%3A0xe7cb6b8967352748!2sAquilo%20World%20Tour%20LLP!5e0!3m2!1sen!2sin!4v1754369183725!5m2!1sen!2sin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 text-lg font-bold text-black rounded-full bg-gradient-to-r from-orange-500 via-white to-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Review In Google
        </Link>
      </motion.div> */}
    </div>
  </section>
);

export default TestimonialGrid;