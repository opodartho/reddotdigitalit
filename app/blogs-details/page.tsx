// Blogs.tsx - Proper 1440px content area layout
import Body from "@/components/blogs-details/body";
import Header from "@/components/blogs-details/header";
import MetaData from "@/components/blogs-details/metadata";
import { BlogCarousel } from "@/components/blogs-details/related-blogs";
import WorkWithUs from "@/components/blogs-details/work-with-us";
import { blogsListData } from "@/lib/data/blogsListData";

export default function Blogs() {
    return (
        <>
            {/* Container with 240px padding on each side for 1920px viewport */}
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] lg:w-full">
                <div className="lg:max-w-[1440px] w-full mx-auto">
                    <Header />

                    <div className="flex lg:gap-[104px] gap-0">
                        {/* MetaData - Fixed width */}
                        <div className="shrink-0">
                            <MetaData />
                        </div>
                        
                        {/* Body - Takes remaining space */}
                        <div className="flex-1 min-w-0">
                            <Body />
                            <WorkWithUs />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full">
                <BlogCarousel blogsListData={blogsListData} />
            </div>
        </>
    )
}