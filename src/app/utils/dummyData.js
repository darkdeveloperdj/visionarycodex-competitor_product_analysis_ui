/**
 * COMPETITIVE ANALYSIS DATABASE SCHEMA v1
 */
export const fetchDummyCategory = () => ({
  success: true,
  message: "Dummy category fetch successful",
  categories: [
    { id: 1, categoryName: "electronics" },
    { id: 2, categoryName: "fashion" },
    { id: 3, categoryName: "home" },
    { id: 4, categoryName: "beauty" },
    { id: 5, categoryName: "sports" },
  ],
});

export const fetchCompetitorsDummy = () => ({
  success: true,
  message: "Dummy competitors fetch successful",
  competitors: [
    {
      id: 1,
      categoryName: "electronics",
      competitorName: "Apple",
      founded: "1976",
      headquarters: "Cupertino, USA",
      industry: "Technology",
      revenue: "$274B",
      officialWebsite: "https://www.apple.com",
    },
    {
      id: 2,
      categoryName: "electronics",
      competitorName: "Samsung",
      founded: "1938",
      headquarters: "Seoul, South Korea",
      industry: "Electronics",
      revenue: "$200B",
      officialWebsite: "https://www.samsung.com",
    },
    {
      id: 3,
      categoryName: "electronics",
      competitorName: "Google",
      founded: "1998",
      headquarters: "Mountain View, USA",
      industry: "Technology",
      revenue: "$182B",
      officialWebsite: "https://www.google.com",
    },
    {
      id: 4,
      categoryName: "electronics",
      competitorName: "Xiaomi",
      founded: "2010",
      headquarters: "Beijing, China",
      industry: "Consumer Electronics",
      revenue: "$37B",
      officialWebsite: "https://www.mi.com",
    },
    {
      id: 5,
      categoryName: "electronics",
      competitorName: "OnePlus",
      founded: "2013",
      headquarters: "Shenzhen, China",
      industry: "Consumer Electronics",
      revenue: "$1B",
      officialWebsite: "https://www.oneplus.com",
    },
  ],
});

