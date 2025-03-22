/**
 * COMPETITIVE ANALYSIS DATABASE SCHEMA v1
 */
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

// export const productData = [
//   // Original 5 entries

//   // Additional Electronics (17 entries)
//   {
//     brand: "Apple",
//     model: "iPhone 15 Pro",
//     category: "electronics",
//     features: {
//       "A17 Bionic Chip": true,
//       "ProMotion Display": true,
//       "Titanium Frame": true,
//     },
//     insights: {
//       popularity: "Very High",
//       priceTrend: "Stable",
//       demand: "Extreme",
//       marketShare: "28%",
//     },
//     reviews: [
//       {
//         user: "AppleFan123",
//         rating: 4.8,
//         comment: "Best iPhone yet",
//         date: "2024-03-18",
//       },
//     ],
//   },
//   {
//     brand: "OnePlus",
//     model: "12 Pro",
//     category: "electronics",
//     features: {
//       "Snapdragon 8 Gen 3": true,
//       "100W Fast Charging": true,
//       "LTPO AMOLED": true,
//     },
//     insights: {
//       popularity: "High",
//       priceTrend: "Decreasing",
//       demand: "High",
//       marketShare: "15%",
//     },
//     reviews: [
//       {
//         user: "SpeedMaster",
//         rating: 4.6,
//         comment: "Blazing fast performance",
//         date: "2024-03-09",
//       },
//     ],
//   },

//   {
//     brand: "Apple",
//     model: "iPhone 15 Pro2",
//     category: "electronics",
//     features: {
//       "A17 Bionic Chip": true,
//       "ProMotion Display": true,
//       "Titanium Frame": true,
//     },
//     insights: {
//       popularity: "Very High",
//       priceTrend: "Stable",
//       demand: "Extreme",
//       marketShare: "28%",
//     },
//     reviews: [
//       {
//         user: "AppleFan123",
//         rating: 4.8,
//         comment: "Best iPhone yet",
//         date: "2024-03-18",
//       },
//     ],
//   },
//   {
//     brand: "OnePlus",
//     model: "12 Pro2",
//     category: "electronics",
//     features: {
//       "Snapdragon 8 Gen 3": true,
//       "100W Fast Charging": true,
//       "LTPO AMOLED": true,
//     },
//     insights: {
//       popularity: "High",
//       priceTrend: "Decreasing",
//       demand: "High",
//       marketShare: "15%",
//     },
//     reviews: [
//       {
//         user: "SpeedMaster",
//         rating: 4.6,
//         comment: "Blazing fast performance",
//         date: "2024-03-09",
//       },
//     ],
//   },

//   {
//     brand: "Apple",
//     model: "iPhone 15 Pro3",
//     category: "electronics",
//     features: {
//       "A17 Bionic Chip": true,
//       "ProMotion Display": true,
//       "Titanium Frame": true,
//     },
//     insights: {
//       popularity: "Very High",
//       priceTrend: "Stable",
//       demand: "Extreme",
//       marketShare: "28%",
//     },
//     reviews: [
//       {
//         user: "AppleFan123",
//         rating: 4.8,
//         comment: "Best iPhone yet",
//         date: "2024-03-18",
//       },
//     ],
//   },
//   {
//     brand: "OnePlus",
//     model: "12 Pro3",
//     category: "electronics",
//     features: {
//       "Snapdragon 8 Gen 3": true,
//       "100W Fast Charging": true,
//       "LTPO AMOLED": true,
//     },
//     insights: {
//       popularity: "High",
//       priceTrend: "Decreasing",
//       demand: "High",
//       marketShare: "15%",
//     },
//     reviews: [
//       {
//         user: "SpeedMaster",
//         rating: 4.6,
//         comment: "Blazing fast performance",
//         date: "2024-03-09",
//       },
//     ],
//   },
//   // 15 more electronics entries...

//   // Fashion (9 entries)
//   {
//     brand: "Zara",
//     model: "Premium Wool Coat",
//     category: "fashion",
//     features: {
//       "Water Resistant": true,
//       "Italian Wool": true,
//       "Detachable Hood": true,
//     },
//     insights: {
//       popularity: "Medium",
//       priceTrend: "Seasonal",
//       demand: "Medium",
//       marketShare: "8%",
//     },
//     reviews: [
//       {
//         user: "Fashionista22",
//         rating: 4.3,
//         comment: "Perfect winter coat",
//         date: "2024-02-12",
//       },
//     ],
//   },
//   // 8 more fashion entries...

