import {
    ManagementCouncilItem, ManagementCouncilData
  } from "@/lib/data/about-us/ManagementCouncil";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getManagement(): Promise<ManagementCouncilItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(ManagementCouncilData);
  }