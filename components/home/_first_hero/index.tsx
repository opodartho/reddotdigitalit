"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroSlides } from "@/lib/data/home-hero/hero";
import { useRouter } from "next/navigation";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

export type HeroSlidesProps = {
  heroSlidesData: HeroSlides[];
};

export default function FirstHeroSection({ heroSlidesData }: HeroSlidesProps) {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();
  const navigate = useRouter();

  return (
    <>
      <section
        id="hero-section"
        className="relative flex flex-col items-center w-full
        h-auto lg:h-[668px] pb-[50px] lg:pb-[100px] bg-cover bg-center justify-start"
        style={{ backgroundImage: `url('/images/darkbg.svg')` }}
      >

        {/* TITLE */}
        <h1
          className="
          text-white font-bold text-center font-poppins
          text-[22px] sm:text-[24px] md:text-[28px] lg:text-[48px]
          leading-tight
          mt-[120px] lg:mt-[140px]
        "
        >
          Crafting Innovation,Delivering<br /> Excellence
        </h1>

        {/* DESKTOP ICON ROW */}
        <div className="hidden lg:flex gap-[24px] mt-[60px]">
          {heroSlidesData.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate.push(item.route)}
              className="cursor-pointer transition-transform duration-300 
                ease-in-out hover:scale-110 hover:z-10"
            >

              <div
                className="
          rounded-[12px]
          transition-all duration-300
          border border-transparent
          hover:border-white
          
        "
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="rounded-[12px] w-full h-full object-contain"
                />
              </div>
            </button>
          ))}
        </div>

        {/* MOBILE CAROUSEL – FULL SIZE ICONS */}
        <div className="lg:hidden w-full mt-[40px] px-4">
          <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="gap-3">
              {heroSlidesData.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="basis-1/3 flex justify-center"
                >
                  <div
                    className="
    flex items-center justify-center
    cursor-pointer"
                    onClick={() => navigate.push(slide.route)}
                  >
                    <img
                      src={slide.imageUrl}
                      alt=""
                      className="w-60% h-60% sm:w-100% sm:h-100% object-contain"
                    />
                  </div>


                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* BUTTON */}
        <div className="mt-[52px]">
          <WhiteButton className="w-[240px]"
            onClick={() => {
              document
                .getElementById("product_solution")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            Explore All Services
          </WhiteButton>
        </div>
      </section>
    </>
  );
}
