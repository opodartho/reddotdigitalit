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
      <div className="lg:w-full lg:px-[200px]">
        <section
          className="lg:relative lg:flex lg:h-[655px] lg:max-w-8xl lg:flex-row lg:w-full lg:gap-[258px]"
          style={{
            background: `
        radial-gradient(circle at 85% 15%, #F0E8FF 0%, #FFFFFF 20%),
        radial-gradient(45.32% 45.32% at 10% 50%, rgba(240, 80, 54, 0.15) 0%, rgba(229, 36, 69, 0) 100%)
      `,
          }}
        >

          {/* Left text column - Fixed for full width */}
          <div className="flex flex-col lg:pt-30 pt-10 gap-6 lg:w-1/2 lg:min-w-[600px] lg:px-0 px-[16px]"> {/* Added min-width */}
            <div className="pr-[4px] flex lg:gap-[12px] gap-[2px] flex-row lg:justify-start h-[40px] items-center">
              {["15+ enterprise solutions", "ISO Certified", "5+ years of experience"].map(
                (text) => (
                  <p
                    key={text}
                    className="text-[#70738F] flex justify-center items-center border rounded-full px-3 w-[150px] py-1 text-xs font-medium bg-[#FFFFFF]"
                  >
                    {text}
                  </p>
                )
              )}
            </div>

            {/* Heading with proper width control */}
            <div className="lg:max-w-none w-full"> {/* Remove all max-width constraints */}
              <h1 className="lg:text-6xl text-3xl md:text-5xl font-medium leading-tight text-title lg:whitespace-nowrap"> {/* Added whitespace-nowrap */}
                Crafting <span className="text-[#E52445]">Innovation,</span>
              </h1>
              <h1 className="lg:text-6xl text-3xl md:text-5xl font-medium leading-tight text-title lg:whitespace-nowrap"> {/* Added whitespace-nowrap */}
                <span className="text-[#E52445]">Delivering</span> Excellence
              </h1>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-subtitle lg:max-w-md"> {/* Reduced max-width */}
              We turn ideas into innovative tech solutions with custom software that boosts
              efficiency and growth.
            </p>

            <div className="lg:flex lg:flex-row flex flex-col gap-4">
              <RedButton className="">Explore Services</RedButton>
              <WhiteButton className="lg:w-[250px]">Let's Work With Us</WhiteButton>
            </div>
          </div>

          {/* Carousel */}
          <div className="lg:flex lg:items-center lg:justify-center lg:w-1/2">
            <div className="flex justify-center overflow-visible">
              <div className="relative z-1 lg:h-full h-[550px] lg:w-full overflow-visible">
                <Carousel className="lg:overflow-hidden lg:w-[800px] w-[357px] basis-[44.4%]" setApi={setApi} opts={{ loop: true, align: "center" }} plugins={[autoplay.current]}>
                  <CarouselContent className="lg:ml-0 lg:mr-0 lg:gap-180 gap-[10px]">
                    {slides.map((slide) => (
                      <CarouselItem key={slide.id} className="basis-full lg:pl-0 lg:pr-0">
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
          </div>
        </section>
      </div>
    </>
  );
}