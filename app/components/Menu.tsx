"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  {
    id: "grilled",
    name: "Grilled",
    title: "Grilled",
    available: "Wrap, Bowl, Box",
    description:
      "Indulge in the perfect balance of crispy and cheesy with our Cheesy Crunch Wrap. Melted cheese meets fresh veggies and a touch of spice, all wrapped in a warm tortilla or served in a convenient box. Perfect for a quick bite or a satisfying meal!",
    ingredients:
      "Crispy tortilla, melted cheese, fresh salad, signature sauce, and a side of golden fries.",
    images: ["/kebab.jpg", "/burger.jpg", "/sandwich.jpg"],
  },
  {
    id: "crunchy",
    name: "Crunchy",
    title: "Crunchy",
    available: "Wrap, Bowl, Box",
    description:
      "Experience the ultimate crunch with our signature crispy bites. Golden-fried to perfection with a blend of spices that will leave you craving more. Served hot and fresh, just the way you like it!",
    ingredients:
      "Crispy coating, secret spice blend, fresh lettuce, tangy mayo, and pickled onions.",
    images: ["/burger.jpg", "/sandwich.jpg", "/kebab.jpg"],
  },
  {
    id: "classic",
    name: "Classic",
    title: "Classic",
    available: "Wrap, Bowl, Box",
    description:
      "Our timeless classics never go out of style. Crafted with traditional recipes and premium ingredients, these dishes bring back the authentic flavors you know and love.",
    ingredients:
      "Premium beef patty, fresh tomatoes, crisp lettuce, special sauce, and toasted buns.",
    images: ["/sandwich.jpg", "/kebab.jpg", "/burger.jpg"],
  },
  {
    id: "veggie",
    name: "Veggie Delight",
    title: "Veggie Delight",
    available: "Wrap, Bowl, Box",
    description:
      "Fresh, flavorful, and packed with nutrients. Our veggie options are designed for those who love their greens without compromising on taste. A healthy choice that doesn't skimp on flavor!",
    ingredients:
      "Grilled vegetables, hummus, fresh greens, feta cheese, and herb dressing.",
    images: ["/about.jpg", "/about1.jpg", "/home3.jpg"],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("grilled");
  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#0a0a0a] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c22929] relative inline-block">
            Our Menu
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
            The Choice is Yours
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Hotbite, we know that great food is all about variety. Whether you&apos;re a
          meat lover, a fan of crispy bites, or all about fresh veggies, we&apos;ve got
          something special for you.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 sm:px-6 py-2 text-base sm:text-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-[#c22929]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c22929]"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              {/* Left Side - Text Content */}
              <div className="w-full lg:w-2/5 order-2 lg:order-1">
                <motion.h4
                  className="text-2xl sm:text-3xl font-bold text-[#c22929] italic mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {currentCategory.title}
                </motion.h4>

                <motion.p
                  className="text-gray-400 text-sm mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <span className="font-semibold text-white">Available As:</span>{" "}
                  {currentCategory.available}
                </motion.p>

                <motion.p
                  className="text-gray-400 text-base leading-relaxed mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {currentCategory.description}
                </motion.p>

                <motion.p
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <span className="font-semibold text-white">Ingredients:</span>{" "}
                  {currentCategory.ingredients}
                </motion.p>
              </div>

              {/* Right Side - Images Grid */}
              <div className="w-full lg:w-3/5 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Left Image */}
                  <motion.div
                    className="relative h-[180px] sm:h-[220px] rounded-xl overflow-hidden border-2 border-white/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={currentCategory.images[0]}
                      alt={`${currentCategory.title} dish 1`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Top Right Image - Larger */}
                  <motion.div
                    className="relative h-[180px] sm:h-[220px] row-span-2 rounded-xl overflow-hidden border-2 border-white/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    style={{ height: "auto", minHeight: "380px" }}
                  >
                    <Image
                      src={currentCategory.images[2]}
                      alt={`${currentCategory.title} dish 3`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Bottom Left Image */}
                  <motion.div
                    className="relative h-[180px] sm:h-[220px] rounded-xl overflow-hidden border-2 border-white/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={currentCategory.images[1]}
                      alt={`${currentCategory.title} dish 2`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
