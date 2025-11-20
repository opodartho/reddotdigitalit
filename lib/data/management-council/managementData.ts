
export type Management={
    title: string,
    subtitle: string,
    information:{
    id: number,
    imageUrl: string,
    name: string,
    role: string,
    description: string
    }[]
}

export const managementData: Management={
    title:'Management Council',
    subtitle:'From tech to strategy – meet the brilliant minds behind each department shaping the future of digital innovation.',
    information:[
{
    id: 1,
    imageUrl:'/images/director1.svg',
    name:'Hasib Mustabsir',
    role:'Chief Platform Officer',
    description:'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
},
{
    id: 2,
    imageUrl:'/images/director2.svg',
    name:'Syed Md. Ziaul Haider',
    role:'Chief Platform Officer',
    description:'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
},
{
    id: 3,
    imageUrl:'/images/director3.svg',
    name:'Mohammad Yeakub',
    role:'Head of Finance',
    description:'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
},
{
    id: 4,
    imageUrl:'/images/director4.svg',
    name:'Md. Shahidur Rahman',
    role:'Chief Platform Officer',
    description:'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
},
{
    id: 5,
    imageUrl:'/images/director5.svg',
    name:'Tasnuva Amreen Zaman',
    role:'Chief Platform Officer',
    description:'Hasib Mustabsir joined RedDot Digital Limited as Chief Executive Officer (CEO) in October 2021.'
}
]}

