"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/data/newsData";
import { useRouter } from 'next/navigation'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type NewsCardProps = Omit<NewsItem, "id">;

export function NewsCard({ imageUrl, title, description }: NewsCardProps) {

  const router = useRouter()
  return (
    <CardContainer className="w-full cursor-pointer">
      <CardBody
        className="
          w-[308px] h-[442px]
          rounded-[14px]
          bg-white
          shadow-[0px_12px_48px_rgba(49,1,139,0.07)]
          overflow-hidden
        "
      >
        {/* Image with 3D pop */}
        <CardItem translateZ={40} className="w-full">
          <div className="relative mx-[5px] h-[204px] mt-2">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-[8px]"
            />
          </div>
        </CardItem>

        {/* Text content */}
        {/* TITLE */}
        <CardItem translateZ={18}>
          <h3 className="px-[18px] pt-6 text-[18px] font-medium text-[#060414]">
            {title}
          </h3>
        </CardItem>

        {/* DESCRIPTION */}
        <CardItem translateZ={10}>
          <p
            className="
              px-[18px] mt-2 text-[14px] leading-[24px]
              text-[#121926/85]
              line-clamp-3
            "
          >
            {description}
          </p>
        </CardItem>

        {/* READ MORE */}
        <CardItem translateZ={20}>
          <div
            className="px-[18px] mt-4 flex items-center gap-2 text-[#E3001A] text-[14px]"
            onClick={() => router.push("/news-details")}
          >
            <Button variant="link">Read More »</Button>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}




