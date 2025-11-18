import React from "react";
import { HeroSection } from "@/components/ContactUs/HeroSection";
import { GetInTouchForm } from "@/components/ContactUs/GetInTouchForm";
import { LocationSection } from "@/components/ContactUs/LocationSection";


export default function ContactUsPage() {
  return (
    <main className="bg-white">


      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== Get In Touch Section (Info + Form) ===== */}
      <GetInTouchForm />

      {/* ===== Location Section (Map + Office Info) ===== */}
      <LocationSection />
    </main>
  );
}



