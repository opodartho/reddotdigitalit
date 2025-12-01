"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { FeaturedProject } from "@/lib/data/featuredProjectsData";
import RedButton from "@/components/buttons/RedHoverButton";

type CarouselProps = {
  projects: FeaturedProject[];
};

export const FeaturedProjectsCarousel: React.FC<CarouselProps> = ({
  projects,
}) => {
  const autoplayOptions = Autoplay({
    delay: 2000,
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

  /**********************************************
   * ARROW CLICK (temporary red flash)
   **********************************************/
  const [activeArrow, setActiveArrow] = useState<"prev" | "next" | null>(null);

  const flashArrow = (arrow: "prev" | "next") => {
    setActiveArrow(arrow);
    setTimeout(() => setActiveArrow(null), 200);
  };

  /**********************************************
   * SAFELY ACCESS AUTOPLAY PLUGIN
   **********************************************/
  const getAutoplay = () => emblaApi?.plugins()?.autoplay;

  /**********************************************
   * PAUSE + RESUME AUTOPLAY ON CLICK
   **********************************************/
  const pauseAutoplay = () => {
    const ap = getAutoplay();
    if (!ap) return;

    ap.stop();
    setTimeout(() => ap.play(), );
  };

  /**********************************************
   * SCROLL + FLASH + PAUSE AUTOPLAY
   **********************************************/
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

  return (
    <>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between w-full">
        <h2 className="text-[32px] font-semibold text-[#060414]">
          Featured Projects
        </h2>

        <div className="mt-2 flex space-x-3">

          {/* LEFT ARROW */}
          <button onClick={scrollPrev}>
            <Image
              src={
                activeArrow === "prev"
                  ? "/icons/arrow-left-red.png"
                  : "/icons/arrow-left.png"
              }
              alt="Prev"
              width={48}
              height={48}
            />
          </button>

          {/* RIGHT ARROW */}
          <button onClick={scrollNext}>
            <Image
              src={
                activeArrow === "next"
                  ? "/icons/arrow-right-red.png"
                  : "/icons/arrow-right.png"
              }
              alt="Next"
              width={48}
              height={48}
            />
          </button>

        </div>
      </div>

      {/* Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">

          {projects.map((project) => (
            <div
              key={project.id}
              className="embla__slide_project px-2 rounded-[24px] overflow-hidden"
            >
              {/* Banner Image */}
              <div
                className="
                  relative w-full 
                  h-[240px] sm:h-[320px] md:h-[400px] 
                  lg:h-[480px] xl:h-[550px]
                  rounded-[24px] overflow-hidden
                "
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* CTA Section */}
              <div className="mt-6 flex flex-col lg:flex-row w-full lg:items-center lg:justify-between bg-white py-6">
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
    </>
  );
};
