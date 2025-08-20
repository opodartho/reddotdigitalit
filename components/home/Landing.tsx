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
import BackToTop from "@/components/home/_back_to_top/BackToTopButton";
import { getTestimonials } from "@/lib/api/fetchTestimonials";
import { ServicesCarousel } from "@/components/home/_services_carousel/Section";
import { getServices } from "@/lib/api/fetchServices";
import { getCaseStudies } from "@/lib/api/fetchCaseStudies";
import CaseStudies from "@/components/home/_case_studies/Section";
import { getTransformData } from "@/lib/api/fetchTransform";
import { NavBar } from "@/components/NavBar/NavBar";

export const Landing = async () => {
  const [
    newsData,
    caseStudiesData,
    blogsData,
    testimonialsData,
    servicesData,
    transformData,
    aboutData,
    achievementData,
  ] = await Promise.all([
    getLatestNews(),
    getCaseStudies(),
    getLatestBlogs(),
    getTestimonials(),
    getServices(),
    getTransformData(),
    getAboutData(),
    getAchievementData(),
  ]);

  return (
    <>
      <HeroSection />
      <ServicesCarousel services={servicesData} />
      <BackToTop />
      <ProductSolution />
      <WhoWeAre aboutData={aboutData} achievementData={achievementData} />
      <CaseStudies caseStudiesData={caseStudiesData} />
      <Blogs blogsData={blogsData} />
      <News newsData={newsData} />
      <TestimonialSection testimonials={testimonialsData} />
      <ReadyToTransform transformData={transformData} />
    </>
  );
};
