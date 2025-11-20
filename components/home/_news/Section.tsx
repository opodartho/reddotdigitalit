import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";

type NewsSectionProps = {
  newsData: NewsItem[];
};

const News = ({ newsData }: NewsSectionProps) => {
  return (
    <section className="px-8 py-16 ">
      <div className="mx-auto">
        <h2 className="mb-[54px] text-center font-poppins text-[32px] font-semibold leading-[40px] tracking-[0.03px] text-title">
          Latest Events
        </h2>
        <div className="grid grid-cols-1 lg:gap-6 gap-0 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
};

export default News;
