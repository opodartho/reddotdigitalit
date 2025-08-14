import { staticFooterData, FooterData } from "@/lib/data/footerData";


export async function getFooterData(): Promise<FooterData> {
  return Promise.resolve(staticFooterData);
}