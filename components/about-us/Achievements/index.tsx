import { AchievementsItem } from "@/lib/data/about-us/Achievements"
import Achievement from "@/components/home/_who_we_are/Achievement";
import { achievementData } from "@/lib/data/whoWeAreData";

type AchievementsProps = {
    achievements: AchievementsItem
}
export default function Achievements({ achievements }: AchievementsProps) {


    return (
        <>
            <div className="lg:block lg:w-full pt-[24px]  flex flex-col text-center">
                <p className="font-semibold text-[32px] text-title">{achievements.title}</p>

            </div>
            <div className="pb-[109px]">
                <Achievement data={achievementData} />
            </div>
        </>
    )
}