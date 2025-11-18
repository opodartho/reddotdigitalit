"use client";
"use client";

import { useParams } from "next/navigation";
import { operationsData } from "./data";  // ✅ fixed path

import ServiceHero from "./components/ServiceHero";
import KeyBenefitsSection from "./components/KeyBenefitsSection";
import KeyBenefitsGrid from "./components/KeyBenefitsGrid";
import CallToActionSection from "./components/CallToActionSection";
import { ContactSection } from "./components/ContactSection";



export default function AreaOfOperationPage() {
  const { slug } = useParams();
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
      <p className="text-[14px] text-[#959191] absolute lg:top-30 top-30 z-100 lg:left-21 left-4 whitespace-break-spaces">{`Area Of Operations      >>       ${data.title}`} </p>


      <main className="bg-white">
        <ServiceHero
          title={data.title}
          description={data.description}
          image={data.heroImage}
        />
        <KeyBenefitsSection sectionDesc={data.sectionDesc} />
        <KeyBenefitsGrid benefits={data.benefits} />
        <CallToActionSection
          title={data.ctaTitle}
          description={data.ctaDesc}
        />
        <ContactSection />
      </main>
    </>
  );
}
