"use client"
import { staticProductSolutions } from "@/lib/data/customize-product/staticProductSolutionData";
import { ProductCarousel } from "./ProductCarousel";
import { productData } from "@/lib/data/customize-product/productData";
import { CustomizeItem } from "@/lib/data/customize-product/customize-product";

type CustomizeProps = {
    customizeData: CustomizeItem
}
export default function Section({ customizeData }: CustomizeProps) {
    return (
        <>

            <div className="flex flex-col lg:items-center px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
                <p className="text-[32px] font-semibold  text-title mb-[10px] ">{customizeData.title}</p>
                <p className="text-[14px]  text-subtitle">{customizeData.description}</p>
            </div>
                <div className=" w-full pt-[64px]">
                    <ProductCarousel solutions={staticProductSolutions} />
                </div>
            
        </>
    )
}