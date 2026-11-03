const imageCdnPrefix = "https://media.justflip.in/builder-brand-pages/";
const birlaImage = (suffix) =>
  `${imageCdnPrefix}${suffix.replace(/^\/+/, "")}`;

export const birlaData = [
  {
    id: "birla-evara",
    thumbnail: birlaImage("birla-estates/birla-evara/thumbnail.webp"),
    title: "Birla Evara",
    location:
      "Off Gadhalli Road, Muneshwara Layout, Sarjapur, Bengaluru, Karnataka 562125",
    coordinates: { lat: 12.8725, lon: 77.755 },
    mapsQuery: "Birla Evara, Sarjapur, Bengaluru",
    shortAddress: "Sarjapur Road, Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 2.08,
    price: "₹ 2.08 Cr*",
    area: "25 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,427 sq.ft.",
        price: "₹ 2.08 Cr Onwards",
        image: birlaImage("birla-estates/birla-evara/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "1,733 sq.ft.",
        price: "₹ 3.05 Cr Onwards",
        image: birlaImage("birla-estates/birla-evara/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "December 2031",
    units: "1600",
    highlight:
      "28-Acre Integrated Township with On-Premises White Marble Birla Mandir and Dual 58,000 sq.ft. Clubhouses",
    reraId: "PRM/KA/RERA/1251/446/PR/060225/007487",
    highlights: [
      "Grand 28-acre integrated township in Sarjapur, East Bengaluru",
      "On-premises pure white marble Birla Mandir dedicated to spiritual serenity",
      "Dual grand clubhouses spanning over 58,000 sq. ft. of luxury lifestyle amenities",
      "13 high-rise towers rising up to 27 floors with 80% open landscaped spaces",
      "Vastu-compliant 1 to 4.5 BHK luxury homes designed for natural ventilation",
      "Prime connectivity to Wipro SEZ, RGA Tech Park, and Sarjapur Road",
      "Karnataka RERA approved development: PRM/KA/RERA/1251/446/PR/060225/007487"
    ],
    summary:
      "A grand 28-acre residential township featuring 1 to 4.5 BHK luxury apartments located off Sarjapur Road, North-East Bengaluru.",
    description:
      "Birla Evara by Birla Estates is spread across 28 acres in Muneshwara Layout off Gadhalli Road, Sarjapur. The development comprises 13 high-rise towers (2B+G+24/25/27 floors) featuring 1,600 Vastu-compliant residences. It highlights two grand clubhouses totaling over 58,000 sq. ft., an on-site pure white marble Birla Mandir, 50+ lifestyle amenities, and seamless access to Wipro SEZ, RGA Tech Park, and Sarjapur Road.",
    amenities: [
      { name: "Dual Grand Clubhouses (58,000 sq.ft.)", icon: "fa-building" },
      { name: "Pure White Marble Birla Mandir", icon: "fa-place-of-worship" },
      { name: "Swimming Pool & Toddler Splash Pool", icon: "fa-water-ladder" },
      { name: "State-of-the-Art Gymnasium & Spa", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Deck", icon: "fa-spa" },
      {
        name: "Basketball & Cricket Practice Nets",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Central Park & Sculpture Garden", icon: "fa-tree" },
      { name: "Children's Play Area", icon: "fa-child" },
      { name: "Amphitheatre & Party Lawn", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Sarjapur Road",
        name: "Sarjapur Road",
        destination: "Sarjapur Main Road, Bengaluru, Karnataka 562125",
        coordinates: { lat: 12.8795, lon: 77.7475 },
        distance: "3.5 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Wipro SEZ Campus (Kodathi)",
        name: "Wipro SEZ Campus (Kodathi)",
        destination: "Wipro Corporate Office, Sarjapur Main Road, Doddakannelli, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.909, lon: 77.7005 },
        distance: "3.6 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "RGA Tech Park",
        name: "RGA Tech Park",
        destination: "RGA Tech Park, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9085, lon: 77.7028 },
        distance: "4.2 km",
        icon: "fa-solid fa-building-user",
      },
      {
        label: "Carmelaram Railway Station",
        name: "Carmelaram Railway Station",
        destination: "Carmelaram Railway Station, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9115, lon: 77.7095 },
        distance: "5.5 km",
        icon: "fa-solid fa-train",
      },
      {
        label: "Electronic City IT Hub",
        name: "Electronic City IT Hub",
        destination: "Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100",
        coordinates: { lat: 12.8455, lon: 77.6625 },
        distance: "11.2 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Decathlon Sarjapur",
        name: "Decathlon Sarjapur",
        destination: "Decathlon Sports India, Sarjapur Main Road, Carmelaram, Bengaluru, Karnataka 560035",
        coordinates: { lat: 12.9065, lon: 77.705 },
        distance: "4.8 km",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
    images: [
      birlaImage("birla-estates/birla-evara/gallery/exterior-view.webp"),
      birlaImage("birla-estates/birla-evara/gallery/interior-view.webp"),
      birlaImage("birla-estates/birla-evara/gallery/amenities.webp"),
    ],
  },
  {
    id: "birla-ojasvi",
    thumbnail: birlaImage("birla-estates/birla-ojasvi/thumbnail.webp"),
    title: "Birla Ojasvi",
    location:
      "Hemmigepura Ward 198, Rajarajeshwari Nagar (RR Nagar), Bengaluru, Karnataka 560098",
    coordinates: { lat: 12.8985, lon: 77.514 },
    mapsQuery: "Birla Ojasvi, RR Nagar, Bengaluru",
    shortAddress: "RR Nagar, South Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 1.38,
    price: "₹ 1.38 Cr*",
    area: "10.24 Acres",
    floorPlans: [
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "929 sq.ft.",
        price: "₹ 1.52 Cr Onwards",
        image: birlaImage("birla-estates/birla-ojasvi/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk_luxury",
        bhk: "3 BHK Luxury",
        area: "1,252 sq.ft.",
        price: "₹ 2.27 Cr Onwards",
        image: birlaImage("birla-estates/birla-ojasvi/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3bhk_signature",
        bhk: "3 BHK Signature",
        area: "1,361 sq.ft.",
        price: "₹ 2.45 Cr Onwards",
        image: birlaImage("birla-estates/birla-ojasvi/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk_rowhouse",
        bhk: "4 BHK Row House",
        area: "3,353 sq.ft.",
        price: "₹ 5.80 Cr Onwards",
        image: birlaImage("birla-estates/birla-ojasvi/floor-plans/4bhk-row-house-floor-plan.webp"),
      },
    ],
    possession: "January 2031",
    units: "630",
    highlight:
      "Low-Density Township Overlooking 250 Acres of Reserve Forest with 80% Open Space and 25,000 sq.ft. Clubhouse",
    reraId: "PRM/KA/RERA/1251/310/PR/040924/006989",
    highlights: [
      "Low-density 10.24-acre master plan overlooking 250 acres of reserve forest",
      "Over 80% open green space with pristine views and bird watching deck",
      "3 iconic high-rise towers (2B+G+33 floors) and exclusive limited row houses",
      "Grand 25,000 sq. ft. clubhouse with swimming pool, gym, yoga studio & sports courts",
      "Signature LifeDesigned® architecture ensuring maximum natural light",
      "Strategically located in RR Nagar just 5 minutes from Pattangere Metro Station",
      "Karnataka RERA approved development: PRM/KA/RERA/1251/310/PR/040924/006989"
    ],
    summary:
      "A premier 10.24-acre residential development offering 1, 2, 3 BHK apartments and exclusive row houses in RR Nagar, South-West Bengaluru.",
    description:
      "Birla Ojasvi by Birla Estates is a low-density, premium residential community spread across 10.24 acres in Rajarajeshwari Nagar (RR Nagar), South-West Bengaluru. The development comprises 3 high-rise towers (2B+G+33 floors) with 607 apartments and 8 exclusive row house villas, boasting over 80% open green space overlooking a 250-acre reserve forest. It features a grand 25,000 sq. ft. clubhouse, over 40 lifestyle amenities, and prime connectivity to Pattangere Metro Station and NICE Road.",
    amenities: [
      { name: "25,000 sq.ft. Grand Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Kids Pool", icon: "fa-water-ladder" },
      { name: "Fully Equipped Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga & Health Club Area", icon: "fa-spa" },
      { name: "Outdoor Sports Courts", icon: "fa-table-tennis-paddle-ball" },
      { name: "Jogging & Walking Track", icon: "fa-person-running" },
      { name: "Children's Play Area", icon: "fa-child" },
      {
        name: "Landscaped Gardens & Reserve Forest View Deck",
        icon: "fa-tree",
      },
      { name: "Multipurpose Party Hall", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Pattangere Metro Station",
        name: "Pattangere Metro Station",
        destination: "Pattangere Metro Station, Mysore Road, Bengaluru, Karnataka 560059",
        coordinates: { lat: 12.915, lon: 77.502 },
        distance: "2.5 km",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "NICE Road Junction",
        name: "NICE Road Junction",
        destination: "NICE Ring Road Junction, RR Nagar, Bengaluru, Karnataka 560098",
        coordinates: { lat: 12.887, lon: 77.519 },
        distance: "2.1 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "Rajarajeshwari Temple",
        name: "Rajarajeshwari Temple",
        destination: "Shri Rajarajeshwari Temple, RR Nagar, Bengaluru, Karnataka 560098",
        coordinates: { lat: 12.923, lon: 77.518 },
        distance: "3.2 km",
        icon: "fa-solid fa-place-of-worship",
      },
      {
        label: "Global Village Tech Park",
        name: "Global Village Tech Park",
        destination: "Global Village Tech Park, Mylasandra, Bengaluru, Karnataka 560059",
        coordinates: { lat: 12.922, lon: 77.501 },
        distance: "3.5 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "BGS Gleneagles Global Hospital",
        name: "BGS Gleneagles Global Hospital",
        destination: "BGS Gleneagles Global Hospital, Uttarahalli Road, Kengeri, Bengaluru, Karnataka 560060",
        coordinates: { lat: 12.904, lon: 77.498 },
        distance: "4.0 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "National Public School (NPS RR Nagar)",
        name: "National Public School (NPS RR Nagar)",
        destination: "National Public School, BEML Layout, RR Nagar, Bengaluru, Karnataka 560098",
        coordinates: { lat: 12.918, lon: 77.514 },
        distance: "2.8 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Gopalan Arcade Mall",
        name: "Gopalan Arcade Mall",
        destination: "Gopalan Arcade Mall, Mysore Road, RR Nagar, Bengaluru, Karnataka 560039",
        coordinates: { lat: 12.934, lon: 77.518 },
        distance: "4.8 km",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
    images: [
      birlaImage("birla-estates/birla-ojasvi/gallery/exterior-view.webp"),
      birlaImage("birla-estates/birla-ojasvi/gallery/interior-view.webp"),
      birlaImage("birla-estates/birla-ojasvi/gallery/amenities.webp"),
    ],
  },
  {
    id: "birla-trimaya-phase-4",
    thumbnail: birlaImage("birla-estates/birla-trimaya-phase-4/thumbnail.webp"),
    title: "Birla Trimaya Phase 4",
    location:
      "BK Halli Main Road, Shettigere, off NH 44, Devanahalli, Bengaluru, Karnataka 562157",
    coordinates: { lat: 13.2085, lon: 77.674 },
    mapsQuery: "Birla Trimaya, Shettigere, Devanahalli, Bengaluru",
    shortAddress: "Devanahalli, North Bengaluru",
    category: "new-launch",
    type: "apartment",
    priceValue: 1.1,
    price: "₹ 1.10 Cr*",
    area: "52 Acres",
    floorPlans: [
      {
        id: "1bhk",
        bhk: "1 BHK",
        area: "485 sq.ft.",
        price: "₹ 1.10 Cr Onwards",
        image: birlaImage("birla-estates/birla-trimaya-phase-4/floor-plans/1bhk-floor-plan.webp"),
      },
      {
        id: "2bhk",
        bhk: "2 BHK",
        area: "801 sq.ft.",
        price: "₹ 1.34 Cr Onwards",
        image: birlaImage("birla-estates/birla-trimaya-phase-4/floor-plans/2bhk-floor-plan.webp"),
      },
      {
        id: "3bhk_3t",
        bhk: "3 BHK 3T",
        area: "1,100 sq.ft.",
        price: "₹ 1.75 Cr Onwards",
        image: birlaImage("birla-estates/birla-trimaya-phase-4/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "2,551 sq.ft.",
        price: "₹ 4.24 Cr Onwards",
        image: birlaImage("birla-estates/birla-trimaya-phase-4/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "December 2031",
    units: "548",
    highlight:
      "Latest Phase Offering Executive Apartments & Premium Duplex Homes within the 52-Acre Township with 2.5-Acre Curated Lake Access",
    reraId: "PRM/KA/RERA/1250/303/PR/290126/008436",
    highlights: [
      "Phase 4 within the landmark 52-acre integrated township in Devanahalli",
      "Proximity to the 2.5-acre curated lake, water promenade & 60,000 sq. ft. clubhouse",
      "Executive 1, 2, 3 BHK high-rise residences & premium duplex homes",
      "Over 80% open landscaped greens, bicycle trails, and nature pods",
      "Just 10 minutes to Kempegowda International Airport and KIADB Aerospace Park",
      "Direct 2-minute access to NH-44 (Bellary Road Expressway)",
      "Karnataka RERA approved development: PRM/KA/RERA/1250/303/PR/290126/008436"
    ],
    summary:
      "The newly launched Phase 4 of the 52-acre Birla Trimaya township featuring 1, 2, 3 BHK apartments and duplex homes in Shettigere, Devanahalli, North Bengaluru.",
    description:
      "Birla Trimaya Phase 4 is the newest residential phase within the master-planned 52-acre township in Shettigere, Devanahalli. Positioned close to the 2.5-acre natural curated lake and the central clubhouse, Phase 4 offers thoughtfully designed 1, 2, 3 BHK high-rise apartments and duplex residences with 80% open spaces, world-class amenities, and immediate proximity to KIADB Aerospace Park and Kempegowda International Airport.",
    amenities: [
      { name: "60,000 sq.ft. Grand Clubhouse Access", icon: "fa-building" },
      { name: "2.5-Acre Curated Lake & Promenade", icon: "fa-water" },
      { name: "Multiple Swimming Pools & Splash Pad", icon: "fa-water-ladder" },
      { name: "State-of-the-Art Fitness Center", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Pavilion", icon: "fa-spa" },
      {
        name: "Tennis, Squash & Basketball Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Jogging Track & Bicycle Trails", icon: "fa-person-running" },
      { name: "Children's Play Zone & Pet Park", icon: "fa-child" },
      { name: "Amphitheatre & Social Lawns", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: { lat: 13.1986, lon: 77.7066 },
        distance: "8.5 km",
        icon: "fa-solid fa-plane",
      },
      {
        label: "NH 44 (Bellary Road Expressway)",
        name: "NH 44 (Bellary Road Expressway)",
        destination: "NH 44 Bellary Road, Devanahalli, Bengaluru, Karnataka 562157",
        coordinates: { lat: 13.201, lon: 77.682 },
        distance: "1.5 km",
        icon: "fa-solid fa-road",
      },
      {
        label: "KIADB Aerospace Park & SEZ",
        name: "KIADB Aerospace Park & SEZ",
        destination: "KIADB Aerospace Park, Bagalur, Bengaluru, Karnataka 562149",
        coordinates: { lat: 13.175, lon: 77.712 },
        distance: "7.0 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Upcoming Airport Metro Station",
        name: "Upcoming Airport Metro Station",
        destination: "Airport Metro Station, NH-44, Bengaluru, Karnataka 562157",
        coordinates: { lat: 13.195, lon: 77.702 },
        distance: "8.0 km",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Stonehill International School",
        name: "Stonehill International School",
        destination: "Stonehill International School, Tarahunise Post, Jala Hobli, Bengaluru, Karnataka 562157",
        coordinates: { lat: 13.192, lon: 77.641 },
        distance: "6.2 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Manipal Hospital Doddaballapur Road",
        name: "Manipal Hospital Doddaballapur Road",
        destination: "Manipal Hospital, Doddaballapur Main Road, Bengaluru, Karnataka 560064",
        coordinates: { lat: 13.232, lon: 77.575 },
        distance: "11.5 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Phoenix Mall of Asia (Hebbal)",
        name: "Phoenix Mall of Asia (Hebbal)",
        destination: "Phoenix Mall of Asia, Bellary Road, Byatarayanapura, Bengaluru, Karnataka 560092",
        coordinates: { lat: 13.0645, lon: 77.589 },
        distance: "18.5 km",
        icon: "fa-solid fa-bag-shopping",
      },
    ],
    images: [
      birlaImage("birla-estates/birla-trimaya-phase-4/gallery/exterior-view.webp"),
      birlaImage("birla-estates/birla-trimaya-phase-4/gallery/interior-view.webp"),
      birlaImage("birla-estates/birla-trimaya-phase-4/gallery/amenities.webp"),
    ],
  },
  {
    id: "birla-tisya",
    thumbnail: birlaImage("birla-estates/birla-tisya/thumbnail.webp"),
    title: "Birla Tisya",
    location:
      "Magadi Main Road, Agrahara Dasarahalli, Rajajinagar, Bengaluru, Karnataka 560079",
    coordinates: { lat: 12.982, lon: 77.541 },
    mapsQuery: "Birla Tisya, Magadi Main Road, Rajajinagar, Bengaluru",
    shortAddress: "Rajajinagar, West Bengaluru",
    category: "ongoing",
    type: "apartment",
    priceValue: 2.2,
    price: "₹ 2.20 Cr*",
    area: "4.72 Acres",
    floorPlans: [
      {
        id: "3bhk",
        bhk: "3 BHK",
        area: "1,158 sq.ft.",
        price: "₹ 2.46 Cr Onwards",
        image: birlaImage("birla-estates/birla-tisya/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk",
        bhk: "4 BHK",
        area: "1,750 sq.ft.",
        price: "₹ 3.45 Cr Onwards",
        image: birlaImage("birla-estates/birla-tisya/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "December 2026",
    units: "393",
    highlight:
      "LEED Pre-Certified Platinum High-Rise Twin Towers with 270-Degree Panoramic Views and 80% Open Green Space in Central West Bengaluru",
    reraId: "PRM/KA/RERA/1251/309/PR/211022/004371",
    highlights: [
      "LEED Pre-Certified Platinum green residential development in Rajajinagar",
      "Twin high-rise towers (B+G+31 floors) with only 393 exclusive residences",
      "Unobstructed 270-degree panoramic skyline views across Central West Bengaluru",
      "Signature LifeDesigned® clubhouse, mini theatre & curated sports courts",
      "Over 80% open green spaces with specialized herb and spice gardens",
      "Prime central location just 3 minutes from Vijayanagar Metro Station",
      "Karnataka RERA approved development: PRM/KA/RERA/1251/309/PR/211022/004371"
    ],
    summary:
      "A luxury high-rise residential community featuring 2, 3, 3.5, and 4.5 BHK LifeDesigned® apartments on Magadi Main Road, Rajajinagar, West Bengaluru.",
    description:
      "Birla Tisya by Birla Estates is a premium high-rise residential development spread across 4.72 acres in Rajajinagar, off Magadi Main Road. The project comprises 2 iconic towers rising to B+G+31 floors with only 393 exclusive apartments. Designed around Birla's signature 'LifeDesigned®' philosophy, it boasts over 80% open spaces, 270-degree panoramic city views, 30+ curated lifestyle amenities, and exceptional connectivity to Vijayanagar Metro Station, Orion Mall, and WTC Rajajinagar.",
    amenities: [
      { name: "LifeDesigned® Grand Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Toddler Splash Pool", icon: "fa-water-ladder" },
      { name: "Mini Theatre", icon: "fa-film" },
      { name: "Fully Equipped Gymnasium", icon: "fa-dumbbell" },
      { name: "Yoga & Meditation Studio", icon: "fa-spa" },
      {
        name: "Curated Sports Facilities & Badminton Courts",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Herb & Spice Garden with Sculptures", icon: "fa-tree" },
      { name: "Children's Play Zone", icon: "fa-child" },
      { name: "Jogging Track & Landscaped Greens", icon: "fa-person-running" },
    ],
    connectivity: [
      {
        label: "Vijayanagar Metro Station",
        name: "Vijayanagar Metro Station",
        destination: "Vijayanagar Metro Station, Magadi Main Road, Bengaluru, Karnataka 560040",
        coordinates: { lat: 12.971, lon: 77.5375 },
        distance: "1.2 km",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "Majestic Railway & Bus Station",
        name: "Majestic Railway & Bus Station",
        destination: "KSR Bengaluru City Railway Station, Majestic, Bengaluru, Karnataka 560023",
        coordinates: { lat: 12.9767, lon: 77.5713 },
        distance: "4.5 km",
        icon: "fa-solid fa-train",
      },
      {
        label: "Orion Mall & Brigade Gateway",
        name: "Orion Mall & Brigade Gateway",
        destination: "Orion Mall, Dr Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560055",
        coordinates: { lat: 13.011, lon: 77.555 },
        distance: "5.5 km",
        icon: "fa-solid fa-bag-shopping",
      },
      {
        label: "World Trade Center (WTC Rajajinagar)",
        name: "World Trade Center (WTC Rajajinagar)",
        destination: "World Trade Center, Brigade Gateway Campus, Rajajinagar, Bengaluru, Karnataka 560055",
        coordinates: { lat: 13.0125, lon: 77.5545 },
        distance: "5.5 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Fortis Hospital Rajajinagar",
        name: "Fortis Hospital Rajajinagar",
        destination: "Fortis Hospital, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010",
        coordinates: { lat: 12.992, lon: 77.551 },
        distance: "3.8 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Orchids The International School",
        name: "Orchids The International School",
        destination: "Orchids The International School, Vijayanagar, Bengaluru, Karnataka 560040",
        coordinates: { lat: 12.986, lon: 77.538 },
        distance: "1.8 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "ISKCON Temple Rajajinagar",
        name: "ISKCON Temple Rajajinagar",
        destination: "ISKCON Temple Bangalore, Hare Krishna Hill, Rajajinagar, Bengaluru, Karnataka 560010",
        coordinates: { lat: 13.0098, lon: 77.5511 },
        distance: "5.8 km",
        icon: "fa-solid fa-place-of-worship",
      },
    ],
    images: [
      birlaImage("birla-estates/birla-tisya/gallery/exterior-view.webp"),
      birlaImage("birla-estates/birla-tisya/gallery/interior-view.webp"),
      birlaImage("birla-estates/birla-tisya/gallery/amenities.webp"),
    ],
  },
  {
    id: "birla-alokya",
    thumbnail: birlaImage("birla-estates/birla-alokya/thumbnail.webp"),
    title: "Birla Alokya",
    location: "Soukya Road, Whitefield, Bengaluru, Karnataka 560067",
    coordinates: { lat: 12.9815, lon: 77.785 },
    mapsQuery: "Birla Alokya, Soukya Road, Whitefield, Bengaluru",
    shortAddress: "Whitefield, East Bengaluru",
    category: "ready",
    type: "villa",
    priceValue: 2.15,
    price: "₹ 2.15 Cr*",
    area: "7.9 Acres",
    floorPlans: [
      {
        id: "3bhk_deck",
        bhk: "3 BHK Type A (Balcony Deck)",
        area: "1,437 sq.ft.",
        price: "₹ 2.21 Cr Onwards",
        image: birlaImage("birla-estates/birla-alokya/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3bhk_garden",
        bhk: "3 BHK Type B (Private Garden)",
        area: "2,033 sq.ft.",
        price: "₹ 2.72 Cr Onwards",
        image: birlaImage("birla-estates/birla-alokya/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "3bhk_terrace",
        bhk: "3 BHK Type C (Private Terrace)",
        area: "2,639 sq.ft.",
        price: "₹ 2.74 Cr Onwards",
        image: birlaImage("birla-estates/birla-alokya/floor-plans/3bhk-floor-plan.webp"),
      },
      {
        id: "4bhk_villament",
        bhk: "4 BHK Type D/E (Private Space)",
        area: "3,650 sq.ft.",
        price: "₹ 3.50 Cr Onwards",
        image: birlaImage("birla-estates/birla-alokya/floor-plans/4bhk-floor-plan.webp"),
      },
    ],
    possession: "Ready to Move",
    units: "218",
    highlight:
      "LEED Pre-Certified Platinum Low-Rise Duplex Villament Community with Private Gardens/Terraces and 30+ LifeDesigned® Amenities",
    reraId: "PRM/KA/RERA/1250/304/PR/190724/002725",
    highlights: [
      "Ready-to-move low-rise, low-density duplex villament community spread across 7.9 acres",
      "Exclusive 218 residences combining private villa luxury with gated security",
      "Duplex homes featuring private garden or private rooftop terrace spaces",
      "15,800+ sq. ft. exclusive clubhouse with heated swimming pool & mini theatre",
      "Over 30 LifeDesigned® lifestyle amenities and co-working spaces",
      "Located on Soukya Road in Whitefield near Hope Farm Metro and ITPL",
      "Karnataka RERA approved and delivered: PRM/KA/RERA/1250/304/PR/190724/002725"
    ],
    summary:
      "A low-density community of 3 and 4 BHK LifeDesigned® duplex villaments located on Soukya Road in Whitefield, East Bengaluru.",
    description:
      "Birla Alokya by Birla Estates is a low-rise, low-density villament project spread across 7.9 acres on Soukya Road in Whitefield, East Bengaluru. Combining the luxury of an independent villa with the security of a gated community, the development comprises 218 exclusive duplex villaments across 4 blocks (B+G+3 floors). Every residence features private terrace or garden spaces, high-end specifications, a 15,000+ sq. ft. clubhouse, and access to over 30 LifeDesigned® lifestyle amenities.",
    amenities: [
      { name: "15,800+ sq.ft. Exclusive Clubhouse", icon: "fa-building" },
      { name: "Swimming Pool & Heated Lounge Pool", icon: "fa-water-ladder" },
      { name: "Gymnasium & Fitness Studio", icon: "fa-dumbbell" },
      { name: "Co-Working Spaces & Hammock Reading Zone", icon: "fa-laptop" },
      { name: "Mini Theatre", icon: "fa-film" },
      {
        name: "Tennis Court & Cricket Practice Pitch",
        icon: "fa-table-tennis-paddle-ball",
      },
      { name: "Sensory & Reflexology Garden", icon: "fa-tree" },
      { name: "Children's Play Area", icon: "fa-child" },
      { name: "Amphitheatre & Social Lawns", icon: "fa-masks-theater" },
    ],
    connectivity: [
      {
        label: "Hope Farm Junction & Metro Station",
        name: "Hope Farm Junction & Metro Station",
        destination: "Hope Farm Junction Metro Station, Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.983, lon: 77.752 },
        distance: "5.5 km",
        icon: "fa-solid fa-train-subway",
      },
      {
        label: "ITPL (International Tech Park Bangalore)",
        name: "ITPL (International Tech Park Bangalore)",
        destination: "International Tech Park Bangalore, Whitefield Main Road, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9856, lon: 77.7315 },
        distance: "7.5 km",
        icon: "fa-solid fa-laptop-code",
      },
      {
        label: "Shri Ram Global School",
        name: "Shri Ram Global School",
        destination: "Shri Ram Global School, Whitefield, Bengaluru, Karnataka 560067",
        coordinates: { lat: 12.991, lon: 77.772 },
        distance: "4.3 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Whitefield Global School",
        name: "Whitefield Global School",
        destination: "Whitefield Global School, Channasandra, Whitefield, Bengaluru, Karnataka 560067",
        coordinates: { lat: 12.975, lon: 77.761 },
        distance: "5.2 km",
        icon: "fa-solid fa-school",
      },
      {
        label: "Manipal Hospital Whitefield",
        name: "Manipal Hospital Whitefield",
        destination: "Manipal Hospital, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560066",
        coordinates: { lat: 12.9865, lon: 77.7285 },
        distance: "7.8 km",
        icon: "fa-solid fa-hospital",
      },
      {
        label: "Nexus Shantiniketan / Inorbit Mall",
        name: "Nexus Shantiniketan / Inorbit Mall",
        destination: "Nexus Shantiniketan Mall, Whitefield Main Road, Bengaluru, Karnataka 560067",
        coordinates: { lat: 12.989, lon: 77.728 },
        distance: "8.0 km",
        icon: "fa-solid fa-bag-shopping",
      },
      {
        label: "Kempegowda International Airport",
        name: "Kempegowda International Airport",
        destination: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        coordinates: { lat: 13.1986, lon: 77.7066 },
        distance: "37.6 km",
        icon: "fa-solid fa-plane",
      },
    ],
    images: [
      birlaImage("birla-estates/birla-alokya/gallery/exterior-view.webp"),
      birlaImage("birla-estates/birla-alokya/gallery/interior-view.webp"),
      birlaImage("birla-estates/birla-alokya/gallery/amenities.webp"),
    ],
  },
];

export const birlaFaqs = [
  {
    question: "Who is the owner of Birla Estates?",
    answer:
      "Birla Estates is a wholly-owned subsidiary of Aditya Birla Real Estate Limited (formerly Century Textiles and Industries Limited), which operates under the Aditya Birla Group. The parent conglomerate is chaired by billionaire businessperson Kumar Mangalam Birla.",
  },
  {
    question: "Is Birla Estates a good builder?",
    answer:
      "Birla Estates is widely recognized for delivering premium, sustainable residential developments designed with their signature LifeDesigned® philosophy and certified by LEED and IGBC green building standards.",
  },
  {
    question: "Who is the CEO of Birla Estates?",
    answer:
      "K. T. Jithendran serves as the Managing Director and Chief Executive Officer (CEO) of Birla Estates.",
  },
  {
    question: "Who is the current owner of Birla?",
    answer:
      "Kumar Mangalam Birla is the current chairman and leader of the flagship Aditya Birla Group.",
  },
  {
    question: "How big is Birla Estates?",
    answer:
      "Birla Estates is one of India's fastest-growing luxury real estate developers with a residential portfolio exceeding 10 million sq. ft. across Bengaluru, Mumbai Metropolitan Region (MMR), and NCR.",
  },
  {
    question: "What are the latest news headlines about Birla Estates?",
    answer:
      "Birla Estates recently announced targets to achieve over ₹15,000 crore in annual pre-sales with major new township phases in North and South-East Bengaluru.",
  },
  {
    question: "What was the previous name of Aditya Birla Real Estate?",
    answer:
      "Aditya Birla Real Estate Limited was previously named Century Textiles and Industries Limited.",
  },
  {
    question: "Who is the Managing Director of Birla Estates?",
    answer:
      "The Managing Director and Chief Executive Officer of Birla Estates is K. T. Jithendran.",
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

  return [
    `${property.description} Buyers researching ${searchTerm} can explore Birla Estates homes in ${shortAddress}, with project status, location, and configuration details available to compare.`,
    `${property.title} is listed with ${bhkSummary} across ${property.area}, with ${statusText.toLowerCase()} status and possession shown as ${property.possession}. Listed floor plan options include ${floorPlans || bhkSummary}. Residents can explore amenities such as ${amenities || "the community's listed lifestyle facilities"}, with nearby destinations including ${nearbyPlaces || shortAddress}. Review this Birla Estates project's floor plans, amenities, and connectivity when comparing homes in Bengaluru.${property.reraId ? ` RERA registration number: ${property.reraId.replace(/\.$/, "")}.` : ""}`,
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

const shortAddressMap = {
  "birla-evara": "Sarjapur Road, Bengaluru",
  "birla-ojasvi": "RR Nagar, South Bengaluru",
  "birla-trimaya-phase-4": "Devanahalli, North Bengaluru",
  "birla-tisya": "Rajajinagar, West Bengaluru",
  "birla-alokya": "Whitefield, East Bengaluru",
};

birlaData.forEach((property) => {
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
  slug: "birla",
  name: "Birla Estates",
  regions: "Bengaluru",
  theme: {
    primary: "#0B1E36",
    primaryHover: "#071526",
    accent: "#D4AF37",
    surface: "#FAF9F5",
    soft: "#EEF4FA",
    border: "#DCE5EF",
  },
  properties: birlaData,
  faqs: birlaFaqs,
  whatsappNumber: "+919876543210",
};

export const birlaProjects = birlaData;
