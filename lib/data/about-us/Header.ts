
export type HeaderItem={
    title: string,
    description: string,
    images: {imageUrl: string, link:string}[]
}

export const HeaderData: HeaderItem={
    title:'Crafting Digital Solutions with Purpose',
    description:"RedDot Digital is where ideas turn into impactful digital products — built with purpose, powered by collaboration.",
    images: [
        {imageUrl: '/images/board_of_directors.svg', link:'/board-of-directors'},
    {imageUrl: '/images/management_council.svg', link:'/management-council'},
    {imageUrl: '/images/life_of_reddot.svg', link:''},
    {imageUrl: '/images/our_policy.svg', link:'/privacy-policy'},
    {imageUrl: '/images/whistleblow.svg', link:'/speak-up'}
    ]
}