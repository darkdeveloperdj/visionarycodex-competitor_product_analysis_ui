export const category = ["electronics", "fashion", "home", "beauty", "sports"];

export const categoryCompetitors = {
  electronics: ["Apple", "Samsung", "Google", "OnePlus", "Sony", "Huawei"],
  fashion: ["Nike", "Adidas", "Puma", "Gucci", "Louis Vuitton", "Zara"],
  home: [
    "Ikea",
    "Ashley Furniture",
    "Wayfair",
    "West Elm",
    "Home Depot",
    "Havells",
  ],
  beauty: ["L'Oréal", "Nivea", "Maybelline", "Dove", "Revlon", "Neutrogena"],
  sports: ["Nike", "Adidas", "Puma", "Under Armour", "Decathlon", "Reebok"],
};

export const productData = [
  // Electronics (20)
  {
    brand: "Apple",
    model: "iPhone 15 Pro",
    category: "electronics",
    features: { "5G": true, "ProMotion Display": true, "Face ID": true },
    insights: {
      popularity: "Very High",
      priceTrend: "Stable",
      demand: "Extreme",
      marketShare: "35%",
    },
    reviews: [
      {
        user: "TechFan",
        rating: 4.8,
        comment: "Industry-leading performance",
        date: "2024-03-01",
      },
    ],
  },
  {
    brand: "Samsung",
    model: "Galaxy Z Fold 5",
    category: "electronics",
    features: { Foldable: true, "S-Pen Support": true, "5G": true },
    insights: {
      popularity: "High",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "28%",
    },
    reviews: [
      {
        user: "GadgetLover",
        rating: 4.6,
        comment: "Innovative form factor",
        date: "2024-03-05",
      },
    ],
  },
  // ... 18 more electronics items

  // Fashion (20)
  {
    brand: "Nike",
    model: "Air Force 1 '07",
    category: "fashion",
    features: { Leather: true, "Air Cushioning": true, "Classic Design": true },
    insights: {
      popularity: "High",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "22%",
    },
    reviews: [
      {
        user: "Sneakerhead",
        rating: 4.7,
        comment: "Timeless design",
        date: "2024-02-15",
      },
    ],
  },
  // ... 19 more fashion items

  // Home (20)
  {
    brand: "Ikea",
    model: "PAX Wardrobe",
    category: "home",
    features: { Modular: true, "Soft-Close Doors": true, Customizable: true },
    insights: {
      popularity: "Medium",
      priceTrend: "Increasing",
      demand: "Medium",
      marketShare: "18%",
    },
    reviews: [
      {
        user: "HomeOwner",
        rating: 4.5,
        comment: "Great storage solution",
        date: "2024-03-10",
      },
    ],
  },
  // ... 19 more home items

  // Beauty (20)
  {
    brand: "L'Oréal",
    model: "Revitalift Serum",
    category: "beauty",
    features: {
      "Hyaluronic Acid": true,
      "Anti-Aging": true,
      "Dermatologist Tested": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "20%",
    },
    reviews: [
      {
        user: "BeautyBlogger",
        rating: 4.6,
        comment: "Visible results",
        date: "2024-02-28",
      },
    ],
  },
  {
    brand: "L'Oréal",
    model: "Revitalift Serum 2",
    category: "beauty",
    features: {
      "Hyaluronic Acid": true,
      "Anti-Aging": true,
      "Dermatologist Tested": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "20%",
    },
    reviews: [
      {
        user: "BeautyBlogger",
        rating: 4.6,
        comment: "Visible results",
        date: "2024-02-28",
      },
    ],
  },
  // ... 19 more beauty items

  // Sports (20)
  {
    brand: "Adidas",
    model: "Predator Elite",
    category: "sports",
    features: {
      "FG/AG Cleats": true,
      "HybridTouch Upper": true,
      "Aerocage Support": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Stable",
      demand: "Medium",
      marketShare: "15%",
    },
    reviews: [
      {
        user: "SoccerPro",
        rating: 4.4,
        comment: "Excellent grip",
        date: "2024-03-12",
      },
    ],
  },
  // ... 19 more sports items
];

export const myCompanyProducts = [
  // Electronics (4)
  {
    brand: "MyCompany",
    model: "XPhone Pro",
    category: "electronics",
    features: { "5G+": true, "144Hz Display": true, "100W Charging": true },
    insights: {
      popularity: "High",
      priceTrend: "Increasing",
      demand: "Growing",
      marketShare: "12%",
    },
    reviews: [
      {
        user: "TechReview",
        rating: 4.5,
        comment: "Flagship killer",
        date: "2024-03-25",
      },
    ],
  },

  // Fashion (4)
  {
    brand: "MyCompany",
    model: "UrbanTech Jacket",
    category: "fashion",
    features: {
      "Smart Heating": true,
      Waterproof: true,
      "RFID Protection": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Stable",
      demand: "Steady",
      marketShare: "8%",
    },
    reviews: [
      {
        user: "OutdoorGear",
        rating: 4.3,
        comment: "Innovative features",
        date: "2024-02-20",
      },
    ],
  },

  // Home (4)
  {
    brand: "MyCompany",
    model: "SmartAir 5000",
    category: "home",
    features: { "HEPA Filter": true, "IoT Enabled": true, "Auto Mode": true },
    insights: {
      popularity: "High",
      priceTrend: "Increasing",
      demand: "High",
      marketShare: "10%",
    },
    reviews: [
      {
        user: "HomeTech",
        rating: 4.6,
        comment: "Allergy relief",
        date: "2024-03-05",
      },
    ],
  },

  // Beauty (4)
  {
    brand: "MyCompany",
    model: "BioGlow Serum",
    category: "beauty",
    features: { Organic: true, "Vitamin C": true, "Cruelty-Free": true },
    insights: {
      popularity: "Medium",
      priceTrend: "Stable",
      demand: "Medium",
      marketShare: "7%",
    },
    reviews: [
      {
        user: "SkinCare",
        rating: 4.4,
        comment: "Natural glow",
        date: "2024-03-18",
      },
    ],
  },

  // Sports (4)
  {
    brand: "MyCompany",
    model: "FlexRun Pro",
    category: "sports",
    features: {
      "Energy Return": true,
      "Breathable Mesh": true,
      "Arch Support": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Increasing",
      demand: "High",
      marketShare: "9%",
    },
    reviews: [
      {
        user: "Marathoner",
        rating: 4.7,
        comment: "Best cushioning",
        date: "2024-02-28",
      },
    ],
  },
  // ... 15 more MyCompany products
];
