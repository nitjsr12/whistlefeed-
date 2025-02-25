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
            <div className="text-center sm:px-9 md:mt-10 md:flex md:items-center md:space-x-8 md:px-9 md:text-left">
              <div className="mb-8 md:mb-0">
                <h1 className="text-3xl font-bold text-[#DF8600] sm:text-4xl">
                  Standard Banner Ads
                </h1>
                <p className="mt-4 text-sm text-white sm:text-base">
                  WhistleFEED's banner ads maximize visibility and <br />
                  <span className="text-[#DF8600]">
                    across premium websites and apps.
                  </span>
                </p>
                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl font-bold text-[#DF8600] sm:text-2xl">
                    Why Choose WhistleFEED Banner Ads?
                  </h2>
                  <ul className="mt-4 space-y-4">
                    {[
                      "High Visibility",
                      "Advanced Targeting & Placements",
                      "Engaging Creatives",
                      "Performance-Driven – Optimized for high CTRs",
                    ].map((text, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-start"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="mr-2 text-[#DF8600]"
                        />
                        <span className="text-sm text-white sm:text-base">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <div className="relative h-auto w-48 sm:w-64">
                  <Image
                    alt="A mobile phone displaying an interstitial ad with a call to action button"
                    className="h-auto w-full rounded-lg shadow-lg md:h-6"
                    src="/images/bannerAds.png"
                    width={240}
                    height={430}
                    layout="intrinsic"
                  />
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
