"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-64px)]">
          {/* Left Side - Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Authentic Flavors,{" "}
              <span className="text-[#c22929] relative">
                Unforgettable
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#c22929" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>{" "}
              Experience!
            </h1>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Savor the taste of perfection with every bite. From sizzling grills to mouthwatering 
              delights, we craft each dish with passion, fresh ingredients, and a whole lot of love. 
              Your cravings deserve the best, and that&apos;s exactly what we deliver.
            </motion.p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-[#c22929]/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c22929]/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/home3.jpg"
                  alt="Delicious food from Hotbite"
                  width={600}
                  height={350}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
