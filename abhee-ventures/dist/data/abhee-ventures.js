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
    coordinates: { lat: 12.915, lon: 77.728 },
    mapsQuery: "Abhee Codename New Dimension, Gunjur, Bengaluru",
    shortAddress: "Varthur - Sarjapur Road, Bengaluru",
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
    highlights: [
      "4 Hole Golf Course, Man-Made Course",
      "5 Club Houses (1.50 Lakhs+ Sq.ft Total)",
      "Extensive sports facilities",
      "85% Open Green spaces, 200+ Lifestyle amenities",
      "Next to Greenwood High International school - 1 Min Walk",
      "Lotus, Narayana, Manipal, Columbia Asia Multispeciality Hospitals in 4-8kms Range",
      "Vibgyor Green wisdom School 4 Kms, Global Indian International school - 600 Mts",
      "Sarjapur road 2kms - Peripheral Ring road 6Kms",
      "Proposed Future Metro Phase 3 - future Connectivity",
      "65-metre infinity pool with cabanas"
    ],
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
        label: "Greenwood High International School",
        name: "Greenwood High International School",
        destination: "Greenwood High International School, Chikkawadayar, Gunjur, Varthur - Sarjapur Road, Bengaluru, Karnataka 560087",
        coordinates: { lat: 12.9095, lon: 77.7372 },
        distance: "550 m",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "RGA Tech Park",
        name: "RGA Tech Park",
        destination: "RGA Tech Park, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9085, lon: 77.7028 },
        distance: "8.4 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Sarjapur Road Junction",
        name: "Sarjapur Road Junction",
        destination: "Dommasandra Circle, Sarjapur Road, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8795, lon: 77.7475 },
        distance: "2.1 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Whitefield & ITPL Corridor",
        name: "Whitefield & ITPL Corridor",
        destination: "International Tech Park Bangalore (ITPL), Whitefield Main Road, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9856, lon: 77.7315 },
        distance: "15.1 km",
        icon: "fa-solid fa-building-user",
      },
      {
        label: "Outer Ring Road (ORR) IT Corridor",
        name: "Outer Ring Road (ORR) IT Corridor",
        destination: "Bellandur Outer Ring Road Junction, Bellandur, Bengaluru, Karnataka 560103",
        coordinates: { lat: 12.9265, lon: 77.6785 },
        distance: "12.5 km",
        icon: "fa-solid fa-car",
      },
      {
        label: "Carmelaram Railway Station",
        name: "Carmelaram Railway Station",
        destination: "Carmelaram Railway Station, Carmelaram, Doddakannelli, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9115, lon: 77.7095 },
        distance: "8.6 km",
        icon: "fa-solid fa-train",
      },
      {
        label: "The Forum Neighbourhood Mall",
        name: "The Forum Neighbourhood Mall",
        destination: "The Forum Neighbourhood Mall, Prestige Whitefield, Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9605, lon: 77.7468 },
        distance: "8.6 km",
        icon: "fa-solid fa-bag-shopping",
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
    coordinates: { lat: 12.918, lon: 77.731 },
    mapsQuery: "Abhee Celestial City, Gunjur, Bengaluru",
    shortAddress: "Gunjur, Off Whitefield, Bengaluru",
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
    highlights: [
      "celestial city is a testament to the future of urban living",
      "outdoor wonderland and clubhouse bliss",
      "Highrise cosmic skies",
      "Kids play area on EPDM mat and ample seating for parents",
      "Entrance lobby space for each tower",
      "Hydrotherapy pool for elders",
      "30 plus amenities"
    ],
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
        label: "Greenwood High International School",
        name: "Greenwood High International School",
        destination: "Greenwood High International School, Chikkawadayar, Gunjur, Varthur - Sarjapur Road, Bengaluru, Karnataka 560087",
        coordinates: { lat: 12.9095, lon: 77.7372 },
        distance: "850 m",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Inventure Academy",
        name: "Inventure Academy",
        destination: "Inventure Academy, Whitefield - Sarjapur Road, Chikkawadayar, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8985, lon: 77.7415 },
        distance: "1.0 km",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Global Indian International School",
        name: "Global Indian International School",
        destination: "Global Indian International School (GIIS) Whitefield, Gunjur - Palya Road, Bengaluru, Karnataka 560087",
        coordinates: { lat: 12.9235, lon: 77.7345 },
        distance: "1.3 km",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "RGA Tech Park",
        name: "RGA Tech Park",
        destination: "RGA Tech Park, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9085, lon: 77.7028 },
        distance: "8.4 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Sarjapur Road Junction",
        name: "Sarjapur Road Junction",
        destination: "Dommasandra Circle, Sarjapur Road, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8795, lon: 77.7475 },
        distance: "2.8 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Carmelaram Railway Station",
        name: "Carmelaram Railway Station",
        destination: "Carmelaram Railway Station, Carmelaram, Doddakannelli, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9115, lon: 77.7095 },
        distance: "8.6 km",
        icon: "fa-solid fa-train",
      },
      {
        label: "Whitefield & ITPL Corridor",
        name: "Whitefield & ITPL Corridor",
        destination: "International Tech Park Bangalore (ITPL), Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9856, lon: 77.7315 },
        distance: "12.6 km",
        icon: "fa-solid fa-building-user",
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
    coordinates: { lat: 12.912, lon: 77.725 },
    mapsQuery: "Abhee Aaria, Gunjur Lake, Bengaluru",
    shortAddress: "Opp. Gunjur Lake, Bengaluru",
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
    highlights: [
      "Over 85% open space with a 2-acre central forest for serene living",
      "Two clubhouses spanning 60,000 sq.ft. with premium lifestyle amenities",
      "Infinity and temperature-controlled swimming pool for year-round comfort",
      "500 meters from Peripheral Ring Road",
      "Adjacent to 5+ International Schools",
      "Properties with 100% power backup available"
    ],
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
        label: "Greenwood High International School",
        name: "Greenwood High International School",
        destination: "Greenwood High International School, Chikkawadayar, Gunjur, Varthur - Sarjapur Road, Bengaluru, Karnataka 560087",
        coordinates: { lat: 12.9095, lon: 77.7372 },
        distance: "3.0 km",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Inventure Academy",
        name: "Inventure Academy",
        destination: "Inventure Academy, Whitefield - Sarjapur Road, Chikkawadayar, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8985, lon: 77.7415 },
        distance: "4.1 km",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Kshema Hospital",
        name: "Kshema Hospital",
        destination: "Kshema Hospital, Gunjur Palya Road, Gunjur, Bengaluru, Karnataka 560087",
        coordinates: { lat: 12.9175, lon: 77.7325 },
        distance: "4.7 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Snehadaan Hospital",
        name: "Snehadaan Hospital",
        destination: "Snehadaan Hospital, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.904, lon: 77.708 },
        distance: "4.7 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "RGA Tech Park",
        name: "RGA Tech Park",
        destination: "RGA Tech Park, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9085, lon: 77.7028 },
        distance: "6.6 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "ITPL & Whitefield Tech Zone",
        name: "ITPL & Whitefield Tech Zone",
        destination: "International Tech Park Bangalore (ITPL), Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9856, lon: 77.7315 },
        distance: "10.3 km",
        icon: "fa-solid fa-building-user",
      },
      {
        label: "Electronic City Hub",
        name: "Electronic City Hub",
        destination: "Electronic City Toll Plaza, Hosur Road, Bengaluru, Karnataka 560100",
        coordinates: { lat: 12.8455, lon: 77.6625 },
        distance: "25.6 km",
        icon: "fa-solid fa-road",
      },
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
    coordinates: { lat: 12.818, lon: 77.689 },
    mapsQuery: "Abhee Serenity Springs, Bommasandra, Bengaluru",
    shortAddress: "Bommasandra, Hosur Road, Bengaluru",
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
    highlights: [
      "12,000 sqft grand clubhouse offers premium social and wellness amenities",
      "Seventy percent open space across 4.25 acres with just 288 units",
      "Over 30 world-class amenities including an infinity pool and BBQ counter",
      "Strategically located near Bommasandra Metro Station and Electronic City",
      "Generator backup of 1 KV for every apartment",
      "Smartly designed spaces ensuring abundant light and seamless functionality",
      "Pedestrian-friendly walkways and verdant courtyards for tranquil living"
    ],
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
      {
        label: "Bommasandra Main Road",
        name: "Bommasandra Main Road",
        destination: "Bommasandra Main Road, Bommasandra Industrial Area, Bengaluru, Karnataka 560099",
        coordinates: { lat: 12.816, lon: 77.686 },
        distance: "4.1 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Bommasandra Metro Station",
        name: "Bommasandra Metro Station",
        destination: "Bommasandra Metro Station (Yellow Line), Hosur Road, Bommasandra, Bengaluru, Karnataka 560099",
        coordinates: { lat: 12.8155, lon: 77.6845 },
        distance: "3.6 km",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Narayana Health City",
        name: "Narayana Health City",
        destination: "Narayana Health City, Bommasandra Industrial Area, Anekal Taluk, Bengaluru, Karnataka 560099",
        coordinates: { lat: 12.8225, lon: 77.6912 },
        distance: "2.3 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Electronic City IT Hub",
        name: "Electronic City IT Hub",
        destination: "Electronic City, 25, Hosur Rd, Madiwala New Extension, Madiwala, 1st Stage, BTM 1st Stage, Bengaluru, Doddanagamangala Village, Karnataka 560100",
        coordinates: { lat: 12.8455, lon: 77.6625 },
        distance: "9.9 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Hosur Road Junction",
        name: "Hosur Road Junction",
        destination: "Hosur Road (NH-44) Junction, Bommasandra, Bengaluru, Karnataka 560099",
        coordinates: { lat: 12.814, lon: 77.683 },
        distance: "4.5 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Delhi Public School (Bangalore South)",
        name: "Delhi Public School (Bangalore South)",
        destination: "Delhi Public School Bangalore South, Kanakapura Road, Bengaluru, Karnataka 560062",
        coordinates: { lat: 12.845, lon: 77.635 },
        distance: "25.4 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Christ University (Electronic City)",
        name: "Christ University (Electronic City)",
        destination: "Christ University Electronic City Campus, Hosur Road, Bengaluru, Karnataka 560100",
        coordinates: { lat: 12.861, lon: 77.664 },
        distance: "19.6 km",
        icon: "fa-solid fa-graduation-cap",
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
    coordinates: { lat: 12.908, lon: 77.702 },
    mapsQuery: "Abhee Silicon Shine, Sarjapur Main Road, Bengaluru",
    shortAddress: "Opp. Wipro SEZ, Sarjapur Road, Bengaluru",
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
    highlights: [
      "No common walls as good as an independent house",
      "Well-designed units with ample space and lighting",
      "Highly secured units with competitive pricing",
      "Connected to all prominent localities",
      "Gated community with paved compound",
      "Close to offices, hospitals, schools and shopping mall"
    ],
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
        label: "Wipro SEZ Campus",
        name: "Wipro SEZ Campus",
        destination: "Wipro Corporate Office & SEZ Campus, Sarjapur Main Road, Doddakannelli, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.909, lon: 77.7005 },
        distance: "4.5 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "RGA Tech Park",
        name: "RGA Tech Park",
        destination: "RGA Tech Park, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9085, lon: 77.7028 },
        distance: "2.9 km",
        icon: "fa-solid fa-building-user",
      },
      {
        label: "Carmelaram Railway Station",
        name: "Carmelaram Railway Station",
        destination: "Carmelaram Railway Station, Carmelaram, Doddakannelli, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9115, lon: 77.7095 },
        distance: "3.0 km",
        icon: "fa-solid fa-train",
      },
      {
        label: "Decathlon Sarjapur",
        name: "Decathlon Sarjapur",
        destination: "Decathlon Sports India, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9065, lon: 77.705 },
        distance: "1.4 km",
        icon: "fa-solid fa-bag-shopping",
      },
      {
        label: "Outer Ring Road (ORR) Junction",
        name: "Outer Ring Road (ORR) Junction",
        destination: "Kaikondrahalli Outer Ring Road Junction, Sarjapur Road, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.915, lon: 77.685 },
        distance: "9.8 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "VIBGYOR High School",
        name: "VIBGYOR High School",
        destination: "VIBGYOR High School, Haralur Road, HSR Extension, Bengaluru, Karnataka 560102",
        coordinates: { lat: 12.902, lon: 77.669 },
        distance: "9.3 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "The International School Bangalore (TISB)",
        name: "The International School Bangalore (TISB)",
        destination: "The International School Bangalore (TISB), NAFL Valley, Sarjapur Main Road, Dommasandra, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8835, lon: 77.7455 },
        distance: "6.5 km",
        icon: "fa-solid fa-graduation-cap",
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
    coordinates: { lat: 12.842, lon: 77.778 },
    mapsQuery: "Abhee Tranquila, Sarjapur - Attibele Road, Bengaluru",
    shortAddress: "Sarjapur - Attibele Road, Bengaluru",
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
    highlights: [
      "45+ outdoor amenities including a movie wall and music garden",
      "Strategic 19-minute commute to Bommasandra Metro Station",
      "Modern underground utility infrastructure and rainwater harvesting",
      "Innovative outdoor workstations and dedicated pet park",
      "Extensive clubhouse with guest rooms, creche, and terrace party lawn",
      "Proximity to Azim Premji University and major educational hubs",
      "Located in serene proximity to the scenic Bidaraguppe Lake"
    ],
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
        label: "SWIFT City Innovation Hub",
        name: "SWIFT City Innovation Hub",
        destination: "SWIFT City (Smart City Hub), Attibele - Sarjapur Road, Bengaluru, Karnataka 562107",
        coordinates: { lat: 12.84, lon: 77.779 },
        distance: "8.0 km",
        icon: "fa-solid fa-building-user",
      },
      {
        label: "Hosur Road Junction",
        name: "Hosur Road Junction",
        destination: "Hosur Road (NH-44) Junction, Attibele, Bengaluru, Karnataka 562107",
        coordinates: { lat: 12.784, lon: 77.765 },
        distance: "6.8 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Attibele Junction",
        name: "Attibele Junction",
        destination: "Attibele Circle, Hosur - Bengaluru Highway, Attibele, Karnataka 562107",
        coordinates: { lat: 12.781, lon: 77.768 },
        distance: "6.5 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Sarjapur Town",
        name: "Sarjapur Town",
        destination: "Sarjapur Town Circle, Sarjapur, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.861, lon: 77.788 },
        distance: "7.9 km",
        icon: "fa-solid fa-city",
      },
      {
        label: "Electronic City IT Hub",
        name: "Electronic City IT Hub",
        destination: "Electronic City Phase I, Electronic City, Karnataka 560100",
        coordinates: { lat: 12.8455, lon: 77.6625 },
        distance: "21.3 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "ITPL & Whitefield Corridor",
        name: "ITPL & Whitefield Corridor",
        destination: "International Tech Park Bangalore (ITPL), Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9856, lon: 77.7315 },
        distance: "31.9 km",
        icon: "fa-solid fa-building",
      },
      {
        label: "Narayana Health City",
        name: "Narayana Health City",
        destination: "Narayana Health City, Bommasandra Industrial Area, Bengaluru, Karnataka 560099",
        coordinates: { lat: 12.8225, lon: 77.6912 },
        distance: "15.5 km",
        icon: "fa-solid fa-hospital",
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

function formatOverviewList(items = []) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function createPropertyOverview(property) {
  const floorPlans = formatOverviewList(
    (property.floorPlans || []).map(({ bhk, area }) =>
      area ? `${bhk} (${area})` : bhk,
    ),
  );
  const allBhks = [
    ...new Set((property.floorPlans || []).map(({ bhk }) => bhk)),
  ].join(", ");
  const searchTerm = `${property.title || property.name} Bengaluru`;
  const amenities = formatOverviewList(
    (property.amenities || []).slice(0, 4).map(({ name }) => name),
  );
  const nearbyPlaces = formatOverviewList(
    (property.connectivity || [])
      .slice(0, 3)
      .map(({ name, distance }) => `${name} (${distance})`),
  );
  const shortAddress =
    property.shortAddress ||
    (property.location
      ? property.location.split(",").slice(0, 2).join(",").trim()
      : "Bengaluru");
  const statusText =
    property.category === "new-launch"
      ? "New Launch"
      : property.category === "ready"
        ? "Ready to Move"
        : "Ongoing";
  const bhkSummary = allBhks || property.bhk || "luxury residences";

  return [
    `${property.description} Buyers researching ${searchTerm} can explore Abhee Ventures homes in ${shortAddress}, with project status, location, and configuration details available to compare.`,
    `${property.title} is listed with ${bhkSummary} across ${property.area}, with ${statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || bhkSummary}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || shortAddress}. Review this Abhee Ventures project's floor plans, amenities, and connectivity when comparing homes in Bengaluru.${property.reraId ? ` RERA registration number: ${property.reraId.replace(/\.$/, "")}.` : ""}`,
  ];
}

export function createPropertyHighlights(property) {
  const list = [];
  if (property.highlight) {
    list.push(property.highlight);
  }
  if (property.area) {
    list.push(`Expansive ${property.area} development with landscaped open spaces`);
  }
  const bhkList = Array.isArray(property.floorPlans) && property.floorPlans.length > 0
    ? [...new Set(property.floorPlans.map((fp) => fp.bhk))].join(", ")
    : property.type ? `${property.type} residences` : "";
  if (bhkList) {
    list.push(`Thoughtfully planned ${bhkList} layouts designed for optimal ventilation & natural lighting`);
  }
  if (property.possession) {
    list.push(`Project possession timeline: ${property.possession}`);
  }
  if (Array.isArray(property.amenities) && property.amenities.length > 0) {
    const topAmenities = property.amenities.slice(0, 3).map((a) => a.name).join(", ");
    list.push(`Premium lifestyle amenities including ${topAmenities}`);
  }
  if (Array.isArray(property.connectivity) && property.connectivity.length > 0) {
    const topPlace = property.connectivity[0];
    const placeName = topPlace.name || topPlace.label;
    if (placeName) {
      list.push(`Prime connectivity with proximity to ${placeName} (${topPlace.distance})`);
    }
  }
  if (property.reraId) {
    list.push(`RERA Approved Project: ${property.reraId.replace(/\.$/, "")}`);
  }
  return list;
}

const shortAddressMap = {
  "abhee-codename-new-dimension": "Varthur - Sarjapur Road, Bengaluru",
  "abhee-celestial-city": "Gunjur, Off Whitefield, Bengaluru",
  "abhee-aaria": "Opp. Gunjur Lake, Bengaluru",
  "abhee-serenity-springs": "Bommasandra, Hosur Road, Bengaluru",
  "abhee-silicon-shine": "Opp. Wipro SEZ, Sarjapur Road, Bengaluru",
  "abhee-tranquila": "Sarjapur - Attibele Road, Bengaluru",
};

abheeventuresData.forEach((property) => {
  property.name = property.name || property.title;
  property.shortAddress = property.shortAddress || shortAddressMap[property.id] || (
    property.location ? property.location.split(",").slice(0, 2).join(", ").trim() : "Bengaluru"
  );
  const allBhks = [...new Set((property.floorPlans || []).map(({ bhk }) => bhk))].join(", ");
  property.bhk = property.bhk || allBhks;
  property.statusText = property.statusText || (
    property.category === "new-launch" ? "New Launch" :
    property.category === "ready" ? "Ready to Move" : "Under Construction"
  );
  property.overview = property.overview || createPropertyOverview(property);
  property.highlights = property.highlights || createPropertyHighlights(property);
});

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
  whatsappNumber: "+919876543210",
};

export const abheeVenturesData = abheeventuresData;
export const abheeVenturesProjects = abheeventuresData;
