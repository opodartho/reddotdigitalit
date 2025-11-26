"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhiteHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative cursor-pointer border-red-600 overflow-hidden border p-2 h-[56px] text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center w-full h-full  ">

        <span className="relative z-10 transition-all duration-300 group-hover:opacity-0 whitespace-nowrap">
          {children}
        </span>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full transition-transform duration-1000 ease-out scale-0 group-hover:scale-[300] origin-center"></div>

        <div className="absolute z-20 flex items-center justify-center gap-2 text-[#E52445] opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </div>
    </button>
  );
}

// ⭐ FIXED HERE
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function WhiteButton({ children, className, ...props }: ButtonProps) {
  return (
    <WhiteHoverButton
      className={cn(
        "bg-[#E52445] text-white flex items-center justify-center h-[56px] rounded-md py-3 md:py-6",
        className || ""
      )}
      {...props}
    >
      {children}
    </WhiteHoverButton>
  );
}
