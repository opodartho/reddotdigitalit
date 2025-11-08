// lib/api/fetchOperations.ts

import {
    SpeakupItem, SpeakupData
  } from "@/lib/data/speak-up/speakupData";

  // This async function mimics fetching data from a database or CMS.
  export async function getSpeakup(): Promise<SpeakupItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(SpeakupData);
  }
  