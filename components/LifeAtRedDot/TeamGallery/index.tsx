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

type GalleryItem = {
  id: number;
  imageUrl: string;
  alt: string;
};

const galleryData: GalleryItem[] = [
  { id: 1, imageUrl: "/images/team1.jpg", alt: "Pohela Boishakh celebration" },
  { id: 2, imageUrl: "/images/team2.jpg", alt: "Women's Day #InspireInclusion" },
  { id: 3, imageUrl: "/images/team3.jpg", alt: "RedDot Digital Event Banner" },
  { id: 4, imageUrl: "/images/team4.jpg", alt: "Team Gathering" },
  { id: 5, imageUrl: "/images/team5.jpg", alt: "Cultural Festival" },
];

export default function TeamGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  // ✅ Fixed: Loop & TypeScript safe event listener with cleanup
  useEffect(() => {
    if (!api) return;

    const totalSlides = galleryData.length;

    const handleSelect: () => void = () => {
      // Normalize index in loop mode so cloned slides map to real ones
      const realIndex = api.selectedScrollSnap() % totalSlides;
      setCurrent(realIndex);
    };

    // Set initial active state
    handleSelect();

    // Listen to Embla's "select" event
    api.on("select", handleSelect);

    // ✅ Proper cleanup (TypeScript safe)
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full pb-16 sm:pb-24">
      {/* 🧠 Section Title */}
      <div className="text-center mb-[46px] sm:mb-[58px]">
        <h2 className="text-[30px] sm:text-[32px] font-semibold text-[#060414]">
          Team Gallery
        </h2>
        <p className="text-[14px] text-[#121926] font-medium mt-[14px] sm:mt-[4px]">
          360° Automated Sales & Distribution Management
        </p>
      </div>

      {/* 🎠 Carousel */}
      <div className="pl-[16px] sm:pl-[80px]">
        <Carousel
          className="w-full"
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="!flex !flex-row !justify-start !items-center !m-0 !p-0 [&>*]:!pl-0 [&>*]:!ml-0">
            {galleryData.map((item) => (
              <CarouselItem
                key={item.id}
                className="
                  flex-shrink-0
                  basis-[288px] sm:basis-[350px]
                  mr-[12px] sm:mr-[24px]
                  last:mr-0
                  pt-[24px] 
                  pb-[24px]
                "
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

            {/* Invisible placeholder to maintain final gap in loop */}
            <div style={{ width: "24px", flexShrink: 0 }} />
          </CarouselContent>

          {/* 🔘 Pagination Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {galleryData.map((_, index) => (
              <span
                key={index}
                className={`w-[26px] h-[3px] rounded-md transition-colors duration-200 ${
                  index === current ? "bg-[#E52445]" : "bg-[#DDE0E4]"
                }`}
              ></span>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
