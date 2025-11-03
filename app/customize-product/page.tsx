import AboutProject from "@/components/customize-product/AboutProject";
import Conclusion from "@/components/customize-product/Conclusion";
import CoreFeatures from "@/components/customize-product/CoreFeatures";
import Section from "@/components/customize-product/CustomizeProduct";
import DevelopmentProcess from "@/components/customize-product/DevelopmentProcess";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import ProductDemo from "@/components/customize-product/ProductDemo";
import ProductFAQ from "@/components/customize-product/ProductFAQ";
import TechnologyUsed from "@/components/customize-product/TechnologyUsed";
import ValuesProposition from "@/components/customize-product/ValuesProposition";


export default function CustomizeProduct(){
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className="lg:pt-[90px] pt-[48px] pr-[80px]">
                <AboutProject/>
            </div>
            <div className="lg:pt-[114px] pt-[48px] pr-[16px]">
                <KeyBenefits/>
            </div>
            <div className="lg:pt-[114px] pt-[48px]">
                <Section/>
            </div>
            <div className="pt-[173px] ">
                <Conclusion/>
            </div>
        </>
    )
}