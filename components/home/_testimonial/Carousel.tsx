"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css"; 

// the type for a single testimonial
type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  imageSrc: string;
  logoSrc: string;
};

// data with four unique testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Kalyanmoy Debnath",
    title: "Vice President, Digital Service, IoT & VAS, IT",
    company: "Robi Axiata Limited",
    quote:
      "This is to certify that RedDot Digital has successfully completed projects for our Digital Customer Management and Enterprise Customer Management Solutions. The work was completed in September 2020 and they continue to maintain the platforms.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Chief Technology Officer",
    company: "Innovate Inc.",
    quote:
      "Working with the team has been a transformative experience. Their expertise and dedication are unmatched, delivering results that exceeded all our expectations. We look forward to our continued partnership and future innovations together.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-2.png",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Head of Operations",
    company: "Logistics Pro",
    quote:
      "The modular data center solution they provided was a game-changer for our logistics network. It was deployed faster than we thought possible and has given us the reliability we need for our mission-critical operations. Highly recommended.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-3.png",
  },
  {
    id: 4,
    name: "Emily Wang",
    title: "Founder & CEO",
    company: "Creative Solutions",
    quote:
      "As a startup, we needed a partner who was both flexible and powerful. Their platform scaled with us from day one. The support has been phenomenal, and their insights have been invaluable to our growth and success.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-4.png",
  },
];

export const TestimonialCarousel: React.FC = () => {
  // Use the hook without any extra options for the default slide behavior
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // The scroll functions remain the same
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
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Client Say
          </h2>
          <p className="mt-2 text-gray-600">
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

      {/* The main container has the ref and the viewport class */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonialsData.map((testimonial) => (
            // Each slide is a flex item now
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
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.company}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
