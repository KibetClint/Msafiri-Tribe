import destSerengeti from "@/assets/dest-serengeti.jpg";
import destAmboseli from "@/assets/dest-amboseli.jpg";
import destMara from "@/assets/dest-mara.jpg";
import destTsavo from "@/assets/dest-tsavo.jpg";
import destSamburu from "@/assets/dest-samburu.jpg";
import destNairobi from "@/assets/dest-nairobi.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destZanzibar from "@/assets/dest-zanzibar.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destEgypt from "@/assets/dest-egypt.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destDiani from "@/assets/dest-diani.jpg";
import destMombasa from "@/assets/dest-mombasa.jpg";
import destSeychelles from "@/assets/dest-seychelles.jpg";
import destLamu from "@/assets/dest-lamu.jpg";
import destMauritius from "@/assets/dest-mauritius.jpg";
import destMalindi from "@/assets/dest-malindi.jpg";

export type DestinationCategory = "local" | "international" | "beach";
<<<<<<< HEAD
=======
export type TripType = "wildlife-safari" | "beach-holiday" | "adventure" | "cultural" | "luxury" | "city-break";

export const tripTypes: { key: TripType; label: string; description: string }[] = [
  { key: "wildlife-safari", label: "Wildlife Safaris", description: "Get up close with Africa's iconic Big Five" },
  { key: "beach-holiday", label: "Beach Holidays", description: "Sun, sand, and turquoise waters" },
  { key: "adventure", label: "Adventure Tours", description: "Thrilling experiences for the bold" },
  { key: "cultural", label: "Cultural & Historical", description: "Ancient wonders and living traditions" },
  { key: "luxury", label: "Luxury Getaways", description: "Exclusive indulgence and premium comfort" },
  { key: "city-break", label: "City Breaks", description: "Explore vibrant cities and urban culture" },
];
>>>>>>> 3478804c (update project)

export interface DestinationDetail {
  id: number;
  slug: string;
  name: string;
<<<<<<< HEAD
=======
  country: string;
>>>>>>> 3478804c (update project)
  description: string;
  distance: string;
  image: string;
  category: DestinationCategory;
<<<<<<< HEAD
=======
  tripTypes: TripType[];
>>>>>>> 3478804c (update project)
  longDescription: string;
  highlights: string[];
  bestTime: string;
  gallery: string[];
  packages: {
    basic: PackageTier;
    silver: PackageTier;
    premium: PackageTier;
  };
}

