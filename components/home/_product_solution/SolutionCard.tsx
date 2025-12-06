"use client";

import Image from "next/image";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";

type Props = {
  item: ProductSolutionItem;
};

export default function SolutionCard({ item }: Props) {
  return (
    <div
      className="
        bg-[#F7F7FD] rounded-[15px] p-1 shadow-sm 
        hover:shadow-md hover:scale-105  hover:shadow-xl 
        transition-all 
        duration-300 cursor-pointer
        group
      "
    >
      <div className="w-full h-[220px] overflow-hidden rounded-[15px]">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={218}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-[22px] leading-[26px] font-semibold text-[#060414] mb-2 group-hover:text-[#E52445]">
          {item.title}
        </h3>
        <p className="text-[14px] text-[#121926] leading-[22px] line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
