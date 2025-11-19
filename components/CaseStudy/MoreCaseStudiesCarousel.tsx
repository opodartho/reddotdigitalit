"use client";

import * as React from "react";
import { CaseStudyItem } from "@/lib/data/caseStudiesData";
import { CaseStudiesCarousel } from "@/components/home/_case_studies/CaseStudiesCarousel";

type MoreCaseStudiesCarouselProps = {
  caseStudiesData: CaseStudyItem[];
};

const MoreCaseStudiesCarousel = ({ caseStudiesData }: MoreCaseStudiesCarouselProps) => {
  return (
    <section className="w-full py-[156px] bg-white  px-[18px] lg:px-20 ">
      <h2 className="text-center text-[32px] font-poppins font-[600] mb-[66px] text-[#000000]">
        More Case Studies
      </h2>

      <div className="container [1280px] mx-auto ">
        <CaseStudiesCarousel caseStudiesData={caseStudiesData} />
      </div>
    </section>
  );
};

export default MoreCaseStudiesCarousel;
