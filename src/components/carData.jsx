// ============================================
// MK SETTLE CARS - FLEET CATALOGUE
// Stock photography is used throughout.
// ============================================

const CARS = "/cars/";

const priusGen3 = {
  image: CARS + "prius-2015-silver.jpg",
  gallery: [
    CARS + "prius-2015-silver.jpg",
    CARS + "prius-street.jpg",
    CARS + "prius-interior.jpg",
  ],
};

const priusGen4 = {
  image: CARS + "prius-2020-white.jpg",
  gallery: [
    CARS + "prius-2020-white.jpg",
    CARS + "prius-2018-grey.jpg",
    CARS + "prius-street.jpg",
    CARS + "prius-interior.jpg",
  ],
};

const priusGen4Grey = {
  image: CARS + "prius-2018-grey.jpg",
  gallery: [
    CARS + "prius-2018-grey.jpg",
    CARS + "prius-2020-white.jpg",
    CARS + "prius-street.jpg",
    CARS + "prius-interior.jpg",
  ],
};

const niroImages = {
  image: CARS + "kia-niro-2021-white.jpg",
  gallery: [
    CARS + "kia-niro-2021-white.jpg",
    CARS + "kia-niro-2021-side.jpg",
    CARS + "kia-niro-interior.jpg",
  ],
};

const priusFeatures = [
  "Hybrid Engine",
  "Automatic Transmission",
  "Bluetooth",
  "Air Conditioning",
  "Cruise Control",
  "Electric Windows",
  "Central Locking",
];

const priusSpecsGen3 = {
  engine: "1.8L Hybrid",
  horsepower: "98 bhp",
  transmission: "CVT Automatic",
  fuelType: "Petrol Hybrid",
  seats: 5,
  doors: 4,
  luggage: "2 Large Suitcases",
  mpg: "70 MPG",
};

const priusSpecsGen4 = {
  engine: "1.8L Hybrid",
  horsepower: "121 bhp",
  transmission: "CVT Automatic",
  fuelType: "Petrol Hybrid",
  seats: 5,
  doors: 4,
  luggage: "2 Large Suitcases",
  mpg: "70 MPG",
};

export const taxiPlates = [
  "Wolverhampton",
  "Sefton",
  "Pendle",
  "Lancashire",
  "Blackburn with Darwen",
  "Preston",
  "Burnley",
  "Hyndburn",
  "Rossendale",
  "Blackpool",
  "Bolton",
  "Wigan",
  "Manchester",
  "Liverpool",
];