export interface PackageTier {
  name: string;
  price: number;
  duration: string;
  accommodation: string;
<<<<<<< HEAD
  includes: string[];
  itinerary: { day: number; title: string; description: string }[];
=======
  mealBasis: string;
  includes: string[];
  itinerary: ItineraryDay[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  accommodationDescription?: string;
  mealBasis?: string;
  destination?: string;
>>>>>>> 3478804c (update project)
}

export const destinations: DestinationDetail[] = [
  // ===== LOCAL SAFARIS =====
  {
    id: 1,
    slug: "serengeti",
<<<<<<< HEAD
=======
    country: "Tanzania",
    tripTypes: ["wildlife-safari"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Serengeti, Tanzania",
    description: "Discover the Great Migration and diverse wildlife in the Serengeti.",
    distance: "450km",
    image: destSerengeti,
    category: "local",
    longDescription: "The Serengeti is one of Africa's most celebrated wildlife sanctuaries, renowned for the annual Great Migration where over two million wildebeest, zebras, and gazelles traverse the plains. The vast grasslands, dotted with acacia trees, offer an unparalleled safari experience with incredible predator-prey interactions.",
    highlights: ["Great Migration", "Big Five sightings", "Hot air balloon safaris", "Maasai cultural visits", "Endless golden plains"],
    bestTime: "June to October for the Great Migration; January to February for calving season.",
    gallery: [destSerengeti, destMara, destAmboseli, destTsavo, destSamburu, destNairobi],
    packages: {
      basic: {
        name: "Serengeti Explorer",
        price: 1200,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard tented camp",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Airport transfers", "2 game drives", "All meals", "Park fees", "Professional guide"],
        itinerary: [
          { day: 1, title: "Arrival & Afternoon Drive", description: "Arrive at Serengeti airstrip, transfer to camp. Afternoon game drive across the central plains." },
          { day: 2, title: "Full Day Safari", description: "Full day exploring the Seronera Valley, tracking the Big Five with picnic lunch in the bush." },
          { day: 3, title: "Sunrise Drive & Departure", description: "Early morning game drive, brunch at camp, then transfer to airstrip for departure." },
        ],
      },
      silver: {
        name: "Serengeti Discovery",
        price: 2200,
        duration: "5 Days / 4 Nights",
        accommodation: "Mid-range safari lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Airport transfers", "Daily game drives", "All meals & drinks", "Park fees", "Professional guide", "Bush breakfast"],
        itinerary: [
          { day: 1, title: "Arrival & Welcome", description: "Fly into the Serengeti, settle into your lodge with a welcome dinner." },
          { day: 2, title: "Central Serengeti Safari", description: "Full day exploring the central Serengeti with morning and afternoon drives." },
          { day: 3, title: "Migration Pursuit", description: "Track the Great Migration herds with an expert guide, bush breakfast included." },
          { day: 4, title: "Western Corridor", description: "Explore the Grumeti River area, famous for crocodile crossings and hippo pools." },
          { day: 5, title: "Final Safari & Departure", description: "Morning drive, leisurely brunch, and transfer to airstrip." },
        ],
      },
      premium: {
        name: "Serengeti Luxury",
        price: 3800,
        duration: "7 Days / 6 Nights",
        accommodation: "5-star luxury tented suite",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private charter flights", "Unlimited game drives", "Gourmet dining", "Premium drinks", "Hot air balloon safari", "Maasai village visit", "Private guide & vehicle"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Private charter to Serengeti, champagne welcome at your luxury suite." },
          { day: 2, title: "Hot Air Balloon Safari", description: "Dawn balloon ride over the plains, followed by bush champagne breakfast." },
          { day: 3, title: "Big Five Tracking", description: "Private guided drive focused on locating all Big Five members." },
          { day: 4, title: "Maasai Cultural Experience", description: "Visit a Maasai village, learn traditions, afternoon game drive." },
          { day: 5, title: "Western Serengeti", description: "Explore remote western areas, sundowner drinks at a scenic kopje." },
          { day: 6, title: "Photography Safari", description: "Dedicated photography drive with expert positioning for the best shots." },
          { day: 7, title: "Farewell Brunch", description: "Relaxing morning, gourmet farewell brunch, private charter departure." },
        ],
      },
    },
  },
  {
    id: 2,
    slug: "amboseli",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["wildlife-safari"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Amboseli, Kenya",
    description: "Experience Amboseli's breathtaking views and iconic elephant herds.",
    distance: "150km",
    image: destAmboseli,
    category: "local",
    longDescription: "Amboseli National Park offers some of the most iconic views in Africa — massive elephant herds silhouetted against the snow-capped peak of Mount Kilimanjaro. The park's diverse habitats, from dry lake beds to wetlands, support an incredible variety of wildlife.",
    highlights: ["Mount Kilimanjaro views", "Large elephant herds", "Observation Hill", "Wetland bird watching", "Maasai community visits"],
    bestTime: "January to February for clear Kilimanjaro views; June to October for dry season wildlife.",
    gallery: [destAmboseli, destSerengeti, destTsavo, destMara, destSamburu, destNairobi],
    packages: {
      basic: {
        name: "Amboseli Getaway",
        price: 900,
        duration: "2 Days / 1 Night",
        accommodation: "Budget safari lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers from Nairobi", "2 game drives", "All meals", "Park fees"],
        itinerary: [
          { day: 1, title: "Drive to Amboseli", description: "Morning departure from Nairobi, arrive by lunch. Afternoon game drive with Kilimanjaro views." },
          { day: 2, title: "Sunrise Drive & Return", description: "Early morning game drive, breakfast, then return to Nairobi." },
        ],
      },
      silver: {
        name: "Amboseli Panorama",
        price: 1900,
        duration: "4 Days / 3 Nights",
        accommodation: "Mid-range eco-lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "Daily game drives", "All meals & soft drinks", "Park fees", "Observation Hill hike", "Bird watching tour"],
        itinerary: [
          { day: 1, title: "Arrival & Sunset Drive", description: "Transfer from Nairobi, check in, evening game drive." },
          { day: 2, title: "Full Day Exploration", description: "Morning and afternoon drives through Amboseli's diverse habitats." },
          { day: 3, title: "Observation Hill & Wetlands", description: "Hike Observation Hill, afternoon wetland bird watching excursion." },
          { day: 4, title: "Final Safari & Departure", description: "Early morning drive, brunch, transfer back to Nairobi." },
        ],
      },
      premium: {
        name: "Amboseli Exclusive",
        price: 3200,
        duration: "5 Days / 4 Nights",
        accommodation: "Luxury tented camp with Kilimanjaro views",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private transfers", "Unlimited game drives", "Gourmet meals", "Premium drinks", "Private guide", "Maasai village visit", "Sundowner experience"],
        itinerary: [
          { day: 1, title: "Luxury Arrival", description: "Private transfer, welcome cocktails with Kilimanjaro backdrop." },
          { day: 2, title: "Elephant Encounters", description: "Dedicated drive following Amboseli's legendary elephant families." },
          { day: 3, title: "Cultural Immersion", description: "Maasai village visit, afternoon photography safari." },
          { day: 4, title: "Sundowner Safari", description: "Full day drive, evening sundowner with panoramic views." },
          { day: 5, title: "Farewell & Departure", description: "Morning drive, gourmet brunch, private transfer." },
        ],
      },
    },
  },
  {
    id: 3,
    slug: "maasai-mara",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["wildlife-safari"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Maasai Mara, Kenya",
    description: "Explore the abundant wildlife and scenic beauty of the Maasai Mara.",
    distance: "225km",
    image: destMara,
    category: "local",
    longDescription: "The Maasai Mara is Kenya's most famous game reserve, offering unrivaled wildlife viewing year-round. Home to the Kenyan portion of the Great Migration, the Mara's rolling grasslands and acacia-dotted landscapes are home to the Big Five and countless other species.",
    highlights: ["Great Migration river crossings", "Big Five guaranteed", "Balloon safaris", "Maasai cultural tours", "Night game drives"],
    bestTime: "July to October for the Migration; year-round for Big Five.",
    gallery: [destMara, destSerengeti, destSamburu, destAmboseli, destTsavo, destNairobi],
    packages: {
      basic: {
        name: "Mara Express",
        price: 1100,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard tented camp",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return road transfer", "2 game drives", "All meals", "Park fees"],
        itinerary: [
          { day: 1, title: "Nairobi to Mara", description: "Drive to the Mara via the Great Rift Valley, afternoon game drive." },
          { day: 2, title: "Full Day Safari", description: "Full day exploring the reserve with morning and afternoon drives." },
          { day: 3, title: "Morning Drive & Return", description: "Early morning game drive, breakfast, return to Nairobi." },
        ],
      },
      silver: {
        name: "Mara Explorer",
        price: 2200,
        duration: "5 Days / 4 Nights",
        accommodation: "Mid-range safari lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "Daily game drives", "All meals & drinks", "Park fees", "Maasai village visit", "Bush breakfast"],
        itinerary: [
          { day: 1, title: "Arrival & Orientation", description: "Transfer to the Mara, settle in, evening drive." },
          { day: 2, title: "Mara River Exploration", description: "Morning drive to the Mara River, afternoon drive through open plains." },
          { day: 3, title: "Big Five Hunt", description: "Dedicated full-day drive tracking all Big Five species." },
          { day: 4, title: "Cultural & Bush Experience", description: "Maasai village visit, bush breakfast in the savannah." },
          { day: 5, title: "Final Safari", description: "Early morning drive, brunch, return transfer." },
        ],
      },
      premium: {
        name: "Mara Ultimate",
        price: 4200,
        duration: "7 Days / 6 Nights",
        accommodation: "5-star luxury camp",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Domestic flights", "Unlimited private drives", "Gourmet dining", "Balloon safari", "Night game drive", "Private guide", "Spa treatment"],
        itinerary: [
          { day: 1, title: "Fly-in Arrival", description: "Domestic flight to the Mara, luxury camp welcome." },
          { day: 2, title: "Balloon Safari", description: "Dawn hot air balloon ride, champagne bush breakfast." },
          { day: 3, title: "Migration Tracking", description: "Follow the wildebeest herds with your private guide." },
          { day: 4, title: "Predator Focus", description: "Track lions, leopards, and cheetahs across the plains." },
          { day: 5, title: "Night Drive Experience", description: "Daytime drive followed by a thrilling nocturnal safari." },
          { day: 6, title: "Relaxation & Spa", description: "Morning drive, afternoon spa treatment at camp." },
          { day: 7, title: "Farewell", description: "Final morning drive, gourmet farewell, fly-out." },
        ],
      },
    },
  },
  {
    id: 4,
    slug: "tsavo",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["wildlife-safari"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Tsavo, Kenya",
    description: "Explore the vast landscapes and diverse wildlife of Tsavo National Park.",
    distance: "200km",
    image: destTsavo,
    category: "local",
    longDescription: "Tsavo is Kenya's largest national park, divided into Tsavo East and Tsavo West. Known for its red elephants (dusted in the park's red soil), volcanic landscapes, and the crystal-clear Mzima Springs, Tsavo offers a raw, untouched safari experience.",
    highlights: ["Red elephants", "Mzima Springs", "Lugard Falls", "Shetani Lava Flow", "Diverse bird species"],
    bestTime: "June to October (dry season) for best wildlife viewing.",
    gallery: [destTsavo, destAmboseli, destNairobi, destMara, destSerengeti, destSamburu],
    packages: {
      basic: {
        name: "Tsavo Quick Safari",
        price: 800,
        duration: "2 Days / 1 Night",
        accommodation: "Budget lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "2 game drives", "All meals", "Park fees"],
        itinerary: [
          { day: 1, title: "Nairobi to Tsavo East", description: "Drive to Tsavo, afternoon game drive spotting red elephants." },
          { day: 2, title: "Tsavo West & Return", description: "Morning visit to Mzima Springs, then return to Nairobi." },
        ],
      },
      silver: {
        name: "Tsavo Adventure",
        price: 1600,
        duration: "4 Days / 3 Nights",
        accommodation: "Mid-range safari lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "Daily game drives", "All meals", "Park fees", "Mzima Springs visit", "Lugard Falls excursion"],
        itinerary: [
          { day: 1, title: "Arrival Tsavo East", description: "Transfer, check in, evening game drive." },
          { day: 2, title: "Tsavo East Exploration", description: "Full day in Tsavo East — Lugard Falls and Galana River." },
          { day: 3, title: "Cross to Tsavo West", description: "Transfer to Tsavo West, visit Mzima Springs and Shetani Lava Flow." },
          { day: 4, title: "Final Drive & Departure", description: "Morning game drive, brunch, return to Nairobi." },
        ],
      },
      premium: {
        name: "Tsavo Grand Safari",
        price: 2800,
        duration: "6 Days / 5 Nights",
        accommodation: "Luxury lodge with pool",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private transfers", "Unlimited drives", "Gourmet meals", "Premium drinks", "Private guide", "Nature walks", "Stargazing experience"],
        itinerary: [
          { day: 1, title: "VIP Transfer", description: "Private transfer to Tsavo East luxury lodge." },
          { day: 2, title: "Red Elephant Safari", description: "Tracking Tsavo's famous red-dusted elephants." },
          { day: 3, title: "Lugard Falls & River", description: "Explore the Galana River and dramatic Lugard Falls." },
          { day: 4, title: "Tsavo West Transfer", description: "Cross to Tsavo West, afternoon Mzima Springs visit." },
          { day: 5, title: "Shetani & Stargazing", description: "Explore lava flows by day, stargazing dinner by night." },
          { day: 6, title: "Farewell", description: "Morning nature walk, gourmet brunch, private transfer." },
        ],
      },
    },
  },
  {
    id: 5,
    slug: "samburu",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["wildlife-safari"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Samburu, Kenya",
    description: "Experience the raw beauty and unique wildlife of Samburu National Reserve.",
    distance: "225km",
    image: destSamburu,
    category: "local",
    longDescription: "Samburu National Reserve lies along the banks of the Ewaso Ng'iro River in Kenya's arid north. It's famous for its 'Special Five' — Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and Beisa oryx — found nowhere else in Kenya's southern parks.",
    highlights: ["Samburu Special Five", "Ewaso Ng'iro River", "Samburu cultural experiences", "Scenic rugged landscapes", "Excellent bird watching"],
    bestTime: "July to October and January to February for optimal wildlife viewing.",
    gallery: [destSamburu, destMara, destTsavo, destAmboseli, destSerengeti, destNairobi],
    packages: {
      basic: {
        name: "Samburu Express",
        price: 1000,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard riverside camp",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "2 game drives", "All meals", "Park fees"],
        itinerary: [
          { day: 1, title: "Drive to Samburu", description: "Scenic drive from Nairobi, afternoon game drive." },
          { day: 2, title: "Full Day Safari", description: "Track the Special Five across the reserve." },
          { day: 3, title: "Morning Drive & Return", description: "Early drive, breakfast, return to Nairobi." },
        ],
      },
      silver: {
        name: "Samburu Discovery",
        price: 1800,
        duration: "4 Days / 3 Nights",
        accommodation: "Mid-range eco-lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return transfers", "Daily game drives", "All meals & drinks", "Park fees", "Samburu village visit", "River walk"],
        itinerary: [
          { day: 1, title: "Arrival & Evening Drive", description: "Transfer to Samburu, check-in, sunset game drive." },
          { day: 2, title: "Special Five Safari", description: "Dedicated day tracking all five unique species." },
          { day: 3, title: "Culture & River", description: "Samburu village visit, afternoon riverside nature walk." },
          { day: 4, title: "Final Safari & Departure", description: "Morning drive, brunch, return transfer." },
        ],
      },
      premium: {
        name: "Samburu Exclusive",
        price: 3000,
        duration: "5 Days / 4 Nights",
        accommodation: "Luxury riverside lodge",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Domestic flights", "Unlimited drives", "Gourmet meals", "Premium drinks", "Private guide", "Camel safari", "Cultural immersion"],
        itinerary: [
          { day: 1, title: "Fly-in Arrival", description: "Domestic flight, luxury lodge welcome." },
          { day: 2, title: "Special Five Tracking", description: "Private guided drive for the Samburu Special Five." },
          { day: 3, title: "Camel Safari", description: "Unique camel-back safari through the bush." },
          { day: 4, title: "Cultural Immersion", description: "Deep dive into Samburu traditions and way of life." },
          { day: 5, title: "Farewell", description: "Morning drive, farewell brunch, fly-out." },
        ],
      },
    },
  },
  {
    id: 6,
    slug: "nairobi",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["wildlife-safari","city-break"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Nairobi National Park",
    description: "A quick wildlife escape on the outskirts of Kenya's bustling capital.",
    distance: "10km",
    image: destNairobi,
    category: "local",
    longDescription: "Nairobi National Park is the only national park in the world located within a capital city. Just minutes from downtown Nairobi, it's home to lions, giraffes, rhinos, and over 400 bird species — all against a stunning backdrop of the city skyline.",
    highlights: ["City skyline safari", "Black rhino sanctuary", "David Sheldrick Elephant Orphanage", "Giraffe Centre nearby", "Over 400 bird species"],
    bestTime: "Year-round; dry season (July to October) for best animal sightings.",
    gallery: [destNairobi, destAmboseli, destSerengeti, destMara, destTsavo, destSamburu],
    packages: {
      basic: {
        name: "Nairobi Day Safari",
        price: 150,
        duration: "Half Day",
        accommodation: "No accommodation (day trip)",
<<<<<<< HEAD
=======
        mealBasis: "Snacks & Water",
>>>>>>> 3478804c (update project)
        includes: ["Hotel pickup & drop-off", "1 game drive", "Park fees", "Water & snacks"],
        itinerary: [
          { day: 1, title: "Morning Safari", description: "Early morning pickup, 4-hour game drive through Nairobi National Park, return by lunch." },
        ],
      },
      silver: {
        name: "Nairobi Wildlife Experience",
        price: 400,
        duration: "Full Day",
        accommodation: "No accommodation (day trip)",
<<<<<<< HEAD
=======
        mealBasis: "Snacks & Water",
>>>>>>> 3478804c (update project)
        includes: ["Hotel pickup & drop-off", "Game drive", "David Sheldrick visit", "Giraffe Centre", "Lunch included", "Park fees"],
        itinerary: [
          { day: 1, title: "Full Day Wildlife Tour", description: "Morning game drive, visit the elephant orphanage, lunch, afternoon at the Giraffe Centre." },
        ],
      },
      premium: {
        name: "Nairobi VIP Safari",
        price: 800,
        duration: "2 Days / 1 Night",
        accommodation: "Boutique hotel in Nairobi",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private transfers", "Private game drive", "Elephant orphanage", "Giraffe Centre", "Carnivore restaurant dinner", "All meals", "Park fees"],
        itinerary: [
          { day: 1, title: "VIP Safari Day", description: "Private morning game drive, lunch in the park, Giraffe Centre, dinner at The Carnivore." },
          { day: 2, title: "Elephant Orphanage & Departure", description: "Visit David Sheldrick Trust, brunch, hotel drop-off." },
        ],
      },
    },
  },

  // ===== BEACH DESTINATIONS =====
  {
    id: 7,
    slug: "diani-beach",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["beach-holiday"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Diani Beach, Kenya",
    description: "Kenya's award-winning beach with powdery white sand and turquoise waters.",
    distance: "480km",
    image: destDiani,
    category: "beach",
    longDescription: "Diani Beach, located on Kenya's South Coast, has been voted Africa's leading beach destination multiple times. With its pristine white sandy shores, warm turquoise Indian Ocean waters, and lush tropical vegetation, it's the perfect blend of relaxation and adventure. From water sports to marine parks, Diani has it all.",
    highlights: ["Pristine white sand beaches", "Snorkeling & diving at Kisite Marine Park", "Skydiving over the coast", "Colobus monkey conservation", "Water sports & kite surfing"],
    bestTime: "January to March and July to October for sunny, dry weather.",
    gallery: [destDiani, destMombasa, destZanzibar, destLamu, destMalindi, destSeychelles],
    packages: {
      basic: {
        name: "Diani Beach Escape",
        price: 650,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard beach resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["SGR train tickets Nairobi-Mombasa", "Return transfers", "All meals", "Beach access"],
        itinerary: [
          { day: 1, title: "Travel & Check-in", description: "SGR train to Mombasa, transfer to Diani. Afternoon at the beach." },
          { day: 2, title: "Beach & Water Sports", description: "Full day of beach relaxation, optional snorkeling or jet ski." },
          { day: 3, title: "Departure", description: "Morning swim, brunch, transfer to SGR for return." },
        ],
      },
      silver: {
        name: "Diani Discovery",
        price: 1400,
        duration: "5 Days / 4 Nights",
        accommodation: "Mid-range beach hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights Nairobi-Ukunda", "Airport transfers", "All meals & drinks", "Kisite Marine Park trip", "Glass-bottom boat ride"],
        itinerary: [
          { day: 1, title: "Fly to Paradise", description: "Flight to Ukunda airstrip, transfer to hotel, sunset on the beach." },
          { day: 2, title: "Marine Park Adventure", description: "Full day trip to Kisite-Mpunguti Marine Park — dolphins, snorkeling, and seafood lunch." },
          { day: 3, title: "Water Sports Day", description: "Kite surfing, jet skiing, or kayaking along the coast." },
          { day: 4, title: "Cultural Excursion", description: "Visit Shimba Hills National Reserve for elephant sightings and Sheldrick Falls." },
          { day: 5, title: "Farewell Beach Morning", description: "Morning swim, brunch, flight back to Nairobi." },
        ],
      },
      premium: {
        name: "Diani Luxury Retreat",
        price: 2800,
        duration: "7 Days / 6 Nights",
        accommodation: "5-star luxury beach villa",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private flights", "All-inclusive dining", "Premium drinks", "Spa treatments", "Private snorkeling trip", "Skydiving experience", "Sunset dhow cruise"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Private flight, champagne welcome at luxury beach villa." },
          { day: 2, title: "Spa & Relaxation", description: "Morning spa treatment, afternoon beach lounging." },
          { day: 3, title: "Underwater Paradise", description: "Private snorkeling & diving expedition at coral reefs." },
          { day: 4, title: "Skydiving Adventure", description: "Tandem skydive over the Indian Ocean coastline." },
          { day: 5, title: "Sunset Dhow Cruise", description: "Traditional dhow sailing with gourmet seafood dinner." },
          { day: 6, title: "Shimba Hills Excursion", description: "Private safari in Shimba Hills, waterfall visit." },
          { day: 7, title: "Farewell", description: "Final beach morning, gourmet brunch, private flight home." },
        ],
      },
    },
  },
  {
    id: 8,
    slug: "mombasa",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["beach-holiday","cultural"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Mombasa, Kenya",
    description: "Kenya's coastal gem blending Swahili culture, historic forts, and stunning beaches.",
    distance: "440km",
    image: destMombasa,
    category: "beach",
    longDescription: "Mombasa, Kenya's second-largest city, is a vibrant coastal destination rich in history, culture, and natural beauty. From the iconic Fort Jesus UNESCO World Heritage Site to the bustling Old Town and the pristine beaches of the North and South Coast, Mombasa offers a unique mix of adventure and relaxation.",
    highlights: ["Fort Jesus World Heritage Site", "Old Town Swahili culture", "Nyali & Bamburi beaches", "Haller Park wildlife", "SGR train experience"],
    bestTime: "January to March and September to December for ideal beach weather.",
    gallery: [destMombasa, destDiani, destZanzibar, destLamu, destMalindi, destSeychelles],
    packages: {
      basic: {
        name: "Mombasa Express",
        price: 500,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard hotel on North Coast",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["SGR train tickets", "Hotel transfers", "All meals", "Fort Jesus tour"],
        itinerary: [
          { day: 1, title: "SGR to Mombasa", description: "Morning SGR train, arrive Mombasa. Afternoon beach time." },
          { day: 2, title: "Culture & Coast", description: "Visit Fort Jesus and Old Town, afternoon at Nyali Beach." },
          { day: 3, title: "Haller Park & Return", description: "Morning at Haller Park (giraffes, crocs), SGR return." },
        ],
      },
      silver: {
        name: "Mombasa Heritage",
        price: 1200,
        duration: "5 Days / 4 Nights",
        accommodation: "Beachfront resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All meals & drinks", "Fort Jesus tour", "Old Town walking tour", "Mombasa Marine Park snorkeling", "Haller Park visit"],
        itinerary: [
          { day: 1, title: "Fly to the Coast", description: "Flight to Mombasa, beachfront resort check-in, sunset swim." },
          { day: 2, title: "Historical Exploration", description: "Fort Jesus and Old Town guided walking tour, spice market visit." },
          { day: 3, title: "Marine Adventures", description: "Snorkeling at Mombasa Marine National Park, glass-bottom boat." },
          { day: 4, title: "Haller Park & Beach", description: "Morning wildlife at Haller Park, afternoon beach relaxation." },
          { day: 5, title: "Departure", description: "Morning swim, brunch, flight home." },
        ],
      },
      premium: {
        name: "Mombasa Royal",
        price: 2500,
        duration: "7 Days / 6 Nights",
        accommodation: "5-star oceanfront suite",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private flights", "All-inclusive", "Private city tours", "Deep-sea fishing", "Spa treatments", "Sunset cruise", "Private chef dinner"],
        itinerary: [
          { day: 1, title: "Royal Arrival", description: "Private flight, oceanfront suite with welcome cocktails." },
          { day: 2, title: "Private Heritage Tour", description: "Private guide through Fort Jesus, Old Town, and spice markets." },
          { day: 3, title: "Deep-Sea Fishing", description: "Full day deep-sea fishing expedition in the Indian Ocean." },
          { day: 4, title: "Spa & Relaxation", description: "Full spa day with ocean-view treatments." },
          { day: 5, title: "Sunset Dhow Cruise", description: "Private dhow cruise with gourmet dinner by private chef." },
          { day: 6, title: "Marine & Beach Day", description: "Private snorkeling trip, afternoon at exclusive beach club." },
          { day: 7, title: "Farewell", description: "Ocean-view brunch, private flight departure." },
        ],
      },
    },
  },

  {
    id: 15,
    slug: "lamu",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["beach-holiday","cultural"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Lamu Island, Kenya",
    description: "A UNESCO World Heritage site blending Swahili culture, donkey-paced streets, and pristine beaches.",
    distance: "600km",
    image: destLamu,
    category: "beach",
    longDescription: "Lamu is Kenya's oldest living town and a UNESCO World Heritage site. This enchanting island off the northern coast has no cars — just narrow alleys, carved wooden doors, traditional dhow boats, and a timeless Swahili way of life. Shela Beach offers miles of unspoiled white sand, while the archipelago's marine life is spectacular.",
    highlights: ["Lamu Old Town UNESCO site", "Shela Beach", "Traditional dhow sailing", "Swahili cuisine & culture", "Lamu Museum", "Manda Island excursions"],
    bestTime: "July to October and December to March for dry, sunny weather.",
    gallery: [destLamu, destDiani, destMombasa, destZanzibar, destMalindi, destSeychelles],
    packages: {
      basic: {
        name: "Lamu Cultural Escape",
        price: 700,
        duration: "3 Days / 2 Nights",
        accommodation: "Guest house in Lamu Town",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights Nairobi-Lamu", "Airport boat transfer", "Old Town walking tour", "All meals"],
        itinerary: [
          { day: 1, title: "Fly to Lamu", description: "Flight to Lamu, boat transfer, check-in. Afternoon Old Town walking tour." },
          { day: 2, title: "Shela Beach & Dhow", description: "Morning at Shela Beach, afternoon dhow sailing around the archipelago." },
          { day: 3, title: "Departure", description: "Morning exploration, Swahili breakfast, flight back to Nairobi." },
        ],
      },
      silver: {
        name: "Lamu Discovery",
        price: 1500,
        duration: "5 Days / 4 Nights",
        accommodation: "Boutique Swahili hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "All meals & drinks", "Old Town tour", "Dhow sunset cruise", "Manda Island trip", "Swahili cooking class"],
        itinerary: [
          { day: 1, title: "Arrival & Old Town", description: "Fly in, settle into boutique hotel, guided heritage walk." },
          { day: 2, title: "Shela & Water Sports", description: "Full day at Shela Beach with kayaking and snorkeling." },
          { day: 3, title: "Manda Island", description: "Boat trip to Manda Island — mangrove walk, Takwa ruins, beach BBQ." },
          { day: 4, title: "Culture & Cuisine", description: "Swahili cooking class, Lamu Museum, sunset dhow cruise." },
          { day: 5, title: "Farewell", description: "Morning swim, brunch, departure." },
        ],
      },
      premium: {
        name: "Lamu Luxury Retreat",
        price: 3000,
        duration: "7 Days / 6 Nights",
        accommodation: "Exclusive beachfront villa",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private flights", "All-inclusive", "Private dhow", "Deep-sea fishing", "Spa treatments", "Private chef", "Island hopping"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Private flight, speedboat to beachfront villa, welcome dinner." },
          { day: 2, title: "Private Dhow Cruise", description: "Full-day private dhow exploring hidden beaches and snorkeling spots." },
          { day: 3, title: "Deep-Sea Fishing", description: "Private fishing expedition in the Lamu Channel." },
          { day: 4, title: "Spa & Beach", description: "Morning spa treatment, afternoon at private beach." },
          { day: 5, title: "Island Explorer", description: "Visit Manda, Pate, and Kiwayu islands by private boat." },
          { day: 6, title: "Cultural Immersion", description: "Private heritage tour, cooking with local chef, farewell dinner." },
          { day: 7, title: "Farewell", description: "Morning swim, gourmet brunch, private flight home." },
        ],
      },
    },
  },
  {
    id: 16,
    slug: "malindi",
<<<<<<< HEAD
=======
    country: "Kenya",
    tripTypes: ["beach-holiday"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Malindi, Kenya",
    description: "A coastal paradise with pristine marine parks, Italian heritage, and golden beaches.",
    distance: "520km",
    image: destMalindi,
    category: "beach",
    longDescription: "Malindi is a charming Kenyan coastal town with a unique Italian influence, stunning Watamu Marine National Park, and the famous Vasco da Gama Pillar. With its warm waters, vibrant coral reefs, and relaxed atmosphere, Malindi is perfect for beach lovers, snorkelers, and history buffs alike.",
    highlights: ["Watamu Marine Park", "Vasco da Gama Pillar", "Malindi Marine Park", "Gedi Ruins", "Bio-Ken Snake Farm", "Italian-influenced cuisine"],
    bestTime: "October to March for warm, dry weather and excellent visibility for diving.",
    gallery: [destMalindi, destDiani, destLamu, destMombasa, destZanzibar, destSeychelles],
    packages: {
      basic: {
        name: "Malindi Beach Break",
        price: 550,
        duration: "3 Days / 2 Nights",
        accommodation: "Standard beach hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights Nairobi-Malindi", "Airport transfers", "All meals", "Malindi Marine Park visit"],
        itinerary: [
          { day: 1, title: "Fly to Malindi", description: "Flight to Malindi, beach hotel check-in. Afternoon at the beach." },
          { day: 2, title: "Marine Park & Town", description: "Morning snorkeling at Malindi Marine Park, afternoon town tour." },
          { day: 3, title: "Departure", description: "Morning swim, brunch, flight back to Nairobi." },
        ],
      },
      silver: {
        name: "Malindi Explorer",
        price: 1300,
        duration: "5 Days / 4 Nights",
        accommodation: "Mid-range beachfront resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "All meals & drinks", "Watamu Marine Park", "Gedi Ruins tour", "Glass-bottom boat ride", "Dolphin watching"],
        itinerary: [
          { day: 1, title: "Arrival & Beach", description: "Fly in, resort check-in, sunset beach walk." },
          { day: 2, title: "Watamu Marine Park", description: "Full day snorkeling and glass-bottom boat at Watamu coral gardens." },
          { day: 3, title: "History & Culture", description: "Visit Gedi Ruins, Vasco da Gama Pillar, and the Falconry." },
          { day: 4, title: "Dolphins & Beach", description: "Morning dolphin watching, afternoon water sports." },
          { day: 5, title: "Farewell", description: "Morning swim, brunch, departure." },
        ],
      },
      premium: {
        name: "Malindi Luxury",
        price: 2600,
        duration: "7 Days / 6 Nights",
        accommodation: "5-star oceanfront resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Private flights", "All-inclusive", "Private snorkeling trips", "Deep-sea fishing", "Spa package", "Sundowner cruise", "Private chef dinner"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Private flight, luxury resort welcome with cocktails." },
          { day: 2, title: "Private Marine Safari", description: "Private boat tour of Watamu and Malindi marine parks." },
          { day: 3, title: "Deep-Sea Fishing", description: "Full-day private fishing expedition." },
          { day: 4, title: "Spa & Relaxation", description: "Full spa day with ocean-view treatments." },
          { day: 5, title: "Gedi & Heritage", description: "Private guided tour of Gedi Ruins and local heritage sites." },
          { day: 6, title: "Sundowner Cruise", description: "Evening cruise along the coast with gourmet dinner." },
          { day: 7, title: "Farewell", description: "Morning beach, farewell brunch, private flight." },
        ],
      },
    },
  },
  {
    id: 17,
    slug: "seychelles",
<<<<<<< HEAD
=======
    country: "Seychelles",
    tripTypes: ["beach-holiday","luxury"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Seychelles",
    description: "A pristine archipelago of granite islands with the world's most beautiful beaches.",
    distance: "International",
    image: destSeychelles,
    category: "beach",
    longDescription: "The Seychelles is an archipelago of 115 islands in the Indian Ocean, famous for its dramatic granite boulders, powder-white beaches, and lush tropical forests. Home to two UNESCO World Heritage sites and some of the rarest wildlife on earth, Seychelles offers the ultimate luxury island escape.",
    highlights: ["Anse Source d'Argent beach", "Vallée de Mai (UNESCO)", "Giant Aldabra tortoises", "Pristine snorkeling & diving", "Rare Coco de Mer palms", "Island hopping by ferry"],
    bestTime: "April to May and October to November for calm seas and pleasant weather.",
    gallery: [destSeychelles, destMaldives, destMauritius, destZanzibar, destDiani, destLamu],
    packages: {
      basic: {
        name: "Seychelles Getaway",
        price: 2200,
        duration: "5 Days / 4 Nights",
        accommodation: "3-star guesthouse on Mahé",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "All breakfasts", "Victoria city tour", "Beach excursion"],
        itinerary: [
          { day: 1, title: "Arrival Mahé", description: "Fly to Seychelles, transfer to guesthouse, evening at Beau Vallon Beach." },
          { day: 2, title: "Victoria & Beaches", description: "Tour Victoria market, afternoon at Anse Intendance." },
          { day: 3, title: "Snorkeling Day", description: "Boat trip to Ste. Anne Marine Park for snorkeling." },
          { day: 4, title: "Free Exploration", description: "Explore Mahé's hiking trails or relax at hidden beaches." },
          { day: 5, title: "Departure", description: "Morning swim, airport transfer." },
        ],
      },
      silver: {
        name: "Seychelles Island Hopper",
        price: 4200,
        duration: "7 Days / 6 Nights",
        accommodation: "Boutique hotels on Mahé & Praslin",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "Inter-island ferry", "All transfers", "All meals", "Vallée de Mai tour", "La Digue bike tour", "Snorkeling excursion"],
        itinerary: [
          { day: 1, title: "Arrival Mahé", description: "Fly in, settle into boutique hotel, sunset dinner." },
          { day: 2, title: "Mahé Exploration", description: "Victoria, botanical gardens, Morne Seychellois hike." },
          { day: 3, title: "Ferry to Praslin", description: "Scenic ferry ride, check-in, Anse Lazio beach." },
          { day: 4, title: "Vallée de Mai", description: "UNESCO Vallée de Mai forest — Coco de Mer palms, rare birds." },
          { day: 5, title: "La Digue Day Trip", description: "Bike tour of La Digue, Anse Source d'Argent beach." },
          { day: 6, title: "Snorkeling & Beach", description: "Curieuse Island snorkeling, giant tortoise sanctuary." },
          { day: 7, title: "Return & Departure", description: "Ferry back to Mahé, departure flight." },
        ],
      },
      premium: {
        name: "Seychelles Ultra Luxury",
        price: 8000,
        duration: "10 Days / 9 Nights",
        accommodation: "5-star private island resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Helicopter transfers", "All-inclusive premium", "Private island access", "Diving package", "Spa package", "Private yacht day", "Personal concierge"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class flight, helicopter to private island resort." },
          { day: 2, title: "Private Beach Day", description: "Your own stretch of beach, gourmet picnic, sunset cocktails." },
          { day: 3, title: "Diving Paradise", description: "Two-dive excursion at world-class dive sites with marine guide." },
          { day: 4, title: "Praslin & Vallée de Mai", description: "Private tour of UNESCO forest, lunch at Anse Lazio." },
          { day: 5, title: "La Digue VIP", description: "Private guided La Digue tour, Anse Source d'Argent photography." },
          { day: 6, title: "Private Yacht Cruise", description: "Full-day yacht through inner islands, snorkeling stops." },
          { day: 7, title: "Spa & Wellness", description: "Full day spa, yoga session, healthy gourmet dining." },
          { day: 8, title: "Fishing & Feast", description: "Deep-sea fishing, private chef cooks your catch." },
          { day: 9, title: "Farewell Dinner", description: "Beach bonfire farewell with live music and gourmet dinner." },
          { day: 10, title: "Departure", description: "Leisurely morning, helicopter transfer, flight home." },
        ],
      },
    },
  },
  {
    id: 18,
    slug: "mauritius",
<<<<<<< HEAD
=======
    country: "Mauritius",
    tripTypes: ["beach-holiday","luxury"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Mauritius",
    description: "A tropical gem with turquoise lagoons, dramatic mountains, and vibrant multicultural heritage.",
    distance: "International",
    image: destMauritius,
    category: "beach",
    longDescription: "Mauritius is a volcanic island paradise in the Indian Ocean known for its stunning lagoons, dramatic Le Morne mountain, underwater waterfall illusion, and vibrant blend of Indian, African, Chinese, and European cultures. From luxurious resorts to adventure activities, Mauritius offers something for every traveler.",
    highlights: ["Le Morne Brabant mountain", "Seven Colored Earths", "Île aux Cerfs island", "Underwater waterfall illusion", "Chamarel Falls", "Rum distillery tours"],
    bestTime: "May to December for warm, dry weather; September to November is ideal.",
    gallery: [destMauritius, destSeychelles, destMaldives, destZanzibar, destDiani, destLamu],
    packages: {
      basic: {
        name: "Mauritius Escape",
        price: 1800,
        duration: "5 Days / 4 Nights",
        accommodation: "3-star beachfront hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "All breakfasts", "North Island tour", "Beach access"],
        itinerary: [
          { day: 1, title: "Arrival", description: "Fly to Mauritius, hotel check-in, evening at Grand Baie." },
          { day: 2, title: "North Island Tour", description: "Cap Malheureux, botanical gardens, sugar museum." },
          { day: 3, title: "Île aux Cerfs", description: "Speedboat to Île aux Cerfs — white sand, snorkeling, BBQ lunch." },
          { day: 4, title: "Beach Day", description: "Free day at Flic en Flac or Trou aux Biches beach." },
          { day: 5, title: "Departure", description: "Morning swim, airport transfer." },
        ],
      },
      silver: {
        name: "Mauritius Discovery",
        price: 3500,
        duration: "7 Days / 6 Nights",
        accommodation: "4-star resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "All meals & drinks", "South Island tour", "Catamaran cruise", "Seven Colored Earths", "Dolphin swimming"],
        itinerary: [
          { day: 1, title: "Arrival & Resort", description: "Fly in, resort check-in, welcome cocktails." },
          { day: 2, title: "South Island Tour", description: "Chamarel Falls, Seven Colored Earths, rum distillery." },
          { day: 3, title: "Dolphin Swimming", description: "Early morning dolphin encounter, afternoon at Le Morne beach." },
          { day: 4, title: "Île aux Cerfs", description: "Catamaran cruise to Île aux Cerfs with snorkeling and BBQ." },
          { day: 5, title: "Port Louis & Culture", description: "Explore the capital — Central Market, Caudan Waterfront." },
          { day: 6, title: "Water Sports Day", description: "Parasailing, kayaking, or kite surfing at your resort." },
          { day: 7, title: "Farewell", description: "Final beach morning, brunch, departure." },
        ],
      },
      premium: {
        name: "Mauritius Luxury",
        price: 7000,
        duration: "9 Days / 8 Nights",
        accommodation: "5-star luxury resort with private pool",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private transfers", "All-inclusive premium", "Helicopter tour", "Private yacht", "Spa package", "Golf day", "Underwater sea walk"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class arrival, private transfer to luxury resort." },
          { day: 2, title: "Helicopter Tour", description: "Scenic helicopter ride over Le Morne and underwater waterfall." },
          { day: 3, title: "Private Yacht Day", description: "Full-day yacht with snorkeling, fishing, and island stops." },
          { day: 4, title: "Underwater Sea Walk", description: "Unique undersea walk experience, afternoon spa." },
          { day: 5, title: "Golf & Leisure", description: "Round at championship course, sunset cocktails." },
          { day: 6, title: "Chamarel VIP Tour", description: "Private tour of waterfalls, colored earths, rum tasting." },
          { day: 7, title: "Dolphin & Diving", description: "Private dolphin encounter and two-dive excursion." },
          { day: 8, title: "Spa & Farewell", description: "Full spa day, gourmet farewell dinner on the beach." },
          { day: 9, title: "Departure", description: "Leisurely morning, private transfer to airport." },
        ],
      },
    },
  },

  // ===== INTERNATIONAL DESTINATIONS =====
  {
    id: 9,
    slug: "dubai",
<<<<<<< HEAD
=======
    country: "UAE",
    tripTypes: ["adventure","luxury","city-break"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Dubai, UAE",
    description: "Experience the dazzling luxury, desert adventures, and modern marvels of Dubai.",
    distance: "International",
    image: destDubai,
    category: "international",
    longDescription: "Dubai is a city of superlatives — home to the world's tallest building, largest shopping mall, and most luxurious hotels. From thrilling desert safaris and dune bashing to world-class shopping and futuristic architecture, Dubai offers an unforgettable blend of tradition and modernity.",
    highlights: ["Burj Khalifa observation deck", "Desert safari & dune bashing", "Dubai Mall & Aquarium", "Palm Jumeirah", "Gold & Spice Souks", "Dhow cruise dinner"],
    bestTime: "November to March for pleasant weather (20-30°C).",
    gallery: [destDubai, destEgypt, destTurkey, destCapetown, destMaldives, destZanzibar],
    packages: {
      basic: {
        name: "Dubai Explorer",
        price: 1500,
        duration: "4 Days / 3 Nights",
        accommodation: "3-star hotel in Downtown",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "City tour", "Desert safari", "All breakfasts"],
        itinerary: [
          { day: 1, title: "Arrival & Dubai Marina", description: "Arrive Dubai, hotel check-in. Evening walk along Dubai Marina and JBR Beach." },
          { day: 2, title: "City Tour", description: "Visit Burj Khalifa, Dubai Mall, Dubai Frame, and the Souks." },
          { day: 3, title: "Desert Safari", description: "Afternoon desert dune bashing, camel riding, BBQ dinner with belly dancing." },
          { day: 4, title: "Departure", description: "Free morning for shopping, airport transfer." },
        ],
      },
      silver: {
        name: "Dubai Discovery",
        price: 2800,
        duration: "6 Days / 5 Nights",
        accommodation: "4-star hotel, Palm Jumeirah area",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "Burj Khalifa tickets", "Desert safari", "Abu Dhabi day trip", "Dhow cruise dinner", "All meals"],
        itinerary: [
          { day: 1, title: "Arrival & Marina Walk", description: "Fly in, check-in at Palm area hotel, evening Marina walk." },
          { day: 2, title: "Iconic Dubai", description: "Burj Khalifa At The Top, Dubai Mall, Dubai Fountain show." },
          { day: 3, title: "Old & New Dubai", description: "Gold Souk, Spice Souk, Abra ride, Dubai Frame, La Mer Beach." },
          { day: 4, title: "Desert Adventure", description: "Full desert safari with quad biking, sandboarding, and BBQ dinner." },
          { day: 5, title: "Abu Dhabi Day Trip", description: "Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Yas Island." },
          { day: 6, title: "Dhow Cruise & Departure", description: "Morning at Atlantis Aquaventure, evening dhow dinner cruise, airport transfer." },
        ],
      },
      premium: {
        name: "Dubai Luxury",
        price: 5500,
        duration: "8 Days / 7 Nights",
        accommodation: "5-star luxury resort (Atlantis or similar)",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private transfers", "Burj Khalifa VIP", "Private desert camp", "Helicopter tour", "Yacht dinner", "Abu Dhabi VIP", "All meals & premium drinks"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class arrival, private limo to 5-star resort, welcome dinner." },
          { day: 2, title: "Helicopter Tour", description: "Scenic helicopter ride over Palm Jumeirah and World Islands, afternoon at Aquaventure." },
          { day: 3, title: "Burj Khalifa VIP", description: "Private VIP lounge at Burj Khalifa, lunch at At.mosphere, shopping at Dubai Mall." },
          { day: 4, title: "Private Desert Experience", description: "Private desert camp with falconry, camel trek, and starlit dinner." },
          { day: 5, title: "Yacht & Luxury Shopping", description: "Private yacht cruise, afternoon at Mall of the Emirates." },
          { day: 6, title: "Abu Dhabi VIP", description: "Private tour of Sheikh Zayed Mosque, Louvre, Ferrari World." },
          { day: 7, title: "Spa & Farewell", description: "Full spa day, gourmet farewell dinner with skyline views." },
          { day: 8, title: "Departure", description: "Leisurely morning, private limo to airport." },
        ],
      },
    },
  },
  {
    id: 10,
    slug: "zanzibar",
<<<<<<< HEAD
=======
    country: "Tanzania",
    tripTypes: ["beach-holiday","cultural"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Zanzibar, Tanzania",
    description: "A tropical paradise with spice markets, pristine beaches, and rich Swahili heritage.",
    distance: "International",
    image: destZanzibar,
    category: "international",
    longDescription: "Zanzibar, the 'Spice Island' off the coast of Tanzania, enchants visitors with its powder-white beaches, crystal-clear waters, and UNESCO-listed Stone Town. This exotic archipelago offers a perfect blend of beach relaxation, water adventures, cultural exploration, and culinary delights influenced by Arab, Indian, and African traditions.",
    highlights: ["Stone Town UNESCO site", "Spice farm tours", "Nungwi & Kendwa beaches", "Swimming with dolphins", "Jozani Forest (Red Colobus monkeys)", "Prison Island tortoises"],
    bestTime: "June to October (dry season); December to February for sunshine.",
    gallery: [destZanzibar, destDiani, destMaldives, destSeychelles, destMauritius, destLamu],
    packages: {
      basic: {
        name: "Zanzibar Beach Break",
        price: 1200,
        duration: "4 Days / 3 Nights",
        accommodation: "Standard beach hotel, Nungwi",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "All meals", "Stone Town tour"],
        itinerary: [
          { day: 1, title: "Arrival & Stone Town", description: "Fly to Zanzibar, guided Stone Town walking tour, transfer to beach hotel." },
          { day: 2, title: "Beach Paradise", description: "Full day at Nungwi Beach — swimming, sunbathing, optional snorkeling." },
          { day: 3, title: "Spice & Sea", description: "Morning spice farm tour, afternoon dhow sailing." },
          { day: 4, title: "Departure", description: "Morning swim, brunch, airport transfer." },
        ],
      },
      silver: {
        name: "Zanzibar Explorer",
        price: 2200,
        duration: "6 Days / 5 Nights",
        accommodation: "Boutique beach resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "All meals & drinks", "Stone Town tour", "Spice tour", "Dolphin tour", "Jozani Forest", "Sunset cruise"],
        itinerary: [
          { day: 1, title: "Arrival & Stone Town", description: "Fly in, Stone Town heritage walk, Forodhani night market." },
          { day: 2, title: "Spice Island Tour", description: "Visit spice farms, taste exotic fruits, learn about cloves and vanilla." },
          { day: 3, title: "Dolphin Adventure", description: "Early morning dolphin watching at Kizimkazi, afternoon beach relaxation." },
          { day: 4, title: "Jozani Forest", description: "Trek through Jozani Forest to see rare Red Colobus monkeys." },
          { day: 5, title: "Island Hopping", description: "Visit Prison Island (giant tortoises), sunset dhow cruise with seafood." },
          { day: 6, title: "Farewell", description: "Final beach morning, brunch, departure." },
        ],
      },
      premium: {
        name: "Zanzibar Luxury",
        price: 4000,
        duration: "8 Days / 7 Nights",
        accommodation: "5-star overwater/beachfront villa",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Premium flights", "Private transfers", "All-inclusive dining", "Premium drinks", "Private boat tours", "Spa package", "Deep-sea fishing", "Private chef dinner"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Premium flight, private speedboat transfer to luxury villa." },
          { day: 2, title: "Private Stone Town", description: "Private guided heritage tour with rooftop lunch." },
          { day: 3, title: "Underwater Paradise", description: "Private snorkeling and diving at Mnemba Atoll." },
          { day: 4, title: "Spa & Beach", description: "Full spa day with ocean-view treatments." },
          { day: 5, title: "Deep-Sea Fishing", description: "Private fishing expedition, cook your catch with private chef." },
          { day: 6, title: "Island Exploration", description: "Private island hopping — Changuu, Chapwani, sandbank picnic." },
          { day: 7, title: "Sunset Yacht Cruise", description: "Private yacht with gourmet farewell dinner at sea." },
          { day: 8, title: "Departure", description: "Leisurely morning, private transfer to airport." },
        ],
      },
    },
  },
  {
    id: 11,
    slug: "maldives",
<<<<<<< HEAD
=======
    country: "Maldives",
    tripTypes: ["beach-holiday","luxury"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Maldives",
    description: "The ultimate tropical paradise — overwater villas, turquoise lagoons, and world-class diving.",
    distance: "International",
    image: destMaldives,
    category: "international",
    longDescription: "The Maldives is a tropical nation of 1,190 coral islands grouped into 26 atolls, famous for its stunning overwater bungalows, crystal-clear lagoons, vibrant coral reefs, and unmatched luxury. It's the world's premier honeymoon destination and a diver's paradise with whale sharks, manta rays, and colorful reef life.",
    highlights: ["Overwater villa experience", "World-class diving & snorkeling", "Bioluminescent beaches", "Whale shark encounters", "Underwater restaurants", "Private island resorts"],
    bestTime: "November to April (dry northeast monsoon season).",
    gallery: [destMaldives, destZanzibar, destDiani, destSeychelles, destMauritius, destLamu],
    packages: {
      basic: {
        name: "Maldives Getaway",
        price: 2500,
        duration: "4 Days / 3 Nights",
        accommodation: "Beach bungalow resort",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights (Nairobi-Malé)", "Speedboat transfers", "All meals", "Snorkeling gear", "Sunset dolphin cruise"],
        itinerary: [
          { day: 1, title: "Arrival in Paradise", description: "Fly to Malé, speedboat transfer to island resort, sunset welcome." },
          { day: 2, title: "Reef Snorkeling", description: "Guided house reef snorkeling, afternoon beach relaxation." },
          { day: 3, title: "Dolphin Cruise", description: "Morning water sports, sunset dolphin watching cruise." },
          { day: 4, title: "Departure", description: "Morning swim, brunch, speedboat to Malé for flight." },
        ],
      },
      silver: {
        name: "Maldives Paradise",
        price: 4500,
        duration: "6 Days / 5 Nights",
        accommodation: "Overwater bungalow",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "Seaplane transfers", "All-inclusive meals & drinks", "Diving excursion", "Spa treatment", "Sunset fishing", "Island hopping"],
        itinerary: [
          { day: 1, title: "Seaplane Arrival", description: "Scenic seaplane to resort atoll, overwater bungalow check-in." },
          { day: 2, title: "Diving Adventure", description: "Two-dive excursion at premier dive sites — coral gardens and manta points." },
          { day: 3, title: "Island Hopping", description: "Visit local islands, experience Maldivian culture and cuisine." },
          { day: 4, title: "Spa & Relaxation", description: "Overwater spa treatment, afternoon snorkeling." },
          { day: 5, title: "Sunset Fishing", description: "Traditional Maldivian line fishing, cook your catch, stargazing." },
          { day: 6, title: "Farewell", description: "Morning snorkel, brunch, seaplane departure." },
        ],
      },
      premium: {
        name: "Maldives Ultra Luxury",
        price: 8500,
        duration: "8 Days / 7 Nights",
        accommodation: "Private island villa with pool",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private seaplane", "All-inclusive premium", "Unlimited diving", "Private yacht", "Underwater dining", "Personal butler", "Couples spa"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class to Malé, private seaplane to exclusive island villa." },
          { day: 2, title: "Underwater World", description: "Private dive with marine biologist, underwater restaurant lunch." },
          { day: 3, title: "Private Yacht Day", description: "Full-day private yacht cruise through atolls, sandbank picnic." },
          { day: 4, title: "Whale Shark Encounter", description: "Guided whale shark snorkeling expedition." },
          { day: 5, title: "Couples Spa Day", description: "Full day at overwater spa with private treatments." },
          { day: 6, title: "Bioluminescent Beach", description: "Night tour to see glowing bioluminescent plankton." },
          { day: 7, title: "Farewell Dinner", description: "Private beach dinner under the stars, personalized farewell." },
          { day: 8, title: "Departure", description: "Leisurely morning, private seaplane to Malé." },
        ],
      },
    },
  },
  {
    id: 12,
    slug: "cape-town",
<<<<<<< HEAD
=======
    country: "South Africa",
    tripTypes: ["adventure","cultural","city-break"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Cape Town, South Africa",
    description: "Where mountains meet the ocean — stunning landscapes, wine country, and vibrant culture.",
    distance: "International",
    image: destCapetown,
    category: "international",
    longDescription: "Cape Town is consistently rated one of the world's most beautiful cities, nestled between the iconic Table Mountain and the Atlantic Ocean. From wine tasting in Stellenbosch to cage diving with great white sharks at Gansbaai, Cape Town offers breathtaking natural beauty, rich history, world-class cuisine, and incredible adventures.",
    highlights: ["Table Mountain cable car", "Cape of Good Hope", "Robben Island", "Stellenbosch wine route", "Boulder's Beach penguins", "V&A Waterfront"],
    bestTime: "October to March (South African summer) for warm, sunny weather.",
    gallery: [destCapetown, destDubai, destEgypt, destTurkey, destMaldives, destZanzibar],
    packages: {
      basic: {
        name: "Cape Town Highlights",
        price: 1800,
        duration: "5 Days / 4 Nights",
        accommodation: "3-star hotel in City Bowl",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "Table Mountain tickets", "Cape Peninsula tour", "All breakfasts"],
        itinerary: [
          { day: 1, title: "Arrival", description: "Fly to Cape Town, hotel check-in, V&A Waterfront evening." },
          { day: 2, title: "Table Mountain & City", description: "Cable car to Table Mountain, Bo-Kaap walking tour, Company's Garden." },
          { day: 3, title: "Cape Peninsula", description: "Full day — Chapman's Peak, Cape of Good Hope, Boulder's Beach penguins." },
          { day: 4, title: "Wine Country", description: "Day trip to Stellenbosch and Franschhoek for wine tasting." },
          { day: 5, title: "Departure", description: "Morning at V&A Waterfront, airport transfer." },
        ],
      },
      silver: {
        name: "Cape Town Explorer",
        price: 3200,
        duration: "7 Days / 6 Nights",
        accommodation: "4-star boutique hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "Table Mountain", "Cape Peninsula tour", "Robben Island", "Wine tour", "Shark cage diving", "All meals"],
        itinerary: [
          { day: 1, title: "Arrival & Waterfront", description: "Fly in, check-in, sunset at V&A Waterfront." },
          { day: 2, title: "Table Mountain & Bo-Kaap", description: "Summit Table Mountain, colorful Bo-Kaap tour." },
          { day: 3, title: "Robben Island", description: "Ferry to Robben Island — powerful historical tour." },
          { day: 4, title: "Cape Peninsula", description: "Chapman's Peak, Cape Point, Simon's Town penguins." },
          { day: 5, title: "Shark Cage Diving", description: "Early morning trip to Gansbaai for great white shark diving." },
          { day: 6, title: "Winelands Tour", description: "Full day in Stellenbosch, Franschhoek — wine tasting and gourmet lunch." },
          { day: 7, title: "Farewell", description: "Morning shopping at Greenmarket Square, departure." },
        ],
      },
      premium: {
        name: "Cape Town Luxury",
        price: 6000,
        duration: "9 Days / 8 Nights",
        accommodation: "5-star Clifton or Camps Bay hotel",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private transfers", "Helicopter tour", "Private wine tour", "Shark diving", "Robben Island", "Garden Route extension", "All meals & drinks", "Spa package"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class arrival, private transfer to 5-star Camps Bay hotel." },
          { day: 2, title: "Helicopter Tour", description: "Scenic helicopter flight over Table Mountain, Twelve Apostles, Cape Point." },
          { day: 3, title: "Private Wine Experience", description: "Chauffeur-driven private wine tour with gourmet pairings." },
          { day: 4, title: "Robben Island & History", description: "Private ferry arrangement, afternoon at Kirstenbosch Gardens." },
          { day: 5, title: "Shark Adventure", description: "VIP shark cage diving, afternoon spa." },
          { day: 6, title: "Garden Route Day 1", description: "Drive to Hermanus for whale watching (seasonal), overnight in Knysna." },
          { day: 7, title: "Garden Route Day 2", description: "Tsitsikamma National Park, Bloukrans Bungee (optional), return to Cape Town." },
          { day: 8, title: "Spa & Farewell Dinner", description: "Full spa day, sunset farewell dinner at top restaurant." },
          { day: 9, title: "Departure", description: "Morning at leisure, private transfer." },
        ],
      },
    },
  },
  {
    id: 13,
    slug: "egypt",
<<<<<<< HEAD
=======
    country: "Egypt",
    tripTypes: ["cultural","adventure"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Egypt",
    description: "Walk among the ancient pyramids, cruise the Nile, and explore pharaonic wonders.",
    distance: "International",
    image: destEgypt,
    category: "international",
    longDescription: "Egypt is a living museum of ancient civilization, home to the Great Pyramids of Giza, the Sphinx, and the treasures of Tutankhamun. A Nile cruise from Luxor to Aswan reveals magnificent temples, while Cairo's bustling markets and Alexandria's Mediterranean charm complete this timeless journey through 5,000 years of history.",
    highlights: ["Great Pyramids of Giza", "The Sphinx", "Nile River cruise", "Valley of the Kings", "Luxor & Karnak Temples", "Egyptian Museum"],
    bestTime: "October to April for cooler, comfortable temperatures.",
    gallery: [destEgypt, destDubai, destTurkey, destCapetown, destMaldives, destZanzibar],
    packages: {
      basic: {
        name: "Egypt Essentials",
        price: 1600,
        duration: "5 Days / 4 Nights",
        accommodation: "3-star hotel in Cairo & Giza",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "Pyramids & Sphinx tour", "Egyptian Museum", "Khan el-Khalili bazaar", "All breakfasts"],
        itinerary: [
          { day: 1, title: "Arrival in Cairo", description: "Fly to Cairo, hotel check-in, evening Nile corniche walk." },
          { day: 2, title: "Pyramids & Sphinx", description: "Full day at Giza — Pyramids, Sphinx, Valley Temple, camel ride." },
          { day: 3, title: "Cairo Museums", description: "Egyptian Museum (Tutankhamun treasures), Citadel, Khan el-Khalili." },
          { day: 4, title: "Memphis & Saqqara", description: "Day trip to Memphis, Saqqara Step Pyramid, Dahshur." },
          { day: 5, title: "Departure", description: "Morning at leisure, airport transfer." },
        ],
      },
      silver: {
        name: "Egypt & Nile Cruise",
        price: 3500,
        duration: "8 Days / 7 Nights",
        accommodation: "4-star hotel + 4-star Nile cruise ship",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "All transfers", "Domestic flight Cairo-Luxor", "3-night Nile cruise", "All major temples", "All meals on cruise", "Cairo breakfasts"],
        itinerary: [
          { day: 1, title: "Arrival Cairo", description: "Fly in, hotel check-in, welcome dinner." },
          { day: 2, title: "Pyramids Day", description: "Giza Pyramids, Sphinx, Egyptian Museum." },
          { day: 3, title: "Fly to Luxor", description: "Flight to Luxor, board Nile cruise, Karnak Temple at sunset." },
          { day: 4, title: "Valley of the Kings", description: "West Bank — Valley of the Kings, Hatshepsut Temple, Colossi of Memnon." },
          { day: 5, title: "Cruising to Edfu", description: "Sail to Edfu, visit Temple of Horus." },
          { day: 6, title: "Kom Ombo & Aswan", description: "Kom Ombo Temple, arrive Aswan, Philae Temple." },
          { day: 7, title: "Aswan Exploration", description: "High Dam, Unfinished Obelisk, felucca ride at sunset." },
          { day: 8, title: "Return & Departure", description: "Fly Aswan to Cairo, connecting flight home." },
        ],
      },
      premium: {
        name: "Egypt Royal Experience",
        price: 6500,
        duration: "10 Days / 9 Nights",
        accommodation: "5-star hotels + luxury Nile dahabiya",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private Egyptologist guide", "Luxury Nile dahabiya", "Hot air balloon Luxor", "Private Pyramids visit", "Abu Simbel flight", "All meals & premium drinks"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class to Cairo, private transfer to 5-star Pyramids-view hotel." },
          { day: 2, title: "Private Pyramids", description: "Early morning private access to Pyramids, camel trek, Sound & Light show." },
          { day: 3, title: "Cairo Deep Dive", description: "Grand Egyptian Museum, Coptic Cairo, private dinner cruise." },
          { day: 4, title: "Fly to Luxor", description: "Hot air balloon over Valley of the Kings, board luxury dahabiya." },
          { day: 5, title: "Temple Trail", description: "Karnak, Luxor Temple, private Egyptologist commentary." },
          { day: 6, title: "Sailing the Nile", description: "Leisurely Nile sailing, stop at Esna Lock and Edfu Temple." },
          { day: 7, title: "Kom Ombo to Aswan", description: "Dual temple of Kom Ombo, arrive Aswan, private felucca." },
          { day: 8, title: "Abu Simbel", description: "Private flight to Abu Simbel — Ramses II's magnificent temples." },
          { day: 9, title: "Aswan & Farewell", description: "Philae Temple, Nubian village visit, farewell dinner." },
          { day: 10, title: "Departure", description: "Fly Aswan-Cairo, connecting flight home." },
        ],
      },
    },
  },
  {
    id: 14,
    slug: "turkey",
<<<<<<< HEAD
=======
    country: "Turkey",
    tripTypes: ["cultural","adventure"] as TripType[],
>>>>>>> 3478804c (update project)
    name: "Turkey",
    description: "Where East meets West — hot air balloons, ancient ruins, bazaars, and stunning coastlines.",
    distance: "International",
    image: destTurkey,
    category: "international",
    longDescription: "Turkey bridges two continents, offering an extraordinary mix of ancient history, vibrant culture, and natural wonders. From the surreal fairy chimneys and hot air balloons of Cappadocia to the grandeur of Istanbul's Hagia Sophia and Blue Mosque, Turkey captivates every traveler with its cuisine, hospitality, and diverse landscapes.",
    highlights: ["Cappadocia hot air balloons", "Hagia Sophia & Blue Mosque", "Grand Bazaar Istanbul", "Pamukkale thermal pools", "Ephesus ancient city", "Bosphorus cruise"],
    bestTime: "April to June and September to November for mild weather.",
    gallery: [destTurkey, destEgypt, destDubai, destCapetown, destMaldives, destZanzibar],
    packages: {
      basic: {
        name: "Turkey Highlights",
        price: 1800,
        duration: "5 Days / 4 Nights",
        accommodation: "3-star hotel in Istanbul",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights from Nairobi", "Airport transfers", "Istanbul city tour", "Bosphorus cruise", "All breakfasts"],
        itinerary: [
          { day: 1, title: "Arrival Istanbul", description: "Fly to Istanbul, hotel in Sultanahmet, evening Bosphorus walk." },
          { day: 2, title: "Historical Istanbul", description: "Hagia Sophia, Blue Mosque, Topkapi Palace, Basilica Cistern." },
          { day: 3, title: "Grand Bazaar & Cruise", description: "Morning at Grand Bazaar, afternoon Bosphorus cruise." },
          { day: 4, title: "Asian Side", description: "Cross to Kadıköy, explore Asian Istanbul, Çamlıca Hill sunset." },
          { day: 5, title: "Departure", description: "Morning at Spice Bazaar, airport transfer." },
        ],
      },
      silver: {
        name: "Turkey Grand Tour",
        price: 3200,
        duration: "8 Days / 7 Nights",
        accommodation: "4-star hotels + cave hotel in Cappadocia",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Return flights", "Domestic flights", "All transfers", "Cappadocia balloon ride", "Pamukkale tour", "All major sites", "All meals"],
        itinerary: [
          { day: 1, title: "Arrival Istanbul", description: "Fly in, Sultanahmet hotel, welcome dinner." },
          { day: 2, title: "Istanbul Highlights", description: "Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar." },
          { day: 3, title: "Bosphorus & Fly Out", description: "Morning Bosphorus cruise, evening flight to Cappadocia." },
          { day: 4, title: "Cappadocia Balloon", description: "Dawn hot air balloon ride, then explore fairy chimneys and underground cities." },
          { day: 5, title: "Cappadocia Valleys", description: "Hike Rose Valley, visit Göreme Open Air Museum, pottery workshop." },
          { day: 6, title: "Fly to Izmir", description: "Flight to Izmir, drive to Pamukkale thermal pools." },
          { day: 7, title: "Ephesus", description: "Explore ancient Ephesus — Library of Celsus, Great Theatre, Temple of Artemis." },
          { day: 8, title: "Return & Departure", description: "Fly Izmir to Istanbul, connecting flight home." },
        ],
      },
      premium: {
        name: "Turkey Luxury",
        price: 5800,
        duration: "10 Days / 9 Nights",
        accommodation: "5-star hotels + luxury cave suite",
<<<<<<< HEAD
=======
        mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
>>>>>>> 3478804c (update project)
        includes: ["Business class flights", "Private guides", "VIP balloon ride", "Private yacht Bosphorus", "Turkish bath experience", "Cooking class", "All meals & drinks"],
        itinerary: [
          { day: 1, title: "VIP Arrival", description: "Business class to Istanbul, private transfer to 5-star Bosphorus hotel." },
          { day: 2, title: "Private Istanbul Tour", description: "Private guide through Hagia Sophia, Blue Mosque, Topkapi treasures." },
          { day: 3, title: "Yacht Cruise & Hammam", description: "Private Bosphorus yacht cruise, evening Turkish bath experience." },
          { day: 4, title: "Fly to Cappadocia", description: "Private flight, luxury cave suite check-in, sunset ATV ride." },
          { day: 5, title: "VIP Balloon & Caves", description: "Private basket balloon ride, underground city exploration, wine tasting." },
          { day: 6, title: "Cappadocia Culture", description: "Pottery workshop, hiking, gourmet cave restaurant dinner." },
          { day: 7, title: "Fly to Coast", description: "Flight to Bodrum or Antalya, luxury coastal resort." },
          { day: 8, title: "Turquoise Coast", description: "Private gulet boat cruise along the stunning Turkish Riviera." },
          { day: 9, title: "Ephesus & Cooking", description: "Private Ephesus tour, Turkish cooking class, farewell dinner." },
          { day: 10, title: "Departure", description: "Leisurely morning, private transfer to airport." },
        ],
      },
    },
  },
];

