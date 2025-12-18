"use client";

import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import type { NewsListItem } from "@/lib/data/news-list/newsListData";

/**
 * BlogCarousel
 * --------------------------------
 * - Same structure as TeamGallery
 * - Loop-safe spacing
 * - No half-stop on wrap
 * - Normalized dot tracking
 */

type BlogCarouselProps = {
    newsListData: NewsListItem[];
};

export function BlogCarousel({ newsListData }: BlogCarouselProps) {
    const router = useRouter();

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const autoplay = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    const totalSlides = newsListData.length;

    // 🔄 Normalize snap index (same as TeamGallery)
    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            const raw = api.selectedScrollSnap();
            const normalized =
                ((raw % totalSlides) + totalSlides) % totalSlides;
            setCurrent(normalized);
        };

        onSelect();
        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api, totalSlides]);

    return (
        <section className="relative w-full ">
            {/* 🔹 Heading */}
            <p className="text-[40px] sm:pl-[80px] pl-[16px] pt-[42px] lg:pt-[64px] font-bold">
                Most Recent News
            </p>

            <div className="pl-[16px] sm:pl-[80px]">
                <Carousel
                    className="w-full pt-[44px]"
                    setApi={setApi}
                    opts={{ loop: true, align: "start" }}
                    plugins={[autoplay.current]}
                >
                    {/* ✅ TeamGallery-style content wrapper */}
                    <CarouselContent
                        className="
              !flex !flex-row !justify-start !items-start
              !m-0
              px-[8px] sm:px-[24px]  
              [&>*]:!pl-0 [&>*]:!ml-0
            "
                    >
                        {newsListData.map((item, index) => (
                            <CarouselItem
                                key={item.id ?? index}
                                className="
                  flex-shrink-0
                  basis-[308px]
                  mr-[12px] sm:mr-[26px] 
                  pt-[24px] pb-[12px]
                "
                            >
                                <Card className="w-[308px] h-[494px] bg-white shadow-sm hover:shadow-lg border-1 transition flex flex-col">
                                    <CardHeader className="-m-4 flex flex-col h-full">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-[200px] object-cover"
                                        />

                                        <div className="flex flex-col flex-1">
                                            <CardTitle className="text-[14px] text-gray-400 pt-[13px] pl-[10px]">
                                                {item.date}
                                            </CardTitle>

                                            <CardTitle className="text-[18px] pt-[22px] pl-[10px] tracking-wider">
                                                {item.title}
                                            </CardTitle>

                                            <CardDescription className="text-[14px] pl-[10px] pr-[43px] pt-[20px]">
                                                {item.description}
                                            </CardDescription>

                                            {/* 👇 This is the key */}
                                            <Button
                                                variant="link"
                                                className="mt-auto pt-[12px] pl-[10px] self-start text-left"
                                                onClick={() => router.push("/news-details")}
                                            >
                                                Read More »
                                            </Button>
                                        </div>
                                    </CardHeader>

                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* 🔘 Dots (TeamGallery logic) */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {newsListData.map((_, index) => (
                            <span
                                key={index}
                                className={`w-[26px] h-[3px] rounded-md transition-colors duration-200 ${index === current ? "bg-[#E52445]" : "bg-[#DDE0E4]"
                                    }`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
