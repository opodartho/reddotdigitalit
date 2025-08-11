import React, { ReactNode } from "react";


interface CardProps {
  children: ReactNode;
  className: string;
}


export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`}>
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


export function CardContent({ children, className = "" }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}


export function CardFooter({ children, className = "" }: CardProps) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}
