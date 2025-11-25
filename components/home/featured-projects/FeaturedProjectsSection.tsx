import React from "react";
import { FeaturedProjectsCarousel } from "./FeaturedProjectsCarousel";
import { featuredProjects } from "@/lib/data/featuredProjectsData";

const FeaturedProjectsSection = () => {
  return (
    <section className="font-poppins bg-white py-16">
      <div className="px-[16px] lg:px-[80px]">
        <FeaturedProjectsCarousel projects={featuredProjects} />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
