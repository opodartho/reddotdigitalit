import AboutProject from "@/components/customize-product/AboutProject";
import Conclusion from "@/components/customize-product/Conclusion";
import Section from "@/components/customize-product/CustomizeProduct";
import Header from "@/components/customize-product/Header";
import KeyBenefits from "@/components/customize-product/KeyBenefits";
import SolutionCoverage from "@/components/customize-product/SolutionCoverage";
import ReadyToTransform from "@/components/home/_ready_to_transform/Section";
import { TransformCard } from "@/components/home/_ready_to_transform/TransformCard";
import { getAboutProject } from "@/lib/api/customize-product/fetchAboutProject";
import { getConclusion } from "@/lib/api/customize-product/fetchConclusion";
import { getCustomize } from "@/lib/api/customize-product/fetchCustomizeItem";
import { getHeader } from "@/lib/api/customize-product/fetchHeaderData";
import { getKeyBenefits } from "@/lib/api/customize-product/fetchKeyBenefits";
import { getSolutionCoverage } from "@/lib/api/customize-product/fetchSolutionCoverage";
import { getTransformData } from "@/lib/api/fetchTransform";
import { notFound } from "next/navigation";

export default async function CustomizeProduct({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);

  const [KeyBenefitsData, AboutProjectData, CustomizeData, HeaderData, ConclusionData, SolutionCoverageData, transformData] =
    await Promise.all([getKeyBenefits(), getAboutProject(), getCustomize(), getHeader(), getConclusion(), getSolutionCoverage(), getTransformData()]);

  const numberOfProjects = AboutProjectData.length;
  if (productId >= numberOfProjects || productId < 1) notFound();

  const solutionCoverageForProduct = SolutionCoverageData.find(
    (item) => item.productId === productId
  );

  return (
    <>
      <Header headerData={HeaderData} Id={id} />
      <AboutProject aboutProjectData={AboutProjectData} Id={id} />
      <KeyBenefits keyBenefitsData={KeyBenefitsData} Id={id} />
      {solutionCoverageForProduct && (
       
          <SolutionCoverage coverage={solutionCoverageForProduct.coverage} Id={id} />
        
      )}
      <div className="lg:pt-[114px] pt-[48px]">
        <Section customizeData={CustomizeData} />
      </div>
      <div className="pt-0 md:pt-[80px]">
        <ReadyToTransform transformData={transformData} />
      </div>
    </>
  );
}
