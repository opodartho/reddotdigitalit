import { TestimonialCarousel } from "./Carousel";
import { Testimonial } from "@/lib/data/testimonialData";

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

//ACCEPT PROPS
const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <div className="font-poppins bg-gradient-to-r from-pink-100 to-orange-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* PASS PROPS DOWN */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;
