"use client";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getHeroSlides } from "@/lib/api/fetchHeroSlides";
import type { HeroSlide } from "@/lib/data/heroSlidesData";
import { ArrowUpRight } from "lucide-react";
import RedButton from "@/components/buttons/RedHoverButton";
import WhiteButton from "@/components/buttons/WhiteHoverButton";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

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

  const CARD_WIDTH = 579; // fixed card width
  const IMAGE_WIDTH = 439; // pop-out image width

  return (
    <section
      className="relative flex flex-col h-full md:flex-row items-center justify-center w-full px-6 md:px-14    md:gap-10"
      style={{
        background: `
        radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 20%),
        radial-gradient(45.32% 45.32% at 10% 50%, rgba(240, 80, 54, 0.15) 0%, rgba(229, 36, 69, 0) 100%)
      `,
      }}
    >
      {/* Left text column */}
      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left md:w-[55%]">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["15+ enterprise solutions", "ISO Certified", "5+ years of experience"].map(
            (text) => (
              <span
                key={text}
                className="text-[#70738F] rounded-full px-3 py-1 text-xs font-medium bg-[#FFFFFF]"
              >
                {text}
              </span>
            )
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-medium leading-tight w-[480px] text-title">
          Crafting <span className="text-[#E52445]">Innovation,</span>
          <br className="hidden md:block" />
          Delivering <span className="text-[#E52445]">Excellence</span>
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-subtitle">
          We turn ideas into innovative tech solutions with custom software that boosts
          efficiency and growth.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <RedButton>Explore Services</RedButton>
          <WhiteButton className="tracking-tightest">Let's Work With Us</WhiteButton>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-1 md:w-[50%] h-full">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }} plugins={[autoplay.current]}>
          <CarouselContent className="lg:ml-0 lg:mr-0 lg:gap-180">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} >
                <CardContainer className={`lg:w-[600px] mx-auto`}>
                  <CardBody className={`relative w-[600px] overflow-visible [transform-style:preserve-3d]`}>

                    {/* Pop-out image centered */}
                    <CardItem
                      translateZ={50}
                      className={`absolute lg:top-[6px] left-1/2 -translate-x-1/2 lg:w-[585px] lg:h-[280px] z-20 flex items-center justify-center`}
                    >
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className={`w-[800px]  object-contain`}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                    </CardItem>

                    {/* Card background with fixed width */}
                    <CardItem translateZ={0}>
                      <div
                        className={`bg-white rounded-lg lg:w-[600px] lg:h-[465px] shadow-[0_12px_48px_0px_rgba(49,1,139,0.07)] mb-1 flex flex-col`}
                      >
                        <div className="rounded-lg h-[250px] w-full flex items-center justify-center relative overflow-hidden px-2">
                          {/* Image handled by pop-out CardItem */}
                        </div>
                        <div className="flex flex-col gap-2 mt-14 px-6 pb-4">
                          <h3 className="text-lg font-semibold flex justify-between items-center text-title">
                            {slide.title}
                            
                          </h3>
                          <p className="text-sm mb-2 text-subtitle">{slide.description}</p>
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
                    </CardItem>

                  </CardBody>
                </CardContainer>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation dots */}
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
    </section>
  );
}
