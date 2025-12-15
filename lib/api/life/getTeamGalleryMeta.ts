import { teamGalleryMeta } from "@/lib/data/life/teamGalleryMeta";

export type TeamGalleryMeta = typeof teamGalleryMeta;

export async function getTeamGalleryMeta(): Promise<TeamGalleryMeta> {
  return Promise.resolve(teamGalleryMeta);
}
