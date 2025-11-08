import {
    AboutUs, AboutUsData
  } from "@/lib/data/about-us/AboutRedDot";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getAboutUs(): Promise<AboutUs> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(AboutUsData);
  }