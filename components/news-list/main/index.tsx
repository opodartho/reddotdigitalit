"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { NewsListItem, newsListData } from "@/lib/data/news-list/newsListData";
import { useRouter } from 'next/navigation'
import RedButton from "@/components/buttons/RedHoverButton";
import Link from "next/link";


type NewsListProps = {
    newsListData: NewsListItem[]
}

export default function Grids({ newsListData }: NewsListProps) {
    const router = useRouter()
    return (
        <>
            <div className="lg:pt-[77px] pt-[68px] flex flex-wrap gap-x-[16px] gap-y-[30px] justify-center lg:justify-start ">

                {newsListData.map((slide) => (

                    <div key={slide.id}>
                        <Card
                            className={`w-[308px] border-1 bg-white h-[494px] transition shadow-sm hover:shadow-lg`}
                        >
                            <CardHeader className="-m-4 space-y-0">
                                <img src={slide.imageUrl} className="" />
                                <CardTitle className="text-[14px] text-gray-400 pt-[13px] pl-[10px]">{slide.date}</CardTitle>
                                <CardTitle className="text-[18px] pt-[22px] pl-[10px] tracking-wider">{slide.title}</CardTitle>
                                <CardDescription className="text-[14px] pl-[10px] pr-[43px] pt-[20px]">
                                    {slide.description}
                                </CardDescription>
                                <Button variant={"link"} className="text-start w-[96.2px] pl-[3px]" onClick={() => router.push("/news-details")}>Read More »</Button>
                            </CardHeader>
                        </Card>
                    </div>

                ))}



            </div>

            <div className="flex justify-center">
                <Link href="/news-details">
                    <RedButton className="mt-[64px] w-[195px] h-[56px] text-[16px] border border-[#E52445]">
                        Load More
                    </RedButton>
                </Link>
            </div>
        </>
    )
}