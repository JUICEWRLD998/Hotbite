"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#121212] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c22929] relative inline-block">
            About Us
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C50 2 150 2 198 8" stroke="#c22929" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side - Overlapping Images */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
              {/* First Image - Back */}
              <motion.div
                className="absolute w-[180px] sm:w-[260px] lg:w-[300px] h-[230px] sm:h-80 lg:h-[360px] left-[15%] sm:left-8 lg:left-0 top-4 sm:top-8"
                initial={{ rotate: -6 }}
                whileHover={{ rotate: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/about.jpg"
                    alt="About Hotbite - Our kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Second Image - Front */}
              <motion.div
                className="absolute w-[180px] sm:w-[260px] lg:w-[300px] h-[230px] sm:h-80 lg:h-[360px] right-[15%] sm:right-8 lg:right-0 bottom-4 sm:bottom-8"
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/about1.jpg"
                    alt="About Hotbite - Our food"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Passion for Great Food, Served with Love
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Hotbite, every meal is crafted to be unforgettable. With handpicked ingredients 
              and time-honored recipes, we serve dishes that warm your heart. From our kitchen 
              to your table — every bite tells a story of passion and love.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
