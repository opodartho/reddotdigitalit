import Image from "next/image"


export default function CoreFeatures() {

    const features = [
        { icon: '/images/1.svg', title: 'Distributor Management', description: 'Onboard, manage, and track performance of all your distribution' },
        { icon: '/images/2.svg', title: 'Multi-warehouse operations', description: 'Get a real-time, consolidated view of all your inventory.' },
        { icon: '/images/3.svg', title: 'Mobile sales teams', description: 'Empower your field agents with our powerful mobile app.' },
        { icon: '/images/4.svg', title: 'Route optimization', description: 'Generate efficient daily routes to save time and fuel.' },
        { icon: '/images/5.svg', title: 'Integrated payment systems', description: 'Accept digital payments and sync data with accounting software.' },
        { icon: '/images/6.svg', title: 'Offline capabilities', description: 'Keep sales running smoothly, even with no internet connection.' }
    ]
    return (
        <>
            <div className="pl-[80px]">
                <p className="text-[30px] font-semibold">Core Features</p>
                <p className="text-[14px] text-[#1A162FA6]">Streamline your workflow, boost efficiency, and unlock maximum value.</p>

                <div className="grid grid-cols-3 gap-[38px]  pt-[44px]">
                    {
                        features.map((p, index) => (
                            <div key={index} className="border-2 rounded-xl  h-[265px] w-full">
                                <Image src={p.icon} alt="" height={48} width={48} className="mt-[40px] ml-[44px]"/>
                                <p className="mt-[54px] ml-[44px]">{p.title}</p>
                                <p className="mt-[12px] ml-[44px] w-[264px]">{p.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}