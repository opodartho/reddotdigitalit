import Grids from "@/components/management-council/grids";
import Header from "@/components/management-council/header";


export default function ManagementCouncil(){
    return(
        <>
            <div className="lg:pl-[80px] pl-[16px] lg:pr-[80px] pr-[16px] ">
                <Header/>
                <Grids/>
            </div>
        </>
    )
}