export const themedHolidays = [
  { title: "Honeymoon & Anniversaries", description: "Romantic escapes crafted for couples", icon: "Heart", slugs: ["maldives", "zanzibar", "seychelles", "mauritius"] },
  { title: "Beach Holidays", description: "Sun, sand, and turquoise waters", icon: "Umbrella", slugs: ["diani-beach", "mombasa", "zanzibar", "maldives", "seychelles", "lamu", "malindi", "mauritius"] },
  { title: "Wildlife Safaris", description: "Up close with Africa's Big Five", icon: "Binoculars", slugs: ["maasai-mara", "serengeti", "amboseli", "samburu"] },
  { title: "Adventure Tours", description: "Thrilling experiences for the bold", icon: "Mountain", slugs: ["turkey", "cape-town", "dubai"] },
  { title: "Cultural & Historical", description: "Ancient wonders and living traditions", icon: "Landmark", slugs: ["egypt", "turkey", "zanzibar", "lamu"] },
  { title: "Luxury Getaways", description: "Exclusive indulgence and premium comfort", icon: "Crown", slugs: ["maldives", "dubai", "seychelles", "mauritius"] },
];

export const testimonials = [
  {
    quote: "The safari was an unforgettable experience! Everything was so well-organized.",
    author: "John Doe",
  },
  {
    quote: "Breathtaking destinations and excellent service. Highly recommend!",
    author: "Jane Smith",
  },
  {
    quote: "The trip was seamless and beyond my expectations. Kudos to the team!",
    author: "Michael Lee",
  },
  {
    quote: "Our Dubai trip was absolutely magical. The desert safari was a highlight!",
    author: "Sarah Wanjiku",
  },
  {
    quote: "Zanzibar was paradise on earth. Can't wait to book the Maldives next!",
    author: "David Kimani",
  },
];

