export type NewsListItem = {
    id: number;
    slug: string; 
    date:string;
    title: string;
    description: string;
    imageUrl: string;
  };
  
export const newsListData: NewsListItem[] = [
  {
    id: 1,
    slug: "news_1",
    date: "7 Sep, 2024",
    title: "RedDot welcomed a group of talented students from Kushtia Islamic University",
    description:
      "We were thrilled to welcome a group of talented students from Kushtia Islamic University for one day industrial attachment at RedDot Digital.",
    imageUrl: "/images/nl1.png",
  },
  {
    id: 2,
    slug: "news_2",
    date: "7 Sep, 2024",
    title: "RedDot Digital Celebrates H1’24 Townhall",
    description:
      "RedDot Digital recently held its H1’2024 Townhall to recognize the exceptional performance of its team members.",
    imageUrl: "/images/nl2.png",
  },
  {
    id: 3,
    slug: "news_3",
    date: "7 Sep, 2024",
    title:
      "Announcing the launch of Campaign Management Platform for ADA",
    description:
      "RedDot Digital Limited is thrilled to announce the launch of a game-changing campaign platform.",
    imageUrl: "/images/nl3.png",
  },
  {
    id: 4,
    slug: "news_4",
    date: "7 Sep, 2024",
    title: "RedDot Digital Limited is proud to partner CIO KLUB Bangladesh",
    description:
      "RedDot Digital Limited along with other proud partners launched the 2nd International chapter of CIO Klub in Bangladesh.",
    imageUrl: "/images/nl4.png",
  },
  {
    id: 5,
    slug: "news_5",
    date: "7 Sep, 2024",
    title: "RedDot and Axentec Collaborate with IDCOL",
    description:
      "RedDot and Axentec have signed an agreement with IDCOL for an HR management solution.",
    imageUrl: "/images/nl5.png",
  },
  {
    id: 6,
    slug: "news_6",
    date: "7 Sep, 2024",
    title: "Robi ICT Subsidiaries Partner with EGCB",
    description:
      "Axentec and RedDot Digital partner with EGCB for AI-based fault detection in power plants.",
    imageUrl: "/images/nl6.png",
  },
  {
    id: 7,
    slug: "news_7",
    date: "7 Sep, 2024",
    title: "RedDot Digital Enables FSIB dCloud",
    description:
      "RedDot Digital is proud to be the digital enablers of FSIB dCloud.",
    imageUrl: "/images/nl7.png",
  },
];
