import OurLeaders from "@/components/our-leaders";
import { getLeaders } from "@/lib/api/our-leaders/fetchLeaders";


export default async function Leaders(){
    const [LeadersData] = await Promise.all([getLeaders()])
    return(
        <OurLeaders LeadersData={LeadersData}/>
    )
}