import React from "react";
import Image from "next/image";

const TransformSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6">
      {/* Gradient background */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#f5f9f6] via-[#f8f5f9] to-[#fdf5f8] px-8 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="--font-inter weight-600 mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="--font-poppins mt-10 mb-6 leading-relaxed text-gray-600">
              We are committed to excellence in delivering software solutions.
              Our talented team brings years of experience across various
              technology domains, ensuring we meet and exceed client
              expectations.
            </p>
            <button className="inline-flex items-center rounded-lg bg-red-500 px-8 py-3 text-white shadow-md transition hover:bg-red-600">
              Get Started
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -top-120 right-10 z-10 h-[750px] w-[500px] rotate-[-5deg]">
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
