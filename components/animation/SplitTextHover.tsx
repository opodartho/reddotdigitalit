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
      gsap.fromTo(
        charEls,
        { y: 0, opacity: 1 },
        {
          y: -12,
          opacity: 0,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        charEls,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.55,
          ease: "power3.out",
          delay: 0.1,
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
