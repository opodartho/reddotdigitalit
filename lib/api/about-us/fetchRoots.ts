import {
    RootsItem, RootsData
  } from "@/lib/data/about-us/OurRoots";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getRoots(): Promise<RootsItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(RootsData);
  }