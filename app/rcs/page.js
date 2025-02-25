"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import SideMenu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import { articlesLists } from "@/utils/data";
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

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 5000); // Delay for smooth effect
  });

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
        <source src="/video/Interceptor_Earth_Static.webm" type="video/webm" />
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

      {showContent && (
        <div className="absolute right-0 z-50 flex h-screen w-8/12 flex-col items-center justify-center space-y-4 p-12 transition-all ease-in-out">
          <div className="text-center md:flex md:items-center md:space-x-8 md:text-left">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl font-bold" style={{ color: "#DF8600" }}>
                RCS Messaging
              </h1>
              <p className="mt-4 text-white">
                RCS Messaging Our RCS-powered channels provide direct access to
                a built-in audience, leveraging mobile carriers' vast networks
                instant connections with highly engaged customers
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold" style={{ color: "#ffff" }}>
                  Why RCS?
                </h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">
                      {" "}
                      “ Hyper-Personalized Messaging
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">
                      Geo-Targeting & Localization
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-2"
                      style={{ color: "#DF8600" }}
                    />
                    <span className="text-white">
                      Advanced Performance Insights{" "}
                    </span>
                  </li>
                </ul>
                <p className="mt-4 rounded-lg border-2 border-[#DF8600] p-4  text-white">
                  “RCS isn’t just messaging it is Conversational Commerce”
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-128 relative w-64">
                <Image
                  alt="A mobile phone displaying an interstitial ad with a call to action button"
                  className="rounded-lg shadow-lg"
                  height="300"
                  src="/images/rcs.png"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      )}
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
