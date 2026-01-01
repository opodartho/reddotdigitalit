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
    <section className="relative mx-auto lg:max-w-7xl mt-25 px-4 py-20">
      <div className="relative rounded-3xl bg-[#E52445] px-4 sm:px-8 pt-12 sm:pt-20 pb-8 sm:pb-14 overflow-visible">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="--font-inter text-white font-semibold text-[40px] leading-[141%] tracking-[0]">
              {heading}
            </h2>
            <p className="--font-poppins text-white font-normal text-[16px] leading-[28px] tracking-[0] mt-[23.82px]">
              {description}
            </p>
            <Button asChild className="px-6 py-2 h-[56px] bg-[#E52445] sm:px-8 sm:py-3 mt-[52px] border border-white ">
              <a href={buttonLink} className="" style={{ color: "white" }}>
                {buttonText}
                <span className="--font-poppins text-white font-medium text-[16px] leading-[100%] tracking-[0] text-center">
                  →
                </span>
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative w-full container [300px] sm:container [600px] md:container [600px] h-auto md:h-[500px] rotate-0 md:rotate-[-5deg] 
              md:-mt-50"
            >
              {/* Upward bleed on desktop */}
              <Image
                src={imageUrl}
                alt="Transform Image"
                width={401}
                height={469}
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
