import { NewsDetailsItem } from "./types";

export const newsDetailsData: NewsDetailsItem[] = [
  {
    id: 1,
    slug: "news_1",
    title: "RedDot welcomed a group of talented students from Kushtia Islamic University",
    heroImage: "/images/new1.svg",
    meta: {
      date: "10 Jul, 2024",
      authors: ["Team RedDot"],
      tags: ["News", "RedDot Digital", "University Collaboration"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "Thrilled to welcome",
        description:
          "We were thrilled to welcome a group of talented students from Kushtia Islamic University for one day industrial attachment at RedDot Digital. As a leading IT company, we’re committed to nurturing the next generation of tech professionals by providing them with real-world experience in the industry.",
      },
      {
        id: "keypoints",
        type: "keyPoints",
        title: "During their stay, our young interns had the opportunity to:",
        points: [
          "Explore our cutting-edge IT infrastructure",
          "Collaborate with experienced IT professionals",
          "Witness firsthand how technology is driving innovation",
        ],
      },
      {
        id: "vision-section",
        type: "textImage",
        title: "Diverse Backgrounds, Unified Vision",
        description:
          "By providing these students with hands-on learning opportunities, we aim to equip them with the skills they need to succeed in the dynamic world of IT. Join us on this exciting journey and be part of something groundbreaking!",
        imageUrl: "/images/new2.svg",
      },

      {
        id: "mision-section",
        type: "gallery",
        title: "Event Highlights at a Glance",
        images: ["/images/new3.svg"],
      },
    ],
  },

  {
    id: 2,
    slug: "news_2",
    title: "RedDot Digital Celebrates HI’24 Townhall",
    heroImage: "/images/Townhall_hero.png",
    meta: {
      date: "10 Jul, 2024",
      authors: ["Team RedDot"],
      tags: ["News", "RedDot Digital", "Townhall"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro",
        type: "text",
        title: "Giving Recognition at TownHall",
        description:
          "RedDot Digital recently held its H1’2024 Townhall to recognize the exceptional performance of its team members and celebrate the company’s significant milestones. The event brought together the entire RedDot team to acknowledge the outstanding contributions. Robi CIO & Director of RedDot Board- Mr. Varinder Paul Singla attended the session as special guest in presence of RedDot Management Council.",
      },

      {
        id: "speech-1",
        type: "image",
        imageUrl: "/images/th_1.png",
        description:
          "At the Townhall, the organization honoured its top performers. RedDot CEO, Hasib Mustabsir provided a comprehensive update on company’s progress, discussed key business developments against its strategy, guided for rest of the year and actively engaged with employees by addressing their feedback and concerns.\n\n During H1’24 RedDot has successfully delivered its first global project – Enterprise CRM (phase-1) in Cambodia. It has also delivered some major local projects like Campaign Messaging Platform to ADA, Sales Force Automation solution to Robi. At the same time RedDot has revamped “My Robi” and “My Airtel” super-app to a completely new look and experience for their millions of customers. 1H’24 also marked the introduction of RedDot’s new Fintech product – “Bangla QR”.",
      },
      {
        id: "speech-2",
        type: "image",
        imageUrl: "/images/th_2.png",
        description:
          "Robi CIO and Director of RedDot Board, Mr. Varinder appreciated the timely delivery of projects and praised the operational team to ensure “Zero incidence” in last 6 months IT operations which has helped Robi to continue its growth momentum. He cherished the collaboration between RedDot and Robi teams in achieving the results.\n\n RedDot Digital extends its sincere gratitude to its talented and dedicated team for their invaluable contributions to the company’s success and appreciate the continued confidence and support of our stakeholders. As we move forward, RedDot Digital remains steadfast in its pursuit of innovation and excellence.",
      },
      {
        id: "gallery",
        type: "gallery",
        title: "Event Highlights at a Glance",
        images: [
          "/images/thg_1.png",
          "/images/thg_2.png",
          "/images/thg_3.png",
          "/images/thg_4.png",
          "/images/thg_5.png",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "news_3",
    title:
      "Announcing the launch of “Campaign Management Platform” by RedDot Digital Limited for ADA, designed to revolutionize both B2B and B2C mobile advertising",
    heroImage: "/images/nd_3.jpeg",
    meta: {
      date: "27 Jun, 2024",
      authors: ["Asif Noman"],
      tags: ["News", "Product Launch", "ADA", "Campaign Management"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "Celebrating a Landmark Partnership",
        description:
          "This state-of-the-art platform empowers businesses to execute seamless campaigns across SMS, USSD, EBCM, WhatsApp, and Viber channels, alongside robust social media integration. Featuring a user-friendly interface and direct Internet Payment Gateway support. Campaign management has never been more efficient. Leverage enhanced audience engagement, real-time analytics, and cost-effective solutions within a comprehensive omnichannel framework.\n\nTransform your mobile advertising through ADA-Reach, RedDot Digital Limited’s innovative platform and drive your business to new heights.",
      },

    ]
  },
  {
    id: 4,
    slug: "news_4",
    title: "RedDot Digital Limited is proud to partner CIO Klub Bangladesh",
    heroImage: "/images/nd_4.jpg",
    meta: {
      date: "24 Feb, 2024",
      authors: ["Team RedDot"],
      tags: ["News", "Partnership", "CIO Klub", "Bangladesh"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "Launching the 2nd International Chapter of CIO Klub",
        description:
          "RedDot Digital Limited along with other proud partners launched the 2nd International chapter of CIO Klub in Bangladesh on 24th February, 2024 at the Sheraton Dhaka.",
      },

      {
        id: "main-image",
        type: "text",

        description:
          "The event brought together industry leaders, CIOs, and technology professionals to celebrate the expansion of CIO Klub into Bangladesh, marking a significant milestone for the country’s growing IT ecosystem.CIO Association (CIO Klub), an initiative of the CIO Association, is the largest non-profit organization of Chief Information Officers in India. With 11 working chapters in India’s most technologically up-and-coming cities, and one international chapter in Dubai, CIO Klub is steadily expanding towards East Asia with a vision to go global.\n The entire RedDot Digital Limited team, along with Chief Executive Officer & Managing Director Hasib Mustabsir, had the opportunity to meet a diverse group of IT professionals at the event. CEO Hasib Mustabsir also delivered a speech discussing Bangladesh’s future frontiers in the IT industry. The arrival of CIO Klub in Bangladesh further solidifies the nation’s innovation potential and the limitless possibilities of its technology landscape.",
      },
    ],
  },
  {
    id: 5,
    slug: "news_5",
    title: "RedDot and Axentec Collaborate with IDCOL for HR Management Solution",
    heroImage: "/images/nd_5.jpeg",
    meta: {
      date: "24 Jan, 2024",
      authors: ["Team RedDot"],
      tags: ["News", "Axentec", "IDCOL"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "RedDot and Axentec Partner with IDCOL for HRMS",
        description:
          "RedDot and axentec have signed an agreement with Infrastructure Development Company Limited (IDCOL) to implement a Human Resources Management Solution for IDCOL’s office staff.",
      },
    ],
  },

  {
    id: 6,
    slug: "news_6",
    title: "Robis ICT Subsidiaries Partner with EGCB for AI-Based Fault Detection in Power Plants",
    heroImage: "/images/nd_7.png",
    meta: {
      date: "11 Jan, 2024",
      authors: ["Team RedDot"],
      tags: ["News", "Artificial Intelligence", "Fault Detection"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "A Groundbreaking Collaboration in the Energy Sector",
        description:
          "In a groundbreaking collaboration, Robi’s ICT-focused subsidiary companies, Axentec and RedDot Digital, have recently signed an agreement with Electricity Generation Company of Bangladesh (EGCB) to implement an AI-based early fault detection system for EGCB’s power plants.",
      },

      {
        id: "signing-details",
        type: "text",
        description:
          "The agreement was signed by EGCB’s Executive Director, Planning and Design, Md. Nazmul Alam; Axentec’s Managing Director and CEO, Adil Hossain Noble; and RedDot Digital’s Managing Director and CEO, Hasib Mustabsir, on behalf of their respective organizations.",
      },

      {
        id: "event-location",
        type: "text",
        description:
          "The signing ceremony was held at EGCB’s Head Office in Dhaka, marking an important milestone in leveraging artificial intelligence to enhance reliability and operational efficiency in the power generation sector.",
      },

      {
        id: "tags",
        type: "keyPoints",
        title: "Key Focus Areas",
        points: [
          "AI-based early fault detection",
          "Power plant management and reliability",
          "Collaboration in the energy sector",
        ],
      },
    ]

  },
  {
    id: 7,
    slug: "news_7",
    title: "RedDot Digital Enables FSIB dCloud: Advancing Cashless Society",
    heroImage: "/images/nd_6.jpeg",
    meta: {
      date: "24 Dec, 2024",
      authors: ["Team RedDot"],
      tags: ["News"],
      share: ["/images/fb.svg", "/images/x.svg", "/images/insta.svg"],
    },
    blocks: [
      {
        id: "intro-text",
        type: "text",
        title: "Enabling Digital Transformation for FSIB",
        description:
          "RedDot Digital is proud to be the digital enablers of the ‘FSIB dCloud’ project by First Security Islami Bank. This initiative marks a bold step towards building a cashless society by leveraging secure, scalable, and innovative digital infrastructure.",
      },

      {
        id: "key-focus",
        type: "keyPoints",
        title: "Key Highlights",
        points: [
          "FSIB dCloud digital enablement",
          "Advancing cashless banking services",
          "Secure and scalable financial technology",
        ],
      },
    ]

  },


];
