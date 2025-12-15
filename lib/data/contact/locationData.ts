export const locationData = {
  heading: "Our Location",
  description:
    "We foster seamless collaboration through open communication and transparency. Our flexible partnership model adapts to your needs and goals.",

  offices: {
    registered: {
      title: "Registered Office",
      address: `Ward 03, Holding B-2, Bangabandhu Hi-Tech City,
Kaliakair, Gazipur, Dhaka – 1751, Bangladesh`,
      coordinates: [24.071567335781733, 90.2223785213643] as [number, number],
    },
    corporate: {
      title: "Corporate Office",
      address: `57 & 57/A, Uday Tower (15th Floor),
Gulshan 1, Gulshan Avenue, Dhaka 1212, Bangladesh`,
      coordinates: [23.782992876384004, 90.4166415905529] as [number, number],
    },
  },

  map: {
    center: [23.92, 90.32] as [number, number],
    zoom: 9.5,
    pinIcon: "/images/pin-red.png",
  },
};
