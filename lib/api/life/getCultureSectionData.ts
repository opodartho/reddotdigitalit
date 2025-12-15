import { cultureSectionData } from "@/lib/data/life/cultureSectionData";

export type CultureSectionMeta = typeof cultureSectionData;

export async function getCultureSectionMeta(): Promise<CultureSectionMeta> {
  return Promise.resolve(cultureSectionData);
}
