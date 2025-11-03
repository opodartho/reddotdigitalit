import AboutRedDot from "@/components/about-us/AboutRedDot";
import Empowerment from "@/components/about-us/Empowerment";
import Header from "@/components/about-us/Header";
import ManagementCouncil from "@/components/about-us/ManagementCouncil";
import OurJourney from "@/components/about-us/OurJourney";
import OurRoots from "@/components/about-us/OurRoots";
import Achievement from "@/components/home/_who_we_are/Achievement";
import { achievementData } from "@/lib/data/whoWeAreData";


export default function AboutUs() {
    return (
        <>
            <div className="overflow-hidden">
                <div className="">
                    <Header />
                </div>
                <div>
                    <AboutRedDot />
                </div>
                <div >
                    <OurRoots />
                </div>
                <div >
                    <OurJourney />
                </div>
                <div>
                    <Empowerment />
                </div>
                <div>
                    <div className="lg:block lg:w-full pt-[109px] pb-[38px] flex flex-col justify-center text-center">
                        <p className="font-semibold text-[32px]">Achievement</p>
                        <p className="text-[14px] line-clamp-2 pt-[17px] lg:w-[444px] w-[300px] mx-auto"> {/* Added mx-auto */}
                            Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.
                        </p>
                    </div>
                    <div className="pb-[109px] lg:pl-[40px]">
                        <Achievement data={achievementData} />
                    </div>
                </div>
            </div>
        </>
    )
}