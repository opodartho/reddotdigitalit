import Grids from "@/components/blogs-list/main";
import Header from "@/components/blogs-list/header";
import { getBlogsList } from "@/lib/api/blogs-details/fetchBlogList";


export default async function Blogs() {
    const [blogsListData] = await Promise.all([getBlogsList()])
    return (
        <>
            <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-100 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       Blog List`} </p>

            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header />
                <Grids blogsListData={blogsListData} />
            </div>
        </>
    )
}