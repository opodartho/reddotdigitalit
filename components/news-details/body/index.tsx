import { NewsDetailsItem, newsDetailsData } from "@/lib/data/news-details/newsDetailsData";

type NewsDetailsProps={
    newsDetailsData: NewsDetailsItem
}
export default function Body({newsDetailsData}: NewsDetailsProps) {
    return (
        <>
            <div className="lg:pt-[64px] w-full lg:w-auto pt-[185px]">
                {/*Subtitle 0 */}
                <p className="text-[24px] font-bold">{newsDetailsData.subtitle0}</p>

                {/* Description */}
                <p className="text-[14px] pt-[14px]">{newsDetailsData.description}</p>

                {/* SubImage 1 */}
                <div className="lg:pt-[24px] lg:pb-[50px] pt-[32px]">
                    <img src={newsDetailsData.imageUrls[1]} className="w-full" />
                </div>

                {/* Key Points */}
                <div className="pt-[45px]">
                    <div className="border border-[#ffd6d6] bg-[#fffafa] rounded-xl lg:pb-[50px] lg:pr-[32px] lg:pt-[0px] pt-[34px] pl-[16px] pr-[16px]">
                        <p className="lg:pt-[44.65px] lg:pl-[36px] lg:pb-[34.91px] font-bold text-[24px]">{newsDetailsData.keyPointsHeading}</p>

                        {newsDetailsData.keyPoints.map((p, index) => (
                            <div className="flex gap-[12px] lg:pl-[36px] mt-[8px]" key={index}>
                                <img src={'/images/redtick.svg'} className="lg:pt-[0px]  " />
                                <p className="lg:pt-[0px] pt-[32px]">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*SubImage 2*/}
                <div className="lg:pt-[49px] pt-[49px]">
                    <img src={newsDetailsData.imageUrls[2]} className="w-full" />
                </div>

                {/*SubTitle 1*/}
                <div className="lg:pt-[44px] pt-[42px]">
                    <p className="text-[24px] font-semibold">{newsDetailsData.subtitle1}</p>
                </div>

                <div className="lg:pt-[24.56px] pt-[14px]">
                    <p className="text-[14px]">{newsDetailsData.subText1}</p>
                </div>

                {/*SubTitle 2*/}
                {newsDetailsData.subtitle2 && (
                    <>
                        <div className="lg:pt-[44px]">
                            <p className="text-[24px] font-semibold">{newsDetailsData.subtitle2}</p>
                        </div>

                        <div className="lg:pt-[24.56px]">
                            <p className="text-[14px]">{newsDetailsData.subText2}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}