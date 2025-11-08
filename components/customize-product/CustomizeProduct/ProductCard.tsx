import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductItem } from "@/lib/data/customize-product/productData";

type ProductProps = Omit<ProductItem, "id">;

export function ProductCard({
  date,
  imageUrl,
  title,
  description,
}: ProductProps) {
  return (
    <div className="flex h-[490px] w-[308px] flex-col bg-white border-1 rounded-xl">
      <div className="relative rounded-xl aspect-[4/3] w-full overflow-hidden flex justify-center pt-[8px] rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          height={204}
          width={292}
          className="transition-transform duration-300 ease-in-out hover:scale-101"
        />
      </div>
      <div className="flex flex-grow flex-col pt-6 pl-[18px]">
        <h3 className="text-xl font-bold">{title}</h3>
        <h3 className="text-xl font-bold">{date}</h3>
        <p className="mt-2 flex-grow text-base text-gray-700">{description}</p>
        <div className="mt-4">
          <Button variant="link">Read More </Button>
        </div>
      </div>
    </div>
  );
}
