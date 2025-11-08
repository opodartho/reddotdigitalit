import {
    HeaderItem, HeaderData
  } from "@/lib/data/about-us/Header";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getHeader(): Promise<HeaderItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(HeaderData);
  }