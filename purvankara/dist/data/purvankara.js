const imageCdnPrefix = "https://media.justflip.in/builder-brand-pages/";
const purvaImage = (suffix) =>
  `${imageCdnPrefix}${suffix.replace(/^\/+/, "")}`;

export const purvankaraData = [
  {
    id: "purva-heritage",
    thumbnail: purvaImage("puravankara-limited/purva-heritage/thumbnail.webp"),
    name: "Purva Heritage",
    title: "Purva Heritage",
    location:
      "Kudlu Gate Junction, Hosur Main Road, South Bengaluru, Karnataka 560068",
    coordinates: {"lat":12.8893,"lon":77.6406},
    mapsQuery: "Purva Heritage, Kudlu Gate, Hosur Road, Bengaluru",
    shortAddress: "Kudlu Gate, South Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 3.1,
    price: "₹ 3.10 Cr*",
    area: "1.7 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,900 sq.ft.",
        price: "₹ 3.10 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-heritage/floor-plans/3bhk-floor-plan.webp"),
      },
    ],
    possession: "August 2030",
    units: "148",
    highlight:
      "Ultra-Luxury Low-Density Single Tower Living with 76% Open Spaces Just 100 Metres from Kudlu Gate Metro Station",
    highlights: [
      "Expansive 17,000 sq ft clubhouse with lifestyle amenities",
      "Vast 76 percent open space for a serene, airy environment",
      "Smart homes with video door security and home automation",
      "EV charging, solar panels and eco-friendly waste management",
      "Specialized sports facilities: mini soccer and pickleball courts",
      "Ideally located just 100 Mtrs from Kudlu Gate Metro Station",
      "Boutique high-rise development with exclusive 148 rare residences"
    ],
    reraId: "PRM/KA/RERA/1251/310/PR/090726/008801",
    summary:
      "An exclusive, low-density high-rise development offering 2 and 3 BHK luxury residences right at Kudlu Gate Junction on Hosur Road, South Bengaluru.",
    description:
      "Purva Heritage by Puravankara is an ultra-luxury, low-density residential community spread across 1.68 acres bang on Hosur Main Road at Kudlu Gate Junction, South Bengaluru. Featuring an iconic high-rise tower (G+19 floors) with only 148 exclusive units, the project offers ~76% open space, a 17,000 sq. ft. grand clubhouse, 20+ handpicked lifestyle amenities, and prime connectivity—located just 100 metres from Kudlu Gate Metro Station with rapid access to HSR Layout, Silk Board, and Electronic City.",
    amenities: [
      { name: "17,000 sq.ft. Grand Clubhouse", icon: "fa-building" },
      { name: "Heated Swimming Pool & Kids' Pool", icon: "fa-water-ladder" },
      { name: "State-of-the-Art Gymnasium", icon: "fa-dumbbell" },
      {
        name: "Squash & Badminton Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Yoga & Meditation Lawn", icon: "fa-spa" },
      { name: "Rooftop Lifestyle Amenities & Outdoor Cinema", icon: "fa-film" },
      { name: "Indoor Games Room & Business Center", icon: "fa-laptop" },
      { name: "Children's Play Zone", icon: "fa-child" },
      { name: "Landscaped Open Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "Kudlu Gate Metro Station",
        name: "Kudlu Gate Metro Station",
        distance: "180 Metres",
        icon: "fa-solid fa-train-subway",
        destination: "Kudlu Gate Metro Station, Hosur Road, Bengaluru, Karnataka 560068",
        coordinates: {"lat":12.889,"lon":77.641},
      },
      {
        label: "Silk Board Junction",
        name: "Silk Board Junction",
        distance: "3.9 Km",
        icon: "fa-solid fa-road",
        destination: "Central Silk Board Junction, Outer Ring Road, Bengaluru, Karnataka 560068",
        coordinates: {"lat":12.9176,"lon":77.6238},
      },
      {
        label: "Electronic City IT Phase 1",
        name: "Electronic City IT Phase 1",
        distance: "8.3 Km",
        icon: "fa-solid fa-laptop-code",
        destination: "Electronic City Phase I, Electronic City, Karnataka 560100",
        coordinates: {"lat":12.8452,"lon":77.6602},
      },
      { 
        label: "HSR Layout Sector 1",
        name: "HSR Layout Sector 1", 
        distance: "5.5 Km", 
        icon: "fa-solid fa-road",
        destination: "HSR Layout Sector 1, Bengaluru, Karnataka 560102",
        coordinates: {"lat":12.9116,"lon":77.6389} },
      {
        label: "Nexus Mall Koramangala",
        name: "Nexus Mall Koramangala",
        distance: "6.5 Km",
        icon: "fa-solid fa-bag-shopping",
        destination: "Nexus Mall Koramangala, Hosur Road, Bengaluru, Karnataka 560095",
        coordinates: {"lat":12.9348,"lon":77.6111},
      },
      {
        label: "Narayana Hospital HSR Layout",
        name: "Narayana Hospital HSR Layout",
        distance: "3.6 Km",
        icon: "fa-solid fa-hospital",
        destination: "Narayana Multispeciality Hospital, HSR Layout, Bengaluru, Karnataka 560102",
        coordinates: {"lat":12.9125,"lon":77.6441},
      },
    ],
    images: [
      purvaImage("puravankara-limited/purva-heritage/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/purva-heritage/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/purva-heritage/gallery/amenities.webp"),
    ],
  },
  {
    id: "northern-lights-by-purvankara",
    thumbnail: purvaImage("puravankara-limited/northern-lights-by-puravankara/thumbnail.webp"),
    name: "Northern Lights By Purvankara",
    title: "Northern Lights By Purvankara",
    location:
      "Hoovinayakanahalli, KIADB Aerospace Park, off Bagalur Road, Devanahalli, Bengaluru, Karnataka 562149",
    coordinates: {"lat":13.1989,"lon":77.7064},
    mapsQuery: "Northern Lights By Purvankara, KIADB Aerospace Park, Bengaluru",
    shortAddress: "Aerospace Park, North Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 0.77,
    price: "₹ 77.00 Lakhs*",
    area: "24.59 Acres",
    floorPlans: [
      {
        id: "1bhk",
        bhk: "1 BHK",
        area: "408 sq.ft.",
        price: "₹ 77.00 Lakhs Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/1bhk-floor-plan.webp"),
      },
      {
        id: "2bhk_comfort",
        bhk: "2 BHK Comfort",
        area: "1,097 sq.ft.",
        price: "₹ 1.18 Cr Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/2bhk(cof)floor-plan.webp"),
      },
      {
        id: "2bhk_grand",
        bhk: "2 BHK Grand",
        area: "1,275 sq.ft.",
        price: "₹ 1.37 Cr Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/2bhk(grd)-floor-plan.webp"),
      },
      {
        id: "3bhk_grand",
        bhk: "3 BHK Grand",
        area: "1,685 sq.ft.",
        price: "₹ 1.76 Cr Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/3bhk(grd)floor-plan.webp"),
      },
      {
        id: "3bhk_uber",
        bhk: "3 BHK Uber + Maid's",
        area: "1,886 sq.ft.",
        price: "₹ 2.03 Cr Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/3bhk(um)-floor-plan.webp"),
      },
      {
        id: "4bhk_duplex",
        bhk: "4 BHK Grand Duplex",
        area: "4,017 sq.ft.",
        price: "₹ 4.40 Cr Onwards",
        image: purvaImage("puravankara-limited/northern-lights-by-puravankara/floor-plans/4bhk(gd)-floor-plan.webp"),
      },
    ],
    possession: "December 2029",
    units: "2973",
    highlight:
      "24.59-Acre Bali-Inspired Mega Township with Dual Grand Clubhouses (1,00,000 sq.ft.), 80% Green Open Space, and 8 High-Rise Towers (2B+G+31 Floors)",
    highlights: [
      "~77% open spaces, with lush landscaped greens",
      "~7.9 acres of central greens, thoughtfully zoned and designed",
      "~72,500 sq. ft. of curated retail within the development",
      "Dual clubhouses spanning ~1 lakh sq. ft. of lifestyle spaces",
      "80+ curated lifestyle and wellness amenities",
      "Olympic-size swimming pool designed for fitness and leisure",
      "High-tech 7D gaming experience zone for immersive entertainment"
    ],
    reraId: "PRM/KA/RERA/1250/303/PR/120326/008523",
    summary:
      "A high-rise residential township offering 1 to 4 BHK apartments and duplexes in KIADB Aerospace Park off Bagalur Road, North Bengaluru.",
    description:
      "Purva Northern Lights by Puravankara is a 24.59-acre Bali-inspired integrated township located in KIADB Aerospace Park, off Bagalur Main Road, North Bengaluru. The project features 8 high-rise towers (2B+G+30/31 floors) offering 2,973 Vaastu-compliant residences. Designed with 80% green open space, dual grand clubhouses spanning over 1,00,000 sq. ft., and over 80 lifestyle amenities, it provides quick access to Kempegowda International Airport, the Aerospace SEZ, and NH 44.",
    amenities: [
      { name: "1,00,000 sq.ft. Dual Grand Clubhouses", icon: "fa-building" },
      {
        name: "Bali-Themed Swimming Pool & Splash Pad",
        icon: "fa-water-ladder",
      },
      { name: "State-of-the-Art Fitness Center & Gym", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Deck", icon: "fa-spa" },
      {
        name: "Multi-Sport Courts & Cricket Practice Pitch",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Jogging Track & Cycling Trails", icon: "fa-person-running" },
      { name: "Children's Play Area & Creche", icon: "fa-child" },
      { name: "Mini Theatre & AV Rooms", icon: "fa-film" },
      {
        name: "Landscaped Water Features & Sculpture Gardens",
        icon: "fa-tree",
      },
    ],
    connectivity: [
      {
        label: "KIADB Aerospace Park SEZ",
        name: "KIADB Aerospace Park SEZ",
        distance: "8.3 Km",
        icon: "fa-solid fa-laptop-code",
        destination: "KIADB Aerospace SEZ, KIADB Export Promotion Industrial Area, Devanahalli, Bengaluru, Hunachur, Karnataka 562165",
        coordinates: {"lat":13.1989,"lon":77.7064},
      },
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        distance: "10.7 Km",
        icon: "fa-solid fa-plane",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: {"lat":13.1986,"lon":77.7066},
      },
      {
        label: "NH 44 (Bellary Road Interchange)",
        name: "NH 44 (Bellary Road Interchange)",
        distance: "18.3 Km",
        icon: "fa-solid fa-road",
        destination: "NH 44 Bellary Road, Yelahanka - Devanahalli Bypass, Bengaluru",
        coordinates: {"lat":13.15,"lon":77.61},
      },
      {
        label: "Manyata Tech Park",
        name: "Manyata Tech Park",
        distance: "17.1 Km",
        icon: "fa-solid fa-building-user",
        destination: "Manyata Embassy Business Park, Outer Ring Road, Nagavara, Bengaluru, Karnataka 560045",
        coordinates: {"lat":13.0475,"lon":77.6212},
      },
      {
        label: "Bhartiya City Mall & Thanisandra",
        name: "Bhartiya City Mall & Thanisandra",
        distance: "9.8 Km",
        icon: "fa-solid fa-bag-shopping",
        destination: "Bhartiya Mall of Bengaluru, Thanisandra Main Road, Bengaluru, Karnataka 560064",
        coordinates: {"lat":13.0736,"lon":77.6397},
      },
    ],
    images: [
      purvaImage("puravankara-limited/northern-lights-by-puravankara/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/northern-lights-by-puravankara/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/northern-lights-by-puravankara/gallery/amenities.webp"),
    ],
  },
  {
    id: "purva-silversky",
    thumbnail: purvaImage("puravankara-limited/purva-silversky/thumbnail.webp"),
    name: "Purva Silversky",
    title: "Purva Silversky",
    location:
      "Huskur Road, Hebbagodi, Electronic City Phase 2, Bengaluru, Karnataka 560099",
    coordinates: {"lat":12.8358,"lon":77.6892},
    mapsQuery: "Purva Silversky, Electronic City Phase 2, Bengaluru",
    shortAddress: "Electronic City, South Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 2.55,
    price: "₹ 2.55 Cr*",
    area: "6.99 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,864 sq.ft.",
        price: "₹ 2.55 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-silversky/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "2,824 sq.ft.",
        price: "₹ 2.90 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-silversky/floor-plans/4bhk-floor-plan.webp"),
      },
      {
        id: "5bhk_duplex",
        bhk: "5 BHK Duplex",
        area: "4,800 sq.ft.",
        price: "₹ 3.50 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-silversky/floor-plans/5bhk-floor-plan.webp"),
      },
    ],
    possession: "July 2030",
    units: "356",
    highlight:
      "Low-Density 6.99-Acre Living with 88% Open-to-Sky Space, Dual Balconies, and a 17,700 sq.ft. Lifestyle Clubhouse",
    highlights: [
      "356 exclusive 3 & 4 BHK residences",
      "1.7 acres of elevated podium amenities for recreation and relaxation",
      "17,700 sqft grand clubhouse, \"The Eminence Club\"",
      "Over 45 curated amenities for leisure, wellness, and an active lifestyle",
      "Healthy interiors feature low-VOC paints (< 50 g/L) for cleaner air",
      "Nature-themed amenities like a pet park, treehouse walk & climbing wall",
      "EV charging points for all units, covering 20% of parking capacity"
    ],
    reraId: "PRM/KA/RERA/1251/310/PR/151225/008338",
    summary:
      "A ultra-luxury residential enclave featuring 3, 4, and 5 BHK apartments located on Huskur Road, Electronic City Phase 2, South Bengaluru.",
    description:
      "Purva Silversky by Puravankara is a low-density luxury high-rise development spread across 6.99 acres on Huskur Road in Electronic City Phase 2, South Bengaluru. Comprising 3 architectural towers (B+G+32 floors) with only 356 residences, the project features ~88% open-to-sky living, dual balconies, 1.7 acres of elevated podium amenities, a grand 17,700 sq. ft. clubhouse, and a 200-tree mini-forest trail.",
    amenities: [
      { name: "17,700 sq.ft. Grand Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Kids Splash Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium & Fitness Pavilion", icon: "fa-dumbbell" },
      { name: "Yoga Deck & Forest Bathing Trails", icon: "fa-spa" },
      { name: "Multisensory Trail & Culinary Commons", icon: "fa-tree" },
      { name: "Mud & Brush Art Studio", icon: "fa-palette" },
      {
        name: "Multiple Sports Courts & Recreation Rooms",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Children's Play Area & Creche", icon: "fa-child" },
      { name: "Rooftop Leisure Deck & Party Lawn", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Electronic City IT Phase 2",
        name: "Electronic City IT Phase 2",
        distance: "1.5 Km",
        icon: "fa-solid fa-laptop-code",
        destination: "Electronic City phase 2, A305, Phase II, Electronic City, Bengaluru, Bhovi Palya, Karnataka 560100",
        coordinates: {"lat":12.836,"lon":77.685},
      },
      {
        label: "Hebbagodi / Huskur Road Station",
        name: "Hebbagodi / Huskur Road Station",
        distance: "4.6 Km",
        icon: "fa-solid fa-train-subway",
        destination: "Hebbagodi Metro Station, Yellow Line, Bengaluru, Karnataka 560099",
        coordinates: {"lat":12.825,"lon":77.681},
      },
      {
        label: "PES University Electronic City Campus",
        name: "PES University Electronic City Campus",
        distance: "5.2 Km",
        icon: "fa-solid fa-graduation-cap",
        destination: "PES University Electronic City Campus, Hosur Road, Bengaluru, Karnataka 560100",
        coordinates: {"lat":12.861,"lon":77.665},
      },
      {
        label: "Narayana Hrudayalaya Health City",
        name: "Narayana Hrudayalaya Health City",
        distance: "4.4 Km",
        icon: "fa-solid fa-hospital",
        destination: "Narayana Health City, Bommasandra Industrial Area, Bengaluru, Karnataka 560099",
        coordinates: {"lat":12.812,"lon":77.695},
      },
      { 
        label: "Hosur Road Junction",
        name: "Hosur Road Junction", 
        distance: "22.6 Km", 
        icon: "fa-solid fa-road",
        destination: "Hosur Main Road, Hebbagodi Junction, Bengaluru, Karnataka 560099",
        coordinates: {"lat":12.83,"lon":77.68} 
      },
      {
        label: "Symbiosis Centre for Management Studies",
        name: "Symbiosis Centre for Management Studies",
        distance: "4.4 Km",
        icon: "fa-solid fa-graduation-cap",
        destination: "Symbiosis Centre for Management Studies, Electronic City, Bengaluru, Karnataka 560100",
        coordinates: {"lat":12.848,"lon":77.671},
      },
    ],
    images: [
      purvaImage("puravankara-limited/purva-silversky/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/purva-silversky/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/purva-silversky/gallery/amenities.webp"),
    ],
  },
  {
    id: "purva-blubelle",
    thumbnail: purvaImage("puravankara-limited/purva-blubelle/thumbnail.webp"),
    name: "Purva Blubelle",
    title: "Purva Blubelle",
    location:
      "Magadi Main Road, Next to Magadi Road Metro Station, Kempapura Agrahara, Bengaluru, Karnataka 560023",
    coordinates: {"lat":12.9772,"lon":77.5528},
    mapsQuery: "Purva Blubelle, Magadi Main Road, Bengaluru",
    shortAddress: "Magadi Road, West Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.3,
    price: "₹ 2.30 Cr*",
    area: "3.85 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,432 - 1,630 sq.ft.",
        price: "₹ 2.30 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-blubelle/floor-plans/3bhk-floor-plan.webp"),
      },
    ],
    possession: "June 2029",
    units: "378",
    highlight:
      "Exclusive 3 BHK High-Rise Skyscraper Community with 80% Open Spaces Right Next to Magadi Road Metro Station",
    highlights: [
      "Exclusive 3BHK community",
      "32 Storey skyscraper twin tower",
      "Vaastu compliant (no south facing units)",
      "8,000 sq.ft. standalone clubhouse",
      "22 Natural outdoor experiences",
      "West Bangalore's tallest building with great views",
      "U Rated property with 17 gardens and easy connectivity"
    ],
    reraId: "PRM/KA/RERA/1251/310/PR/290323/005829",
    summary:
      "An exclusive high-rise community offering luxury 3 BHK apartments located directly on Magadi Main Road, adjacent to Magadi Road Metro Station in West Bengaluru.",
    description:
      "Purva Blubelle by Puravankara is a premium, low-density residential development spread across 3.85 acres on Magadi Main Road, West Bengaluru. The project features 2 skyscraper towers (2B+G+31/32 floors) comprising 378 exclusive 3 BHK Vastu-compliant homes with no south-facing units. Designed with 80% open spaces, 17 landscaped gardens, an 8,000 sq. ft. standalone clubhouse, and over 50 lifestyle amenities, it offers seamless city-wide connectivity via the adjacent Magadi Road Metro Station.",
    amenities: [
      { name: "8,000 sq.ft. Standalone Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Toddler Pool", icon: "fa-water-ladder" },
      { name: "Fully Equipped Gymnasium", icon: "fa-dumbbell" },
      { name: "Co-Working Spaces & Study Lounge", icon: "fa-laptop" },
      { name: "Yoga & Meditation Park", icon: "fa-spa" },
      {
        name: "Tennis Court & Cricket Practice Pitch",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Reflexology & Sensory Garden", icon: "fa-tree" },
      { name: "Children's Outdoor Play Zone", icon: "fa-child" },
      { name: "Amphitheatre & Multipurpose Hall", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Magadi Road Metro Station",
        name: "Magadi Road Metro Station",
        distance: "27 Metres",
        icon: "fa-solid fa-train-subway",
        destination: "Magadi Road Metro Station, Purple Line, Bengaluru, Karnataka 560023",
        coordinates: {"lat":12.9756,"lon":77.5553},
      },
      {
        label: "GT World Mall",
        name: "GT World Mall",
        distance: "550 Metres",
        icon: "fa-solid fa-bag-shopping",
        destination: "GT World Mall, Magadi Main Road, Bengaluru, Karnataka 560023",
        coordinates: {"lat":12.9734,"lon":77.5512},
      },
      {
        label: "KSR Bengaluru City Railway Station (Majestic)",
        name: "KSR Bengaluru City Railway Station (Majestic)",
        distance: "3.5 Km",
        icon: "fa-solid fa-train",
        destination: "KSR Bengaluru City Junction (Majestic), Bengaluru, Karnataka 560023",
        coordinates: {"lat":12.9781,"lon":77.5696},
      },
      {
        label: "World Trade Center (WTC Rajajinagar)",
        name: "World Trade Center (WTC Rajajinagar)",
        distance: "6.3 Km",
        icon: "fa-solid fa-laptop-code",
        destination: "World Trade Center Bangalore, Brigade Gateway, Malleshwaram-Rajajinagar, Bengaluru 560055",
        coordinates: {"lat":13.0113,"lon":77.555},
      },
      { 
        label: "Cubbon Park & MG Road",
        name: "Cubbon Park & MG Road", 
        distance: "6.7 Km", 
        icon: "fa-solid fa-tree",
        destination: "Cubbon Park Metro Station / MG Road, Bengaluru, Karnataka 560001",
        coordinates: {"lat":12.9763,"lon":77.5929} 
      },
    ],
    images: [
      purvaImage("puravankara-limited/purva-blubelle/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/purva-blubelle/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/purva-blubelle/gallery/amenities.webp"),
    ],
  },
  {
    id: "purva-orient-grand",
    thumbnail: purvaImage("puravankara-limited/purva-orient-grand/thumbnail.webp"),
    name: "Purva Orient Grand",
    title: "Purva Orient Grand",
    location:
      "Lalbagh Main Road, Sudhama Nagar, Central Bengaluru, Karnataka 560027",
    coordinates: {"lat":12.9569,"lon":77.5878},
    mapsQuery: "Purva Orient Grand, Lalbagh Main Road, Bengaluru",
    shortAddress: "Lalbagh, Central Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 9.0,
    price: "₹ 9.00 Cr*",
    area: "1.15 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK Ultra Luxury",
        area: "1,992 sq.ft.",
        price: "₹ 5.50 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-orient-grand/floor-plans/3bhk(ulx)-floor-plan.webp"),
      },
      {
        id: "4bhk_elegance",
        bhk: "4 BHK Elegance",
        area: "2,338 sq.ft.",
        price: "₹ 6.10 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-orient-grand/floor-plans/4bhk(eg)-floor-plan.webp"),
      },
      {
        id: "4bhk_luxury",
        bhk: "4 BHK Luxury",
        area: "2,629 sq.ft.",
        price: "₹ 7.80 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-orient-grand/floor-plans/4bhk(lx)-floor-plan.webp"),
      },
      {
        id: "4bhk_grandeur",
        bhk: "4 BHK Grandeur (with Servant)",
        area: "3,095 sq.ft.",
        price: "₹ 9.80 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-orient-grand/floor-plans/4bhk(gws)-floor-plan.webp"),
      },
    ],
    possession: "June 2027",
    units: "97",
    highlight:
      "Ultra-Luxury BluNex™ Smart Home Skyscraper Overlooking Lalbagh Botanical Garden with Rooftop Infinity Pool and Sky Lounge",
    highlights: [
      "Exclusive residences with no common walls for maximum privacy and quiet",
      "Rooftop infinity pool and clubhouse with panoramic views of MG Road",
      "Body Core fitness studio featuring Pilates, HIIT, TRX, and Peloton bikes",
      "The Vault: A whiskey and wine lounge with authentic oak barrel flooring",
      "Bespoke architecture by Andy Fisher with a grand double-height lobby",
      "Unique landscape features including kinetic gardens and a serene koi pond",
      "Luxury interiors with imported marble and French-style windows"
    ],
    reraId: "PRM/KA/RERA/1251/310/PR/210907/004299",
    summary:
      "An exclusive, ultra-luxury high-rise tower offering 3 and 4 BHK World-Home residences on Lalbagh Main Road, Sudhama Nagar in Central Bengaluru.",
    description:
      "Purva Orient Grand by Puravankara is an ultra-exclusive World-Home residential landmark spread across 1.15 acres on Lalbagh Main Road, Sudhama Nagar in Central Bengaluru. Comprising a single iconic 24-storey high-rise tower (2B+G+24 floors) with just 97 signature residences, the project offers BluNex™ voice-enabled smart home automation, Italian marble flooring, direct views of Lalbagh Botanical Garden, a rooftop infinity pool, and over 50 world-class luxury amenities.",
    amenities: [
      { name: "Rooftop Fine Dining & Sky Lounge", icon: "fa-building" },
      {
        name: "Rooftop Infinity Swimming Pool & Sun Deck",
        icon: "fa-water-ladder",
      },
      { name: "Rose & Cypress Social Clubs", icon: "fa-champagne-glasses" },
      { name: "The Aura Spa & Salon", icon: "fa-spa" },
      { name: "State-of-the-Art Fitness Studio & Gym", icon: "fa-dumbbell" },
      {
        name: "Indoor Games Room & Bowling Alley",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Private Mini Theatre", icon: "fa-film" },
      { name: "Children's Play Area", icon: "fa-child" },
      { name: "Landscaped Rooftop & Zen Gardens", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "Lalbagh Botanical Garden",
        name: "Lalbagh Botanical Garden",
        distance: "2.0 Km",
        icon: "fa-solid fa-tree",
        destination: "Lalbagh Botanical Garden, Mavalli, Bengaluru, Karnataka 560004",
        coordinates: {"lat":12.9507,"lon":77.5848},
      },
      {
        label: "Richmond Road / MG Road Junction",
        name: "Richmond Road / MG Road Junction",
        distance: "1.3 Km",
        icon: "fa-solid fa-road",
        destination: "Richmond Circle / Richmond Road Junction, Bengaluru, Karnataka 560025",
        coordinates: {"lat":12.9698,"lon":77.608},
      },
      {
        label: "Krishna Rajendra (KR) Market Metro Station",
        name: "Krishna Rajendra (KR) Market Metro Station",
        distance: "2.8 Km",
        icon: "fa-solid fa-train-subway",
        destination: "KR Market Metro Station, Green Line, Bengaluru, Karnataka 560002",
        coordinates: {"lat":12.9609,"lon":77.5746},
      },
      {
        label: "St. Joseph's University / College",
        name: "St. Joseph's University / College",
        distance: "1.1 Km",
        icon: "fa-solid fa-graduation-cap",
        destination: "St. Joseph's University, Lalbagh Road, Bengaluru, Karnataka 560027",
        coordinates: {"lat":12.9625,"lon":77.5985},
      },
      {
        label: "UB City / Lavelle Road",
        name: "UB City / Lavelle Road",
        distance: "3.3 Km",
        icon: "fa-solid fa-bag-shopping",
        destination: "UB City, Vittal Mallya Road, Bengaluru, Karnataka 560001",
        coordinates: {"lat":12.9716,"lon":77.5958},
      },
      {
        label: "Bengaluru City Junction (Majestic Railway Station)",
        name: "Bengaluru City Junction (Majestic Railway Station)",
        distance: "4.5 Km",
        icon: "fa-solid fa-train",
        destination: "KSR Bengaluru City Railway Station, Majestic, Bengaluru, Karnataka 560023",
        coordinates: {"lat":12.9781,"lon":77.5696},
      },
    ],
    images: [
      purvaImage("puravankara-limited/purva-orient-grand/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/purva-orient-grand/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/purva-orient-grand/gallery/amenities.webp"),
    ],
  },
  {
    id: "purva-atmosphere",
    thumbnail: purvaImage("puravankara-limited/purva-atmosphere/thumbnail.webp"),
    name: "Purva Atmosphere",
    title: "Purva Atmosphere",
    location:
      "Survey No. 86 & 95, Thanisandra Main Road, Near Manyata Tech Park, North Bengaluru, Karnataka 560077",
    coordinates: {"lat":13.0565,"lon":77.6256},
    mapsQuery: "Purva Atmosphere, Thanisandra Main Road, Bengaluru",
    shortAddress: "Thanisandra, North Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.85,
    price: "₹ 2.85 Cr*",
    area: "13 Acres",
    floorPlans: [
      {
        id: "3bhk_comfort",
        bhk: "3 BHK Comfort",
        area: "1,330 sq.ft.",
        price: "₹ 2.85 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-atmosphere/floor-plans/3bhk(cmf)-floor-plan.webp"),
      },
      {
        id: "3bhk_grand",
        bhk: "3 BHK Grand",
        area: "2,004 sq.ft.",
        price: "₹ 3.15 Cr Onwards",
        image: purvaImage("puravankara-limited/purva-atmosphere/floor-plans/3bhk(grd)-floor-plan.webp"),
      },
    ],
    possession: "March 2024",
    units: "939",
    highlight:
      "World Home Collection High-Rise Skyscraper Township Designed by Architect Hadi Teherani with 34th Floor Sky Club and Oxygen-Infused Clubhouse",
    highlights: [
      "Best Residential High Rise Development India 2021-22",
      "9 acres of open space uber-modern, ultra-luxurious residential project",
      "Crafted by globally acclaimed Iranian-German architect Hadi Teherani",
      "Exclusive 34th-floor club designed by Andy Fisher",
      "Unique 40 ft. air filtration tower for clean air",
      "The sky-high comforts inspired by France’s Aix-en-Provence - The Cloudwalk",
      "Intelligent homes powered with BluNex Technology"
    ],
    reraId: "PRM/KA/RERA/1251/472/PR/190204/002350",
    summary:
      "An iconic, high-rise residential landmark offering 2, 3, and 4 BHK World Home Collection luxury residences on Thanisandra Main Road, North Bengaluru.",
    description:
      "Purva Atmosphere by Puravankara is an ultra-luxury high-rise residential community spread across 13 acres on Thanisandra Main Road near Manyata Tech Park. Designed by world-renowned German architect Hadi Teherani under the 'World Home Collection' concept, the development comprises 3 iconic skyscraper towers (3B+G+33/34 floors) housing 939 luxury homes. It features an oxygen-infused grand clubhouse, a signature 34th-floor Sky Club, BluNex™ home automation, and over 70% open green space.",
    amenities: [
      { name: "34th-Floor Sky Club & Sky Lounge", icon: "fa-building" },
      { name: "Oxygen-Infused Clubhouse", icon: "fa-spa" },
      { name: "Temperature-Controlled Swimming Pool", icon: "fa-water-ladder" },
      {
        name: "State-of-the-Art Gymnasium & Fitness Studio",
        icon: "fa-dumbbell",
      },
      { name: "Yoga & Meditation Deck", icon: "fa-spa" },
      {
        name: "Multi-Sport Courts & Tennis Court",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Indoor Games & Virtual Golf Simulator", icon: "fa-gamepad" },
      { name: "Children's Play Zone & Adventure Park", icon: "fa-child" },
      { name: "Landscaped Sensory Gardens & Tree Plaza", icon: "fa-tree" },
    ],
    connectivity: [
      {
        label: "Manayata Tech Park",
        name: "Manyata Tech Park",
        distance: "3.3 Km",
        icon: "fa-laptop-code",
        destination: "Manayata Tech Park, Nagavara, Bengaluru, Karnataka",
        coordinates: {"lat":13.048,"lon":77.6202}
      },
      {
        label: "Outer Ring Road (ORR Junction)",
        name: "Outer Ring Road (ORR Junction)",
        distance: "14.0 Km",
        icon: "fa-solid fa-road",
        destination: "Nagavara Outer Ring Road Junction, Bengaluru, Karnataka 560045",
        coordinates: {"lat":13.041,"lon":77.623},
      },
      {
        label: "Elements Mall Thanisandra",
        name: "Elements Mall Thanisandra",
        distance: "2.5 Km",
        icon: "fa-solid fa-bag-shopping",
        destination: "Elements Mall, Thanisandra Main Road, Nagavara, Bengaluru, Karnataka 560077",
        coordinates: {"lat":13.045,"lon":77.625},
      },
      {
        label: "Aster CMI Hospital Hebbal",
        name: "Aster CMI Hospital Hebbal",
        distance: "8.7 Km",
        icon: "fa-solid fa-hospital",
        destination: "Aster CMI Hospital, Bellary Road, Hebbal, Bengaluru, Karnataka 560092",
        coordinates: {"lat":13.0558,"lon":77.5925},
      },
      {
        label: "Delhi Public School (DPS North)",
        name: "Delhi Public School (DPS North)",
        distance: "9.3 Km",
        icon: "fa-solid fa-graduation-cap",
        destination: "Delhi Public School Bangalore North, Bagalur Road, Bengaluru, Karnataka 562149",
        coordinates: {"lat":13.115,"lon":77.632},
      },
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        distance: "23.0 Km",
        icon: "fa-plane",
        destination: "Kempegowda International Airport Bengaluru",
        coordinates: {"lat":13.218,"lon":77.708}
      },
    ],
    images: [
      purvaImage("puravankara-limited/purva-atmosphere/gallery/exterior-view.webp"),
      purvaImage("puravankara-limited/purva-atmosphere/gallery/interior-view.webp"),
      purvaImage("puravankara-limited/purva-atmosphere/gallery/amenities.webp"),
    ],
  },
];

