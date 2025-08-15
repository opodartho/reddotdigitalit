import React from "react";
import Image from "next/image";
import { CaseStudyItem } from "@/lib/data/caseStudiesData";
import { Button } from "@/components/ui/button";

type CaseStudyCardProps = Omit<CaseStudyItem, "id">;

export function CaseStudyCard({
  imageUrl,
  title,
  description,
}: CaseStudyCardProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col pt-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-grow text-base text-gray-700">{description}</p>
        <div className="mt-4">
          <Button variant="link">Case Study →</Button>
        </div>
      </div>
    </div>
  );
}
