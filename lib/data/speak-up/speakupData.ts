
export type SpeakupItem={
    id: number,
    title: string,
    subtitle: string,
    imageUrl: string,
    name: string,
    points: string[],
    description: string
}

export const SpeakupData: SpeakupItem={
    id: 1,
    title:'RedDigital Speak Up (Whistleblowing Channel)',
    subtitle:'From tech to strategy – meet the brilliant minds behind each department shaping the future of digital innovation.',
    imageUrl:'/images/speak.svg',
    name:'RedDigital Speak Up',
    points:['Bold & Impactful', 'Trust & Control', 'Benefit-Driven', ' Enterprise-Grade Security', 'Tech-Savvy', 'Seamless Integration'],
    description:`Upholding our core value of “Uncompromising Integrity”, we have provided a channel for our employees, shareholders, suppliers and customers to voice their concerns in an effective, responsible and secure manner. Share your valuable concerns with us.`
}