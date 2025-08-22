"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const logosRow1 = [
  { src: "/robi-logo.png", alt: "Robi" },
  { src: "/logos/smart robi.png", alt: "Smart" },
  { src: "/ada-logo.png", alt: "ADA" },
  { src: "/logos/undp.png", alt: "UNDP" },
  { src: "/logos/bat.png", alt: "BAT" },
  { src: "/logos/jamuna.png", alt: "Jamuna Bank" },
];

const logosRow2 = [
  { src: "/logos/nagad.png", alt: "Nagad" },
  { src: "/logos/sc bank.png", alt: "sc" },
  { src: "/logos/lpg.png", alt: "Bashundhara LP Gas" },
  { src: "/logos/akash.png", alt: "Akash" },
  { src: "/logos/wayeraid.png", alt: "water aid" },
  { src: "/logos/telecash.png", alt: "telecash" },
];

const logosRow3 = [
  { src: "/logos/islami bank.png", alt: "islami bank" },
  { src: "/logos/wayeraid.png", alt: "WaterAid" },
  { src: "/logos/tap.png", alt: "Tap" },
  {
    src: "/logos/robi ventures.png",
    alt: "R Ventures",
    customClass: "!max-h-30",
  },
  { src: "/logos/java.png", alt: "Java" },
  { src: "/logos/akash.png", alt: "Another Logo" },
];

const PartnerRow = ({
  logos,
  direction = "left",
}: {
  logos: { src: string; alt: string }[];
  direction?: "left" | "right";
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const autoScroll = () => {
      if (isPaused) return;
      if (direction === "left") {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      } else {
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        } else {
          carousel.scrollLeft -= 1;
        }
      }
    };

    if (direction === "right" && carousel.scrollLeft === 0) {
      carousel.scrollLeft = carousel.scrollWidth / 2;
    }

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, [isPaused, direction]);

  const extendedLogos = [...logos, ...logos];

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-hidden whitespace-nowrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {extendedLogos.map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-40 sm:w-48 md:w-64 flex justify-center items-center mx-2 sm:mx-4"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={60}
            className="object-contain max-h-12 w-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default function TrustedPartners() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-3xl font-semibold h-[40px] text-gray-900">
            Trusted by Partners
          </h2>
          <p className="mt-4 text-base md:text-md text-gray-600 h-[22px] max-w-2xl mx-auto px-4">
            Our cutting-edge Modular Data Center solutions enable to <br />
            protect mission-critical data.
          </p>
        </div>

        <div className="relative overflow-hidden space-y-8">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <PartnerRow logos={logosRow1} direction="left" />
          <PartnerRow logos={logosRow2} direction="right" />
          <PartnerRow logos={logosRow3} direction="left" />
        </div>
      </div>
    </section>
  );
}
