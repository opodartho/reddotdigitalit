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
import { HeroSlides } from "@/lib/data/home-hero/hero";
import { useRouter } from "next/navigation";

export type HeroSlidesProps = {
  heroSlidesData: HeroSlides[]
}

export default function FirstHeroSection({ heroSlidesData }: HeroSlidesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const navigate = useRouter()
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
      <div id="hero-section" className="lg:flex lg:h-[690px] h-[530px] lg:justify-center flex justify-center lg:w-full w-full" style={{ backgroundImage: `url('/images/darkbg.svg')` }}>

        <p className="lg:absolute lg:top-[20px] absolute top-[120px]  lg:pt-[144px] lg:text-[48px] text-[24px] h-[24px]  text-white text-center container lg:w-[819px] font-bold text-poppins">Crafting Innovation, Delivering Excellence</p>


        <div className="lg:pt-[120px]  hidden  lg:gap-[24px] lg:flex absolute top-[200px]">
          {heroSlidesData?.map((p, index) => (
            <button key={index} onClick={() => navigate.push(`${p.route}`)} className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10">
              <img src={p.imageUrl} alt="" />
            </button>
          ))}
        </div>

        


      </div>

      <div className="lg:hidden absolute top-[10px] z-200 w-full">
  <Carousel 
    className="lg:overflow-hidden lg:w-[700px] w-full basis-[24.4%]" 
    setApi={setApi} 
    opts={{ 
      loop: true, 
      align: "center",
      slidesToScroll: 2 // Add this to scroll 2 slides at a time
    }} 
    plugins={[autoplay.current]}
  >
    <CarouselContent className="lg:ml-0 lg:mr-0 lg:gap-180 gap-[2px]">
      {heroSlidesData.map((slide) => (
        <CarouselItem 
          key={slide.id} 
          className="basis-1/3 md:basis-1/7 sm:basis-1/5 lg:pl-0 lg:pr-0" // Changed from basis-full to basis-1/2 for 2 slides
        >
          <CardContainer className="lg:w-[600px] w-[327px] mx-auto">
            <CardBody className="relative lg:w-[600px] w-[327px] overflow-visible [transform-style:preserve-3d]">

              {/* Pop-out image centered */}
              <CardItem
                translateZ={50}
                className="absolute lg:top-[6px] top-[160px] left-1/2 -translate-x-1/2 w-[110px] lg:h-[280px] z-20 flex items-center justify-center"
              >
                <img
                  src={slide.imageUrl}
                  alt={""}
                  className="lg:w-[200px] w-full object-contain"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => navigate.push(`${slide.route}`)}
                />
              </CardItem>

              {/* Card background with fixed width */}

            </CardBody>
          </CardContainer>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Navigation dots */}
  </Carousel>

</div>
      <div className="flex justify-center">
        <WhiteButton className="lg:absolute absolute lg:top-[560px] top-[420px] lg:ml-[0px] ml-[16px] lg:mr-[0px] mr-[16px] w-[250px]">Explore All Services</WhiteButton>
      </div>
    </>
  );
}
