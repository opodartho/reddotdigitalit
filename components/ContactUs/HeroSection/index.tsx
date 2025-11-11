"use client";

import React from "react";





export const HeroSection = () => {
  return (
    <section className="relative w-full bg-white pt-[23px] md:pt-[44px] pb-[60px] ">
      {/* Outer container to align content roughly like Figma */}
      <div className="px-[18px] sm:px-[80px]">
        {/* Breadcrumb Tag */}
        <div className="mb-[24px] md:mb-[38px]">
          <span
            className="
              inline-flex items-center justify-center 
              w-[74px] h-[26px] 
              text-[14px] font-normal leading-[21px] 
              text-[#121926] tracking-[0.032px]
              border border-[#ECF1FE] rounded-[17px] 
              bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)]
            "
          >
            Contact
          </span>
        </div>

        {/* Heading */}
          
        <h1
          className="
            font-poppins font-semibold 
            text-[#060414] text-[32px] md:text-[40px] 
            leading-[48px] mb-[12px]
          "
          style={{ maxWidth: "623px" }}
        >
          Contact With Us
        </h1>


        {/* Subheading */}
        <p
          className="
            font-poppins font-normal 
            text-[16px] md:text-[18px] leading-[30px] 
            text-[[#121926]]/65
          "
          style={{ maxWidth: "675px" }}
        >
          Delivers innovative, customer-focused solutions. We combine expertise
          and creativity to help you succeed.
        </p>
      </div>
    </section>
  );
};
