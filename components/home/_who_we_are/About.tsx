"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AboutData } from "@/lib/data/whoWeAreData";
import WhiteButton from "@/components/buttons/WhiteHoverButton";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useAnimateOnce } from "@/contexts/AnimationContext";

type AboutProps = {
  data: AboutData;
};

const About = ({ data }: AboutProps) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  // Use context to track animation state (replaces global window pattern)
  const {
    shouldAnimate: contextShouldAnimate,
    markAnimated,
    hasAnimated: contextHasAnimated,
  } = useAnimateOnce("whoAbout");

  const [shouldAnimate, setShouldAnimate] = useState(contextShouldAnimate);
  const [hasAnimated, setHasAnimated] = useState(contextHasAnimated);
  const [triggerTextEffect, setTriggerTextEffect] = useState(contextHasAnimated);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile-specific animation states - start visible if already animated from context
  const [textVisible, setTextVisible] = useState(contextHasAnimated);
  const [imagesVisible, setImagesVisible] = useState(contextHasAnimated);

  /* ---------------- CHECK SCREEN SIZE ---------------- */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- DESKTOP OBSERVER ---------------- */
  useEffect(() => {
    if (!shouldAnimate || !sectionRef.current || isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          setTriggerTextEffect(true);
          setShouldAnimate(false);
          markAnimated();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldAnimate, isMobile, markAnimated]);

  /* ---------------- MOBILE: IMAGES OBSERVER ---------------- */
  useEffect(() => {
    // Skip if not mobile or already animated/visible
    if (!isMobile || !imagesRef.current || contextHasAnimated || imagesVisible) return;

    // Helper to check if element is in viewport
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Check immediately if already in viewport
    if (isInViewport(imagesRef.current)) {
      setImagesVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImagesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(imagesRef.current);
    return () => observer.disconnect();
  }, [isMobile, contextHasAnimated, imagesVisible]);

  /* ---------------- MOBILE: TEXT OBSERVER ---------------- */
  useEffect(() => {
    // Skip if not mobile or already animated/visible
    if (!isMobile || !textRef.current || contextHasAnimated || textVisible) return;

    // Helper to check if element is in viewport
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Check immediately if already in viewport
    if (isInViewport(textRef.current)) {
      setTextVisible(true);
      setTriggerTextEffect(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          setTriggerTextEffect(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [isMobile, contextHasAnimated, textVisible]);

  /* ---------------- MOBILE: MARK AS ANIMATED ---------------- */
  useEffect(() => {
    if (!isMobile || !sectionRef.current || contextHasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAnimated();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile, contextHasAnimated, markAnimated]);

  // Determine visibility - use OR logic to prevent flip-flop when isMobile changes
  const isTextAnimated = textVisible || hasAnimated;
  const isImagesAnimated = imagesVisible || hasAnimated;

  return (
    <div
      ref={sectionRef}
      className="container grid grid-cols-1 md:grid-cols-2 gap-x-[84px] gap-y-12 px-10 mt-[64px] md:mt-[81px]"
    >
      {/* LEFT: TEXT */}
      <div
        ref={textRef}
        className={cn(
          "order-2 md:order-1  flex flex-col justify-start space-y-4 who-about-top-text",
          isTextAnimated && "who-about-top-text-visible"
        )}
      >
        <h2 className="--font-poppins font-normal text-[25px] leading-[40px] tracking-[0.03px]">
          {data.title}
        </h2>

        <div className="--font-poppins mt-[12px]">
          {triggerTextEffect ? (
            <TextGenerateEffect
              words={data.subtitle}
              className="font-normal"
              textClassName="text-[32px] leading-[40px] tracking-[0.03px]"
            />
          ) : (
            <p className="font-normal text-[32px] leading-[40px] tracking-[0.03px]">
              {data.subtitle}
            </p>
          )}
        </div>

        <p className="--font-poppins font-normal text-[16px] leading-[30px] mt-[14px]">
          {data.description}
        </p>

        <WhiteButton
          onClick={() => router.push("/about-us")}
          className="--font-poppins font-medium text-[16px] w-[207px] h-[56px] mt-[36px]"
        >
          Read More
        </WhiteButton>
      </div>

      {/* RIGHT: IMAGES */}
      <div
        ref={imagesRef}
        className={cn(
          "order-1 md:order-2 grid gap-4 sm:mb-14 who-about-bottom-images",
          isImagesAnimated && "who-about-bottom-images-visible"
        )}
      >

        <div className="relative">
          <Image
            src={data.images[0]}
            alt="Group"
            width={539}
            height={230}
            className="w-full h-[230px] rounded-[18px] object-cover transition-transform duration-300 hover:scale-104"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={data.images[1]}
            alt="Speaker"
            width={263}
            height={232}
            className="w-full h-[232px] rounded-[18px] object-cover transition-transform duration-300 hover:scale-104"
          />
          <Image
            src={data.images[2]}
            alt="Event"
            width={263}
            height={232}
            className="w-full h-[232px] rounded-[18px] object-cover transition-transform duration-300 hover:scale-104"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
