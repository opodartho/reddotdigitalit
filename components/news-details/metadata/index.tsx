// MetaData.tsx - No changes needed
import { newsDetailsData } from "@/lib/data/newsDetailsData";

export default function MetaData() {
    return (
        <>
            <div className="lg:block hidden lg:flex-col lg:pt-[64px] lg:pl-[24px] lg:w-[197px]">
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

                <div className="lg:flex lg:flex-col pt-[44px]">
                    <p className="font-semibold text-[16px]">Share</p>
                    <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-[12px] lg:pt-[6px] text-[14px] lg:max-w-[190px]">
                        {newsDetailsData.share.map((p, index) => (<div key={index}><img src={p} /></div>))}
                    </div>
                </div>
            </div>
        </>
    )
}