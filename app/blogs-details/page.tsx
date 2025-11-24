// Blogs.tsx - Fixed version for sticky to work
import Body from "@/components/blogs-details/body";
import Header from "@/components/blogs-details/header";
import MetaData from "@/components/blogs-details/metadata";
import { BlogCarousel } from "@/components/blogs-details/related-blogs";
import WorkWithUs from "@/components/blogs-details/work-with-us";
import { getBlogsList } from "@/lib/api/blogs-details/fetchBlogList";
import { getBlogsDetails } from "@/lib/api/blogs-list/fetchBlogDetails";

export default async function Blogs() {
    const [blogsDetailsData, blogsListData] = await Promise.all([getBlogsDetails(), getBlogsList()])
    return (
        <>

            {/* Container with 240px padding on each side for 1920px viewport */}
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] lg:w-full">
                <div className="max-w-[1440px] w-full mx-auto">
                    <Header blogsDetailsData={blogsDetailsData} />

                    {/* KEY: Add relative positioning to the flex container */}
                    <div className="flex lg:gap-[104px] gap-0 sticky">
                        {/* MetaData - Fixed width with proper alignment */}
                        <div className=" sticky top-30"> {/* Remove any sticky classes here */}
                            <MetaData blogsDetailsData={blogsDetailsData} />
                        </div>

                        {/* Body - Takes remaining space with sufficient content height */}
                        <div className="flex-1 min-w-0">
                            <Body blogsDetailsData={blogsDetailsData} />
                            <WorkWithUs />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[710px]">
                <BlogCarousel blogsListData={blogsListData} />
            </div>
        </>
    )
}
