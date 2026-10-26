const imageCdnPrefix = "https://media.justflip.in/builder-brand-pages/";
const abheeImage = (suffix) =>
  `${imageCdnPrefix}${suffix.replace(/^\/+/, "")}`;

export const abheeventuresData = [
  {
    id: "abhee-codename-new-dimension",
    thumbnail: abheeImage("abhee-ventures/codename-new-dimension/thumbnail.webp"),
    title: "Abhee Codename New Dimension",
    location:
      "Gunjur, Varthur - Sarjapur Road, Off Whitefield, Bengaluru, Karnataka 560087",
    category: "new-launch",
    type: "apartment",
    priceValue: 1.19,
    price: "₹ 1.19 Cr*",
    area: "45 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,180 sq.ft.",
        price: "₹ 1.19 Cr Onwards",
        image: abheeImage("abhee-ventures/codename-new-dimension/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "2.5bhk",
        bhk: "2.5 BHK",
        area: "1,475 sq.ft.",
        price: "₹ 1.47 Cr Onwards",
        image: abheeImage("abhee-ventures/codename-new-dimension/floor-plans/2.5bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,545 - 1,645 sq.ft.",
        price: "₹ 1.55 Cr Onwards",
        image: abheeImage("abhee-ventures/codename-new-dimension/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,000 sq.ft.",
        price: "₹ 2.05 Cr Onwards",
        image: abheeImage("abhee-ventures/codename-new-dimension/floor-plans/3.5bhk-floor-plan.webp"),
      },
      {
        id: "4.5bhk",
        bhk: "4.5 BHK",
        area: "2,535 sq.ft.",
        price: "₹ 2.59 Cr Onwards",
        image: abheeImage("abhee-ventures/codename-new-dimension/floor-plans/4.5bhk-floor-plan.webp"),
      },
    ],
    possession: "December 2033",
    units: "3000",
    highlight:
      "Scotland-Themed Township with 3-Acre Golf Course, Man-Made Lake and 4 Grand Clubhouses",
    reraId: "PRM/KA/RERA/1251/308/PR/250826/008887",
    summary:
      "A Scotland-themed mega residential township featuring 2, 2.5, 3, 3.5, and 4.5 BHK luxury apartments on Varthur - Sarjapur Road in East Bengaluru.",
    description:
      "Abhee Codename New Dimension (officially registered as Abhee City Urban Glenn Phase I) by Abhee Ventures is a Scotland-inspired mega township spread across 45 acres on Varthur - Sarjapur Road. The project offers over 100+ lifestyle amenities, a 3-acre integrated golf course, a large man-made lake, four grand clubhouses spanning over 1.5 Lakh sq. ft., and seamless connectivity to Whitefield, Outer Ring Road, and ITPL.",
    amenities: [
      { name: "4 Grand Clubhouses", icon: "fa-building" },
      { name: "3-Acre Integrated Golf Course", icon: "fa-flag-golf" },
      { name: "Large Man-Made Lake", icon: "fa-water" },
      { name: "Swimming Pools", icon: "fa-water-ladder" },
      { name: "Gymnasium & Wellness Zone", icon: "fa-dumbbell" },
      { name: "Yoga Deck", icon: "fa-spa" },
      {
        name: "Padel & Pickleball Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Amphitheatre & Skating Rink", icon: "fa-masks-theater" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Landscaped Gardens & Sculpture Park", icon: "fa-tree" },
    ],
    connectivity: [
      {
        name: "Greenwood High International School",
        distance: "1 Min",
        icon: "fa-graduation-cap",
      },
      { name: "RGA Tech Park", distance: "10 Mins", icon: "fa-laptop-code" },
      { name: "Sarjapur Road Junction", distance: "10 Mins", icon: "fa-road" },
      {
        name: "Whitefield & ITPL",
        distance: "15 Mins",
        icon: "fa-building-user",
      },
      {
        name: "Outer Ring Road (ORR) IT Corridor",
        distance: "15 Mins",
        icon: "fa-car",
      },
      {
        name: "Carmelaram Railway Station",
        distance: "15 Mins",
        icon: "fa-train",
      },
      {
        name: "Phoenix Marketcity / Forum Value Mall",
        distance: "20 Mins",
        icon: "fa-bag-shopping",
      },
    ],
    images: [
      abheeImage("abhee-ventures/codename-new-dimension/gallery/exterior-view.webp"),
      abheeImage("abhee-ventures/codename-new-dimension/gallery/interior-view.webp"),
      abheeImage("abhee-ventures/codename-new-dimension/gallery/amenities.webp"),
    ],
  },
  {
    id: "abhee-celestial-city",
    thumbnail: abheeImage("abhee-ventures/abhee-celestial-city/thumbnail.webp"),
    title: "Abhee Celestial City",
    location:
      "Gunjur, Varthur - Sarjapur Road, Off Whitefield, Bengaluru, Karnataka 560087",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.55,
    price: "₹ 1.55 Cr*",
    area: "5 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,345 sq.ft.",
        price: "₹ 1.55 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-celestial-city/floor-plans/2 BHK floors and plans.png"),
      },
      {
        id: "2.5bhk",
        bhk: "2.5 BHK",
        area: "1,595 - 1,685 sq.ft.",
        price: "₹ 1.63 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-celestial-city/floor-plans/2.5bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,895 - 1,990 sq.ft.",
        price: "₹ 1.92 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-celestial-city/floor-plans/3bhk-floor-plan.webp"),
      },
    ],
    possession: "June 2029",
    units: "397",
    highlight:
      "High-Rise Luxury Living adjacent to Greenwood High School with 40+ Lifestyle Amenities & 70% Open Space",
    reraId: "PRM/KA/RERA/1251/308/PR/071123/006380",
    summary:
      "A high-rise residential community featuring premium 2, 2.5, and 3 BHK apartments located directly off Varthur - Sarjapur Road in East Bengaluru.",
    description:
      "Abhee Celestial City by Abhee Ventures is a high-rise residential project spread across 4.84 acres off Sarjapur - Varthur Road, right adjacent to Greenwood High International School. The project features 3 towers rising up to B+G+26 floors with over 70% open spaces, a fully equipped clubhouse, heated swimming pool, wellness spa, and close proximity to major IT corridors like Outer Ring Road and Whitefield.",
    amenities: [
      { name: "Fully Equipped Clubhouse", icon: "fa-building" },
      { name: "Heated Swimming Pool & Lap Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium & Outdoor Gym", icon: "fa-dumbbell" },
      { name: "Yoga Lawn & Meditation Deck", icon: "fa-spa" },
      { name: "Kids Play Area & Swing Park", icon: "fa-child" },
      {
        name: "Multi-Purpose Sports Court",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Reflexology Pathway & Landscaped Gardens", icon: "fa-tree" },
      { name: "Amphitheatre", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        name: "Greenwood High International School",
        distance: "2 Mins",
        icon: "fa-graduation-cap",
      },
      {
        name: "Inventure Academy",
        distance: "3 Mins",
        icon: "fa-graduation-cap",
      },
      {
        name: "Global Indian International School",
        distance: "5 Mins",
        icon: "fa-graduation-cap",
      },
      { name: "RGA Tech Park", distance: "10 Mins", icon: "fa-laptop-code" },
      { name: "Sarjapur Road Junction", distance: "10 Mins", icon: "fa-road" },
      {
        name: "Carmelaram Railway Station",
        distance: "15 Mins",
        icon: "fa-train",
      },
      {
        name: "Whitefield & ITPL Corridor",
        distance: "18 Mins",
        icon: "fa-building-user",
      },
    ],
    images: [
      abheeImage("abhee-ventures/abhee-celestial-city/gallery/exterior-view.webp"),
      abheeImage("abhee-ventures/abhee-celestial-city/gallery/interior-view.webp"),
      abheeImage("abhee-ventures/abhee-celestial-city/gallery/amenities.webp"),
    ],
  },
  {
    id: "abhee-aaria",
    thumbnail: abheeImage("abhee-ventures/abhee-aaria/thumbnail.webp"),
    title: "Abhee Aaria",
    location:
      "Varthuru, Dommasandra Main Road, Mavinkere, Opposite Gunjur Lake, Gunjur, Bengaluru, Karnataka 560087",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.9,
    price: "₹ 1.90 Cr*",
    area: "12 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,320 - 1,330 sq.ft.",
        price: "₹ 1.42 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-aaria/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,430 - 1,780 sq.ft.",
        price: "₹ 1.79 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-aaria/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,020 - 2,030 sq.ft.",
        price: "₹ 2.07 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-aaria/floor-plans/3.5bhk-floor-plan.webp"),
      },
      {
        id: "4.5bhk",
        bhk: "4.5 BHK",
        area: "2,500 sq.ft.",
        price: "₹ 2.56 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-aaria/floor-plans/4.5bhk-floor -plans.webp"),
      },
    ],
    possession: "May 2031",
    units: "1,017",
    highlight:
      "Low-Density Living with 85% Open Space, 2 Grand Clubhouses (60,000+ sq. ft.), and Scenic Views of Gunjur Lake",
    reraId: "PRM/KA/RERA/1251/309/PR/050325/007545",
    summary:
      "A high-rise residential community featuring 2, 3, 3.5, and 4.5 BHK apartments directly on Dommasandra - Gunjur Main Road in East Bengaluru.",
    description:
      "Abhee Aaria by Abhee Ventures is spread across 12 acres on Dommasandra Main Road in Mavinkere, directly opposite Gunjur Lake. The project comprises 5 high-rise towers (2B+G+30/31 floors) with 85% open spaces, featuring two grand clubhouses totaling over 60,000 sq. ft., and direct connectivity to Whitefield, Varthur, Sarjapur Road, and Outer Ring Road (ORR).",
    amenities: [
      { name: "Twin Grand Clubhouses (60,000+ sq. ft.)", icon: "fa-building" },
      { name: "Swimming Pool & Kids Pool", icon: "fa-water-ladder" },
      { name: "Fully Equipped Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Lawn", icon: "fa-spa" },
      {
        name: "Tennis & Basketball Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Skating Rink & Jogging Track", icon: "fa-person-skating" },
      { name: "Children's Play Area", icon: "fa-child" },
      { name: "Landscaped Gardens & Organic Farm Zone", icon: "fa-tree" },
      { name: "Amphitheatre & Cafe/Retail Zone", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        name: "Greenwood High International School",
        distance: "3 Mins",
        icon: "fa-graduation-cap",
      },
      {
        name: "Inventure Academy",
        distance: "5 Mins",
        icon: "fa-graduation-cap",
      },
      { name: "Kshema Hospital", distance: "4.6 Km", icon: "fa-hospital" },
      { name: "Snehadaan Hospital", distance: "4.0 Km", icon: "fa-hospital" },
      { name: "RGA Tech Park", distance: "10 Mins", icon: "fa-laptop-code" },
      {
        name: "ITPL & Whitefield Tech Zone",
        distance: "8.1 Km",
        icon: "fa-building-user",
      },
      { name: "Electronic City Hub", distance: "10.4 Km", icon: "fa-road" },
    ],
    images: [
      abheeImage("abhee-ventures/abhee-aaria/gallery/exterior-webp.webp"),
      abheeImage("abhee-ventures/abhee-aaria/gallery/interior-view.webp"),
      abheeImage("abhee-ventures/abhee-aaria/gallery/amenities.webp"),
    ],
  },
  {
    id: "abhee-serenity-springs",
    thumbnail: abheeImage("abhee-ventures/abhee-serenity-springs/thumbnail.webp"),
    title: "Abhee Serenity Springs",
    location:
      "Kachanayakanahalli, Near Narayana Health City, Bommasandra, Hosur Road, Bengaluru, Karnataka 560099",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.12,
    price: "₹ 1.12 Cr*",
    area: "4.5 Acres",
    floorPlans: [
      {
        id: "3bhk_2t",
        bhk: "3 BHK 2T",
        area: "1,310 - 1,425 sq.ft.",
        price: "₹ 1.04 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-serenity-springs/floor-plans/3-bhk-2t-floor-plan.webp"),
      },
      {
        id: "3bhk_3t",
        bhk: "3 BHK 3T",
        area: "1,595 sq.ft.",
        price: "₹ 1.27 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-serenity-springs/floor-plans/3-bhk-3t-floor-plan.webp"),
      },
    ],
    possession: "June 2030",
    units: "288",
    highlight:
      "Low-Rise Luxury Living with 70% Open Spaces, 3-Side Open Apartments, and 3-Story Grand Clubhouse",
    reraId: "PRM/KA/RERA/1251/308/PR/180325/007592",
    summary:
      "A peaceful residential community featuring 2 and 3 BHK apartments located off Hosur Main Road in Bommasandra, Electronic City, South Bengaluru.",
    description:
      "Abhee Serenity Springs by Abhee Ventures is spread across 4.5 acres in Bommasandra, right off Hosur Main Road and near Narayana Health City. The project features 2 high-rise towers rising up to B+G+14 floors, offering 70% open spaces, 3-side open apartments with no common walls, a 3-storied lifestyle clubhouse, and quick access to Electronic City IT parks.",
    amenities: [
      { name: "3-Story Grand Clubhouse", icon: "fa-building" },
      {
        name: "Infinity Swimming Pool & Kids Splash Pool",
        icon: "fa-water-ladder",
      },
      { name: "Elevated Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga Deck & Meditation Zone", icon: "fa-spa" },
      {
        name: "Multi-Purpose Sports Play Court",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Terrace Party Lawn & BBQ Counter", icon: "fa-cloud-sun" },
      {
        name: "Jogging Track & Reflexology Pathway",
        icon: "fa-person-running",
      },
      { name: "Children's Play Area & Creche", icon: "fa-child" },
      { name: "Landscaped Open Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      { name: "Bommasandra Main Road", distance: "2 Mins", icon: "fa-road" },
      {
        name: "Bommasandra Metro Station",
        distance: "5 Mins",
        icon: "fa-train-subway",
      },
      { name: "Narayana Health City", distance: "2 Mins", icon: "fa-hospital" },
      {
        name: "Electronic City IT Hub",
        distance: "10 Mins",
        icon: "fa-laptop-code",
      },
      { name: "Hosur Road Junction", distance: "10 Mins", icon: "fa-road" },
      {
        name: "Delhi Public School (Bangalore South)",
        distance: "10 Mins",
        icon: "fa-graduation-cap",
      },
      {
        name: "Christ University (Electronic City)",
        distance: "25 Mins",
        icon: "fa-graduation-cap",
      },
    ],
    images: [
      abheeImage("abhee-ventures/abhee-serenity-springs/gallery/exterior-view.webp"),
      abheeImage("abhee-ventures/abhee-serenity-springs/gallery/interior-view.webp"),
      abheeImage("abhee-ventures/abhee-serenity-springs/gallery/amenities.webp"),
    ],
  },
  {
    id: "abhee-silicon-shine",
    thumbnail: abheeImage("abhee-ventures/abhee-silicon-shine/thumbnail.webp"),
    title: "Abhee Silicon Shine",
    location:
      "Sy. No. 34, Mullur Village, Opposite Wipro SEZ, Sarjapur Main Road, Bengaluru, Karnataka 560087",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.09,
    price: "₹ 1.09 Cr*",
    area: "6.75 Acres",
    floorPlans: [
      {
        id: "1bhk",
        bhk: "1 BHK",
        area: "760 sq.ft.",
        price: "₹ 63.00 Lakhs Onwards",
        image: abheeImage("abhee-ventures/abhee-silicon-shine/floor-plans/1bhk-floor-plans.webp"),
      },
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,330 - 1,350 sq.ft.",
        price: "₹ 1.09 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-silicon-shine/floor-plans/2-bhk-floor-plans.webp"),
      },
      {
        id: "2.5bhk",
        bhk: "2.5 BHK",
        area: "1,580 sq.ft.",
        price: "₹ 1.25 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-silicon-shine/floor-plans/2.5-bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,485 - 1,780 sq.ft.",
        price: "₹ 1.22 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-silicon-shine/floor-plans/3bhk-floor-plans.webp"),
      },
    ],
    possession: "July 2026",
    units: "462",
    highlight:
      "Low-Rise Eco-Luxury Living Directly Opposite Wipro SEZ Campus with 40+ Lifestyle Amenities",
    reraId: "PRM/KA/RERA/1251/446/PR/211215/004587",
    summary:
      "A low-rise residential enclave offering 1, 2, 2.5, and 3 BHK apartments strategically located opposite Wipro SEZ on Sarjapur Main Road, Bengaluru.",
    description:
      "Abhee Silicon Shine by Abhee Ventures is a low-density, low-rise residential development spread over 6.75 acres on Sarjapur Main Road in Mullur. The project features 3 blocks (2B+G+4 floors) comprising 462 units designed with no common walls for extra privacy. Located right opposite the Wipro SEZ campus, it offers over 40 lifestyle amenities including a heated pool, cascade waterfall, sports courts, and seamless connectivity to the Outer Ring Road (ORR) IT corridor.",
    amenities: [
      { name: "Fully Equipped Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Heated Pool", icon: "fa-water-ladder" },
      { name: "Extravagant Cascade Waterfall", icon: "fa-water" },
      { name: "Indoor Gym & Outdoor Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Deck", icon: "fa-spa" },
      { name: "Skating Rink & Wall Climbing", icon: "fa-person-skating" },
      { name: "Children's Play Area", icon: "fa-child" },
      {
        name: "Cricket Practice Pitch & Sports Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Sculpture Garden & Outdoor Workstation", icon: "fa-tree" },
      { name: "Amphitheatre & Floral Garden", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        name: "Wipro SEZ Campus",
        distance: "0 Mins (Opposite)",
        icon: "fa-laptop-code",
      },
      { name: "RGA Tech Park", distance: "5 Mins", icon: "fa-building-user" },
      {
        name: "Carmelaram Railway Station",
        distance: "2.9 Km",
        icon: "fa-train",
      },
      {
        name: "Decathlon Sarjapur",
        distance: "1.8 Km",
        icon: "fa-bag-shopping",
      },
      {
        name: "Outer Ring Road (ORR) Junction",
        distance: "15 Mins",
        icon: "fa-road",
      },
      {
        name: "VIBGYOR High School",
        distance: "8.2 Km",
        icon: "fa-graduation-cap",
      },
      {
        name: "The International School Bangalore (TISB)",
        distance: "13 Mins",
        icon: "fa-graduation-cap",
      },
    ],
    images: [
      abheeImage("abhee-ventures/abhee-silicon-shine/gallery/exterior.webp"),
      abheeImage("abhee-ventures/abhee-silicon-shine/gallery/interior.webp"),
      abheeImage("abhee-ventures/abhee-silicon-shine/gallery/amenities.webp"),
    ],
  },
  {
    id: "abhee-tranquila",
    thumbnail: abheeImage("abhee-ventures/abhee-tranquila/thumbnail.webp"),
    title: "Abhee Tranquila",
    location:
      "Bidraguppe, Sarjapur - Attibele Road, Bengaluru, Karnataka 562107",
    category: "ongoing",
    type: "plot",
    priceValue: 0.91,
    price: "₹ 91 Lakhs*",
    area: "20 Acres",
    floorPlans: [
      {
        id: "optima",
        bhk: "Optima Plot (30x40)",
        area: "1,200 sq.ft.",
        price: "₹ 78.00 Lakhs Onwards",
        image: abheeImage("abhee-ventures/abhee-tranquila/floor-plans/optima-plot-layout.webp"),
      },
      {
        id: "ultima",
        bhk: "Ultima Plot (30x50)",
        area: "1,500 sq.ft.",
        price: "₹ 98.00 Lakhs Onwards",
        image: abheeImage("abhee-ventures/abhee-tranquila/floor-plans/ultima-plot-layout.webp"),
      },
      {
        id: "luxe",
        bhk: "Luxe Plot (40x40 / Odd)",
        area: "1,600 - 1,926 sq.ft.",
        price: "₹ 1.04 Cr Onwards",
        image: abheeImage("abhee-ventures/abhee-tranquila/floor-plans/luxe-plot-layout.webp"),
      },
    ],
    possession: "December 2026",
    units: "279",
    highlight:
      "Master-Planned Gated Plotted Community Adjacent to SWIFT City with Clubhouse & BMRDA/RERA Approval",
    reraId: "PRM/KA/RERA/1251/310/PR/020725/007891",
    summary:
      "A premium BMRDA-approved gated plotted development spanning 20 acres on Sarjapur - Attibele Road in South-East Bengaluru.",
    description:
      "Abhee Tranquila by Abhee Ventures is a 20-acre master-planned residential plotted layout situated along the Sarjapur - Attibele Road, right next to the upcoming 1,000+ acre SWIFT City innovation hub. BMRDA approved and RERA registered, the project features 279 villa plots equipped with asphalted avenues, underground utility infrastructure, tree-lined boulevards, a fully loaded clubhouse, and quick access to Electronic City and Sarjapur Road IT parks.",
    amenities: [
      { name: "Grand Clubhouse", icon: "fa-building" },
      { name: "Infinity Swimming Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium & Outdoor Gym", icon: "fa-dumbbell" },
      { name: "Yoga Pavilion & Meditation Zone", icon: "fa-spa" },
      {
        name: "Multipurpose Sports Court & Cricket Pitch",
        icon: "fa-table-tennis-paddle-ball",
      },
      {
        name: "Jogging Tracks & Reflexology Pathway",
        icon: "fa-person-running",
      },
      { name: "Children's Play Areas", icon: "fa-child" },
      { name: "Amphitheatre & Melody Park", icon: "fa-masks-theater" },
      { name: "Tree-Lined Avenues & Sculpture Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      {
        name: "SWIFT City",
        distance: "0 Mins (Adjacent)",
        icon: "fa-building-user",
      },
      { name: "Hosur Road Junction", distance: "5.0 Km", icon: "fa-road" },
      { name: "Attibele Junction", distance: "6.2 Km", icon: "fa-road" },
      { name: "Sarjapur Town", distance: "8.5 Km", icon: "fa-city" },
      {
        name: "Electronic City IT Hub",
        distance: "12.4 Km",
        icon: "fa-laptop-code",
      },
      {
        name: "ITPL & Whitefield Corridor",
        distance: "20.5 Km",
        icon: "fa-building",
      },
    ],
    images: [
      abheeImage("abhee-ventures/abhee-tranquila/gallery/exterior-view.webp"),
      abheeImage("abhee-ventures/abhee-tranquila/gallery/interior-view.webp"),
      abheeImage("abhee-ventures/abhee-tranquila/gallery/amenities.webp"),
    ],
  },
];

