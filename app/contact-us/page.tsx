import { HeroSection } from "@/components/ContactUs/HeroSection";
import { GetInTouchForm } from "@/components/ContactUs/GetInTouchForm";
import { LocationSection } from "@/components/ContactUs/LocationSection";

import { getContactHeroData } from "@/lib/api/contact/getContactHeroData";
import { getLocationData } from "@/lib/api/contact/getLocationData";
import { getGetInTouchData } from "@/lib/api/contact/getGetInTouchData";

export default async function ContactUsPage() {
  const heroData = await getContactHeroData();
  const locationData = await getLocationData();
  const getInTouchData = await getGetInTouchData();

  return (
    <main className="bg-white overflow-hidden max-w-[1440px] mx-auto">
      {/* ===== Hero Section ===== */}
      <HeroSection data={heroData} />

      {/* ===== Get In Touch Section ===== */}
      <GetInTouchForm data={getInTouchData} />

      {/* ===== Location Section ===== */}
      <LocationSection data={locationData} />
    </main>
  );
}
