"use client";

import React from "react";
import Image from "next/image";

export default function CaseStudyTestimonials() {
  return (
    <section className="w-full flex justify-center bg-white mt-[120px]  px-[18px] lg:px-20 ">
      {/* 🟣 Centered container (1280px layout) */}
      <div className="w-full  flex flex-col">
        {/* 🔹 Title */}
        <h3 className="text-[32px] font-[700] text-[#000000] font-poppins mb-[14px]">
          Testimonials
        </h3>

        {/* 🔹 Subheading */}
        <p className="text-[16px] font-[400] leading-[30px] text-[#000000] mb-[51px] max-w-[948px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
          second-largest mobile network operator in Bangladesh, offering IT and
          digital solutions.
        </p>

        {/* 🔹 Testimonial Card */}
        <div className="bg-[#EFF2F6] rounded-[10px] pt-[24px] px-[30px] pb-[30px] flex flex-col ">
          {/* Avatar */}
          <div className="w-[40px] h-[40px] rounded-full bg-[#A5A5A5] mb-[36px]" />

          {/* Testimonial text */}
          <p className="text-[14px] font-[400] leading-[26px] text-[#000000] max-w-[1209px] mb-[16px] ">
            RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited,
            the second-largest mobile network operator in Bangladesh, offering IT
            and digital solutions. RedDot Digital Limited is a 100% subsidiary of
            Robi Axiata Limited, the second-largest mobile network operator in
            Bangladesh, offering IT and digital solutions.
          </p>

          {/* Author info */}
          <div>
            <h4 className="text-[14px] font-[500] leading-[30px] text-[#000000]">
              Md. Monirul Islam
            </h4>
            <p className="text-[14px] font-[400] leading-[30px] text-[#000000] ">
              CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
