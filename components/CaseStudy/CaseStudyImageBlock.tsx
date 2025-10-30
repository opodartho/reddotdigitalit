"use client";
import Image from "next/image";

export default function CaseStudyImageBlock() {
  return (
    <section className="w-full flex justify-center  mt-[80px] ">
      <div className="relative max-w-[1280px] w-full h-[483px] ">
        <Image
          src="/images/case-study-main.jpg"
          alt="Case Study Image"
          fill
          className="object-cover rounded-[5px]"
        />
      </div>
    </section>
  );
}
