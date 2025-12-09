"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  text: string;
  className?: string;
};

export default function SplitTextHover({ text, className }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Handle spacing: convert normal space → &nbsp;
    const safeText = text.replace(/\s/g, "\u00A0");

    // Split into spans
    wrapper.innerHTML = safeText
      .split("")
      .map((c) => `<span class="char inline-block">${c}</span>`)
      .join("");

    const chars = wrapper.querySelectorAll(".char");

    // Hover animation
    const handleEnter = () => {
      gsap.fromTo(
        chars,
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
        chars,
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
    />
  );
}
