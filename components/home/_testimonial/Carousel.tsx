"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { Testimonial } from "@/lib/data/testimonialData";

type CarouselProps = {
  testimonials: Testimonial[];
};

//ACCEPT PROPS
export const TestimonialCarousel: React.FC<CarouselProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="font-semibold text-[32px] leading-[40px] tracking-[0.03px] text-gray-800">
            What Our Client Say
          </h2>
          <p className="mt-2 font-normal text-[14px] leading-[22px] tracking-[0.0px] text-gray-600">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data.
          </p>
        </div>
        <div className="flex space-x-3 mt-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="p-2 w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-400 hover:bg-gray-100 transition-colors"
          >
            &larr;
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="p-2 w-10 h-10 flex items-center justify-center rounded-md border border-pink-500 text-pink-500 hover:bg-pink-50 transition-colors"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div className="embla__slide" key={testimonial.id}>
              {/* This is the inner card content */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={250}
                    height={250}
                    className="rounded-lg object-cover shadow-md mx-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <blockquote className="text-gray-600 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-8">
                    <Image
                      src={testimonial.logoSrc}
                      alt={`${testimonial.company} Logo`}
                      width={80}
                      height={30}
                      className="mb-4 object-contain"
                    />
                    <p className="font-normal text-[18px] leading-[34px] tracking-[0.0px] text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.company}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
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
