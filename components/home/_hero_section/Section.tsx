"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import RedButton from "@/components/buttons/RedHoverButton";
import WhiteButton from "@/components/buttons/WhiteHoverButton";
import TextType from "@/components/animation/TextType";


import { getHeroSlides } from "@/lib/api/fetchHeroSlides";
import type { HeroSlide } from "@/lib/data/heroSlidesData";

export default function HeroSection() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getHeroSlides();
      setSlides(data);
    })();
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      // Safe cleanup
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/BG.png')` }}>
      <div
        className="
          max-w-[1440px] mx-auto px-[16px] sm:px-[80px] pt-[120px] md:pt-[168px] pb-20
          flex flex-col  2xl:flex-row items-start justify-between 
        "
      >

        {/* LEFT SIDE */}
        <LeftSide />

        {/* RIGHT SIDE – FIXED FIGMA WIDTH */}

        <div className="mx-auto 2xl:mx-0 flex flex-col items-center overflow-hidden mt-[48px] 2xl:mt-0">

          {/* Embla viewport width matches EXACT card width */}
          <div
            ref={emblaRef}
            className=" w-[357px] lg:w-[579px]"
          >
            <div className="flex">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 w-[357px] lg:w-[579px]"
                >
                  <HeroCard slide={slide} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex gap-3 mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-6 h-[3px] rounded-full transition-all ${i === selectedIndex ? "bg-[#E52445]" : "bg-[#DDE0E4]"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- LEFT SIDE ---------------- */

function LeftSide() {
  return (
    <div className="max-w-[593px] flex flex-col gap-6 flex-1">
      {/* Badges */}
      <div className="flex flex-col sm:flex-row gap-3 ">
        <Badge>15+ enterprise solutions</Badge>
        <Badge>ISO Certified</Badge>
        <Badge>5+ years of experience</Badge>
      </div>


      {/* Heading */}
      <h1 className="text-[#060414] text-[30px] lg:text-[48px] font-medium leading-[130%]">
        <span className="block">
          Crafting{" "}
          <TextType
            text={["Innovation,"]}
            typingSpeed={150}
            deletingSpeed={90}
            pauseDuration={1000}
            className="text-[#E52445]"
            fixedWidth={10}
          />
        </span>

        <span className="block">
          <span className="text-[#E52445]">Delivering</span>{" "}
          <TextType
            text={["Excellence"]}
            typingSpeed={150}
            deletingSpeed={90}
            pauseDuration={1000}
            className="text-[#060414]"
            fixedWidth={11}
          />
        </span>
      </h1>




      {/* Description */}
      <p className="text-[14px] lg:text-[18px] text-[#121926] leading-[166%] max-w-[515px]">
        We turn ideas into innovative tech solutions with custom software that
        boosts efficiency and growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <RedButton className="h-[56px] w-full sm:w-[233px]  font-medium">
          Explore All Services
        </RedButton>

        <WhiteButton className="h-[56px] w-full sm:w-[233px] font-medium">
          Let’s work with us
        </WhiteButton>
      </div>
    </div>
  );
}

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span
    className="
      inline-flex
      self-start
      w-auto
      px-4 
      text-[12px]
      leading-[22px]
      bg-white
      border border-[#E4E1EF]
      rounded-full
      shadow-[0px_12px_48px_rgba(49,1,139,0.05)]
      text-[#70738F]
      whitespace-nowrap
    "
  >
    {children}
  </span>
);


/* ---------------- HERO CARD ---------------- */

function HeroCard({ slide }: { slide: HeroSlide }) {
  return (
    <div
      className="
    bg-white rounded-[12px] border border-[1px]
    w-[357px] h-[498px] lg:w-[579px] lg:h-[430px]
    flex flex-col cursor-pointer
     transition-all duration-300
    group
  "
    >

      {/* IMAGE BLOCK */}
      <div
        className="
          mx-auto mt-[8px] overflow-hidden rounded-[8px]
          w-[343px] h-[263px] lg:w-[563px] lg:h-[263px]
        "
      >
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          width={563}
          height={263}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="px-5 pt-5 pb-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-[18px] font-medium text-[#060414] group-hover:text-[#E52445] ">
            {slide.title}
          </h3>

          <p className="text-[14px] leading-[22px] text-[#697586] mt-2">
            {slide.description}
          </p>
        </div>

        {/* TAGS SECTION AT BOTTOM */}
        <div className="flex flex-wrap gap-3 mt-4">
          {slide.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[12px] bg-[#F5F5FA] rounded-full text-[#70738F]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
