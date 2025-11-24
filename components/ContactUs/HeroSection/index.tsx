"use client";

import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full  bg-white lg:pt-[148px] pt-[23px] md:pt-[44px] pb-[60px] lg:pb-[110px] overflow-hidden">
      {/* Container */}
      <div className="px-[18px] sm:px-[80px] relative">
        {/* Breadcrumb */}
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
            text-[#121926]/65
          "
          style={{ maxWidth: "675px" }}
        >
          Delivers innovative, customer-focused solutions. 
          We combine expertise and creativity to help you succeed.
        </p>
      </div>

   
      {/* Mobile version - centered under text */}
      <div className="mt-[25px] flex justify-center lg:hidden">
        <Image
          src="/images/contact-icon.png" // replace with your actual file path
          alt="contact icon"
          width={132}
          height={132}
          className="object-contain"
        />
      </div>

      {/* Desktop version - positioned on right */}
      <div className="hidden lg:block absolute right-[63px] xl:right-[80px] top-[73px]">
        <Image
          src="/images/contact-icon.png" 
          alt="contact icon"
          width={188}
          height={188}
          className="object-contain"
        />
      </div>
    </section>
  );
};