// export const fetchCompetitorProductsDummy = () => ({
//   success: true,
//   message: "Dummy products fetch successful",
//   products: [
//     {
//       id: 1,
//       competitorName: "Apple",
//       isMyCompanyProduct: false,
//       model: "iPhone 15 Plus",
//       features: {
//         chip: "A16 Bionic Chip",
//         display: "Super Retina XDR Display",
//         protection: "Ceramic Shield",
//         battery: "Larger Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "Face ID",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "Siri",
//         batteryLife: "10 hours",
//         weight: "1.2 kg",
//       },
//       insights: {
//         popularity: "Very High",
//         priceTrend: "Stable",
//         demand: "Extreme",
//         marketShare: "30%",
//       },
//       reviews: {
//         user: "AppleFan123",
//         comment: "Best iPhone yet",
//         date: "2024-03-18",
//       },
//       details: {
//         price: 1099,
//         userRating: "4.8/5",
//         numberOfReviews: 1200,
//         specialFeatures:
//           "Face ID, Ceramic Shield, Wireless Charging, Super Retina XDR Display",
//         reviewSentiment: {
//           positive: "70%",
//           neutral: "20%",
//           negative: "10%",
//         },
//         featureImportance: {
//           price: 0.8,
//           userRating: 0.9,
//           specialFeatures: 0.85,
//         },
//       },
//     },
//     {
//       id: 2,
//       competitorName: "Samsung",
//       isMyCompanyProduct: false,
//       model: "Galaxy S23 Ultra",
//       features: {
//         chip: "Exynos 2200",
//         display: "Dynamic AMOLED 2X",
//         protection: "Gorilla Glass Victus",
//         battery: "Large Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "Fingerprint Sensor",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "Bixby",
//         batteryLife: "10 hours",
//         weight: "1.2 kg",
//       },
//       insights: {
//         popularity: "High",
//         priceTrend: "Slightly Rising",
//         demand: "High",
//         marketShare: "25%",
//       },
//       reviews: {
//         user: "SamsungGuru",
//         comment: "Impressive performance and display",
//         date: "2024-04-05",
//       },
//       details: {
//         price: 999,
//         userRating: "4.6/5",
//         numberOfReviews: 950,
//         specialFeatures:
//           "Fingerprint Sensor, Gorilla Glass Victus, Wireless Charging, Dynamic AMOLED 2X, Bixby",
//         reviewSentiment: {
//           positive: "65%",
//           neutral: "25%",
//           negative: "10%",
//         },
//         featureImportance: {
//           price: 0.8,
//           userRating: 0.9,
//           specialFeatures: 0.85,
//         },
//       },
//     },
//     {
//       id: 3,
//       competitorName: "Google",
//       isMyCompanyProduct: false,
//       model: "Pixel 8 Pro",
//       features: {
//         chip: "Tensor G3 Chip",
//         display: "Smooth OLED Display",
//         protection: "Gorilla Glass",
//         battery: "Long-lasting Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "In-display Fingerprint",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: false,
//         dualSim: false,
//         assistant: "Google Assistant",
//         batteryLife: "10 hours",
//         weight: "1.2 kg",
//       },
//       insights: {
//         popularity: "Rising",
//         priceTrend: "Stable",
//         demand: "Moderate",
//         marketShare: "15%",
//       },
//       reviews: {
//         user: "PixelLover",
//         comment: "Great camera and clean Android experience",
//         date: "2024-02-28",
//       },
//       details: {
//         price: 799,
//         userRating: "4.5/5",
//         numberOfReviews: 700,
//         specialFeatures:
//           "In-display Fingerprint, Smooth OLED Display, Google Assistant",
//         reviewSentiment: {
//           positive: "60%",
//           neutral: "30%",
//           negative: "10%",
//         },
//         featureImportance: {
//           price: 0.75,
//           userRating: 0.85,
//           specialFeatures: 0.8,
//         },
//       },
//     },
//     {
//       id: 4,
//       competitorName: "Xiaomi",
//       isMyCompanyProduct: false,
//       model: "Redmi Note 12 Pro",
//       features: {
//         chip: "Snapdragon 732G",
//         display: "AMOLED Display",
//         protection: "Gorilla Glass 5",
//         battery: "5000mAh Battery",
//         waterResistance: false,
//         wirelessCharging: false,
//         security: "Fingerprint Sensor",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "MIUI Assistant",
//         batteryLife: "12 hours",
//         weight: "1.2 kg",
//       },
//       insights: {
//         popularity: "Moderate",
//         priceTrend: "Falling",
//         demand: "High",
//         marketShare: "10%",
//       },
//       reviews: {
//         user: "XiaomiFan",
//         comment: "Great value for money",
//         date: "2024-03-10",
//       },
//       details: {
//         price: 349,
//         userRating: "4.4/5",
//         numberOfReviews: 800,
//         specialFeatures:
//           "AMOLED Display, Gorilla Glass 5, Fingerprint Sensor, 5000mAh Battery",
//         reviewSentiment: {
//           positive: "60%",
//           neutral: "30%",
//           negative: "10%",
//         },
//         featureImportance: {
//           price: 0.7,
//           userRating: 0.8,
//           specialFeatures: 0.75,
//         },
//       },
//     },
//     {
//       id: 5,
//       competitorName: "OnePlus",
//       isMyCompanyProduct: false,
//       model: "OnePlus 11",
//       features: {
//         chip: "Snapdragon 8 Gen 2",
//         display: "Fluid AMOLED Display",
//         protection: "Gorilla Glass Victus",
//         battery: "4500mAh Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "In-display Fingerprint",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "OnePlus Assistant",
//         batteryLife: "11 hours",
//         weight: "1.15 kg",
//       },
//       insights: {
//         popularity: "High",
//         priceTrend: "Stable",
//         demand: "Moderate",
//         marketShare: "8%",
//       },
//       reviews: {
//         user: "OnePlusUser",
//         comment: "Smooth performance and clean software",
//         date: "2024-03-22",
//       },
//       details: {
//         price: 699,
//         userRating: "4.5/5",
//         numberOfReviews: 900,
//         specialFeatures:
//           "Fluid AMOLED Display, In-display Fingerprint, Gorilla Glass Victus, Fast Charging",
//         reviewSentiment: {
//           positive: "67%",
//           neutral: "25%",
//           negative: "8%",
//         },
//         featureImportance: {
//           price: 0.75,
//           userRating: 0.85,
//           specialFeatures: 0.8,
//         },
//       },
//     },
//     {
//       id: 6,
//       competitorName: "TechNova",
//       isMyCompanyProduct: true,
//       model: "Nova Pro X",
//       features: {
//         chip: "NovaChip Pro",
//         display: "Quantum OLED",
//         protection: "Titanium Shield",
//         battery: "5000mAh Fast Charge Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "NovaSecure ID",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "Nova Assistant Pro",
//         batteryLife: "12 hours",
//         weight: "1.1 kg",
//       },
//       insights: {
//         popularity: "Very High",
//         priceTrend: "Rising",
//         demand: "High",
//         marketShare: "40%",
//       },
//       reviews: {
//         user: "TechNovaLover",
//         comment: "Innovative design and performance",
//         date: "2024-04-10",
//       },
//       details: {
//         price: 799,
//         userRating: "4.7/5",
//         numberOfReviews: 1100,
//         specialFeatures: "Quantum OLED, Titanium Shield, Fast Charging",
//         reviewSentiment: {
//           positive: "72%",
//           neutral: "20%",
//           negative: "8%",
//         },
//         featureImportance: {
//           price: 0.85,
//           userRating: 0.9,
//           specialFeatures: 0.88,
//         },
//       },
//     },
//     {
//       id: 7,
//       competitorName: "TechNova",
//       isMyCompanyProduct: true,
//       model: "Nova Edge",
//       features: {
//         chip: "NovaChip Edge",
//         display: "Infinity AMOLED",
//         protection: "Reinforced Glass",
//         battery: "4800mAh Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "Edge Secure ID",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "Nova Edge Assistant",
//         batteryLife: "11 hours",
//         weight: "1.05 kg",
//       },
//       insights: {
//         popularity: "High",
//         priceTrend: "Stable",
//         demand: "Moderate",
//         marketShare: "35%",
//       },
//       reviews: {
//         user: "EdgeFan",
//         comment: "Sleek design and reliable performance",
//         date: "2024-04-08",
//       },
//       details: {
//         price: 699,
//         userRating: "4.6/5",
//         numberOfReviews: 950,
//         specialFeatures:
//           "Infinity AMOLED, Reinforced Glass, Fast Wireless Charging",
//         reviewSentiment: {
//           positive: "70%",
//           neutral: "25%",
//           negative: "5%",
//         },
//         featureImportance: {
//           price: 0.8,
//           userRating: 0.85,
//           specialFeatures: 0.82,
//         },
//       },
//     },
//     {
//       id: 8,
//       competitorName: "TechNova",
//       isMyCompanyProduct: true,
//       model: "Nova Max",
//       features: {
//         chip: "NovaChip Max",
//         display: "UltraCrystal Display",
//         protection: "Carbon Fiber Shield",
//         battery: "5500mAh Ultra Battery",
//         waterResistance: true,
//         wirelessCharging: true,
//         security: "Max Secure ID",
//         bluetooth: true,
//         wifi: true,
//         gps: true,
//         nfc: true,
//         dualSim: true,
//         assistant: "Nova Max Voice",
//         batteryLife: "13 hours",
//         weight: "1.2 kg",
//       },
//       insights: {
//         popularity: "Moderate",
//         priceTrend: "Falling",
//         demand: "High",
//         marketShare: "38%",
//       },
//       reviews: {
//         user: "MaxUser",
//         comment: "Outstanding battery life and display quality",
//         date: "2024-04-09",
//       },
//       details: {
//         price: 899,
//         userRating: "4.8/5",
//         numberOfReviews: 1200,
//         specialFeatures:
//           "UltraCrystal Display, Carbon Fiber Shield, Ultra Battery",
//         reviewSentiment: {
//           positive: "75%",
//           neutral: "20%",
//           negative: "5%",
//         },
//         featureImportance: {
//           price: 0.9,
//           userRating: 0.92,
//           specialFeatures: 0.88,
//         },
//       },
//     },
//   ],
// });

