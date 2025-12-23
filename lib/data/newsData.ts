export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const staticNewsData: NewsItem[] = [
    {
        id:1,
         slug: "news_1",
        title:"RedDot welcomed a group of talented students from Kushtia Islamic University",
        description:"We were thrilled to welcome a group of talented students from Kushtia Islamic University for one day industrial attachment at RedDot Digital. As a leading IT company, we’re committed to nurturing the next generation of tech professionals by providing them with real-world experience in the industry.",
        imageUrl:'/images/nl1.png'
    },
    {
        id:2,
        slug: "news_2",
        title:"RedDot Digital Celebrates H1’24 Townhall",
        description:"RedDot Digital recently held its H1’2024 Townhall to recognize the exceptional performance of its team members and celebrate the company’s significant milestones.",
        imageUrl:'/images/nl2.png'
    },
    {
        id:3,
        slug: "news_3",
        title:"Announcing the launch of “Campaign Management Platform” by RedDot Digital Limited for ADA, designed to revolutionize both B2B and B2C mobile advertising",
        description:"RedDot Digital Limited is thrilled to announce its launch with ABG Technologies Limited, the visionary owner of Pocket, in launching the game-changing Pocket Co-branded Debit Card Solution.",
        imageUrl:'/images/nl3.png'
    },
    {
        id:4,
        slug: "news_4",
        title:"RedDot Digital Limited is proud to partner CIO KLUB Bangladesh",
        description:"RedDot Digital Limited along with other proud partners launched the 2nd International chapter of CIO Klub in Bangladesh on 24ᵗʰ February, 2024 at the Sheraton Dhaka.",
        imageUrl:'/images/nl4.png'
    },
];
