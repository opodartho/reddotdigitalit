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
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-30">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#f5f9f6] via-[#f8f5f9] to-[#fdf5f8] px-6 sm:px-8 pt-12 sm:pt-20 pb-8 sm:pb-14 overflow-visible">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-gray-900 md:text-4xl">
              {heading}
            </h2>
            <p className="mt-6 sm:mt-10 mb-6 leading-relaxed text-gray-600 text-sm sm:text-base">
              {description}
            </p>
            <Button asChild className="px-6 py-2 sm:px-8 sm:py-3">
              <a href={buttonLink}>
                {buttonText}
                <span className="ml-2 text-lg">→</span>
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative w-full max-w-[300px] sm:max-w-[600px] md:max-w-[600px] h-auto md:h-[500px] rotate-0 md:rotate-[-5deg] 
              md:-mt-50"
            >
              {/* Upward bleed on desktop */}
              <Image
                src={imageUrl}
                alt="Transform Image"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
