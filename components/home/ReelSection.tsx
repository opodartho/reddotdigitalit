"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* =========================
     Scroll animation (sm+ only)
  ========================= */
  useEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current) return;

    const mm = gsap.matchMedia();

    // 🔹 Mobile: small radius, NO animation
    mm.add("(max-width: 639px)", () => {
      gsap.set(videoWrapperRef.current!, {
        width: "100%",
        clipPath: "inset(0 round 12px)",
      });
    });

    // 🔹 sm and up: animated radius + width
    mm.add("(min-width: 640px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top 80%",
          end: "top 10%",
          scrub: 0.5,
        },
      });

      tl.fromTo(
        videoWrapperRef.current!,
        {
          width: "75%",
          clipPath: "inset(0 round 28px)",
        },
        {
          width: "100%",
          clipPath: "inset(0 round 0px)",
          ease: "none",
        }
      );

      return () => tl.kill();
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  /* =========================
     Cursor logic (sm+ only)
  ========================= */
  useEffect(() => {
    if (!videoWrapperRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      const wrapper = videoWrapperRef.current!;
      const cursor = wrapper.querySelector(
        "#play-cursor"
      ) as HTMLDivElement;

      if (!cursor) return;

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });

      const moveCursor = (e: MouseEvent) => {
        const rect = wrapper.getBoundingClientRect();

        gsap.to(cursor, {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      wrapper.addEventListener("mousemove", moveCursor);

      return () => {
        wrapper.removeEventListener("mousemove", moveCursor);
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        items-center
        justify-center
        mt-[40px]
        sm:mt-[80px]
        mb-[40px]
        sm:mb-[80px]
        px-[16px]
        sm:px-0
      "
    >
      {/* Video Wrapper */}
      <div
        ref={videoWrapperRef}
        style={{ clipPath: "inset(0 round 28px)" }}
        className="
          relative
          w-full
          sm:h-[80vh]
          xl:h-[110vh]
          h-auto
          sm:w-[75%]
          overflow-hidden
          cursor-pointer
          will-change-transform
        "
      >
        <video
          ref={videoRef}
          onMouseEnter={() =>
            gsap.to("#play-cursor", { opacity: 1, scale: 1 })
          }
          onMouseLeave={() =>
            gsap.to("#play-cursor", { opacity: 0, scale: 0.8 })
          }
          className="w-full h-auto min-h-[220px]  sm:h-full object-cover"
          src="/images/ofspace.mp4"
          muted
          autoPlay
          loop
          playsInline
        />

        {/* Cursor */}
        <div id="play-cursor" />
      </div>
    </section>
  );
}
