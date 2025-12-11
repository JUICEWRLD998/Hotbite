"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#121212] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c22929] relative inline-block">
            Contact Us
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="#c22929"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Get in Touch with Us!
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-lg sm:text-xl text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a question or want to make a reservation? We&apos;d love to hear from you!
        </motion.p>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Contact Details */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#c22929] rounded-2xl p-8 h-full">
              <h4 className="text-2xl font-bold text-white mb-8">Contact Details</h4>
              
              <div className="space-y-6">
                {/* Restaurant Name */}
                <div>
                  <p className="text-xl font-bold text-white">Hotbite</p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-white mt-1 shrink-0" />
                  <p className="text-white/90">123 Food Street, Lagos, Nigeria</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-white shrink-0" />
                  <p className="text-white/90">+234 123 456 7890</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-white shrink-0" />
                  <p className="text-white/90">contact@hotbite.com</p>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-white shrink-0" />
                  <p className="text-white/90">Mon - Sun | 12:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c22929] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c22929] transition-colors"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c22929] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 123 456 7890"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c22929] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c22929] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-[#c22929] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
