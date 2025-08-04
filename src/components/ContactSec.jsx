"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiMapPin, FiPhone, FiSend, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    const phoneNumber = "919668504726"
    const message = encodeURIComponent(
      `🌍 *Travel Trip Booking*\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.email}\n💬 Message: ${formData.message}`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")

    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Let's Connect</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Send me a message!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-l-4 border-cyan-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleWhatsAppClick} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.button>

              {/* Thank You Message */}
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-green-400 text-sm mt-3 text-center"
                >
                  ✅ Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-l-4 border-cyan-500">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-full text-blue-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <a
                      href="mailto:aqualoworldtour@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      aqualoworldtour@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-full text-blue-400">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <a href="tel: +919668504726" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +919668504726
                    </a>
                    <br />
                     <a href="tel:+917008632718" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +917008632718
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-full text-blue-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-300">Plot No-Scr 25, Back Side of Boyonika Bhawan,Unit-III </p>
                    <br />
                    <p className="text-gray-300">Kharvel Nagar Bhubaneswar, Odisha 751001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-l-4 border-cyan-500">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[{ icon: <FiTwitter />, url: "#" }, { icon: <FiLinkedin />, url: "#" }, { icon: <FiGithub />, url: "#" }].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-3 bg-gray-700 rounded-full text-gray-300 hover:bg-purple-900 hover:text-purple-300 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
