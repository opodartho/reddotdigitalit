"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewsListItem } from "@/lib/data/news-list/newsListData";
import RedButton from "@/components/buttons/RedHoverButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NewsListProps = {
  newsListData: NewsListItem[];
};

export default function Grids({ newsListData }: NewsListProps) {
  const router = useRouter();

  return (
    <>
      {/* 📰 News Cards */}
           <div
        className="
    lg:pt-[77px] pt-[68px]
    grid
    gap-x-[16px] gap-y-[30px]
    justify-center
    grid-cols-[repeat(auto-fit,308px)]
  "
      >
        {newsListData.map((slide) => (
          <div key={slide.id}>
            <Card className="w-[308px] h-[494px] bg-white transition shadow-sm hover:shadow-lg flex flex-col">
              <CardHeader className="-m-4 space-y-0 flex flex-col h-full">
                {/* Image */}
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-[200px] object-cover rounded-sm"
                />

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <CardTitle className="text-[14px] text-gray-400 pt-[13px] pl-[10px]">
                    {slide.date}
                  </CardTitle>

                  <CardTitle className="text-[18px] pt-[22px] pl-[10px] tracking-wider line-clamp-2">
                    {slide.title}
                  </CardTitle>

                  <CardDescription className="text-[14px] pl-[10px] pr-[43px] pt-[20px] line-clamp-3">
                    {slide.description}
                  </CardDescription>

                  {/* Read More */}
                  <Button
                    variant="link"
                    className="mt-auto pl-[10px] text-start w-fit"
                    onClick={() =>
                      router.push(`/news-details/${slide.slug}`)
                    }
                  >
                    Read More »
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>

      {/* 🔽 Load More */}

    </>
  );
}
