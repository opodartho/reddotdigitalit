import {
  staticServiceWeServeData,
  ServiceWeServeItem,
} from "@/lib/data/ServiceWeServeData";

export async function getServices(): Promise<ServiceWeServeItem[]> {
  return Promise.resolve(staticServiceWeServeData);
}

export type { ServiceWeServeItem };
