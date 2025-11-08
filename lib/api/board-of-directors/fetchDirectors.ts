// lib/api/fetchOperations.ts

import {
    Directors, directorsData
  } from "@/lib/data/board-of-directors/directorsData";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getDirectors(): Promise<Directors> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(directorsData);
  }
  