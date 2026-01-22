"use client";

import React, { useEffect, useRef, useState } from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";
import RedButton from "@/components/buttons/RedHoverButton";
import Link from "next/link";
import { useAnimateOnce } from "@/contexts/AnimationContext";

type NewsSectionProps = {
  newsData: NewsItem[];
};

/* ---------------- ANIMATED CARD WRAPPER ---------------- */
const AnimatedNewsCard = ({
  item,
  index,
  isMobile,
  sectionAnimated,
}: {
  item: NewsItem;
  index: number;
  isMobile: boolean;
  sectionAnimated: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

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
        threshold: 0.3, // Higher threshold - card must be 30% visible
        rootMargin: "0px 0px -15% 0px", // Trigger later (when card is higher in viewport)
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const isVisible = isMobile ? cardVisible : sectionAnimated;
  const delay = isMobile ? 0 : index * 150;

  return (
    <div ref={cardRef} className="perspective-[1200px]">
      {/* REVEAL LAYER - Advanced animation with scale, rotation */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1) rotateX(0deg)"
            : "translateY(48px) scale(0.92) rotateX(8deg)",
          transitionProperty: "opacity, transform",
          transitionDuration: "1000ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
          transformOrigin: "center bottom",
        }}
        className="will-change-[opacity,transform] transform-gpu"
      >
        {/* HOVER LAYER - Smooth lift effect */}
        <div
          className="
            transition-all
            duration-300
            ease-[cubic-bezier(0.25,0.1,0.25,1)]
            hover:-translate-y-2
            hover:shadow-[0px_20px_60px_rgba(49,1,139,0.12)]
          "
        >
          <NewsCard
            slug={item.slug}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        </div>
      </div>
    </div>
  );
};

const News = ({ newsData }: NewsSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Use context to track animation state (replaces global window pattern)
  const {
    shouldAnimate: contextShouldAnimate,
    markAnimated,
    hasAnimated: contextHasAnimated,
  } = useAnimateOnce("news");

  const [shouldAnimate, setShouldAnimate] = useState(contextShouldAnimate);
  const [hasAnimated, setHasAnimated] = useState(contextHasAnimated);
  const [isMobile, setIsMobile] = useState(false);

  /* ---------------- CHECK SCREEN SIZE ---------------- */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- INTERSECTION OBSERVER (DESKTOP) ---------------- */
  useEffect(() => {
    if (!shouldAnimate || !sectionRef.current || isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [shouldAnimate, isMobile]);

  return (
    <section ref={sectionRef} className="pt-16 pb-[94px]">
      <div className="mx-auto">
        <h2 className="mb-[48px] text-center font-poppins text-[32px] font-semibold leading-[40px] tracking-[0.03px] text-title">
          Latest Events
        </h2>

        <div className="max-w-[1440px] px-[38px] sm:px-[80px] mx-auto">
          <div
            className="
              grid
              gap-x-[16px] gap-y-[30px]
              justify-center
              grid-cols-[repeat(auto-fit,308px)]
            "
          >
            {newsData.map((item, index) => (
              <AnimatedNewsCard
                key={item.id}
                item={item}
                index={index}
                isMobile={isMobile}
                sectionAnimated={hasAnimated}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/news-list">
            <RedButton className="mt-[40px] w-[195px] h-[56px] text-[16px] border border-[#E52445]">
              See More
            </RedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
