import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TransformItem } from "@/lib/data/transformData";

type TransformCardProps = Omit<TransformItem, "id">;

export function TransformCard({
  heading,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}: TransformCardProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-50">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#f5f9f6] via-[#f8f5f9] to-[#fdf5f8] px-8 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              {heading}
            </h2>
            <p className="mt-10 mb-6 leading-relaxed text-gray-600">
              {description}
            </p>
            <Button asChild className="px-8 py-3">
              <a href={buttonLink}>
                {buttonText}
                <span className="ml-2 text-lg">→</span>
              </a>
            </Button>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -top-120 right-10 z-10 h-[750px] w-[500px] rotate-[-5deg]">
              <Image
                src={imageUrl}
                alt="Transform Image"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
