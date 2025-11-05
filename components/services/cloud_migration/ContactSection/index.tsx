"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="relative w-full bg-white ">
      <div className="mx-auto max-w-[1280px] px-[16px] sm:px-[32px] lg:px-[40px] xl:px-0 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* 🧭 Left Info Section */}
        <div className="flex flex-col justify-start max-w-[291px] sm:max-w-[420px]">
          <h2 className="text-[25px] md:text-[32px] font-normal text-black leading-[40px] mb-4 md:mb-6">
            Leave Your Query To Us
          </h2>

          <p className="text-[14px] md:text-[16px] leading-[21px] md:leading-[32px] text-black/85 mb-8 md:mb-10">
            RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited,
            the second-largest mobile network operator in Bangladesh, offering
            IT and digital solutions. RedDot is establishing its own office in.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-black md:mb-1">
                Phone Number
              </h4>
              <p className="text-[14px] text-black/85 leading-[28px]">
                +880 18-86443344
              </p>
            </div>

            <div>
              <h4 className="text-[18px] md:text-[22px] font-medium text-black md:mb-1">
                Email Address
              </h4>
              <p className="text-[14px] text-black/85 leading-[28px] break-all">
                support@reddotdigitalit.com
              </p>
            </div>
          </div>
        </div>

        {/* 🧩 Right Form Section */}
        <div className="bg-[#F9F8FB] rounded-[16px] px-6 sm:px-8 md:px-[35px] py-[62px] md:py-[57px] flex flex-col justify-start w-full max-w-[774px]">
          <form className="space-y-6 md:space-y-9 mb-[15px] md:mb-[20px]">
            {/* Full Name */}
            <div>
              <label className="block text-[16px] leading-[30px] font-medium text-[#000000] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Carter"
                className="w-full h-[48px] border border-[rgba(59,59,115,0.21)] rounded-[6px] px-4 text-[14px] leading-[30px] text-[rgba(0,0,0,0.66)] focus:outline-none focus:ring-1 focus:ring-[#E52445] bg-white"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-[16px] leading-[30px] font-medium text-[#000000] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="wellgit.rt@gmail.com"
                  className="w-full h-[48px] border border-[rgba(59,59,115,0.21)] rounded-[6px] px-4 text-[14px] leading-[30px] text-[rgba(0,0,0,0.66)] focus:outline-none focus:ring-1 focus:ring-[#E52445] bg-white"
                />
              </div>

              <div className="flex-1">
                <label className="block text-[16px] leading-[30px] font-medium text-[#000000] mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="e.g. 02548777"
                  className="w-full h-[48px] border border-[rgba(59,59,115,0.21)] rounded-[6px] px-4 text-[14px] leading-[30px] text-[rgba(0,0,0,0.66)] focus:outline-none focus:ring-1 focus:ring-[#E52445] bg-white"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[16px] leading-[30px] font-medium text-[#000000] mb-2">
                Description
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full border border-[rgba(59,59,115,0.21)] rounded-[6px] px-4 py-2 text-[14px] leading-[30px] text-[rgba(0,0,0,0.66)] resize-none focus:outline-none focus:ring-1 focus:ring-[#E52445] bg-white"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="lg:flex justify-center">

          {/* CTA Button (Reused from UI library) */}
          <Button
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px] flex items-center justify-center mt-4"
          >
            Submit
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
