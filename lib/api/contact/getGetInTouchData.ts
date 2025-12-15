import { getInTouchData } from "@/lib/data/contact/getInTouchData";

export type GetInTouchData = typeof getInTouchData;

export async function getGetInTouchData(): Promise<GetInTouchData> {
  return Promise.resolve(getInTouchData);
}
