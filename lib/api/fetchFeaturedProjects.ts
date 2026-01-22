// lib/api/fetchFeaturedProjects.ts

import { featuredProjects, FeaturedProject } from "@/lib/data/featuredProjectsData";

export async function getFeaturedProjects(): Promise<FeaturedProject[]> {
  // future: replace with fetch() call
  return featuredProjects;
}
