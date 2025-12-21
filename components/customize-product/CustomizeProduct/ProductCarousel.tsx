"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
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
import { getProductSolutions } from "@/lib/api/customize-product/fetchStaticProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const [snapCount, setSnapCount] = React.useState(0);
  const [slides, setSlides] = useState<ProductSolutionItem[]>([]);
  const router = useRouter();
  const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  React.useEffect(() => {
    async function fetchSlides() {
      const heroSlides = await getProductSolutions();
      setSlides(heroSlides);
    }
    fetchSlides();
  }, []);

  React.useEffect(() => {
    if (!api) return;

    const setFromApi = () => {
      setCurrent(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    setFromApi();
    api.on("select", setFromApi);
    api.on("reInit", setFromApi);
  }, [api]);

  return (
    <div className="relative z-10 w-full">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
      >
        <CarouselContent className="w-full gap-4 sm:gap-5 lg:gap-6 pl-4 sm:pl-6 lg:pl-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div
                className="cursor-pointer h-full"
                onClick={() => router.push(`/customize-product/${index + 1}`)}
              >
                <Card
                  className={`flex h-full min-h-[180px] w-full flex-col transition hover:shadow-lg ${gradients[index % gradients.length]}`}
                >
                  <CardHeader>
                    {slide.image ? (
                      <div className="mb-3 relative h-[48px] w-[48px]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="mb-2 text-3xl">{slide.image}</div>
                    )}
                    <CardTitle className="text-base">{slide.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {slide.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: snapCount }).map((_, index) => (
            <span
              key={index}
              className={`w-5 h-1 rounded-[2px] transition-colors duration-200 ${index === current ? "bg-[#E52445]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
