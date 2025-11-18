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
    <>
      <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-100 lg:left-16 left-4 whitespace-break-spaces">{`Home`} </p>

      <section
        className="lg:relative lg:flex lg:flex-col lg:h-[655px] h-[] lg:md:flex-row lg:items-center lg:justify-center lg:w-full lg:px-6 lg:md:px-14  lg:md:gap-10"
        style={{
          background: `
        radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 20%),
        radial-gradient(45.32% 45.32% at 10% 50%, rgba(240, 80, 54, 0.15) 0%, rgba(229, 36, 69, 0) 100%)
      `,
        }}
      >

        {/* Left text column */}
        <div className="flex flex-col lg:pt-0 pt-10 gap-6 max-w-xl lg:pl-[0px] pl-[16px] md:text-left md:w-[55%]">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {["15+ enterprise solutions", "ISO Certified", "5+ years of experience"].map(
              (text) => (
                <span
                  key={text}
                  className="text-[#70738F] border rounded-full px-3 py-1 text-xs font-medium bg-[#FFFFFF]"
                >
                  {text}
                </span>
              )
            )}
          </div>

          <h1 className="lg:text-4xl text-4xl md:text-5xl font-medium leading-tight w-[480px] text-title">
            Crafting <span className="text-[#E52445]">Innovation,</span>
            <br className=" md:block" />
            <span className="text-[#E52445]">Delivering</span> <span className="">Excellence</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-subtitle">
            We turn ideas into innovative tech solutions with custom software that boosts
            efficiency and growth.
          </p>

          <div className="lg:flex lg:flex-row  flex flex-col flex-wrap   gap-4">
            <RedButton className="">Explore Services</RedButton>
            <WhiteButton className="tracking-tightest">Let's Work With Us</WhiteButton>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex justify-center overflow-visible">
          <div className="relative z-1 lg:h-full h-[550px] lg:w-full overflow-visible">
            <Carousel className="lg:overflow-hidden lg:w-[700px] w-[357px] basis-[44.4%]" setApi={setApi} opts={{ loop: true, align: "center" }} plugins={[autoplay.current]}>
              <CarouselContent className="lg:ml-0  lg:mr-0 lg:gap-180  gap-[10px] ">
                {slides.map((slide) => (
                  <CarouselItem key={slide.id} className="basis-full lg:pl-0  lg:pr-0 ">
                    <CardContainer className="lg:w-[600px] w-[327px] mx-auto">
                      <CardBody className="relative lg:w-[600px] w-[327px] overflow-visible [transform-style:preserve-3d]">

                        {/* Pop-out image centered */}
                        <CardItem
                          translateZ={50}
                          className="absolute lg:top-[6px] top-[6px] left-1/2 -translate-x-1/2 lg:w-[585px] w-[310px] lg:h-[280px] z-20 flex items-center justify-center"
                        >
                          <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="lg:w-[800px] w-full object-contain"
                            style={{ transformStyle: "preserve-3d" }}
                          />
                        </CardItem>

                        {/* Card background with fixed width */}
                        <CardItem translateZ={0}>
                          <div className="bg-white rounded-lg lg:w-[600px] w-[327px] lg:h-[465px] h-[380px] shadow-lg flex flex-col">

                            <div className="flex flex-col gap-2 px-4 lg:pt-[291px] pt-[191px] w-full">
                              <h3 className="text-lg font-semibold flex justify-between items-center text-title">
                                {slide.title}
                              </h3>
                              <p className="text-sm mb-2 text-subtitle lg:pt-[10px]">{slide.description}</p>
                              <div className="flex flex-wrap gap-2 lg:pt-[30px]">
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
            </Carousel>

            <div className="lg:mt-8 justify-center w-full flex gap-2 z-120">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-5 h-1 rounded-[2px] transition-colors duration-200 ${index + 1 === current ? "bg-[#E52445]" : "bg-gray-300"
                    }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
