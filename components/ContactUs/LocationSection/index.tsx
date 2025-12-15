"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { LocationData } from "@/lib/api/contact/getLocationData";

export const LocationSection = ({ data }: { data: LocationData }) => {
  const MapWithPin = dynamic(() => import("./MapWithPin"), {
    ssr: false,
  });

  return (
    <section className="w-full bg-white py-[71px] md:py-[110px]">
      <div className="px-[16px] sm:px-[80px] flex flex-col lg:flex-row justify-between items-start lg:gap-[80px]">
        {/* 🗺️ LEFT — Map */}
        <div className="w-full lg:container [634px]">
          <MapWithPin data={data} />
        </div>

        {/* 🏢 RIGHT — Text */}
        <div className="w-full lg:max-w-[597px] flex flex-col justify-center mt-[90px] lg:mt-[66px] lg:mb-[40px]">
          <h2 className="text-[25px] md:text-[32px] leading-[40px] font-normal text-[#060414] mb-[16px] md:mb-[31px]">
            {data.heading}
          </h2>

          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] text-[#121926]/85 mb-[22px] md:mb-[57px] max-w-[450px]">
            {data.description}
          </p>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#060414] leading-[40px] mb-2">
                {data.offices.registered.title}
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[22px] font-normal text-[#121926]/85 max-w-[262px] mb-[20px] sm:mb-0">
                {data.offices.registered.address}
              </p>
            </div>

            <div>
              <h3 className="text-[20px] md:text-[24px] font-medium text-[#060414] leading-[40px] mb-2">
                {data.offices.corporate.title}
              </h3>
              <p className="text-[14px] md:text-[16px] leading-[22px] font-normal text-[#121926]/85 max-w-[252px]">
                {data.offices.corporate.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
