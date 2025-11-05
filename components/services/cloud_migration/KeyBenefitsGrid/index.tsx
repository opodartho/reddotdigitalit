"use client";

import React from "react";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Location",
    desc: "Thanks to the cloud and the simplicity of remote access thus data can live virtually anywhere. Factors such as natural disaster vulnerability, proximity to fire departments, the building’s structural integrity and how easy it is for your staff to access the facility are all important considerations to ensure the actual integrity of the physical facility in which servers live.",
  },
  {
    title: "Physical Security",
    desc: "On-site security is just as crucial as the importance of data security. This includes making sure the facility utilizes 24/7 video surveillance, multi-layered access control, reinforced doors and walls and anything else that ensures no one is getting in who doesn’t need to be.",
  },
  {
    title: "Network Redundancy",
    desc: "Along with location and security, uptime is also an important factor. Choosing a data center with several levels of redundancy is a must, especially for those mission-critical servers.",
  },
  {
    title: "Financial Stability",
    desc: "The financial history of the data center provider also a crucial factor. Financial strength ensures the business sustainability of the data center provider.",
  },
  {
    title: "Scalibility",
    desc: "Data center must have the capability to handle the changes and expansions based on business demand. It’s important that the data center is flexible enough to meet current and future requirements.",
  },
  {
    title: "24/7 Support and Monitoring",
    desc: "When it comes to business’s daily operations, technical difficulties may happen. If it’s inaccessible while needed, it could strike badly. Help and technical support services vary from service to service. The best services respond promptly by 24/7.",
  },
  {
    title: "Operational Excellence",
    desc: "Operational excellence is the key for data center. Good track record ensure the sustainability of the business.",
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
