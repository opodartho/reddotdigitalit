import React from "react";
import WhoWeAre from "@/components/home/_who_we_are/Section";
import News from "@/components/home/_news/Section";
import { getLatestNews } from "@/lib/api/fetchNews";
import ProductSolution from "@/components/home/_product_solution/Section";
import ReadyToTransform from "@/components/home/_ready_to_transform/Section";
import TestimonialSection from "@/components/home/_testimonial/Section";
import HeroSection from "@/components/home/_hero_section/Section";
import AreaOfOperations from "@/components/home/AreaOfOperations/Section";
export const Landing = async () => {
  const newsData = await getLatestNews();

  return (
    <>
      <HeroSection />
      <ProductSolution />
      <AreaOfOperations />
      <News newsData={newsData} />
      <WhoWeAre />
      <TestimonialSection />
      <ReadyToTransform />
    </>
  );
};
