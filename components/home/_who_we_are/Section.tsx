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
      <h1 className="--font-poppins mt-[56px] mb-[24px] font-semibold text-[32px] leading-[40px] tracking-[0.03px] text-center align-middle text-title">
        Who We Are
      </h1>

      <TabButtons
        about={<About data={aboutData} />}
        achievement={<Achievement data={achievementData} />}
      />
    </section>
  );
};

export default WhoWeAre;
