import Grids from "@/components/news-list/main";
import Header from "@/components/news-list/header";
import { getNewsList } from "@/lib/api/news-list/fetchNewsList";


export default async function Blogs(){
    const [NewsListData]= await Promise.all([getNewsList()])
    return(
        <>
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] ">
                <Header/>
                <Grids newsListData={NewsListData}/>
            </div>
        </>
    )
}