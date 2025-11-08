import {
  staticProductSolutions,
  ProductSolutionItem,
} from "@/lib/data/customize-product/productSolutionData";

export async function getProductSolutions(): Promise<ProductSolutionItem[]> {
  // In the future, you could replace this with an actual API call
  return Promise.resolve(staticProductSolutions);
}
