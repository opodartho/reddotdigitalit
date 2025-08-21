import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/data/newsData";

type NewsCardProps = Omit<NewsItem, "id">;

const cardStyle = {
  boxShadow: "0 12px 48px 0 rgb(49 1 139 / 0.07)",
};

export function NewsCard({ imageUrl, title, description }: NewsCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white custom-card-shadow">
      <div className="p-2">
        <div className="relative aspect-[292/204] w-full">
          <Image
            src={imageUrl}
            alt="title"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col px-6 pt-6 pb-6">
        <h3 className="pb-3 text-xl font-semibold">{title}</h3>
        <p className="pb-6 text-sm text-gray-600">{description}</p>
        <div className="mt-auto self-start">
          <Button variant="link">Read More »</Button>
        </div>
      </div>
    </div>
  );
}
