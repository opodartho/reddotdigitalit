
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

export default function ServiceHero({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative w-full bg-[#F6F5FA] pt-[68px] lg:pt-[160px] ">
      <div className=" px-[16px] sm:px-[80px] flex flex-col lg:flex-row lg:justify-between lg:items-start pb:[64px] lg:pb-[60px]">
        {/* 🟣 Left Content */}
        <div className="order-2 lg:order-1 container [655px] flex flex-col justify-start ">
          {/* Breadcrumb */}
          {/* 🟣 Breadcrumb Badge */}
          <div className="inline-flex items-center justify-center w-[138px] h-[26px] border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
            <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
              Area of Operation
            </span>
          </div>


          {/* Title */}
          <h1 className="text-[#060414] font-poppins font-semibold text-[30px] leading-[45px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[48px] mb-[14px] lg:mb-[20px]">
            {title}
          </h1>

          {/* Description */}


          <p className="font-poppins font-normal text-[#121926] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[30px] container [655px] xl:min-h-[90px] mb-[67px] lg:mb-[48px]">
            {description}
          </p>

          {/* CTA Button (Reused from UI library) */}  {/*hover added*/}
          {/*<Button
            variant="default"
            size="lg"
            className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]
                         transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:-translate-y-[6px] hover:shadow-[0_12px_20px_rgba(229,36,69,0.35)]
             active:translate-y-[2px]"
          >
            Schedule a Call
          </Button>

          */}


          <WhiteButton
            className="w-[195px] h-[56px] text-[16px] leading-[24px]"
          >
           Schedule a Call
         </WhiteButton>
        </div>

        {/* 🟣 Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:items-start mb-[51px] lg:mb-0 lg:-mt-[6px]  ">
          <div className="relative w-[300px] h-[258px] md:w-[400px] md:h-[300px] lg:w-[489px] lg:h-[315px] rounded-[12px]  overflow-hidden bg-[#F6F5FA]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