//   // Home (9 entries)
//   {
//     brand: "Wayfair",
//     model: "Smart Sectional Sofa",
//     category: "home",
//     features: {
//       "Modular Design": true,
//       "USB Charging": true,
//       "Stain Resistant": true,
//     },
//     insights: {
//       popularity: "Growing",
//       priceTrend: "Stable",
//       demand: "High",
//       marketShare: "12%",
//     },
//     reviews: [
//       {
//         user: "HomeMaker",
//         rating: 4.4,
//         comment: "Excellent modular options",
//         date: "2024-01-25",
//       },
//     ],
//   },
//   // 8 more home entries...

//   // Beauty (5 entries)
//   {
//     brand: "Neutrogena",
//     model: "Hydro Boost Serum",
//     category: "beauty",
//     features: {
//       "Hyaluronic Acid": true,
//       "Oil-Free": true,
//       "Fragrance Free": true,
//     },
//     insights: {
//       popularity: "High",
//       priceTrend: "Stable",
//       demand: "High",
//       marketShare: "18%",
//     },
//     reviews: [
//       {
//         user: "SkinCarePro",
//         rating: 4.5,
//         comment: "Great hydration",
//         date: "2024-03-14",
//       },
//     ],
//   },
//   // 4 more beauty entries...

//   // Sports (5 entries)
//   {
//     brand: "Decathlon",
//     model: "MTB 900 Mountain Bike",
//     category: "sports",
//     features: {
//       '27.5" Wheels': true,
//       "21-Speed": true,
//       "Aluminum Frame": true,
//     },
//     insights: {
//       popularity: "Medium",
//       priceTrend: "Decreasing",
//       demand: "Medium",
//       marketShare: "9%",
//     },
//     reviews: [
//       {
//         user: "TrailRider",
//         rating: 4.2,
//         comment: "Good entry-level bike",
//         date: "2024-02-28",
//       },
//     ],
//   },
//   // 4 more sports entries...
// ];

// export const myCompanyProducts = [
//   // Original 3 entries

//   // Electronics (17 entries)
//   {
//     brand: "MyCompany",
//     model: "XPhone 15",
//     category: "electronics",
//     features: {
//       "Holographic Display": true,
//       "Neural Processor": true,
//       "200W Fast Charging": true,
//     },
//     insights: {
//       popularity: "Growing",
//       priceTrend: "Decreasing",
//       demand: "High",
//       marketShare: "8%",
//     },
//     reviews: [
//       {
//         user: "EarlyAdopter",
//         rating: 4.3,
//         comment: "Innovative display tech",
//         date: "2024-03-20",
//       },
//     ],
//   },
//   {
//     brand: "MyCompany",
//     model: "XPhone 19",
//     category: "electronics",
//     features: {
//       "Holographic Display 2": true,
//       "Neural Processor": true,
//       "200W Fast Charging": true,
//     },
//     insights: {
//       popularity: "Growing",
//       priceTrend: "Decreasing",
//       demand: "High",
//       marketShare: "8%",
//     },
//     reviews: [
//       {
//         user: "EarlyAdopter",
//         rating: 4.3,
//         comment: "Innovative display tech",
//         date: "2024-03-20",
//       },
//     ],
//   },
//   // 16 more electronics entries...

//   // Fashion (10 entries)
//   {
//     brand: "MyCompany",
//     model: "EcoWear Jacket",
//     category: "fashion",
//     features: {
//       "Recycled Materials": true,
//       Waterproof: true,
//       "Hidden Pockets": true,
//     },
//     insights: {
//       popularity: "Medium",
//       priceTrend: "Stable",
//       demand: "Growing",
//       marketShare: "6%",
//     },
//     reviews: [
//       {
//         user: "EcoWarrior",
//         rating: 4.5,
//         comment: "Love the sustainable focus",
//         date: "2024-02-15",
//       },
//     ],
//   },
//   // 9 more fashion entries...

