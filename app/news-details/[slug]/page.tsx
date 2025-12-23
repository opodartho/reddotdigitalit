import { getNewsDetailsBySlug } from "@/lib/api/news-details/fetchNewsDetails";
import BlockRenderer from "@/components/news-details/BlockRenderer";
import MetaData from "@/components/news-details/metadata";
import Header from "@/components/news-details/header";
import { BlogCarousel } from "@/components/news-details/related-blogs";
import { newsListData } from "@/lib/data/news-list/newsListData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params; 

  const news = await getNewsDetailsBySlug(slug);

  if (!news) return notFound();

  return (
    <>
      {/* 🔹 Main Content Container */}
      <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] w-full">
        <div className="max-w-[1440px] w-full mx-auto">
          {/* Header */}
          <Header title={news.title} heroImage={news.heroImage} />

          {/* Meta + Body */}
          <div className="flex flex-col lg:flex-row lg:gap-[104px]">
            {/* MetaData */}
            <div className="shrink-0">
              <MetaData meta={news.meta} />
            </div>

            {/* Content Blocks */}
            <div className="flex-1 min-w-0">
              <BlockRenderer blocks={news.blocks} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Related News */}
      <BlogCarousel newsListData={newsListData} />
    </>
  );
}
