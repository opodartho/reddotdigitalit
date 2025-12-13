"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { LifeHeroData } from "@/lib/api/life/getLifeHeroData";

/**
 * LifeHero
 * --------------------------------
 * Pure presentational component
 * - Receives all content via API data
 * - NO hardcoded text
 * - Design & animation unchanged
 */

export const LifeHero = ({ data }: { data: LifeHeroData }) => {
  return (
    <>
      <section className="relative w-full bg-white">
        {/* 🧭 Breadcrumb */}
        <div className="px-[16px] sm:px-[80px] pt-[56px] sm:pt-[80px]">
          {/* 🧠 Hero Content */}
          <div className="flex flex-col items-start justify-center container [675px] mt-[34px] sm:mt-[38px]">
            {/* 🟥 Title */}
            <h1 className="font-poppins font-semibold text-[#060414] text-[30px] sm:text-[40px] leading-[45px] sm:leading-[48px] text-left">
              {data.title}
            </h1>

            {/* 🩶 Subtitle */}
            <p className="text-[14px] sm:text-[18px] leading-[21px] sm:leading-[30px] text-[#121926] text-left mt-[14px] sm:mt-[12px] container [675px]">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* 🖼️ Hero Image */}
        <div className="mx-auto mt-[45px] lg:mt-[92px] flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }} // optional gentle hover
            className="relative w-[358px] h-[131px] md:w-[720px] md:h-[265px] lg:w-[948px] lg:h-[348px] rounded-[8px] overflow-hidden cursor-pointer"
          >
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover rounded-[8px]"
              priority
            />
          </motion.div>
        </div>

        {/* 🧩 About Our Culture Section */}
        <div className="mt-[48px] sm:mt-[92px] text-center px-[16px] sm:px-[80px]">
          <div className="container [918px] mx-auto">
            <h2
              className="font-poppins font-bold text-[#060414]
                       text-[25px] sm:text-[32px]
                       leading-[40px] tracking-[0.032px]
                       mb-[14px]"
            >
              {data.aboutTitle}
            </h2>

            <p
              className="font-poppins font-normal text-[#121926]
                       text-[14px] sm:text-[16px]
                       leading-[21px] sm:leading-[30px]
                       mx-auto container [918px]"
            >
              {data.aboutDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
