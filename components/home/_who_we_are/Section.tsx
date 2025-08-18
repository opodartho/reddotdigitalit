import React from "react";
import { TabButtons } from "@/components/home/_who_we_are/TabButtons";
import About from "@/components/home/_who_we_are/About";
import Achievement from "@/components/home/_who_we_are/Achievement";
import { getAboutData, getAchievementData } from "@/lib/api/fetchWhoWeAre";

const WhoWeAre = async () => {
  const about = await getAboutData();
  const achievements = await getAchievementData();

  return (
    <section>
      <h1 className="pt-7 text-center text-2xl font-bold">Who We Are</h1>
      <p className="pt-2 text-center">
        Our cutting-edge Modular Data Center solutions enable to
        <br /> protect mission-critical data
      </p>
      <TabButtons about={<About data={about} />} achievement={<Achievement data={achievements} />} />
    </section>
  );
};

export default WhoWeAre;
