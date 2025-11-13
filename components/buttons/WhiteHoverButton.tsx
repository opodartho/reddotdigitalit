import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function WhiteHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-background relative cursor-pointer overflow-hidden  border p-2 px-6 h-[56px] w-[200px] text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-white   h-2 w-2 rounded-full transition-all duration-1000 group-hover:scale-[300]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className=" bg-white text-[#E52445] absolute top-0 z-10 flex h-full w-full translate-x-0 items-center justify-center gap-2 opacity-0 transition-all duration-800 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}

type ButtonProps={
    children: React.ReactNode,
  className?: string
}

export default function WhiteButton({children, className}: ButtonProps){
    return(
        <WhiteHoverButton
        className={`text-white bg-[#E52445] flex items-center justify-center h-[56px] dark:bg-transparent rounded-md py-3 px-6 md:py-6 md:px-10 ${className || ""}`}
      >
        {children}
      </WhiteHoverButton>
    )
}