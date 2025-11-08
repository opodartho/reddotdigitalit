import {
  KeyBenefitItem,
  KeyBenefitsData
} from "@/lib/data/customize-product/keyBenefitsData";

// This async function mimics fetching data from a database or CMS.
export async function getKeyBenefits(): Promise<KeyBenefitItem[][]> {
  // In a real app, you might fetch from an API. For now, we just return the static data.
  return Promise.resolve(KeyBenefitsData);
}