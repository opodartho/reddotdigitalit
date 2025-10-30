"use client";

import CaseStudyHero from "@/components/CaseStudy/CaseStudyHeroSection";
import CaseStudyAbout from "@/components/CaseStudy/CaseStudyAbout";
import CaseStudyImageBlock from "@/components/CaseStudy/CaseStudyImageBlock";
import CaseStudyProblemChallengeSolution from "@/components/CaseStudy/CaseStudyProblemChallengeSolution";
import CaseStudyImageGallery from "@/components/CaseStudy/CaseStudyImageGallery";
import CaseStudyFeatures from "@/components/CaseStudy/CaseStudyFeatures";
import CaseStudyTechnology from "@/components/CaseStudy/CaseStudyTechnology";
import CaseStudyCTA from "@/components/CaseStudy/CaseStudyCTA";
import CaseStudyOutcome from "@/components/CaseStudy/CaseStudyOutcome"
import CaseStudyTestimonials from "@/components/CaseStudy/CaseStudyTestimonials"
import MoreCaseStudiesCarousel from "@/components/CaseStudy/MoreCaseStudiesCarousel";
import { staticCaseStudiesData } from "@/lib/data/caseStudiesData";
  


export default function CaseStudyPage() {
  return (
    <main
      className="
        flex flex-col items-center justify-center 
        bg-[#FFFFFF] overflow-hidden 
      "
    >
      {/* 1️⃣ Hero Section */}
      <section className="w-full">
        <CaseStudyHero />
      </section>

      {/* 2️⃣ About the Project */}
      <section className="w-full">
        <CaseStudyAbout />
      </section>

      {/* 3️⃣ Project Banner */}
      <section className="w-full">
        <CaseStudyImageBlock />
      </section>

      {/* 4️⃣ Problem, Challenges & Solutions */}
      <section className="w-full">
        <CaseStudyProblemChallengeSolution />
      </section>

      {/* 5️⃣ Gallery Section */}
      <section className="w-full ">
        <CaseStudyImageGallery />
      </section>

      {/* 6️⃣ Key Features Delivered */}
      <section className="w-full ">
        <CaseStudyFeatures />
      </section>

      {/* 7️⃣ Technology Used */}
      <section className="w-full ">
        <CaseStudyTechnology />
      </section>

       {/*8️⃣OutCome*/} 
      <section className="w-full ">
        <CaseStudyOutcome />
      </section>

      {/*9️⃣ Testimonials*/} 
      <section className="w-full ">
        < CaseStudyTestimonials/>
      </section>



      {/*  More Case Studies Carousel */}
      <section className="w-full ">
         <MoreCaseStudiesCarousel caseStudiesData={staticCaseStudiesData} />
      </section>

      {/* 9️⃣ Call To Action */}
      <section className="w-full">
        <CaseStudyCTA />
      </section>

   
    </main>
  );
}
