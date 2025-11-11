"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface MagicBentoWrapperProps {
  children: React.ReactNode;
  glowColor?: string;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlight?: boolean;
}

export default function MagicBentoWrapper({
  children,
  glowColor = "132, 0, 255", // purple-blue neon
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlight = true,
}: MagicBentoWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const edgeGlowRef = useRef<HTMLDivElement>(null);

  // 💥 Ripple click animation
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!clickEffect || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(rect.width, rect.height);

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.1) 40%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 40;
      `;

      el.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    },
    [clickEffect, glowColor]
  );

  // ⚡️ Mouse motion: tilt + magnetism + edge light
  useEffect(() => {
    const el = ref.current;
    const glow = edgeGlowRef.current;
    if (!el || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const relX = (x - centerX) / centerX;
      const relY = (y - centerY) / centerY;

      // Move sharp edge glow directionally
      if (spotlight) {
        const angle = Math.atan2(relY, relX) * (180 / Math.PI) + 90; // convert mouse direction into rotation
        gsap.to(glow, {
          background: `conic-gradient(from ${angle}deg, rgba(${glowColor},0.85), rgba(${glowColor},0.2) 40%, transparent 80%)`,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      // Tilt & magnet effects
      if (enableTilt) {
        const rotateX = relY * -10;
        const rotateY = relX * 10;
        gsap.to(el, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        gsap.to(el, {
          x: relX * 10,
          y: relY * 10,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(glow, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("click", handleClick);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("click", handleClick);
    };
  }, [enableTilt, enableMagnetism, handleClick, spotlight, glowColor]);

  return (
    <div
      ref={ref}
      className="relative z-10 overflow-visible"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease",
        perspective: "1000px",
      }}
    >
      {/* 💡 Edge Glow Layer */}
      <div
        ref={edgeGlowRef}
        className="absolute inset-0 pointer-events-none rounded-xl mix-blend-screen"
        style={{
          background: `conic-gradient(from 90deg, rgba(${glowColor}, 0.8), rgba(${glowColor}, 0.1) 40%, transparent 80%)`,
          opacity: 0,
          filter: "blur(20px)",
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Card content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
