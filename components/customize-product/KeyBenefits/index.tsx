import Image from "next/image";
import { KeyBenefitItem } from "@/lib/data/keyBenefitsData";

type KeyBenefitsProps= {
    keyBenefitsData: KeyBenefitItem[]
}

export default function KeyBenefits({keyBenefitsData}: KeyBenefitsProps) {
  
  return (
    <div className="lg:pl-[80px] pl-[16px] lg:w-full">
      <p className="text-[30px] font-semibold">Key Benefits</p>
      <p className="lg:w-full w-[358px] h-[110px] text-[14px] pt-[14px] lg:pb-[44px] pb-[24px]">
        RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions.
      </p>

      {/* ✅ flexbox version with 2 columns */}
      <div className="flex flex-wrap lg:gap-x-[59px] lg:gap-y-[44px] gap-y-[16px]">
        {keyBenefitsData.map((p, index) => (
          <div
            key={index}
            className="border-2 rounded-xl bg-cover bg-no-repeat lg:h-[137px] h-[108px] lg:w-[calc(50%-29.5px)] w-full" 
            style={{ backgroundImage: "url('/images/benefits.svg')" }}
          >
            <div className="flex gap-[12px] p-[16px]">
              <Image
                src={'/images/redtick.svg'}
                alt=""
                height={30}
                width={30}
                className="lg:h-[30px] lg:w-[30px] h-[22px] w-[22px] mt-[6px]"
              />
              <div className="flex flex-col">
                <p className="text-[16px] font-semibold">{p.title}</p>
                <p className="lg:mt-[10px] mt-[4px] text-[12px] lg:w-[264px] line-clamp-3">
                  {p.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