export const cars = [
  {
    id: 1,
    name: "Toyota Prius (2020)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2020,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen4,
    description:
      "The 2020 Toyota Prius is a reliable and fuel-efficient hybrid saloon, ideal for both city driving and long motorway journeys. Known for its smooth automatic drive and low running costs, it is a practical and comfortable choice for everyday taxi work.",
    features: [...priusFeatures, "Reverse Camera", "Touchscreen Display"],
    specs: priusSpecsGen4,
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Toyota Prius (2019)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2019,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen4,
    description:
      "The 2019 Toyota Prius is a refined hybrid saloon combining comfort, efficiency, and reliability. Ideal for longer journeys and everyday driving, it delivers a quiet ride with excellent fuel savings.",
    features: [...priusFeatures, "Touchscreen Display", "Lane Assist"],
    specs: priusSpecsGen4,
    available: true,
    featured: false,
  },
  {
    id: 3,
    name: "Toyota Prius (2018)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2018,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen4Grey,
    description:
      "The 2018 Toyota Prius offers excellent fuel economy and dependable hybrid performance. With a comfortable interior and smooth ride, it is well suited to daily commuting, longer trips, or cost-effective taxi hire.",
    features: [...priusFeatures, "Bluetooth Audio", "Climate Control"],
    specs: priusSpecsGen4,
    available: true,
    featured: true,
  },
  {
    id: 4,
    name: "Toyota Prius (2017)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2017,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen4Grey,
    description:
      "The 2017 Toyota Prius is a proven hybrid saloon with a spacious cabin and low running costs. A dependable choice for private hire work, with automatic driving and strong fuel economy.",
    features: [...priusFeatures, "Touchscreen Display"],
    specs: priusSpecsGen4,
    available: true,
    featured: false,
  },
  {
    id: 5,
    name: "Toyota Prius (2016)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2016,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen4,
    description:
      "The 2016 Toyota Prius introduced the current generation's sharper styling and efficient hybrid system. Comfortable, automatic, and economical — a solid all-rounder for taxi rental.",
    features: [...priusFeatures, "Reverse Camera"],
    specs: priusSpecsGen4,
    available: true,
    featured: false,
  },
  {
    id: 6,
    name: "Toyota Prius (2015)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2015,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen3,
    description:
      "The 2015 Toyota Prius is a well-known hybrid saloon with a reputation for reliability and low fuel use. Straightforward to drive and inexpensive to run, it remains a popular taxi choice.",
    features: [...priusFeatures],
    specs: priusSpecsGen3,
    available: true,
    featured: false,
  },
  {
    id: 7,
    name: "Toyota Prius (2014)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2014,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 250",
    ...priusGen3,
    description:
      "The 2014 Toyota Prius is a practical hybrid saloon for everyday hire. Automatic, five-seater, and fuel-efficient, it is a sensible option for operators looking for a proven taxi vehicle.",
    features: [...priusFeatures],
    specs: priusSpecsGen3,
    available: true,
    featured: false,
  },
  {
    id: 8,
    name: "Kia Niro (2021)",
    shortName: "Niro",
    brand: "Kia",
    year: 2021,
    category: "SUV",
    pricePerDay: "N/A",
    pricePerWeek: "220 - 260",
    ...niroImages,
    description:
      "The 2021 Kia Niro is a modern hybrid SUV offering a higher driving position, smooth automatic performance, and excellent fuel efficiency. Spacious and comfortable, it is ideal for families and longer journeys.",
    features: [
      "Hybrid Engine",
      "Automatic Gearbox",
      "Apple CarPlay",
      "Android Auto",
      "Reverse Camera",
      "Cruise Control",
      "Parking Sensors",
      "Spacious Boot",
    ],
    specs: {
      engine: "1.6 GDi Hybrid",
      horsepower: "139 bhp",
      transmission: "Automatic (DCT)",
      fuelType: "Petrol Hybrid",
      seats: 5,
      doors: 5,
      luggage: "3 Large Suitcases",
      mpg: "55 MPG",
    },
    available: true,
    featured: true,
  },
];

export const companyInfo = {
  name: "MK Settle Cars",
  tagline: "Quality Taxi Rental",
  phone: "+44 7776 825727 OR +44 7440 445622",
  phones: [
    { display: "+44 7776 825727", href: "tel:+447776825727" },
    { display: "+44 7440 445622", href: "tel:+447440445622" },
  ],
  email: "mksettlecars@gmail.com",
  address: "Lancashire",
  openingHours: "Instant replies to calls and e-mails from 9am - 12pm",
};

export const categories = ["All", "SUV", "Saloon"];

export const services = [
  {
    number: "01",
    title: "Taxi & car rental",
    description:
      "A well-maintained hybrid fleet for private hire and everyday rental. Toyota Prius saloons from 2014 to 2020 and the 2021 Kia Niro SUV, ready for the road.",
  },
  {
    number: "02",
    title: "All included",
    description:
      "Insurance, servicing, MOT, road tax and dash cam are included in the deal, so running a vehicle is straightforward from day one.",
  },
  {
    number: "03",
    title: "Taxi plates",
    description:
      "Vehicles can be supplied with taxi plates for a range of licensing authorities, including Wolverhampton, Sefton, Pendle and other areas listed on this site. Tell us which plate you need when you enquire.",
  },
  {
    number: "04",
    title: "Delivery & collection",
    description:
      "Concierge-style delivery and pickup at your convenience, arranged directly with our team once your enquiry is confirmed.",
  },
];