export const fetchCompetitorProductsDummy = () => ({
  success: true,
  message: "Products fetched successfully",
  products: [
    {
      id: 1,
      isMyCompanyProduct: true,
      competitorName: "Apple",
      model: "iPhone X 64GB Space Gray Locked",
      details: {
        price: ["$40.82"],
        userRating: "4.4",
        numberOfReviews: "25,241",
        specialFeatures: [],
        reviewSentiment: {
          positive: "84.51329186640783%",
          negative: "9.975832970167584%",
          neutral: "5.510875163424587%",
        },
        featureImportance: {
          price: 0.7,
          userRating: 0.2,
          specialFeatures: 0.1,
        },
      },
      insights: {
        popularity: "High",
        priceTrend:
          "Unable to determine price trend from the given data. Requires external web search.",
        demand: "High",
        Availability: "Available at Amazon.com",
      },
      reviews: [
        {
          user: "CherryNP",
          rating: 1,
          comment:
            "It's locked to which carrier? Is this refurbished or brand new?",
          date: "Reviewed in the United States on December 24, 2024",
        },
      ],
      features: {
        chip: "Apple A11 Bionic (10 nm)",
        display: "1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)",
        battery: "Li-Ion 2716 mAh, non-removable (10.35 Wh)",
        waterResistance: "IP67",
        wirelessCharging: "Not Available",
        security: "Face",
        bluetooth: "5.0, A2DP, LE",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
        gps: true,
        nfc: true,
        dualSim: false,
        assistant: "Siri",
        weight: "174 g (6.14 oz)",
        protection: "Scratch-resistant glass",
        thumbnail:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgb_57i9pIhtvlx1DFowyuJHMvtv8HF7XHcMiICzuOzZjZYT-eAuphMZuHosUQM1ffZhZ5Js0Nd3Qzi1wUl1Hg0-R9hFf4NcSHXKzacNpwq0sqL5q6hkpI7w&usqp=CAY",
      },
    },
    {
      id: 2,
      isMyCompanyProduct: false,
      competitorName: "Google",
      model: "Pixel Fold Smartphone",
      details: {
        price: ["$574.95"],
        userRating: "4.3",
        numberOfReviews: "212",
        specialFeatures: [],
        reviewSentiment: {
          positive: "83.49056603773585%",
          negative: "11.79245283018868%",
          neutral: "4.716981132075472%",
        },
        featureImportance: {
          price: 0.6,
          userRating: 0.3,
          specialFeatures: 0.1,
        },
      },
      insights: {
        popularity: "High",
        priceTrend: "Stable",
        demand: "Medium",
        Availability: "Available at Amazon.com",
      },
      reviews: [
        {
          user: "MARIA ",
          rating: 5,
          comment:
            "Hands down!!! its GOOGLE!!! their inventors are ingenious!! For one the price of a Google  pixal is far superior than samsung,in my opinion (sry sammy)The entire phone is solid all the components work well, it's structured and built to last. well you could feel it when you hold it in your hand, it feels solid and great as you open up the fold  it becomes a mini a mini computer. Zoom ability, color and camera are impeccable  awesome.  How convenient is that, it's BETTER THAN  Mega Galaxy what to look for in a Google fold pixel phone , when you close that fold it's closed together and it stays together there's no Gap., however  with the Samsung fold  there's a gap, it's skimpy in width .width is to narrow and length to long making ut clumzy abd awkard  to hold. the speed in goggle pixel fold is super greatest, speed on the Google pixel, suprisingly are no advertisements . Anazing. I got a 512 GB it was under $600.00Unlocked, cell phone providers can't make $$$ off me or my purchase. Or over charge me as becoming prisioner in their 2yr contract. It brand new. I purchased my google pixel fold  on Amazon as opposed to t mobile  in the store, will they talk you into buying a phone that isn't really free, it's just all a bunch of sales bologna.  for example T-Mobile or Verizon or aby carrior not only arw they' going to charge you for the phone, that you weee tild was free , but you're going to be paying twice as much.it To be fair, Samsung does make a respectable product, however  Google is far superior and has got this one!!  the phone is great they also make a third party case, with a with a keyboard and it's relatively not that expensive and it will work with the Google pixel mini or Google pixel Android. I can't tell you how happy I am I took one look at the Samsung fold and thought \"Oh this is not for me\". because it doesn't feel right the Samsung feels too tall and too thin or to Tall and very narrow. the Google pixel fits perfectly and it's it's solid. Better color and better camera and  speed.5G 512GB  I mean you can't go wrong with the Google pixel phone it's the best thing I've seen. I wish I would have known this but way back when. so if you're in the market for a new cell phone I would highly recommend the Google pixel mini or six whatever it's a Google pixel Android fold it's not that hard  to type I thought it would be difficult, but I use a swipe and it's perfectly fine, it's easy I make less spelling errors on that than a regular typewriter.so it's up to you, but I'm with you, Jyst like you I want to spend  money wisely Google pixel fold is the way to go. Choose wisely.Heart 2 heart",
          date: "Reviewed in the United States on November 20, 2024",
        },
        {
          user: "thathoppergirl",
          rating: 5,
          comment:
            "LOVE+THIS+PHONEI've wanted the fold since it came out but couldn't justify spending $1,500.00 so I spent $500.00 with this seller.  I've never had a refurbished phone before so I didn't know what to expect but when it arrived it looked absolutely brand new!  Not a scratch on it.  This is my 3rd or 4th pixel and my only gripe has always been the battery life and the fold is no different but its so worth it!  Thanks to the seller who made this phone affordable and sold me a quality product in perfect condition.",
          date: "Reviewed in the United States on March 21, 2025",
        },
        {
          user: "JMartin",
          rating: 1,
          comment:
            "I bought this renewed phone as it claim to be in excellent condition. Upon opening the phone it has a large scratch on the back where the camera is at. Phone came with a lot of dust and looks like sand. The phone was already signed in with a user. I am very disappointed on the quality of the phone. I was expecting the phone to have no scratches or not to be dirty almost like new.",
          date: "Reviewed in the United States on December 31, 2024",
        },
        {
          user: "Raiden Smith",
          rating: 4,
          comment:
            "The phone is great, I had a z fold prior to this, I definitely like that this is thinner and has a MUCH more useable front screen. However, this is an issue with most of these phones, but the inner screen does not open all the way, which is normally fine, but sometimes in the wrong lighting it is very noticeable on the crease. Otherwise, battery has been great, performance is fine, and the price was right.",
          date: "Reviewed in the United States on March 9, 2025",
        },
        {
          user: "tdeckard2000",
          rating: 5,
          comment:
            "I've had my Pixel Fold now for about two months. I switched from an iPhone 13 Pro Max after being an iPhone user since the iPhone 3g. Something about a foldable was just too cool not to try. I got the phone for around $600 shipped to my door. I bought it as \"Refurbished - Excellent\", and that's exactly what I got. I couldn't tell if the phone was ever even used prior to me getting it.I've been using it without a case, just a glass screen protector on the front and one over the camera. The front glass does seem to micro scratch pretty easily, hence why I needed up with the screen protector.The battery life and charging speeds were a concern after reading about them, but I don't have any issues with either, period. I didn't charge the phone last night and I'm on it now, typing this review, with 30% battery life. If I had to compare, I'd say my iPhone had better battery life, but it isn't that noticeable and the Pro Max models are known for their exceptional battery life anyway.So what issues have I had?I mentioned the front display scratching easily which is a bummer, but I think they're using glass that is more resistant to shatter, so it's softer.Google Assistant. I miss Siri, and boy was Siri frustrating. I assumed Google's assistant was miles ahead, but not even close. Siri is more usable and I also hate saying Google to summons the assistant. Shouting a brand name just feels dirty. I just don't summons the assistant by voice anymore. Gemini is a step up, but still requires saying Hey Google. I thought android would allow more customization like changing the wake word, but no sir.The dang google search bar at the bottom of the screen. There's a search bar permanently at the bottom of the screen with Google's logo prominently across it. You cant get rid of it. I thought Android was known for its customization, but I never had an Apple logo plastered to my screen 24/7. The only thing you can do is replace the launcher with a third party one. I couldn't find one I liked. Lawnchair was the closest that kinda supports folding phones.Apple Music. You cannot ask Gemini to play a specific song. It doesn't currently support apple music integration. You'll also want to kill the apple music app from running in the background after you're done using it. Otherwise you'll notice excessive battery drain. It needs to be able to run in the background to continue playing after locking the phone.It doesn't fold open completely flat. It's true. I wish it snapped open, but it's a V1 product.Heaviness. The phone is a bit on the heavy side. I don't notice it too much in the pocket, but using it while folded in the closed position can feel a bit heavy after awhile. Using it while open feels great. The thickness while closed (again, with no case) is almost exactly the thickness of my iPhone 13 Pro Max with its case, a pretty thin case too.Overall I love it and I'm keeping it. It'a a cool piece of tech. And for the price, I don't have to worry too much about something happening to it, though I do take good care of it. I use it opened probably 60% of the time. I use it with a PS2 emulator, all the emulator really, and played through Simpsons Hit and run already. As a bonus, the feeling of it snapping closed is satisfying.",
          date: "Reviewed in the United States on January 11, 2025",
        },
        {
          user: "Daniel Vincent",
          rating: 5,
          comment:
            "Great phone. Received in excellent condition.  It was far above what I expected. I didn't see any imperfections or scratches. A great deal!",
          date: "Reviewed in the United States on March 12, 2025",
        },
        {
          user: "Raxcental Ruthenta",
          rating: 5,
          comment:
            "I bought this Google Pixel Fold renewed. It was listed as \"Good\" condition. I'd like to say that the seller has under rated the condition of the device. This phone is in excellent condition with no issues. No dings or scratches on the body or on either of the displays. Battery life is like new. I'm very happy with my purchase. :)",
          date: "Reviewed in the United States on January 21, 2025",
        },
        {
          user: "Honest Reviewer",
          rating: 3,
          comment:
            "The Phone is in preem condition. Loved every second of using it. Can't even tell that it is a refurbished model, but the problem is that they sent me LOCKED phone instead of an unlocked one as advertised. Took an entire week for the phone to be delivered and now I have to maybe go through the same routine again for another one to be sent. Quite disappointing really.",
          date: "Reviewed in the United States on November 13, 2024",
        },
        {
          user: "Giovanni DelgadoGiovanni Delgado",
          rating: 4,
          comment:
            "This is my first foldable smartphone (coming from a Pixel 6a) and I have to say this device feels premium (without a case on).Let's get the flaws (cosmetics not user experience) out of the way:- Device had dust between the hinge on both sides, but primarily near the outer screen. Couldn't fully remove it, but case does a decent job to hide it.- Hinge itself contains minor scratches if you look very closely.- Inner screen has small indentation marks (small circles) near the center right of the screen. This can only be seen when the screen is off and in direct lighting (hard to capture on camera due to reflection).- Camera bar has minor scratches and a spot that doesn't fully wipe away clean (see photo).Other than that, device functions well enough for my needs.Now for the positives:-Outer screen was in pristine condition with no visible scratches.- Hinge mechanism feels sturdy enough (only had trouble opening it the first time due to being unfamiliar with how to open or close properly).- Thermals are okay. Haven't experienced any over heating. The device runs a bit warm when doing something for longer periods of time.- Performance is smooth given the 12GB of RAM, 120Hz screen, and Tensor G2 chip.- Cameras work well too, but I would have to do more testing. No issues with focusing or any of the sensors.- Small outer screen is a plus. Reminds me of my Pixel 3 and Pixel 4.I bought my refurbished (excellent condition) from SoonerSoft. I wish the device was in slightly better condition considering how much I paid for (~$600 flat), but it is what it is.Can't comment on battery life just yet, since I haven't gotten a chance to fully test the phone (I was waiting for the case to arrive). As for charging, I usually charge my devices overnight using adaptive charging. Currently charging it wired, but will start to revert back to wireless charging.",
          date: "Reviewed in the United States on November 1, 2024",
        },
        {
          user: "Diana NDiana N",
          rating: 4,
          comment:
            "The phone came as expected. I was kind of scared because of the reviews on here. I went with a trusted seller with many reviews. I am satisfied with my purchase. I came from a iphone 11 pro max. I bought a screen protector and I applied it wrong but now I figured it out and the screen is beautiful. I do feel like the phone is going to last a while and the battery life is great. Speakers are loud. I am happy with my purchase hopefully next year the newer 9 fold is the same price range.",
          date: "Reviewed in the United States on January 11, 2025",
        },
      ],
      features: {
        chip: "Google Tensor G2 (5 nm)",
        display: "1840 x 2208 pixels (~378 ppi density)",
        battery: "Li-Po 4821 mAh",
        waterResistance: "",
        wirelessCharging: "Not Available",
        security: "Fingerprint",
        bluetooth: "5.2, A2DP, LE, aptX HD",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
        gps: true,
        nfc: true,
        dualSim: true,
        assistant: "Google Assistant",
        weight: "283 g (9.98 oz)",
        protection: "NA",
        thumbnail:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGu7yEkIkrbfXhkZx_UafpxtV2-mQ4-To5PbAy_RwUsAyqXteNV5pM655AxsVMiY0TyRVIwZrCetYOkUVU5eX39Uf71Nq5jODCQ99j7XZcDYGNxWJ07UkLog&usqp=CAY",
      },
    },
    {
      id: 3,
      isMyCompanyProduct: false,
      competitorName: "Google",
      model: "Pixel 7 128GB 5G Smartphone",
      details: {
        price: ["$309.95"],
        userRating: "4.3",
        numberOfReviews: "1,798",
        specialFeatures: [],
        reviewSentiment: {
          positive: "83.87096774193549%",
          negative: "10.845383759733036%",
          neutral: "5.2836484983314795%",
        },
        featureImportance: {
          price: 0.7,
          userRating: 0.2,
          specialFeatures: 0.1,
        },
      },
      insights: {
        popularity: "High",
        priceTrend: "Stable",
        demand: "High",
        Availability: "Available from Amazon.com",
      },
      reviews: null,
      features: {
        chip: "Google Tensor G2 (5 nm)",
        display: "1080 x 2400 pixels, 20:9 ratio (~416 ppi density)",
        battery: "Li-Ion 4355 mAh",
        waterResistance: "IP68",
        wirelessCharging: "20W wireless",
        security: "Fingerprint",
        bluetooth: "5.2, A2DP, LE, aptX HD",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
        gps: true,
        nfc: true,
        dualSim: true,
        assistant: "Google Assistant",
        weight: "197 g (6.95 oz)",
        protection: "Corning Gorilla Glass Victus",
        thumbnail:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSulA_9hRfOA_HaxBQGUnn21uob6Fs4pIHUOUq9NX6dLGp1F9_dAgOCWca2jN0XjcghdAXkO5ox39FLdbo8hntD7RVtWZYUnDCcsoUQscKx&usqp=CAY",
      },
    },
    {
      id: 4,
      isMyCompanyProduct: false,
      competitorName: "Google",
      model: "Pixel 8A 128GB OEM Unlocked",
      details: {
        price: ["$322.99"],
        userRating: "4.4",
        numberOfReviews: "246",
        specialFeatures: [],
        reviewSentiment: {
          positive: "88.21138211382113%",
          negative: "7.317073170731707%",
          neutral: "4.471544715447155%",
        },
        featureImportance: {
          price: 0.4,
          userRating: 0.3,
          specialFeatures: 0.3,
        },
      },
      insights: {
        popularity: "High",
        priceTrend:
          "No reliable price trend data available.  Need to monitor web for price fluctuations.",
        demand: "High",
        Availability: "Available at Amazon.com - Seller",
      },
      reviews: [],
      features: {
        chip: "Google Tensor G3 (4 nm)",
        display: "1080 x 2400 pixels, 20:9 ratio (~430 ppi density)",
        battery: "Li-Po 4492 mAh",
        waterResistance: "IP67",
        wirelessCharging: "5W wireless",
        security: "Fingerprint",
        bluetooth: "5.3, A2DP, LE",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual/tri-band (market/region dependent)",
        gps: true,
        nfc: true,
        dualSim: true,
        assistant: "Google Assistant",
        weight: "188 g (6.63 oz)",
        protection: "Corning Gorilla Glass 3",
        thumbnail:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmH-0WWXbRFy-rsj3i9DNwPExf361w5YnDpKUr-G7rfRFnRr-wtEO_FYwm0UBmZ0M_In1ReWofq2hjz-_0c5fx_EMh6t9CwjBQBsithpVyOeRcrWCNEH1idOo&usqp=CAY",
      },
    },
    {
      id: 5,
      isMyCompanyProduct: false,
      competitorName: "Google",
      model: "Pixel 9",
      details: {
        price: ["$790.00", "$899.00", "$809.99"],
        userRating: "4.6",
        numberOfReviews: "1,262",
        specialFeatures: [
          "5G network connectivity",
          "6.3 inches OLED display, 1080 x 2424 pixels",
          "Google Tensor G4 (4 nm)",
          "IP68 dust/water resistant",
          "Dual 50MP+48MP rear and 10.5MP front cameras",
          "5G network connectivity",
          "6.3 inches OLED display, 1080 x 2424 pixels",
          "Google Tensor G4 (4 nm)",
          "IP68 dust/water resistant",
          "Dual 50MP+48MP rear and 10.5MP front cameras",
          "Non-removable Li-Po 4700 mAh battery",
        ],
        reviewSentiment: {
          positive: "91.99683042789223%",
          negative: "4.199683042789223%",
          neutral: "3.8034865293185423%",
        },
        featureImportance: {
          price: 0.3,
          userRating: 0.4,
          specialFeatures: 0.3,
        },
      },
      insights: {
        popularity: "High",
        priceTrend: "Rising",
        demand: "High",
        Availability:
          "Available at Amazon.com - Seller, Google Store, Wireless Place, and Walmart - Seller",
      },
      reviews: [
        {
          user: "Juan Chanis",
          rating: 5,
          comment:
            "The Google Pixel 9 is hands down the best phone I’ve ever used! The performance is lightning fast, the camera takes stunning photos, and the battery life easily lasts all day. The display is bright and smooth, making everything look amazing.✅ Pros:✔️ Incredible camera – photos and videos look professional.✔️ Super smooth performance – no lag, even with multiple apps open.✔️ Long battery life – easily lasts all day.✔️ Clean & fast software – pure Android experience with no bloat.Google really knocked it out of the park with the Pixel 9! If you want the best smartphone experience, this is the one to get. Highly recommended! 📱🔥",
          date: "Reviewed in the United States on March 21, 2025",
        },
        {
          user: "D. Smith",
          rating: 5,
          comment:
            "I just switched from a Motorola phone to this and am very happy with the purchase.  This phone is not too big but has a nice solid feel to it.  It takes great photos and does everything I ask for daily use.Thank you.",
          date: "Reviewed in the United States on March 21, 2025",
        },
        {
          user: "Barry A. Goff",
          rating: 5,
          comment:
            "I had a Pixel 6 for several years until it died.  The Pixel 9 does everything I liked about the 6 and fixes the few annoyances I experienced with the 6...mainly the issue of failed fingerprint recognition.  On Pixel 9, face recognition and fingerprint recognition make for a seamless experience...the phone unlocks when I pick it up.Otherwise bright clear screen, fast response times and long battery life plus wireless charging have made this the perfect phone for me.  It also is much better than the 6 in maintaining Bluetooth connections.",
          date: "Reviewed in the United States on January 14, 2025",
        },
        {
          user: "John Doe",
          rating: 5,
          comment:
            "Bought this Pixel 9 256GB new, direct from Amazon during the early Black Friday sale. The discount was even better than Google's. Phone arrived undamaged and in working, new condition. Have had the phone for a couple of weeks. No issues so far. Upgraded from a 7 year old Moto G 5. My review is skewed by my experience that is limited to budget phones.The squared edges does get some getting used to. Screen looks good, glass doesn't smear too quickly. Audio, connection, web browsing speed are satisfactory. Camera is good. Wish there was a 3.5mm audio jack and a microSD card slot like my previous phones. Phone surface is slippery to hold without a rubbery case. Haven't had a chance to try all the AI features. Haven't experienced overheating or slow charging that other people have mentioned. But I do not play mobile games, and I use an Anker 25W charger.As a preferer of smaller phones, the 6\" height of this Pixel 9 is the maximum I'd like. It is also heaver than I'm used to. I couldn't find any budget phones I liked that were 6\" or smaller, and the price is out of my normal target range. But the big Black Friday discount, and the 7 years of promised software support from Google, were some of the reasons for my purchase.",
          date: "Reviewed in the United States on December 10, 2024",
        },
        {
          user: "JuiceDidit",
          rating: 4,
          comment:
            "So, I went from a Pixel 6 pro to the Pixel 9.  I see improvements in performance and in battery life.  Camera is really good. But, my biggest beef with the Pixels is that the speaker phone is SO quiet!! Why? My old Xiaomi 10T Lite has WAY better speaker phone.  Why is no one complaining about this as an inherent deficiency with Pixel phones? I drive a lot and sometimes don't want to use bluetooth in the car, and also out in the city I need a speaker phone, and it's just SO quiet!",
          date: "Reviewed in the United States on March 17, 2025",
        },
        {
          user: "Sharaz Nabi",
          rating: 5,
          comment:
            "The Pixel 9 is the best phone for anyone looking for a compact device, as most phones these days feel too large in hand. The camera is excellent for everyday photography, with Google's software making casual shots effortless and consistently impressive.Battery life easily lasts a full day, providing around 5-6 hours of screen time, primarily for checking emails, social media, and taking a few photos.I got it during a sale, which made it a great value for money. The design looks premium and stands out from other Android devices. The haptic feedback is top-notch, enhancing the overall user experience.",
          date: "Reviewed in the United States on December 3, 2024",
        },
        {
          user: "AG",
          rating: 5,
          comment:
            "Reviewing after switching from pixel 6a.I like 9's front design more. I thought the round camera deisgn would look vulgar and too much, but appears it's so only in the pictures and it looks even better than older pixels'. However, I didn't like the back glass, it's slippery, I'm afraid to touch the phone without a case.Battery life is good, the same as pixel 6a's to me. Functionality is perfect so far. Phone unlockability could be improved, it doesn't recognise my finger sometimes and my face during certain lights, but it's not a major issue to me.The camera quality is no doubt excellent, however the back camera's colors could be more \"alive\" and have better contrast.",
          date: "Reviewed in the United States on December 20, 2024",
        },
        {
          user: "Marlon Parini Montero",
          rating: 5,
          comment:
            "I had the Pixel 7 before and felt great change,Battery is better and there is a great upgrade related to face unlock and fingerprint reader.",
          date: "Reviewed in the United States on March 3, 2025",
        },
        {
          user: "W",
          rating: 5,
          comment:
            "I bought the Pixel 9. It's a small, powerful phone with a weird bulging Camra/Flashlight area. It only comes with a USB C cable and a pin to remove/add your physical sim card.  It does not come with a charger so be prepared to spend an additional amount on Google's 45w wall adaptor.  I love that Google used minimal paper packaging. I highly recommend buying a case and screen protector to protect this investment.At the time of this writing this review, I have only played with my phone for about a week runtime.  I was disappointed this phone cannot take smooth photos of the night sky stars or even the moon (an enlarged white light source)!  However, for all other daytime casual photo taking abilities, this phone impressed me with the speed in which it takes clear, vibrant photos.  Taking screenshots of web pages is amazing since it gives me the option to take a long vertical screenshot. The fingerprint unlocking feature isn't reliable, so I don't recommend using it.  I am slightly disappointed the AI translation feature only works with videos played on the phone and the words fade out too quickly after it was spoken.  Browsing web pages on this phone is superbly faster than my 4-year-old Samsung phone. I am still learning about this phone, or more precisely google apps LOL, but I'm loving it so far.  Google Lens' ability to identify items I photograph is 95% accurate. I would recommend this phone to anyone who lives, eats, breathes and enjoys using Google apps.",
          date: "Reviewed in the United States on January 22, 2025",
        },
        {
          user: "Tracy L.",
          rating: 5,
          comment:
            "I was a little skeptical ordering a cell phone but this worked out excellently.  Learning to use a Google based phone was a bit of a challenge for me but it just takes getting used to.  The phone was a little smaller than my old phone but still a nice size.  For some reason the camera section sticks out farther than the back of the phone which seems odd, however the cases adapt for the extension.  It takes very nice pictures and has several cool editing features.",
          date: "Reviewed in the United States on March 14, 2025",
        },
      ],
      features: {
        chip: "Google Tensor G4 (4 nm)",
        display: "1080 x 2424 pixels, 20:9 ratio (~422 ppi density)",
        battery: "Li-Ion 4700 mAh",
        waterResistance: "IP68",
        wirelessCharging: "15W wireless",
        security: "Fingerprint",
        bluetooth: "5.3, A2DP, LE, aptX HD",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band",
        gps: true,
        nfc: true,
        dualSim: true,
        assistant: "Google Assistant",
        weight: "198 g (6.98 oz)",
        protection: "Corning Gorilla Glass Victus 2",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-wD5nIKAkzYvcR9TRXR0F4TRMsIIKkxa8Wc59ElfdCJ6-Pjkd6ysr1Yni_7i-CPn-itZEpb0HRn_ktIVgrJKO_qljtK60&usqp=CAY",
      },
    },
    {
      id: 6,
      isMyCompanyProduct: false,
      competitorName: "Google",
      model: "Pixel 8a",
      details: {
        price: ["$363.09", "$499.00", "$369.99"],
        userRating: "4.5",
        numberOfReviews: "2,332",
        specialFeatures: [
          "Meet Google Pixel 8a, the Google AI phone; with the incredible Pixel Camera and top-rated security features to help protect your data",
        ],
        reviewSentiment: {
          positive: "90.56603773584906%",
          negative: "5.874785591766724%",
          neutral: "3.5591766723842198%",
        },
        featureImportance: {
          price: 0.4,
          userRating: 0.3,
          specialFeatures: 0.3,
        },
      },
      insights: {
        popularity: "High",
        priceTrend: "Stable",
        demand: "High",
        Availability:
          "Available at Amazon.com, Google Store, Cell2Get, ElectronicsForce.com, Cellification.com, Overseas Electronics, Wireless Place, eBay, Newegg.com, Go Talk Wireless",
      },
      reviews: [
        {
          user: "Sharyn Roper",
          rating: 5,
          comment:
            "I was surprised to see there was no bubble wrap or shipping paper inside the box so my phone box wouldn't be bouncing around throughout shipping. But luckily the phone was unopened and undamaged.It's a bit smaller than I expected but the screen size doesn't affect my texting at all. Operating software is smooth, picture is crisp and clean; camera is incredible, it came unlocked and all I had to do was put my Boost Mobile sim card from my old phone into this one and download a boost configuration app, so it was really easy switching everything over. Just plugged one phone into another to transfer all my apps and data from my old phone..It fits nicely in my hand and my pockets.. it's not heavy so my pants aren't being weighed down by it.I must say I'm inpressed by this Pixel, I've used the 2xl and the 7 pro and always was impressed. The 8a is worth every penny.  Ppl were complaining about fongr print reader but there's an option in your settings to turn up sensitivity to your screen and specifically your fingerprint reader. But you have facial recognition so really you never will need that fingerprint reader ..But I guess to each their own.I'd suggest buying phone if you're looking to downsize.. but I can see that being a bigggggg turnoff for a lot of customers. The screen I basically 6 in.",
          date: "Reviewed in the United States on February 27, 2025",
        },
        {
          user: "Hutch Jackson.",
          rating: 5,
          comment:
            "I am a pixel 8 user and bought this pixel 8a for my mom. Side by side, the main differences between these phones come out to the pixel 8a's slightly smaller screen, the pixel 8a's slightly larger screen bezels, and the case (which are very negligible when using a protective case).While many reviews and comparisons on the specifics between the pixel 8a's and 8's screens have been done, I can tell you that to my eyes the screen quality looks virtually identical. Same goes for the camera and image quality. I think overall the pixel8's camera+images might look a little cleaner, there are some lighting's conditions where I have found that the pixel8 a's camera out performed my 8's.Ultimately, for me at-least, the biggest difference between the 8a and the 8 that I have noticed is charging speed. My pixel 8 feels like it charges almost ~1.5x-2x the speed of this 8a. Which is really nice when taking advantage of Google's 80% battery capacity limiter. Despite needing to charge my phone a little more often with 80% capacity enabled, I can routinely get ~25% if not more of my phone charged on my 20 min drive to work.Overall, this 8a and 8 have been my favorite phones I have ever purchased. The front facing and rear facing cameras are both incredible and very easy to use. Both were purchased for $400, they offer essentially the best features from flagship smartphones, and are guaranteed 7 years of feature and software updates. Samsung and other brands might offer Android phones with more powerful hardware, but as a former Galaxy user, the overall experience the pixel 8a and 8 offer feel much more premium to me.",
          date: "Reviewed in the United States on February 6, 2025",
        },
        {
          user: "Product is simple but well made. Very pleased with my purchase",
          rating: 5,
          comment:
            "Very pleased with this buy. Phone is working perfectly and battery life is good.",
          date: "Reviewed in the United States on March 2, 2025",
        },
        {
          user: "springn1",
          rating: 4,
          comment:
            "So, I've been using the 8a for about 6 months. I upgraded from the Pixel 5a due to support for that supposedly ending soon. I saw the 8a on sale so pounced. I'm mostly going to compare the 8a to the 5a. Keep in mind I really liked the 5a.8a vs 5aBattery life : 5a wins (slightly). I'm not sure how they compare on mAh but the 5a kept a charge a little longer. That's not to say the 8a won't last long. It pretty much always gets me through the day and I don't really feel held back by the difference.Screen: 8a wins (slightly). 8a is a little crisper, overall both are very good. Downside to the 8a is the screen size was a hair smaller I believe.Camera: 8a wins solidly. 5a took good pictures. 8a is even better, especially in low light. I also found the 8a AI editing feature to be handy at times.Charging: Mixed bag. 5a had a faster charging speed (although no Turbo charge). But I like having the wireless charging in the 8a which the 5a didn't have. After about 2yrs of 5a use the port was kinda loose. Wireless charging should negate that later problem of the port wearing out.Functional speed: 8a wins. 5a wasn't slow, but 8a is a little snappier.Headphone jack: 5a wins only because the 5a had one, 8a does not have a headphone jack. Most of my headphones/ear buds I use are wireless, but I still use a few wired ones. But you can get an adapter which has worked fine for the 8a.**Fingerprint reader/sensor: 5a wins by a long shot. This is the reason I removed a star. The 5a fingerprint reader on the back of the phone worked right nearly every time (except with moist fingers). The 8a in screen finger reader works more than half the time, but was is far less accurate than the 5a method. To make matters worse, I think the Pixel engineers forgot most people like to put a screen protector on. With a screen protector on the 8a, the fingerprint reader is nearly useless. (I had tried resetting the fingerprint scans to no avail). Maybe this wasn't the engineers' fault. Maybe a sales exec thought a fingerprint sensor on the screen sounded cool so demanded it while the engineers said it needed more work. But I digress.Out of frustration, I had started using the less secure face unlock which does work reasonably well. But the face unlock doesn't work well if you're wearing sunglasses or in dimly lit rooms. So, I've had to type the numerical unlock a lot more with the 8a.Overall this is a good phone at this price point that does most of what the expensive phones can do. But they need to overhaul the fingerprint sensor. Either move it to the back again or improve it so that it a) works nearly every time and b) works with most screen protectors.",
          date: "Reviewed in the United States on October 11, 2024",
        },
        {
          user: "Granny Annie",
          rating: 1,
          comment:
            "I bought this 5 days ago. The initial set up was quick. I am now on day 5 of finishing of the set up🥴  I has leftout so many things. I am having to set tons of preferences. None of them were added. Nor was any of my software transfered. That will probably take me a week to get installed and setup. I have a Nokia. So I don't know which phone is not transferring completely. My old phone is a G4 and this is a G5 and that maybe pert of the issue also, but I was told it should not be 🤷🏼‍♀️ I worked Tech Support 20 years at a college and helped students with software issues helping use their laptops, tablets. When I was in the computer lab I was uncharge of install and troubleshoot software on the colleges Macs and PC's over our Intranet. Mac's and computer graphics were my specialty. I understand and can support various devices such as laptops and tablets and normally phones and teach them the basics of how to use 95% of software programs we teach until they get to the advanced stages and while installing / transferring and setting up new phones was not list of things the college did. I was allowed sit with the students and staff and instructors and teach setup a few college related things like setting up their phones to access our network and  their emails on our servers. I wasn't supposed to spend more than 15 minutes with each student when we were busy when we were not I would teach them more. After 15 minutes I set them up with a one of our technicians assigned to help with more complicated problems as my  main job was answering the phones and helping staff with minor issues or writing them up a ticket and assigning them to technician to help with classroom issues.This install and transfer has been a royal pain and taking way long than it has with my other phones!!!Can't tell you eases of use except that it seems like everything I do needs permission to access or troubleshooting. Which is a pain especially since it is supposedly storing the passwords. Like I said I don't know which phone is responsible for all the problems, but I almost feel starting from scratch and not transferring data might have been quicker.1 month later...Took it to my brother who has programed main frame computers couldn't get it to work after several hours. He said to return it!!",
          date: "Reviewed in the United States on January 7, 2025",
        },
        {
          user: "LGP",
          rating: 5,
          comment:
            "Loving this phone already after just one day. Used to have a pixel 3 and went to a Samsung for a year. Bad choice. This pixel 8A is a much better phone and speaks my language. I mostly do text messaging and the other phone would not understand my speech. It also would not download some pictures I received or emojis. It was a used phone and that was a lesson learned too. I highly recommend the pixel 8A.",
          date: "Reviewed in the United States on March 12, 2025",
        },
        {
          user: "Mike C",
          rating: 5,
          comment:
            "3rd pixel in the family, my first. Wanted a better phone than I normally buy, wanted an android. Great camera, charges fast, long lasting battery",
          date: "Reviewed in the United States on February 6, 2025",
        },
        {
          user: "DvA",
          rating: 5,
          comment:
            "My favorite phone so far. Love the color and has been working great (Had it over a month so far).",
          date: "Reviewed in the United States on February 28, 2025",
        },
        {
          user: "mandy",
          rating: 4,
          comment:
            "Reviewed at a few days.Pros. Similar to the phone I upgraded from (pixel 3axl). Camera is fine. Speed is fine. Screen is fine.Cons. I don't like the fingerprint reader on the front. The battery takes forever to charge and seems to drain faster than my last phone. Wish the notification sounds had upgraded. I'm not a fan yet of not having a back button.",
          date: "Reviewed in the United States on March 13, 2025",
        },
        {
          user: "Jim Salter",
          rating: 5,
          comment:
            'If you want a really good phone for cheap in 2025, this is the one to get. It doesn\'t have fancy features like wireless charging that are built into the non-"a" models, and the CPU is technically a little slower... but you\'ll never notice. In practice, this is a minimal-bloat-and-shovelware Android system, delivered as Google intended it without bizarre modifications "just to make it our own" from some third party vendor.You\'ll also get security updates faster and more frequently than from third-party vendor phones, which is nice. In short, like I said: this is the phone you want this year, if you want to really nail the bang-for-the-buck meter.',
          date: "Reviewed in the United States on February 6, 2025",
        },
      ],
      features: {
        chip: "Google Tensor G3 (4 nm)",
        display: "1080 x 2400 pixels, 20:9 ratio (~430 ppi density)",
        battery: "Li-Po 4492 mAh",
        waterResistance: "IP67",
        wirelessCharging: "5W wireless",
        security: "Fingerprint",
        bluetooth: "5.3, A2DP, LE",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual/tri-band (market/region dependent)",
        gps: true,
        nfc: true,
        dualSim: true,
        assistant: "Google Assistant",
        weight: "188 g (6.63 oz)",
        protection: "Corning Gorilla Glass 3",
        thumbnail:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1mRUi8N23y1tfw5rDgpfygqXcl4VzCYkf7yUxK-tHTbKDS0o&usqp=CAY",
      },
    },
  ],
});

/**
 * COMPETITIVE ANALYSIS DATABASE SCHEMA v1
 */
