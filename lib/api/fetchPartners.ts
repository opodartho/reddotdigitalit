import { staticPartnersData, PartnerItem } from "@/lib/data/partnersData";

export async function getPartners(): Promise<PartnerItem[]> {
  return Promise.resolve(staticPartnersData);
}
