import {PrivacyData, PrivacyPolicy } from "@/lib/data/privacy-policy";

export async function getPrivacy(): Promise<PrivacyPolicy[]> {
  return Promise.resolve(PrivacyData);
}
export type { PrivacyPolicy };
