"use client";

import React, { useEffect, useRef, useState } from "react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "@/lib/data/newsData";
import RedButton from "@/components/buttons/RedHoverButton";
import Link from "next/link";

type NewsSectionProps = {
  newsData: NewsItem[];
};

const News = ({ newsData }: NewsSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // 🔑 SAME PATTERN AS ABOUT
  const initialShouldAnimate =
    typeof window !== "undefined"
      ? !(window as typeof globalThis & {
          __newsSectionAnimated?: boolean;
        }).__newsSectionAnimated
      : true;

  const [shouldAnimate, setShouldAnimate] = useState(initialShouldAnimate);
  const [hasAnimated, setHasAnimated] = useState(!initialShouldAnimate);

  /* ---------------- INTERSECTION OBSERVER ---------------- */
  useEffect(() => {
    if (!shouldAnimate || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          setShouldAnimate(false);

          (
            window as typeof globalThis & {
              __newsSectionAnimated?: boolean;
            }
          ).__newsSectionAnimated = true;

          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  return (
    <section ref={sectionRef} className="pt-16 pb-[94px]">
      <div className="mx-auto">
        <h2 className="mb-[48px] text-center font-poppins text-[32px] font-semibold leading-[40px] tracking-[0.03px] text-title">
          Latest Events
        </h2>

        <div className="max-w-[1440px] px-[38px] sm:px-[80px] mx-auto">
          <div
            className="
              grid
              gap-x-[16px] gap-y-[30px]
              justify-center
              grid-cols-[repeat(auto-fit,308px)]
            "
          >
            {newsData.map((item, index) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: hasAnimated ? `${index * 200}ms` : "0ms",
                }}
                className={`
                  will-change-[opacity,transform,filter]
                  transition-[opacity,transform,filter]
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    hasAnimated
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-6 blur-[4px]"
                  }
                `}
              >
                <NewsCard
                  slug={item.slug}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/news-list">
            <RedButton className="mt-[40px] w-[195px] h-[56px] text-[16px] border border-[#E52445]">
              See More
            </RedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
