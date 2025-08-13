import React from "react";
import WhoWeAre from "@/components/home/_who_we_are/Section";
import News from "@/components/home/_news/Section";
import ProductSolution from "@/components/home/_product_solution/Section";
import ReadyToTransform from "@/components/home/_ready_to_transform/Section";
import TestimonialSection from "@/components/home/_testimonial/Section";
import HeroSection from "@/components/home/_hero_section/Section";
import { getLatestNews } from "@/lib/api/fetchNews";
import { getCaseStudies } from "@/lib/api/fetchCaseStudies";
import CaseStudies from "@/components/home/_case_studies/Section";

export const Landing = async () => {
  const [newsData, caseStudiesData] = await Promise.all([
    getLatestNews(),
    getCaseStudies(),
  ]);

  return (
    <>
      <HeroSection />
      <ProductSolution />
      <CaseStudies caseStudiesData={caseStudiesData} />
      <News newsData={newsData} />
      <WhoWeAre />
      <TestimonialSection />
      <ReadyToTransform />
    </>
  );
};
