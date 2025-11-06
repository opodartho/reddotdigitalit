"use client";

import React from "react";
import { LifeHero } from "@/components/LifeAtRedDot/LifeHero";
import TeamGallery from "@/components/LifeAtRedDot/TeamGallery";
import CultureSection from "@/components/LifeAtRedDot/CultureSection";

export default function LifeAtRedDotPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* 🟥 Hero Section (optional later) */}
      <LifeHero /> 
      <CultureSection/>

      {/* 🧠 Team Gallery Section */}
      <TeamGallery />

      {/* 🧩 Future sections (Culture, Events, Office Environment, etc.) */}
    </main>
  );
}
