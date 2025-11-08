import { NewsDetailsItem } from "@/lib/data/news-details/newsDetailsData";


type NewsDetailsProps={
    newsDetailsData: NewsDetailsItem
}
export default function Header({newsDetailsData}: NewsDetailsProps) {
    return (
        <>
            <div className="lg:pt-[108px]">
                <p className="font-bold lg:static absolute lg:pt-[0px] pt-[250px] lg:text-[40px] lg:max-w-[864px] text-[30px]">
                    {newsDetailsData.title}
                </p>

                <img
                    src={newsDetailsData.imageUrls[0]}
                    className="lg:pt-[44px] pt-[80px] w-full lg:max-w-[1280px]"
                />
            </div>
        </>
    )
}