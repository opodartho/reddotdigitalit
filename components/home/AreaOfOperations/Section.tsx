"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OperationSection } from "@/lib/data/AreaOfOperation";
import { useRouter } from "next/navigation";


type AreaOfOperationsProps = {
  sections: OperationSection[];
};

export default function AreaOfOperations({ sections }: AreaOfOperationsProps) {
  const gapInRem = 2.5;
  const router = useRouter();
  const [visited, setVisited] = useState<string[]>([sections[0].id]);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleScroll = () => {
    const rightEl = rightContentRef.current;
    if (!rightEl) return;
    const threshold = rightEl.scrollTop + rightEl.offsetHeight / 2;
    const newVisited: string[] = [];

    for (const section of sections) {
      const el = sectionRefs.current[section.id];
      if (el && el.offsetTop < threshold) {
        newVisited.push(section.id);
      }
    }

    if (newVisited.length === 0) {
      newVisited.push(sections[0].id);
    }

    if (JSON.stringify(newVisited) !== JSON.stringify(visited)) {
      setVisited(newVisited);
    }
  };

  useEffect(() => {
    const rightEl = rightContentRef.current;
    if (!rightEl) return;

    handleScroll();
    rightEl.addEventListener("scroll", handleScroll, { passive: true });
    return () => rightEl.removeEventListener("scroll", handleScroll);
  }, [visited]);

  return (
    <section className="bg-gradient-to-r from-pink-50 via-white to-orange-50 pt-[72px] lg:pt-[110px] pb-[72px] lg:pb-[91px] ">
      <div className="px-[16px]  sm:px-[80px]">
        <div className="mb-[67px] lg:mb-[90px] text-center">
          <h2 className="text-[#060414] text-poppins mb-2 font-semibold text-[25px] md:text-[32px] leading-[40px]">
            Area of Operations
          </h2>
          <p className="text-[#121926] text-poppins  mx-auto max-w-xl text-[12px] md:text-[14px] font-normal  leading-[22px]">
            Our cutting-edge Modular Data Center solutions enable to <br />
            protect mission-critical data.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between items-start">
          <div className="relative  pt-1.5 hidden lg:block">
            <div
              className="absolute top-0 left-[5px] w-0.5 bg-gray-300"
              style={{
                height: `${(sections.length - 1) * (gapInRem * 28) + 7}px`,
              }}
            />

            <div
              className="absolute top-0 left-[5px] w-0.5 bg-red-500 transition-all duration-300"
              style={{
                height: `${
                  visited.length > 1
                    ? (visited.length - 1) * (gapInRem * 30) + 6
                    : 0
                }px`,
              }}
            />

            {sections.map((section, index) => {
              const isVisited = visited.includes(section.id);
              const isLastItem = index === sections.length - 1;
              return (
                <div
                  key={section.id}
                  className="relative z-10"
                  style={{
                    paddingBottom: !isLastItem ? `${gapInRem}rem` : "0",
                  }}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-3 h-3 w-3 rounded-full transition-colors duration-300 ${
                        isVisited ? "bg-red-500" : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`transition-colors duration-300 ${
                        isVisited
                          ? "font-semibold text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {section.area_name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            ref={rightContentRef}
            className="relative overflow-y-auto md:pr-6 lg:max-w-[770px] xl:max-w-[830px]"
            style={{
              height: "600px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {sections.map((section) => (
              <section
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="mb-20"
                style={{ minHeight: "500px" }}
              >

                {/* Mobile-only Area Name */}
               <p className="lg:hidden text-center font-inter font-semibold text-[16px] leading-[23px] text-[#060414] mb-[56px]">
                 {section.area_name}
               </p>

                <div className="mb-[34px] flex flex-col gap-4  lg:flex-row justify-between">
                  {section.images.slice(0, 2).map((src, idx) => (
                    <div
                      key={idx}
                      className="relative h-40  overflow-hidden rounded-lg shadow-md   h-[219px]  w-[358px] md:w-[367px]   hover:-translate-y-3 hover:shadow-[0_8px_24px_rgba(49,1,139,0.1)]
                        transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      
                    >
                      <Image
                        src={src}
                        alt={`${section.area_name} image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="font-poppins mb-[17px] md:mb-[34px] text-[25px] md:text-[32px] font-normal text-[#060414] leading-[40px]">
                  {section.title}
                </h3>
                <p className="mb-[45px] md:mb-[41px] text-[14px] md:text-[18px] font-normal text-[#121926]  leading-[22px] md:leading-[30px]">{section.description}</p>
                <div>
                  <h4 className="mb-[22px] text-[22px] font-medium text-[#060414] leading-[30px]">Coverage</h4>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8  gap-y-[18px] md:gap-y-[22px] ">
                    {section.coverage.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[#121926] font-medium leading-[24px] text-[16px]"
                      >
                        <Image
                          src="/checkmark (1) 1.png"
                          alt="Checkmark icon"
                          width={18}
                          height={18}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button   onClick={() => router.push(`/area_of_operations_details/${section.id}`)}
                variant="default" size="lg"             className="rounded-[10px] w-[195px] h-[56px] text-[16px] leading-[24px]
                                     transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
             hover:-translate-y-[6px] hover:shadow-[0_12px_20px_rgba(229,36,69,0.35)]
             active:translate-y-[2px] mt-[38px] lg:mt-[73px]" >
                  Read More
                </Button>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
