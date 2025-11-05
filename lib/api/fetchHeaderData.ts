
import { HeaderData, HeaderItem } from "../data/header";
  
  // This async function mimics fetching data from a database or CMS.
  export async function getHeader(): Promise<HeaderItem> {
    // In a real app, you might fetch from an API. For now, we just return the static data.
    return Promise.resolve(HeaderData);
  }