"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { Testimonial } from "@/lib/data/testimonialData";

type CarouselProps = {
  testimonials: Testimonial[];
};

export const TestimonialCarousel: React.FC<CarouselProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="mb-20 flex items-start justify-between">
        <div>
          <h2 className="text-[32px] leading-[40px] font-semibold tracking-[0.03px] text-gray-950">
            Whats Our Client Say
          </h2>
          <p className="mt-2 text-[14px] leading-[22px] font-normal tracking-[0.0px] text-zinc-800">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data .
          </p>
        </div>
        <div className="mt-2 flex space-x-3">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center duration-300"
          >
            <Image
              src="/icons/arrow-left.png"
              alt="Previous"
              width={48}
              height={48}
            />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex items-center justify-center duration-300"
          >
            <Image
              src="/icons/arrow-right.png"
              alt="Next"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div className="embla__slide" key={testimonial.id}>
              <div className="flex flex-col items-center md:flex-row">
                <div className="mb-6 w-full flex-shrink-0 md:mr-8 md:mb-0 md:w-1/3">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={296}
                    height={296}
                    className="mx-auto rounded-lg object-cover shadow-md"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <blockquote className="font-poppins text-[18px] leading-[34px] font-normal tracking-[0px] text-black">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-6">
                    <Image
                      src={testimonial.logoSrc}
                      alt={`${testimonial.company} Logo`}
                      width={59}
                      height={48}
                      className="mb-4 object-contain"
                    />
                    <p className="font-poppins text-[13px] leading-[18px] font-semibold tracking-[0px] text-zinc-800">
                      {testimonial.name}
                    </p>
                    <p className="font-poppins text-[10px] leading-[16px] font-normal tracking-[0px] text-black">
                      {testimonial.company}
                    </p>
                    <p className="font-poppins text-[10px] leading-[16px] font-normal tracking-[0px] text-black">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
