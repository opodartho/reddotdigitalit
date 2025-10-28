import AboutRedDot from "@/components/about-us/AboutRedDot";
import Empowerment from "@/components/about-us/Empowerment";
import Header from "@/components/about-us/Header";
import ManagementCouncil from "@/components/about-us/ManagementCouncil";
import Achievement from "@/components/home/_who_we_are/Achievement";
import { achievementData } from "@/lib/data/whoWeAreData";


export default function AboutUs() {
    return (
        <>
            <div className="">
                <Header />
            </div>
            <div>
                <AboutRedDot />
            </div>
            <div>
                <ManagementCouncil />
            </div>
            <div>
                <Empowerment />
            </div>
            <div>
                <div className="w-full pt-[109px] pb-[38px] flex flex-col justify-center text-center">
                    <p className="font-semibold text-[32px]">Achievement</p>
                    <p className="text-[14px] line-clamp-2 pt-[17px] w-[444px] mx-auto"> {/* Added mx-auto */}
                        Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.
                    </p>
                </div>
                <div className="pb-[109px]">
                    <Achievement data={achievementData} />
                </div>
            </div>
        </>
    )
}