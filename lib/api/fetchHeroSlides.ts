import { staticHeroSlides, HeroSlide } from "@/lib/data/heroSlidesData";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return Promise.resolve(staticHeroSlides);
}
