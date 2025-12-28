import {
  ExtraSectionsData,
  ExtraSectionForProduct,
} from "@/lib/data/customize-product/extraSectionsData";

// This async function mimics fetching data from a database or CMS.
export async function getExtraSections(): Promise<ExtraSectionForProduct[]> {
  return Promise.resolve(ExtraSectionsData);
}
