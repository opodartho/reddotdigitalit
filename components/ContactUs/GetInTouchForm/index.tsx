"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contactForm";

export const GetInTouchForm = () => {
  return (
    <section className="relative w-full bg-white ">
      <div className=" px-[16px] sm:px-[80px] flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* 🧭 Left Info Section */}
        <div className="flex flex-col justify-start max-w-[291px] sm:max-w-[420px] ">
          <h2 className="text-[25px] md:text-[32px] font-normal text-[#060414] leading-[40px] mb-4 md:mb-6">
             Get in Touch
          </h2>

          <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[32px] text-[#121926]/85 mb-8 md:mb-10">
        RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
        second-largest mobile network operator in Bangladesh, offering IT and
        digital solutions. RedDot is establishing its own office in.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-[9px] sm:mb-0">
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                Phone Number
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#121926]/85 font-normal md:font-medium leading-[28px]">
                +880 18-86443344
              </p>
            </div>

            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-[#060414] md:mb-1">
                Email Address
              </h4>
              <p className="text-[14px] md:text-[16px] text-[#121926]/85 font-normal md:font-medium leading-[28px] break-all">
                support@reddotdigitalit.com
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
