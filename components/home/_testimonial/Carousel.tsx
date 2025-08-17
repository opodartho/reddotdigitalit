"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css"; // make sure this file exists

type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  imageSrc: string;
  logoSrc: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Kalyanmoy Debnath",
    title: "Vice President, Digital Service, IoT & VAS, IT",
    company: "Robi Axiata Limited",
    quote:
      "This is to certify that RedDot Digital has successfully completed projects for our Digital Customer Management and Enterprise Customer Management Solutions.",
    imageSrc: "/clients/client-1.png",
    logoSrc: "/clients/logos/logo-1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Chief Technology Officer",
    company: "Innovate Inc.",
    quote:
      "Working with the team has been a transformative experience. Their expertise and dedication are unmatched.",
    imageSrc: "/clients/client-2.png",
    logoSrc: "/clients/logos/logo-2.png",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Head of Operations",
    company: "Logistics Pro",
    quote:
      "The modular data center solution they provided was a game-changer for our logistics network.",
    imageSrc: "/clients/client-3.png",
    logoSrc: "/clients/logos/logo-3.png",
  },
  {
    id: 4,
    name: "Emily Wang",
    title: "Founder & CEO",
    company: "Creative Solutions",
    quote:
      "As a startup, we needed a partner who was both flexible and powerful. Their platform scaled with us from day one.",
    imageSrc: "/clients/client-4.png",
    logoSrc: "/clients/logos/logo-4.png",
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-gray-600">
            Our cutting-edge Modular Data Center solutions help protect
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
          {testimonialsData.map((t) => (
            <div className="embla__slide" key={t.id}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={t.imageSrc}
                    alt={t.name}
                    width={250}
                    height={250}
                    className="rounded-lg object-cover shadow-md mx-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <blockquote className="text-gray-600 text-lg leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6">
                    <Image
                      src={t.logoSrc}
                      alt={`${t.company} Logo`}
                      width={80}
                      height={30}
                      className="mb-4 object-contain"
                    />
                    <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                    <p className="text-gray-500">{t.company}</p>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
