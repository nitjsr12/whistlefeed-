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
        <div className="absolute right-0 z-50 mt-14 flex min-h-screen flex-col items-center justify-center space-y-4 pt-28 lg:w-8/12 lg:p-12 lg:pt-0">
          <div className="relative mx-auto w-full max-w-xs">
            {/* Mobile Mockup */}
            <div
              className="relative h-[460px] w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/images/Subtract.png')",
              }}
            >
              {/* Content Inside the Mobile Mockup */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Logo */}
                <img
                  className="pt-2"
                  src="/images/whistlefeedlogo.png"
                  alt="WhistleFEED Logo"
                  className="mb-4 w-32"
                />
                <h1 className="text-2xl font-bold tracking-wide text-[#DF8600]">
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
                    <p className="mt-6 text-sm font-bold text-white">
                      WhistleFEED is a cutting-edge programmatic ad platform
                      made in India, empowering advertisers with{" "}
                      <span style={{ color: "#DF8600 " }}>
                        data-driven optimization and programmatic solutions{" "}
                      </span>{" "}
                      (Open Real Time Bidding)
                    </p>
                  </SwiperSlide>

                  <SwiperSlide>
                    <p className="mt-4 text-sm font-bold text-white">
                      With
                      <span style={{ color: "#DF8600 " }}>
                        200+ smart algorithms,
                      </span>
                      our advanced technology ensures{" "}
                      <span style={{ color: "#DF8600 " }}>
                        maximum reach, high-quality engagement, and superior ROI{" "}
                      </span>
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
