import { productDemoSlide, staticDemoSlides } from "@/lib/data/productDemo";

export async function getProductDemoSlides(): Promise<productDemoSlide[]> {
  return Promise.resolve(staticDemoSlides);
}