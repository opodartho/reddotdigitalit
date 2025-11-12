"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface MagicBentoWrapperProps {
  children: React.ReactNode;
  glowColor?: string;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  borderGlow?: boolean;
  borderWidth?: number;
}

export default function MagicBentoWrapper({
  children,
  glowColor = "132, 0, 255", // purple-blue neon
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
  borderGlow = true,
  borderWidth = 2,
}: MagicBentoWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

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
        z-index: 50;
      `;

      el.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    },
    [clickEffect, glowColor]
  );

  // ⚡️ Snake-like border glow animation
  useEffect(() => {
    const el = ref.current;
    const glow = borderGlowRef.current;
    if (!el || !glow) return;

    // Parse gradient colors if they contain commas (indicating multiple colors)
    const colors = glowColor.split(',').map(c => c.trim());
    const isGradient = colors.length > 3;

    const startSnakeGlow = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Set initial opacity
      gsap.set(glow, { opacity: 1 });

      // Animate the angle of the conic gradient to create snake effect
      const timeline = gsap.timeline({ repeat: -1 });

timeline.to(
  { angle: 0 },
  {
    angle: 360,
    duration: 10, // smoother slower spin
    ease: "none",
    repeat: -1,
    onUpdate: function () {
      const angle = this.targets()[0].angle;
      if (glow) {
        const gradientString = `conic-gradient(
          from ${angle - 90}deg,
          rgba(${glowColor}, 1) 0%,
          rgba(${glowColor}, 0.95) 5%,
          rgba(${glowColor}, 0.85) 10%,
          rgba(${glowColor}, 0.6) 20%,
          rgba(${glowColor}, 0.4) 30%,
          rgba(${glowColor}, 0.2) 40%,
          transparent 55%,
          transparent 100%
        )`;
        glow.style.background = gradientString;
      }
    },
  }
);


      animationRef.current = timeline;
    };

    const stopSnakeGlow = () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      gsap.to(glow, {
        opacity: 0,
        duration: 10,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      if (borderGlow) {
        startSnakeGlow();
      }
    };

    const handleMouseLeave = () => {
      stopSnakeGlow();
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("click", handleClick);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("click", handleClick);
    };
  }, [handleClick, borderGlow, glowColor]);

  return (
    <div
      ref={ref}
      className="relative z-50 h-full overflow-visible"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* 💡 Snake Border Glow Layer */}
      <div
  ref={borderGlowRef}
  className="absolute inset-0 pointer-events-none rounded-xl"
  style={{
    background: `conic-gradient(
      from -90deg,
      rgba(${glowColor}, 1) 0%,
      rgba(${glowColor}, 0.9) 5%,
      rgba(${glowColor}, 0.6) 10%,
      rgba(${glowColor}, 0.3) 15%,
      transparent 20%,
      transparent 100%
    )`,
    opacity: 0,
    borderRadius: "1rem",
    filter: `blur(0px) drop-shadow(0 0 12px rgba(${glowColor}, 1)) drop-shadow(0 0 25px rgba(${glowColor}, 0))`,
    mixBlendMode: "screen", // brightens rather than overlays
    transition: "opacity 0.3s ease",
  }}
/>


      {/* Card content */}
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
}


