"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function RedHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative cursor-pointer overflow-hidden border p-2 px-6 h-[56px] lg:max-w-[220px] w-[358px] text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Original text */}
        <span className="relative z-10 transition-all duration-300 group-hover:opacity-0 whitespace-nowrap">
          {children}
        </span>

        {/* Rounded expanding effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#E52445] rounded-full transition-transform duration-1000 ease-out scale-0 group-hover:scale-[300] origin-center"></div>

        {/* Hover text + arrow */}
        <div className="absolute z-20 flex items-center justify-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
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
