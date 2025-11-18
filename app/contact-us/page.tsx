import React from "react";
import { HeroSection } from "@/components/ContactUs/HeroSection";
import { GetInTouchForm } from "@/components/ContactUs/GetInTouchForm";
import { LocationSection } from "@/components/ContactUs/LocationSection";


export default function ContactUsPage() {
  return (
    <main className="bg-white">

      <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-100 lg:left-21 left-4 whitespace-break-spaces">{`Contact Us`} </p>

      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== Get In Touch Section (Info + Form) ===== */}
      <GetInTouchForm />

      {/* ===== Location Section (Map + Office Info) ===== */}
      <LocationSection />
    </main>
  );
}



