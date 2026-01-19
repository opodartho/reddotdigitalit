"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  fullHeight = true,
  centerChildren = true,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noiseRef = useRef(createNoise3D());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#3493bc",
    "#b8dbe9",
    "#6f9097",
    "#b2dfef",
    "#abb5b7",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    const noise = noiseRef.current;
    let w = 0;
    let h = 0;
    let nt = 0;
    let i: number;
    let x: number;
    let animationId: number;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const width = parent?.offsetWidth || window.innerWidth;
      const height =
        parent?.offsetHeight || canvas.offsetHeight || window.innerHeight;
      w = context.canvas.width = width;
      h = context.canvas.height = height;
      context.filter = `blur(${blur}px)`;
    };

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (i = 0; i < n; i++) {
        context.beginPath();
        context.lineWidth = waveWidth || 50;
        context.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          context.lineTo(x, y + h * 0.5);
        }
        context.stroke();
        context.closePath();
      }
    };

    const render = () => {
      context.fillStyle = backgroundFill || "black";
      context.globalAlpha = waveOpacity || 0.5;
      context.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        `${fullHeight ? "h-screen" : "h-auto"}`,
        "relative",
        centerChildren ? "flex flex-col items-center justify-center" : "",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
