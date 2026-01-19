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
        ${isCarousel ? "w-[305px] h-[172px]" : "w-full sm:w-[305px] h-[200px]"}
        bg-white
        rounded-[8px]
        shadow-[0px_0px_49px_#F0EEFB]
        cursor-pointer
        ${!isCarousel ? "group" : ""}
      `}
    >
      <div
        className={`
          flex flex-col h-full
          ${isCarousel ? "p-4" : "px-[20px] py-[24px]"}
        `}
      >
        {/* ICON */}
        {item.image && (
          <div className="mb-[16px]">
            <Image
              src={item.image}
              alt={item.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        )}

        {/* TITLE */}
        <h3
          className={`
            font-poppins font-semibold
            text-[18px] leading-[27px]
            text-[#121926]
            mb-[8px]

            ${
              !isCarousel
                ? `
                  transition-colors
                  duration-[240ms]
                  ease-[cubic-bezier(0.4,0,0.2,1)]
                  group-hover:text-[#E52445]
                `
                : ""
            }
          `}
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            font-poppins font-normal
            text-[14px] leading-[22px]
            text-[#697586]
            line-clamp-2
          "
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
