
"use client";
export default function KeyBenefitsSection({
  sectionDesc,
}: {
  sectionDesc: string;
}) {
  return (
    <section className="w-full bg-white pt-[74px] lg:pt-[90px]">
      <div className="px-[16px] sm:px-[80px]">
        {/* 🟣 Section Title */}
        <h2 className="font-poppins font-semibold md:font-bold text-[#060414] text-[25px] md:text-[32px] leading-[40px] tracking-[0.032px] text-left mb-[10px] md:mb-[14px]">
          Key Benefits
        </h2>

        {/* 🟣 Description */}
        <p className="font-poppins font-normal text-[#121926] text-[14px] md:text-[16px] leading-[22px] md:leading-[30px] text-left  ">
        {sectionDesc}
        </p>
      </div>
    </section>
  );
};
