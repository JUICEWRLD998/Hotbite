import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-64px)]">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
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
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Savor the taste of perfection with every bite. From sizzling grills to mouthwatering 
              delights, we craft each dish with passion, fresh ingredients, and a whole lot of love. 
              Your cravings deserve the best, and that&apos;s exactly what we deliver.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c22929]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c22929]/20 rounded-full blur-2xl"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/home.jpg"
                  alt="Delicious food from Hotbite"
                  width={600}
                  height={350}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
