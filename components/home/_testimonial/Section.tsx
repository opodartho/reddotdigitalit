import { TestimonialCarousel } from "./Carousel";
import { Testimonial } from "@/lib/data/testimonialData";

type TestimonialSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <div className="font-poppins  pt-12 pb-10 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/news-bg.png')" }}>
      <div className="mx-auto pl-[16px] sm:pl-[80px]">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSection;
