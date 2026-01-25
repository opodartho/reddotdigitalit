"use client";

import React, { createContext, useContext, useRef, useCallback } from "react";

type AnimationKey =
  | "hero"
  | "featuredProjects"
  | "productSolutions"
  | "news"
  | "testimonial"
  | "whoAbout"
  | "whoAchievement"
  | "footer";

type AnimationContextValue = {
  hasAnimated: (key: AnimationKey) => boolean;
  markAnimated: (key: AnimationKey) => void;
  shouldAnimate: (key: AnimationKey) => boolean;
};

const AnimationContext = createContext<AnimationContextValue | null>(null);

export const AnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Use ref to persist animation state without causing re-renders
  const animatedSections = useRef<Set<AnimationKey>>(new Set());

  const hasAnimated = useCallback((key: AnimationKey): boolean => {
    return animatedSections.current.has(key);
  }, []);

  const markAnimated = useCallback((key: AnimationKey): void => {
    animatedSections.current.add(key);
  }, []);

  const shouldAnimate = useCallback((key: AnimationKey): boolean => {
    return !animatedSections.current.has(key);
  }, []);

  return (
    <AnimationContext.Provider
      value={{ hasAnimated, markAnimated, shouldAnimate }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextValue => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};

// Hook for components that need the "animate once" pattern
export const useAnimateOnce = (key: AnimationKey) => {
  const { hasAnimated, markAnimated, shouldAnimate } = useAnimation();

  return {
    hasAnimated: hasAnimated(key),
    markAnimated: () => markAnimated(key),
    shouldAnimate: shouldAnimate(key),
  };
};
