import { newsDetailsData } from "@/lib/data/news-details/newsDetailsData";
import { NewsDetailsItem } from "@/lib/data/news-details/types";

export async function getNewsDetailsBySlug(
  slug: string
): Promise<NewsDetailsItem | null> {
  // Simulate CMS/API delay
  await new Promise((res) => setTimeout(res, 200));

  return newsDetailsData.find((n) => n.slug === slug) ?? null;
}
