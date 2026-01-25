"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useAnimateOnce } from "@/contexts/AnimationContext";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type FooterAnimatedProps = {
  children: React.ReactNode;
  className?: string;
};

export const FooterAnimatedSection = ({
  children,
  className = "",
}: FooterAnimatedProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const { markAnimated, hasAnimated: contextHasAnimated } =
    useAnimateOnce("footer");

  const hasAnimatedBefore = useRef(contextHasAnimated);

  useEffect(() => {
    if (!isInView || hasAnimatedBefore.current) return;

    controls.start("visible");
    markAnimated();
    hasAnimatedBefore.current = true;
  }, [isInView, controls, markAnimated]);

  useEffect(() => {
    if (hasAnimatedBefore.current) {
      controls.set("visible");
    }
  }, [controls]);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FooterAnimatedItem = ({
  children,
  className = "",
}: FooterAnimatedProps) => {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
};
