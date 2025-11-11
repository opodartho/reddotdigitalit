// Blogs.tsx - Proper 1440px content area layout
import Body from "@/components/news-details/body";
import Header from "@/components/news-details/header";
import MetaData from "@/components/news-details/metadata";
import { BlogCarousel } from "@/components/news-details/related-blogs";
import WorkWithUs from "@/components/news-details/work-with-us";
import { getNewsDetails } from "@/lib/api/news-details/fetchNewsDetails";
import { newsListData } from "@/lib/data/news-list/newsListData";

export default async function Blogs() {
    const [NewsDetailsData] = await Promise.all([getNewsDetails()])
    return (
        <>
            {/* Container with 240px padding on each side for 1920px viewport */}
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] lg:w-full">
                <div className="lg:max-w-[1440px] w-full mx-auto">
                    <Header newsDetailsData={NewsDetailsData} />

                    <div className="flex lg:gap-[104px] gap-0">
                        {/* MetaData - Fixed width */}
                        <div className="shrink-0">
                            <MetaData newsDetailsData={NewsDetailsData} />
                        </div>

                        {/* Body - Takes remaining space */}
                        <div className="flex-1 min-w-0">
                            <Body newsDetailsData={NewsDetailsData} />
                            <WorkWithUs />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <BlogCarousel newsListData={newsListData} />
            </div>
        </>
    )
}