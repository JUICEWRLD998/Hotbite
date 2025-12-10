"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a1a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-[#c22929] font-logo tracking-wide">
              Hotbite
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 relative py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Order Now Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-[#c22929] hover:bg-[#a82222] text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c22929]/30">
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="flex items-center justify-center gap-2 bg-[#c22929] hover:bg-[#a82222] text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 mt-2">
                <ShoppingBag size={18} />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
