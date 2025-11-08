import { AchievementsItem } from "@/lib/data/about-us/Achievements"
import Achievement from "@/components/home/_who_we_are/Achievement";
import { achievementData } from "@/lib/data/whoWeAreData";

type AchievementsProps = {
    achievements: AchievementsItem
}
export default function Achievements({ achievements }: AchievementsProps) {


    return (
        <>
            <div className="lg:block lg:w-full pt-[109px] pb-[38px] flex flex-col justify-center text-center">
                <p className="font-semibold text-[32px]">{achievements.title}</p>
                <p className="text-[14px] line-clamp-2 pt-[17px] lg:w-[444px] w-[300px] mx-auto"> {/* Added mx-auto */}
                    {achievements.description}
                </p>
            </div>
            <div className="pb-[109px] lg:pl-[40px]">
                <Achievement data={achievementData} />
            </div>
        </>
    )
}