export const purvaProjects = purvankaraData;
export const purvaData = purvankaraData;

export const purvankaraFaqs = [
  {
    question: "Who is the owner of Puravankara?",
    answer:
      "Puravankara Limited is a publicly traded company that is founded, owned, and led by the Puravankara family, with founder Ravi Puravankara serving as Chairman.",
  },
  {
    question: "Is Puravankara a good developer?",
    answer:
      "Puravankara is a well-established and credible Tier-1 real estate developer in India with a 50-year legacy, though buyer experiences vary significantly by specific project and location.",
  },
  {
    question: "What are the upcoming projects of Puravankara in Bangalore?",
    answer:
      "Puravankara has several upcoming and new-launch residential projects planned across prime growth corridors in Bangalore.  Upcoming & New-Launch Projects Puravankara Codename Futura 2.0 (1) Real estate developer WPJ9+RP7, Silver Oaks Main Rd Located in Balagere near Panathur Road (East Bangalore), offering luxury 2, 3, 3.5, and 4 BHK apartments across 6 acres. Purva Aerocity 3.6 (32) Corporate office Vidya Nagar Cross Rd Situated in Chikkajala, North Bangalore near the international airport corridor.",
  },
  {
    question: "Where is the Puravankara head office located in Bangalore?",
    answer:
      "The head office of Puravankara Limited is located on Ulsoor Road in Bengaluru, Karnataka",
  },
  {
    question: "Are Puravankara projects RERA-registered?",
    answer:
      "Yes, all ongoing projects strictly comply with state RERA norms (such as Karnataka RERA).",
  },
  {
    question: "What payment modes does Puravankara accept for home bookings?",
    answer:
      "You can pay the initial booking or Expression of Interest (EOI) amount using major Credit Cards (Visa, MasterCard, Amex), Net Banking / Net Banking Portals, or via standard physical Cheques. (Note: Booking blocks are usually provisional until physical cheques realize).",
  },
];


