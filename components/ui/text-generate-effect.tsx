"use client";
import { memo, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TextGenerateEffect = memo(function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  textClassName,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  textClassName?: string;
}) {
  const wordsArray = useMemo(() => words.split(" "), [words]);

  const textClass = textClassName ?? "dark:text-white text-black text-2xl leading-snug tracking-wide";

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{
                opacity: 0,
                filter: filter ? "blur(0px)" : "none",
              }}
              animate={{
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
              }}
              transition={{
                duration: duration ? duration : 1,
                delay: idx * 0.2,
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={cn(textClass)}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
});

export { TextGenerateEffect };
