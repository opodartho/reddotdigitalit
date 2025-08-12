import React from "react";
import Image from "next/image";

const TransformSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6">
      {/* Gradient background */}
      <div className="relative bg-gradient-to-r from-[#f5f9f6] via-[#f8f5f9] to-[#fdf5f8] rounded-3xl px-8 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 --font-inter weight-600">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed mt-10 --font-poppins">
              We are committed to excellence in delivering software solutions.
              Our talented team brings years of experience across various
              technology domains, ensuring we meet and exceed client
              expectations.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
              Get Started
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute right-10 -top-120 w-[500px] h-[750px] rotate-[-5deg] z-10">
              <Image
                src="/images/phones.png"
                alt="App Screenshot 1"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransformSection;
