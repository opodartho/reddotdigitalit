import React from "react";
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

export const Landing = async () => {
  const blogsData = await getLatestBlogs();
  const newsData = await getLatestNews();
  const testimonialsData = await getTestimonials();
  const servicesData = await getServices();

  return (
    <>
      <HeroSection />
      <ServicesCarousel services={servicesData} />
      <BackToTop />
      <ProductSolution />
      <WhoWeAre />
      <Blogs blogsData={blogsData} />
      <News newsData={newsData} />
      <TestimonialSection testimonials={testimonialsData} />
      <ReadyToTransform />
    </>
  );
};
