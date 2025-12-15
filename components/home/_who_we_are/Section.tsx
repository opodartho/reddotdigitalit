import React from "react";
import { TabButtons } from "@/components/home/_who_we_are/TabButtons";
import About from "@/components/home/_who_we_are/About";
import Achievement from "@/components/home/_who_we_are/Achievement";
import { AboutData, AchievementData } from "@/lib/data/whoWeAreData";

interface WhoWeAreProps {
  aboutData: AboutData;
  achievementData: AchievementData[];
}

const WhoWeAre = ({ aboutData, achievementData }: WhoWeAreProps) => {
  return (
    <section>
      <h1 className="--font-poppins mt-18 font-semibold text-[32px] leading-[40px] tracking-[0.03px] text-center align-middle text-title">
        Who We Are
      </h1>
      <p className="--font-poppins font-normal text-[14px] leading-[22px] tracking-[0] text-center align-middle mt-[16px] text-subtitle">
       Driving digital transformation with expertise, technology, and a 
        <br /> passion for building impactful enterprise solutions.
      </p>
      <TabButtons
        about={<About data={aboutData} />}
        achievement={<Achievement data={achievementData} />}
      />
    </section>
  );
};

export default WhoWeAre;
