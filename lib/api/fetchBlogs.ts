import { staticBlogData, BlogItem } from "@/lib/data/blogsData";

export async function getLatestBlogs(): Promise<BlogItem[]> {
  return Promise.resolve(staticBlogData);
}
export type { BlogItem };
