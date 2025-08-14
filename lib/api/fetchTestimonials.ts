import { staticTestimonialsData, Testimonial } from "@/lib/data/testimonialData";

export async function getTestimonials(): Promise<Testimonial[]> {
  return Promise.resolve(staticTestimonialsData);
}