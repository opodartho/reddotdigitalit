import PrivacyPolicyComponent from "@/components/privacy-policy/body";
import Header from "@/components/privacy-policy/head";
import { getPrivacy } from "@/lib/api/privacy-policy/fetchPrivacy";
import { getPrivacyHead } from "@/lib/api/privacy-policy/fetchPrivacyHead";


export default async function Privacy() {
    const [privacyData, headerData] = await Promise.all([getPrivacy(), getPrivacyHead()])
    return (
        <div className="">

            <Header headerData={headerData} />
            <PrivacyPolicyComponent privacyData={privacyData} />
        </div>
    )
}