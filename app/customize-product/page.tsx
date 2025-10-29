import AboutProject from "@/components/customize-product/AboutProject";
import CoreFeatures from "@/components/customize-product/CoreFeatures";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import ProductDemo from "@/components/customize-product/ProductDemo";
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
        </>
    )
}