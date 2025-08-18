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
      <h1 className="pt-7 text-center text-2xl font-bold">Who We Are</h1>
      <p className="pt-2 text-center">
        Our cutting-edge Modular Data Center solutions enable to
        <br /> protect mission-critical data
      </p>
      <TabButtons
        about={<About data={aboutData} />}
        achievement={<Achievement data={achievementData} />}
      />
    </section>
  );
};

export default WhoWeAre;
