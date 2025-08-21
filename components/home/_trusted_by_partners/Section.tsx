// components/home/_trusted_by_partners/Section.tsx

"use client";

import React from "react";
import { PartnerCard } from "./PartnerCard";
import { PartnerItem } from "@/lib/data/partnersData";

type PartnersSectionProps = {
  partnersData: PartnerItem[];
};

const PartnersSection = ({ partnersData }: PartnersSectionProps) => {
  const partnersPerRow = Math.ceil(partnersData.length / 3);
  const row1Partners = partnersData.slice(0, partnersPerRow);
  const row2Partners = partnersData.slice(partnersPerRow, partnersPerRow * 2);
  const row3Partners = partnersData.slice(partnersPerRow * 2);

  const duplicatedRow1 = [...row1Partners, ...row1Partners];
  const duplicatedRow2 = [...row2Partners, ...row2Partners];
  const duplicatedRow3 = [...row3Partners, ...row3Partners];

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Trusted by Partners
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Our cutting-edge Modular Data Center solutions enable to protect
          mission-critical data.
        </p>

        {/* Row 1 - Left to Right */}
        <div
          className="relative my-4 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 0%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="animate-marquee-left flex whitespace-nowrap">
            {duplicatedRow1.map((partner, index) => (
              <PartnerCard
                key={`row1-${partner.id}-${index}`}
                name={partner.name}
                logoUrl={partner.logoUrl}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div
          className="relative my-4 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="animate-marquee-right flex whitespace-nowrap">
            {duplicatedRow2.map((partner, index) => (
              <PartnerCard
                key={`row2-${partner.id}-${index}`}
                name={partner.name}
                logoUrl={partner.logoUrl}
              />
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right */}
        <div
          className="relative my-4 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="animate-marquee-left flex whitespace-nowrap">
            {duplicatedRow3.map((partner, index) => (
              <PartnerCard
                key={`row3-${partner.id}-${index}`}
                name={partner.name}
                logoUrl={partner.logoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
