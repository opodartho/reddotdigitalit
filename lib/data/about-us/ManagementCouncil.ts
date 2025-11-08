export type ManagementCouncilItem={
    title: string,
    description:string,
    images: {
        image: string,
        name: string,
        role: string
    }[]
}

export const ManagementCouncilData: ManagementCouncilItem={
    title:'Management Council',
    description:'Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.',
    images: [
        {image:'/images/ceo.svg', name:'Hasib Mustabsir', role:'Chief Executive Officer & Managing Director'},
        {image:'/images/cpo.svg', name:'Syed Md. Ziaul Haider', role:'Chief Platform Officer'},
        {image:'/images/hof.svg', name:'Mohammad Yeakub', role:'Head of Finance'},
        {image:'/images/cs.svg', name:'Md. Shahidur Rahman', role:'Company Secretary'},
        {image:'/images/hhr.svg', name:'Tasnuva Amreen Zaman', role:'Head of Human Resources'}
    ]
}
