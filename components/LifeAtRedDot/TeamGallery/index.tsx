"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

import type { GalleryItem } from "@/lib/api/life/getTeamGallery";
import type { TeamGalleryMeta } from "@/lib/api/life/getTeamGalleryMeta";

/**
 * TeamGallery
 * --------------------------------
 * Pure UI component
 * - Data comes from API (via page.tsx)
 * - Design 100% unchanged
 */

export default function TeamGallery({
  meta,
  data,
}: {
  meta: TeamGalleryMeta;
  data: GalleryItem[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [rawSnap, setRawSnap] = useState(0);

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const totalSlides = data.length;
  const loopData =
    totalSlides > 0 && totalSlides < 6 ? [...data, ...data] : data;

  // 🔥 Track snaps
  useEffect(() => {
    if (!api || totalSlides === 0) return;

    const handleSelect = () => {
      const raw = api.selectedScrollSnap(); // includes clones
      setRawSnap(raw);

      // Normalize for dots
      const normalized = ((raw % totalSlides) + totalSlides) % totalSlides;
      setCurrent(normalized);
    };

    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, totalSlides]);

  return (
    <section className="relative w-full pb-16 sm:pb-24">
      {/* ✅ Heading from API */}
      <div className="text-center mb-[46px] sm:mb-[58px]">
        <h2 className="text-[30px] sm:text-[32px] font-semibold text-[#060414]">
          {meta.heading}
        </h2>
        <p className="text-[14px] text-[#121926] font-medium mt-[14px] sm:mt-[4px]">
          {meta.subtitle}
        </p>
      </div>

      <div className="pl-[16px] sm:pl-[80px]">
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
        >
          {/* ⭐ No placeholder, no snapping glitch */}
          <CarouselContent
            className="
              !flex !flex-row !justify-start !items-center
              !m-0 !p-0 [&>*]:!pl-0 [&>*]:!ml-0
            "
          >
            {loopData.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                className={`
                  flex-shrink-0
                  basis-[288px] sm:basis-[350px]
                  ${
                    totalSlides > 0 &&
                    index % totalSlides === totalSlides - 1
                      ? "mr-[24px]"
                      : "mr-[12px] sm:mr-[24px]"
                  }
                  pt-[24px]
                  pb-[12px]
                `}
              >
                <Card
                  className="
                    group
                    relative
                    w-[288px] h-[288px] sm:h-[350px] sm:w-[350px]
                    rounded-[8px] overflow-hidden bg-white shadow-md
                    transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:-translate-y-3 hover:scale-[1.05]
                    hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)]
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="
                        object-cover w-full h-full
                        transition-transform duration-300 ease-out
                        group-hover:brightness-105
                      "
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 🔘 Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {data.map((_, index) => (
              <span
                key={index}
                className={`w-[26px] h-[3px] rounded-md transition-colors duration-200 ${
                  index === current ? "bg-[#E52445]" : "bg-[#DDE0E4]"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
