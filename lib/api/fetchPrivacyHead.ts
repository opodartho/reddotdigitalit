import {PrivacyHead, HeadData } from "@/lib/data/privacy-head";

export async function getPrivacyHead(): Promise<PrivacyHead> {
  return Promise.resolve(HeadData);
}
export type { PrivacyHead };
