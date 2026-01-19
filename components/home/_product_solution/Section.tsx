"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SolutionCard from "./SolutionCard";
import { ProductSolutionItem } from "@/lib/data/customize-product/productSolutionData";

type Props = {
  solutions: ProductSolutionItem[];
};

const Solutions = ({ solutions }: Props) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement | null>(null);

  /* 🔑 SAME PATTERN AS NEWS */
  const initialShouldAnimate =
    typeof window !== "undefined"
      ? !(window as typeof globalThis & {
          __productSolutionsAnimated?: boolean;
        }).__productSolutionsAnimated
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
              __productSolutionsAnimated?: boolean;
            }
          ).__productSolutionsAnimated = true;

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
    <section
      ref={sectionRef}
      id="product_solution"
      className="max-w-[1440px] mx-auto pb-[56px] px-[16px] sm:px-[80px]"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-[54px]">
        <h2 className="font-poppins text-[32px] leading-[40px] font-semibold text-[#060414]">
          Our Product Solution
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/customize-product/${index + 1}`)}
            className="cursor-pointer"
          >
            {/* REVEAL LAYER (SLIDE UP + STAGGER) */}
            <div
              style={{
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated
                  ? "translateY(0px) scale(1)"
                  : "translateY(56px) scale(0.94)",
                transitionProperty: "opacity, transform",
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: hasAnimated ? `${index * 200}ms` : "0ms",
              }}
              className="will-change-[opacity,transform] transform-gpu"
            >
              {/* HOVER LAYER (FAST & SMOOTH, NO TRANSLATE CONFLICT) */}
              <div
                className="
                  transition-transform
                  duration-[220ms]
                  ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:scale-[1.02]
                "
              >
                <SolutionCard item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
