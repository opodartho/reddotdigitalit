import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-6 max-w-xl">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {["15+ enterprise solutions", "ISO Certified", "5+ years of experience"].map((text) => (
          <span
            key={text}
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
          >
            {text}
          </span>
        ))}
      </div>

    {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight">
        Crafting{" "}
        <span className="text-red-600">Innovation,</span>
        <br />
        Delivering <span className="text-red-600">Excellence</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        We turn ideas into innovative tech solutions with custom software that
        boosts efficiency and growth.
      </p>

      {/* Buttons */}
<<<<<<< Updated upstream
      <div className="flex flex-wrap gap-6">
=======
      <div className="flex flex-wrap gap-4">
>>>>>>> Stashed changes
        <Button variant="CurvedRedOutline">
          Explore All Services →
        </Button>
        <Button variant="default">
          Let's work with us
        </Button>
      </div>
    </section>
  );
}
