import React from "react";
import { FeaturedProjectsCarousel } from "./FeaturedProjectsCarousel";
import { FeaturedProject } from "@/lib/data/featuredProjectsData";

type FeaturedProjectsSectionProps = {
  projects: FeaturedProject[];
};

const FeaturedProjectsSection = ({ projects }: FeaturedProjectsSectionProps) => {
  return (
    <section className="max-w-[1440px] mx-auto font-poppins bg-white py-16">
      <div className="px-[16px] lg:px-[80px]">
        <FeaturedProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