//   // Home (10 entries)
//   {
//     brand: "MyCompany",
//     model: "NanoClean Vacuum",
//     category: "home",
//     features: {
//       "Self-Emptying": true,
//       "Laser Mapping": true,
//       "180min Runtime": true,
//     },
//     insights: {
//       popularity: "High",
//       priceTrend: "Stable",
//       demand: "High",
//       marketShare: "11%",
//     },
//     reviews: [
//       {
//         user: "CleanFreak",
//         rating: 4.7,
//         comment: "Best cleaning automation",
//         date: "2024-03-01",
//       },
//     ],
//   },
//   // 9 more home entries...

//   // Beauty (5 entries)
//   {
//     brand: "MyCompany",
//     model: "BioLumin Serum",
//     category: "beauty",
//     features: {
//       "Vitamin C": true,
//       "Hyaluronic Acid": true,
//       "Cruelty Free": true,
//     },
//     insights: {
//       popularity: "Growing",
//       priceTrend: "Stable",
//       demand: "Medium",
//       marketShare: "5%",
//     },
//     reviews: [
//       {
//         user: "BeautyBlogger",
//         rating: 4.4,
//         comment: "Visible brightening effect",
//         date: "2024-03-10",
//       },
//     ],
//   },
//   // 4 more beauty entries...

//   // Sports (5 entries)
//   {
//     brand: "MyCompany",
//     model: "ProFlex Yoga Mat",
//     category: "sports",
//     features: {
//       "Eco-Friendly": true,
//       "6mm Thick": true,
//       "Alignment Markers": true,
//     },
//     insights: {
//       popularity: "Medium",
//       priceTrend: "Stable",
//       demand: "Growing",
//       marketShare: "7%",
//     },
//     reviews: [
//       {
//         user: "YogaMaster",
//         rating: 4.6,
//         comment: "Perfect grip and cushion",
//         date: "2024-02-22",
//       },
//     ],
//   },
//   // 4 more sports entries...
// ];

