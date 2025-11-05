import PrivacyPolicyComponent from "@/components/privacy-policy/body";
import Header from "@/components/privacy-policy/head";
import { getPrivacy } from "@/lib/api/fetchPrivacy";
import { getPrivacyHead } from "@/lib/api/fetchPrivacyHead";


export default async function Privacy(){
    const [privacyData, headerData]= await Promise.all([getPrivacy(), getPrivacyHead()])
    return(
        <>
            <Header headerData={headerData}/>
            <PrivacyPolicyComponent privacyData={privacyData}/>
        </>
    )
}