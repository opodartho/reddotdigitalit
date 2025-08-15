import * as React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyItem } from "@/lib/data/caseStudiesData";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CaseStudiesSectionProps = {
  caseStudiesData: CaseStudyItem[];
};

const CaseStudies = ({ caseStudiesData }: CaseStudiesSectionProps) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Our cutting-edge Modular Data Center solutions enable to protect
            mission-critical data.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <Button variant="outline" size="lg">
            View All
          </Button>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {caseStudiesData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <CaseStudyCard
                      title={item.title}
                      description={item.description}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
