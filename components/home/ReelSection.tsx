"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);


  
  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { scaleX: 0.85 },
      {
        scale: 1.3,
        
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 0.5,
        },
      }
    );
  }, []);
  useEffect(() => {
  const cursor = document.getElementById("play-cursor");
  if (!cursor) return;

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
  });

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);


  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh]  flex items-center justify-center overflow-hidden mt-[56px] sm:mt-[80px] mb-[56px] sm:mb-[80px]"
      
    >
<video
  ref={videoRef}
  onMouseEnter={() => {
    gsap.to("#play-cursor", { opacity: 1, scale: 1 });
  }}
  onMouseLeave={() => {
    gsap.to("#play-cursor", { opacity: 0, scale: 0.8 });
  }}
  className="w-[80%] h-[150vh] object-cover rounded-[28px]"
  src="/images/ofspace.mp4"
  muted
  autoPlay
  loop
  playsInline
/>


      {/* Play cursor */}
      <div id="play-cursor" />
    </section>
  );
}
