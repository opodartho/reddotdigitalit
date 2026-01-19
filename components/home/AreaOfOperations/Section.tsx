"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { OperationSection } from "@/lib/data/AreaOfOperation";
import { useRouter } from "next/navigation";
import WhiteButton from "@/components/buttons/WhiteHoverButton";

type AreaOfOperationsProps = {
  sections: OperationSection[];
};

const persistedCoverageAnimated = new Set<string>();

export default function AreaOfOperations({ sections }: AreaOfOperationsProps) {
  const router = useRouter();

  /* -----------------------------
     REFS
  ----------------------------- */
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const coverageRefs = useRef<Record<string, HTMLUListElement | null>>({});
  const manualScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pulseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navSidebarRef = useRef<HTMLDivElement | null>(null);

  /* -----------------------------
     STATE
  ----------------------------- */
  const [navHeight, setNavHeight] = useState(0);
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [poppedSection, setPoppedSection] = useState<string | null>(null);

  // Coverage-level animation (list items)
  const [coverageAnimated, setCoverageAnimated] = useState<Set<string>>(
    new Set(persistedCoverageAnimated)
  );

  const markCoverageAnimated = (id: string) => {
    persistedCoverageAnimated.add(id);
    setCoverageAnimated(new Set(persistedCoverageAnimated));
  };

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  /* -----------------------------
     ACTIVE SECTION OBSERVER (NAV)
  ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("data-id");
          if (!id) continue;
          if (manualScrollTimeout.current) continue;
          setActiveId(id);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -----------------------------
     COVERAGE REVEAL (LATE TRIGGER)
  ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-coverage-id");
          if (!id) return;
          if (entry.isIntersecting && !persistedCoverageAnimated.has(id)) {
            markCoverageAnimated(id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    Object.values(coverageRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -----------------------------
     NAV HEIGHT
  ----------------------------- */
  useEffect(() => {
    const updateNavHeight = () => {
      if (navSidebarRef.current) {
        setNavHeight(navSidebarRef.current.clientHeight);
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, [sections.length]);

  /* -----------------------------
     NAV CLICK
  ----------------------------- */
  const handleNavClick = (id: string) => {
    const target = sectionRefs.current[id];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);

    if (manualScrollTimeout.current) {
      clearTimeout(manualScrollTimeout.current);
    }

    manualScrollTimeout.current = setTimeout(() => {
      manualScrollTimeout.current = null;
    }, 500);
  };

  /* -----------------------------
     NAV PULSE
  ----------------------------- */
  useEffect(() => {
    if (pulseTimeout.current) clearTimeout(pulseTimeout.current);

    setPoppedSection(activeId);
    pulseTimeout.current = setTimeout(() => {
      setPoppedSection(null);
    }, 280);

    return () => {
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    };
  }, [activeId]);

  /* -----------------------------
     RENDER
  ----------------------------- */
  return (
    <section className="bg-[#F7F6FD] pt-[80px] pb-[80px]">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="px-[16px] sm:px-[80px] text-center mb-[56px]">
          <h2 className="text-[#060414] font-semibold text-[25px] md:text-[32px]">
            Area of Operations
          </h2>
        </div>

        <div className="px-[16px] sm:px-[80px] flex flex-col xl:flex-row justify-between gap-12">
          {/* LEFT NAV */}
          <div className="hidden xl:flex flex-col sticky top-[190px] mt-[24px] h-fit min-w-[250px] relative mb-[48px] cursor-pointer">
            <div
              className="absolute left-[5px] top-[-6px] w-[2px] bg-gray-300"
              style={{ height: `${sections.length * 48}px` }}
            />
            <div
              className="absolute left-[5px] top-[-6px] w-[2px] bg-red-500 transition-all duration-500"
              style={{ height: `${(activeIndex + 1) * 48}px` }}
            />

            {sections.map((section, i) => {
              const isVisited = i <= activeIndex;
              const isPopped = poppedSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className="flex items-center mb-6 text-left relative z-10 cursor-pointer"
                >
                  <div
                    className={`h-3 w-3 rounded-full mr-3 ${
                      isVisited
                        ? "bg-red-500"
                        : "bg-white border border-gray-400"
                    }`}
                  />
                  <p
                    className={`transition-all duration-300 ${
                      isVisited ? "text-red-500 font-semibold" : "text-gray-400"
                    } ${isPopped ? "scale-105" : "scale-100"}`}
                  >
                    {section.area_name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 lg:max-w-[770px] space-y-[56px]">
            {sections.map((section) => {
              const isCoverageAnimated = coverageAnimated.has(section.id);

              return (
                <section
                  key={section.id}
                  data-id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className="pb-10"
                  style={{
                    scrollMarginTop: navHeight
                      ? `${navHeight + 40}px`
                      : "80px",
                  }}
                >
                  {/* MOBILE TITLE */}
                  <p className="lg:hidden text-center font-semibold text-[20px] mb-[40px]">
                    {section.area_name}
                  </p>

                  {/* IMAGES */}
                  <div className="flex flex-col cursor-pointer sm:flex-row gap-6 mb-8">
                    {section.images.slice(0, 2).map((src, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-xl shadow-md h-[220px] w-[358px] sm:w-[367px] mx-auto"
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
                  <ul
                    ref={(el) => {
                      coverageRefs.current[section.id] = el;
                    }}
                    data-coverage-id={section.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-8 mb-12 transition-all duration-[700ms] ease-out
                      ${isCoverageAnimated ? "opacity-100" : "opacity-60"}`}
                  >
                    {section.coverage.map((item, idx) => (
                      <li
                        key={`${section.id}-${idx}`}
                        className={`flex items-center gap-2 text-[16px] transition-all duration-[600ms] ease-out
                          ${
                            isCoverageAnimated
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                        style={{
                          transitionDelay: isCoverageAnimated
                            ? `${idx * 90}ms`
                            : "0ms",
                        }}
                      >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
