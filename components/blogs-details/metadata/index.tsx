// MetaData.tsx - No changes needed
import { BlogsDetailsItem, blogsDetailsData } from "@/lib/data/blogs-details/blogDetailsData";

type BlogsDetailsProps={
    blogsDetailsData: BlogsDetailsItem
}
export default function MetaData({blogsDetailsData}: BlogsDetailsProps) {
    return (
        <>
            <div className="lg:block hidden lg:flex-col lg:pt-[64px] lg:pl-[24px] lg:w-[197px]">
                <div className="lg:flex lg:flex-col">
                    <p className="font-semibold text-[16px]">Date</p>
                    <p className="pt-[6px] text-[14px]">Last Update: {blogsDetailsData.date}</p>
                </div>

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Authors</p>
                    <p className="pt-[6px] text-[14px]">
                        Published by:{' '}
                        {blogsDetailsData.authors.map((author, index) => (
                            <span key={index}>
                                {author}
                                {index < blogsDetailsData.authors.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Tags</p>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-[12px] pt-[14px] text-[14px]">
                        {blogsDetailsData.tags.map((p, index) => (<div key={index}><p>{p}</p></div>))}
                    </div>
                </div>

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Share</p>
                    <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-[12px] lg:pt-[6px] text-[14px]">
                        {blogsDetailsData.share.map((p, index) => (<div key={index}><img src={p} /></div>))}
                    </div>
                </div>
            </div>
        </>
    )
}