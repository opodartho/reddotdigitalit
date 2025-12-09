import { TestimonialCarousel } from "./Carousel";
import { Testimonial } from "@/lib/data/testimonialData";


type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <div className="font-poppins bg-gradient-to-r from-[#ffecf0] to-[#faf9fe] pt-12 pb-10">
      <div className="mx-auto pl-[16px] sm:pl-[80px]">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;
