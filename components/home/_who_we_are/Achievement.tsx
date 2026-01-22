"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useInView,
  Variants,
} from "framer-motion";
import { AchievementData } from "@/lib/data/whoWeAreData";
import { useAnimateOnce } from "@/contexts/AnimationContext";

/* ----------------------------------------
   MOTION VARIANTS (JUMP EFFECT)
---------------------------------------- */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      mass: 0.8,
    },
  },
};

/* ----------------------------------------
   CARD
---------------------------------------- */
const AchievementCard = ({
  title,
  value,
  description,
  icon,
  bgGradient,
  sectionHasAnimated,
}: AchievementData & { sectionHasAnimated: boolean }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-20% 0px",
  });

  /* Parse number */
  const match = value.match(/\d+/);
  const numericValue = match ? parseInt(match[0], 10) : 0;
  const prefix = value.slice(0, match?.index ?? 0);
  const suffix = value.slice(
    (match?.index ?? 0) + (match?.[0]?.length ?? 0)
  );

  const [displayValue, setDisplayValue] = useState(0);
  const hasCounted = useRef(false);
  const rafRef = useRef<number | null>(null);
  const duration = 1200;

  /* ✅ COUNT-UP STARTS WHEN CARD IS VISIBLE */
  useEffect(() => {
    if (!isInView || hasCounted.current) return;

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
  }, [isInView, numericValue]);

  /* ✅ If section already animated before, show final value */
  useEffect(() => {
    if (sectionHasAnimated) {
      setDisplayValue(numericValue);
      hasCounted.current = true;
    }
  }, [numericValue, sectionHasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
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
    </motion.div>
  );
};

/* ----------------------------------------
   SECTION (VISIT ONCE)
---------------------------------------- */
const Achievement = ({ data }: { data: AchievementData[] }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Use context to track animation state (replaces global window pattern)
  const {
    markAnimated,
    hasAnimated: contextHasAnimated,
  } = useAnimateOnce("whoAchievement");

  const [hasAnimatedBefore, setHasAnimatedBefore] = useState(contextHasAnimated);

  /* First visit → animate */
  useEffect(() => {
    if (!isInView || hasAnimatedBefore) return;

    controls.start("visible");
    markAnimated();
    setHasAnimatedBefore(true);
  }, [isInView, hasAnimatedBefore, controls, markAnimated]);

  /* Revisit → force visible */
  useEffect(() => {
    if (hasAnimatedBefore) {
      controls.set("visible");
    }
  }, [hasAnimatedBefore, controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="
        max-w-[1440px] mx-auto px-[16px] sm:px-[80px]
        mt-[48px]
        grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
        gap-y-[24px]
      "
    >
      {data.map((item, index) => (
        <AchievementCard key={index} {...item} sectionHasAnimated={hasAnimatedBefore} />
      ))}
    </motion.section>
  );
};

export default Achievement;
