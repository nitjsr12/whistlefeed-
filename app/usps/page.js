"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { caseStudy } from "@/utils/data";
import Image from "next/image";
import MobileTextSyncSlider from "@/components/MobileTextSyncSlider";
function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const [footer, setFooter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded card
  const [activeIndex, setActiveIndex] = useState(0); // Initially set to 0
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

  // Use effect to set the initial slide to 1 after render
  useEffect(() => {
    setActiveIndex(1); // Start from the second slide
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 5000);

    setTimeout(() => {
      setShowSidebar(true);
    }, 3000);
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  const handleReadMore = (index) => {
    setExpandedIndex(index); // Expand the selected card
  };

  const handleBack = () => {
    setExpandedIndex(null); // Collapse the expanded card
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      >
        <source
          src="/video/Earth_Fighter_Rocket_Earth_Static.webm"
          type="video/webm"
        />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? "block" : "none" }}
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      <div className="relative z-0">
        {showContent && (
          <div className="absolute right-0 z-50 flex min-h-screen flex-col items-center justify-center space-y-4 lg:w-8/12 lg:p-12">
            <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-x-8 md:space-y-0">
              <MobileTextSyncSlider />
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
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}

export default Page;
