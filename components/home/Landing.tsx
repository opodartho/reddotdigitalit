import React from "react";
import { getAboutData, getAchievementData } from "@/lib/api/fetchWhoWeAre";
import WhoWeAre from "@/components/home/_who_we_are/Section";
import News from "@/components/home/_news/Section";
import Blogs from "@/components/home/_blogs/Section";
import { getLatestNews } from "@/lib/api/fetchNews";
import { getLatestBlogs } from "@/lib/api/fetchBlogs";
import ProductSolution from "@/components/home/_product_solution/Section";
import ReadyToTransform from "@/components/home/_ready_to_transform/Section";
import TestimonialSection from "@/components/home/_testimonial/Section";
import HeroSection from "@/components/home/_hero_section/Section";
import AreaOfOperations from "@/components/home/AreaOfOperations/Section";
import BackToTop from "@/components/home/_back_to_top/BackToTopButton";
import { getTestimonials } from "@/lib/api/fetchTestimonials";
import { ServicesCarousel } from "@/components/home/_services_carousel/Section";
import { getServices } from "@/lib/api/fetchServices";
import { getCaseStudies } from "@/lib/api/fetchCaseStudies";
import CaseStudies from "@/components/home/_case_studies/Section";
import { getOperationSections } from "@/lib/api/fetchAreaOfOperation";
import { getProductSolutions } from "@/lib/api/fetchProductSolutions";
import { getTransformData } from "@/lib/api/fetchTransform";
import { NavBar } from "@/components/NavBar/NavBar";
import TrustedPartners from "./TrustedPartner/sections";

export const Landing = async () => {
  const [
    newsData,
    caseStudiesData,
    blogsData,
    testimonialsData,
    servicesData,
    operationsData,
    productSolutionsData,
    transformData,
    aboutData,
    achievementData,
  ] = await Promise.all([
    getLatestNews(),
    getCaseStudies(),
    getLatestBlogs(),
    getTestimonials(),
    getServices(),
    getOperationSections(),
    getProductSolutions(),
    getTransformData(),
    getAboutData(),
    getAchievementData(),
  ]);

  return (
    <>
      <HeroSection />
      <ServicesCarousel services={servicesData} />
      <BackToTop />
      <ProductSolution solutions={productSolutionsData} />
      <AreaOfOperations sections={operationsData} />
      <WhoWeAre aboutData={aboutData} achievementData={achievementData} />
      <CaseStudies caseStudiesData={caseStudiesData} />
      <TrustedPartners />
      <Blogs blogsData={blogsData} />
      <News newsData={newsData} />
      <TestimonialSection testimonials={testimonialsData} />
      <ReadyToTransform transformData={transformData} />
    </>
  );
};
