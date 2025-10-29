import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Conclusion() {
    return (
        <>
            <div className="flex justify-center">

                <div className="">
                    <div className=" h-[430px] w-[1279px] relative flex" style={{ backgroundImage: "url('/images/rect.svg')" }}>
                        <img src='images/phone.svg' className="absolute bottom-1 -left-8" />
                        <p className="absolute text-white text-center right-[308px] top-[113px] text-[24px] font-semibold">Ready to see the difference?</p>
                        <p className='absolute w-[626px] text-white  text-[14px] -right-3 top-[157px] h-[56px]'>Stop letting inefficiency dictate your success. Take control of your sales and distribution network, empower your team, and unlock new levels of growth.</p>
                        <Button variant={"default"} className='absolute right-[386px] bottom-[113px] bg-white text-red-500 h-[56px] w-[229px]'>Schedule a free call <ArrowRight/></Button>
                    </div>
                </div>
            </div>
        </>
    )
}