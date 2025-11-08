import {
    JourneyItem, JourneyData
  } from "@/lib/data/about-us/OurJourney";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getJourney(): Promise<JourneyItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(JourneyData);
  }