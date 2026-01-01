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
    const [AboutData, AchievementsData, ManageData, HeaderData, JourneyData, RootsData, EmpowermentData] = await Promise.all([getAboutUs(), getAchievements(), getManagement(), getHeader(), getJourney(), getRoots(), getEmpowerment()])
    return (
        <>

            <div className="overflow-x-hidden px-[16px] sm:px-[80px]  max-w-[1440px] mx-auto">
                <div >
                    <Header headerData={HeaderData} />
                </div>
                <div >
                    <AboutRedDot aboutUs={AboutData} />
                </div>
                <div >
                    <OurRoots rootsData={RootsData} />
                </div>
                <div >
                    <OurJourney journeyData={JourneyData} />
                </div>
                <div >
                    <Empowerment empowermentData={EmpowermentData} />
                </div>

            </div>
            <div>
                <Achievements achievements={AchievementsData} />
            </div>
        </>
    )
}