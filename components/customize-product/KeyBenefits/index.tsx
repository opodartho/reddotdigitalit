import Image from "next/image";
import { KeyBenefitItem } from "@/lib/data/customize-product/keyBenefitsData";

type KeyBenefitsProps = {
  keyBenefitsData: KeyBenefitItem[][];
  Id: string; // param from route
};

export default function KeyBenefits({ keyBenefitsData, Id }: KeyBenefitsProps) {
  // convert string param to number safely
  const index = Number(Id);

  // get the selected group safely (fallback to empty array)
  const benefitsGroup = keyBenefitsData[index] || [];

  return (
    <section className="w-full bg-white pt-[74px] lg:pt-[90px] max-w-[1440px] mx-auto">
      <div className="px-[16px] sm:px-[80px]">
        {/* 🟣 Section Title */}
        <h2 className="font-poppins font-semibold md:font-bold text-[#060414] text-[25px] md:text-[32px] leading-[40px] tracking-[0.032px] text-left mb-[10px] md:mb-[14px]">
          Key Benefits
        </h2>
      <p className="font-poppins font-normal text-[#121926] text-[14px] md:text-[16px] leading-[22px] md:leading-[30px] text-left ">
        RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the
        second-largest mobile network operator in Bangladesh, offering IT and
        digital solutions.
      </p>
     

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[59px] lg:gap-y-[44px] gap-y-[16px] pt-12 md:pt-11 auto-rows-fr">
        {benefitsGroup.map((benefit) => (
          <div
            key={benefit.id}
            className=" flex border-[1px] rounded-xl bg-cover bg-no-repeat  p-[18px] pb-[24px] md:p-[20px] md:pb-[30px]
                transition-transform duration-300 ease-out
                hover:-translate-y-[2px] bg-[#F9F7FD]"
           
          >
            
           <div className="flex items-start justify-start mr-[12px] sm:mr-[24px] shrink-0">
              <Image
                src={"/images/redtick.svg"}
                alt=""
                height={30}
                width={30}
                className=" lg:w-[30px]  w-[22px] flex items-center justify-center"
              />
            </div>
              <div className="flex flex-col justify-start">
                <p className="text-[16px] leading-[26px] font-semibold text-title">{benefit.title}</p>
                <p className="lg:mt-[10px] text-subtitle mt-[12px] text-[12px] leading-[22px] line-clamp-3">
                  {benefit.description}
                </p>
              </div>
            </div>
         
        ))}
      </div>
      </div>
    </section>
  );
}
