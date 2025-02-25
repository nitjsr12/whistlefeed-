"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Page() {
  const [showContent, setShowContent] = useState(false); // State for controlling sidebar visibility

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  });

  return (
    <div className="relative z-0">
      {showContent && (
        <div className="absolute right-0 z-50 flex min-h-screen flex-col items-center justify-center space-y-4 pt-24 lg:w-8/12 lg:p-12 lg:pt-0">
          a{" "}
          <div className="relative mx-auto w-full max-w-xs">
            {/* Mobile Mockup */}
            <div
              className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/images/Subtract.png')",
              }}
            >
              {/* Content Inside the Mobile Mockup */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Logo */}
                <img
                  src="/images/whistlefeedlogo.png"
                  alt="WhistleFEED Logo"
                  className="mb-4 w-32"
                />
                <h1 className="text-3xl font-bold tracking-wide text-white">
                  A DSP Made in India
                </h1>
                {/* Swiper Text Slider */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full"
                >
                  <SwiperSlide>
                    <p className="mt-4 text-sm font-bold text-orange-500">
                      WhistleFEED is a cutting-edge programmatic ad platform
                      made in India, empowering advertisers with data-driven
                      optimization and programmatic solutions (Open Real Time
                      Bidding)
                    </p>
                  </SwiperSlide>

                  <SwiperSlide>
                    <p className="mt-4 text-sm font-bold text-orange-500">
                      With 200+ smart algorithms, our advanced technology
                      ensures maximum reach, high-quality engagement, and
                      superior ROI
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
