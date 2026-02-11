// ============================================
// MK SETTLE CARS - CAR INVENTORY
// ============================================

const CARPATH = "/cars/";

export const cars = [
  // --------------------------------------------
  // TOYOTA PRIUS 2020
  // Reg: MM20 YKX
  // --------------------------------------------
  {
    id: 1,
    name: "Toyota Prius (2020)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2020,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: 250,
    image: CARPATH + "mm20ykx/c.png",
    gallery: [
      CARPATH + "mm20ykx/1 (1).jpg",
      CARPATH + "mm20ykx/1 (1).png",
      CARPATH + "mm20ykx/1 (2).jpg",
      CARPATH + "mm20ykx/1 (3).jpg",
      CARPATH + "mm20ykx/1 (3).png",
      CARPATH + "mm20ykx/1 (4).jpg",
      CARPATH + "mm20ykx/1 (5).jpg",
      CARPATH + "mm20ykx/1 (6).jpg"
    ],
    description:
      "The 2020 Toyota Prius is a reliable and fuel-efficient hybrid saloon, ideal for both city driving and long motorway journeys. Known for its smooth automatic drive and low running costs, it’s a practical and comfortable choice for everyday use.",
    features: [
      "Hybrid Engine",
      "Automatic Transmission",
      "Bluetooth",
      "Reverse Camera",
      "Cruise Control",
      "Air Conditioning",
      "Touchscreen Display",
      "Electric Windows"
    ],
    specs: {
      engine: "1.5L Hybrid",
      horsepower: "70 bhp",
      transmission: "CVT Automatic",
      fuelType: "Petrol Hybrid",
      seats: 5,
      doors: 4,
      luggage: "2 Large Suitcases",
      mpg: "70 MPG"
    },
    available: false,
    featured: false
  },

  // --------------------------------------------
  // TOYOTA PRIUS 2018
  // Reg: MX18 OPR
  // --------------------------------------------
  {
    id: 2,
    name: "Toyota Prius (2018)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2018,
    category: "Saloon",
    pricePerDay: "N/A",
    pricePerWeek: 250,
    image: CARPATH + "mx18opr/c.png",
    gallery: [
      CARPATH + "mx18opr/1 (1).jpg",
      CARPATH + "mx18opr/1 (2).jpg",
      CARPATH + "mx18opr/1 (2).png",
      CARPATH + "mx18opr/1 (3).jpg",
      CARPATH + "mx18opr/1 (4).jpg"
    ],
    description:
      "The 2018 Toyota Prius offers excellent fuel economy and dependable hybrid performance. With a comfortable interior and smooth ride, it’s perfect for daily commuting, longer trips, or cost-effective car hire.",
    features: [
      "Hybrid Engine",
      "Automatic Gearbox",
      "Bluetooth Audio",
      "Climate Control",
      "Cruise Control",
      "Touchscreen Display",
      "Central Locking",
      "Electric Mirrors"
    ],
    specs: {
      engine: "1.5L Hybrid",
      horsepower: "70 bhp",
      transmission: "CVT Automatic",
      fuelType: "Petrol Hybrid",
      seats: 5,
      doors: 4,
      luggage: "2 Large Suitcases",
      mpg: "70 MPG"
    },
    available: false,
    featured: false
  },

  // --------------------------------------------
  // TOYOTA PRIUS 2019
  // Reg: MX19 DGD
  // --------------------------------------------
  {
    id: 3,
    name: "Toyota Prius (2019)",
    shortName: "Prius",
    brand: "Toyota",
    year: 2019,
    category: "Saloon",
    pricePerDay: "N/A",
    
    pricePerWeek: 250,
    image: CARPATH + "mx19dgd/c .jpg",
    gallery: [
      CARPATH + "mx19dgd/1 (1) .jpg",
      CARPATH + "mx19dgd/1 (2) .jpg",
      CARPATH + "mx19dgd/1 (3) .jpg",
      CARPATH + "mx19dgd/1 (4) .jpg",
      CARPATH + "mx19dgd/1 (5) .jpg",
      CARPATH + "mx19dgd/1 (6) .jpg",
      CARPATH + "mx19dgd/1 (8) .jpg"
    ],
    description:
      "The 2019 Toyota Prius is a refined hybrid saloon combining comfort, efficiency, and reliability. Ideal for longer journeys and everyday driving, it delivers a quiet ride with excellent fuel savings.",
    features: [
      "Hybrid Powertrain",
      "Automatic Transmission",
      "Bluetooth",
      "Cruise Control",
      "Air Conditioning",
      "Touchscreen Display",
      "Electric Windows",
      "Lane Assist"
    ],
    specs: {
      engine: "1.5L Hybrid",
      horsepower: "70 bhp",
      transmission: "CVT Automatic",
      fuelType: "Petrol Hybrid",
      seats: 5,
      doors: 4,
      luggage: "2 Large Suitcases",
      mpg: "70 MPG"
    },
    available: false,
    featured: false
  },

  // --------------------------------------------
  // KIA NIRO 2021
  // Reg: RJ21 GZA
  // --------------------------------------------
  {
    id: 4,
    name: "Kia Niro (2021)",
    shortName: "Niro",
    brand: "Kia",
    year: 2021,
    category: "SUV",
    pricePerDay: "N/A",
    pricePerWeek: 260,
    image: CARPATH + "rj21gza/c .png",
    gallery: [
      CARPATH + "rj21gza/1 (1) .jpg",
      CARPATH + "rj21gza/1 (1) .png",
      CARPATH + "rj21gza/1 (3) .jpg",
      CARPATH + "rj21gza/1 (3) .png",
      CARPATH + "rj21gza/1 (5) .png",
      CARPATH + "rj21gza/1 .jpg"
    ],
    description:
      "The 2021 Kia Niro is a modern hybrid SUV offering a higher driving position, smooth automatic performance, and excellent fuel efficiency. Spacious and comfortable, it’s ideal for families and longer journeys.",
    features: [
      "Hybrid Engine",
      "Automatic Gearbox",
      "Apple CarPlay",
      "Android Auto",
      "Reverse Camera",
      "Cruise Control",
      "Parking Sensors",
      "Spacious Boot"
    ],
    specs: {
      engine: "1.6 GDi Hybrid",
      horsepower: "139 bhp",
      transmission: "Automatic (DCT)",
      fuelType: "Petrol Hybrid",
      seats: 5,
      doors: 5,
      luggage: "3 Large Suitcases",
      mpg: "55 MPG"
    },
    available: true,
    featured: true
  }
];

// ============================================
// COMPANY INFO
// ============================================

export const companyInfo = {
  name: "MK Settle Cars",
  tagline: "Quality Car Rental",
  phone: "+44 7776 825727 OR +44 7440 445622",
  email: "mksettlecars@gmail.com",
  address: "Lancashire",
  openingHours: "Instant replies to calls and e-mails from 9am - 12pm"
};

// ============================================
// CATEGORIES
// ============================================

export const categories = [
  "All",
  "SUV",
  "Saloon"
];
