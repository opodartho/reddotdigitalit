import { cultureData } from "@/lib/data/life/cultureData";

export type CultureItem = (typeof cultureData)[number];

export async function getCultureData(): Promise<CultureItem[]> {
  return Promise.resolve(cultureData);
}
