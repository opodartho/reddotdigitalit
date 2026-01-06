import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";
import RedButton from "@/components/buttons/RedHoverButton";
import Link from "next/link";

type NewsSectionProps = {
  newsData: NewsItem[];
};

const News = ({ newsData }: NewsSectionProps) => {
  return (
    <section className=" pt-16 pb-[94px] ">
      <div className="mx-auto">
        <h2 className="mb-[48px] text-center font-poppins text-[32px] font-semibold leading-[40px] tracking-[0.03px] text-title">
          Latest Events
        </h2>
        <div className="max-w-[1440px] px-[38px] sm:px-[80px] mx-auto">
                    <div className=" grid
                           gap-x-[16px] gap-y-[30px]
                           justify-center
                           grid-cols-[repeat(auto-fit,308px)]">
            {newsData.map((item) => (
              <NewsCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">



          <Link href="/news-list">
            <RedButton className="mt-[40px] w-[195px] h-[56px] text-[16px] border border-[#E52445]">
              See More
            </RedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;