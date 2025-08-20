"use client";

import Image from "next/image";
import { PartnerItem } from "@/lib/data/partnersData";

type PartnerCardProps = Omit<PartnerItem, "id">;

export function PartnerCard({ name, logoUrl }: PartnerCardProps) {
  return (
    <div className="flex h-20 w-60 items-center  justify-center px-4 md:h-24 lg:h-28">
      <Image
        src={logoUrl}
        alt={name}
        width={200}
        height={100}
        className="max-h-24 w-auto object-contain"
        // sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
      />
    </div>
  );
}
