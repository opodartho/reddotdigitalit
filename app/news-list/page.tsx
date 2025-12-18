import Grids from "@/components/news-list/main";
import Header from "@/components/news-list/header";
import { getNewsList } from "@/lib/api/news-list/fetchNewsList";


export default async function Blogs() {
    const [NewsListData] = await Promise.all([getNewsList()])
    return (
        <>

            <div className="px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
                <Header />
                <Grids newsListData={NewsListData} />
            </div>
        </>
    )
}