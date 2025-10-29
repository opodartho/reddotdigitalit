import AboutProject from "@/components/customize-product/AboutProject";
import CoreFeatures from "@/components/customize-product/CoreFeatures";
import DevelopmentProcess from "@/components/customize-product/DevelopmentProcess";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import ProductDemo from "@/components/customize-product/ProductDemo";
import ProductFAQ from "@/components/customize-product/ProductFAQ";
import ValuesProposition from "@/components/customize-product/ValuesProposition";


export default function CustomizeProduct(){
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className="pt-[90px]">
                <AboutProject/>
            </div>
            <div className="pt-[90px]">
                <CoreFeatures/>
            </div>
            <div className="pt-[90px]">
                <ValuesProposition/>
            </div>
            <div className="pt-[90px]">
                <KeyBenefits/>
            </div>
            <div className="pt-[90px]">
                <ProductDemo/>
            </div>
            <div className="pt-[120px]">
                <ProductFAQ/>
            </div>
            <div className="pt-[270px]">
                <DevelopmentProcess/>
            </div>
        </>
    )
}