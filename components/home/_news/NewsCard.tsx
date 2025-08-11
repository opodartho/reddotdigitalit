import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type NewsCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export function NewsCard({ imageUrl, title, description }: NewsCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-2">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={imageUrl}
            alt="title"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col px-6 py-4">
        <h3 className="pb-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 pb-6 text-sm text-gray-600">{description}</p>
        <div className="mt-auto self-start pt-4">
          <Button variant="ghost" className="h-auto p-0 text-red-500">
            Read More &raquo;
          </Button>
        </div>
      </div>
    </div>
  );
}
