import Image from "next/image";

export default function TechnologyUsed() {
    const features = [
        { icon: '/images/java.svg', },
        { icon: '/images/springboot.svg', },
        { icon: '/images/oracle.svg', },
        { icon: '/images/redis.svg', },
        { icon: '/images/spring.svg', },
        { icon: '/images/bluestack.svg', },
        { icon: '/images/bluestack.svg', },
        { icon: '/images/jdbc.svg', },
        { icon: '/images/jdbc.svg', },

    ]
    return (
        <>
            <div className="flex flex-col  pl-[80px]">
                <div className="w-[1278px]">
                    <p className="text-[30px] font-semibold pb-[21px]">Technology Used</p>
                    <p className="text-[14px] pb-[41px]">RedDot Digital Limited is a 100% subsidiary of Robi Axiata Limited, the second-largest mobile network operator in Bangladesh, offering IT and digital solutions. Network operator in Bangladesh, offering IT and digital solutions.</p>
                </div>

                <div className="flex flex-wrap gap-[28px] w-full">
                    {
                        features.map((p, index) => (
                            <div key={index} className="rounded-xl w-[234px] h-[60px]">
                                <img src={p.icon} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}