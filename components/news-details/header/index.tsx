import { NewsDetailsItem } from "@/lib/data/news-details/newsDetailsData";


type NewsDetailsProps = {
    newsDetailsData: NewsDetailsItem
}
export default function Header({ newsDetailsData }: NewsDetailsProps) {
    return (
        <>
            <div className="lg:pt-[150px] pt-[100px]">
                <div className="inline-flex items-center justify-center px-3  border border-[#ECF1FE] rounded-[17px] bg-white shadow-[0_12px_48px_rgba(49,1,139,0.05)] mb-[17px] lg:mb-[14px]">
                    <span className="font-poppins text-[#121926] text-[14px] leading-[21px] tracking-[0.032px] font-normal">
                        News
                    </span>
                </div>
                <p className="font-semibold leading-[48px] text-[30px] text-title mb-[36px] sm:mb-[50px] ">
                    {newsDetailsData.title}
                </p>

                <img
                    src={newsDetailsData.imageUrls[0]}
                    className="rounded-[16px] w-full h-[246px] sm:h-[360px] lg:h-[540px] object-cover"
                />
            </div>
        </>
    )
}