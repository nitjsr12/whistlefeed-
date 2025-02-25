"use client";
import React, { useState, useRef, useEffect } from "react";

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
          <div class="mx-auto max-w-xs rounded-lg border border-white bg-transparent p-6 shadow-lg">
            <div class="rounded-lg bg-transparent p-6 text-center">
              
\              <h2 class="mb-4 text-2xl font-bold text-orange-500">
                A DSP Made In India
              </h2>
              <p class="text-base text-white">
                WhistleFEED is a cutting-edge programmatic ad platform made in
                India, empowering brands, agencies, and publishers with
                <span class="font-bold text-orange-500">
                  data-driven optimization
                </span>{" "}
                and
                <span class="font-bold text-orange-500">
                  open programmatic solutions
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
