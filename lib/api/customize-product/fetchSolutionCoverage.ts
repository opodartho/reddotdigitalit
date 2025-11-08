import {
  SolutionCoverageItem,
  SolutionCoverageData,
  SolutionCoverageForProduct
} from "@/lib/data/customize-product/SolutionCoverageData";

// This async function mimics fetching data from a database or CMS.
export async function getSolutionCoverage(): Promise<SolutionCoverageForProduct[]> {
  // In a real app, you might fetch from an API. For now, we just return the static data.
  return Promise.resolve(SolutionCoverageData);
}