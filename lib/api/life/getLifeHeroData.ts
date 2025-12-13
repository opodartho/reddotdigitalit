import { lifeHeroData } from "@/lib/data/life/lifeHeroData";

export type LifeHeroData = typeof lifeHeroData;

export async function getLifeHeroData(): Promise<LifeHeroData> {
  return Promise.resolve(lifeHeroData);
}
