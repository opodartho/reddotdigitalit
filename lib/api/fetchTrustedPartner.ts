// lib/api/getTrustedPartners.ts

import { trustedPartnerLogos,  TrustedPartnerLogo, } from "@/lib/data/trustedPartners";

export async function getTrustedPartners(): Promise<TrustedPartnerLogo[]> {
  // future: replace with fetch() call
  return trustedPartnerLogos;
}
