"use client";

import React from "react";
import { ContactForm } from "@/components/ui/contactForm";
import type { GetInTouchData } from "@/lib/api/contact/getGetInTouchData";

/**
 * GetInTouchForm
 * --------------------------------
 * Pure UI component
 * - Content comes from API
 * - Design 100% unchanged
 */

export const GetInTouchForm = ({
  data,
}: {
  data: GetInTouchData;
}) => {
  return (
    <section className="relative w-full bg-white ">
      <div className=" px-[16px] sm:px-[80px] flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* 🧭 Left Info Section */}
        <div className="flex flex-col justify-start container [291px] sm:container [420px] ">
          <h2 className="text-[25px] md:text-[32px] font-normal text-[#060414] leading-[40px] mb-4 md:mb-6">
            {data.heading}
          </h2>

          <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[32px] text-[#121926]/85 mb-8 md:mb-10">
            {data.description}
          </p>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-[9px] sm:mb-0">
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                {data.phoneTitle}
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#121926]/85 font-normal md:font-medium leading-[28px]">
                {data.phone}
              </p>
            </div>

            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                {data.emailTitle}
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#121926]/85 font-normal md:font-medium leading-[28px] break-all">
                {data.email}
              </p>
            </div>
          </div>
        </div>

        {/* 🧩 Right Form Section */}
        <ContactForm variant="extended" />
      </div>
    </section>
  );
};
