import { teamGalleryData } from "@/lib/data/life/teamGalleryData";

export type GalleryItem = (typeof teamGalleryData)[number];

export async function getTeamGallery(): Promise<GalleryItem[]> {
  return Promise.resolve(teamGalleryData);
}
