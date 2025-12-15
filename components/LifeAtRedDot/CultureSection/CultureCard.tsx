"use client";

import Image from "next/image";
import type { CultureItem } from "@/lib/api/life/getCultureData";

/**
 * CultureCard
 * -----------------------------------
 * Pure presentational component
 * - Uses API contract type (CultureItem)
 * - No data fetching
 * - No animation logic
 * - Pixel-perfect match with original design
 */

export function CultureCard({ icon, title, desc }: CultureItem) {
  return (
    <div
      className="
        flex flex-col items-start justify-start text-left
        bg-white rounded-[14px]
        shadow-[0_4px_12px_rgba(49,1,139,0.05)]
        w-[308px] h-[364px]
        px-[26px] pt-[65px] pb-[42px]
      "
    >
      {/* 🖼️ Icon */}
      <div className="w-[68px] h-[68px] mb-[43px] relative">
        <Image
          src={icon}
          alt={title}
          width={68}
          height={68}
          className="object-contain"
        />
      </div>

      {/* 🏷️ Title */}
      <h3
        className="
          text-[18px] font-semibold text-[#060414]
          leading-[27px] mb-[23px]
        "
      >
        {title}
      </h3>

      {/* 📜 Description */}
      <p
        className="
          text-[14px] font-normal text-[#121926]
          leading-[24px] w-[253px]
        "
      >
        {desc}
      </p>
    </div>
  );
}
