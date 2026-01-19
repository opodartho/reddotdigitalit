"use client";

import { useEffect, useState } from "react";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

export default function CallToActionSection({
  title,
  description,
  onScheduleClick,
}: {
  title: string;
  description: string;
  onScheduleClick?: () => void;
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
      className="relative w-full px-[16px] sm:px-[80px] py-[104px] lg:py-[133px] mx-auto max-w-[1440px]"
    >
      <div
        className="w-full flex justify-center items-center overflow-hidden bg-white bg-no-repeat bg-cover bg-center rounded-[24px] lg:rounded-[48px] py-[50px] lg:py-[120px] px-[22px] lg:px-[133px] transition-all duration-500"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[948px]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#060414] leading-[38px] sm:leading-[44px] mb-[38px] lg:mb-4">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#121926] mb-[38px] lg:mb-[50px] max-w-[900px]">
            {description}
          </p>
          <WhiteButton
            type="button"
            className="w-[195px] h-[56px] text-[16px] leading-[24px]"
            onClick={onScheduleClick}
          >
            Schedule a Call
          </WhiteButton>
        </div>
      </div>
    </section>
  );
}
