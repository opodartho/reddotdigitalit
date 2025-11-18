

export default function AbacPolicy() {
    return (
        <div>
                                        <p className="text-[14px] text-[#959191] absolute lg:top-30 top-30 z-100 lg:left-20 left-4 whitespace-break-spaces">{`About Us      >>       Abac Policy`} </p>

            <div className="lg:pl-[80px] lg:pr-[80px] lg:pt-[50px] lg:w-full">
                <p className="text-[24px] font-bold pb-[20px]">ABAC Policy</p>
                <div className="lg:flex lg:flex-row lg:gap-[370px] flex flex-col gap-[100px] lg:w-full lg:max-w-full">
                    <div>
                        <p className="text-[18px] font-bold pb-[10px]">English Version</p>
                        <iframe
                            src="/images/abac-english.pdf"
                            className="lg:w-[200%] lg:h-[500px] w-[100%] h-[500px]"
                            title="PDF Viewer"
                        />

                    </div>
                    <div>
                    <p className="text-[18px] font-bold pb-[10px]">Bangla Version</p>
                        <iframe
                            src="/images/abac-bangla.pdf"
                            className="lg:w-[200%] lg:h-[500px] w-[100%] h-[500px]"
                            title="PDF Viewer"
                        />

                    </div>

                    
                </div>
            </div>
        </div>
    )
}