"use client";

import Image from "next/image";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";

type Props = {
  item: ProductSolutionItem;
  variant?: "grid" | "carousel";
};

export default function SolutionCard({
  item,
  variant = "grid",
}: Props) {
  const isCarousel = variant === "carousel";

  return (
    <div
      className={`
    group
    bg-[#F7F7FD]
    transition-all duration-300 cursor-pointer
    ${isCarousel
          ? "w-[272px] h-[309px] rounded-[13.2px] p-1 hover:border-2"
          : "rounded-[15px] p-1 hover:scale-105 hover:shadow-xl"}
  `}
    >

      {/* IMAGE */}
      <div
        className={`
          overflow-hidden
          ${isCarousel
            ? "w-[262px] h-[192px] rounded-[8.8px]"
            : "w-full h-[220px] rounded-[15px]"}
        `}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={262}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className={isCarousel ? "pt-[12px] px-[6px]" : "p-5"}>
        <h3
          className={`
    font-poppins font-semibold
    text-[#121926]
    group-hover:text-[#E52445]
    transition-colors duration-300
    ${isCarousel
              ? "text-[19.35px] leading-[23px] mb-[6px]"
              : "text-[22px] leading-[26px] mb-2"}
  `}
        >

          {item.title}
        </h3>

        <p
          className={`
            font-poppins text-[#121926] line-clamp-2
            ${isCarousel
              ? "text-[12.3px] leading-[19px]"
              : "text-[14px] leading-[22px]"}
          `}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
