import Grids from "@/components/blogs-list/main";
import Header from "@/components/blogs-list/header";
import { getBlogsList } from "@/lib/api/blogs-details/fetchBlogList";


export default async function Blogs(){
    const [blogsListData]= await Promise.all([getBlogsList()])
    return(
        <>
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] ">
                <Header/>
                <Grids blogsListData={blogsListData}/>
            </div>
        </>
    )
}