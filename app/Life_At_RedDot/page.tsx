import { getLifeHeroData } from "@/lib/api/life/getLifeHeroData";
import { getCultureData } from "@/lib/api/life/getCultureData";
import { getCultureSectionMeta } from "@/lib/api/life/getCultureSectionData";
import { getTeamGallery } from "@/lib/api/life/getTeamGallery";
import { getTeamGalleryMeta } from "@/lib/api/life/getTeamGalleryMeta";

import { LifeHero } from "@/components/LifeAtRedDot/LifeHero";
import CultureSection from "@/components/LifeAtRedDot/CultureSection";
import TeamGallery from "@/components/LifeAtRedDot/TeamGallery";

export default async function LifeAtRedDotPage() {
  // ✅ Load ALL data here (single source of truth)
  const [
    heroData,
    cultureMeta,
    cultureData,
    galleryMeta,
    galleryData,
  ] = await Promise.all([
    getLifeHeroData(),
    getCultureSectionMeta(),
    getCultureData(),
    getTeamGalleryMeta(),
    getTeamGallery(),
  ]);

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* 🟥 Hero Section */}
      <LifeHero data={heroData} />

      {/* 🧩 Culture Section */}
      <CultureSection
        meta={cultureMeta}
        data={cultureData}
      />

      {/* 🖼️ Team Gallery */}
      <TeamGallery
        meta={galleryMeta}
        data={galleryData}
      />
    </main>
  );
}
