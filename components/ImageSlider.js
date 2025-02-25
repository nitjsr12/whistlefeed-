"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    "/images/20251.png",
    "/images/Copy of Screenshot 2025-02-21 at 11.10.14 AM.png",
    "/images/20251.png",
  ];

  const thumbnails = [
    "/images/20251.png",
    "/images/20251.png",
    "/images/20251.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to a selected slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="container mx-auto max-w-screen-md p-4">
      {/* Event Labels */}
      <div className="mb-5 mt-4 text-center">
        <div className="inline-block rounded-full bg-yellow-500 px-4 py-2 text-xs text-black md:text-sm">
          <span className="font-bold">AD TECH 2024</span> /
          <span className="font-normal"> DATAMATRIXX 2023</span> /
          <span className="font-normal"> IAMAI 2023</span>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative">
        <div className="slideshow-container">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Group of people at a tech event"
              width={800} // Reduced size
              height={450}
              className={`h-auto w-full rounded-lg transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "absolute opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 bg-opacity-60 p-3 text-white shadow-md transition hover:bg-gray-700 md:right-4"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-5 flex justify-center space-x-2">
        {thumbnails.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt="Thumbnail of the event"
            width={60} // Reduced size
            height={60}
            className={`h-auto w-16 cursor-pointer rounded-lg border-2 transition md:w-20 ${
              index === currentIndex ? "border-blue-500" : "border-gray-300"
            } hover:opacity-80`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