export const abheeventuresFaqs = [
  {
    question: "Where does Abhee Ventures primarily operate?",
    answer:
      "The builder focuses heavily on high-growth corridors in Bengaluru, Karnataka, particularly in East and South Bangalore areas like Sarjapur Road, Gunjur, Varthur, Whitefield, Bommasandra, Soukya Road, and Attibele Road.",
  },
  {
    question: "How many projects have they delivered?",
    answer:
      "Since its inception in 2009, Abhee Ventures has completed 13 to 16 residential projects across Bengaluru, housing over 3,500 families.",
  },
  {
    question: "What properties do they develop?",
    answer:
      "Their real estate portfolio includes three main types of properties: luxury apartments, villa plot communities, and plotted developments.",
  },
  {
    question: "Are Abhee Ventures projects RERA-registered?",
    answer:
      "Yes. All active and ongoing projects from Abhee Ventures are registered under Karnataka RERA before bookings are accepted. You can independently verify registration statuses on the Karnataka RERA Official Website.",
  },
  {
    question: "Are their projects bank-approved?",
    answer:
      "Yes, their ongoing developments are approved by major financial institutions like SBI and HDFC Bank for smooth home loan disbursements.",
  },
  {
    question: "Which civic bodies approve their layouts?",
    answer:
      "Depending on the project location, they receive necessary sanctions from authorities like BDA, BMRDA, or BBMP.",
  },
  {
    question: "What quality standards do they follow?",
    answer:
      "Projects are built utilizing earthquake-resistant RCC frame structures, superior concrete mix ratios, branded electrical/plumbing fittings, and multi-stage quality audits monitored by structural engineers and third-party inspectors.",
  },
  {
    question: "What amenities are usually provided?",
    answer:
      "Most premium communities feature 40+ lifestyle amenities, including adult swimming pools, outdoor gyms, skating rinks, manicured clubhouses, and 24/7 security setups.",
  },
  {
    question: "How does Abhee Ventures guarantee on-time project delivery?",
    answer:
      "According to the developer, delivery timelines are secured through proactive raw material procurement, weekly structural milestone tracking, pre-committed vendor relationships, and a financially conservative model that prevents over-leveraging across concurrent projects.",
  },
  {
    question:
      "What material and quality standards does Abhee Ventures commit to?",
    answer:
      "Every structure is engineered using earthquake-resistant RCC frame structures, superior concrete mix ratios, and branded electrical and plumbing fixtures. They perform multi-stage quality audits via independent third-party structural engineers.",
  },
];

export const builderConfig = {
  slug: "abhee-ventures",
  name: "Abhee Ventures",
  regions: "Bengaluru",
  theme: {
    primary: "#163A52",
    primaryHover: "#102A3B",
    accent: "#087FAF",
    surface: "#F5FAFC",
    soft: "#E7F6FC",
    border: "#D9EAF2",
  },
  properties: abheeventuresData,
  faqs: abheeventuresFaqs,
  whatsappNumber: "",
};
