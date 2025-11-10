


import Grids from "@/components/management-council/grids";
import Header from "@/components/management-council/header";
import { getManagement } from "@/lib/api/management-council/fetchManagement";


export default async function ManagementCouncil(){
    const [managementData] = await Promise.all([getManagement()])
    return(
        <>
            <div className="lg:pl-[240px] pl-[16px] lg:pr-[240px] pr-[16px] ">
                <Header managementData={managementData}/>
                <Grids managementData={managementData}/>
            </div>
        </>
    )
}


