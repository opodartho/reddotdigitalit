import { TestimonialCarousel } from "./Carousel";
import { Testimonial } from "@/lib/data/testimonialData"; 

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

//ACCEPT PROPS
const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-orange-50 px-4 py-16 font-sans mt-30 mb-10">
      <div className="mx-auto max-w-7xl">
        {/* 4. PASS PROPS DOWN */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;