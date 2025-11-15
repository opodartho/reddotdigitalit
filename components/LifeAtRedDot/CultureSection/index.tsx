"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import Image from "next/image";

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

export default function CultureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const cultureData = [
    {
      id: 1,
      icon: "/icons/creativity.png",
      title: "Creativity Matters",
      desc: "We invest in your learning and development with mentorship programs, training opportunities, and clear career progression paths.",
    },
    {
      id: 2,
      icon: "/icons/collaboration.png",
      title: "Collaboration First",
      desc: "Work with talented, friendly teammates in an environment that values diverse perspectives and open communication.",
    },
    {
      id: 3,
      icon: "/icons/inclusion.png",
      title: "Respect & Inclusion",
      desc: "Build solutions that make real impact for clients across industries, from startups to enterprise organizations.",
    },
    {
      id: 4,
      icon: "/icons/impact.png",
      title: "Driven by Impact",
      desc: "Because life outside work matters too. Enjoy flexible schedules, remote work options, and comprehensive benefits.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    // 👇 GSAP triggers Framer Motion control
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => controls.start("visible"),
      onLeaveBack: () => controls.start("hidden"),
    });
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#F0F7FF] via-[#FFFAFE] to-[#FFEBEF]
                 mt-[68px] sm:mt-[92px] mb-[81px] sm:mb-[113px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] sm:px-[32px] lg:px-[40px] xl:px-0 text-center py-[90px] sm:py-[118px]">
        <div className="mb-[46px] sm:mb-[78px]">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[32px] font-bold text-[#060414]">
            Our Culture
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#121926] font-normal mt-2 text-left sm:text-center">
            360° Automated Sales & Distribution Management
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
          {cultureData.map((item) => (
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
