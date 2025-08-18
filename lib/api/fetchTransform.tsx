import { staticTransformData, TransformItem } from "@/lib/data/transformData";

export async function getTransformData(): Promise<TransformItem[]> {
  return Promise.resolve(staticTransformData);
}