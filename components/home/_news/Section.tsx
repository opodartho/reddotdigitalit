import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";

type NewsSectionProps = {
  newsData: NewsItem[];
};

const News = ({ newsData }: NewsSectionProps) => {
  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 pb-6 text-center text-3xl font-bold">
          Latest News
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
