export type EmpowermentItem={
    title: string,
    backgroundImage: string,
    image1: string,
    image2: string,
    image3: string,
    missions: {
        title: string,
        description: string
    }[]
}

export const EmpowermentData: EmpowermentItem={
    title:'Empowering businesses with smart, scalable digital solutions. Empowering businesses with smart, scalable digital solutions.',
    backgroundImage:'',
    image1:'',
    image2:'',
    image3:'',
    missions: [
        { title: 'Our Mission', description: 'We are dedicated to establish dynamic changes with quality products and services. Our efforts involve establishing a high level of customer benefits with unquestionable methods and ethical approaches.' },
        { title: 'Our Vision', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.' },
        { title: 'Our Strength', description: 'To empower businesses with innovative software solutions that drive growth, efficiency, and success in a digital world.' }
    ]
}
