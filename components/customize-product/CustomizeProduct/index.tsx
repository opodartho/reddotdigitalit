"use client"
import { staticProductSolutions } from "@/lib/data/productSolutionData";
import { ProductCarousel } from "./ProductCarousel";
import { productData } from "@/lib/data/productData";
import { CustomizeItem } from "@/lib/data/customize-product";

type CustomizeProps= {
    customizeData: CustomizeItem
}
export default function Section({customizeData}: CustomizeProps) {
    return (
        <>
            <div className="flex flex-col lg:items-center">
                <p className="text-[32px] font-semibold  lg:pl-[80px] pl-[16px]">{customizeData.title}</p>
                <p className="text-[14px]  lg:pl-[80px] pl-[16px]">{customizeData.description}</p>
                <div className=" w-full pt-[64px]">
                    <ProductCarousel solutions={staticProductSolutions}/>
                </div>
            </div>
        </>
    )
}