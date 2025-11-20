"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/data/newsData";
import { useRouter } from 'next/navigation'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type NewsCardProps = Omit<NewsItem, "id">;

export function NewsCard({ imageUrl, title, description }: NewsCardProps) {

  const router= useRouter()
  return (
    <CardContainer className="w-full cursor-pointer">
      <CardBody className="relative w-full h-full [transform-style:preserve-3d] bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        
        {/* Image with 3D pop */}
        <CardItem translateZ={40} className="w-full">
          <div className="relative w-full aspect-[292/204]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
        </CardItem>

        {/* Text content */}
        <CardItem translateZ={0} className="w-full">
          <div className="flex flex-col px-6 pt-6 pb-6">
            <h3 className="pb-3 text-xl font-semibold text-gray-900">{title}</h3>
            <div className="pb-6">
              <p 
                className="text-sm text-gray-600 h-[100px]"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: '1.5'
                }}
              >
                {description}
              </p>
            </div>
            <div className="-mt-[10px] self-start" onClick={()=>{router.push('/news-details')}}>
              <Button variant="link">Read More »</Button>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}