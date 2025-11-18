"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const LifeHero = () => {
  return (
    <>
      <p className="text-[14px] text-[#959191] absolute lg:top-30 top-30 z-1 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       Life At RedDot`} </p>

      <section className="relative w-full bg-white">
        {/* 🧭 Breadcrumb */}
        <div className="px-[16px] sm:px-[80px] pt-[23px] sm:pt-[44px]">




          {/* 🧠 Hero Content */}
          <div className="flex flex-col items-start justify-center max-w-[675px]  mt-[34px] sm:mt-[38px]">
            {/* 🟥 Title */}
            <h1 className="font-poppins font-semibold text-[#060414] text-[30px] sm:text-[40px] leading-[45px] sm:leading-[48px] text-left">
              Life at RedDot
            </h1>

            {/* 🩶 Subtitle */}
            <p className="text-[14px] sm:text-[18px] leading-[21px] sm:leading-[30px] text-[#121926] text-left mt-[14px] sm:mt-[12px] max-w-[675px]">
              We code, we create, we collaborate – and we love every bit of it.
            </p>
          </div>
        </div>

        {/* 🖼️ Hero Image */}
        <div className="mx-auto mt-[45px] lg:mt-[92px] flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }} // optional gentle hover
            className="relative w-[358px] h-[131px] md:w-[720px] md:h-[265px] lg:w-[948px] lg:h-[348px] rounded-[8px] overflow-hidden cursor-pointer"
          >
            <Image
              src="/images/life-hero-grid.png" // 👈 update with your actual file name
              alt="Life at RedDot photo collage"
              fill
              className="object-cover rounded-[8px]"
              priority
            />
          </motion.div>

        </div>

        {/* 🧩 About Our Culture Section */}
        <div className="mt-[48px] sm:mt-[92px] text-center px-[16px] sm:px-[80px]">
          <div className="max-w-[918px] mx-auto">
            <h2
              className="font-poppins font-bold text-[#060414]
                       text-[25px] sm:text-[32px]
                       leading-[40px] tracking-[0.032px]
                       mb-[14px]"
            >
              About Our Culture
            </h2>

            <p
              className="font-poppins font-normal text-[#121926]
                       text-[14px] sm:text-[16px]
                       leading-[21px] sm:leading-[30px]
                       mx-auto max-w-[918px]"
            >
              RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
              second-largest mobile network operator in Bangladesh, offering IT and
              digital solutions. RedDot is establishing its own office in the
              Government’s IT Park at Bangabandhu Hi-Tech City in Kaliakoir, Gazipur.
              We aim to support Bangladesh’s digital goals by offering innovative
              solutions like IT applications, Cloud DC, and IoT, to name a few.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};
