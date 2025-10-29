"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ProductCard } from "./ProductCard";
import { ProductItem } from "@/lib/data/productData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ProductProps = {
  productData: ProductItem[];
};

export function ProductCarousel({
  productData,
}: ProductProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: 1800,
      stopOnInteraction: false,
    })
  );

  return (
    <div className="">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
          align: "start",
        }}
        plugins={[plugin.current]}
        className="w-full cursor-grab active:cursor-grabbing"

      >
        <CarouselContent className="!ml-0 gap-6">
          {productData.map((item: ProductItem) => (
            <CarouselItem
              key={item.id}
              className="!pl-0 md:basis-1/2 lg:basis-1/5"
            >
              <div className="-px-5"> {/* real visible spacing */}
                <ProductCard
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}
