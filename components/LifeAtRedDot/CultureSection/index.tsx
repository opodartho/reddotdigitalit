"use client";

import React from "react";
import { CultureCard } from "./CultureCard";


export default function CultureSection() {
  const cultureData = [
    {
      id: 1,
      icon: "/icons/creativity.png",
      title: "Creativity Matters",
      desc: "We invest in your learning and development with mentorship programs, training opportunities, and clear career progression paths.",
    },
    {
      id: 2,
      icon: "/icons/collaboration.png",
      title: "Collaboration First",
      desc: "Work with talented, friendly teammates in an environment that values diverse perspectives and open communication.",
    },
    {
      id: 3,
      icon: "/icons/inclusion.png",
      title: "Respect & Inclusion",
      desc: "Build solutions that make real impact for clients across industries, from startups to enterprise organizations.",
    },
    {
      id: 4,
      icon: "/icons/impact.png",
      title: "Driven by Impact",
      desc: "Because life outside work matters too. Enjoy flexible schedules, remote work options, and comprehensive benefits.",
    },
  ];

  return (
    <section
      className="relative w-full 
                 bg-gradient-to-br from-[#F0F7FF] via-[#FFFAFE] to-[#FFEBEF] mt-[68px] sm:mt-[92px] mb-[81px] sm:mb-[113px]"
    >
      {/* 🧭 Section Container */}
      <div className="mx-auto max-w-[1280px] px-[20px] sm:px-[32px] lg:px-[40px] xl:px-0 text-center py-[90px] sm:py-[118px]">
        {/* 🌿 Header */}
        <div className="mb-[46px] sm:mb-[78px]">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[32px] font-bold text-[#060414]">
            Our Culture
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#121926] font-normal mt-2 text-left sm:text-center">
            360° Automated Sales & Distribution Management
          </p>
        </div>

        {/* 🎴 Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                     gap-[24px] justify-items-center"
        >
          {cultureData.map((item) => (
            <CultureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
