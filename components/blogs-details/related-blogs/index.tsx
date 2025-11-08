"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProductSolutionItem } from "@/lib/data/productSolutionData";
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
import { getProductSolutions } from "@/lib/api/fetchProductSolutions";
import Image from "next/image";
import { BlogsListItem, blogsListData } from "@/lib/data/blogs-list/blogsListData";
import { Button } from "@/components/ui/button";

type ProductCarouselProps = {
    blogsListData: BlogsListItem[];
};


export function BlogCarousel({ blogsListData }: ProductCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);


    const autoplay = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );



    React.useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="relative z-10 w-full ">

            <p className="text-[40px] lg:pl-[80px] pl-[41px] pt-[42px] lg:pr-[80px] lg:pt-[64px] font-bold">Related Blogs</p>
            <Carousel
                className="w-full pt-[44px]"
                setApi={setApi}
                opts={{ loop: false, align: "start" }}
                plugins={[autoplay.current]}
            >
                <CarouselContent className=" w-full lg:gap-[20px] gap-[140px] lg:ml-0 ml-[16px]">
                    {blogsListData.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
                        >
                            <Card
                                className={`w-[308px] border-1 bg-white h-[494px] transition shadow-sm hover:shadow-lg`}
                            >
                                <CardHeader className="-m-4 space-y-0">
                                    <img src={slide.imageUrl} className="" />
                                    <CardTitle className="text-[14px] text-gray-400 pt-[13px] pl-[10px]">{slide.date}</CardTitle>
                                    <CardTitle className="text-[18px] pt-[22px] pl-[10px] tracking-wider">{slide.title}</CardTitle>
                                    <CardDescription className="text-[14px] pl-[10px] pr-[43px] pt-[20px]">
                                        {slide.description}
                                    </CardDescription>
                                    <Button variant={"link"} className="text-start w-[96.2px] pl-[3px]">Read More </Button>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
                    {blogsListData.map((_, index) => (
                        <span
                            key={index}
                            className={`w-5 h-1 rounded-[2px] transition-colors duration-200 ${index + 1 === current ? "bg-[#E52445]" : "bg-gray-300"
                                }`}
                        ></span>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}