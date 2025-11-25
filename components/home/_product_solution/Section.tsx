"use client";

import { useRouter } from "next/navigation";
import SolutionCard from "./SolutionCard";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";
import RedButton from "@/components/buttons/RedHoverButton";

type Props = {
  solutions: ProductSolutionItem[];
};

export default function Solutions({ solutions }: Props) {
  const router = useRouter();

  return (
    <section className="pb-[56px] px-[16px] sm:px-[80px] ">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-[54px]">
        <h2 className="font-poppins text-[32px] leading-[40px] font-semibold text-[#060414]">
          Our Product Solution
        </h2>
        <p className="mt-2 text-[#121926] text-[14px] leading-[22px]">
          Building intelligent, scalable, and secure digital solutions tailored
          to your business needs.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        grid gap-6
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
      "
      >
        {solutions.map((item, i) => (
          <div
            key={i}
            onClick={() => router.push(`/customize-product/${i + 1}`)}
            className="cursor-pointer"
          >
            <SolutionCard item={item} />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">



        <RedButton className="w-[195px] h-[56px] text-[16px] border border-[#E52445] ">
          View More
        </RedButton>
      </div>
    </section>
  );
}
