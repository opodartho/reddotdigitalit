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

type SolutionsProps = {
  solutions: ProductSolutionItem[];
};

const gradients = [
  "bg-gradient-to-r from-pink-100 to-indigo-200",
  "bg-gradient-to-r from-orange-50 via-blue-100",
  "bg-gradient-to-r from-pink-100 to-orange-50",
  "bg-gradient-to-r from-fuchsia-100 to-pink-100",
  "bg-gradient-to-r from-cyan-50 to-green-100",
  "bg-gradient-to-r from-blue-100 to-orange-50",
  "bg-gradient-to-r from-sky-50 to-violet-100",
  "bg-gradient-to-r from-blue-50 to-violet-50",
];

export function ProductCarousel({ solutions }: SolutionsProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [slides, setSlides] = useState<ProductSolutionItem[]>([]);

  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  // Fetch slides once
  React.useEffect(() => {
    async function fetchSlides() {
      const heroSlides = await getProductSolutions();
      setSlides(heroSlides);
    }
    fetchSlides();
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative z-10 w-full ">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ loop: false, align: "start"}}
        plugins={[autoplay.current]}
      >
        <CarouselContent className=" w-full gap-[20px] ">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
            >
              <Card
                className={`flex h-[172px] w-[305px] ${index===0 ? '' : ''} flex-col transition hover:shadow-lg  ${
                  gradients[index % gradients.length] 
                }`}
              >
                <CardHeader className="">
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={48}
                      height={48}
                      className="mb-2 object-contain"
                    />
                  ) : (
                    <div className="mb-2 text-3xl">{slide.image}</div>
                  )}
                  <CardTitle className="text-base">{slide.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {slide.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-5 h-1 rounded-[2px] transition-colors duration-200 ${
                index + 1 === current ? "bg-[#E52445]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </Carousel>
    </div>
  );
}