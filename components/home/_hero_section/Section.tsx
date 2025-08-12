import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex max-w-xl flex-col gap-6 pl-10">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {[
          "15+ enterprise solutions",
          "ISO Certified",
          "5+ years of experience",
        ].map((text) => (
          <span
            key={text}
            className="text-[#70738F]; rounded-full bg-gray-100 px-3 py-1 text-xs font-medium"
          >
            {text}
          </span>
        ))}
      </div>

      {/* Heading */}
      <h1 className="text-5xl leading-tight font-bold">
        Crafting <span className="text-[#E52445]">Innovation,</span>
        <br />
        Delivering <span className="text-[#E52445]">Excellence</span>
      </h1>

      {/* Description */}
      <p className="text-#121926; text-lg leading-relaxed">
        We turn ideas into innovative tech solutions with custom software that
        boosts efficiency and growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button variant="outline">Explore All Services →</Button>
        <Button variant="default">Let's work with us</Button>
      </div>
    </section>
  );
}
