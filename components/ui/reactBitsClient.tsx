"use client";
import dynamic from "next/dynamic";

// Safely import all frequently used components
export const ShinyText = dynamic<any>(
  () => import("react-bits").then((mod) => mod.ShinyText),
  { ssr: false }
);

export const FadeText = dynamic<any>(
  () => import("react-bits").then((mod) => mod.FadeText),
  { ssr: false }
);

export const MagneticButton = dynamic<any>(
  () => import("react-bits").then((mod) => mod.MagneticButton),
  { ssr: false }
);

export const SpotlightCard = dynamic<any>(
  () => import("react-bits").then((mod) => mod.SpotlightCard),
  { ssr: false }
);