export const productData = [
  {
    brand: "Apple",
    category: "electronics",
    features:
      "{'A16 Bionic Chip': True, 'Super Retina XDR Display': True, 'Ceramic Shield': True, 'Larger Battery': True}",
    insights:
      "{'popularity': 'Medium', 'priceTrend': 'Stable', 'demand': 'Medium', 'marketShare': '15%'}",
    model: "iPhone 15 Plus",
    reviews:
      "[{'user': 'BigScreenFan', 'rating': 4.7, 'comment': 'Love the big screen', 'date': '2024-03-22'}]",
  },

  // Original productData entries with isMyCompanyProduct: false
  {
    brand: "Apple",
    model: "iPhone 15 Pro",
    category: "electronics",
    features: {
      "A17 Bionic Chip": true,
      "ProMotion Display": true,
      "Titanium Frame": true,
    },
    insights: {
      popularity: "Very High",
      priceTrend: "Stable",
      demand: "Extreme",
      marketShare: "28%",
    },
    reviews: [
      {
        user: "AppleFan123",
        rating: 4.8,
        comment: "Best iPhone yet",
        date: "2024-03-18",
      },
    ],
  },
  {
    brand: "Google",
    model: "12 Pro",
    category: "electronics",
    features: {
      "Snapdragon 8 Gen 3": true,
      "100W Fast Charging": true,
      "LTPO AMOLED": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "15%",
    },
    reviews: [
      {
        user: "SpeedMaster",
        rating: 4.6,
        comment: "Blazing fast performance",
        date: "2024-03-09",
      },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 15 Pro2",
    category: "electronics",
    features: {
      "A17 Bionic Chip": true,
      "ProMotion Display": true,
      "Titanium Frame": true,
    },
    insights: {
      popularity: "Very High",
      priceTrend: "Stable",
      demand: "Extreme",
      marketShare: "28%",
    },
    reviews: [
      {
        user: "AppleFan123",
        rating: 4.8,
        comment: "Best iPhone yet",
        date: "2024-03-18",
      },
    ],
  },
  {
    brand: "Samsung",
    model: "12 Pro2",
    category: "electronics",
    features: {
      "Snapdragon 8 Gen 3": true,
      "100W Fast Charging": true,
      "LTPO AMOLED": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "15%",
    },
    reviews: [
      {
        user: "SpeedMaster",
        rating: 4.6,
        comment: "Blazing fast performance",
        date: "2024-03-09",
      },
    ],
  },
  {
    brand: "Apple",
    model: "iPhone 15 Pro3",
    category: "electronics",
    features: {
      "A17 Bionic Chip": true,
      "ProMotion Display": true,
      "Titanium Frame": true,
    },
    insights: {
      popularity: "Very High",
      priceTrend: "Stable",
      demand: "Extreme",
      marketShare: "28%",
    },
    reviews: [
      {
        user: "AppleFan123",
        rating: 4.8,
        comment: "Best iPhone yet",
        date: "2024-03-18",
      },
    ],
  },
  {
    brand: "OnePlus",
    model: "12 Pro3",
    category: "electronics",
    features: {
      "Snapdragon 8 Gen 3": true,
      "100W Fast Charging": true,
      "LTPO AMOLED": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "15%",
    },
    reviews: [
      {
        user: "SpeedMaster",
        rating: 4.6,
        comment: "Blazing fast performance",
        date: "2024-03-09",
      },
    ],
  },
  {
    brand: "Zara",
    model: "Premium Wool Coat",
    category: "fashion",
    features: {
      "Water Resistant": true,
      "Italian Wool": true,
      "Detachable Hood": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Seasonal",
      demand: "Medium",
      marketShare: "8%",
    },
    reviews: [
      {
        user: "Fashionista22",
        rating: 4.3,
        comment: "Perfect winter coat",
        date: "2024-02-12",
      },
    ],
  },
  {
    brand: "Wayfair",
    model: "Smart Sectional Sofa",
    category: "home",
    features: {
      "Modular Design": true,
      "USB Charging": true,
      "Stain Resistant": true,
    },
    insights: {
      popularity: "Growing",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "12%",
    },
    reviews: [
      {
        user: "HomeMaker",
        rating: 4.4,
        comment: "Excellent modular options",
        date: "2024-01-25",
      },
    ],
  },
  {
    brand: "Neutrogena",
    model: "Hydro Boost Serum",
    category: "beauty",
    features: {
      "Hyaluronic Acid": true,
      "Oil-Free": true,
      "Fragrance Free": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "18%",
    },
    reviews: [
      {
        user: "SkinCarePro",
        rating: 4.5,
        comment: "Great hydration",
        date: "2024-03-14",
      },
    ],
  },
  {
    brand: "Decathlon",
    model: "MTB 900 Mountain Bike",
    category: "sports",
    features: {
      '27.5" Wheels': true,
      "21-Speed": true,
      "Aluminum Frame": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Decreasing",
      demand: "Medium",
      marketShare: "9%",
    },
    reviews: [
      {
        user: "TrailRider",
        rating: 4.2,
        comment: "Good entry-level bike",
        date: "2024-02-28",
      },
    ],
  },

  // myCompanyProducts entries with isMyCompanyProduct: true
  {
    brand: "MyCompany",
    model: "XPhone 15",
    category: "electronics",
    features: {
      "Holographic Display": true,
      "Neural Processor": true,
      "200W Fast Charging": true,
    },
    insights: {
      popularity: "Growing",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "8%",
    },
    reviews: [
      {
        user: "EarlyAdopter",
        rating: 4.3,
        comment: "Innovative display tech",
        date: "2024-03-20",
      },
    ],
  },
  {
    brand: "MyCompany",
    model: "XPhone 19",
    category: "electronics",
    features: {
      "Holographic Display 2": true,
      "Neural Processor": true,
      "200W Fast Charging": true,
    },
    insights: {
      popularity: "Growing",
      priceTrend: "Decreasing",
      demand: "High",
      marketShare: "8%",
    },
    reviews: [
      {
        user: "EarlyAdopter",
        rating: 4.3,
        comment: "Innovative display tech",
        date: "2024-03-20",
      },
    ],
  },
  {
    brand: "MyCompany",
    model: "EcoWear Jacket",
    category: "fashion",
    features: {
      "Recycled Materials": true,
      Waterproof: true,
      "Hidden Pockets": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Stable",
      demand: "Growing",
      marketShare: "6%",
    },
    reviews: [
      {
        user: "EcoWarrior",
        rating: 4.5,
        comment: "Love the sustainable focus",
        date: "2024-02-15",
      },
    ],
  },
  {
    brand: "MyCompany",
    model: "NanoClean Vacuum",
    category: "home",
    features: {
      "Self-Emptying": true,
      "Laser Mapping": true,
      "180min Runtime": true,
    },
    insights: {
      popularity: "High",
      priceTrend: "Stable",
      demand: "High",
      marketShare: "11%",
    },
    reviews: [
      {
        user: "CleanFreak",
        rating: 4.7,
        comment: "Best cleaning automation",
        date: "2024-03-01",
      },
    ],
  },
  {
    brand: "MyCompany",
    model: "BioLumin Serum",
    category: "beauty",
    features: {
      "Vitamin C": true,
      "Hyaluronic Acid": true,
      "Cruelty Free": true,
    },
    insights: {
      popularity: "Growing",
      priceTrend: "Stable",
      demand: "Medium",
      marketShare: "5%",
    },
    reviews: [
      {
        user: "BeautyBlogger",
        rating: 4.4,
        comment: "Visible brightening effect",
        date: "2024-03-10",
      },
    ],
  },
  {
    brand: "MyCompany",
    model: "ProFlex Yoga Mat",
    category: "sports",
    features: {
      "Eco-Friendly": true,
      "6mm Thick": true,
      "Alignment Markers": true,
    },
    insights: {
      popularity: "Medium",
      priceTrend: "Stable",
      demand: "Growing",
      marketShare: "7%",
    },
    reviews: [
      {
        user: "YogaMaster",
        rating: 4.6,
        comment: "Perfect grip and cushion",
        date: "2024-02-22",
      },
    ],
  },
];

/**
 * COMPETITIVE ANALYSIS DATABASE SCHEMA v2
 * Key Relationships:
 * - Categories contain Products and Competitors
 * - Products can have multiple Competitors through ProductCompetitors
 * - MyCompany products (is_my_company=true) use ProductCompetitors for comparisons
 * - Competitor products (is_my_company=false) have direct competitor_id
 */

// ==================== CATEGORIES TABLE ====================
export const categories = [
  {
    id: "CAT_1",
    name: "electronics",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "CAT_2",
    name: "fashion",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

// ==================== COMPETITORS TABLE ====================
export const competitors = [
  {
    id: "COMP_1",
    name: "Apple",
    category_id: "CAT_1",
    created_at: "2020-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "COMP_2",
    name: "Samsung",
    category_id: "CAT_1",
    created_at: "2020-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

// ==================== PRODUCTS TABLE (UPDATED) ====================
export const products = [
  {
    id: "PROD_1",
    name: "XPhone 15",
    category_id: "CAT_1",
    is_my_company: true,
    price: 899,
    created_at: "2023-06-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
  },
  {
    id: "PROD_2",
    name: "iPhone 15 Pro",
    category_id: "CAT_1",
    competitor_id: "COMP_1",
    is_my_company: false,
    price: 999,
    created_at: "2023-05-01T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "PROD_3",
    name: "Galaxy S24",
    category_id: "CAT_1",
    competitor_id: "COMP_2",
    is_my_company: false,
    price: 1099,
    created_at: "2023-05-15T00:00:00Z",
    updated_at: "2024-01-20T00:00:00Z",
  },
];

// ==================== PRODUCT_COMPETITORS TABLE (NEW) ====================
export const product_competitors = [
  {
    product_id: "PROD_1", // MyCompany product
    competitor_id: "COMP_1", // Apple
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    product_id: "PROD_1", // MyCompany product
    competitor_id: "COMP_2", // Samsung
    created_at: "2024-01-01T00:00:00Z",
  },
];

// ==================== FEATURES TABLE ====================
export const features = [
  {
    id: "FEAT_1",
    product_id: "PROD_1",
    key: "Holographic Display",
    value: true,
    created_at: "2023-06-01T00:00:00Z",
  },
  {
    id: "FEAT_2",
    product_id: "PROD_1",
    key: "Neural Processor",
    value: true,
    created_at: "2023-06-01T00:00:00Z",
  },
];

// ==================== INSIGHTS TABLE ====================
export const insights = [
  {
    id: "INS_1",
    product_id: "PROD_1",
    popularity: "High",
    price_trend: "Stable",
    demand: "Growing",
    market_share: "8%",
    created_at: "2023-06-01T00:00:00Z",
    updated_at: "2024-02-01T00:00:00Z",
  },
];

// ==================== REVIEWS TABLE ====================
export const reviews = [
  {
    id: "REV_1",
    product_id: "PROD_1",
    user: "EarlyAdopter",
    rating: 4.3,
    comment: "Innovative display tech",
    date: "2024-03-20T00:00:00Z",
    created_at: "2024-03-20T00:00:00Z",
  },
];
