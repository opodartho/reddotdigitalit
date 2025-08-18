import { aboutData, achievementData, AboutData, AchievementData } from "@/lib/data/whoWeAreData";

export async function getAboutData(): Promise<AboutData> {
  return Promise.resolve(aboutData);
}

export async function getAchievementData(): Promise<AchievementData[]> {
  return Promise.resolve(achievementData);
}
