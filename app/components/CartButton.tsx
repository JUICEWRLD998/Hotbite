"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { itemCount, toggleCart } = useCart();

  return (
    <motion.button
      onClick={toggleCart}
      className="relative flex items-center gap-2 bg-[#c22929] hover:bg-[#a82222] text-white px-5 py-2.5 rounded-full font-medium transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingBag size={18} />
      <span>Order Now</span>
      
      {/* Cart Count Badge */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-white text-[#c22929] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-[#121212]"
          >
            {itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
