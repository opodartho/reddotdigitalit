import { CustomizeData, CustomizeItem } from "../../data/customize-product/customize-product";

// This async function mimics fetching data from a database or CMS.
export async function getCustomize(): Promise<CustomizeItem> {
  // In a real app, you might fetch from an API. For now, we just return the static data.
  return Promise.resolve(CustomizeData);
}