"use client";

import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 right-6 flex h-screen w-screen items-center justify-end opacity-30 hover:opacity-100">
      {" "}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2  rounded-full border border-gray-200 bg-white py-0.5 pr-4 pl-0.5 text-black shadow-lg  transition-all hover:shadow-xl "
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
          <span className="ml-1 pl-0.25 text-base font-semibold text-gray-800">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
