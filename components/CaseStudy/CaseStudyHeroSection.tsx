"use client";
import Image from "next/image";
import React from "react";

export default function CaseStudyHeroSection() {
  const info = [
    { label: "Company", value: "Telecash" },
    { label: "Area", value: "Custom Product" },
    { label: "Duration", value: "3 Month" },
    { label: "Industry", value: "Fintech" },
    { label: "Start Date", value: "13 March, 2025" },
  ];

  return (
    <section
      className="
        w-full flex flex-col justify-center 
        bg-[#FFFFFF] 
        pt-[120px] 
        px-[18px] lg:px-20 
        
      "
    >
      {/* 🔹 Bordered Container — matches Group 1171278533 */}
      <div
        className="
         

          flex flex-col self-start
          mb-[54px]
          

        "
      >
        {/* 🔸 Badge */}
        <div
          className="
            border border-[#ECF1FE] bg-white
            shadow-[0px_12px_48px_rgba(49,1,139,0.05)]
            rounded-[17px] px-[16px] py-[2px]
            mb-[24px] w-fit
          
          "
        >
          <span className="text-[14px] text-[#70738F] font-[400] leading-[21px]">
            Case Study
          </span>
        </div>

        {/* 🔸 Title */}
        <h1
          className="
            text-[#211F1F] font-[600] font-poppins
            text-[40px] leading-[48px]
            max-w-[623px]
           
          "
        >
          Crafting Digital Solutions with Purpose
        </h1>
      </div>

      {/* 🔹 Project Info Bar — Group 48098098 */}
      <div
        className="
          h-[128px] bg-[#F6F9FE]
          rounded-[12px] flex items-center justify-between
          px-[40px] mb-[80px] py-[40px]
        "
      >
        {info.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-col justify-between h-[64px]">
            <h4
              className="
                text-[16px] font-[600] leading-[32px]
                text-[rgba(0,0,0,0.85)]
              "
            >
              {item.value}
            </h4>
            <p
              className="
                text-[14px] font-[400] leading-[32px]
                text-[rgba(0,0,0,0.65)]
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* 🔹 Hero Image */}
      <div
        className="
          relative w-full  h-[483px] 
    
        "
      >
        <Image
          src="/images/case-study-hero-banner.jpg"
          alt="Case Study Hero Banner"
          fill
          className="object-cover rounded-[5px]"
          priority
        />
      </div>
    </section>
  );
}


/*removed the extra border */