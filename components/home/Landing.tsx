import React from "react";
import { getAboutData, getAchievementData } from "@/lib/api/fetchWhoWeAre";
import WhoWeAre from "@/components/home/_who_we_are/Section";
import News from "@/components/home/_news/Section";
import Blogs from "@/components/home/_blogs/Section";
import { getLatestNews } from "@/lib/api/fetchNews";
import { getLatestBlogs } from "@/lib/api/fetchBlogs";
import ReadyToTransform from "@/components/home/_ready_to_transform/Section";
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
import { ServiceWeServeTabs } from "@/components/home/_service_we_serve/ServiceWeServe";
import TestimonialSection from "@/components/home/_testimonial/Section";
import TrustedPartners from "./TrustedPartner/TrustedPartners";
import FeaturedProjectsSection from "./featured-projects/FeaturedProjectsSection";
import Solutions from "@/components/home/_product_solution/Section";
import { getHeroes } from "@/lib/api/home-hero-redesign/fetchHero";
import FirstHeroRedesignSection from "./_first_hero_redesign/Section";
import { getTrustedPartners } from "@/lib/api/fetchTrustedPartner";
import { getFeaturedProjects } from "@/lib/api/fetchFeaturedProjects";
import ReelSection from "./ReelSection";

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
    trustedPartners,
    heroSlidesData,
    featuredProjectsData
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
    getTrustedPartners(),
    getHeroes(),
    getFeaturedProjects()
  ]);

  return (


    <div >

      <FirstHeroRedesignSection heroSlidesData={heroSlidesData} />
      <FeaturedProjectsSection projects={featuredProjectsData} />
      <ServicesCarousel services={servicesData} />
      <BackToTop />
      <Solutions solutions={productSolutionsData} />
      <ReelSection />
      <AreaOfOperations sections={operationsData} />
      <WhoWeAre aboutData={aboutData} achievementData={achievementData} />
      {/*<CaseStudies caseStudiesData={caseStudiesData} />*/}
      <ServiceWeServeTabs />
      <TrustedPartners logos={trustedPartners} />
      {/*<Blogs blogsData={blogsData} />*/}
      <News newsData={newsData} />
      <TestimonialSection testimonials={testimonialsData} />
      <ReadyToTransform transformData={transformData} />
    </div>

  );
};
