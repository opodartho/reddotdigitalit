// MetaData.tsx - No changes needed
import { NewsDetailsItem, newsDetailsData } from "@/lib/data/news-details/newsDetailsData";
type NewsDetailsProps = {
    newsDetailsData: NewsDetailsItem
}
export default function MetaData({ newsDetailsData }: NewsDetailsProps) {
    return (
        <>
            <div className="block flex-col lg:sticky lg:top-30 pt-[64px] lg:pl-[24px] lg:w-[197px]">
                <div className="lg:flex lg:flex-col">
                    <p className="font-semibold text-[16px]">Date</p>
                    <p className="pt-[6px] text-[14px]">Last Update: {newsDetailsData.date}</p>
                </div>

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Authors</p>
                    <p className="pt-[6px] text-[14px]">
                        Published by:{' '}
                        {newsDetailsData.authors.map((author, index) => (
                            <span key={index}>
                                {author}
                                {index < newsDetailsData.authors.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Tags</p>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-[12px] pt-[14px] text-[14px]">
                        {newsDetailsData.tags.map((p, index) => (<div key={index}><p>{p}</p></div>))}
                    </div>
                </div>

                <div className="flex flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Share</p>
                    <div className="pt-[14px] flex flex-row items-center gap-[12px] lg:pt-[6px] text-[14px] lg:container [190px]">
                        {newsDetailsData.share.map((p, index) => (<div key={index}><img src={p} /></div>))}
                    </div>
                </div>
            </div>
        </>
    )
}