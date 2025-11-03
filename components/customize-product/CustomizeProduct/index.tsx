"use client"
import { staticProductSolutions } from "@/lib/data/productSolutionData";
import { ProductCarousel } from "./ProductCarousel";
import { productData } from "@/lib/data/productData";

export default function Section() {
    return (
        <>
            <div className="flex flex-col lg:items-center">
                <p className="text-[32px] font-semibold  lg:pl-[80px] pl-[16px]">More Customize Product Solution</p>
                <p className="text-[14px]  lg:pl-[80px] pl-[16px]">Find more customised solution offer by our company.</p>
                <div className=" w-full pt-[64px]">
                    <ProductCarousel solutions={staticProductSolutions}/>
                </div>
            </div>
        </>
    )
}