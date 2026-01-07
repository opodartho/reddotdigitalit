"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { OperationSection } from "@/lib/data/AreaOfOperation";
import { useRouter } from "next/navigation";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

type AreaOfOperationsProps = {
  
  sections: OperationSection[];
};

export default function AreaOfOperations({ sections }: AreaOfOperationsProps) {
  const router = useRouter();

  // Store element refs for each section safely
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Store which section is currently active
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  // INTERSECTION OBSERVER — detects active section like Stripe
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setActiveId(id);
          }
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Observe all section blocks
    for (const el of Object.values(sectionRefs.current)) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const activeIndex = sections.findIndex((s) => s.id === activeId);



  return (
    <section className=" bg-[#F7F6FD] pt-[80px] pb-[80px]">
      {/* HEADER */}<div className="max-w-[1440px] mx-auto">
      <div className="px-[16px] sm:px-[80px] text-center mb-[56px]">
        <h2 className="text-[#060414] text-poppins font-semibold text-[25px] md:text-[32px]">
          Area of Operations
        </h2>
      </div>

      {/* MAIN WRAPPER — Stripe Style */}
        <div className="px-[16px] sm:px-[80px] flex flex-col xl:flex-row justify-between gap-12">

        {/* LEFT COLUMN — Sticky */}

          <div className="hidden xl:flex flex-col sticky top-[190px] mt-[24px] h-fit min-w-[250px] relative mb-[48px]">

       
     
         


          {/* === Grey Full Line === */}
          <div
            className="absolute left-[5px] top-[-6px] w-[2px] bg-gray-300"
            style={{ height: `${sections.length * 48}px` }}
          ></div>

          {/* === Red Progress Line (visited) === */}
          <div
            className="absolute left-[5px] top-[-6px] w-[2px] bg-red-500 transition-all duration-500"
            style={{
              height: `${(activeIndex + 1) * 48}px`
            }}
          ></div>

          {/* === Dots + Labels === */}
          {sections.map((section, i) => {
            const isVisited = i <= activeIndex;   // 

            return (
              <div key={section.id} className="flex items-center mb-6 relative">

                {/* Dot */}
                <div
                  className={`h-3 w-3 rounded-full mr-3 transition-all ${isVisited ? "bg-red-500" : "bg-white border border-gray-400"
                    }`}
                ></div>

                {/* Label */}
                <p
                  className={`transition-all ${isVisited ? "text-red-500 font-semibold" : "text-gray-400"
                    }`}
                >
                  {section.area_name}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN — Natural Page Scroll */}
     
        <div className="flex-1 lg:max-w-[770px]  space-y-[56px]">

          {sections.map((section) => (
            <section
              key={section.id}
              data-id={section.id}
              ref={(el: HTMLElement | null) => {
                sectionRefs.current[section.id] = el;
              }}
              className="pb-10"
            >
              {/* MOBILE HEADING */}
              <p className="lg:hidden text-center font-semibold text-[20px] mb-[40px]">
                {section.area_name}
              </p>

              {/* IMAGES */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                {section.images.slice(0, 2).map((src, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl shadow-md h-[220px] w-[358px] sm:w-[350px] transition-transform hover:-translate-y-3 hover:shadow-xl hover:cursor-pointer mx-auto"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* TITLE */}
              <h3 className="text-[28px] md:text-[34px] font-semibold mb-4">
                {section.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[15px] md:text-[17px] leading-[26px] mb-10">
                {section.description}
              </p>

              {/* COVERAGE */}
              <h4 className="text-[22px] font-medium mb-4">Coverage</h4>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {section.coverage.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[16px]">
                    <Image
                      src="/checkmark (1) 1.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <WhiteButton
                onClick={() =>
                  router.push(`/area_of_operations_details/${section.id}`)
                }
                className="w-[195px] h-[56px] text-[16px]"
              >
                Read More
              </WhiteButton>
            </section>
          ))}

        </div>
        </div>
  </div>
    </section>
  );
}