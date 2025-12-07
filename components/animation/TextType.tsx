"use client";

import { useEffect, useState } from "react";

export default function TextType({
  text = [""],
  typingSpeed = 120,
  deletingSpeed = 70,
  pauseDuration = 2000,
  className = "",
  fixedWidth = 10,     // ⭐ NEW — avoid layout shifting
}) {
  const words = Array.isArray(text) ? text : [text];

  const [display, setDisplay] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(words[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [firstDone, setFirstDone] = useState(false);

  useEffect(() => {
    let timer: any;
    const word = words[index];

    if (!firstDone) {
      timer = setTimeout(() => setFirstDone(true), pauseDuration);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (char < word.length) {
        timer = setTimeout(() => {
          setDisplay(word.slice(0, char + 1));
          setChar(char + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (char > 0) {
        timer = setTimeout(() => {
          setDisplay(word.slice(0, char - 1));
          setChar(char - 1);
        }, deletingSpeed);
      } else {
        const next = (index + 1) % words.length;
        setIndex(next);
        setChar(0);
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [char, index, isDeleting, firstDone]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        minWidth: `${fixedWidth}ch`, // ⭐ prevents layout jump
      }}
    >
      {display}
    </span>
  );
}
