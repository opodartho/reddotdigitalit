"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyItem } from "@/lib/data/caseStudiesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type CaseStudiesCarouselProps = {
  caseStudiesData: CaseStudyItem[];
};

export function CaseStudiesCarousel({
  caseStudiesData,
}: CaseStudiesCarouselProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
    })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full cursor-grab active:cursor-grabbing"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="-ml-4">
        {caseStudiesData.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <CaseStudyCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
