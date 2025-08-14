import { services, Service } from "@/lib/data/servicesData";

export async function getServices(): Promise<Service[]> {
  return Promise.resolve(services);
}