function formatOverviewList(items = []) {
  if (!Array.isArray(items) || items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

const overviewSearchTerms = [
  "Puravankara new projects in Bangalore",
  "new apartment projects in Bangalore",
  "Purva projects in Bangalore",
  "Puravankara Bangalore projects",
  "Puravankara limited Bangalore",
  "Puravankara Bangalore",
  "Puravankara company",
  "Puravankara projects limited",
  "Puravankara builders",
  "ready to move flats in Bangalore",
  "apartments for sale in Bangalore",
  "flats for sale in Bangalore",
];

export function createPropertyOverview(property) {
  const floorPlans = formatOverviewList(
    (property.floorPlans || []).map(({ bhk, area }) =>
      area ? `${bhk} (${area})` : bhk,
    ),
  );
  const allBhks = [
    ...new Set((property.floorPlans || []).map(({ bhk }) => bhk)),
  ].join(", ");
  const projectIndex = (purvankaraData || []).findIndex(({ id }) => id === property.id);
  const searchTerm =
    overviewSearchTerms[
      (projectIndex >= 0 ? projectIndex : 0) % overviewSearchTerms.length
    ];
  const amenities = formatOverviewList(
    (property.amenities || []).slice(0, 4).map(({ name }) => name),
  );
  const nearbyPlaces = formatOverviewList(
    (property.connectivity || [])
      .slice(0, 3)
      .map(({ label, name, distance }) => `${label || name} (${distance})`),
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
  const closingKeyword =
    property.category === "ready"
      ? "ready to move flats in Bangalore"
      : (projectIndex >= 0 ? projectIndex : 0) % 2 === 0
        ? "apartments for sale in Bangalore"
        : "flats for sale in Bangalore";

  return [
    `${property.description} Buyers researching ${searchTerm} can explore Puravankara homes in ${shortAddress}, with project status, location, and configuration details available to compare.`,
    `${property.title} is listed with ${bhkSummary} across ${property.area}, with ${statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || bhkSummary}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || shortAddress}. Review this Puravankara project's floor plans, amenities, and connectivity when comparing ${closingKeyword}.${property.reraId ? ` RERA registration number: ${property.reraId.replace(/\.$/, "")}.` : ""}`,
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
    const placeName = topPlace.label || topPlace.name;
    if (placeName) {
      list.push(`Prime connectivity with proximity to ${placeName} (${topPlace.distance})`);
    }
  }
  if (property.reraId) {
    list.push(`RERA Approved Project: ${property.reraId.replace(/\.$/, "")}`);
  }
  return list;
}

purvankaraData.forEach((property) => {
  const allBhks = formatOverviewList(
    [...new Set((property.floorPlans || []).map(({ bhk }) => bhk))],
  );
  property.bhk = property.bhk || allBhks;
  property.statusText = property.statusText || (
    property.category === "new-launch" ? "New Launch" :
    property.category === "ready" ? "Ready to Move" : "Under Construction"
  );
  property.overview = property.overview || createPropertyOverview(property);
  if (!property.highlights || property.highlights.length === 0) {
    property.highlights = createPropertyHighlights(property);
  }
});

export const builderConfig = {
  slug: "purvankara",
  name: "Puravankara Limited",
  regions: "Bengaluru",
  theme: {
    primary: "#0D3559",
    primaryHover: "#082138",
    accent: "#C5A059",
    surface: "#F8FAFC",
    soft: "#EEF4F8",
    border: "#D5E2EC",
  },
  seoKeywords: [
    "puravankara company",
    "puravankara projects limited",
    "puravankara projects ltd",
    "puravankara bangalore",
    "puravankara bangalore projects",
    "puravankara new projects in bangalore",
    "new apartment projects in bangalore",
    "purva projects in bangalore",
    "puravankara builders",
    "puravankara limited bangalore",
    "puravankara head office bangalore",
    "apartments for sale in bangalore",
    "flats for sale in bangalore",
    "ready to move flats in bangalore",
  ],
  properties: purvankaraData,
  faqs: purvankaraFaqs,
  whatsappNumber: "+919876543210",
};

export const purvankaraProjects = purvankaraData;

