import { PrivacyHead, HeadData } from "@/lib/data/privacy-policy/privacy-head";

export async function getPrivacyHead(): Promise<PrivacyHead> {
  return Promise.resolve(HeadData);
}
export type { PrivacyHead };
