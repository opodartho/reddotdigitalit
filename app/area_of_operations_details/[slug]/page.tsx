"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ScheduleCallModal from "@/components/ui/ScheduleCallModal";
import { operationsData } from "./data";  // ✅ fixed path

import ServiceHero from "./components/ServiceHero";
import KeyBenefitsSection from "./components/KeyBenefitsSection";
import KeyBenefitsGrid from "./components/KeyBenefitsGrid";
import CallToActionSection from "./components/CallToActionSection";
import { ContactSection } from "./components/ContactSection";



export default function AreaOfOperationPage() {
  const { slug } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const data = operationsData[slug as keyof typeof operationsData];

  if (!data) {
    return (
      <main className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Page not found
        </h2>
      </main>
    );
  }

  return (
    <>


      <main className="bg-white ">
        <ServiceHero
          title={data.title}
          description={data.description}
          image={data.heroImage}
          onScheduleClick={() => setOpenModal(true)}
        />
        <KeyBenefitsSection sectionDesc={data.sectionDesc} />
        <KeyBenefitsGrid benefits={data.benefits} />
        <CallToActionSection
          title={data.ctaTitle}
          description={data.ctaDesc}
          onScheduleClick={() => setOpenModal(true)}
        />
        <ContactSection />
        <ScheduleCallModal open={openModal} onClose={() => setOpenModal(false)} />
      </main>
    </>
  );
}
