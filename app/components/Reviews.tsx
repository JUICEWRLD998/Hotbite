"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "The flavors are absolutely incredible. Every bite feels like a celebration of authentic taste and quality.",
    author: "Sarah Chen",
    role: "Food Blogger",
    avatar: "/images/reviews/review1.jpg",
  },
  {
    quote:
      "Hotbite has become my go-to spot. The grilled kebabs are phenomenal and the service is always top-notch.",
    author: "Marcus Johnson",
    role: "Regular Customer",
    avatar: "/images/reviews/review2.jpg",
  },
  {
    quote:
      "I've tried every restaurant in the area, and Hotbite is hands down the best. Worth every visit.",
    author: "Emily Rodriguez",
    role: "Food Enthusiast",
    avatar: "/images/reviews/review3.jpg",
  },
  {
    quote:
      "The atmosphere is welcoming, the food is outstanding. These are the meals I recommend to everyone.",
    author: "James Wilson",
    role: "Local Reviewer",
    avatar: "/images/reviews/review4.jpg",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#121212] overflow-hidden scroll-mt-16">
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
            Reviews
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
            What Our Customers Say
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
          Join thousands of satisfied customers who love our food!
        </motion.p>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-[#c22929]/50 transition-all duration-300"
            >
              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="flex gap-1 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 + i * 0.05 }}
                    className="text-[#c22929] text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 italic">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c22929]/50"
                >
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <p className="font-bold text-white">{review.author}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