export const teamMembers = [
  { name: "Kibet", role: "Founder & CEO" },
  { name: "Clinton", role: "Founder & CEO" },
  { name: "Langat", role: "Founder & CEO" },
];

export const faqs = [
  {
    question: "What is included in a safari package?",
    answer: "Our safari packages typically include accommodation, meals, park entrance fees, guided game drives, and airport transfers. Specific inclusions vary by package.",
  },
  {
    question: "How do I book a safari?",
    answer: "You can book through our website using the Book page, email us at contact@msafari-tribe.com, or contact us via the Contact page. We'll help customize your perfect trip.",
  },
  {
    question: "What is the best time to go on safari?",
    answer: "The best time depends on the destination. For the Maasai Mara, July-October is ideal for the Great Migration. For Amboseli, January-February offers clear views of Kilimanjaro.",
  },
  {
    question: "Do I need a visa to visit Kenya or Tanzania?",
    answer: "Most visitors need a visa. Kenya and Tanzania both offer e-visas that can be obtained online before travel. We can assist with visa guidance.",
  },
  {
    question: "Do you offer international trip packages?",
    answer: "Yes! We offer curated packages to Dubai, Maldives, Egypt, Turkey, Cape Town, and Zanzibar. Each destination features Basic, Silver, and Premium tiers to suit every budget.",
  },
  {
    question: "What should I pack for a safari?",
    answer: "Pack lightweight, neutral-colored clothing, comfortable walking shoes, sunscreen, insect repellent, binoculars, a camera, and a hat. We provide a detailed packing list upon booking.",
  },
  {
    question: "Are safaris safe?",
    answer: "Yes, our safaris are conducted with experienced guides who prioritize safety. We follow all park regulations and use well-maintained vehicles.",
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! We specialize in tailored experiences. Contact us with your preferences, budget, and travel dates, and we'll craft a personalized itinerary just for you.",
  },
];
