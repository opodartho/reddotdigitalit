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

    // fix for font loading + layout shift
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
          className="text-red-600 font-medium mt-1"
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
      {/* HEADER */}
      <div className="mb-10 lg:mb-20 flex items-start justify-between w-full px-4 lg:pr-[80px]">
        <div>
          <h2 className="text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] font-semibold tracking-[0.03px] text-white">
            Hear From Our Clients!
          </h2>
          <p className="mt-2 text-[13px] lg:text-[14px] leading-[20px] lg:leading-[22px] font-normal text-white">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data.
          </p>
        </div>

        {/* ARROWS - HIDE ON MOBILE */}
        <div className="hidden lg:flex mt-2 space-x-3">
          <button onClick={scrollPrev}>
            <Image src="/icons/arrow-left1.png" width={48} height={48} alt="Prev" />
          </button>
          <button onClick={scrollNext}>
            <Image src="/icons/arrow-right1.png" width={48} height={48} alt="Next" />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="embla w-full h-auto px-4 lg:px-0" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial) => (
            <div className="embla__slide px-2" key={testimonial.id}>
              <div
                className="
                  bg-white border border-[#E8EAED] rounded-[10px]
                  
                  /* DESKTOP (lg and up) */
                  lg:px-[42px] lg:py-[34px]
                  lg:w-[574px] lg:min-h-[484px]

                  /* MOBILE + TABLET */
                 w-[270px]
                  px-5 py-6 min-h-[360px]

                  h-auto

                  flex flex-col
                  transition-all duration-300 hover:shadow-xl
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

                {/* TEXT BLOCK */}
                <div className="mb-4 lg:mb-6">
                  <SeeMoreText text={testimonial.quote} />
                </div>

                {/* FOOTER */}
                <div className="mt-auto flex flex-col items-start gap-2 pt-4">
                  <div
                    className={`
                      relative
                      ${testimonial.id === 2 || testimonial.id === 5
                        ? "w-[90px] h-[35px] lg:w-[100px] lg:h-[40px]"
                        : "w-[50px] h-[40px] lg:w-[59px] lg:h-[48px]"
                      }
                    `}
                  >
                    <Image
                      src={testimonial.logoSrc}
                      alt={`${testimonial.company} Logo`}
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
    </>
  );
};
