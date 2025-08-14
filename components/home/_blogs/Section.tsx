import React from "react";
import { BlogCard } from "./BlogCard";
import { BlogItem } from "@/lib/data/blogsData";

type BlogsSectionProps = {
  blogsData: BlogItem[];
};

const Blogs = ({ blogsData }: BlogsSectionProps) => {
  return (
    <section className=" px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {blogsData.map((item) => (
            <BlogCard
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

export default Blogs;
