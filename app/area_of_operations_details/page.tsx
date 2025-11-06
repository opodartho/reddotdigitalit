import { ServiceHero } from "@/components/services/cloud_migration/ServiceHero";
import { KeyBenefitsSection } from "@/components/services/cloud_migration/KeyBenefitsSection";
import { KeyBenefitsGrid } from "@/components/services/cloud_migration/KeyBenefitsGrid";
import { CallToActionSection } from "@/components/services/cloud_migration/CallToActionSection";
import { ContactSection } from "@/components/services/cloud_migration/ContactSection";


export default function CloudMigrationPage() {
  return (
    <main className="bg-white">
      <ServiceHero />
      <KeyBenefitsSection />
      <KeyBenefitsGrid />
      <CallToActionSection/>
      <ContactSection />
       
    </main>
  );
}
