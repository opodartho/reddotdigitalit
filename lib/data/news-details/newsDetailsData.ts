export type NewsDetailsItem = {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrls: string[];
  authors: string[];
  tags: string[];
  share: string[];
  keyPoints: string[];
  keyPointsHeading: string;
  subtitle0: string;
  subtitle1: string;
  subText1: string;
  subtitle2?: string;
  subText2?: string;
};

export const newsDetailsData: NewsDetailsItem =
{
  id: 1,
  date: '10 Jul, 2024',
  title: "RedDot welcomed a group of talented students from",
  subtitle0:"Need a Title Here",
  description: `We were thrilled to welcome a group of talented students from Kushtia Islamic University for one day industrial attachment at RedDot Digital. As a leading IT company, we’re committed to nurturing the next generation of tech professionals by providing them with real-world experience in the industry.`,
  imageUrls: ['/images/new1.svg', '/images/new2.svg', '/images/new3.svg'],
  authors: ['Team RedDot'],
  tags: ['News', 'Reddot Digital', 'Universities collaboration'],
  share: ['/images/fb.svg', '/images/x.svg', '/images/insta.svg'],
  keyPoints: ['Explore our cutting-edge IT infrastructure', 'Collaborate with experienced IT professionals', 'Witness firsthand how technology is driving innovation'],
  keyPointsHeading: 'During their stay, our young interns had the opportunity to:',
  subtitle1: 'Diverse Backgrounds, Unified Vision',
  subText1: 'By providing these students with hands-on learning opportunities, we aim to equip them with the skills they need to succeed in the dynamic world of IT. Join us on this exciting journey and be part of something groundbreaking!',
}
