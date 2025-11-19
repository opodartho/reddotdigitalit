"use client";

import Image from "next/image";
import React from "react";

export default function CaseStudyOutcome() {
  const benefits = [
    { title: "Benefit 1", text: "Our Board of Directors brings together a team" },
    { title: "Benefit 2", text: "Our Board of Directors brings together a team" },
    { title: "Benefit 3", text: "Our Board of Directors brings together a team" },
    { title: "Benefit 4", text: "Our Board of Directors brings together a team" },
  ];

  return (
    <section className="w-full flex justify-center bg-white mt-[54px]  px-[18px] lg:px-20 ">
      {/* 🟣 Centered container */}
      <div className="w-full  flex flex-col  ">
        {/* 🔹 Title */}
        <h3 className="text-[32px] font-[700] text-black font-poppins mb-[14px]">
          Outcome
        </h3>

        {/* 🔹 Subheading */}
        <p className="font-poppins font-[700] text-[16px] leading-[30px] text-black mb-[51px] container [1291px]">
          RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
          second-largest mobile network operator in Bangladesh, offering IT and
          digital solutions.
        </p>

        {/* 🔹 Two main columns (text left, images right) */}
        <div className="flex justify-between flex-wrap">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">
            {/* top paragraph */}
            <p className="font-poppins font-[700] text-[16px] leading-[24px] text-[rgba(33,31,31,0.85)] mb-[32px] container [424px]">

              Our Board of Directors brings together a team of seasoned
              professionals, providing strategic direction and leadership. Their
              insights and expertise are the foundation of our company's success
              and long-term vision.
            </p>

            {/* benefits */}
            <div className="flex flex-col gap-[42px] container [427px]">
              {benefits.map((b, i) => (
                <div key={i}>
                  <h4 className="font-poppins font-[600] text-[18px] leading-[24px] text-[rgba(33,31,31,0.85)] mb-[4px]">
                    {b.title}
                  </h4>
                  <p className="font-poppins font-[700] text-[16px] leading-[24px] text-[rgba(33,31,31,0.85)]">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex gap-[24px] pt-[6px] pb-[21px] justify-end flex-wrap">
            <div className="relative w-[367px] h-[471px] rounded-[12px] overflow-hidden">
              <Image
                src="/images/outcome-1.jpg"
                alt="Outcome 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-[367px] h-[471px] rounded-[12px] overflow-hidden">
              <Image
                src="/images/outcome-2.jpg"
                alt="Outcome 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* need some changes */