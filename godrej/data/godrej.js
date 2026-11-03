const imageCdnPrefix = "https://media.justflip.in/builder-brand-pages/";
const godrejImage = (suffix) => `${imageCdnPrefix}${suffix.replace(/^\/+/, "")}`;

export const godrejProjects = [
  {
    id: "godrej-vanantara",
    thumbnail: godrejImage("godrej-properties/godrej-vanantara/thumbnail.webp"),
    title: "Godrej Vanantara",
    location:
      "Dinnepalya Road, Off Bannerghatta Main Road, Next to Greenwood High (IGCSE Campus), Bengaluru, Karnataka 560083",
    coordinates: {"lat":12.8256,"lon":77.5855},
    mapsQuery: "Godrej Vanantara, Bannerghatta Road, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.49,
    price: "₹ 1.49 Cr*",
    area: "33 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,200 sq.ft.",
        price: "₹ 1.49 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-vanantara/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk-2t",
        bhk: "3 BHK (2T)",
        area: "1,444 sq.ft.",
        price: "₹ 1.90 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-vanantara/floor-plans/3bhk(2t)-floor-plan.webp"),
      },
      {
        id: "3bhk-3t",
        bhk: "3 BHK (3T)",
        area: "1,900 sq.ft.",
        price: "₹ 2.50 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-vanantara/floor-plans/3bhk(3t)-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,100 sq.ft.",
        price: "₹ 2.77 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-vanantara/floor-plans/3.5bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "2,700 sq.ft.",
        price: "₹ 3.56 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-vanantara/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "May 2031",
    units: "2008",
    highlight:
      "Nature-Centric Urban Retreat with 4500+ Trees and Grand Clubhouse",
    reraId: "PRM/KA/RERA/1251/310/PR/130526/008653",
    highlights: [
      "ture-Centric Urban Retreat with 4500+ Trees and Grand Clubhouse",
      "Expansive 33 Acres development with landscaped open spaces",
      "Thoughtfully planned 2 BHK, 3 BHK (2T), 3 BHK (3T), 3.5 BHK, 4 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: May 2031",
      "Premium lifestyle amenities including Grand Clubhouse, Swimming Pool, Gymnasium",
      "Prime connectivity with proximity to Greenwood High (IGCSE Campus) (Adjacent)",
      "RERA Approved Project: PRM/KA/RERA/1251/310/PR/130526/008653",
    ],
    summary:
      "A large-scale forest-inspired residential community featuring 2, 3, and 4.5 BHK apartments off Bannerghatta Main Road in South Bengaluru.",
    description:
      "Godrej Vanantara by Godrej Properties Limited brings nature-inspired luxury high-rise living to Bannerghatta Road, South Bengaluru. Spanning over acres of lush green landscaping with over 4,500 trees, the township offers an expansive 1 Lakh sq. ft. clubhouse, serene water features, and smooth connectivity to Royal Meenakshi Mall, metro stations, and Bannerghatta National Park.",
    amenities: [
      { name: "Grand Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium", icon: "fa-dumbbell" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Nature Trail", icon: "fa-person-running" },
      { name: "Multipurpose Hall", icon: "fa-users" },
    ],
    connectivity: [
      {
        label: "Greenwood High (IGCSE Campus)",
        name: "Greenwood High (IGCSE Campus)",
        destination: "Greenwood High IGCSE Campus, Bannerghatta Road, Bengaluru, Karnataka 560083",
        coordinates: {"lat":12.826,"lon":77.5862},
        distance: "Adjacent",
        icon: "fa-solid fa-school",
      },
      {
        label: "Royal Meenakshi Mall",
        name: "Royal Meenakshi Mall",
        destination: "Royal Meenakshi Mall, Hulimavu, Bannerghatta Main Rd, Bengaluru, Karnataka 560076",
        coordinates: {"lat":12.8752,"lon":77.5958},
        distance: "5 Mins",
        icon: "fa-solid fa-bag-shopping",
      },
      {
        label: "Bannerghatta National Park",
        name: "Bannerghatta National Park",
        destination: "Bannerghatta Biological Park, Bannerghatta Road, Bengaluru, Karnataka 560083",
        coordinates: {"lat":12.8009,"lon":77.5777},
        distance: "10 Mins",
        icon: "fa-solid fa-tree",
      },
      {
        label: "Kalena Agrahara Metro Station",
        name: "Kalena Agrahara Metro Station",
        destination: "Kalena Agrahara Metro Station, Bannerghatta Road, Bengaluru, Karnataka 560076",
        coordinates: {"lat":12.8685,"lon":77.5932},
        distance: "14 Mins",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Prime Spectrum Mall",
        name: "Prime Spectrum Mall",
        destination: "Prime Spectrum Mall, Bannerghatta Road, Bengaluru, Karnataka 560076",
        coordinates: {"lat":12.8834,"lon":77.5975},
        distance: "18 Mins",
        icon: "fa-solid fa-bag-shopping",
      },
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: {"lat":13.1986,"lon":77.7066},
        distance: "75 Mins",
        icon: "fa-solid fa-plane",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-vanantara/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-vanantara/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-vanantara/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-athena",
    thumbnail: godrejImage("godrej-properties/godrej-athena/thumbnail.webp"),
    title: "Godrej Athena",
    location: "Near Indiranagar - HAL, Bengaluru, Karnataka 560075",
    coordinates: {"lat":12.9602,"lon":77.6534},
    mapsQuery: "Godrej Athena, HAL Old Airport Road, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.79,
    price: "₹ 2.79 Cr*",
    area: "6.5 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "2,025 sq.ft.",
        price: "₹ 2.79 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-athena/floor-plans/3bhk-floor-plans.webp"),
      },
    ],
    possession: "January 2028",
    units: "330",
    highlight: "Greco-Roman Architecture",
    reraId: "PRM/KA/RERA/1251/446/PR/090123/005605",
        highlights: [
      "Greco-Roman Architecture",
      "Expansive 6.5 Acres development with landscaped open spaces",
      "Thoughtfully planned 3 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: January 2028",
      "Premium lifestyle amenities including Temperature-Controlled Swimming Pool, Clubhouse, Jogging Track",
      "Prime connectivity with proximity to Orchids The International School (190 m)",
      "RERA Approved Project: PRM/KA/RERA/1251/446/PR/090123/005605",
    ],
    summary:
      "A premium residential project featuring Greco-Roman-inspired architecture, spacious 3 BHK residences, and 34 luxury lifestyle amenities near Indiranagar.",
    description:
      "Godrej Athena by Godrej Properties offers luxury 3 BHK apartments near Indiranagar-HAL, Bengaluru. Inspired by classical Greco-Roman architecture with grand facades, it features 34 lifestyle amenities including a temperature-controlled pool, clubhouse, and multi-sport courts, providing seamless connectivity to East Bengaluru's business and commercial hubs.",
    amenities: [
      { name: "Temperature-Controlled Swimming Pool", icon: "fa-water-ladder" },
      { name: "Clubhouse", icon: "fa-building" },
      { name: "Jogging Track", icon: "fa-person-running" },
      {
        name: "Multipurpose Court & Tennis Court",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Yoga Deck & Callisthenics Court", icon: "fa-spa" },
      { name: "Kids Play Area & Skateboard Park", icon: "fa-child" },
      { name: "Pet Park", icon: "fa-dog" },
      { name: "Amphitheatre & Private Party Deck", icon: "fa-masks-theater" },
      { name: "Community Garden & Pergolas", icon: "fa-leaf" },
    ],
    connectivity: [
      {
        label: "Orchids The International School",
        name: "Orchids The International School",
        destination: "Orchids The International School, HAL, Bengaluru, Karnataka 560075",
        coordinates: {"lat":12.9615,"lon":77.6548},
        distance: "190 m",
        icon: "fa-solid fa-school",
      },
      {
        label: "BEML Hospital",
        name: "BEML Hospital",
        destination: "BEML Hospital, New Thippasandra, Bengaluru, Karnataka 560075",
        coordinates: {"lat":12.9635,"lon":77.658},
        distance: "550 m",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Shishya BEML Public School",
        name: "Shishya BEML Public School",
        destination: "Shishya BEML Public School, HAL, Bengaluru, Karnataka 560075",
        coordinates: {"lat":12.9648,"lon":77.6595},
        distance: "1.0 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "HAL Public School",
        name: "HAL Public School",
        destination: "HAL Public School, Suranjandas Road, Bengaluru, Karnataka 560017",
        coordinates: {"lat":12.9565,"lon":77.6685},
        distance: "2.0 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Indiranagar 100 Feet Road",
        name: "Indiranagar 100 Feet Road",
        destination: "100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
        coordinates: {"lat":12.9715,"lon":77.641},
        distance: "3.2 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Manipal Hospital, Old Airport Road",
        name: "Manipal Hospital, Old Airport Road",
        destination: "Manipal Hospital, HAL Old Airport Road, Bengaluru, Karnataka 560017",
        coordinates: {"lat":12.9585,"lon":77.648},
        distance: "2.4 km",
        icon: "fa-solid fa-hospital",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-athena/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-athena/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-athena/gallery/amenites-view.webp"),
    ],
  },
  {
    id: "godrej-lakeside-orchard",
    thumbnail: godrejImage("godrej-properties/godrej-lakeside-orchard/thumbnail.webp"),
    title: "Godrej Lakeside Orchard",
    location: "Chikkakannalli, Off Sarjapur Road, Bengaluru, Karnataka 560035",
    coordinates: {"lat":12.9056,"lon":77.7028},
    mapsQuery: "Godrej Lakeside Orchard, Sarjapur Road, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.37,
    price: "₹ 2.37 Cr*",
    area: "6 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,790 - 2,102 sq.ft.",
        price: "₹ 2.37 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-lakeside-orchard/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,163-2,214 sq.ft.",
        price: "₹ 2.55 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-lakeside-orchard/floor-plans/3.5bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4+ BHK",
        area: "2,656 sq.ft.",
        price: "₹ 3.10 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-lakeside-orchard/floor-plans/4-plus-bhk-floor-plan.webp"),
      },
    ],
    possession: "September 2030",
    units: "698",
    highlight: "Lakeside Setting & Butterfly Garden",
    reraId: "PRM/KA/RERA/1251/446/PR/300924/007105",
        highlights: [
      "Lakeside Setting & Butterfly Garden",
      "Expansive 6 Acres development with landscaped open spaces",
      "Thoughtfully planned 3 BHK, 3.5 BHK, 4+ BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: September 2030",
      "Premium lifestyle amenities including Club Pool, Fully Equipped Gym, Skating Rink",
      "Prime connectivity with proximity to Carmelaram Railway Station (800 m)",
      "RERA Approved Project: PRM/KA/RERA/1251/446/PR/300924/007105",
    ],
    summary:
      "A nature-focused residential project on Sarjapur Road featuring 3, 3.5, and 4+ BHK apartments with over 30 lifestyle amenities.",
    description:
      "Godrej Lakeside Orchard by Godrej Properties offers luxury 3, 3.5, and 4+ BHK residences off Sarjapur Road, Chikkakannalli, Bengaluru. Designed around a nature-focused retreat concept, the project features landscaped greens, a club pool, an amphitheatre, and a butterfly garden, providing seamless connectivity to major Sarjapur-ORR tech hubs.",
    amenities: [
      { name: "Club Pool", icon: "fa-water-ladder" },
      { name: "Fully Equipped Gym", icon: "fa-dumbbell" },
      { name: "Skating Rink", icon: "fa-person-skating" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Butterfly Garden", icon: "fa-leaf" },
      { name: "Amphitheatre", icon: "fa-masks-theater" },
      { name: "Mini Movie Theater", icon: "fa-film" },
    ],
    connectivity: [
      {
        label: "Carmelaram Railway Station",
        name: "Carmelaram Railway Station",
        destination: "Carmelaram Railway Station, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: {"lat":12.9115,"lon":77.7095},
        distance: "800 m",
        icon: "fa-solid fa-train",
      },
      {
        label: "CMR Gandhi Public School",
        name: "CMR Gandhi Public School",
        destination: "CMR Gandhi Public School, Sarjapur Road, Bengaluru, Karnataka 560035",
        coordinates: {"lat":12.908,"lon":77.6985},
        distance: "1.5 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Halanayakanahalli Lake",
        name: "Halanayakanahalli Lake",
        destination: "Halanayakanahalli Lake, Sarjapur Road, Bengaluru, Karnataka 560035",
        coordinates: {"lat":12.9015,"lon":77.6955},
        distance: "1.7 km",
        icon: "fa-solid fa-water",
      },
      {
        label: "Radhareddy Layout Bus Stop",
        name: "Radhareddy Layout Bus Stop",
        destination: "Radhareddy Layout, Sarjapur Road, Bengaluru, Karnataka 560035",
        coordinates: {"lat":12.9145,"lon":77.7085},
        distance: "2.5 km",
        icon: "fa-solid fa-bus",
      },
      {
        label: "Delhi Public School, Panathur",
        name: "Delhi Public School, Panathur",
        destination: "Delhi Public School, Panathur, Bengaluru, Karnataka 560087",
        coordinates: {"lat":12.9245,"lon":77.7125},
        distance: "2.4 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Trends Carmelaram",
        name: "Trends Carmelaram",
        destination: "Trends, Sarjapur Road, Bengaluru, Karnataka 560035",
        coordinates: {"lat":12.9095,"lon":77.705},
        distance: "1.4 km",
        icon: "fa-solid fa-bag-shopping",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-lakeside-orchard/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-lakeside-orchard/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-lakeside-orchard/gallery/amenites-view.webp"),
    ],
  },
  {
    id: "godrej-regent-park",
    thumbnail: godrejImage("godrej-properties/godrej-regent-park/thumbnail.webp"),
    title: "Godrej Regent Park",
    location: "Kada Agrahara, Sarjapur, Bengaluru, Karnataka 562125",
    coordinates: {"lat":12.8872,"lon":77.7554},
    mapsQuery: "Godrej Regent Park, Sarjapur, Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 1.44,
    price: "₹ 1.44 Cr*",
    area: "7.5 Acres",
    floorPlans: [
      {
        id: "2bhk-luke",
        bhk: "2 BHK Luke",
        area: "1,240 Sq. Ft.",
        price: "₹ 1.44 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-regent-park/floor-plans/2bhk(lk)-floor-plan.webp"),
      },
      {
        id: "3bhk-premium",
        bhk: "3 BHK Premium",
        area: "1,500 Sq. Ft.",
        price: "₹ 1.80 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-regent-park/floor-plans/3bhk(pre)-floor-plan.webp"),
      },
      {
        id: "3bhk-luke",
        bhk: "3 BHK Luke",
        area: "1,800 Sq. Ft.",
        price: "₹ 2.16 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-regent-park/floor-plans/3bhk(lk)floor-plan.webp"),
      },
    ],
    possession: "July 2031",
    units: "518",
    highlight: "35+ Amenities & Gated Security",
    reraId: "PRM/KA/RERA/1251/308/PR/150726/008810",
        highlights: [
      "35+ Amenities & Gated Security",
      "Expansive 7.5 Acres development with landscaped open spaces",
      "Thoughtfully planned 2 BHK Luke, 3 BHK Premium, 3 BHK Luke layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: July 2031",
      "Premium lifestyle amenities including Swimming Pool, Fully Equipped Gymnasium, Skating Rink",
      "Prime connectivity with proximity to Health care Pharma (700 m)",
      "RERA Approved Project: PRM/KA/RERA/1251/308/PR/150726/008810",
    ],
    summary:
      "A premium residential project offering modern 2 and 3 BHK apartments along the thriving Sarjapur Road corridor in East Bengaluru.",
    description:
      "Godrej Regent Park by Godrej Properties is located at Kada Agrahara, Sarjapur Road, Bengaluru. Featuring thoughtful architecture, over 35+ lifestyle and wellness amenities, and close proximity to major tech hubs like Wipro SEZ and RGA Tech Park, it offers contemporary urban living in a secure gated community.",
    amenities: [
      { name: "Swimming Pool", icon: "fa-water-ladder" },
      { name: "Fully Equipped Gymnasium", icon: "fa-dumbbell" },
      { name: "Skating Rink", icon: "fa-person-skating" },
      { name: "Golf Putting & Box Cricket", icon: "fa-golf-ball-tee" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Steam & Sauna", icon: "fa-spa" },
      { name: "Yoga Deck", icon: "fa-person-dots-from-line" },
      { name: "Indoor Games Room & Residents Lounge", icon: "fa-gamepad" },
      { name: "BBQ Area", icon: "fa-fire" },
    ],
    connectivity: [
      {
        label: "Health care Pharma",
        name: "Health care Pharma",
        destination: "Kada Agrahara, Sarjapur, Bengaluru, Karnataka 562125",
        coordinates: {"lat":12.8895,"lon":77.7595},
        distance: "700 m",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Little Elly Preschool",
        name: "Little Elly Preschool",
        destination: "Little Elly Preschool, Sarjapur, Bengaluru, Karnataka 562125",
        coordinates: {"lat":12.885,"lon":77.761},
        distance: "1.1 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Amruth Park Land",
        name: "Amruth Park Land",
        destination: "Amruth Park Land, Sarjapur, Bengaluru, Karnataka 562125",
        coordinates: {"lat":12.882,"lon":77.768},
        distance: "2.3 km",
        icon: "fa-solid fa-tree",
      },
      {
        label: "Dommasandra Market",
        name: "Dommasandra Market",
        destination: "Dommasandra Circle, Sarjapur Road, Bengaluru, Karnataka 562125",
        coordinates: {"lat":12.8795,"lon":77.749},
        distance: "2.4 km",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        label: "Head Start Educational Academy",
        name: "Head Start Educational Academy",
        destination: "Head Start Educational Academy, Sarjapur, Bengaluru, Karnataka 562125",
        coordinates: {"lat":12.8855,"lon":77.742},
        distance: "2.3 km",
        icon: "fa-solid fa-graduation-cap",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-regent-park/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-regent-park/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-regent-park/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-woodscapes-phase-2",
    thumbnail: godrejImage("godrej-properties/godrej-woodscape-phase-two/thumbnail.webp"),
    title: "Godrej Woodscapes Phase 2",
    location:
      "Nimbekaipura, Konadasapura Village, Budigere Cross, Bengaluru, Karnataka 560049",
    coordinates: {"lat":13.0489,"lon":77.7478},
    mapsQuery: "Godrej Woodscapes Phase 2, Budigere Cross, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 4.1,
    price: "₹ 4.1 Cr*",
    area: "3 Acres",
    floorPlans: [
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "2,846 sq.ft.",
        price: "₹ 4.1 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-woodscape-phase-two/floor-plans/4bhk-floor-plans.webp"),
      },
    ],
    possession: "June 2030",
    units: "232",
    highlight: "Emerald Skywalk & 36+ Nature-Inspired Amenities",
    reraId: "PRM/KA/RERA/1251/446/PR/170524/006882",
        highlights: [
      "Emerald Skywalk & 36+ Nature-Inspired Amenities",
      "Expansive 3 Acres development with landscaped open spaces",
      "Thoughtfully planned 4 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: June 2030",
      "Premium lifestyle amenities including Temperature Controlled Pool, Gym, Tennis Court",
      "Prime connectivity with proximity to Dr1 Gene Clinic (140 m)",
      "RERA Approved Project: PRM/KA/RERA/1251/446/PR/170524/006882",
    ],
    summary:
      "A high-rise residential project featuring spacious 4 BHK apartments with nature-inspired lifestyle amenities at Budigere Cross, East Bengaluru.",
    description:
      "Godrej Woodscapes Phase 2 by Godrej Properties Limited offers premium 4 BHK apartments located at Konadasapura Village, near Budigere Cross, Bengaluru. The high-rise township combines contemporary architectural design with over 36 nature-focused lifestyle amenities including an Emerald Skywalk, health trail, temperature-controlled pool, and lavish clubhouse, offering seamless connectivity to Whitefield, ITPL, and Old Madras Road.",
    amenities: [
      { name: "Temperature Controlled Pool", icon: "fa-water-ladder" },
      { name: "Gym", icon: "fa-dumbbell" },
      { name: "Tennis Court", icon: "fa-table-tennis-paddle-ball" },
      { name: "Futsal Court", icon: "fa-futbol" },
      { name: "Health Trail & Outdoor Gym", icon: "fa-person-running" },
      { name: "Emerald Skywalk", icon: "fa-person-walking" },
      { name: "Lavish Clubhouse & Health Café", icon: "fa-building" },
      { name: "Water Play Court & Skate Park", icon: "fa-child" },
      { name: "Party Lawn & Barbeque Deck", icon: "fa-fire" },
    ],
    connectivity: [
      {
        label: "Dr1 Gene Clinic",
        name: "Dr1 Gene Clinic",
        destination: "Budigere Cross, Old Madras Road, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.0498,"lon":77.7485},
        distance: "140 m",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "SLNS GARUDA COMPLEX",
        name: "SLNS GARUDA COMPLEX",
        destination: "Old Madras Road, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.048,"lon":77.749},
        distance: "140 m",
        icon: "fa-solid fa-building",
      },
      {
        label: "OM CITY",
        name: "OM CITY",
        destination: "Konadasapura, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.051,"lon":77.7465},
        distance: "230 m",
        icon: "fa-solid fa-city",
      },
      {
        label: "Prerana International School",
        name: "Prerana International School",
        destination: "Prerana International School, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.0535,"lon":77.745},
        distance: "550 m",
        icon: "fa-solid fa-school",
      },
      {
        label: "The Royal Orchid International Pre School",
        name: "The Royal Orchid International Pre School",
        destination: "Royal Orchid Pre School, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.0525,"lon":77.744},
        distance: "550 m",
        icon: "fa-solid fa-school",
      },
      {
        label: "Kidzee - Budigere Cross",
        name: "Kidzee - Budigere Cross",
        destination: "Kidzee, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.054,"lon":77.746},
        distance: "550 m",
        icon: "fa-solid fa-school",
      },
      {
        label: "Snowman Logistics Limited",
        name: "Snowman Logistics Limited",
        destination: "Snowman Logistics, Old Madras Road, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.0425,"lon":77.752},
        distance: "800 m",
        icon: "fa-solid fa-warehouse",
      },
      {
        label: "Budigere Cross Bus Stop",
        name: "Budigere Cross Bus Stop",
        destination: "Budigere Cross Bus Stop, Old Madras Road, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.045,"lon":77.7495},
        distance: "1.1 km",
        icon: "fa-solid fa-bus",
      },
      {
        label: "Nimbekaipura Lake",
        name: "Nimbekaipura Lake",
        destination: "Nimbekaipura Lake, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.058,"lon":77.742},
        distance: "1.3 km",
        icon: "fa-solid fa-water",
      },
      {
        label: "Shell Petrol Station",
        name: "Shell Petrol Station",
        destination: "Shell Petrol Bunk, Old Madras Road, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.041,"lon":77.756},
        distance: "1.4 km",
        icon: "fa-solid fa-gas-pump",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-woodscape-phase-two/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-woodscape-phase-two/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-woodscape-phase-two/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-aveline",
    thumbnail: godrejImage("godrej-properties/godrej-aveline/thumbnail.webp"),
    title: "Godrej Aveline",
    location:
      "Kogilu Cross, Airport Road (NH-44), Yelahanka, Bengaluru, Karnataka 560064",
    coordinates: {"lat":13.1189,"lon":77.6087},
    mapsQuery: "Godrej Aveline, Kogilu Cross, Yelahanka, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.9,
    price: "₹ 2.9 Cr*",
    area: "10.1 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,601-1,907 sq.ft.",
        price: "₹ 2.90 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-aveline/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,138 sq.ft.",
        price: "₹ 3.90 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-aveline/floor-plans/3.5bhk-floor-plan.webp"),
      },
      {
        id: "4.5bhk",
        bhk: "4.5 BHK",
        area: "2,514 sq.ft.",
        price: "₹ 4.60 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-aveline/floor-plans/4.5bhk-floor-plan.webp"),
      },
    ],
    possession: "March 2031",
    units: "814",
    highlight:
      "Dutch Design-Inspired Architecture with Sunlit Spaces and Garden Living",
    reraId: "PRM/KA/RERA/1251/309/PR/020326/008501",
        highlights: [
      "Dutch Design-Inspired Architecture with Sunlit Spaces and Garden Living",
      "Expansive 10.1 Acres development with landscaped open spaces",
      "Thoughtfully planned 3 BHK, 3.5 BHK, 4.5 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: March 2031",
      "Premium lifestyle amenities including Swimming Pool, Clubhouse, Gaming Area",
      "Prime connectivity with proximity to Bagalur Cross Metro (1 Min)",
      "RERA Approved Project: PRM/KA/RERA/1251/309/PR/020326/008501",
    ],
    summary:
      "A premium residential project offering 3, 3.5, and 4.5 BHK Dutch-design inspired apartments located on Airport Road in Yelahanka, North Bengaluru.",
    description:
      "Godrej Aveline by Godrej Properties Limited brings sun-drenched, Dutch design-inspired residential living to Yelahanka on Airport Road, Bengaluru. Featuring natural gardens, expansive lifestyle and landscape amenities, a modern clubhouse, and rapid connectivity to Bagalur Cross Metro, Yelahanka Metro, top international schools, and healthcare facilities.",
    amenities: [
      { name: "Swimming Pool", icon: "fa-water-ladder" },
      { name: "Clubhouse", icon: "fa-building" },
      { name: "Gaming Area", icon: "fa-gamepad" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Landscape Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "Bagalur Cross Metro",
        name: "Bagalur Cross Metro",
        destination: "Bagalur Cross Metro Station, Airport Road, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1235,"lon":77.611},
        distance: "1 Min",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Manipal Hospital, Yelahanka",
        name: "Manipal Hospital, Yelahanka",
        destination: "Manipal Hospital, Kogilu Cross, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1165,"lon":77.606},
        distance: "1 Min",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Cytecare Cancer Hospital",
        name: "Cytecare Cancer Hospital",
        destination: "Cytecare Hospital, Bagalur Cross, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1255,"lon":77.6135},
        distance: "3 Min",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Yelahanka Metro Station",
        name: "Yelahanka Metro Station",
        destination: "Yelahanka Metro Station, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1095,"lon":77.5985},
        distance: "5 Min",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Ryan International School",
        name: "Ryan International School",
        destination: "Ryan International School, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.128,"lon":77.595},
        distance: "6 Min",
        icon: "fa-solid fa-school",
      },
      {
        label: "Canadian International School",
        name: "Canadian International School",
        destination: "Canadian International School, Kogilu Main Rd, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.138,"lon":77.602},
        distance: "6 Min",
        icon: "fa-solid fa-school",
      },
      {
        label: "RMZ Galleria Mall",
        name: "RMZ Galleria Mall",
        destination: "RMZ Galleria Mall, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1023,"lon":77.5894},
        distance: "10 Min",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        label: "Garuda Mall",
        name: "Garuda Mall",
        destination: "Garuda Mall, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.105,"lon":77.585},
        distance: "13 Min",
        icon: "fa-solid fa-cart-shopping",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-aveline/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-aveline/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-aveline/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-florenne",
    thumbnail: godrejImage("godrej-properties/godrej-florence/thumbnail.webp"),
    title: "Godrej Florenne",
    location:
      "XRC2+QJP, Off Soukya Road, Hemmandahalli, Whitefield, Bengaluru, Karnataka 560117",
    coordinates: {"lat":12.9862,"lon":77.7834},
    mapsQuery: "Godrej Florenne, Soukya Road, Whitefield, Bengaluru",
    category: "new-launch",
    type: "villa",
    priceValue: 4.85,
    price: "₹ 4.85 Cr*",
    area: "20 Acres",
    floorPlans: [
      {
        id: "4bhk-optima",
        bhk: "4 BHK Optima",
        area: "3700 sq.ft.",
        price: "₹ 4.85 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-florence/floor-plans/4bhk(op)-floor-plan.webp"),
      },
      {
        id: "4bhk-premia",
        bhk: "4 BHK Premia",
        area: "4000 sq.ft.",
        price: "₹ 5.10 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-florence/floor-plans/4bhk(pr)-floor-plan.webp"),
      },
      {
        id: "4bhk-luxe",
        bhk: "4 BHK Luxe",
        area: "4500 sq.ft.",
        price: "₹ 5.69 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-florence/floor-plans/4bhk(lx)-floor-plan.webp"),
      },
      {
        id: "5bhk-luxe",
        bhk: "5 BHK Luxe",
        area: "5500 sq.ft.",
        price: "₹ 6.77 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-florence/floor-plans/5bhk-floor-plan.webp"),
      },
    ],
    possession: "September 2031",
    units: "242 ultra-luxury row house villas",
    highlight:
      "French Renaissance-Inspired Architecture with Private Outdoor Spaces and Courtyards",
    reraId: "PRM/KA/RERA/1250/304/PR/150926/008942",
        highlights: [
      "French Renaissance-Inspired Architecture with Private Outdoor Spaces and Courtyards",
      "Expansive 20 Acres development with landscaped open spaces",
      "Thoughtfully planned 4 BHK Optima, 4 BHK Premia, 4 BHK Luxe, 5 BHK Luxe layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: September 2031",
      "Premium lifestyle amenities including Gymnasium, Kids Play Area, Landscape Padel",
      "Prime connectivity with proximity to Soukya Road (8 Mins)",
      "RERA Approved Project: PRM/KA/RERA/1250/304/PR/150926/008942",
    ],
    summary:
      "An ultra-premium French-inspired villa community featuring spacious 4 and 5 BHK row villas off Soukya Road in Whitefield, East Bengaluru.",
    description:
      "Godrej Florenne by Godrej Properties Limited offers ultra-premium 4 and 5 BHK row villas located off Soukya Road, Whitefield, Bengaluru. Designed by architect Hafeez Contractor, the community blends French Renaissance architectural elegance with open courtyards, private balconies, terrace spaces, and lifestyle amenities surrounded by Whitefield's major tech and school corridors.",
    amenities: [
      { name: "Gymnasium", icon: "fa-dumbbell" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Landscape Padel", icon: "fa-table-tennis-paddle-ball" },
      { name: "Landscape View Amphitheatre", icon: "fa-masks-theater" },
      { name: "Gazebo", icon: "fa-campground" },
      { name: "Natural Trail", icon: "fa-person-running" },
      { name: "Open Courtyard", icon: "fa-tree" },
      { name: "Private Balconies & Terrace", icon: "fa-building" },
    ],
    connectivity: [
      {
        label: "Soukya Road",
        name: "Soukya Road",
        destination: "Soukya Road, Whitefield, Bengaluru, Karnataka 560117",
        coordinates: {"lat":12.989,"lon":77.781},
        distance: "8 Mins",
        icon: "fa-solid fa-road",
      },
      {
        label: "RKB Sanjeevini Hospital",
        name: "RKB Sanjeevini Hospital",
        destination: "RKB Sanjeevini Hospital, Whitefield, Bengaluru, Karnataka 560117",
        coordinates: {"lat":12.984,"lon":77.776},
        distance: "8 Mins",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Shri Ram Global School",
        name: "Shri Ram Global School",
        destination: "Shri Ram Global School, Whitefield, Bengaluru, Karnataka 560117",
        coordinates: {"lat":12.991,"lon":77.772},
        distance: "12 Mins",
        icon: "fa-solid fa-school",
      },
      {
        label: "Myntra Whitefield Warehouse",
        name: "Myntra Whitefield Warehouse",
        destination: "Soukya Road, Whitefield, Bengaluru, Karnataka 560117",
        coordinates: {"lat":12.995,"lon":77.788},
        distance: "12 Mins",
        icon: "fa-solid fa-warehouse",
      },
      {
        label: "Whitefield Railway Station",
        name: "Whitefield Railway Station",
        destination: "Whitefield Railway Station, Kadugodi, Bengaluru, Karnataka 560067",
        coordinates: {"lat":12.996,"lon":77.761},
        distance: "15 Mins",
        icon: "fa-solid fa-train",
      },
      {
        label: "Hope Farm Junction",
        name: "Hope Farm Junction",
        destination: "Hope Farm Junction, Whitefield, Bengaluru, Karnataka 560066",
        coordinates: {"lat":12.9835,"lon":77.7515},
        distance: "20 Mins",
        icon: "fa-solid fa-location-dot",
      },
      {
        label: "Kadugodi Metro Station",
        name: "Kadugodi Metro Station",
        destination: "Kadugodi Tree Park Metro Station, Whitefield, Bengaluru, Karnataka 560067",
        coordinates: {"lat":12.998,"lon":77.7595},
        distance: "20 Mins",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "MVJ College of Engineering",
        name: "MVJ College of Engineering",
        destination: "MVJ College of Engineering, Whitefield, Bengaluru, Karnataka 560067",
        coordinates: {"lat":12.985,"lon":77.758},
        distance: "22 Mins",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "ITPL / Whitefield Main Road",
        name: "ITPL / Whitefield Main Road",
        destination: "International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066",
        coordinates: {"lat":12.9875,"lon":77.738},
        distance: "25 Mins",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Ascendas Park Square Mall",
        name: "Ascendas Park Square Mall",
        destination: "Park Square Mall, ITPB, Whitefield, Bengaluru, Karnataka 560066",
        coordinates: {"lat":12.986,"lon":77.736},
        distance: "35 Mins",
        icon: "fa-solid fa-cart-shopping",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-florence/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-florence/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-florence/gallery/amenites-view.webp"),
    ],
  },
  {
    id: "barca-at-godrej-msr-city",
    thumbnail: godrejImage("godrej-properties/barca-at-godrej-msr-city/thumbnail.webp"),
    title: "Barca at Godrej MSR City",
    location:
      "Yerthiganahalli, Shettigere, Devanahalli, Bengaluru, Karnataka 562157",
    coordinates: {"lat":13.2145,"lon":77.6698},
    mapsQuery: "Barca at Godrej MSR City, Shettigere, Devanahalli, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.79,
    price: "₹ 1.79 Cr*",
    area: "17 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1610 - 1860 sq.ft.",
        price: "₹ 1.79 Cr Onwards",
        image: godrejImage("godrej-properties/barca-at-godrej-msr-city/floor-plans/3bhk-floor-plans.webp"),
      },
    ],
    possession: "March 2030",
    units: "1,961",
    highlight:
      "Barcelona-Inspired Architecture with Mediterranean Charm and Sunlit Landscapes",
    reraId: "PRM/KA/RERA/1250/303/PR/010425/007644",
        highlights: [
      "Barcelona-Inspired Architecture with Mediterranean Charm and Sunlit Landscapes",
      "Expansive 17 Acres development with landscaped open spaces",
      "Thoughtfully planned 3 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: March 2030",
      "Premium lifestyle amenities including Clubhouse, Swimming Pool, Gymnasium",
      "Prime connectivity with proximity to Kempegowda International Airport (10 Mins)",
      "RERA Approved Project: PRM/KA/RERA/1250/303/PR/010425/007644",
    ],
    summary:
      "A Barcelona-inspired residential enclave featuring premium 2 and 3 BHK apartments located in North Bengaluru's growth corridor near Devanahalli.",
    description:
      "Barca at Godrej MSR City by Godrej Properties Limited brings Mediterranean-inspired urban living to Yerthiganahalli, North Bengaluru. Set within expansive sunlit landscapes, the development features thoughtful architectural spaces, signature clubhouses, and extensive resort-style amenities with swift connectivity to Kempegowda International Airport and major business parks.",
    amenities: [
      { name: "Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium", icon: "fa-dumbbell" },
      { name: "Football Court", icon: "fa-futbol" },
      { name: "Pet Park", icon: "fa-dog" },
      { name: "Walking & Cycling Trails", icon: "fa-person-running" },
      { name: "Central Landscaped Garden", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: {"lat":13.1986,"lon":77.7066},
        distance: "10 Mins",
        icon: "fa-solid fa-plane",
      },
      {
        label: "Delhi Public School",
        name: "Delhi Public School",
        destination: "Delhi Public School Bangalore North, Bagalur, Bengaluru, Karnataka 562149",
        coordinates: {"lat":13.205,"lon":77.658},
        distance: "Nearby",
        icon: "fa-solid fa-school",
      },
      {
        label: "Reva University",
        name: "Reva University",
        destination: "REVA University, Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1155,"lon":77.636},
        distance: "Nearby",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Relive Hospital Bagalur",
        name: "Relive Hospital Bagalur",
        destination: "Relive Hospital, Bagalur, Bengaluru, Karnataka 562149",
        coordinates: {"lat":13.136,"lon":77.674},
        distance: "Nearby",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "IFCI Financial City",
        name: "IFCI Financial City",
        destination: "Hardware Park & Financial City, Bagalur, Bengaluru, Karnataka 562149",
        coordinates: {"lat":13.178,"lon":77.672},
        distance: "Nearby",
        icon: "fa-solid fa-building-columns",
      },
      {
        label: "Prestige 13 North Mall",
        name: "Prestige 13 North Mall",
        destination: "Prestige Mall, Bellary Road, Bengaluru, Karnataka 562157",
        coordinates: {"lat":13.155,"lon":77.64},
        distance: "Nearby",
        icon: "fa-solid fa-bag-shopping",
      }
    ],
    images: [
      godrejImage("godrej-properties/barca-at-godrej-msr-city/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/barca-at-godrej-msr-city/gallery/interior-view.webp"),
      godrejImage("godrej-properties/barca-at-godrej-msr-city/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-parkshire",
    thumbnail: godrejImage("godrej-properties/godrej-parkshire/thumbnail.webp"),
    title: "Godrej Parkshire",
    location:
      "Sarakariguttahalli, Dodda Amanikere, Hoskote, Bengaluru, Karnataka 562114",
    coordinates: {"lat":13.0645,"lon":77.7989},
    mapsQuery: "Godrej Parkshire, Hoskote, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.35,
    price: "₹ 1.35 Cr*",
    area: "13.5 Acres",
    floorPlans: [
      {
        id: "2bhk-luxe",
        bhk: "2 BHK Luxe",
        area: "1200 sq.ft.",
        price: "₹ 1.35 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-parkshire/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1600 sq.ft.",
        price: "₹ 1.78 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-parkshire/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "1750 sq.ft.",
        price: "₹ 1.94 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-parkshire/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "December 2030",
    units: "1132",
    highlight:
      "6.5+ Acres of Lush Central Greenery with Greenscape Skywalk & 32,500+ Sq. Ft. Clubhouse",
    reraId: "PRM/KA/RERA/1250/304/PR/090126/008393",
        highlights: [
      "6.5+ Acres of Lush Central Greenery with Greenscape Skywalk & 32,500+ Sq. Ft. Clubhouse",
      "Expansive 13.5 Acres development with landscaped open spaces",
      "Thoughtfully planned 2 BHK Luxe, 3 BHK, 4 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: December 2030",
      "Premium lifestyle amenities including Greenscape Skywalk, Grand Clubhouse, Swimming Pool",
      "Prime connectivity with proximity to Old Madras Road (7 Mins)",
      "RERA Approved Project: PRM/KA/RERA/1250/304/PR/090126/008393",
    ],
    summary:
      "A large-scale nature-focused high-rise residential community offering 2 and 3 BHK apartments in the Whitefield-Hoskote corridor, East Bengaluru.",
    description:
      "Godrej Parkshire by Godrej Properties Limited offers high-rise 2 and 3 BHK apartments spread over 13.5 acres in Hoskote, East Bengaluru. Featuring over 6.5 acres of expansive greens, a greenscape skywalk, an avian sanctuary, dedicated co-working nature pods, and a grand 32,500+ sq. ft. clubhouse, the project enjoys smooth connectivity to Old Madras Road, Whitefield Metro, and major industrial hubs.",
    amenities: [
      { name: "Greenscape Skywalk", icon: "fa-person-walking" },
      { name: "Grand Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool", icon: "fa-water-ladder" },
      { name: "Tennis & Futsal Court", icon: "fa-table-tennis-paddle-ball" },
      { name: "Nature Work Pods", icon: "fa-laptop-code" },
      { name: "Avian Sanctuary & Butterfly Park", icon: "fa-tree" },
      { name: "Beach Volleyball Court", icon: "fa-volleyball" },
      { name: "Gymnasium", icon: "fa-dumbbell" },
    ],
    connectivity: [
      {
        label: "Old Madras Road",
        name: "Old Madras Road",
        destination: "Old Madras Road (NH-75), Hoskote, Bengaluru, Karnataka 562114",
        coordinates: {"lat":13.058,"lon":77.785},
        distance: "7 Mins",
        icon: "fa-solid fa-road",
      },
      {
        label: "Siliconcity Hospital",
        name: "Siliconcity Hospital",
        destination: "Siliconcity Hospital, Hoskote, Bengaluru, Karnataka 562114",
        coordinates: {"lat":13.068,"lon":77.792},
        distance: "7 Mins",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Delhi Public School",
        name: "Delhi Public School",
        destination: "Delhi Public School Whitefield, Hoskote Road, Bengaluru, Karnataka 562114",
        coordinates: {"lat":13.075,"lon":77.782},
        distance: "8 Mins",
        icon: "fa-solid fa-school",
      },
      {
        label: "MVJ Medical College & Research Hospital",
        name: "MVJ Medical College & Research Hospital",
        destination: "MVJ Medical College and Research Hospital, Hoskote, Bengaluru, Karnataka 562114",
        coordinates: {"lat":13.072,"lon":77.804},
        distance: "10 Mins",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Orion Uptown Mall",
        name: "Orion Uptown Mall",
        destination: "Orion Uptown Mall, Old Madras Road, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.046,"lon":77.751},
        distance: "12 Mins",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        label: "Hoskote Industrial Area",
        name: "Hoskote Industrial Area",
        destination: "KIADB Hoskote Industrial Area, Bengaluru, Karnataka 562114",
        coordinates: {"lat":13.082,"lon":77.818},
        distance: "16 Mins",
        icon: "fa-solid fa-industry",
      },
      {
        label: "Decathlon OMR",
        name: "Decathlon OMR",
        destination: "Decathlon Old Madras Road, Budigere Cross, Bengaluru, Karnataka 560049",
        coordinates: {"lat":13.042,"lon":77.748},
        distance: "16 Mins",
        icon: "fa-solid fa-bicycle",
      },
      {
        label: "Whitefield Metro Station",
        name: "Whitefield Metro Station",
        destination: "Kadugodi Metro Station, Whitefield, Bengaluru, Karnataka 560067",
        coordinates: {"lat":12.998,"lon":77.7595},
        distance: "22 Mins",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "ITPB / Whitefield Tech Corridor",
        name: "ITPB / Whitefield Tech Corridor",
        destination: "International Tech Park Bangalore (ITPB), Whitefield, Bengaluru, Karnataka 560066",
        coordinates: {"lat":12.9875,"lon":77.738},
        distance: "24 Mins",
        icon: "fa-solid fa-laptop-code",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-parkshire/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-parkshire/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-parkshire/gallery/amenities.webp"),
    ],
  },
  {
    id: "godrej-woods",
    thumbnail: godrejImage("godrej-properties/godrej-woods/thumbnail.webp"),
    title: "Godrej Woods",
    location:
      "Srinivaspur, Mittaganahalli, Thanisandra Main Road, Bengaluru, Karnataka 560064",
    coordinates: {"lat":13.0872,"lon":77.6385},
    mapsQuery: "Godrej Woods, Thanisandra Main Road, Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 1.7,
    price: "₹ 1.70 Cr*",
    area: "6.8 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "1,190 sq.ft.",
        price: "₹ 1.70 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-woods/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "2,180 sq.ft.",
        price: "₹ 2.50 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-woods/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3.5bhk",
        bhk: "3.5 BHK",
        area: "2,300",
        price: "₹ 2.90 Cr Onwards",
        image: godrejImage("godrej-properties/godrej-woods/floor-plans/3.5bhk-floor-plans.webp"),
      },
    ],
    possession: "November 2030",
    units: "558",
    highlight:
      "Forest-Themed Living with Lush Greens, Water Features and Grand Clubhouse",
    reraId: "PRM/KA/RERA/1251/472/PR/121125/008248",
        highlights: [
      "Forest-Themed Living with Lush Greens, Water Features and Grand Clubhouse",
      "Expansive 6.8 Acres development with landscaped open spaces",
      "Thoughtfully planned 2 BHK, 3 BHK, 3.5 BHK layouts designed for optimal ventilation & natural lighting",
      "Project possession timeline: November 2030",
      "Premium lifestyle amenities including Fully Equipped Clubhouse, Swimming Pool & Lap Pool, Gymnasium",
      "Prime connectivity with proximity to REVA University (2 Mins)",
      "RERA Approved Project: PRM/KA/RERA/1251/472/PR/121125/008248",
    ],
    summary:
      "A forest-themed high-rise residential community featuring 2, 3, and 3.5 BHK apartments off Thanisandra Main Road in North Bengaluru.",
    description:
      "Godrej Woods by Godrej Properties Limited brings a forest-inspired living experience to Thanisandra Main Road, North Bengaluru. Spread across 6.8 acres, the project offers lush green surroundings, a fully equipped clubhouse, swimming pool, yoga decks, and smooth connectivity to Manyata Tech Park, Hebbal, and Kempegowda International Airport.",
    amenities: [
      { name: "Fully Equipped Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Lap Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga Deck", icon: "fa-spa" },
      { name: "Kids Play Area", icon: "fa-child" },
      { name: "Multiple Sports Courts", icon: "fa-table-tennis-paddle-ball" },
      { name: "Landscaped Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "REVA University",
        name: "REVA University",
        destination: "REVA University, Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.1155,"lon":77.636},
        distance: "2 Mins",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        label: "Upcoming Metro Station",
        name: "Upcoming Metro Station",
        destination: "Thanisandra Metro Station, Bengaluru, Karnataka 560077",
        coordinates: {"lat":13.075,"lon":77.632},
        distance: "10 Mins",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Manyata Tech Park",
        name: "Manyata Tech Park",
        destination: "Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045",
        coordinates: {"lat":13.0456,"lon":77.6212},
        distance: "15 Mins",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Hebbal Flyover",
        name: "Hebbal Flyover",
        destination: "Hebbal Flyover, Bellary Road, Bengaluru, Karnataka 560024",
        coordinates: {"lat":13.038,"lon":77.592},
        distance: "15 Mins",
        icon: "fa-solid fa-road",
      },
      {
        label: "Yelahanka Railway Station",
        name: "Yelahanka Railway Station",
        destination: "Yelahanka Junction Railway Station, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.101,"lon":77.596},
        distance: "15 Mins",
        icon: "fa-solid fa-train",
      },
      {
        label: "Elements Mall",
        name: "Elements Mall",
        destination: "Elements Mall, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560077",
        coordinates: {"lat":13.045,"lon":77.635},
        distance: "12 Mins",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        label: "Phoenix Mall of Asia",
        name: "Phoenix Mall of Asia",
        destination: "Phoenix Mall of Asia, Bellary Road, Byatarayanapura, Bengaluru, Karnataka 560092",
        coordinates: {"lat":13.0585,"lon":77.591},
        distance: "15 Mins",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: {"lat":13.1986,"lon":77.7066},
        distance: "30 Mins",
        icon: "fa-solid fa-plane",
      }
    ],
    images: [
      godrejImage("godrej-properties/godrej-woods/gallery/exterior-view.webp"),
      godrejImage("godrej-properties/godrej-woods/gallery/interior-view.webp"),
      godrejImage("godrej-properties/godrej-woods/gallery/amenities.webp"),
    ],
  },
];

const overviewSearchTerms = [
  "Godrej Properties in Bangalore",
  "Godrej projects in Bangalore",
  "Godrej apartments in Bangalore",
  "Godrej Group in Bangalore",
  "Godrej North Bangalore",
  "Godrej Properties Bangalore",
  "Godrej apartments Bangalore",
];

function formatOverviewList(values) {
  if (values.length < 2) return values[0] || "";
  return `${values.slice(0, -1).join(", ")} and ${values[values.length - 1]}`;
}

export function createPropertyOverview(property) {
  const projectIndex = godrejProjects.findIndex(({ id }) => id === property.id);
  const searchTerm =
    overviewSearchTerms[
      (projectIndex >= 0 ? projectIndex : 0) % overviewSearchTerms.length
    ];
  const floorPlans = formatOverviewList(
    (property.floorPlans || []).slice(0, 3).map(({ bhk }) => bhk),
  );
  const allBhks = formatOverviewList(
    [...new Set((property.floorPlans || []).map(({ bhk }) => bhk))],
  );
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
    `${property.description} Buyers researching ${searchTerm} can explore Godrej Properties homes in ${shortAddress}, with project status, location, and configuration details available to compare.`,
    `${property.title} is listed with ${bhkSummary} across ${property.area}, with ${statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || bhkSummary}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || shortAddress}. Review this Godrej Properties project's floor plans, amenities, and connectivity when comparing homes in Bengaluru.${property.reraId ? ` RERA registration number: ${property.reraId.replace(/\.$/, "")}.` : ""}`,
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
  "godrej-vanantara": "Bannerghatta Road, Bengaluru",
  "godrej-athena": "Indiranagar - HAL, Bengaluru",
  "godrej-lakeside-orchard": "Sarjapur Road, Bengaluru",
  "godrej-regent-park": "Sarjapur, Bengaluru",
  "godrej-woodscapes-phase-2": "Budigere Cross, Bengaluru",
  "godrej-aveline": "Airport Road, Yelahanka, Bengaluru",
  "godrej-florenne": "Whitefield, Bengaluru",
  "barca-at-godrej-msr-city": "Devanahalli, Bengaluru",
  "godrej-parkshire": "Hoskote, Bengaluru",
  "godrej-woods": "Thanisandra Main Road, Bengaluru"
};

godrejProjects.forEach((property) => {
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

export const godrejData = godrejProjects;

export const godrejFaqs = [
  {
    question: "Who is the owner of Godrej Properties?",
    answer:
      "Godrej Properties Limited is a publicly traded company listed on the BSE and NSE. It belongs to the Godrej Industries Group and is led by the billionaire Godrej family, with Adi Burjorji Godrej being a principal figure.",
  },
  {
    question: "In which cities does Godrej Properties operate?",
    answer:
      "They have an active footprint across major Indian hubs, including Mumbai, Bengaluru (Bangalore), Pune, Gurugram (NCR), Hyderabad, and Chennai.",
  },
  {
    question: "Are Godrej projects legally compliant?",
    answer:
      "Yes, all new and ongoing Godrej Properties projects are registered under the respective state's Real Estate Regulatory Authority (RERA). You can find specific RERA registration numbers directly listed on each project's official brochure or state portal.",
  },
  {
    question: "What was Godrej Properties' first project?",
    answer:
      "Godrej Properties' first project was Godrej Edenwoods, a residential housing development launched in Thane, Mumbai, in 1991.",
  },
  {
    question: "What is the history of Godrej Properties?",
    answer:
      "Godrej Properties was originally incorporated in 1985 as Sea Breeze Constructions and Investments before becoming the official real estate arm of the Godrej Group in 1990.",
  },
  {
    question: "What is Godrej Properties' slogan?",
    answer:
      'Godrej Properties uses the parent Godrej Group tagline "Brighter living", alongside campaign-specific sign-offs like "Jahaan Khushiyaan Badi Hoti Hain" (where everyday joys are bigger) from their Everyday Joys brand initiatives.',
  },
  {
    question: "Is Godrej a listed company?",
    answer:
      "Yes, the Godrej Group includes several publicly listed companies trading on the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE).",
  },
  {
    question: "Who is the legal head of Godrej Properties?",
    answer:
      "Saurabh Mohindru is the Chief Legal Officer and overall legal head at Godrej Properties Limited.",
  },
  {
    question: "What is the lot size of Godrej Properties?",
    answer:
      "The market lot size for Godrej Properties futures and options trading on the National Stock Exchange (NSE) is 325 shares per contract.",
  },
  {
    question: "What are the latest news on Godrej Properties?",
    answer:
      "Godrej Properties recently announced plans to develop a major luxury housing project in Marine Lines, Mumbai, with an estimated revenue potential of ₹6,000 crore.",
  },
];

export const builderConfig = {
  slug: "godrej",
  name: "Godrej Properties",
  regions: "Bengaluru",
  theme: {
    primary: "#0F382C",
    primaryHover: "#09241C",
    accent: "#D4AF37",
    surface: "#F9FAF9",
    soft: "#E8F0EC",
    border: "#E8F0EC",
  },
  properties: godrejProjects,
  faqs: godrejFaqs,
  whatsappNumber: "",
};
