import PrivacyPolicyComponent from "@/components/privacy-policy/body";
import Header from "@/components/privacy-policy/head";
import { getPrivacy } from "@/lib/api/privacy-policy/fetchPrivacy";
import { getPrivacyHead } from "@/lib/api/privacy-policy/fetchPrivacyHead";


export default async function Privacy() {
    const [privacyData, headerData] = await Promise.all([getPrivacy(), getPrivacyHead()])
    return (
        <>
            <p className="text-[14px] text-[#959191] absolute lg:top-40 top-30 z-1 lg:left-21 left-4 whitespace-break-spaces">{`About Us      >>       Privacy Policy`} </p>

            <Header headerData={headerData} />
            <PrivacyPolicyComponent privacyData={privacyData} />
        </>
    )
}