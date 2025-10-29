"use client"
import { ProductCarousel } from "./ProductCarousel";
import { productData } from "@/lib/data/productData";

export default function Section() {
    return (
        <>
            <div className="flex flex-col items-center">
                <p className="text-[32px] font-semibold  pl-[80px]">More Customize Product Solution</p>
                <p className="text-[14px]  pl-[80px]">Find more customised solution offer by our company.</p>
                <div className=" w-full pt-[64px]">
                    <ProductCarousel productData={productData}/>
                </div>
            </div>
        </>
    )
}