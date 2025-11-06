export type HeaderItem = {
    id: number;
    title: string;
    description: string;
    imageUrl?:string;
    buttonText: string;
};

export const HeaderData: HeaderItem[]= 
   [    { id:0, title: '', description: '', imageUrl:'', buttonText:'' },  
    { id:1, title: 'RedDot MFS Solution', description: 'HRMS encompasses candidate application, selection process, recruiting and onboarding, employee life cycle management, payroll management', imageUrl:'/images/phones.svg', buttonText:'Schedule a call' },  
    { id:2, title: 'RedDot Digital Financial Service (DFS) Solution', description: 'RedDot Digital Financial Service (DFS) Solution Empowering individuals and businesses with accessible, innovative financial tools.', imageUrl:'/images/products2.svg', buttonText:'Schedule a call' },
    { id:3, title: 'Human Resource Management Solution', description: 'HRMS encompasses candidate application, selection process, recruiting and onboarding, employee life cycle management, payroll management', imageUrl:'/images/phones.svg', buttonText:'Schedule a call' },
    { id:4, title: 'ERP & eCommerce', description: 'An online video streaming OTT platform that offers Live TV and VOD. Platform is designed with distributed architecture on combination of open source and industry best technology framework. It has mobile app for Android and iOS as well as Large Screen app for TV. The solution comes with built in CRM and analytics, recommendation engine. It has flexible billing capability.', imageUrl:'/images/products4.svg', buttonText:'Schedule a call' },
    { id:5, title: 'IoT Backend Platform with Payment Ecosystem', description: 'It’s a device that detects the presence of gases in an area, often as part of a safety system. A gas detector can sound an alarm to operators in the area where the leak is occurring, giving them the opportunity to leave.', imageUrl:'/images/products3.svg', buttonText:'Schedule a call' },
   { id:6, title: 'Integrated Streaming Platform & App', description: 'An online video streaming OTT platform that offers Live TV and VOD. Platform is designed with distributed architecture on combination of open source and industry best technology framework.', imageUrl:'/images/products5.svg', buttonText:'Schedule a call' },
   { id:7, title: 'Customer Experience Solution', description: 'A Customer Experience (CX) Solution encompasses a strategic blend of technology, processes, and people designed to optimize every interaction a customer has with a brand. From initial contact to post-purchase support,', imageUrl:'/images/products6.svg', buttonText:'Schedule a call' }
   ,{ id:8, title: 'Sales & Distribution', description: 'A Customer Experience (CX) Solution encompasses a strategic blend of technology, processes, and people designed to optimize every interaction a customer has with a brand. From initial contact to post-purchase support,', imageUrl:'/images/products7.svg', buttonText:'Schedule a call' }

]