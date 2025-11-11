"use client";

import React from "react";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Improved operational agility",
    desc: "Cloud-based systems enable faster adaptation to changing business requirements. Teams can deploy, test, and scale applications on demand without infrastructure limitations.",
  },
  {
    title: "Reduced IT costs",
    desc: "By moving to the cloud, organizations lower infrastructure expenses and maintenance overheads. Pay-as-you-go models bring financial flexibility and efficiency.",
  },
  {
    title: "Enhanced data security",
    desc: "We ensure that data remains protected through advanced encryption, identity management, and compliance with international security standards.",
  },
  {
    title: "Scalable business continuity",
    desc: "With cloud redundancy and disaster recovery frameworks, businesses experience uninterrupted operations and reliable data accessibility anytime, anywhere.",
  },

];

export const KeyBenefitsGrid = () => {
  return (
    <section className="w-full bg-white pt-12 md:pt-11">
      <div className="mx-auto max-w-[1280px] px-[16px] sm:px-[32px] lg:px-[40px] xl:px-0">
        {/* 🟣 Responsive grid container */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] auto-rows-fr">
  {benefits.map((item, index) => (
    <div
      key={index}
      className="flex bg-[#F9F7FD] bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF] rounded-[8px] shadow-[0_12px_48px_rgba(49,1,139,0.09)] p-[20px] lg:h-[200px]"
    >
      {/* Left column - icon */}
      <div className="flex items-start justify-start w-[30px] h-[30px]  mr-[24px] shrink-0">
        <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#E52445]">
          <Check size={18} color="#fff" strokeWidth={3} />
        </div>
      </div>

      {/* Right column - text */}
      <div className="flex flex-col justify-start">
        <h3 className="font-poppins font-medium text-[18px] leading-[26px] text-[#1A162F] mb-[10px]">
          {item.title}
        </h3>
        <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#1A162F]/70 lg:max-w-[530px]">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
