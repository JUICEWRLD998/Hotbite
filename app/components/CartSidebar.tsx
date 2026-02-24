"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartSidebar() {
  const { items, isCartOpen, setCartOpen, updateQuantity, removeItem, totals } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleQuantityChange = (uniqueId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity <= 0) {
      removeItem(uniqueId);
    } else {
      updateQuantity(uniqueId, newQuantity);
    }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-[#1a1a1a] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#c22929]" size={24} />
                <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-gray-700 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add some delicious items to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.uniqueId}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-[#242424] rounded-xl p-4 flex gap-4"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm mb-1 truncate">
                          {item.name}
                        </h3>
                        {item.size && (
                          <p className="text-gray-400 text-xs capitalize mb-2">
                            Size: {item.size}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-[#c22929] font-bold">${item.price}</span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity, -1)}
                              className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-white font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity, 1)}
                              className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.uniqueId)}
                        className="text-gray-500 hover:text-red-500 transition-colors self-start"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Totals & Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-800 p-6 bg-[#141414]">
                {/* Totals */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Tax (5%)</span>
                    <span>${totals.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Delivery Fee</span>
                    <span>${totals.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-gray-700">
                    <span>Total</span>
                    <span className="text-[#c22929]">${totals.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={handleCheckout}
                  className="w-full bg-[#c22929] hover:bg-[#a82222] text-white py-3 rounded-full font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal Placeholder */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/80 z-60 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Checkout Coming Soon!</h3>
            <p className="text-gray-400 mb-6">
              The checkout feature will be implemented in the next step. Your cart is saved!
            </p>
            <button
              onClick={() => setShowCheckout(false)}
              className="w-full bg-[#c22929] hover:bg-[#a82222] text-white py-3 rounded-full font-semibold transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
