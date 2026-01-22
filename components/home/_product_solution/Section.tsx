"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SolutionCard from "./SolutionCard";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import { useAnimateOnce } from "@/contexts/AnimationContext";

type Props = {
  solutions: ProductSolutionItem[];
};

/* ---------------- ANIMATED CARD WRAPPER ---------------- */
const AnimatedCard = ({
  item,
  index,
  onClick,
  isMobile,
  sectionAnimated,
  alreadyAnimatedFromContext,
}: {
  item: ProductSolutionItem;
  index: number;
  onClick: () => void;
  isMobile: boolean;
  sectionAnimated: boolean;
  alreadyAnimatedFromContext: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // If section already animated (from context), start visible to skip re-animation
  const [cardVisible, setCardVisible] = useState(alreadyAnimatedFromContext);

  useEffect(() => {
    // Skip observer if already animated/visible or not mobile
    if (!isMobile || !cardRef.current || alreadyAnimatedFromContext || cardVisible) return;

    // Helper to check if element is in viewport
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Check immediately if already in viewport
    if (isInViewport(cardRef.current)) {
      setCardVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, alreadyAnimatedFromContext, cardVisible]);

  // Use OR logic to prevent flip-flop when isMobile changes after hydration
  const isVisible = cardVisible || sectionAnimated;
  const delay = isMobile ? 0 : index * 200;

  return (
    <div ref={cardRef} onClick={onClick} className="cursor-pointer">
      {/* REVEAL LAYER (SLIDE UP + STAGGER) */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1)"
            : "translateY(56px) scale(0.94)",
          transitionProperty: "opacity, transform",
          transitionDuration: "900ms",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: isVisible ? `${delay}ms` : "0ms",
        }}
        className="will-change-[opacity,transform] transform-gpu"
      >
        {/* HOVER LAYER (FAST & SMOOTH, NO TRANSLATE CONFLICT) */}
        <div
          className="
            transition-transform
            duration-[220ms]
            ease-[cubic-bezier(0.4,0,0.2,1)]
            hover:scale-[1.02]
          "
        >
          <SolutionCard item={item} />
        </div>
      </div>
    </div>
  );
};

const Solutions = ({ solutions }: Props) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement | null>(null);

  // Use context to track animation state (replaces global window pattern)
  const {
    shouldAnimate: contextShouldAnimate,
    markAnimated,
    hasAnimated: contextHasAnimated,
  } = useAnimateOnce("productSolutions");

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
  }, [shouldAnimate, isMobile, markAnimated]);

  /* ---------------- INTERSECTION OBSERVER (MOBILE) ---------------- */
  useEffect(() => {
    if (!isMobile || !sectionRef.current || contextHasAnimated) return;

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
  }, [isMobile, contextHasAnimated, markAnimated]);

  return (
    <section
      ref={sectionRef}
      id="product_solution"
      className="max-w-[1440px] mx-auto pb-[56px] px-[16px] sm:px-[80px]"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-[54px]">
        <h2 className="font-poppins text-[32px] leading-[40px] font-semibold text-[#060414]">
          Our Product Solution
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 mx-auto">
        {solutions.map((item, index) => (
          <AnimatedCard
            key={index}
            item={item}
            index={index}
            onClick={() => router.push(`/customize-product/${index + 1}`)}
            isMobile={isMobile}
            sectionAnimated={hasAnimated}
            alreadyAnimatedFromContext={contextHasAnimated}
          />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
