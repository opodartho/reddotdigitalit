import { locationData } from "@/lib/data/contact/locationData";

export type LocationData = typeof locationData;

export async function getLocationData(): Promise<LocationData> {
  return Promise.resolve(locationData);
}
