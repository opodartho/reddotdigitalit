"use client";

import React from "react";
import dynamic from "next/dynamic";

export const LocationSection = () => {
  // Dynamically import the map to disable SSR
  const MapWithPin = dynamic(() => import("./MapWithPin"), {
    ssr: false,
  });

  return (
    <section className="w-full bg-white pb-[24px] md:pb-[48px]">
      <div className="px-[16px] sm:px-[80px] flex flex-col lg:flex-row  justify-between items-start lg:gap-[80px]">
        {/* 🗺️ LEFT — Map */}
        <div className="w-full lg:container [634px]">
          <MapWithPin />
        </div>


        {/* 🏢 RIGHT — Text */}
        <div className="w-full lg:container [597px] flex flex-col justify-center mt-[90px]  lg:mt-[66px] lg:mb-[40px]">
          {/* Heading */}
          <h2 className="text-[25px] md:text-[32px] leading-[40px] font-normal  text-[#060414]  mb-[16px] md:mb-[31px]">
            Our Location
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] text-[#121926]/85 mb-[22px] md:mb-[57px] container [450px]">
            We foster seamless collaboration through open communication and transparency.
            Our flexible partnership model adapts to your needs and goals.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Registered Office */}
            <div >
              <h3 className="text-[20px] md:text-[24px] font-medium  text-[#060414] leading-[40px] mb-2">
                Registered Office
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[22px] font-normal text-[#121926]/85 container [262px] mb-[20px] sm:mb-0">
                Ward 03, Holding B-2, Bangabandhu Hi-Tech City, <br />
                Kaliakair, Gazipur, Dhaka – 1751, Bangladesh
              </p>
            </div>

            {/* Corporate Office */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-medium  text-[#060414]  leading-[40px] mb-2">
                Corporate Office
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[22px] font-normal text-[#121926]/85 container [252px]">
                57 & 57/A, Uday Tower (15th Floor), <br />
                Gulshan 1, Gulshan Avenue, Dhaka 1212, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
