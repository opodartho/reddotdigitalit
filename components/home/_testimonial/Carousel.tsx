"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { Testimonial } from "@/lib/data/testimonialData";

type CarouselProps = {
  testimonials: Testimonial[];
};

/* --------------------------------------------------
   SEE MORE TEXT (8-line limit)
-------------------------------------------------- */
const SeeMoreText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = React.useState(false);
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const [shouldShow, setShouldShow] = React.useState(false);

  const calculateOverflow = () => {
    const el = textRef.current;
    if (!el) return;

    const lineHeight = 22;
    const maxLines = 8;
    const maxHeight = lineHeight * maxLines;

    setShouldShow(el.scrollHeight > maxHeight);
  };

  React.useEffect(() => {
    calculateOverflow();
    window.addEventListener("resize", calculateOverflow);
    setTimeout(calculateOverflow, 50);
    setTimeout(calculateOverflow, 200);

    return () => window.removeEventListener("resize", calculateOverflow);
  }, [text]);

  return (
    <div>
      <p
        ref={textRef}
        className={`
          whitespace-pre-line
          text-[14px] leading-[22px] font-poppins text-black
          transition-all duration-300
          ${expanded ? "max-h-[2000px]" : "max-h-[176px] overflow-hidden"}
        `}
      >
        {text}
      </p>

      {shouldShow && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-red-600 font-medium mt-1 cursor-pointer"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

/* --------------------------------------------------
   MAIN CAROUSEL COMPONENT
-------------------------------------------------- */
export const TestimonialCarousel: React.FC<CarouselProps> = ({
  testimonials,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const initialShouldAnimate =
    typeof window !== "undefined"
      ? !(window as typeof globalThis & {
          __testimonialSectionAnimated?: boolean;
        }).__testimonialSectionAnimated
      : true;

  const [shouldAnimate, setShouldAnimate] = useState(initialShouldAnimate);
  const [hasAnimated, setHasAnimated] = useState(!initialShouldAnimate);

  useEffect(() => {
    if (!shouldAnimate || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          setShouldAnimate(false);

          (
            window as typeof globalThis & {
              __testimonialSectionAnimated?: boolean;
            }
          ).__testimonialSectionAnimated = true;

          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  const autoplayOptions = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false }),
    []
  );

  const emblaOptions = useMemo<Parameters<typeof useEmblaCarousel>[0]>(
    () => ({
      loop: true,
      align: "start",
      slidesToScroll: 1,
    }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    emblaOptions,
    [autoplayOptions]
  );

  /* CLICK FLASH */
  const [activeArrow, setActiveArrow] = useState<"prev" | "next" | null>(null);

  const flashArrow = (arrow: "prev" | "next") => {
    setActiveArrow(arrow);
    setTimeout(() => setActiveArrow(null), 200);
  };

  /* SAFELY ACCESS AUTOPLAY PLUGIN */
  const getAutoplay = () => emblaApi?.plugins().autoplay;

  /* PAUSE + RESUME AUTOPLAY */
  const pauseAutoplay = () => {
    const ap = getAutoplay();
    if (!ap) return;

    ap.stop();
    setTimeout(() => ap.play(),);
  };

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
    flashArrow("prev");
    pauseAutoplay();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
    flashArrow("next");
    pauseAutoplay();
  };

  return (
    <section ref={sectionRef}>
      {/* HEADER */}
      <div
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated
            ? "translateY(0) rotateX(0deg)"
            : "translateY(28px) rotateX(8deg)",
          filter: hasAnimated ? "blur(0px)" : "blur(8px)",
          transitionProperty: "opacity, transform, filter",
          transitionDuration: "800ms",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          willChange: "opacity, transform, filter",
        }}
        className="mb-10 flex items-start justify-between w-full pr-4 lg:pr-[80px]"
      >
        <div>
          <h2 className="pl-[8px] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] font-semibold tracking-[0.03px] text-[#060414]  pr-[10px]">
            Hear From Our Clients!
          </h2>
        </div>

        {/* ARROWS */}
        <div
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated
              ? "translateX(0) scale(1)"
              : "translateX(24px) scale(0.96)",
            filter: hasAnimated ? "blur(0px)" : "blur(8px)",
            transitionProperty: "opacity, transform, filter",
            transitionDuration: "800ms",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: hasAnimated ? "120ms" : "0ms",
            willChange: "opacity, transform, filter",
          }}
          className="flex mt-2 space-x-3 z-5000"
        >

          {/* LEFT ARROW */}
          <button onClick={scrollPrev} className="group">
            <Image
              src={
                activeArrow === "prev"
                  ? "/icons/arrow-left-red.png"
                  : "/icons/arrow-left-new.png"
              }
              width={48}
              height={48}
              alt="Prev"
              className="group-hover:hidden"
            />

            {/* HOVER STATE */}
            <Image
              src="/icons/arrow-left-red.png"
              width={48}
              height={48}
              alt="Prev Hover"
              className="hidden group-hover:block"
            />
          </button>

          <button onClick={scrollNext} className="group">
            <Image
              src={
                activeArrow === "next"
                  ? "/icons/arrow-right-red.png"
                  : "/icons/arrow-right-new.png"
              }
              width={48}
              height={48}
              alt="Next"
              className="group-hover:hidden"
            />

            {/* HOVER STATE */}
            <Image
              src="/icons/arrow-right-red.png"
              width={48}
              height={48}
              alt="Next Hover"
              className="hidden group-hover:block"
            />
          </button>


        </div>
      </div>

      {/* CAROUSEL */}
      <div
        className="embla w-full h-auto"
        ref={emblaRef}
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated
            ? "translateY(0) scale(1)"
            : "translateY(36px) scale(0.98)",
          filter: hasAnimated ? "blur(0px)" : "blur(10px)",
          transitionProperty: "opacity, transform, filter",
          transitionDuration: "900ms",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: hasAnimated ? "160ms" : "0ms",
          willChange: "opacity, transform, filter",
        }}
      >
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div className="embla__slide px-2" key={testimonial.id}>
              <div
                className="
                  bg-white border border-[#E8EAED] rounded-[10px]

                  lg:px-[42px] lg:py-[34px] lg:w-[574px] lg:min-h-[484px]

                  w-[270px] px-5 py-6 min-h-[360px]

                  h-auto flex flex-col
                  transition-all duration-300  cursor-pointer
                "
              >
                {/* AVATAR */}
                <div className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-full bg-[#F6F2FD] flex items-center justify-center mb-4 lg:mb-6">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="mb-4 lg:mb-6">
                  <SeeMoreText text={testimonial.quote} />
                </div>

                {/* FOOTER */}
                <div className="mt-auto flex flex-col items-start gap-2 pt-4">
                  <div
                    className={`relative ${testimonial.id === 2 || testimonial.id === 5
                        ? "w-[90px] h-[35px] lg:w-[100px] lg:h-[40px]"
                        : "w-[50px] h-[40px] lg:w-[59px] lg:h-[48px]"
                      }`}
                  >
                    <Image
                      src={testimonial.logoSrc}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="font-poppins text-[12px] lg:text-[13px] font-semibold text-zinc-800">
                      {testimonial.name}
                    </p>
                    <p className="font-poppins text-[10px] text-black">
                      {testimonial.company}
                    </p>
                    <p className="font-poppins text-[10px] text-black">
                      {testimonial.title}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
