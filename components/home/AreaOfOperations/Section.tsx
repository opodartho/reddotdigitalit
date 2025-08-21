"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OperationSection } from "@/lib/data/AreaOfOperation";

type AreaOfOperationsProps = {
  sections: OperationSection[];
};

export default function AreaOfOperations({ sections }: AreaOfOperationsProps) {
  const gapInRem = 2.5;

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
    <section className="py-16 bg-gradient-to-r from-pink-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-poppins font-bold mb-2">
            Area of Operations
          </h2>
          <p className="text-gray-700  text-poppins text-base max-w-xl mx-auto">
            Our cutting-edge Modular Data Center solutions enable to <br />
            protect mission-critical data.
          </p>
        </div>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 lg:gap-26 h-auto md:h-[600px]">
          <div className="relative pt-1.5 -ml-6">
            <div
              className="absolute left-[5px] top-0 w-0.5 bg-gray-300"
              style={{
                height: `${(sections.length - 1) * (gapInRem * 28) + 6}px`,
              }}
            />

            <div
              className="absolute left-[5px] top-0 w-0.5 bg-red-500 transition-all duration-300"
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
                      className={`w-3 h-3 rounded-full mr-3 transition-colors duration-300 ${
                        isVisited ? "bg-red-500" : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`transition-colors duration-300 ${
                        isVisited
                          ? "text-red-500 font-semibold"
                          : "text-gray-400"
                      }`}
                    >
                      {section.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            ref={rightContentRef}
            className="pr-6 overflow-y-auto relative"
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
                <div className="flex gap-6 mb-6">
                  {section.images.slice(0, 2).map((src, idx) => (
                    <div
                      key={idx}
                      className="relative flex-1 h-40 rounded-lg overflow-hidden shadow-md"
                      style={{ width: "367px", height: "219px" }}
                    >
                      <Image
                        src={src}
                        alt={`${section.title} image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-700 mb-8">{section.description}</p>
                <div>
                  <h4 className="font-semibold mb-3">Coverage</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-8">
                    {section.coverage.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
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

                <Button variant="default" size="lg" className="mt-18">
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
