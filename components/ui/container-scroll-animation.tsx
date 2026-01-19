"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
  containerClassName,
  wrapperClassName,
  cardClassName,
  innerClassName,
  cardShadow,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
  wrapperClassName?: string;
  cardClassName?: string;
  innerClassName?: string;
  cardShadow?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsXl(window.innerWidth >= 1280);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const scaleDimensions = () => {
    if (!isXl) return [1, 1];
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [isXl ? 22 : 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [isXl ? -20 : 0, 0]
  );

  const springOptions = { damping: 25, stiffness: 120, mass: 0.65 };
  const rotateSpring = useSpring(rotate, springOptions);
  const scaleSpring = useSpring(scale, springOptions);
  const translateYSpring = useSpring(translateY, springOptions);

  return (
    <div
      ref={containerRef}
      className={cn(
        // 🔑 KEY LINE — animation exists ONLY on XL
        "hidden xl:block h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 overflow-visible",
        containerClassName
      )}
    >
      <div
        className={cn(
          "py-10 md:py-44 w-full relative overflow-hidden",
          wrapperClassName
        )}
        style={{ perspective: "1200px" }}
      >
        <Header translate={translateYSpring} titleComponent={titleComponent} />

        <Card
          rotate={rotateSpring}
          translate={translateYSpring}
          scale={scaleSpring}
          className={cardClassName}
          innerClassName={innerClassName}
          boxShadow={cardShadow}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

/* ----------------------------------
   Header
----------------------------------- */
export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  if (!titleComponent) return null;

  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

/* ----------------------------------
   Card
----------------------------------- */
export const Card = ({
  rotate,
  scale,
  translate,
  children,
  className,
  innerClassName,
  boxShadow,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  boxShadow?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          boxShadow ??
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl",
        className
      )}
    >
      <div
        className={cn(
          "h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:p-4",
          innerClassName
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
