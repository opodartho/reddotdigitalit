import {
  productSolutions,
  ProductSolutionItem,
} from "@/lib/data/customize-product/productSolutionData";

export async function getProductSolutions(): Promise<ProductSolutionItem[]> {
  return Promise.resolve(productSolutions);
}
