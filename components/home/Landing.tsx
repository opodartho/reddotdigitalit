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
import Footer from "@/components/home/Footer";

export const Landing = async () => {
  const newsData = await getLatestNews();
  const blogsData = await getLatestBlogs();

  return (
    <>
      <HeroSection />
      <BackToTop />
      <ProductSolution />
      <WhoWeAre />
      <Blogs blogsData={blogsData} />
      <News newsData={newsData} />
      <TestimonialSection />
      <ReadyToTransform />
      <Footer />
    </>
  );
};
