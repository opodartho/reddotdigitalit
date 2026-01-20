"use client";

import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./embla.css";
import { FeaturedProject } from "@/lib/data/featuredProjectsData";
import RedButton from "@/components/buttons/RedHoverButton";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __fp_carousel_animated?: boolean;
  }
}

type CarouselProps = {
  projects: FeaturedProject[];
};

export const FeaturedProjectsCarousel: React.FC<CarouselProps> = ({
  projects,
}) => {
  /* ----------------------------------
     ROOT REF (CRITICAL)
  ----------------------------------- */
  const rootRef = useRef<HTMLDivElement | null>(null);

  /* ----------------------------------
     EMBLA
  ----------------------------------- */
  const autoplayOptions = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [autoplayOptions]
  );

  /* ----------------------------------
     ARROWS
  ----------------------------------- */
  const [activeArrow, setActiveArrow] = useState<
    "prev" | "next" | null
  >(null);

  const flashArrow = (arrow: "prev" | "next") => {
    setActiveArrow(arrow);
    setTimeout(() => setActiveArrow(null), 200);
  };

  const pauseAutoplay = () => {
    const ap = emblaApi?.plugins()?.autoplay;
    if (!ap) return;
    ap.stop();
    setTimeout(() => ap.play(), 4000);
  };

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    flashArrow("prev");
    pauseAutoplay();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    flashArrow("next");
    pauseAutoplay();
  }, [emblaApi]);

  /* ----------------------------------
     DOTS
  ----------------------------------- */
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () =>
      setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const [shouldAnimate] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.__fp_carousel_animated;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleUnload = () => {
      window.__fp_carousel_animated = undefined;
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  /* ----------------------------------
     GSAP SCROLL ANIMATION (WORKING)
  ----------------------------------- */
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      if (!shouldAnimate) {
        gsap.set(".fp-header", { y: 0, opacity: 1 });
        gsap.set(".embla", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            once: true,
            markers: false,
            onEnter: () => {
              if (typeof window !== "undefined") {
                window.__fp_carousel_animated = true;
              }
            },
          },
        })
        .from(".fp-header", {
            y: 60,
            opacity: 0,
            stagger: 0.12,
            duration: 0.85,
            ease: "power2.out",
        },
      )
        .from(
          ".embla",
          {
      y: 120,
      scale: 0.92,
      opacity: 0,
      filter: "blur(18px)",
      duration: 1.2,
      ease: "expo.out",
    },
    "-=0.25"
        );
    }, rootRef);

    return () => ctx.revert();
  }, [shouldAnimate]);

  /* ----------------------------------
     RENDER
  ----------------------------------- */
  return (
    <div ref={rootRef}>
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between w-full fp-header">
        <h2 className="sm:text-[32px] font-semibold text-[#060414]">
          Featured Projects
        </h2>

        <div className="mt-2 flex space-x-3 relative lg:z-10">
          <button onClick={scrollPrev} className="group">
            <Image
              src={
                activeArrow === "prev"
                  ? "/icons/arrow-left-red.png"
                  : "/icons/arrow-left.png"
              }
              alt="Prev"
              width={48}
              height={48}
              className="group-hover:hidden"
            />
            <Image
              src="/icons/arrow-left-red.png"
              alt="Prev Hover"
              width={48}
              height={48}
              className="hidden group-hover:block"
            />
          </button>

          <button onClick={scrollNext} className="group">
            <Image
              src={
                activeArrow === "next"
                  ? "/icons/arrow-right-red.png"
                  : "/icons/arrow-right.png"
              }
              alt="Next"
              width={48}
              height={48}
              className="group-hover:hidden"
            />
            <Image
              src="/icons/arrow-right-red.png"
              alt="Next Hover"
              width={48}
              height={48}
              className="hidden group-hover:block"
            />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="embla__slide_project px-2 rounded-[24px] overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[550px] rounded-[24px] overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* CTA */}
              <div className="flex flex-col lg:flex-row w-full lg:items-center lg:justify-between bg-white py-6">
                <div className="max-w-[650px]">
                  <h3 className="text-[22px] font-semibold text-[#060414] leading-[40px]">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#121926] leading-[22px]">
                    {project.description}
                  </p>
                </div>

                <a href={project.href ?? "#"} className="min-w-[195px]">
                  <RedButton className="w-[195px] h-[56px] text-[16px] mt-4 md:mt-0 border border-[#E52445]">
                    View Details
                  </RedButton>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};