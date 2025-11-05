"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"; 

export const ServiceHero = () => {
  return (
    <section className="relative w-full bg-[#F6F5FA] pt-[42px] lg:pt-[68px] ">
      <div className="mx-auto max-w-[1280px] px-[16px] sm:px-[32px] lg:px-[40px] xl:px-0 flex flex-col lg:flex-row lg:justify-between lg:items-start pb:[64px] lg:pb-[60px]">
        {/* 🟣 Left Content */}
        <div className="order-2 lg:order-1 lg:max-w-[655px] flex flex-col justify-start ">
          {/* Breadcrumb */}
         {/* 🟣 Breadcrumb Badge */}
            <div className="inline-flex items-center justify-center w-[138px] h-[26px] border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
             <span className="font-poppins text-[#70738F] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
              Service We Serve
             </span>
            </div>


          {/* Title */}
          <h1 className="text-[#211F1F] font-poppins font-semibold text-[30px] leading-[45px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[48px] mb-[14px] lg:mb-[20px]">
            Cloud Migration
          </h1>

          {/* Description */}
          <p className="font-poppins font-normal text-[#211F1F] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[30px] mb-[19px] lg:mb-[12px] lg:max-w-[655px] xl:min-h-[90px]">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data while maintaining the highest levels of
            security and operational reliability.
          </p>

          <p className="font-poppins font-normal text-[#211F1F] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[30px] lg:max-w-[655px] xl:min-h-[90px] mb-[67px] lg:mb-[48px]">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data while maintaining the highest levels of
            security and operational reliability.
          </p>

          {/* CTA Button (Reused from UI library) */}
          <Button
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]"
          >
            Schedule a Call
          </Button>
        </div>

        {/* 🟣 Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:items-start mb-[51px] lg:mb-0 lg:-mt-[6px]  ">
          <div className="relative w-[358px] h-[358px] md:w-[460px] md:h-[320px] lg:w-[513px] lg:h-[345px] rounded-[12px]  overflow-hidden bg-[#F6F5FA]">
            <Image
              src="/images/cloud-migration-hero.png"
              alt="Cloud Migration Illustration"
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
