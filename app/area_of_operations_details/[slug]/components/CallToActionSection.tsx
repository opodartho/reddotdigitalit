
"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

export default function CallToActionSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [bgImage, setBgImage] = useState("/svgs/cta-bg-mobile.svg"); // default mobile

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      // ✅ Use mobile background for sm + md (<1024px)
      if (width < 1024) {
        setBgImage("/svgs/cta-bg-mobile.svg");
      } else {
        setBgImage("/svgs/cta-bg.svg");
      }
    };

    // run on mount + on resize
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section
      className="relative w-full  px-[16px] sm:px-[80px] py-[104px] lg:py-[133px]  ">
      <div className="w-full flex justify-center items-center overflow-hidden bg-white 
                 bg-no-repeat bg-cover bg-center 
                 rounded-[24px] lg:rounded-[48px] 
                 mx-auto container py-[50px]  lg:py-[120px] px-[22px] lg:px-[133px] 
                 transition-all duration-500"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        {/* 🌿 Text + Button */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center container">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#060414] leading-[38px] sm:leading-[44px] mb-[38px] lg:mb-4">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#121926] mb-[38px] lg:mb-[50px]  container">
            {description}
          </p>
          {/* CTA Button (Reused from UI library) */}
         { /*
          <Button
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]
                                     transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:-translate-y-[6px] hover:shadow-[0_12px_20px_rgba(229,36,69,0.35)]
             active:translate-y-[2px]"
          >
            Schedule a Call <ArrowRight className="w-4 h-4" />
          </Button>
          */
}       
                 <WhiteButton
                   className="w-[195px] h-[56px] text-[16px] leading-[24px]"
                 >
                  Schedule a Call
                </WhiteButton>
      </div>
      </div>
    </section>
  );
};
