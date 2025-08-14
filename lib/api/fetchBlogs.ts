import { staticBlogData, BlogItem } from "@/lib/data/blogsData";

export async function getLatestBlogs(): Promise<BlogItem[]> {
  return Promise.resolve(staticBlogData);
}

// Export types for shared usage
export type { BlogItem };
