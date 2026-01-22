"use client";

import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
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
import { useAnimateOnce } from "@/contexts/AnimationContext";

/* ----------------------------------
   TYPES
----------------------------------- */
export type HeroSlidesProps = {
  heroSlidesData: HeroSlides[];
};

/* ----------------------------------
   MOTION VARIANTS
----------------------------------- */

/* Cinematic hero rhythm */
const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.05,
    },
  },
};

/* Faster cascade for cards */
const cardsStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/* Badges + button */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

/* ⭐ TITLE — SOFT GRADUAL EMERGENCE */
const titleFade: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.25, 1, 0.35, 1],
    },
  },
};

/* Cards */
const cardFade: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ----------------------------------
   COMPONENT
----------------------------------- */
export default function FirstHeroRedesignSection({
  heroSlidesData,
}: HeroSlidesProps) {
  const router = useRouter();
  const autoplay = useRef(
    Autoplay({ delay: 2600, stopOnInteraction: false })
  );
  const [, setApi] = useState<CarouselApi>();

  // Use context to track animation state (replaces global window pattern)
  const { shouldAnimate: contextShouldAnimate, markAnimated } = useAnimateOnce("hero");

  // Use local state initialized from context to ensure proper first-render behavior
  const [shouldAnimate] = useState(() => contextShouldAnimate);

  // Mark as animated after first render
  const hasMarkedRef = useRef(false);
  if (!hasMarkedRef.current && shouldAnimate) {
    hasMarkedRef.current = true;
    markAnimated();
  }

  return (
    <section
      id="hero-section"
      className="
        relative flex flex-col items-center w-full
        pb-[56px] lg:pb-[90px]
        h-auto lg:h-[860px]
        bg-[#F7F6FD] overflow-hidden
      "
    >
      {/* ---------------- VIDEO BACKGROUND ---------------- */}
      <video
        src="/images/bg_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ---------------- OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px]" />

      {/* ---------------- HERO CONTENT ---------------- */}
      <motion.div
        variants={heroStagger}
        initial={shouldAnimate ? "hidden" : "show"}
        animate="show"
        suppressHydrationWarning
        className="relative flex flex-col items-center"
      >
        {/* ---------------- BADGES ---------------- */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3
          mt-[150px] sm:mt-[210px]"
        >
          {[
            "15+ enterprise solutions",
            "ISO Certified",
            "5+ years of experience",
          ].map((text, i) => (
            <div
              key={i}
              className="
                bg-gradient-to-r from-[#E52445] via-[#7A5CFA] to-[#E52445]
                p-[1px] rounded-[18px]
              "
            >
              <div
                className="
                  bg-white rounded-[18px]
                  px-4 py-[3px]
                  text-[14px]
                  text-[#121926]
                "
              >
                {text}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ---------------- TITLE (SOFT GRADUATION) ---------------- */}
        <motion.h1
          variants={titleFade}
          className="
            text-[#060414] font-bold text-center
            text-[22px] sm:text-[30px] lg:text-[50px]
            leading-[1.15] mt-7
          "
        >
          Crafting Innovation, Delivering Excellence
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="relative max-w-[680px] mt-4 text-center text-[16px] sm:text-[18px] leading-[22px] text-[#121926A6] px-4"
        >
          We turn ideas into innovative tech solutions with custom software that{" "}
          <br />
          boosts efficiency and growth.
        </motion.p>

        {/* ---------------- DESKTOP ICONS ---------------- */}
        <motion.div
          variants={cardsStagger}
          className="
            hidden lg:flex max-w-[1138px]
            gap-[28px] mt-[46px] p-4
          "
        >
          {heroSlidesData.map((item, index) => (
            <motion.button
              key={item.id}
              variants={cardFade}
              transition={{
                delay: index === 0 ? 0 : 0.08,
              }}
              whileHover={{ scale: 1.08 }}
              onClick={() => router.push(item.route)}
              className="cursor-pointer"
            >
              <div className="
                rounded-[14px]
                border border-transparent
                hover:border-[#E52445]
                transition-all
              ">
                <Image
                  src={item.imageUrl}
                  alt=""
                  width={160}
                  height={160}
                  loading="lazy"
                  className="rounded-[14px] object-contain"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* ---------------- MOBILE CAROUSEL ---------------- */}
        <motion.div
          variants={fadeUp}
          className="lg:hidden w-full mt-[40px]"
        >
          <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="gap-3">
              {heroSlidesData.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="
                    basis-1/3
                    sm:basis-1/4
                    flex justify-center
                  "
                >
                  <img
                    src={slide.imageUrl}
                    alt=""
                    className="w-60% h-60% sm:w-100% sm:h-100% object-contain cursor-pointer"
                    onClick={() => router.push(slide.route)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>


        {/* ---------------- CTA BUTTON ---------------- */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-[46px] sm:mt-[54px] mb-[56px] lg:mb-0"
        >
          <WhiteButton
            className="w-[248px]"
            onClick={() =>
              document
                .getElementById("product_solution")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore All Services
          </WhiteButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
