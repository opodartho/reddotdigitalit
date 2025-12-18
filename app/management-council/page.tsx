


import Grids from "@/components/management-council/grids";
import Header from "@/components/management-council/header";
import { getManagement } from "@/lib/api/management-council/fetchManagement";


export default async function ManagementCouncil() {
    const [managementData] = await Promise.all([getManagement()])
    return (
        <>

            <div className="px-[16px] sm:px-[80px] max-w-[1440px] mx-auto">
                <Header managementData={managementData} />
                <Grids managementData={managementData} />
            </div>
        </>
    )
}


