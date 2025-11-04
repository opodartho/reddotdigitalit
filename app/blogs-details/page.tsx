import Body from "@/components/blogs-details/body";
import Header from "@/components/blogs-details/header";
import MetaData from "@/components/blogs-details/metadata";
import { BlogCarousel } from "@/components/blogs-details/related-blogs";
import WorkWithUs from "@/components/blogs-details/work-with-us";
import { blogsListData } from "@/lib/data/blogsListData";


export default function Blogs() {
    return (
        <>
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header />

                <div className="flex gap-[111px]">
                    <div>
                        <MetaData />
                    </div>
                    <div>
                        <Body />
                        <WorkWithUs />
                    </div>
                </div>

            </div>
            <div className="w-full">
                <BlogCarousel blogsListData={blogsListData} />
            </div>
        </>
    )
}