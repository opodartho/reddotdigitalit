import { staticNewsData, NewsItem } from "@/lib/data/newsData";

export async function getLatestNews(): Promise<NewsItem[]> {
  return Promise.resolve(staticNewsData);
}
