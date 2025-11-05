import { AboutProjectData, AboutProjectItem } from "../data/aboutProject";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getAboutProject(): Promise<AboutProjectItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(AboutProjectData);
  }