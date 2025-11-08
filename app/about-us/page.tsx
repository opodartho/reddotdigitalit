import AboutRedDot from "@/components/about-us/AboutRedDot";
import Achievements from "@/components/about-us/Achievements";
import Empowerment from "@/components/about-us/Empowerment";
import Header from "@/components/about-us/Header";
import OurJourney from "@/components/about-us/OurJourney";
import OurRoots from "@/components/about-us/OurRoots";
import { getAboutUs } from "@/lib/api/about-us/fetchAboutUs";
import { getAchievements } from "@/lib/api/about-us/fetchAchievements";
import { getEmpowerment } from "@/lib/api/about-us/fetchEmpowerment";
import { getHeader } from "@/lib/api/about-us/fetchHeader";
import { getManagement } from "@/lib/api/about-us/fetchManagementCouncil";
import { getJourney } from "@/lib/api/about-us/fetchOurJourney";
import { getRoots } from "@/lib/api/about-us/fetchRoots";



export default async function AboutUs() {
    const [AboutData, AchievementsData, ManageData, HeaderData, JourneyData, RootsData, EmpowermentData]= await Promise.all([getAboutUs(), getAchievements(), getManagement(), getHeader(),getJourney(), getRoots(), getEmpowerment()])
    return (
        <>
            <div className="overflow-hidden">
                <div className="lg:pr-80px">
                    <Header headerData={HeaderData}/>
                </div>
                <div className="lg:pr-80px">
                    <AboutRedDot aboutUs={AboutData}/>
                </div>
                <div className="lg:pr-80px">
                    <OurRoots rootsData={RootsData}/>
                </div>
                <div className="lg:pr-80px">
                    <OurJourney journeyData={JourneyData}/>
                </div>
                <div className="lg:pr-80px">
                    <Empowerment empowermentData={EmpowermentData}/>
                </div>
                <div>
                    <Achievements achievements={AchievementsData}/>
                </div>
            </div>
        </>
    )
}