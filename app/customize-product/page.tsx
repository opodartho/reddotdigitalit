import AboutProject from "@/components/customize-product/AboutProject";
import Conclusion from "@/components/customize-product/Conclusion";
import Section from "@/components/customize-product/CustomizeProduct";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import { getAboutProject } from "@/lib/api/fetchAboutProject";
import { getConclusion } from "@/lib/api/fetchConclusion";
import { getCustomize } from "@/lib/api/fetchCustomizeItem";
import { getHeader } from "@/lib/api/fetchHeaderData";
import { getKeyBenefits } from "@/lib/api/fetchKeyBenefits";


export default async function CustomizeProduct(){

    const [KeyBenefitsData, AboutProjectData, CustomizeData, HeaderData, ConclusionData]= await Promise.all([getKeyBenefits(), getAboutProject(), getCustomize(), getHeader(), getConclusion()])
    return(
        <>
            <div>
                <Header headerData={HeaderData}/>
            </div>
            <div className="lg:pl-[240px] lg:pr-[240px] lg:flex-1 lg:flex-grow lg:pt-[90px] pt-[48px] pr-[80px]">
                <AboutProject aboutProjectData={AboutProjectData}/>
            </div>
            <div className="lg:pl-[240px] lg:pr-[240px] lg:flex-1 lg:pt-[114px] pt-[48px] pr-[16px]">
                <KeyBenefits keyBenefitsData={KeyBenefitsData}/>
            </div>
            <div className="lg:pt-[114px] pt-[48px]">
                <Section customizeData={CustomizeData}/>
            </div>
            <div className="pt-[173px] lg:pl-[240px] lg:pr-[240px]">
                <Conclusion conclusionData={ConclusionData}/>
            </div>
        </>
    )
}