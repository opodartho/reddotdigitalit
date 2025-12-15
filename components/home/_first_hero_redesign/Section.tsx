"use client";


import React, { useState, useEffect, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroSlides } from "@/lib/data/home-hero-redesign/hero";
import { useRouter } from "next/navigation";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

export type HeroSlidesProps = {
    heroSlidesData: HeroSlides[];
};
export default function FirstHeroRedesifnSection({ heroSlidesData }: HeroSlidesProps) {
    const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
    const [api, setApi] = useState<CarouselApi>();
    const navigate = useRouter();



    return (
        <>
            <section
                id="hero-section"
                className="relative flex flex-col items-center w-full pb-[50px] lg:pb-[80px]
        h-auto lg:h-[830px] bg-[#F7F6FD] overflow-hidden"
            >
                {/* VIDEO BACKGROUND */}
                <video
                    src="/images/bg_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* WHITE OVERLAY */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

                {/* BADGES */}
                <div className="relative flex flex-wrap justify-center gap-3 
   mt-[140px] sm:mt-[200px]">

                    {[
                        "15+ enterprise solutions",
                        "ISO Certified",
                        "5+ years of experience",
                    ].map((text, i) => (
                        <div
                            key={i}
                            className="
        bg-gradient-to-r from-[#E52445] via-[#7A5CFA] to-[#E52445]
        p-[1px]
        rounded-[17px]
        shadow-[0px_12px_48px_rgba(49,1,139,0.05)]
      "
                        >
                            {/* INNER WHITE LAYER (THIS WAS MISSING) */}
                            <div
                                className="
          bg-white
          rounded-[17px]
          px-4 py-[2px] 
          flex items-center justify-center
          text-[14px] leading-[21px] text-[#121926] font-poppins font-normal
        "
                            >
                                {text}
                            </div>
                        </div>
                    ))}
                </div>


                {/* TITLE */}
                <h1
                    className="
          relative text-[#060414] font-bold text-center font-poppins
          text-[22px] sm:text-[28px] lg:text-[48px]
          leading-tight mt-6
        "
                >
                    Crafting Innovation, Delivering Excellence
                </h1>

                {/* SUBTEXT */}
                <p className="relative max-w-[680px] mt-4 text-center text-[16px] sm:text-[18px] leading-[22px] text-[#121926A6] px-4">
                    We turn ideas into innovative tech solutions with custom software that <br />
                    boosts efficiency and growth.
                </p>


                {/* DESKTOP ICON ROW */}
                {/* DESKTOP ICON ROW */}
                <div className="hidden lg:flex max-w-[1138px] gap-[24px] mt-[40px] backdrop-blur-md p-4 rounded-xl">
                    {heroSlidesData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate.push(item.route)}
                            className="
        cursor-pointer 
        transition-transform duration-300 ease-in-out 
        hover:scale-110 hover:z-10
        "
                        >
                            <div
                                className="
          rounded-[12px]
          transition-all duration-300
          border border-transparent
          hover:border-[#E52445]
          
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
                <div className="lg:hidden w-full mt-[40px] xl:mt-[20px]">
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
                                    className="
  basis-1/3       /* mobile: 3 per slide */
  sm:basis-1/4    /* tablet: 4 per slide */
  flex justify-center
"
                                >
                                    <div
                                        className="
    flex items-center justify-center
    cursor-pointer "
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
                <div className="mt-[40px] sm:mt-[48px]">
                    <WhiteButton className="w-[240px]">
                        Explore All Services
                    </WhiteButton>
                </div>
            </section>
        </>
    );
}

