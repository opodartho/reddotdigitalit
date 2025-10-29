"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { getProductDemoSlides } from "@/lib/api/fetchproductDemoSlides";
import { productDemoSlide } from "@/lib/data/productDemo";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight } from "lucide-react";

export default function ProductDemo() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState<productDemoSlide[]>([]);

    // Autoplay plugin
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

    // Fetch slides once
    useEffect(() => {
        async function fetchSlides() {
            const heroSlides = await getProductDemoSlides();
            setSlides(heroSlides);
        }
        fetchSlides();
    }, []);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
            <div className="flex flex-col items-center">
                <p className="text-[30px] font-semibold  pl-[80px]">Product Demo</p>
                <p className="text-[14px]  pl-[80px]">See Our Solutions Unleash Their Full Potential</p>
                <div className="relative w-full pt-[64px]">
                    <Carousel
                        className="w-full"
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "start",
                            slidesToScroll: 1
                        }}
                        plugins={[autoplay.current]}
                    >
                        <CarouselContent className="">
                            {slides.map((slide, index) => (
                                <CarouselItem
                                    key={slide.id}
                                    className={`basis-1/3 ${index === 0 ? 'pl-0' : 'pl-6'} ${index === slides.length - 1 ? 'pr-0' : ''}`}
                                >
                                    <div className="w-full h-[533px] bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                        <img
                                            src={slide.imageUrl}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div className="pt-[63px] justify-center flex gap-2">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`w-5 h-1 rounded-[2px] transition-colors duration-200 ${index + 1 === current ? "bg-[#E52445]" : "bg-gray-300"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}