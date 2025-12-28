import Image from "next/image";
import { ExtraSection } from "@/lib/data/customize-product/extraSectionsData";

type Props = {
  sections: ExtraSection[];
};

export default function ExtraSections({ sections }: Props) {
  if (!sections.length) return null;

  return (
    <section className="w-full bg-white max-w-[1440px] mx-auto pt-[74px] lg:pt-[90px]">
      <div className="px-[16px] sm:px-[80px]">
        {sections.map((section, index) => (
          <div key={index} className="mb-[64px]">
            {/* Section Title */}
            <h3 className="font-poppins font-semibold md:font-bold text-[#060414] text-[22px] md:text-[28px] mb-[28px]">
              {section.sectionTitle}
            </h3>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[59px] lg:gap-y-[44px] gap-y-[16px] auto-rows-fr">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex border-[1px] rounded-xl bg-[#F9F7FD] p-[18px] pb-[24px] md:p-[20px] md:pb-[30px]
                  transition-transform duration-300 ease-out hover:-translate-y-[2px]"
                >
                  {/* Icon */}
                  <div className="mr-[12px] sm:mr-[24px] shrink-0">
                    <Image
                      src="/images/redtick.svg"
                      alt=""
                      width={30}
                      height={30}
                      className="w-[22px] lg:w-[30px]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[16px] leading-[26px] font-semibold text-title">
                      {item.title}
                    </p>
                    <p className="mt-[10px] text-[12px] leading-[22px] text-subtitle">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
