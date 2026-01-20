import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TransformItem } from "@/lib/data/transformData";

type TransformCardProps = Omit<TransformItem, "id">;

export function TransformCard({
  heading,
  description,
  buttonText,
  buttonLink,

}: TransformCardProps) {
  return (
    <section className="mt-[80px] mx-auto  px-[16px] sm:px-[80px]">
      <div className="relative rounded-3xl bg-[#1D1B26] ">
        <div className=" flex flex-col xl:flex-row justify-between sm:gap-[48px] p-4 ">
          {/* Left Content */}
          <div className="order-2 xl:order-1 text-center xl:text-left py-[56px] xl:py-[80px]  xl:pl-[56px] xl:w-1/2 ">
            <h2 className="--font-inter text-white font-semibold text-[40px] leading-[141%] tracking-[0] ">
              {heading}
            </h2>
            <p className="--font-poppins text-white font-normal text-[16px] leading-[28px] tracking-[0] mt-[23.82px]">
              {description}
            </p>
            <Button
              asChild
              className="
    px-6 py-2 h-[56px]
    bg-[#E52445]
    sm:px-8 sm:py-3
    mt-[52px]
    rounded-[35px]

    transition-all duration-300 ease-out
    hover:-translate-y-[2px]
    hover:bg-[#cf1f3c]
    
  "
            >
              <Link href={buttonLink} className="flex items-center gap-2 text-white">
                {buttonText}
                <span className="--font-poppins font-medium text-[16px] leading-[100%] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Button>

          </div>

          {/* RIGHT SIDE — 50% */}
          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="order-1 xl:order-2 xl:w-1/2 flex items-center">
            <div
              className="
      relative
      w-full
      aspect-[818/523]
      xl:aspect-auto
      xl:h-full
      rounded-[16px]
      overflow-hidden
    "
            >
              <video
                src="/images/transform.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
