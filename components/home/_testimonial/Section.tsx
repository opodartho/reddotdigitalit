import { TestimonialCarousel } from "./Carousel";
import { Testimonial } from "@/lib/data/testimonialData";

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <div className="font-poppins bg-gradient-to-r from-pink-100 to-blue-50 pt-12 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;
