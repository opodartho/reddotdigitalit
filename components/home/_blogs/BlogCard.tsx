import React from "react";
import Image from "next/image";
import { BlogItem } from "@/lib/data/blogsData";

type BlogCardProps = Omit<BlogItem, "id">;

export function BlogCard({ imageUrl, title, description }: BlogCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
      <div className="bg-gray-200  p-4">
        <div className="relative aspect-video w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-l object-cover"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="mb-0 flex-grow text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-2">
        <button className="rounded-full bg-[#E52445] px-8 py-1 text-white transition-colors duration-300 hover:bg-[#f64c6c]">
          Explore
        </button>
      </div>
      <br></br>
    </div>
  );
}
