import Grids from "@/components/news-list/main";
import Header from "@/components/news-list/header";
import { getNewsList } from "@/lib/api/news-list/fetchNewsList";


export default async function Blogs() {
    const [NewsListData] = await Promise.all([getNewsList()])
    return (
        <>
            <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-100 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       News List`} </p>

            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header />
                <Grids newsListData={NewsListData} />
            </div>
        </>
    )
}