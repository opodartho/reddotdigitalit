"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  text: string;
  className?: string;
};

export default function SplitTextHover({ text, className }: Props) {
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const chars = useMemo(
    () => text.split("").map((c) => (c === " " ? "\u00A0" : c)),
    [text]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const charEls = wrapper.querySelectorAll(".char");

    const handleEnter = () => {
      // Kill any running animations first
      gsap.killTweensOf(charEls);

      // Smooth wave animation - characters bounce up and settle back
      gsap.fromTo(
        charEls,
        { y: 0 },
        {
          y: -6,
          stagger: {
            each: 0.03,
            from: "start",
          },
          duration: 0.18,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        }
      );
    };

    wrapper.addEventListener("mouseenter", handleEnter);

    return () => {
      wrapper.removeEventListener("mouseenter", handleEnter);
    };
  }, [text]);

  return (
    <span
      ref={wrapperRef}
      className={`split-text relative inline-block cursor-pointer ${className}`}
    >
      {chars.map((c, i) => (
        <span key={`${c}-${i}`} className="char inline-block">
          {c}
        </span>
      ))}
    </span>
  );
}
