import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./context/CartContext";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Hotbite - Savor the Flavor",
  description: "Order your favorite hot bites online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={righteous.variable}>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
