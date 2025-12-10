"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "Burger",
    image: "/burger.jpg",
    description: "Juicy & Flavorful",
  },
  {
    name: "Sandwich",
    image: "/sandwich.jpg",
    description: "Fresh & Crispy",
  },
  {
    name: "Kebab",
    image: "/kebab.jpg",
    description: "Grilled to Perfection",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[#121212] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c22929] relative inline-block">
            Products
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C50 2 150 2 198 8" stroke="#c22929" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
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
            Delicious Choices, Made Just for You
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
          Explore our curated menu with fresh ingredients and bold flavors!
        </motion.p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl border-3 border-white shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[280px] sm:h-[300px] lg:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Product Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-white mb-1">{product.name}</h4>
                    <p className="text-gray-300 text-sm">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
