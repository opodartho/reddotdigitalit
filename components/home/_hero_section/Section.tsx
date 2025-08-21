"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getHeroSlides } from "@/lib/api/fetchHeroSlides";
import type { HeroSlide } from "@/lib/data/heroSlidesData";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);

  // Autoplay plugin
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  // Fetch slides once
  useEffect(() => {
    async function fetchSlides() {
      const heroSlides = await getHeroSlides();
      setSlides(heroSlides);
    }
    fetchSlides();
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-start w-full px-6 md:px-14 py-12 md:py-16 gap-8 md:gap-10 overflow-hidden"
      style={{
        background: `
    radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 20%),
    radial-gradient(45.32% 45.32% at 10% 50%, rgba(240, 80, 54, 0.15) 0%, rgba(229, 36, 69, 0) 100%)
  `,
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start gap-30 w-full">
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left md:w-[55%]">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              "15+ enterprise solutions",
              "ISO Certified",
              "5+ years of experience",
            ].map((text) => (
              <span
                key={text}
                className="text-[#70738F] rounded-full px-3 py-1 text-xs font-medium bg-[#FFFFFF]"
              >
                {text}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-medium leading-tight text-[#121926]">
            Crafting <span className="text-[#E52445]">Innovation,</span>
            <br className="hidden md:block" />
            Delivering <span className="text-[#E52445]">Excellence</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[#121926]">
            We turn ideas into innovative tech solutions with custom software
            that boosts efficiency and growth.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              variant="outline"
              className="border border-[#E52445] text-[#E52445] bg-white hover:bg-red-100 dark:bg-transparent rounded-md py-3 px-4 md:py-6 md:px-6"
            >
              Explore All Services →
            </Button>
            <Button
              variant="default"
              className="text-white bg-[#E52445] hover:bg-primary/40 dark:bg-transparent rounded-md py-3 px-6 md:py-6 md:px-10"
            >
              Let's work with us
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-[45%] md:ml-12">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[autoplay.current]}
          >
            <CarouselContent className="ml-0">
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="bg-white rounded-lg w-full md:w-[85%] shadow-[0_12px_48px_0px_rgba(49,1,139,0.07)] mb-8">
                    <div className="rounded-lg h-[250px] flex items-center justify-center relative overflow-hidden px-2 pt-2">
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mt-4 px-6 pb-4">
                      <h3 className="text-lg font-semibold flex justify-between items-center text-[#121926]">
                        {slide.title}
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          Case Study <ArrowUpRight size={14} />
                        </span>
                      </h3>
                      <p className="text-sm text-[#70738F] mb-2">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {slide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#F5F5FA] text-xs px-3 py-1 rounded-full text-[#70738F]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
      </div>
    </section>
  );
}
