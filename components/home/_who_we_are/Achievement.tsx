"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AchievementData } from "@/lib/data/whoWeAreData";
import { useAnimateOnce } from "@/contexts/AnimationContext";

/* ----------------------------------------
   CARD (handles count-up animation)
---------------------------------------- */
const AchievementCard = ({
  title,
  value,
  description,
  icon,
  bgGradient,
  isVisible,
  alreadyAnimatedFromContext,
}: AchievementData & { isVisible: boolean; alreadyAnimatedFromContext: boolean }) => {
  /* Parse number */
  const match = value.match(/\d+/);
  const numericValue = match ? parseInt(match[0], 10) : 0;
  const prefix = value.slice(0, match?.index ?? 0);
  const suffix = value.slice(
    (match?.index ?? 0) + (match?.[0]?.length ?? 0)
  );

  const [displayValue, setDisplayValue] = useState(alreadyAnimatedFromContext ? numericValue : 0);
  const hasCounted = useRef(alreadyAnimatedFromContext);
  const rafRef = useRef<number | null>(null);
  const duration = 1200;

  /* COUNT-UP STARTS WHEN CARD IS VISIBLE */
  useEffect(() => {
    if (!isVisible || hasCounted.current) return;

    hasCounted.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * numericValue));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(numericValue);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, numericValue]);

  return (
    <div
      className={`
        w-[303px] h-[345px]
        flex flex-col mx-auto rounded-xl p-8
        text-left shadow-md ${bgGradient}
        hover:scale-[1.05] hover:shadow-lg
        transition-transform duration-300
      `}
    >
      <div className="mb-4">
        <Image src={icon} alt={title} width={26} height={26} />
      </div>

      <h3 className="mb-3 text-[#6F6F6F] font-poppins text-[14px] leading-[19px] font-normal">{title}</h3>

      <p className="mb-4 text-black font-poppins font-normal text-[50px] leading-[40px] tracking-[0px]">
        {prefix}
        {displayValue}
        {suffix}
      </p>

      <p className="text-black font-normal font-poppins mt-auto mb-[46px]">
        {description}
      </p>
    </div>
  );
};

/* ----------------------------------------
   ANIMATED CARD WRAPPER
---------------------------------------- */
const AnimatedAchievementCard = ({
  item,
  index,
  isMobile,
  mounted,
  sectionAnimated,
  alreadyAnimatedFromContext,
}: {
  item: AchievementData;
  index: number;
  isMobile: boolean;
  mounted: boolean;
  sectionAnimated: boolean;
  alreadyAnimatedFromContext: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // If section already animated (from context), start visible to skip re-animation
  const [cardVisible, setCardVisible] = useState(alreadyAnimatedFromContext);

  useEffect(() => {
    // Skip observer if not mounted, already animated/visible, or not mobile
    if (!mounted || !isMobile || !cardRef.current || alreadyAnimatedFromContext || cardVisible) return;

    // Helper to check if element is in viewport
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Check immediately if already in viewport
    if (isInViewport(cardRef.current)) {
      setTimeout(() => {
        setCardVisible(true);
      }, 150);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add small delay before triggering animation on mobile
          setTimeout(() => {
            setCardVisible(true);
          }, 150);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [mounted, isMobile, alreadyAnimatedFromContext, cardVisible]);

  // On mobile: only use cardVisible (individual triggers)
  // On desktop: use sectionAnimated (staggered group animation)
  const isVisible = isMobile ? cardVisible : (cardVisible || sectionAnimated);
  const delay = isMobile ? 0 : index * 150;

  return (
    <div ref={cardRef}>
      {/* REVEAL LAYER - slide up + scale animation */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1)"
            : "translateY(48px) scale(0.94)",
          transitionProperty: "opacity, transform",
          transitionDuration: "900ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
        }}
        className="will-change-[opacity,transform] transform-gpu"
      >
        <AchievementCard
          {...item}
          isVisible={isVisible}
          alreadyAnimatedFromContext={alreadyAnimatedFromContext}
        />
      </div>
    </div>
  );
};

/* ----------------------------------------
   SECTION
---------------------------------------- */
const Achievement = ({ data }: { data: AchievementData[] }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Use context to track animation state
  const {
    shouldAnimate: contextShouldAnimate,
    markAnimated,
    hasAnimated: contextHasAnimated,
  } = useAnimateOnce("whoAchievement");

  const [shouldAnimate, setShouldAnimate] = useState(contextShouldAnimate);
  const [hasAnimated, setHasAnimated] = useState(contextHasAnimated);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* ---------------- HYDRATION SAFE: Wait for mount ---------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- CHECK SCREEN SIZE ---------------- */
  useEffect(() => {
    if (!mounted) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mounted]);

  /* ---------------- INTERSECTION OBSERVER (DESKTOP) ---------------- */
  useEffect(() => {
    if (!mounted || !shouldAnimate || !sectionRef.current || isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Double-check we're on desktop when callback fires (prevents race condition)
        if (entry.isIntersecting && window.innerWidth >= 640) {
          setHasAnimated(true);
          setShouldAnimate(false);
          markAnimated();
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted, shouldAnimate, isMobile, markAnimated]);

  /* ---------------- INTERSECTION OBSERVER (MOBILE) ---------------- */
  useEffect(() => {
    if (!mounted || !isMobile || !sectionRef.current || contextHasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAnimated();
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted, isMobile, contextHasAnimated, markAnimated]);

  return (
    <section
      ref={sectionRef}
      className="
        max-w-[1440px] mx-auto px-[16px] sm:px-[80px]
        mt-[48px]
        grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
        gap-y-[24px]
      "
    >
      {data.map((item, index) => (
        <AnimatedAchievementCard
          key={index}
          item={item}
          index={index}
          isMobile={isMobile}
          mounted={mounted}
          sectionAnimated={hasAnimated}
          alreadyAnimatedFromContext={contextHasAnimated}
        />
      ))}
    </section>
  );
};

export default Achievement;
