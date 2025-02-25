import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MobileTextSyncSlider() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second slide

  const slides = [
    "OUR EXPERTISE",
    "Smart Optimization & Bidding",
    "Precision Retargeting",
    "A Cookieless Platform",
  ];

  const descriptions = [
    "Leverage data-driven optimization for maximum ROI, intelligent automation, and efficient bidding across CPM, CPC, CPI, and CPA models.",
    "GAID-based retargeting ensures that ads reach high-intent audiences, maximizing engagement and conversions.",
    "200+ smart algorithms ensure privacy-first and sustainable advertisement.",
    "Our cookieless platform provides privacy-first advertising solutions.",
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Mobile Mockup with Swiper */}
      <div className="relative mx-auto w-full max-w-xs">
        <div
          className="relative h-[650px] w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: "url('/images/mobilemuckup.png')",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {/* Logo */}
            <img
              src="/images/whistlefeedlogo.png"
              alt="WhistleFEED Logo"
              className="mb-4 w-32"
            />

            {/* Swiper inside Mobile */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              initialSlide={1} // Start Swiper from second slide
              className="w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {slides.map((text, index) => (
                <SwiperSlide key={index}>
                  <p className="mt-4 text-xl font-bold text-orange-500">
                    {text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Synchronized Text Box */}
      <div className="w-full max-w-md rounded-lg border border-yellow-500 p-4 text-center">
        <p className="text-lg text-white md:text-xl">
          {descriptions[activeIndex] || descriptions[0]}{" "}
          {/* Fallback to first description instead of second */}
        </p>
      </div>
    </div>
  );
}
