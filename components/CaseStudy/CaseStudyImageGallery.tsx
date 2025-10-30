"use client";
import Image from "next/image";
import React from "react";

export default function CaseStudyImageGallery() {
  return (
    <section className="w-full flex flex-col items-center mt-[60px]">
      {/* 🟣 1280 px centered container */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[20px]">
        {/* 🔹 Top full-width image (1280 × 483) */}
        <div className="relative w-full h-[483px] rounded-[5px] overflow-hidden">
          <Image
            src="/images/gallery-top.jpg"
            alt="Top Gallery Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🔹 Bottom two images side-by-side (626.5 × 483 each) */}
        <div className="flex flex-row justify-between">
          <div className="relative w-[626.5px] h-[483px] rounded-[5px] overflow-hidden">
            <Image
              src="/images/gallery-bottom-left.jpg"
              alt="Bottom Left Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[626.5px] h-[483px] rounded-[5px] overflow-hidden">
            <Image
              src="/images/gallery-bottom-right.jpg"
              alt="Bottom Right Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
