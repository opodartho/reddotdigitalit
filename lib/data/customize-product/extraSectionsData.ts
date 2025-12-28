// ===================== EXTRA SECTION TYPES =====================
export type ExtraSectionItem = {
    id: number;
    title: string;
    description: string;
};

export type ExtraSection = {
    sectionTitle: string;
    items: ExtraSectionItem[];
};

export type ExtraSectionForProduct = {
    productId: number;
    sections: ExtraSection[];
};

export const ExtraSectionsData: ExtraSectionForProduct[] = [
    {
        productId: 5, // IOT Backend Platform
        sections: [
            {
                sectionTitle: "INTELLIGENT GAS DETECTOR",
                items: [
                    {
                        id: 1,
                        title: "FLAMMABLE GAS DETECTION",
                        description:
                            "Highly sensitive to LPG, natural gas (Methane, Ethane & other Hydrocarbons), coal gas. Less sensitive to Alcohol & smoke.",
                    },
                    {
                        id: 2,
                        title: "PUSH NOTIFICATIONS & AUDIBLE ALARM",
                        description:
                            "When the gas level crosses the threshold level, the device will sound an alarm and send push notification to smart phone.",
                    },
                    {
                        id: 3,
                        title: "REAL TIME GAS MONITORING",
                        description:
                            "It offers monitoring real time gas level in kitchen.",
                    },
                    {
                        id: 4,
                        title: "HISTORICAL DATA",
                        description:
                            "Its dashboard tab offers last 7 days historical data.",
                    },
                    {
                        id: 5,
                        title: "REMOTE DEVICE CONTROL",
                        description:
                            "All the features (device configuration, data analysis, alarm snooze etc.) can be controlled from any place over the internet.",
                    },
                ],
            },

            {
                sectionTitle: "INTELLIGENT ID CARD",
                items: [
                    {
                        id: 1,
                        title: "LIVE TRACKING",
                        description:
                            "It offers the latest location of intelligent ID card in app.",
                    },
                    {
                        id: 2,
                        title: "GEOFENCING",
                        description:
                            "It allows to fix a geographic boundary. So, if your child goes outside the boundary instant notifications will be received through app.",
                    },
                    {
                        id: 3,
                        title: "VOICE CALL",
                        description:
                            "Talk to your children using intelligent ID card.",
                    },
                    {
                        id: 4,
                        title: "HISTORICAL TRACKING REPORT",
                        description:
                            "The customer can view any previous data through tracking app.",
                    },
                    {
                        id: 5,
                        title: "EMERGENCY SOS BUTTON",
                        description:
                            "It offers up to 4 members as emergency contacts.",
                    },
                ],
            },

            {
                sectionTitle: "INTELLIGENT SWITCH",
                items: [
                    {
                        id: 1,
                        title: "REMOTE SWITCHING",
                        description:
                            "It offers to turn on/off switches from any places over the internet.",
                    },
                    {
                        id: 2,
                        title: "ANALYTICS",
                        description:
                            "It provides usages analytic report based on demand.",
                    },
                ],
            },
            {
                sectionTitle: "INTELLIGENT TRACKER",
                items: [
                    {
                        id: 1,
                        title: "LIVE TRACKING",
                        description:
                            "It offers the real time location of asset in app.",
                    },
                    {
                        id: 2,
                        title: "GEOFENCING",
                        description:
                            "It allows to fix the geographic boundary. If the tracker goes outside this boundary the user will receive a notification through app.",
                    },

                    {
                        id: 3,
                        title: "HISTORICAL TRACKING REPORTS",
                        description:
                            "The customer can view any previous data through tracking app.",
                    },
                ],
            },
              {
                sectionTitle: "INTELLIGENT VEHICLE TRACKING SYSTEM",
                items: [
                    {
                        id: 1,
                        title: "GEO FENCING",
                        description:
                            "It allows to fix the geographic boundary. If the vehicle goes outside this boundary the user will receive a notification.",
                    },
                    {
                        id: 2,
                        title: "REMOTE ENGINE DISARM",
                        description:
                            "User can disarm engine remotely based on necessity.",
                    },

                    {
                        id: 3,
                        title: "HISTORY",
                        description:
                            "It shows last 20 location history.",
                    },
                                        {
                        id: 4,
                        title: "SPEED LIMIT",
                        description:
                            "It shows analytical data and maximum speed of the date based on selection. User can set speed limit for his/her vehicle. If the vehicle crosses this speed limit, user will get a notification through mobile application.",
                    },                    {
                        id: 5,
                        title: "DISTANCE",
                        description:
                            "It shows the analytical data of the month & year based on selection.",
                    },                    {
                        id: 6,
                        title: "EXPENSE MANAGEMENT",
                        description:
                            "Through expense management one can see his all added expense list. He can add expense and search expense between two dates.",
                    },
                                        {
                        id: 7,
                        title: "ROUTE",
                        description:
                            "It shows the route of the selected route from the current location on map. By selecting date & time it plots all location on map with animation of moving cars.",
                    },
                                        {
                        id: 8,
                        title: "TRACKER INFO",
                        description:
                            "It contains Tracker IMEI, registered mobile number with this tracker, customer name, vehicle name, vehicle registration number, device installation date etc.",
                    },
                ],
            },
            {
                sectionTitle: "INTELLIGENT SURVEILLANCE",
                items: [
                    {
                        id: 1,
                        title: "720P HD VIDEO",
                        description:
                            "It offers high definition image quality. Configurable video quality for efficient data usage.",
                    },
                    {
                        id: 2,
                        title: "BUILT IN IR ILLUMINATORS",
                        description:
                            "Allows night vision at low light condition up to 10 meters.",
                    },

                    {
                        id: 3,
                        title: "SMART IR TECHNOLOGY",
                        description:
                            "Automatic brightness adjustment to avoid over exposure.",
                    },
                                        {
                        id: 4,
                        title: "TWO-WAY AUDIO",
                        description:
                            "Communicate with people easily or just listen to the sound from camera.",
                    },                    {
                        id: 5,
                        title: "355⁰ PAN, 90⁰ TILT",
                        description:
                            "All around coverage leaves no blind spots.",
                    },                    {
                        id: 6,
                        title: "ALARM NOTIFICATIONS",
                        description:
                            "Get instant alert while you are on the go.",
                    },                    {
                        id: 7,
                        title: "LOCAL STORAGE",
                        description:
                            "Store the video clips on local storage. It also offers store an incident on personal phone.",
                    },                   
                ],
            },
            

        ],
    },
];
