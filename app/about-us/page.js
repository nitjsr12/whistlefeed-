"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import SideMenu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider";
import { faqData } from "@/utils/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling sidebar visibility

  // useEffect(() => {
  //     setTimeout(() => {
  //       setShowContent(true); // Show Sidebar with animation
  //     }, 4000); // Delay for smooth effect
  // });

  // Show Sidebar with smooth transition after Login
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 5000); // Delay for smooth effect

    setTimeout(() => {
      setShowSidebar(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  });

  // Play rotation video after intro finishes
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source
          src="/video/Earth_Fighter_Rocket_Earth_Static.webm"
          type="video/webm"
        />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        ref={rotationVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? "block" : "none" }} // Hide until intro finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      <div className="relative z-0">
        {showContent && (
          <div className="absolute right-0 z-10 mt-14 flex min-h-screen w-full flex-col items-center justify-center space-y-4 p-6 pt-28 md:z-auto  md:w-10/12 lg:z-50 lg:w-8/12 lg:p-12 lg:pt-0">
            <div className="relative mx-auto w-full max-w-xs">
              {/* Mobile Mockup */}
              <div
                className="relative h-[460px] w-full  overflow-hidden rounded-3xl bg-cover bg-center shadow-lg md:h-[300px]"
                style={{
                  backgroundImage: "url('/images/Subtract.png')",
                }}
              >
                {/* Content Inside the Mobile Mockup */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  {/* Logo */}
                  <image
                    className="mb-4 w-32 pt-2"
                    src="/images/whistlefeedlogo.png"
                    alt="WhistleFEED Logo"
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
                          maximum reach, high-quality engagement, and superior
                          ROI{" "}
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

      {showSidebar && (
        <Sidebar
          className="z-50 translate-x-0 transition-transform duration-1000"
          isHomepage={false}
          footer={footer}
        />
      )}
      {/* <SideMenu/> */}
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}
export default Page;
