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

  // Update current slide index when carousel changes
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-14 py-14 gap-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 85% 15%, #F0E8FF 0%, #F3F3F3 50%)",
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start gap-30 w-full">
        {/* Left Side Content */}
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

          <h1 className="text-5xl font-medium leading-tight text-[#121926]">
            Crafting <span className="text-[#E52445]">Innovation,</span>
            <br />
            Delivering <span className="text-[#E52445]">Excellence</span>
          </h1>

          <p className="text-[#121926] text-lg leading-relaxed">
            We turn ideas into innovative tech solutions with custom software
            that boosts efficiency and growth.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              variant="outline"
              className="border border-[#E52445] text-[#E52445] bg-white hover:bg-red-100 dark:bg-transparent rounded-md py-6 px-6"
            >
              Explore All Services →
            </Button>
            <Button
              variant="default"
              className="text-white bg-[#E52445] hover:bg-primary/40 dark:bg-transparent rounded-md py-6 px-10"
            >
              Let's work with us
            </Button>
          </div>
        </div>

        {/* Right Side Carousel */}
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
                  <div className="bg-white rounded-lg w-[85%] shadow-[0_10px_30px_rgba(240,232,255,0.7)]">
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
                            className="bg-[#EAE8F1] text-xs px-3 py-1 rounded-full text-[#70738F]"
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

            {/* Carousel bullets */}
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
