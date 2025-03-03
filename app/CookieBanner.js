"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookies were already accepted
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render if accepted

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[93%] max-w-[1500px] bg-white text-black text-center p-4 z-50 border-2 border-black rounded-2xl shadow-lg font-montserrat lg:py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 md:space-y-0 px-6 lg:gap-x-12">
        {/* Left Section: Text */}
        <div className="flex-1 text-left mb-2 md:mb-4">
          <p className="text-lg md:text-xl font-bold">
            We use cookies to enhance your experience on our site.
          </p>
          <p className="text-sm md:text-base mt-1">
            By continuing to use this site, you agree to our use of cookies in
            accordance with our{" "}
            <Link
              href="/privacy-policy"
              className="underline font-semibold hover:text-gray-700 transition"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleAccept}
            className="bg-[#3D36EE] text-xl text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#3530d1] focus:outline-none transition duration-300 px-10"
          >
            Accept
          </button>
          <Link href="/privacy-policy">
            <button className="text-black text-xl border-2 border-black py-3 px-6 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
