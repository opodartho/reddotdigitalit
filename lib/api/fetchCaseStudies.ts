import {
  staticCaseStudiesData,
  CaseStudyItem,
} from "@/lib/data/caseStudiesData";

export async function getCaseStudies(): Promise<CaseStudyItem[]> {
  return Promise.resolve(staticCaseStudiesData);
}
