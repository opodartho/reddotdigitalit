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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="mb-20 flex items-start justify-between w-full">
        <div>
          <h2 className="text-[32px] leading-[40px] font-semibold tracking-[0.03px] text-gray-950">
            Hear From Our Clients!
          </h2>
          <p className="mt-2 text-[14px] leading-[22px] font-normal text-zinc-800">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data.
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

      {/* Carousel */}
      <div
        className="embla bg-gradient-to-r from-[#ffecf0] to-[#faf9fe] w-full lg:h-[584px] h-auto"
        ref={emblaRef}
      >
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div
              className="lg:embla__slide md:embla__slide_mobile basis-[44.44%] lg:px-2"
              key={testimonial.id}
            >
              <div
                className="lg:embla__slide md:embla__slide_mobile basis-[44.44%] lg:px-2"
                key={testimonial.id}
              >
                <div
                  className="bg-white rounded-2xl shadow border border-transparent p-6 lg:h-[584px] h-[800px] w-[308px] lg:w-[574px] transition-all duration-300 hover:shadow-xl hover:border-red-600 hover:shadow-red-300 "
                >
                  <div className="pl-[10px] pt-[10px]">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>

                  <blockquote className="whitespace-pre-line font-poppins text-[16px] lg:w-[490px] w-[256px] pl-[10px] pt-[16px] font-normal text-black">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mt-[34px] pl-[10px]">
                  <div className="fixed w-[574px] bottom-12 lg:mt-[0px]">
                    <Image
                      src={testimonial.logoSrc}
                      alt={`${testimonial.company} Logo`}
                      width={100}
                      height={100}
                      className="mb-4 object-contain"
                    />

                    
                    <p className="font-poppins text-[13px] font-semibold text-zinc-800">
                      {testimonial.name}
                    </p>
                    <p className="font-poppins text-[10px] text-black">{testimonial.company}</p>
                    <p className="font-poppins text-[10px] text-black">{testimonial.title}</p>
                    </div>
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
