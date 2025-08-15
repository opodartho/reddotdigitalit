import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-white bg-[#E52445] hover:bg-primary/40 dark:bg-transparent rounded-md",
        outline:
          "border border-[#E52445] text-[#E52445] bg-white hover:bg-red-200 dark:bg-transparent rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        roundedOutline:
          "border border-[#E52445] text-[#E52445] bg-white hover:bg-red-200 dark:bg-transparent rounded-full",
        link: "text-primary rounded-none underline-offset-4 hover:underline h-auto p-0 text-[#E52445]",
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded-full",
        pill: "rounded-full",
      },
      size: {
        default: "h-9 px-8 py-2 has-[>svg]:px-7",
        sm: "h-8 gap-1.5 px-7 has-[>svg]:px-6",
        lg: "h-10 px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    compoundVariants: [
      { shape: "pill", size: "sm", class: "px-4" },
      { shape: "pill", size: "default", class: "px-6" },
      { shape: "pill", size: "lg", class: "px-8" },
      { shape: "pill", size: "icon", class: "h-10 w-10 p-0" },
      {
        variant: "link",
        class: "p-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      shape: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, shape, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, shape, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
