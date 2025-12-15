"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import Image from "next/image";

// ✅ Types come from API layer (lib/api)
import type { CultureItem } from "@/lib/api/life/getCultureData";
import type { CultureSectionMeta } from "@/lib/api/life/getCultureSectionData";

interface CultureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CultureCard: React.FC<CultureCardProps> = ({ icon, title, desc }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="
        flex flex-col items-start justify-start text-left
        bg-white rounded-[14px]
        shadow-[0_4px_12px_rgba(49,1,139,0.05)]
        w-[308px] h-[364px]
        px-[26px] pt-[65px] pb-[42px]
        hover:-translate-y-3 hover:shadow-[0_8px_24px_rgba(49,1,139,0.1)]
        transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
      "
    >
      <div className="w-[68px] h-[68px] mb-[43px] relative">
        <Image
          src={icon}
          alt={title}
          width={68}
          height={68}
          className="object-contain"
        />
      </div>
      <h3 className="text-[18px] font-semibold text-[#060414] leading-[27px] mb-[23px]">
        {title}
      </h3>
      <p className="text-[14px] font-normal text-[#121926] leading-[24px] w-[253px]">
        {desc}
      </p>
    </motion.div>
  );
};

// ✅ NOW: Data comes from props (fetched in page.tsx using lib/api)
export default function CultureSection({
  meta,
  data,
}: {
  meta: CultureSectionMeta;
  data: CultureItem[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

useEffect(() => {
  if (!sectionRef.current) return;

  let isMounted = true;

  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (isMounted) controls.start("visible");
      },
      onLeaveBack: () => {
        if (isMounted) controls.start("hidden");
      },
    });
  }, sectionRef);

  return () => {
    isMounted = false;
    ctx.revert(); // ✅ cleanup ScrollTrigger
  };
}, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#F0F7FF] via-[#FFFAFE] to-[#FFEBEF]
                 mt-[68px] sm:mt-[92px] mb-[68px] sm:mb-[92px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] sm:px-[32px] lg:px-[40px] xl:px-0 text-center py-[56px] sm:py-[80px]">
        <div className="mb-[46px] sm:mb-[78px]">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[32px] font-bold text-[#060414]">
            {meta.heading}
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#121926] font-normal mt-2 text-left sm:text-center">
            {meta.subtitle}
          </p>
        </div>

        {/* 🎴 Cards Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] justify-items-center"
        >
          {data.map((item) => (
            <CultureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
