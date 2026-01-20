"use client";

import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pointer-events-none lg:fixed fixed z-1000 bottom-6 lg:bottom-6  right-6 flex  items-center justify-end">
      {" "}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="pointer-events-auto flex items-center lg:gap-2 rounded-full lg:border lg:border-gray-200 bg-white py-0.5 pr-1 pl-1 pt-1 pb-1 text-black opacity-100 shadow-lg transition-all hover:bg-gray-100 hover:opacity-100 hover:shadow-xl"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B3060]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <span className=" lg:pl-0.25 text-base font-semibold text-gray-800 lg:block hidden">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
