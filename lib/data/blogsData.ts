export type BlogItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const staticBlogData: BlogItem[] = [
  {
    id: 1,
    title: "Transform your digital business with us ",
    description:
      "we are committed to excellence in delivering software solutions. Our talented team brings years of experience.",
    imageUrl: "/images/workstation.png",
  },
  {
    id: 2,
    title: "Explore our Work process",
    description:
      "we are committed to excellence in delivering software solutions. Our talented team brings years of experience.",
    imageUrl: "/images/computers.png",
  },
];
