export type Directors = {
    title: string,
    subtitle: string,
    information: {
        id: number,
        imageUrl: string,
        name: string,
        role: string,
        description: string
    }[]
}

export const directorsData: Directors = {
    title: 'Board of Directors',
    subtitle: 'From tech to strategy – meet the brilliant minds behind each department shaping the future of digital innovation.',
    information:
        [{
            id: 1,
            imageUrl: '/images/manage1.svg',
            name: 'Ziad Shatara',
            role: 'Chairman',
            description: 'Ziad Shatara is a seasoned telecom leader with over 30 years of experience driving business growth and digital transformation across diverse markets including Jordan,...'
        },
        {
            id: 2,
            imageUrl: '/images/manage2.svg',
            name: 'M Riyaaz Rasheed',
            role: 'Director',
            description: 'Riyaaz Rasheed is a Fellow Member of the Chartered Institute Management Accountants of UK (FCMA UK, GCMA), and a Fellow Member of the Institute of Chartered Management...'
        },
        {
            id: 3,
            imageUrl: '/images/manage3.svg',
            name: 'Nasreen Sattar',
            role: 'Independent Director',
            description: 'Ms. Nasreen Sattar Independent Director Ms. Nasreen Sattar brings more than 35 years of experience in the financial sector, with a career rooted in banking both in Bangladesh...'
        },
        {
            id: 4,
            imageUrl: '/images/manage4.svg',
            name: 'Ruhul Amin',
            role: 'Director',
            description: 'Ruhul Amin serves as a Director, bringing extensive hands-on experience in business leadership to the role'
        },
        {
            id: 5,
            imageUrl: '/images/manage5.svg',
            name: 'Mohammed Shahedul Alam',
            role: 'Director',
            description: 'Shahed Alam has been serving as the Chief Corporate and Regulatory Officer at Robi Axiata Limited since June 2019'
        },
        {
            id: 6,
            imageUrl: '/images/manage6.svg',
            name: 'Md. Adil Hossain Noble',
            role: 'Director',
            description: 'Md. Adil Hossain Noble was appointed as the Chief Enterprise Business Officer in June 2019'
        },
        {
            id: 7,
            imageUrl: '/images/manage7.svg',
            name: 'Hasib Mustabsir',
            role: 'Chief Executive Officer & Managing Director',
            description: 'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
        }]
}