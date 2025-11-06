import AboutProject from "@/components/customize-product/AboutProject";
import Conclusion from "@/components/customize-product/Conclusion";
import Section from "@/components/customize-product/CustomizeProduct";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import SolutionCoverage from "@/components/customize-product/SolutionCoverage";
import { getAboutProject } from "@/lib/api/fetchAboutProject";
import { getConclusion } from "@/lib/api/fetchConclusion";
import { getCustomize } from "@/lib/api/fetchCustomizeItem";
import { getHeader } from "@/lib/api/fetchHeaderData";
import { getKeyBenefits } from "@/lib/api/fetchKeyBenefits";
import { getSolutionCoverage } from "@/lib/api/fetchSolutionCoverage";
import { notFound } from "next/navigation";


export default async function CustomizeProduct({ params }: { params: { id: string } }) {

    const index = Number(params.id) + 1; // Convert 1-based ID to 0-based index



    const [KeyBenefitsData, AboutProjectData, CustomizeData, HeaderData, ConclusionData, SolutionCoverageData] = await Promise.all([getKeyBenefits(), getAboutProject(), getCustomize(), getHeader(), getConclusion(), getSolutionCoverage()])
    const numberOfProjects = AboutProjectData.length
    if ((Number(params.id) >= numberOfProjects) || Number(params.id) < 1) notFound();
    const productId = Number(params.id);

    const solutionCoverageForProduct = SolutionCoverageData.find(
        (item) => item.productId === productId
    );

    return (
        <>
            <div>
                <Header headerData={HeaderData} Id={params.id} />
            </div>
            <div className="lg:pl-[240px] lg:pr-[240px] lg:flex-1 lg:flex-grow lg:pt-[90px] pt-[48px] pr-[80px]">
                <AboutProject aboutProjectData={AboutProjectData} Id={params.id} />
            </div>
            <div className="lg:pl-[240px] lg:pr-[240px] lg:flex-1 lg:pt-[114px] pt-[48px] pr-[16px]">
                <KeyBenefits keyBenefitsData={KeyBenefitsData} Id={params.id} />
            </div>
            {solutionCoverageForProduct && (
                <div className="lg:pl-[240px] lg:pr-[240px] lg:flex-1 lg:pt-[114px] pt-[48px] pr-[16px]">
                    <SolutionCoverage
                        coverage={solutionCoverageForProduct.coverage}
                        Id={params.id}
                    />
                </div>
            )}

            <div className="lg:pt-[114px] pt-[48px]">
                <Section customizeData={CustomizeData} />
            </div>
            <div className="pt-[173px] lg:pl-[240px] lg:pr-[240px]">
                <Conclusion conclusionData={ConclusionData} />
            </div>
        </>
    )
}