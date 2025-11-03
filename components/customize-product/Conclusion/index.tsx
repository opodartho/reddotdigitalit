import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Conclusion() {
    return (
        <>
            <div className="flex justify-center">

                <div className="">
                    <div className=" h-[430px] lg:w-[1279px] w-[358px] relative flex justify-center" style={{ backgroundImage: "url('/images/rect.svg')" }}>
                        <img src='images/phone2.svg' className="absolute lg:bottom-1 -top-[69.35px] lg:left-[49px] w-[219px] h-[257px] lg:h-[469px] lg:w-[401px] justify-center" />
                        
                        <p className="absolute text-white  lg:right-[308px] left-[16px] lg:top-[113px] lg:left-[624px] top-[210.65px] w-[289px] h-[30px] text-[20px] font-semibold">Ready to see the difference?</p>
                        
                        <p className='absolute lg:w-[626px] w-[326px] text-white  text-[12px] lg:-right-3 left-[16px] lg:top-[157px] lg:left-[624px] top-[252.65px] h-[84px] lg:h-[56px]'>Stop letting inefficiency dictate your success. Take control of your sales and distribution network, empower your team, and unlock new levels of growth.</p>
                        
                        <Button variant={"default"} className='absolute lg:left-[624px] left-[16px] lg:top-[261px] top-[356.65px] bg-white text-red-500 h-[56px] w-[229px]'>Schedule a free call <ArrowRight/></Button>
                    </div>
                </div>
            </div>
        </>
    )
}