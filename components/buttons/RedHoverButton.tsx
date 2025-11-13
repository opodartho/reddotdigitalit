import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function RedHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-background relative cursor-pointer overflow-hidden  border p-2 px-6 h-[56px] lg:w-[200px]  w-[358px] text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#E52445]   h-2 w-2 rounded-full transition-all duration-1000 group-hover:scale-[300]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-7 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className=" bg-[#E52445] text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-0 items-center justify-center gap-2 opacity-0 transition-all duration-800 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}


export default function RedButton({children}: any){
    return(
      <RedHoverButton
              className="border flex items-center justify-center border-[#E52445] text-[#E52445]   bg-white rounded-md  dark:bg-transparent py-3 px-6 md:py-6 md:px-6"
            >
              {children}
            </RedHoverButton>
    )
}