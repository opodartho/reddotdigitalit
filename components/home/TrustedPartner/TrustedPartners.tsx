"use client";

import { useRef } from "react";
import Image from "next/image";
import type { TrustedPartnerLogo } from "@/lib/data/trustedPartners";

type TrustedPartnersProps = {
  logos: TrustedPartnerLogo[];
};

export default function TrustedPartners({ logos }: TrustedPartnersProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- SPLIT INTO TWO ROWS ---------------- */
  const mid = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, mid);
  const row2 = logos.slice(mid);

  return (
    <section
      ref={sectionRef}
      className="py-[80px] bg-[#F7F6FD] overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[80px]">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Trusted by Partners
          </h2>
        </div>
      </div>

      <div>
        <div
          className="
            transition-all duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            opacity-100 translate-y-0
          "
        >
          {/* ROW 1 */}
          <div className="relative overflow-hidden mb-6">
            <div className="flex w-max gap-6 animate-marquee-left">
              {[...row1, ...row1].map((src, i) => (
                <LogoCard key={`r1-${i}`} src={src} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 animate-marquee-right">
              {[...row2, ...row2].map((src, i) => (
                <LogoCard key={`r2-${i}`} src={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGO CARD ---------------- */
function LogoCard({ src }: { src: TrustedPartnerLogo }) {
  return (
    <div className="relative flex items-center justify-center bg-white border border-gray-200 h-[72px] w-[147px] rounded-md hover:shadow-md transition">
      <Image
        src={src}
        alt="Partner logo"
        fill
        className="object-contain p-3"
      />
    </div>
  );
}
