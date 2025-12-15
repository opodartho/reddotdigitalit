"use client";

import { Check } from "lucide-react";

type Benefit = {
  title: string;
  desc: string;
};

export default function KeyBenefitsGrid({
  benefits,
}: {
  benefits: Benefit[];
}) {
  return (
    <section className="w-full bg-white pt-12 md:pt-11 max-w-[1440px] mx-auto">
      <div className="px-[16px] sm:px-[80px]">
        {/* ✅ Responsive grid with equal-height rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px] auto-rows-fr">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                flex
                bg-[#F9F7FD]
                rounded-[8px]
                shadow-[0_12px_48px_rgba(49,1,139,0.09)]
                p-[18px] pb-[24px] md:p-[20px] md:pb-[30px]
                transition-transform duration-300 ease-out
                hover:-translate-y-[2px]
              "
            >
              {/* 🔴 Icon */}
              <div className="flex items-start justify-start w-[30px] h-[30px] mr-[24px] shrink-0">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#E52445]">
                  <Check size={18} color="#fff" strokeWidth={3} />
                </div>
              </div>

              {/* 📝 Text */}
              <div className="flex flex-col justify-start">
                <h3 className="font-poppins font-medium text-[18px] leading-[26px] text-[#060414] mb-[10px]">
                  {item.title}
                </h3>
                <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#121926]/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
