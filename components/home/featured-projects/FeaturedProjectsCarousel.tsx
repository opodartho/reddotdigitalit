"use client";

import React, { useCallback } from "react";
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
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <>
            {/* Header */}
            <div className="mb-8 flex items-center justify-between w-full">
                <h2 className="text-[32px] font-semibold text-[#060414]">
                    Featured Projects
                </h2>

                <div className="mt-2 flex space-x-3">
                    <button onClick={scrollPrev}>
                        <Image src="/icons/arrow-left.png" alt="Prev" width={48} height={48} />
                    </button>
                    <button onClick={scrollNext}>
                        <Image src="/icons/arrow-right.png" alt="Next" width={48} height={48} />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    {projects.map((project) => (
                        <div key={project.id} className="embla__slide_project px-2  rounded-[24px] overflow-hidden">

                            {/*  Single Image Banner (BG + Devices)  */}
                            <div
                                className="
    relative w-full 
    h-[240px]      /* mobile */
    sm:h-[320px]   /* small tablets */
    md:h-[400px]   /* large tablets */
    lg:h-[480px]   /* desktops */
    xl:h-[550px]   /* large desktops  */
    rounded-[24px] 
    overflow-hidden
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

                            {/* ⭐ CTA Section ⭐ */}
                            <div className="mt-6 flex flex-col lg:flex-row w-full lg:items-center lg:justify-between bg-white py-6 ">

                                <div className="max-w-[650px]">
                                    <h3 className="text-[22px] font-semibold text-[#060414] leading-[40px]">
                                        {project.title}
                                    </h3>

                                    <p className="text-[14px]  text-[#121926] leading-[22px]">
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
