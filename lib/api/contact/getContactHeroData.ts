import { contactHeroData } from "@/lib/data/contact/contactHeroData";

export type ContactHeroData = typeof contactHeroData;

export async function getContactHeroData(): Promise<ContactHeroData> {
  return Promise.resolve(contactHeroData);
}
