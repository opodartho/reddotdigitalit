import PrivacyPolicyComponent from "@/components/privacy-policy/body";
import Header from "@/components/privacy-policy/head";
import { getPrivacy } from "@/lib/api/privacy-policy/fetchPrivacy";
import { getPrivacyHead } from "@/lib/api/privacy-policy/fetchPrivacyHead";


export default async function Privacy() {
    const [privacyData, headerData] = await Promise.all([getPrivacy(), getPrivacyHead()])
    return (
        <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[80px]">

            <Header headerData={headerData} />
            <PrivacyPolicyComponent privacyData={privacyData} />
        </div>
    )
}