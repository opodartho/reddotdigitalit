"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import SolutionCard from "@/components/home/_product_solution/SolutionCard";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";

type ProductCarouselProps = {
  solutions: ProductSolutionItem[];
};

export default function ProductCarousel({ solutions }: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);
  const router = useRouter();

  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;

    const sync = () => {
      setCurrent(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    sync();
    api.on("select", sync);
    api.on("reInit", sync);
  }, [api]);

  return (
    <div className="relative w-full pl-[16px] sm:pl-[80px]">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
      >
        {/* TRACK */}
        <CarouselContent className="flex gap-[16px]">
          {solutions.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_auto]"
              onClick={() =>
                router.push(`/customize-product/${index + 1}`)
              }
            >
             <SolutionCard item={item} variant="carousel" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* DOTS */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <span
              key={i}
              className={`h-[4px] w-[20px] rounded-[2px] transition-colors ${
                i === current ? "bg-[#E52445]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
