export type TransformItem = {
  id: number;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
};

export const staticTransformData: TransformItem[] = [
  {
    id: 1,
    heading: "Ready to Transform Your Business?",
    description:
      "We are committed to excellence in delivering software solutions. Our talented team brings years of experience across various technology domains, ensuring we meet and exceed client expectations.",
    buttonText: "Get Started",
    buttonLink: "/get-started",
    imageUrl: "/images/phones.png",
  },
];
