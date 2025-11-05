"use client";

import React from "react";

export const KeyBenefitsSection = () => {
  return (
    <section className="w-full bg-white pt-[74px] lg:pt-[90px]">
      <div className="mx-auto max-w-[1280px] px-[16px] sm:px-[32px] lg:px-[40px] xl:px-0">
        {/* 🟣 Section Title */}
        <h2 className="font-poppins font-semibold md:font-bold text-[#000000] text-[25px] md:text-[32px] leading-[40px] tracking-[0.032px] text-left mb-[10px] md:mb-[14px]">
          Key Benefits
        </h2>

        {/* 🟣 Description */}
        <p className="font-poppins font-normal text-[#060414] text-[14px] md:text-[16px] leading-[22px] md:leading-[30px] text-left  ">
          Our cutting-edge Modular Data Center solutions enable to protect
          mission-critical data while maintaining the highest levels of security
          and operational reliability.
        </p>
      </div>
    </section>
  );
};
