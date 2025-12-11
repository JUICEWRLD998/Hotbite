import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
