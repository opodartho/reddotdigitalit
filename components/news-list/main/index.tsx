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
                            className="w-[308px] h-[494px] bg-white border-1 transition shadow-sm hover:shadow-lg flex flex-col"
                        >

                            <CardHeader className="-m-4 space-y-0 flex flex-col h-full">
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    className="w-full h-[200px] object-cover"
                                />

                                <div className="flex flex-col flex-1">
                                    <CardTitle className="text-[14px] text-gray-400 pt-[13px] pl-[10px]">
                                        {slide.date}
                                    </CardTitle>

                                    <CardTitle className="text-[18px] pt-[22px] pl-[10px] tracking-wider">
                                        {slide.title}
                                    </CardTitle>

                                    <CardDescription className="text-[14px] pl-[10px] pr-[43px] pt-[20px]">
                                        {slide.description}
                                    </CardDescription>

                                    {/* 👇 always aligned */}
                                    <Button
                                        variant="link"
                                        className="mt-auto pl-[10px] text-start w-fit"
                                        onClick={() => router.push("/news-details")}
                                    >
                                        Read More »
                                    </Button>
                                </div>
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