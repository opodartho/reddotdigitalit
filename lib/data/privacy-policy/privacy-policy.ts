

export type PrivacyPolicy = {
    heading: string,
    description?: string,
    subheading?: string[],
    subdescription?: string,
    subpoints?: string[][]
}


export const PrivacyData: PrivacyPolicy[] = [
    {
        heading: 'Privacy Policy',
        description: `Red.Digital Limited (hereinafter referred to as “Red Dot”, “us” or “we” or “our”) are committed to protecting personal data of our customers, business partners, visitors, employment candidates and/or employees and personal data of individuals who work for, or act on behalf of, our customers and/or business partners (collectively, “data subject”) that has been provided to us. In Red Dot, we take privacy seriously and all our activities are underpinned by our T.R.U.S.T principles of being Transparent, respecting your Rights, in our Use of your personal data, through robust cyber Security practices and we take due care when Transfer of data is required.

        This privacy notice (“Privacy Notice”) explains what and how personal data is collected and further  processed by us, for what purposes it is collected and further processed by us, sources (if any) of personal data, to whom personal data is disclosed and how to access and update your personal data and where to go for further information in respect of the personal data.
        
        If you provide us with personal data of other individuals, you hereby represent that you have obtained consent from that individual prior to providing their personal data to us. References to ‘your personal data’ in this Privacy Notice would include such individual’s personal data that you provide to us.
        
        We may from time to time amend, modify, vary or update this Privacy Notice and such updated version shall be available at https://www.reddotdigitalit.com/privacy-notice and you are bound by such modifications, variations or updates.
        `,
    },

    {
        heading: 'Information about Children',
        description: `If you are under the age of [18], you are required to obtain the consent of your parent, guardian or person who has parental responsibility over you before sending us your personal data (for example, your name, address and email address). In such cases, we may require sufficient proof of such consent at any time.`
    },
    {
        heading: 'What personal data do we collect?',
        subheading: ['For Customers', 'For Business Partners and Suppliers', 'For Visitors (to any of our premises)'],
        subdescription: 'The types of personal data we collect or obtain may vary according to our relationship with a data subject and may include the following:',
        subpoints: [
            // For Customers
            [
                "contact information (such as name, address, email address and telephone number)",
                "identification information (such as national identification number, passport identification number, national insurance number, tax registration number, social security number, driver’s license, date of birth, etc.)",
                "demographic information (such as age range, marital status, gender etc.)",
                "photographs, such as those that you may submit for contests or prize-winning competitions",
                "product specific information (such as preference, closed user groups (CUGs), friends and family who you chose to include in your service plan, credit limit etc.)",
                "banking information (such as direct debit and related bill payment banking transactions)",
                "service account information (such as call usage, account balances, transaction history, credit information, billing and loyalty points).",
                "any footage captured or recorded by our surveillance camera (CCTV) system",
            ],

            // For Business Partners and Suppliers
            [
                "contact information (such as name, address, email address and telephone number)",
                "identification information (such as national identification number, passport identification number, national insurance number, tax registration number, social security number, driver’s license, date of birth)",
                "business information (such as name of organisation, job title, department, business address)",
                "any footage captured or recorded by our surveillance camera (CCTV) system",
            ],

            // For Visitors (to any of our premises)
            [
                "contact information (such as name, address, email address and telephone number)",
                "identification information (such as national identification number, passport identification number, national insurance number, tax registration number, social security number, driver’s license, date of birth, etc.)",
                "business information (such as name of organisation, job title, department, business address)",
                "race",
                "nationality",
                "reason for visit",
                "date and time of visit",
                "photograph",
                "biometrics and facial recognition",
                "security notes (special instructions and access restrictions)",
                "any footage captured or recorded by our surveillance camera (CCTV) system",
            ],
        ],
    },
    {
        heading: 'When do we collect your personal data?',
        description: 'We may collect or obtain your personal data:',
        subheading: ['For Customers', 'For Business Partners and Suppliers', 'For Visitors (to any of our premises)'],
        subpoints: [
            // For Customers
            [
                "when you use our network, products and/or services (including through our call centres, dealers, and sales channels)",
                "when you contact us or register for information relating to our network, products and/or services or for any other purposes(s)",
                "when you communicate with us (such as SMS, text messages or other digital channels, emails, questionnaires or surveys)",
                "when you use or interact with any of our digital applications, visit any of our websites or social media pages",
                "when you participate in any of our promotional events, incentives or loyalty programs",
                "from external agencies (such as credit reference agencies, screening or investigation agencies)",
                "from our internal database pursuant to your relationship with any member of our group of companies",
                "from our surveillance camera (CCTV) system",
            ],

            // For Business Partners and Suppliers
            [
                "when you use our network, products and/or services",
                "when you communicate with us (such as SMS, text messages or other digital channels, emails, questionnaires or surveys)",
                "when you use or interact with any of our digital applications, visit any of our websites or social media pages",
                "from external agencies (such as credit reference agencies, screening or investigation agencies)",
                "from our internal database pursuant to your relationship with any member of our group of companies",
                "from our surveillance camera (CCTV) system",
            ],

            // For Visitors
            [
                "when you complete our visitor log book or visitor entry form",
                "when you provide us with your identification document(s)",
                "when you provide your host with information",
                "from our surveillance camera (CCTV) system",
            ],
        ],
    },

    {
        heading: 'Who do we disclose your personal data to? ',
        description: 'We may disclose your personal data:',
        subheading: ['For Customers', 'For Business Partners and Suppliers', 'For Visitors (to any of our premises)'],
        subpoints: [
            // For Customers
            [
                "to members of our group companies",
                "to other carriers and operators when routing international calls",
                "to third parties when disclosure is necessary or reasonable to protect our rights, protect your security, investigate fraud or respond to a law enforcement request",
                "to our service providers, field engineers, contractors, subcontractors or any other third-party performing work on our behalf or at our instruction",
                "to our business partners for our marketing activities",
                "to third parties for credit checks and fraud management",
                "to third parties for carrying out analytics to understand how you use our services",
                "to third parties for research and development purposes",
                "to our dealers or agents",
                "to third parties for the purposes set out under “How do we use your personal data?”",
            ],

            // For Business Partners and Suppliers
            [
                "to members of our group of companies",
                "to our third-party agents, service providers, consultants, advisors, contractors and/or subcontractors",
                "to any public authority, governmental, regulatory or fiscal agency where it is necessary to comply with a legal or regulatory obligation to which we are subjected to or as permitted by applicable local law",
                "to third parties for the purposes set out under “How do we use your personal data?”",
            ],

            // For Visitors
            [
                "We do not routinely share or transfer your personal data with any external organizations or third parties. However, where and whenever we share or transfer your personal data, it shall be for the purposes set out under “How do we use your personal data?” and we shall do so in accordance with applicable data privacy laws, unless required or permitted by law.",
            ],
        ],
    },
    {
        heading: 'Transfers of Personal Data ',
        description: `We use reasonable efforts in accordance with industry best practices to ensure that the above-mentioned maintain the confidentiality of your personal data and are restricted from using your personal data for any unauthorised purpose. 

        We may transfer your personal data across geographical borders to other entities in compliance with law. Where your personal data has been transferred to members of our group of companies and/or to third parties located outside of Bangladesh, the transfer of your personal data is carried out under organizational, contractual and legal measures and with adequate levels of protection implemented as well as any additional local legal requirements for the parties receiving this information in order to safeguard your personal data.`,
    },

    {
        heading: 'How do we store and protect your personal data? ',
        description: `We may collect and store your personal data in electronic or physical form, depending upon the requirement. Information may be stored at our and third-party premises within IT Systems (e.g. external cloud storage, internal or third-party management systems, e-mail, database, hard drives), document warehouses etc.

        We endeavour, where practicable, to process your personal data in a safe environment by preventing any unauthorized or unlawful processing of personal data or accidental loss or destruction of, or damage to, such information. We have implemented various physical, technical and administrative security measures to protect your personal data and our network from unauthorized access. Some of these measures include:`,
        subpoints: [[
            "encryption of data in transit or at rest",
            "strict adherence to privacy and security practices",
            "periodic security assessment and reviews to upgrade our practices",
            "restriction of access to such data to personnel who have a need to know such data"
        ]
        ]
    },
    {
        heading: 'How long do we retain your personal data? ',
        description: `We will retain your personal data only for as long as such information is necessary for the purposes it was collected for. The retention period for personal data may also be affected by the requirements of applicable laws. In all cases information may be held for a) a longer period of time where there is a legal or regulatory reason to do so (in which case it will be deleted once no longer required for the legal or regulatory purpose) or b) a shorter period where the individual objects to the processing of their personal data.`,
    },

    {
        heading: 'Consequences of not providing personal data',
        description: `We may require collection of certain personal data about you and failure to provide such information may:  `,
        subpoints: [[
            "result in us being unable to process your application and/or provide you with our services",
            "result in us being unable to respond to your requests on our products/services",
            "limit or prevent access to certain features on our website/weblinks",
            "result in us being unable to update you on latest updates regarding any promotions, our services/products or launches",
            "result in your inability to receive invitation to promotional activities organized by us",
            "negatively affect our ability to communicate with you",
            "result in our ability to enter into a contract with you or a counter-party or continuing to contract with you or a counter-party",
            "negatively impact your chances of being selected for any potential employment, engagement or internship"
]          
        ]
    },

    {
        heading: 'Who can I contact for more information?  ',
        description: `If you have any questions or complaints about this notice, our privacy and information handling practices, or would like to exercise your rights as data subjects, kindly reach out to our Data Privacy Officer via: dpo@robi.com.bd`,
    },

    {
        heading: 'Updates to the Privacy Notice',
        description: `We reserve the right to amend, modify, vary or update this Privacy Notice, at our sole discretion from time to time, as and when the need arises. The most recently published Privacy Notice shall prevail over any of its previous versions. We have no obligation to inform you of any variations and you are encouraged to check this Privacy Notice at https://www.reddotdigitalit.com/privacy-notice from time to time to stay informed of any changes. You agree to adhere to the terms of the Privacy Notice including any variations.`,
    },

]