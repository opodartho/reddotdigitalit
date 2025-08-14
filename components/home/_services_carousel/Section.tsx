"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Service } from "@/lib/data/servicesData";
// import { Infinity } from "lucide-react";

export const ServicesCarousel = ({ services }: { services: Service[] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const autoScroll = () => {
      if (isPaused || isDragging) return;

      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const carousel = carouselRef.current;
    if (!carousel) return;

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white py-8">
      <div
        ref={carouselRef}
        className="hide-scrollbar flex overflow-x-auto scroll-smooth py-4 whitespace-nowrap"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service, index) => (
          <Link
            key={`${service.id}-${index}`}
            href={service.href}
            className="mx-3 inline-block transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex h-10 w-50 cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
              <span className="text-lg font-medium text-gray-800">
                {service.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
