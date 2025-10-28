import AboutRedDot from "@/components/about-us/AboutRedDot";
import Empowerment from "@/components/about-us/Empowerment";
import Header from "@/components/about-us/Header";
import ManagementCouncil from "@/components/about-us/ManagementCouncil";


export default function AboutUs(){
    return(
        <>
            <div className="">
                <Header/>
            </div>
            <div>
                <AboutRedDot/>
            </div>
            <div>
                <ManagementCouncil/>
            </div>
            <div>
                <Empowerment/>
            </div>
        </>
    )
}