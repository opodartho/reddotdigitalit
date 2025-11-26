import {
    HeroSlides, heroSlides
  } from "@/lib/data/home-hero/hero";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getHeroes(): Promise<HeroSlides[]> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(heroSlides);
  }