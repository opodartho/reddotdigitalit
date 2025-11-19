"use client";

import React from "react";
import { GoogleMap } from "./GoogleMap";

export const LocationSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="  px-[16px] sm:px-[80px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
        {/* 🗺️ LEFT — Map */}
        <div className="w-full lg:container [643px]">
          < GoogleMap />
        </div>

        {/* 🏢 RIGHT — Text */}
        <div className="w-full lg:container [597px] flex flex-col justify-center">
          <h2 className="text-[25px] md:text-[32px] leading-[40px] font-normal text-[#060414] mb-[16px] md:mb-[31px]">
            Our Location
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] text-[#121926]/85 mb-[22px] md:mb-[57px] container [450px]">
            We foster seamless collaboration through open communication and
            transparency. Our flexible partnership model adapts to your needs
            and goals.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div >
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#060414] mb-2">
                Registered Office
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[26px] text-[#121926]/85 container [262px]">
                Ward 03, Holding B-2, Bangabandhu Hi-Tech City,
                <br />
                Kaliakair, Gazipur, Dhaka – 1751, Bangladesh
              </p>
            </div>

            <div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#060414] mb-2">
                Corporate Office
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[26px] text-[#121926]/85 container [262px]">
                57 & 57/A, Uday Tower (15th Floor),
                <br />
                Gulshan 1, Gulshan Avenue, Dhaka 1212, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
