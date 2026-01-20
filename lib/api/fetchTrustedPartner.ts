// lib/api/getTrustedPartners.ts

import { trustedPartnerLogos } from "@/lib/data/trustedPartners";

export async function getTrustedPartners(): Promise<string[]> {
  // future: replace with fetch() call
  return trustedPartnerLogos;
}
