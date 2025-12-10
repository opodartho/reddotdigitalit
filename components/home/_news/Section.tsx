import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";
import RedButton from "@/components/buttons/RedHoverButton";

type NewsSectionProps = {
  newsData: NewsItem[];
};

const News = ({ newsData }: NewsSectionProps) => {
  return (
    <section className=" pt-16 pb-[94px] ">
      <div className="mx-auto">
        <h2 className="mb-[32px] sm:mb-[48px] text-center font-poppins text-[32px] font-semibold leading-[40px] tracking-[0.03px] text-title">
          Latest Events
        </h2>
        <div className="max-w-[1440px] px-[38px] sm:px-[80px] mx-auto">
        <div className="grid grid-cols-1 xl:gap-6 gap-0 sm:grid-cols-2 xl:grid-cols-4 space-y-[32px]">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
         </div>
           <div className="flex justify-center">
      
      
      
              <RedButton className="mt-[40px] w-[195px] h-[56px] text-[16px] border border-[#E52445] ">
                See More
              </RedButton>
            </div>
      </div>
    </section>
  );
};

export default News;