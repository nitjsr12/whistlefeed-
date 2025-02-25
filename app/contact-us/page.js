"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { faqData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling content visibility

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 100); // Delay for smooth effect

    setTimeout(() => {
      setShowSidebar(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  }, []);

  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  const scriptCode = `<script>
document.write('<script src="https://pixel.whistle.mobi/initialize_pixel.js?v=' + Date.now() + '"\\><\\/script>');
</script>`;
  const conversionCode = `<script>document.write('<script src="https://pixel.whistle.mobi/track_pixel.js?v=' + Date.now() + '"\><\/script>');</script>`;

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
        <source src="/video/Earth_Side_Rotation.webm" type="video/webm" />
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
          <div className="right-0 z-50 mt-14 flex min-h-screen flex-col items-center justify-center space-y-4 pt-28 lg:absolute lg:w-8/12 lg:p-12 lg:pt-0">
            <div className="mb-8 md:mb-0">
              <h1
                className="text-center text-4xl font-bold"
                style={{ color: "#DF8600" }}
              >
                Discuss Unlimited Communication <br />
                <span className="inline-block w-full text-center">
                  Solutions!
                </span>
              </h1>
              <p className="mt-3 text-center text-lg font-bold text-white">
                Write to us at :{" "}
                <a href="mailto:info@whistle.mobi" className="text-wlOrange">
                  info@whistle.mobi{" "}
                </a>
              </p>
              <p className="mt-3 text-center text-lg font-bold text-white">
                Call / WhatsApp us:{" "}
                <a href="tel:9632002641" className="text-wlOrange">
                  +91 97695 21222
                </a>{" "}
              </p>
              <div className="mt-8 flex justify-center">
                <Image
                  alt="A mobile phone displaying an interstitial ad with a call to action button"
                  className="rounded-lg shadow-lg"
                  height="300"
                  src="/images/mapLocations.png"
                  width="500"
                />
              </div>
              <p className="mt-3 text-center text-lg font-bold text-white">
                Trusted by <span style={{ color: "#DF8600" }}>400+</span>{" "}
                partners
              </p>
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
