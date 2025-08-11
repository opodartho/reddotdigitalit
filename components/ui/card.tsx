import React, { ReactNode } from "react";


interface CardProps {
  children: ReactNode;
  className?: string;
  gradientClass?: string;
}


export function Card({ children, className = "", gradientClass = "" }: CardProps) {
  return (
    <div className={`rounded-lg  text-black  ${gradientClass} ${className}`}>
      {children}
    </div>
  );
}


export function CardHeader({ children, className = "" }: CardProps) {
  return (
    <div className={`flex flex-col space-y-2 p-6 ${className}`}>
      {children}
    </div>
  );
}


export function CardTitle({ children, className = "" }: CardProps) {
  return (
    <h3 className={`text-2xl leading-none font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
}


export function CardDescription({ children, className = "" }: CardProps) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {children}
    </p>
  );
}




