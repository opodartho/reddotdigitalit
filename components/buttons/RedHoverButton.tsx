"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function RedHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cn(
        "group relative cursor-pointer overflow-hidden border p-2 px-6 h-[56px] lg:max-w-[220px] w-[358px] text-center font-semibold",
        className
      )}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Original text */}
        <span
          className={cn(
            "relative z-10 transition-all duration-300 whitespace-nowrap",
            isHovered && "opacity-0"
          )}
        >
          {children}
        </span>

        {/* Rounded expanding effect */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#E52445] rounded-full transition-transform duration-1000 ease-out origin-center",
            isHovered ? "scale-[300]" : "scale-0"
          )}
        ></div>

        {/* Hover text + arrow */}
        <div
          className={cn(
            "absolute z-20 flex items-center justify-center gap-2 text-white whitespace-nowrap transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <span>{children}</span>
          <ArrowRight />
        </div>
      </div>
    </button>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function WhiteButton({ children, className }: ButtonProps) {
  return (
    <RedHoverButton
      className={cn(
        "text-[#E52445] bg-white flex items-center justify-center h-[56px] rounded-md py-3 px-6 md:py-6 md:px-10",
        className || ""
      )}
    >
      {children}
    </RedHoverButton>
  );
}
