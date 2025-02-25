"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import Footer from "@/components/Footer/Footer";
import { faqData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
          <div className="absolute right-0 z-50 flex min-h-screen items-center justify-center space-y-4 p-12 lg:w-8/12 lg:flex-col">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl font-bold" style={{ color: "#DF8600" }}>
                Meta Inventories
              </h1>
              <p className="mt-4 text-white">
                Meta integration creates a closed-loop marketing system, Its a
                perfect blend of <br />
                performance marketing and customer engagement that drives higher
                ROI
              </p>
              <div className="mt-8">
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">
                      Automated Lead Collection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">Personalised Ads</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">Behavioural Analyis </span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">Cross platform Insights</span>
                  </li>
                </ul>
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
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}

export default Page;
