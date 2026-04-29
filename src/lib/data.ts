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
export type TripType =
  | "wildlife-safari"
  | "beach-holiday"
  | "adventure"
  | "cultural"
  | "luxury"
  | "city-break";

export const tripTypes: {
  key: TripType;
  label: string;
  description: string;
}[] = [
  {
    key: "wildlife-safari",
    label: "Wildlife Safaris",
    description: "Get up close with Africa's iconic Big Five",
  },
  {
    key: "beach-holiday",
    label: "Beach Holidays",
    description: "Sun, sand, and turquoise waters",
  },
  {
    key: "adventure",
    label: "Adventure Tours",
    description: "Thrilling experiences for the bold",
  },
  {
    key: "cultural",
    label: "Cultural & Historical",
    description: "Ancient wonders and living traditions",
  },
  {
    key: "luxury",
    label: "Luxury Getaways",
    description: "Exclusive indulgence and premium comfort",
  },
  {
    key: "city-break",
    label: "City Breaks",
    description: "Explore vibrant cities and urban culture",
  },
];

export interface ItineraryDay {
  day: number;
  title: string;
  route: string;
  description: string;
  mealPlan: string;
  accommodation?: string;
}

export interface DestinationDetail {
  id: number;
  slug: string;
  name: string;
  country: string;
  description: string;
  distance: string;
  image: string;
  category: DestinationCategory;
  tripTypes: TripType[];
  longDescription: string;
  highlights: string[];
  bestTime: string;
  gallery: string[];
  price: number;
  duration: string;
  accommodation: string;
  mealBasis: string;
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
}

export const destinations: DestinationDetail[] = [
  // ===== LOCAL SAFARIS =====

  {
    id: 1,
    slug: "serengeti",
    country: "Tanzania",
    tripTypes: ["wildlife-safari"],
    name: "Serengeti, Tanzania",
    description:
      "Discover the Great Migration and diverse wildlife in the Serengeti.",
    distance: "450km",
    image: destSerengeti,
    category: "local",
    longDescription:
      "The Serengeti is one of Africa's most celebrated wildlife sanctuaries, renowned for the annual Great Migration where over two million wildebeest, zebras, and gazelles traverse the plains. The vast grasslands, dotted with acacia trees, offer an unparalleled safari experience with incredible predator-prey interactions.",
    highlights: [
      "Great Migration",
      "Big Five sightings",
      "Hot air balloon safaris",
      "Maasai cultural visits",
      "Endless golden plains",
    ],
    bestTime:
      "June to October for the Great Migration; January to February for calving season.",
    gallery: [
      destSerengeti,
      destMara,
      destAmboseli,
      destTsavo,
      destSamburu,
      destNairobi,
    ],
    price: 2200,
    duration: "5 Days / 4 Nights",
    accommodation: "Mid-range safari lodge",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Meet & greet at Kilimanjaro International Airport or Serengeti airstrip",
      "Tourism-accredited professional driver/guide",
      "Transport in customised 4×4 safari vehicle with pop-up roof",
      "Accommodation on full-board basis (all meals as per itinerary)",
      "Guaranteed window seat during all game drives",
      "Complimentary bottled drinking water throughout",
      "Daily game drives as per itinerary",
      "Bush breakfast on Day 3",
      "All Serengeti National Park entry & conservation fees",
      "Government taxes and VAT",
    ],
    excludes: [
      "International or domestic flights to/from Serengeti airstrip",
      "Personal travel insurance and medical inoculations",
      "Hot air balloon safari (available at extra cost)",
      "Alcoholic beverages beyond included meals",
      "Extra activities not listed in the itinerary",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Afternoon Game Drive",
        route:
          "NAIROBI / ARUSHA – SERENGETI (Approx. 450 km / fly-in option available)",
        description:
          "We pick you up from the airport or your Nairobi/Arusha hotel at 6:30 am and drive through the spectacular Great Rift Valley escarpment, stopping for a scenic photo break. After crossing into Tanzania and passing the Ngorongoro highlands, we descend onto the golden Serengeti plains. On arrival at camp, freshen up and enjoy a hot lunch. In the afternoon we head straight into the bush for your first game drive across the central Seronera Valley — one of the richest wildlife corridors in Africa. Keep your eyes peeled for lion prides lazing under acacia trees, leopards draped over branches, and herds of elephant moving through the golden grass. Return to camp for dinner and an overnight under a canopy of stars.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 2,
        title: "Full Day Safari – Central Serengeti",
        route: "FULL DAY IN THE SERENGETI (SERONERA VALLEY)",
        description:
          "Rise before dawn for an early morning game drive — the best time to catch predators on the hunt. Armed with a packed picnic breakfast, your guide will take you deep into the Seronera Valley, tracking the Big Five and countless other species. The Serengeti hosts the highest concentration of large mammals on Earth: lions, leopards, cheetahs, elephants, buffalo, giraffes, zebras, and hundreds of bird species. Midday, enjoy your picnic lunch in the bush while watching nature unfold around you. The afternoon drive continues into the golden hour when the light is perfect for photography. If visiting between July and October, your guide will seek out the Great Migration river crossings at the Mara River — a breathtaking spectacle of wildebeest and zebras plunging through crocodile-filled waters.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 3,
        title: "Migration Pursuit – Bush Breakfast Included",
        route: "NORTH SERENGETI / MARA RIVER (seasonal)",
        description:
          "An early start today as we pursue the Great Migration herds. Between July and October, millions of wildebeest, zebras, and gazelles thunder northward towards the Mara River. Your guide will read the landscape and animal movement to position you at the best crossing points. Witnessing this raw drama — crocodiles snapping, wildebeest leaping, predators waiting on the banks — is one of the most extraordinary sights on Earth. Between drives, enjoy a full bush breakfast served by your team in the open plains. Even outside migration season, the northern Serengeti offers outstanding wildlife, including resident lion prides and massive elephant herds.",
        mealPlan: "Breakfast (bush), Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 4,
        title: "Western Corridor – Grumeti River & Hippo Pools",
        route: "WESTERN SERENGETI (GRUMETI AREA)",
        description:
          "Today we venture westward to the Grumeti River corridor — a dramatically different landscape of dense woodland and meandering rivers. The Grumeti is home to enormous Nile crocodiles and large pods of hippos that wallow loudly in the shallows. This area is also famous for the western migration crossing between May and July, when wildebeest must brave the resident croc population before reaching the central Serengeti. Even beyond migration season, the western corridor delivers exceptional game viewing: large buffalo herds, tusker elephants, and colourful bird species abound. A sundowner stop at a scenic viewpoint rounds off a spectacular day.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 5,
        title: "Final Morning Drive & Departure",
        route: "SERENGETI – NAIROBI / ARUSHA",
        description:
          "Wake at sunrise for one final game drive as the Serengeti comes alive in the morning light. This is often the best time to spot nocturnal predators returning from a night hunt. Return to the lodge for a relaxed brunch. After check-out, your driver will transfer you back to Nairobi or Arusha, arriving at approximately 6:00 pm. As the Serengeti disappears behind the horizon, you carry with you images and stories that few places on Earth can provide.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 2,
    slug: "amboseli",
    country: "Kenya",
    tripTypes: ["wildlife-safari"],
    name: "Amboseli, Kenya",
    description:
      "Experience Amboseli's breathtaking views and iconic elephant herds.",
    distance: "150km",
    image: destAmboseli,
    category: "local",
    longDescription:
      "Amboseli National Park offers some of the most iconic views in Africa — massive elephant herds silhouetted against the snow-capped peak of Mount Kilimanjaro. The park's diverse habitats, from dry lake beds to wetlands, support an incredible variety of wildlife.",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant herds",
      "Observation Hill",
      "Wetland bird watching",
      "Maasai community visits",
    ],
    bestTime:
      "January to February for clear Kilimanjaro views; June to October for dry season wildlife.",
    gallery: [
      destAmboseli,
      destSerengeti,
      destTsavo,
      destMara,
      destSamburu,
      destNairobi,
    ],
    price: 1900,
    duration: "4 Days / 3 Nights",
    accommodation: "Mid-range eco-lodge",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return road transfers from Nairobi",
      "Tourism-accredited professional driver/guide",
      "Transport in customised 4×4 safari vehicle with pop-up roof",
      "Accommodation on full-board basis (all meals & soft drinks)",
      "Guaranteed window seat during all game drives",
      "Complimentary bottled drinking water throughout",
      "Daily game drives as per itinerary",
      "Observation Hill guided hike",
      "Wetland bird watching excursion",
      "All Amboseli National Park entry & conservation fees",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages",
      "Extra activities not listed in the itinerary",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive to Amboseli & Sunset Game Drive",
        route: "NAIROBI – AMBOSELI (Approx. 150 km / 3 hrs)",
        description:
          "Depart Nairobi at 7:00 am, heading south through the Athi Plains and into Maasai territory. The landscape gradually transitions from highland farmland to open savannah, with the first glimpses of Mount Kilimanjaro — Africa's highest peak — appearing on the horizon. Arrive at your eco-lodge by midday for lunch. In the afternoon, head into the park for your first game drive, timing your return to the famous Amboseli swamps at golden hour where hundreds of elephants gather at dusk against the backdrop of snow-capped Kilimanjaro. Return to camp for a warm welcome dinner.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 2,
        title: "Full Day Elephant & Wildlife Safari",
        route: "FULL DAY – AMBOSELI NATIONAL PARK",
        description:
          "Today is a game-viewing extravaganza. Amboseli is home to some of the largest free-ranging elephant herds in Africa — these are wild elephants with enormous tusks that have been studied by researchers for decades. Your guide knows many by name and family group. Beyond elephants, the park hosts lions, cheetahs, hyenas, zebras, wildebeest, and over 370 bird species. The Enkiama and Longinye swamps are particularly productive for wildlife, while the dry lakebed of Lake Amboseli offers dramatic open-plain game viewing. Enjoy a bush picnic lunch before the afternoon drive. On a clear day, Kilimanjaro reveals itself in all its glory — a truly unforgettable sight.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 3,
        title: "Observation Hill & Wetland Bird Watching",
        route: "OBSERVATION HILL & AMBOSELI WETLANDS",
        description:
          "Start the morning with a guided hike up Observation Hill — the best panoramic viewpoint in the park, where you can look out over the entire Amboseli basin and spot wildlife moving across the plains far below. Back in the vehicle, your guide leads you through the wetland areas for a dedicated bird watching session. Amboseli is a birdwatcher's paradise, with herons, egrets, pelicans, crowned cranes, and the vibrant lilac-breasted roller all common sightings. The afternoon drive takes you back to the elephant hotspots as Kilimanjaro, often cloud-covered by midday, sometimes re-emerges in the late afternoon light for spectacular photographs.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 4,
        title: "Sunrise Drive & Return to Nairobi",
        route: "AMBOSELI – NAIROBI (Approx. 150 km / 3 hrs)",
        description:
          "Wake early for a final sunrise game drive — when the air is crisp, the light is magical, and the Kilimanjaro summit often glows pink above the clouds. Lions and leopards are frequently spotted returning from overnight hunts at this hour. Return to the lodge for a hearty breakfast and final check-out. Depart for Nairobi, arriving in the early afternoon. The drive back skirts the base of the Chyulu Hills, offering a scenic close to a remarkable wildlife experience.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 3,
    slug: "maasai-mara",
    country: "Kenya",
    tripTypes: ["wildlife-safari"],
    name: "Maasai Mara, Kenya",
    description:
      "Explore the abundant wildlife and scenic beauty of the Maasai Mara.",
    distance: "225km",
    image: destMara,
    category: "local",
    longDescription:
      "The Maasai Mara is Kenya's most famous game reserve, offering unrivaled wildlife viewing year-round. Home to the Kenyan portion of the Great Migration, the Mara's rolling grasslands and acacia-dotted landscapes are home to the Big Five and countless other species.",
    highlights: [
      "Great Migration river crossings",
      "Big Five guaranteed",
      "Balloon safaris",
      "Maasai cultural tours",
      "Night game drives",
    ],
    bestTime: "July to October for the Migration; year-round for Big Five.",
    gallery: [
      destMara,
      destSerengeti,
      destSamburu,
      destAmboseli,
      destTsavo,
      destNairobi,
    ],
    price: 2200,
    duration: "5 Days / 4 Nights",
    accommodation: "Mid-range safari lodge",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return road transfers from Nairobi via the Great Rift Valley",
      "Tourism-accredited professional driver/guide",
      "Transport in customised 4×4 safari vehicle with pop-up roof",
      "Accommodation on full-board basis (all meals & drinks)",
      "Guaranteed window seat during all game drives",
      "Complimentary bottled drinking water throughout",
      "Daily game drives as per itinerary",
      "Maasai village cultural visit",
      "Bush breakfast",
      "All Maasai Mara Game Reserve entry & conservation fees",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Hot air balloon safari (available at extra cost ~USD 450/person)",
      "Alcoholic beverages beyond included meals",
      "Extra activities not listed in the itinerary",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to the Mara",
        route: "NAIROBI – MAASAI MARA (Approx. 225 km / 5–6 hrs)",
        description:
          "We pick you up from your Nairobi hotel or the airport at 7:00 am and head west through the city towards the dramatic Great Rift Valley. A scenic stop at the Rift Valley viewpoint allows for stunning photos before descending onto the Maasai plains. As you drive deeper into Maasailand, the landscape opens up into wide, game-rich savannah. After a stop for lunch en route, we cross into the Maasai Mara Game Reserve in the early afternoon. The rolling golden plains, dotted with acacia trees and teeming with wildlife, will take your breath away. Your first afternoon game drive is among the most exciting game-viewing areas in the world. Return to lodge for dinner.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 2,
        title: "Full Day Safari – Mara River & Open Plains",
        route: "FULL DAY – MAASAI MARA GAME RESERVE",
        description:
          "Today is a full-day game-viewing extravaganza. The Maasai Mara as it is popularly known remains the most exciting wildlife ecosystem in the natural world — hosting the highest and most varied concentration of wild animals of any park in the region. We spend the morning exploring the open plains of the northern sector, where large prides of lions often rest in the shade of acacia trees and cheetahs survey the grasslands for prey. In the afternoon, we head to the Mara River — where you may witness hippos and crocodiles basking on the banks, or, between July and October, the awe-inspiring Great Migration crossings where hundreds of thousands of wildebeest and zebras plunge into crocodile-filled waters. Sundowner drinks on the plains before returning to the lodge.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 3,
        title: "Big Five Tracking – Full Day",
        route: "FULL DAY – MAASAI MARA GAME RESERVE",
        description:
          "Another extraordinary day of wildlife driving. Today we dedicate our time to tracking all members of the Big Five — lion, leopard, elephant, buffalo, and rhino. Your experienced guide knows the Mara's terrain intimately and uses radio communication with fellow guides to locate key sightings. We explore different zones of the reserve to maximize diversity, from the lush Talek River forests to the wide-open Musiara Marsh. You may choose to split your drives into morning and afternoon sessions with a relaxed lunch break at the lodge — your guide will be available to discuss the plan based on your preferences. An optional hot air balloon ride can be arranged for this morning at extra cost.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 4,
        title: "Maasai Cultural Visit & Bush Breakfast",
        route: "MAASAI VILLAGE & MARA NORTH CONSERVANCY",
        description:
          "This morning begins with a bush breakfast served in the open savannah — a memorable meal surrounded by the sights and sounds of the Mara. Afterwards, we visit an authentic Maasai village (boma) for a guided cultural experience. Maasai elders and warriors share their traditions — the jumping ceremony, fire-making, medicinal plant knowledge, and stunning beadwork. It is a respectful and immersive window into one of Africa's most iconic cultures. In the afternoon, explore the Mara North Conservancy — a private wildlife area bordering the main reserve that offers exclusive, uncrowded game viewing with fewer vehicles and often exceptional predator sightings.",
        mealPlan: "Breakfast (bush), Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 5,
        title: "Final Morning Drive & Return to Nairobi",
        route: "MAASAI MARA – NAIROBI (Approx. 225 km / 5–6 hrs)",
        description:
          "Rise early for a final sunrise game drive — the Mara is magical in the early morning light, when the mist rolls over the plains and predators are still active. Return to the lodge for a full breakfast and check-out. Depart for Nairobi after brunch, arriving in the city at approximately 5:00–6:00 pm. The return journey via the Rift Valley offers one last chance to appreciate the dramatic Kenyan landscape. Your guide drops you at your hotel or the airport with memories that will last a lifetime.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 4,
    slug: "tsavo",
    country: "Kenya",
    tripTypes: ["wildlife-safari"],
    name: "Tsavo, Kenya",
    description:
      "Explore the vast landscapes and diverse wildlife of Tsavo National Park.",
    distance: "200km",
    image: destTsavo,
    category: "local",
    longDescription:
      "Tsavo is Kenya's largest national park, divided into Tsavo East and Tsavo West. Known for its red elephants (dusted in the park's red soil), volcanic landscapes, and the crystal-clear Mzima Springs, Tsavo offers a raw, untouched safari experience.",
    highlights: [
      "Red elephants",
      "Mzima Springs",
      "Lugard Falls",
      "Shetani Lava Flow",
      "Diverse bird species",
    ],
    bestTime: "June to October (dry season) for best wildlife viewing.",
    gallery: [
      destTsavo,
      destAmboseli,
      destNairobi,
      destMara,
      destSerengeti,
      destSamburu,
    ],
    price: 1600,
    duration: "4 Days / 3 Nights",
    accommodation: "Mid-range safari lodge",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return road transfers from Nairobi",
      "Tourism-accredited professional driver/guide",
      "Transport in customised 4×4 safari vehicle with pop-up roof",
      "Accommodation on full-board basis (all meals as per itinerary)",
      "Guaranteed window seat during all game drives",
      "Complimentary bottled drinking water throughout",
      "Daily game drives as per itinerary",
      "Mzima Springs guided walk",
      "Lugard Falls excursion",
      "All Tsavo National Park entry & conservation fees",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages",
      "Extra activities not listed in the itinerary",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Tsavo East",
        route: "NAIROBI – TSAVO EAST (Approx. 200 km / 3–4 hrs)",
        description:
          "Depart Nairobi at 7:00 am heading southeast on the Mombasa Highway, passing through the rolling Kapiti Plains before entering Tsavo East National Park at the Voi Gate. Tsavo East is the larger of the two sister parks and is known for its vast open plains, red-dust elephants, and enormous buffalo herds. After checking into your lodge and enjoying a hot lunch, set out on your first afternoon game drive. Keep a lookout for Tsavo's famous red elephants — they coat themselves in the park's distinctive red volcanic soil as a sunscreen and insect repellent, giving them a striking appearance unlike elephants anywhere else. Return to the lodge as the sun sets over the savannah.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 2,
        title: "Full Day Tsavo East – Lugard Falls & Galana River",
        route: "FULL DAY – TSAVO EAST (LUGARD FALLS & GALANA RIVER)",
        description:
          "A full day exploring the wild heart of Tsavo East. We begin with an early morning game drive through the vast open plains, where large herds of buffalo, zebra, and giraffe are common sightings. Lions and leopards are regularly spotted along the river corridors. Mid-morning, we head to the spectacular Lugard Falls on the Galana River — a dramatic series of rapids and gorges carved through ancient volcanic rock. It is also one of the park's best spots for crocodile sightings. A picnic lunch is enjoyed with views of the river before an afternoon drive back through the core wildlife areas. Birdlife is prolific throughout — Tsavo East boasts over 500 species.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 3,
        title: "Transfer to Tsavo West – Mzima Springs & Shetani Lava Flow",
        route: "TSAVO EAST – TSAVO WEST (via Mtito Andei Gate)",
        description:
          "After an early morning game drive in Tsavo East, we cross into Tsavo West National Park — a strikingly different landscape dominated by volcanic hills, ancient lava flows, and lush riverine vegetation. The highlight of the day is Mzima Springs, a magical oasis where over 50 million litres of crystal-clear water bubble up from underground volcanic rock each day, supporting hippos, crocodiles, and a dazzling array of waterbirds. An underwater viewing chamber allows you to observe hippos and fish from below the surface. In the afternoon, we visit the Shetani Lava Flow — a dramatic black volcanic landscape created by an eruption approximately 200 years ago that local Maasai believe was made by the devil (Shetani). Return to your Tsavo West lodge for the night.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Safari Lodge",
      },
      {
        day: 4,
        title: "Final Morning Drive & Return to Nairobi",
        route: "TSAVO WEST – NAIROBI (Approx. 200 km / 3–4 hrs)",
        description:
          "Rise early for a final game drive in Tsavo West, where the volcanic hills and dense vegetation create a completely different safari atmosphere from Tsavo East. Black rhinos are occasionally spotted in this area. After a hearty breakfast back at the lodge, we pack up and begin the drive back to Nairobi, arriving in the early afternoon. The return journey passes through the scenic Kibwezi Forest and the Kapiti Plains, offering a fitting farewell to one of Kenya's most underrated wilderness destinations.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 5,
    slug: "samburu",
    country: "Kenya",
    tripTypes: ["wildlife-safari"],
    name: "Samburu, Kenya",
    description:
      "Experience the raw beauty and unique wildlife of Samburu National Reserve.",
    distance: "225km",
    image: destSamburu,
    category: "local",
    longDescription:
      "Samburu National Reserve lies along the banks of the Ewaso Ng'iro River in Kenya's arid north. It's famous for its 'Special Five' — Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and Beisa oryx — found nowhere else in Kenya's southern parks.",
    highlights: [
      "Samburu Special Five",
      "Ewaso Ng'iro River",
      "Samburu cultural experiences",
      "Scenic rugged landscapes",
      "Excellent bird watching",
    ],
    bestTime:
      "July to October and January to February for optimal wildlife viewing.",
    gallery: [
      destSamburu,
      destMara,
      destTsavo,
      destAmboseli,
      destSerengeti,
      destNairobi,
    ],
    price: 1800,
    duration: "4 Days / 3 Nights",
    accommodation: "Mid-range eco-lodge",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return road transfers from Nairobi",
      "Tourism-accredited professional driver/guide",
      "Transport in customised 4×4 safari vehicle with pop-up roof",
      "Accommodation on full-board basis (all meals & drinks)",
      "Guaranteed window seat during all game drives",
      "Complimentary bottled drinking water throughout",
      "Daily game drives as per itinerary",
      "Samburu village cultural visit",
      "Riverside nature walk",
      "All Samburu National Reserve entry & conservation fees",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages",
      "Extra activities not listed in the itinerary",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive to Samburu & Evening Game Drive",
        route: "NAIROBI – SAMBURU (Approx. 350 km / 5–6 hrs)",
        description:
          "Depart Nairobi at 6:30 am heading north through Mount Kenya's foothills, past Nanyuki town, and into Kenya's rugged Northern Frontier District — a world away from the more visited southern parks. The landscape becomes increasingly arid and dramatic as you approach Samburu. Arrive at your riverside lodge by early afternoon for lunch. After settling in, head out for an evening game drive through this unique semi-arid reserve. The contrast to southern Kenya is immediately striking — the vegetation is sparse, dominated by doum palms and dry riverine bush, and the wildlife is distinctly northern in character. Keep an eye out for the first of Samburu's famous Special Five before returning for dinner along the Ewaso Ng'iro River.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 2,
        title: "Full Day – Tracking the Samburu Special Five",
        route: "FULL DAY – SAMBURU NATIONAL RESERVE",
        description:
          "Today is dedicated to tracking all five of Samburu's unique northern species — animals you simply will not find in any of Kenya's southern parks. The reticulated giraffe is the most striking, with its bold geometric markings and incredible height. The gerenuk stands on its hind legs to reach acacia leaves. Grevy's zebra, the world's largest and most endangered zebra species, has a distinctive narrow-stripe pattern. The Beisa oryx moves through the dry landscape like a mythical creature with its long straight horns. And the Somali ostrich, the male distinguished by its blue neck and legs, struts across the plains. Beyond the Special Five, Samburu is also excellent for lion, leopard, elephant, and cheetah. A full day drive with a bush picnic lunch gives you the best chance to find them all.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 3,
        title: "Samburu Cultural Visit & Riverside Nature Walk",
        route: "SAMBURU VILLAGE & EWASO NG'IRO RIVER",
        description:
          "This morning offers an immersive visit to a traditional Samburu village. The Samburu people are closely related to the Maasai but have developed their own distinct culture, dress, and traditions in this harsh northern landscape. Warriors in elaborate red ochre and bead adornment welcome you to their boma, sharing their way of life, traditional dances, and knowledge of the bush. In the afternoon, enjoy a guided nature walk along the banks of the Ewaso Ng'iro River with an armed ranger — the only permanent water source in the area, and a magnet for wildlife throughout the day. Crocodiles sun themselves on the banks, elephants drink in large groups, and the riverine forest is alive with birds.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Eco-Lodge",
      },
      {
        day: 4,
        title: "Final Morning Drive & Return to Nairobi",
        route: "SAMBURU – NAIROBI (Approx. 350 km / 5–6 hrs)",
        description:
          "An early morning game drive as the Samburu Reserve wakes up — often the best time for leopard sightings in the riverine trees. Return to the lodge for a full breakfast and final check-out. The drive back to Nairobi passes through Isiolo, Nanyuki, and the Mount Kenya highlands — a beautiful return journey through some of Kenya's most scenic countryside. Arrive in Nairobi in the early evening, carrying with you memories of a truly off-the-beaten-path wilderness experience.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 6,
    slug: "nairobi",
    country: "Kenya",
    tripTypes: ["wildlife-safari", "city-break"],
    name: "Nairobi National Park",
    description:
      "A quick wildlife escape on the outskirts of Kenya's bustling capital.",
    distance: "10km",
    image: destNairobi,
    category: "local",
    longDescription:
      "Nairobi National Park is the only national park in the world located within a capital city. Just minutes from downtown Nairobi, it's home to lions, giraffes, rhinos, and over 400 bird species — all against a stunning backdrop of the city skyline.",
    highlights: [
      "City skyline safari",
      "Black rhino sanctuary",
      "David Sheldrick Elephant Orphanage",
      "Giraffe Centre nearby",
      "Over 400 bird species",
    ],
    bestTime:
      "Year-round; dry season (July to October) for best animal sightings.",
    gallery: [
      destNairobi,
      destAmboseli,
      destSerengeti,
      destMara,
      destTsavo,
      destSamburu,
    ],
    price: 400,
    duration: "Full Day",
    accommodation: "No overnight – day trip",
    mealBasis: "Lunch included",
    includes: [
      "Hotel pickup and drop-off within Nairobi",
      "Tourism-accredited professional driver/guide",
      "Transport in customised safari vehicle",
      "Game drive through Nairobi National Park",
      "Visit to David Sheldrick Wildlife Trust (elephant orphanage)",
      "Visit to the Giraffe Centre",
      "Lunch at a Nairobi restaurant",
      "All park entry fees",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance",
      "Alcoholic beverages and personal drinks",
      "Souvenir shopping",
      "Driver/guide gratuities & tips",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Morning Game Drive – Nairobi National Park",
        route:
          "NAIROBI HOTEL – NAIROBI NATIONAL PARK (Main Gate, Langata Road)",
        description:
          "We pick you up from your Nairobi hotel at 7:00 am for an early morning game drive through Africa's most extraordinary urban wilderness. Nairobi National Park covers 117 square kilometres of open savannah, forest, and wetland — just 7 km from the city centre, with Nairobi's skyscrapers forming a surreal backdrop to lion, leopard, cheetah, and rhino sightings. The park is home to over 100 mammal species, including the endangered black rhino and over 400 bird species. Morning is the best time for predator activity, and your guide's knowledge of the park's animal movements will maximise your sightings. The juxtaposition of wild animals against the city skyline makes for some of the most unique wildlife photographs in Africa.",
        mealPlan: "Morning snacks & water provided",
      },
      {
        day: 1,
        title: "David Sheldrick Wildlife Trust – Elephant Orphanage",
        route:
          "NAIROBI NATIONAL PARK – SHELDRICK TRUST (Banda Gate, off Magadi Road)",
        description:
          "After your game drive, we head to the world-famous David Sheldrick Wildlife Trust, where orphaned baby elephants and rhinos rescued from across Kenya are raised by dedicated keepers. The public visiting hour (11:00 am) is a magical experience — watching the baby elephants being bottle-fed, mud-bathing, and playing together is one of Nairobi's most beloved and emotional wildlife experiences. Each elephant has a remarkable rescue story, and the keepers share these narratives as they interact with the animals. The Trust has successfully released over 270 elephants back into the wild.",
        mealPlan: "Morning – no meal",
      },
      {
        day: 1,
        title: "Lunch & Giraffe Centre",
        route: "LANGATA AREA – GIRAFFE CENTRE & RESTAURANT",
        description:
          "Enjoy a relaxed lunch at a recommended Langata restaurant before heading to the African Fund for Endangered Wildlife Giraffe Centre, home to the endangered Rothschild giraffe. Feed these gentle giants from a raised wooden platform — eye to eye and close enough to receive a long-tongued kiss! The centre has been instrumental in breeding and reintroducing Rothschild giraffes, one of Africa's most endangered giraffe subspecies, into national parks across Kenya. After the Giraffe Centre, your driver returns you to your hotel, completing a full and memorable day in Nairobi.",
        mealPlan: "Lunch included",
      },
    ],
  },

  // ===== BEACH DESTINATIONS =====

  {
    id: 7,
    slug: "diani-beach",
    country: "Kenya",
    tripTypes: ["beach-holiday"],
    name: "Diani Beach, Kenya",
    description:
      "Kenya's award-winning beach with powdery white sand and turquoise waters.",
    distance: "480km",
    image: destDiani,
    category: "beach",
    longDescription:
      "Diani Beach, located on Kenya's South Coast, has been voted Africa's leading beach destination multiple times. With its pristine white sandy shores, warm turquoise Indian Ocean waters, and lush tropical vegetation, it's the perfect blend of relaxation and adventure.",
    highlights: [
      "Pristine white sand beaches",
      "Snorkeling & diving at Kisite Marine Park",
      "Skydiving over the coast",
      "Colobus monkey conservation",
      "Water sports & kite surfing",
    ],
    bestTime: "January to March and July to October for sunny, dry weather.",
    gallery: [
      destDiani,
      destMombasa,
      destZanzibar,
      destLamu,
      destMalindi,
      destSeychelles,
    ],
    price: 1400,
    duration: "5 Days / 4 Nights",
    accommodation: "Mid-range beach hotel",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Ukunda airstrip",
      "Airport/airstrip transfers",
      "Accommodation on full-board basis (all meals & drinks)",
      "Kisite-Mpunguti Marine Park full-day trip (snorkeling & dolphins)",
      "Glass-bottom boat ride",
      "Water sports session (kite surfing, kayaking, or jet ski)",
      "Shimba Hills National Reserve excursion",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Skydiving (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Diani & First Sunset on the Beach",
        route: "NAIROBI – UKUNDA AIRSTRIP – DIANI BEACH (45-min flight)",
        description:
          "Board your morning flight from Wilson Airport for the scenic 45-minute hop to Ukunda airstrip on Kenya's South Coast. Your driver meets you on arrival for the short transfer to your beachfront hotel. Check in, change into your swimwear, and walk out onto one of Africa's most beautiful beaches — miles of powder-white sand fringed by coconut palms, lapped by warm turquoise water. Spend the afternoon at leisure: swim, snorkel from the shore, stroll the beach, or simply watch the colourful fishing dhows drift by. As the sun dips towards the horizon, the sky turns gold and pink over the Indian Ocean — a breathtaking welcome to the Kenyan coast. Dinner at your hotel.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Hotel",
      },
      {
        day: 2,
        title: "Kisite Marine Park – Dolphins, Snorkeling & Seafood",
        route: "DIANI – KISITE-MPUNGUTI MARINE PARK (1 hr boat ride south)",
        description:
          "An early start for one of the Kenyan coast's most spectacular excursions. We transfer by road to Shimoni jetty, where a traditional dhow takes you out to the pristine Kisite-Mpunguti Marine Park — a protected reef system teeming with marine life. Spinner and bottlenose dolphins regularly surf the boat's bow wave on the journey out. Once at the reef, snorkel among spectacular coral gardens full of colourful fish, sea turtles, and rays. Lunch is a fresh seafood spread served on a palm-fringed sandbank beach — lobster, grilled fish, and coconut rice. The afternoon sail back to Shimoni is relaxed and beautiful. Return to Diani for sunset drinks on the beach.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Hotel",
      },
      {
        day: 3,
        title: "Water Sports Day",
        route: "DIANI BEACH – BEACH ACTIVITIES",
        description:
          "Diani is East Africa's premier water sports destination, and today is yours to fill with ocean action. Choose from kite surfing lessons on the flat-water lagoon (Diani is one of the world's top kite spots), kayaking along the coast, stand-up paddleboarding, jet skiing, or a glass-bottom boat ride over the reef. If you prefer to stay on dry land, walk through the Colobus Conservation Centre — a sanctuary for the rare Angolan colobus monkey that inhabits the coastal forests behind the beach. In the evening, explore Diani's vibrant beachfront restaurants and bars for dinner on your own — fresh prawns and grilled catch of the day are highly recommended.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Hotel",
      },
      {
        day: 4,
        title: "Shimba Hills National Reserve",
        route: "DIANI – SHIMBA HILLS NATIONAL RESERVE (45-min drive)",
        description:
          "Just inland from Diani lies one of Kenya's most rewarding lesser-known parks — Shimba Hills National Reserve. This lush coastal rainforest is home to a variety of wildlife, including the rare sable antelope (one of only two places in Kenya where they're found), elephants, buffalos, and leopards. The reserve offers stunning viewpoints over the coast, and the magnificent Sheldrick Falls is a highlight — a beautiful waterfall cascading into a jungle pool. Return to Diani in the late afternoon for a final sunset on the beach.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Hotel",
      },
      {
        day: 5,
        title: "Final Beach Morning & Departure",
        route: "DIANI BEACH – UKUNDA AIRSTRIP – NAIROBI",
        description:
          "A leisurely final morning — take one last dip in the warm Indian Ocean, enjoy a long breakfast at your hotel, and pick up any last souvenirs from the beach craft vendors. Your driver transfers you to Ukunda airstrip in time for the early afternoon flight back to Nairobi. The short flight offers beautiful aerial views of the coastline as you bid farewell to the beaches of the South Coast.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 8,
    slug: "mombasa",
    country: "Kenya",
    tripTypes: ["beach-holiday", "cultural"],
    name: "Mombasa, Kenya",
    description:
      "Kenya's coastal gem blending Swahili culture, historic forts, and stunning beaches.",
    distance: "440km",
    image: destMombasa,
    category: "beach",
    longDescription:
      "Mombasa, Kenya's second-largest city, is a vibrant coastal destination rich in history, culture, and natural beauty. From the iconic Fort Jesus UNESCO World Heritage Site to the bustling Old Town and the pristine beaches of the North and South Coast, Mombasa offers a unique mix of adventure and relaxation.",
    highlights: [
      "Fort Jesus World Heritage Site",
      "Old Town Swahili culture",
      "Nyali & Bamburi beaches",
      "Haller Park wildlife",
      "SGR train experience",
    ],
    bestTime:
      "January to March and September to December for ideal beach weather.",
    gallery: [
      destMombasa,
      destDiani,
      destZanzibar,
      destLamu,
      destMalindi,
      destSeychelles,
    ],
    price: 1200,
    duration: "5 Days / 4 Nights",
    accommodation: "Beachfront resort",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return SGR train tickets (Nairobi–Mombasa) or flights",
      "Airport/station transfers",
      "Accommodation at beachfront resort (full-board, all meals & drinks)",
      "Guided Fort Jesus & Old Town heritage tour",
      "Mombasa Marine National Park snorkeling trip",
      "Glass-bottom boat ride",
      "Haller Park wildlife visit",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Deep-sea fishing (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "SGR to Mombasa & Beach Check-in",
        route: "NAIROBI – MOMBASA (SGR Madaraka Express / Approx. 4.5 hrs)",
        description:
          "Board the Madaraka Express from Nairobi's Syokimau Station at 8:00 am for a scenic, comfortable train journey through the Tsavo wilderness to Mombasa. The SGR train passes through Tsavo National Park — keep your eyes open for elephants and other wildlife from the window. Arrive at Mombasa Terminus in the early afternoon. Your driver transfers you to your beachfront resort on the North Coast, where you check in and are greeted with a cool welcome drink. Spend the afternoon getting acquainted with the beach — the warm water of the Indian Ocean and the white sand of Nyali or Bamburi Beach are immediately inviting. Dinner at your resort overlooking the ocean.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Beachfront Resort",
      },
      {
        day: 2,
        title: "Fort Jesus & Old Town Heritage Tour",
        route: "NORTH COAST RESORT – MOMBASA ISLAND (Fort Jesus & Old Town)",
        description:
          "After breakfast, we cross the Nyali Bridge into Mombasa Island for a guided heritage tour of East Africa's most significant historical sites. Fort Jesus, a UNESCO World Heritage Site built by the Portuguese in 1593, dominates the entrance to the Old Harbour and houses a fascinating museum chronicling Mombasa's turbulent history of Portuguese, Omani, and British occupation. From the fort, your guide leads you through the narrow alleys of the Old Town — a living museum of carved wooden doors, Arabic architecture, and bustling Swahili street life. Visit the Spice Market, the Old Port where traditional dhows still dock, and sample freshly made Swahili snacks from local vendors. Return to your resort for a relaxed afternoon at the beach.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Beachfront Resort",
      },
      {
        day: 3,
        title: "Mombasa Marine Park – Snorkeling & Glass-Bottom Boat",
        route: "NORTH COAST – MOMBASA MARINE NATIONAL PARK",
        description:
          "Today is all about the underwater world. A short boat transfer takes you out to Mombasa Marine National Park — one of Kenya's most pristine protected reef systems, teeming with colourful coral, tropical fish, sea turtles, and rays. Your guide leads a guided snorkel over the reef, pointing out key marine species. For those who prefer to stay dry, a glass-bottom boat offers stunning views of the coral gardens below. A freshly prepared seafood lunch is served at a local beach restaurant before returning to the resort for a relaxed afternoon. The sunset from Bamburi Beach in the evening is not to be missed.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Beachfront Resort",
      },
      {
        day: 4,
        title: "Haller Park Wildlife Centre & Free Beach Afternoon",
        route: "BAMBURI – HALLER PARK – BAMBURI BEACH",
        description:
          "Morning visit to Haller Park — a remarkable environmental rehabilitation story where a former barren limestone quarry has been transformed into a thriving wildlife sanctuary. Giraffes, hippos, buffalos, crocodiles, tortoises, and a diverse collection of birds are just some of the animals resident here. Children and adults alike love hand-feeding the giraffes. After the park visit, the afternoon is entirely free for you to enjoy the beach at your own pace — swim, nap under a palm tree, try a water sport, or browse the beachfront craft markets. A final dinner at the resort rounds off your last full evening in Mombasa.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Beachfront Resort",
      },
      {
        day: 5,
        title: "Final Morning Swim & Return to Nairobi",
        route: "MOMBASA – NAIROBI (SGR Madaraka Express)",
        description:
          "Take one last morning swim in the warm Indian Ocean before a leisurely resort breakfast. Check out, then transfer to Mombasa SGR Terminus for the afternoon train back to Nairobi. The return journey is equally scenic, arriving at Syokimau in the early evening. Your driver transfers you back to your hotel or the airport, completing a richly layered coastal experience blending beach, history, and ocean adventure.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 15,
    slug: "lamu",
    country: "Kenya",
    tripTypes: ["beach-holiday", "cultural"],
    name: "Lamu Island, Kenya",
    description:
      "A UNESCO World Heritage site blending Swahili culture, donkey-paced streets, and pristine beaches.",
    distance: "600km",
    image: destLamu,
    category: "beach",
    longDescription:
      "Lamu is Kenya's oldest living town and a UNESCO World Heritage site. This enchanting island off the northern coast has no cars — just narrow alleys, carved wooden doors, traditional dhow boats, and a timeless Swahili way of life. Shela Beach offers miles of unspoiled white sand, while the archipelago's marine life is spectacular.",
    highlights: [
      "Lamu Old Town UNESCO site",
      "Shela Beach",
      "Traditional dhow sailing",
      "Swahili cuisine & culture",
      "Lamu Museum",
      "Manda Island excursions",
    ],
    bestTime: "July to October and December to March for dry, sunny weather.",
    gallery: [
      destLamu,
      destDiani,
      destMombasa,
      destZanzibar,
      destMalindi,
      destSeychelles,
    ],
    price: 1500,
    duration: "5 Days / 4 Nights",
    accommodation: "Boutique Swahili hotel",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Lamu (Manda Island airstrip)",
      "Boat transfer from airstrip to Lamu Town",
      "Accommodation at boutique Swahili hotel (full-board, all meals & drinks)",
      "Guided Lamu Old Town heritage walk",
      "Dhow sunset cruise",
      "Manda Island boat trip (Takwa ruins, mangrove walk & beach BBQ)",
      "Swahili cooking class",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Deep-sea fishing (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Lamu & Old Town Heritage Walk",
        route: "NAIROBI – MANDA ISLAND AIRSTRIP – LAMU TOWN (boat transfer)",
        description:
          "Board your morning flight from Wilson Airport for the scenic journey north to Manda Island airstrip, just across the channel from Lamu. A short motorised dhow takes you across the turquoise water to Lamu Town — and the moment you step off the boat, you know you've arrived somewhere truly different. There are no cars here, only donkeys, narrow alleys, and the unhurried rhythm of Swahili island life. Check into your boutique hotel in the heart of the Old Town. After lunch, your guide leads you through Lamu's UNESCO-listed Old Town — a labyrinth of carved wooden doors, ornate balconies, bustling markets, and ancient mosques that have changed little in centuries. End the afternoon with fresh juice at a rooftop café overlooking the waterfront.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Boutique Swahili Hotel",
      },
      {
        day: 2,
        title: "Shela Beach & Dhow Sailing",
        route: "LAMU TOWN – SHELA BEACH (30-min walk or short dhow ride)",
        description:
          "A relaxed morning walk (or short dhow ride) brings you to Shela Beach — an unbroken stretch of white sand dunes and warm Indian Ocean water that stretches for miles with barely another soul in sight. Swim, sunbathe, or simply walk the shoreline collecting shells. After a fresh seafood lunch at one of Shela's small beach restaurants, join a traditional hand-crafted dhow for an afternoon sailing excursion through the Lamu Archipelago. Your crew navigates the channels between the islands with nothing but the wind in the sails and the smell of the ocean. A cold drink on deck as the sun drops is one of those moments that stays with you long after you leave.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Swahili Hotel",
      },
      {
        day: 3,
        title: "Manda Island – Takwa Ruins, Mangroves & Beach BBQ",
        route: "LAMU TOWN – MANDA ISLAND (short boat crossing)",
        description:
          "A full-day boat excursion to neighbouring Manda Island, a near-uninhabited wilderness of mangrove forests, ancient ruins, and deserted beaches. Begin at the Takwa Ruins — the remains of a 15th-century Swahili town abandoned in the 17th century and now swallowed by the mangrove forest, with a haunting, atmospheric quality that is unique on the Kenyan coast. A guided walk through the mangrove channels follows, where your naturalist guide explains the extraordinary ecological importance of this coastal ecosystem. A freshly cooked beach BBQ lunch is served on a pristine sandbank, before an afternoon of swimming and snorkeling in the clear waters off Manda's eastern beaches.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Swahili Hotel",
      },
      {
        day: 4,
        title: "Swahili Cooking Class & Lamu Museum",
        route: "LAMU TOWN – VARIOUS CULTURAL SITES",
        description:
          "A morning immersed in Lamu's extraordinary culinary culture. Join a Swahili cooking class led by a local expert — learning to prepare classic coastal dishes like pilau rice, coconut fish curry, and mahamri (Swahili doughnuts) using fresh spices from the market. After lunch — which you eat together from your own cooking — visit the Lamu Museum, one of the best small museums on the East African coast, with exhibits on Swahili culture, dhow building, and the island's remarkable history. The afternoon is free to explore independently — browse the woodcarvers' workshops, visit the Riyadha Mosque, or return to Shela Beach for a final swim.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Swahili Hotel",
      },
      {
        day: 5,
        title: "Final Morning & Departure",
        route: "LAMU TOWN – MANDA ISLAND AIRSTRIP – NAIROBI",
        description:
          "A slow, peaceful final morning on the island — perhaps a last walk through the Old Town alleys, a coffee at the waterfront, or a final swim at Shela. Lamu moves at its own pace, and your last hours here are best spent doing the same. Transfer by dhow to Manda Island airstrip for your early afternoon flight back to Nairobi. As the island disappears below, the patchwork of coral-blue water, white sand, and mangrove green lingers as one of the most beautiful images of your journey.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 16,
    slug: "malindi",
    country: "Kenya",
    tripTypes: ["beach-holiday"],
    name: "Malindi, Kenya",
    description:
      "A coastal paradise with pristine marine parks, Italian heritage, and golden beaches.",
    distance: "520km",
    image: destMalindi,
    category: "beach",
    longDescription:
      "Malindi is a charming Kenyan coastal town with a unique Italian influence, stunning Watamu Marine National Park, and the famous Vasco da Gama Pillar. With its warm waters, vibrant coral reefs, and relaxed atmosphere, Malindi is perfect for beach lovers, snorkelers, and history buffs alike.",
    highlights: [
      "Watamu Marine Park",
      "Vasco da Gama Pillar",
      "Malindi Marine Park",
      "Gedi Ruins",
      "Bio-Ken Snake Farm",
      "Italian-influenced cuisine",
    ],
    bestTime:
      "October to March for warm, dry weather and excellent visibility for diving.",
    gallery: [
      destMalindi,
      destDiani,
      destLamu,
      destMombasa,
      destZanzibar,
      destSeychelles,
    ],
    price: 1300,
    duration: "5 Days / 4 Nights",
    accommodation: "Mid-range beachfront resort",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Malindi",
      "Airport transfers",
      "Accommodation at beachfront resort (full-board, all meals & drinks)",
      "Watamu Marine Park snorkeling & glass-bottom boat excursion",
      "Gedi Ruins guided historical tour",
      "Vasco da Gama Pillar visit",
      "Dolphin watching excursion",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Deep-sea fishing (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Malindi & Beach Arrival",
        route: "NAIROBI – MALINDI (45-min flight from Wilson Airport)",
        description:
          "Board your morning flight for the short hop to Malindi on Kenya's north coast. Arrive by mid-morning and transfer to your beachfront resort, where the warm Indian Ocean laps a wide stretch of golden sand. Malindi has a distinctive character unlike any other Kenyan beach town — a long Italian expat community has left its mark on the restaurants, café culture, and general pace of life here, creating a wonderfully relaxed Mediterranean-African atmosphere. Spend the afternoon exploring the beach, swimming, and settling in before a fresh seafood dinner.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Resort",
      },
      {
        day: 2,
        title: "Watamu Marine Park – Coral Gardens & Glass-Bottom Boat",
        route: "MALINDI – WATAMU MARINE NATIONAL PARK (30-min drive south)",
        description:
          "Drive south along the coast to Watamu, home to one of the most spectacular coral reef systems in the Indian Ocean. Watamu Marine National Park is a UNESCO Biosphere Reserve and one of Kenya's most pristine marine environments. A boat takes you out over the crystal-clear water to the coral gardens, where you snorkel among an extraordinary diversity of reef fish, sea turtles, morays, and starfish. A glass-bottom boat section allows non-swimmers to enjoy the views from above. Fresh seafood lunch at a local Watamu beach restaurant follows, before a relaxed afternoon back in Malindi.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Resort",
      },
      {
        day: 3,
        title: "Gedi Ruins, Vasco da Gama Pillar & Town Tour",
        route: "MALINDI TOWN & GEDI RUINS (14 km south of Malindi)",
        description:
          "A fascinating day exploring the historical layers of Kenya's north coast. Begin at the Gedi Ruins — the remains of a 13th-century Swahili town that was mysteriously abandoned in the 17th century and is now reclaimed by forest. Walking through the roofless mosques, palace, and houses draped in roots and vines, with colobus monkeys overhead and golden-rumped sengis darting through the undergrowth, is a wonderfully atmospheric experience. Back in Malindi town, visit the Vasco da Gama Pillar — a coral pillar erected by the Portuguese explorer in 1498 and one of Africa's oldest European monuments. A walk through the old town and Malindi market rounds off the day.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Resort",
      },
      {
        day: 4,
        title: "Dolphin Watching & Beach Afternoon",
        route: "MALINDI OFFSHORE – DOLPHIN GROUNDS",
        description:
          "An early morning boat trip out to the dolphin grounds offshore from Malindi. Spinner and bottlenose dolphins are regularly encountered here, often riding the bow wave of the boat in large pods. Whale sharks, mantas, and sea turtles are also occasional sightings depending on the season. Return to shore by mid-morning for a relaxed final full day at the resort — the afternoon is entirely yours to enjoy the beach, try any remaining water sports, visit the Bio-Ken Snake Farm (Africa's leading snake research and antivenom centre), or simply enjoy an Italian coffee at one of Malindi's seafront cafés.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Mid-Range Beachfront Resort",
      },
      {
        day: 5,
        title: "Final Beach Morning & Return to Nairobi",
        route: "MALINDI – NAIROBI (45-min flight)",
        description:
          "A slow, unhurried final morning at the beach. Swim, enjoy a long breakfast, and pick up any final souvenirs from the market. Transfer to Malindi Airport in time for the early afternoon flight back to Nairobi. As the coastline falls away below you, Malindi reveals its full beauty from the air — a gorgeous stretch of Indian Ocean coastline framed by reef and white sand.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 17,
    slug: "seychelles",
    country: "Seychelles",
    tripTypes: ["beach-holiday", "luxury"],
    name: "Seychelles",
    description:
      "A pristine archipelago of granite islands with the world's most beautiful beaches.",
    distance: "International",
    image: destSeychelles,
    category: "beach",
    longDescription:
      "The Seychelles is an archipelago of 115 islands in the Indian Ocean, famous for its dramatic granite boulders, powder-white beaches, and lush tropical forests. Home to two UNESCO World Heritage sites and some of the rarest wildlife on earth, Seychelles offers the ultimate luxury island escape.",
    highlights: [
      "Anse Source d'Argent beach",
      "Vallée de Mai (UNESCO)",
      "Giant Aldabra tortoises",
      "Pristine snorkeling & diving",
      "Rare Coco de Mer palms",
      "Island hopping by ferry",
    ],
    bestTime:
      "April to May and October to November for calm seas and pleasant weather.",
    gallery: [
      destSeychelles,
      destMaldives,
      destMauritius,
      destZanzibar,
      destDiani,
      destLamu,
    ],
    price: 4200,
    duration: "7 Days / 6 Nights",
    accommodation: "Boutique hotels on Mahé & Praslin",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Mahé (Seychelles International Airport)",
      "Inter-island ferry (Mahé–Praslin)",
      "All in-island transfers",
      "Accommodation full-board (all meals as per itinerary)",
      "Guided Vallée de Mai UNESCO forest tour (Praslin)",
      "La Digue bicycle hire & guided tour (including Anse Source d'Argent)",
      "Curieuse Island snorkeling excursion with giant tortoise sanctuary",
      "Victoria city tour & botanical gardens",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Helicopter transfers (available at extra cost)",
      "Scuba diving (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mahé & Beau Vallon Beach",
        route: "NAIROBI – MAHÉ, SEYCHELLES (approx. 3.5-hr flight)",
        description:
          "Fly from Nairobi to Mahé, the main island of the Seychelles, arriving in the afternoon. Transfer to your boutique hotel and take your first steps on Seychellois soil — dramatic granite peaks rising above lush jungle, framing a beach of almost impossibly clear water. After checking in, head to Beau Vallon Beach — Mahé's most popular beach and a perfect introduction to what the Seychelles does best. Warm flat water, palm trees, and a stunning mountain backdrop. Dinner at your hotel.",
        mealPlan: "Dinner",
        accommodation: "Boutique Hotel, Mahé",
      },
      {
        day: 2,
        title: "Victoria City Tour & Morne Seychellois",
        route: "MAHÉ – VICTORIA & MORNE SEYCHELLOIS NATIONAL PARK",
        description:
          "Morning tour of Victoria — the world's smallest capital city, but a charming one. Visit the miniature replica of Big Ben (a famous island landmark), the colourful Central Market full of tropical fruits and spices, and the Sir Selwyn Selwyn-Clarke Market. The Botanical Gardens are home to giant Aldabra tortoises that roam freely among the palms and rare endemic plants. In the afternoon, explore the trails of Morne Seychellois National Park — a stunning forest reserve covering a third of Mahé, home to rare endemic birds and breathtaking ocean views from the ridge above Victoria.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Mahé",
      },
      {
        day: 3,
        title: "Ferry to Praslin & Anse Lazio Beach",
        route: "MAHÉ – PRASLIN (Inter-island ferry, approx. 1 hr)",
        description:
          "Board the morning inter-island ferry for the scenic journey to Praslin — the Seychelles' second-largest island and home to some of the most spectacular beaches in the world. Check into your boutique hotel, then head straight to Anse Lazio — consistently ranked among the top five beaches on earth. Pale pink-tinged sand, water in twenty shades of turquoise, and enormous smooth granite boulders framing the bay create a scene of almost surreal beauty. Spend the afternoon swimming, snorkeling, or simply lying in the sun. Fresh grilled fish at the beach restaurant for lunch.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Praslin",
      },
      {
        day: 4,
        title: "Vallée de Mai – UNESCO World Heritage Forest",
        route: "PRASLIN – VALLÉE DE MAI NATIONAL PARK",
        description:
          "A morning guided walk through the Vallée de Mai — a primeval forest UNESCO World Heritage Site that early explorers believed to be the original Garden of Eden. This ancient palm forest is the only place on earth where the Coco de Mer palm grows wild — producing the largest and heaviest seed in the plant kingdom. The forest is also home to the rare Black Parrot, endemic to Praslin and found nowhere else on earth. Your naturalist guide brings the forest to life with stories of the island's ecology, mythology, and conservation efforts. The afternoon is free to explore Praslin's quiet beaches or visit the island's local villages.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Praslin",
      },
      {
        day: 5,
        title: "La Digue – Anse Source d'Argent & Bicycle Tour",
        route: "PRASLIN – LA DIGUE (short ferry crossing, 15 min)",
        description:
          "A short ferry hop to La Digue — a tiny island where the main form of transport is a bicycle, and time moves even slower than elsewhere in the Seychelles. Hire bicycles and pedal through coconut plantations, vanilla farms, and fishing villages to Anse Source d'Argent — the most photographed beach in the world, with its extraordinary granite boulders sculpted by millennia of ocean spray into extraordinary organic shapes. The shallow turquoise water between the boulders is perfect for snorkeling. Continue cycling to explore the rest of La Digue's beaches — Petite Anse and Grand Anse are equally beautiful and even less visited.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Praslin",
      },
      {
        day: 6,
        title: "Curieuse Island – Snorkeling & Giant Tortoises",
        route: "PRASLIN – CURIEUSE ISLAND (boat excursion)",
        description:
          "A full-day boat excursion to Curieuse Island — a protected marine national park and home to a sanctuary of over 300 Aldabra giant tortoises that roam freely across the island. These magnificent ancient creatures, which can live over 150 years and weigh up to 250 kg, are utterly unafraid of humans and can be approached at close range. Snorkeling around the Curieuse marine park reveals spectacular coral gardens and colourful reef fish. A traditional Creole BBQ lunch is served under the palms on the beach. Return to Praslin in the late afternoon for a final sunset dinner.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Praslin",
      },
      {
        day: 7,
        title: "Return Ferry to Mahé & Departure",
        route: "PRASLIN – MAHÉ – NAIROBI",
        description:
          "Ferry back to Mahé in the morning, arriving with time for a final stroll along Beau Vallon Beach or a last coffee in Victoria before transferring to Seychelles International Airport for your evening flight back to Nairobi. As the Seychelles islands shrink to green specks in the deep blue of the Indian Ocean below, you carry with you the memory of a place of almost mythical natural beauty — islands that feel like the world forgot about them in the best possible way.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 18,
    slug: "mauritius",
    country: "Mauritius",
    tripTypes: ["beach-holiday", "luxury"],
    name: "Mauritius",
    description:
      "A tropical gem with turquoise lagoons, dramatic mountains, and vibrant multicultural heritage.",
    distance: "International",
    image: destMauritius,
    category: "beach",
    longDescription:
      "Mauritius is a volcanic island paradise in the Indian Ocean known for its stunning lagoons, dramatic Le Morne mountain, underwater waterfall illusion, and vibrant blend of Indian, African, Chinese, and European cultures. From luxurious resorts to adventure activities, Mauritius offers something for every traveler.",
    highlights: [
      "Le Morne Brabant mountain",
      "Seven Colored Earths",
      "Île aux Cerfs island",
      "Underwater waterfall illusion",
      "Chamarel Falls",
      "Rum distillery tours",
    ],
    bestTime:
      "May to December for warm, dry weather; September to November is ideal.",
    gallery: [
      destMauritius,
      destSeychelles,
      destMaldives,
      destZanzibar,
      destDiani,
      destLamu,
    ],
    price: 3500,
    duration: "7 Days / 6 Nights",
    accommodation: "4-star resort",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Mauritius (Sir Seewoosagur Ramgoolam International Airport)",
      "All in-island transfers",
      "Accommodation at 4-star resort (full-board, all meals & drinks)",
      "South Island tour (Chamarel Falls, Seven Colored Earths, rum distillery)",
      "Dolphin swimming excursion (early morning, Le Morne)",
      "Catamaran cruise to Île aux Cerfs with snorkeling & BBQ",
      "Port Louis city & market tour",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Helicopter tour (available at extra cost)",
      "Scuba diving (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mauritius & Grand Baie",
        route: "NAIROBI – MAURITIUS (approx. 4-hr flight)",
        description:
          "Fly from Nairobi to Sir Seewoosagur Ramgoolam International Airport in the south of Mauritius, arriving in the afternoon. Transfer to your resort in the north of the island — Grand Baie is Mauritius' liveliest coastal town, with a wide protected bay of flat turquoise water perfect for swimming, water sports, and catamaran excursions. Check in and spend the rest of the day getting acquainted with the resort and the beach. The warm water of the Indian Ocean and the mountain-fringed horizon are immediately welcoming. Dinner at the resort.",
        mealPlan: "Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 2,
        title: "South Island Tour – Chamarel, Coloured Earths & Rum",
        route: "GRAND BAIE – SOUTH MAURITIUS (full-day drive)",
        description:
          "A full-day excursion to the spectacular south of Mauritius — a landscape of volcanic peaks, lush forests, and extraordinary geological wonders. Begin at Chamarel Falls, a magnificent 100-metre cascade plunging into a forested gorge. A short drive brings you to the famous Seven Colored Earths — a surreal landscape of volcanic dunes in seven distinct colours (red, brown, violet, green, blue, purple, yellow) that never mix despite being adjacent. Visit the Chamarel Rum Distillery for a tour and tasting of Mauritius's famous sugarcane rums. The drive south also passes through the scenic Black River Gorges National Park — home to the endemic Mauritius Kestrel and Pink Pigeon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 3,
        title: "Dolphin Swimming at Le Morne",
        route: "GRAND BAIE – LE MORNE (south-west coast, early morning)",
        description:
          "Rise before dawn for the drive to the south-west coast and the iconic Le Morne Brabant peninsula — a dramatic basalt monolith rising 556 metres from the turquoise lagoon and a UNESCO World Heritage Site. In the early morning, large pods of spinner and bottlenose dolphins inhabit the warm lagoon waters here, and a guided snorkeling excursion allows you to swim alongside them in their natural habitat — one of the most extraordinary wildlife experiences in the Indian Ocean. After the dolphin encounter, spend the afternoon at Le Morne's breathtaking beach with clear views of the famous underwater waterfall illusion — a trick of ocean current and sand that creates the appearance of a waterfall plunging off the island's continental shelf.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 4,
        title: "Catamaran Cruise to Île aux Cerfs",
        route: "GRAND BAIE – ÎLE AUX CERFS (catamaran, east coast)",
        description:
          "A full-day catamaran cruise circumnavigating the northern coast to the east side of the island and the famous Île aux Cerfs — a small uninhabited island in the middle of a vast, sheltered turquoise lagoon that is frequently cited as Mauritius's most beautiful beach. The sail itself is spectacular, with the island's mountainous interior as a backdrop. At Île aux Cerfs, snorkel over vibrant coral gardens, swim in the impossibly clear water, and enjoy a freshly prepared BBQ lunch of grilled seafood, salads, and tropical fruit on the beach. The return sail in the afternoon is accompanied by sundowner drinks on deck.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 5,
        title: "Port Louis – Capital City & Central Market",
        route: "GRAND BAIE – PORT LOUIS (capital city, 30-min drive)",
        description:
          "A morning in Port Louis — Mauritius's compact, vibrant capital city where Indian, Chinese, Creole, and European influences collide in the most fascinating way. Start at the Central Market — a riot of colour, smell, and noise selling fresh fruit, spices, street food, and souvenirs under a historic Victorian iron roof. Visit the Blue Penny Museum for an introduction to Mauritius's extraordinary colonial history, then stroll the Caudan Waterfront — a modern harbour development with restaurants, craft shops, and views of the port. Lunch at a local Creole restaurant before returning to the resort for a relaxed afternoon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 6,
        title: "Water Sports & Free Day",
        route: "GRAND BAIE RESORT & LAGOON",
        description:
          "Today is entirely at your leisure. The resort and Grand Baie offer a full menu of water sports and activities — parasailing, kayaking, paddleboarding, kite surfing, jet skiing, or simply floating in the lagoon. For the adventurous, a scuba diving excursion to some of Mauritius's premier dive sites can be arranged (at extra cost). For those who prefer dry land, a catamaran or glass-bottom boat trip along the northern coast is a wonderful way to spend the day. The evening is free for dinner at one of Grand Baie's excellent beachfront restaurants.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Resort",
      },
      {
        day: 7,
        title: "Final Beach Morning & Departure",
        route: "GRAND BAIE – SIR SEEWOOSAGUR RAMGOOLAM AIRPORT – NAIROBI",
        description:
          "A last morning at the beach — take a final swim in the warm lagoon, enjoy a long breakfast, and collect any remaining souvenirs. Transfer to the airport in the afternoon for your flight back to Nairobi, arriving in the evening. Mauritius has a way of staying with you long after you leave — in the warmth of its people, the colour of its waters, and the extraordinary diversity of a small island that punches far above its weight as a travel destination.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  // ===== INTERNATIONAL DESTINATIONS =====

  {
    id: 9,
    slug: "dubai",
    country: "UAE",
    tripTypes: ["adventure", "luxury", "city-break"],
    name: "Dubai, UAE",
    description:
      "Experience the dazzling luxury, desert adventures, and modern marvels of Dubai.",
    distance: "International",
    image: destDubai,
    category: "international",
    longDescription:
      "Dubai is a city of superlatives — home to the world's tallest building, largest shopping mall, and most luxurious hotels. From thrilling desert safaris and dune bashing to world-class shopping and futuristic architecture, Dubai offers an unforgettable blend of tradition and modernity.",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari & dune bashing",
      "Dubai Mall & Aquarium",
      "Palm Jumeirah",
      "Gold & Spice Souks",
      "Dhow cruise dinner",
    ],
    bestTime: "November to March for pleasant weather (20–30°C).",
    gallery: [
      destDubai,
      destEgypt,
      destTurkey,
      destCapetown,
      destMaldives,
      destZanzibar,
    ],
    price: 2800,
    duration: "6 Days / 5 Nights",
    accommodation: "4-star hotel, Palm Jumeirah area",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Dubai (DXB)",
      "All in-city transfers",
      "Accommodation (full-board, all meals as per itinerary)",
      "Burj Khalifa 'At the Top' observation deck tickets",
      "Desert safari with dune bashing, camel ride & BBQ dinner",
      "Dubai city tour (Souks, Dubai Frame, Old Town)",
      "Abu Dhabi day trip (Sheikh Zayed Grand Mosque & Louvre Abu Dhabi)",
      "Dhow dinner cruise on Dubai Creek",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages",
      "Theme park entry (available at extra cost)",
      "Extra shopping & personal expenses",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Dubai Marina Evening",
        route: "NAIROBI – DUBAI INTERNATIONAL AIRPORT (approx. 5-hr flight)",
        description:
          "Fly from Nairobi to Dubai, arriving in the evening. Your driver transfers you to your hotel in the Palm Jumeirah or Marina area — an immediate visual statement of Dubai's ambition, with towers of glass and steel reflecting off the Persian Gulf. After checking in, take an evening stroll along the Dubai Marina Walk — a glittering waterfront promenade lined with yachts, restaurants, and cafés that hums with energy long after dark. The scale and spectacle of modern Dubai begins to reveal itself.",
        mealPlan: "Dinner",
        accommodation: "4-Star Hotel",
      },
      {
        day: 2,
        title: "Iconic Dubai – Burj Khalifa, Dubai Mall & Fountain Show",
        route: "DOWNTOWN DUBAI",
        description:
          "A full day exploring the icons of modern Dubai. Begin at the Burj Khalifa — the world's tallest building at 828 metres — for the ascent to the 'At the Top' observation deck, where the entire city, desert, and Gulf spread out far below. Next, descend into The Dubai Mall — not just a shopping centre but an experience in itself, housing an enormous aquarium and underwater zoo, an Olympic ice rink, and hundreds of the world's most prestigious brands. As evening falls, secure your position by the Dubai Fountain — the world's largest choreographed fountain — for the spectacular nightly show set to music in the shadow of the Burj Khalifa.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel",
      },
      {
        day: 3,
        title: "Old Dubai – Gold Souk, Spice Souk & Dubai Frame",
        route: "DEIRA & BUR DUBAI – OLD CITY AREAS",
        description:
          "Today we explore Old Dubai — the historic trading heart of a city that not long ago was a small fishing and pearl-diving village. Begin in Deira at the Gold Souk, where tonnes of gold jewellery glitter under the fluorescent lights of hundreds of shops in an old covered arcade. Steps away, the Spice Souk fills the air with the scent of frankincense, saffron, rose petals, and dried limes. Take an Abra (traditional wooden water taxi) across the Creek to Bur Dubai and explore the Al Fahidi Historical Neighbourhood — narrow wind-tower alleyways that give a glimpse of pre-oil Dubai. End the day at the Dubai Frame — a 150-metre picture frame building that offers views of both Old and New Dubai simultaneously.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel",
      },
      {
        day: 4,
        title: "Desert Safari – Dune Bashing, Camels & Bedouin BBQ",
        route: "DUBAI – ARABIAN DESERT (45-min drive from city)",
        description:
          "Afternoon transfer into the vast Arabian Desert for one of Dubai's most exhilarating experiences. Your 4×4 driver deflates the tyres and tackles the towering red sand dunes at high speed — dune bashing is a heart-pounding rush through a landscape of rolling red desert that stretches to the horizon. At a traditional Bedouin camp, try your hand at sandboarding, ride a camel across the dunes, and get your hands decorated with henna. As the sun sets over the desert in a blaze of orange and gold, settle into cushioned floor seating for a lavish BBQ dinner of grilled meats, mezze, and Arabic bread, with traditional belly dancing and Tanoura performances under the stars.",
        mealPlan: "Breakfast, Lunch, Dinner (BBQ)",
        accommodation: "4-Star Hotel",
      },
      {
        day: 5,
        title: "Abu Dhabi Day Trip – Sheikh Zayed Mosque & Louvre",
        route: "DUBAI – ABU DHABI (approx. 1.5-hr drive)",
        description:
          "A full-day excursion to Abu Dhabi — the UAE's capital and a striking contrast to glitzy Dubai. The centrepiece of the day is the Sheikh Zayed Grand Mosque — one of the largest and most beautiful mosques in the world, constructed from 82 white marble domes, over a thousand columns, and the world's largest hand-knotted carpet. The reflections in the surrounding pools at midday are breathtaking. After lunch, visit the Louvre Abu Dhabi — a stunning museum designed by Jean Nouvel with a lace-like dome that creates a 'rain of light' effect inside, housing a world-class collection of art spanning human history from every civilisation. Return to Dubai in the evening.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel",
      },
      {
        day: 6,
        title: "Dhow Cruise & Departure",
        route: "DUBAI CREEK – DUBAI INTERNATIONAL AIRPORT",
        description:
          "A relaxed final morning with time for any last shopping at the Mall of the Emirates or a visit to Atlantis Aquaventure waterpark (at extra cost). In the evening, board a traditional wooden dhow for a dinner cruise along Dubai Creek — gliding past the illuminated skyline of Deira and Bur Dubai as a buffet of Arabic and international dishes is served on deck. After the cruise, your driver transfers you to Dubai International Airport for your overnight flight back to Nairobi.",
        mealPlan: "Breakfast, Lunch, Dinner (dhow cruise)",
      },
    ],
  },

  {
    id: 10,
    slug: "zanzibar",
    country: "Tanzania",
    tripTypes: ["beach-holiday", "cultural"],
    name: "Zanzibar, Tanzania",
    description:
      "A tropical paradise with spice markets, pristine beaches, and rich Swahili heritage.",
    distance: "International",
    image: destZanzibar,
    category: "international",
    longDescription:
      "Zanzibar, the 'Spice Island' off the coast of Tanzania, enchants visitors with its powder-white beaches, crystal-clear waters, and UNESCO-listed Stone Town. This exotic archipelago offers a perfect blend of beach relaxation, water adventures, cultural exploration, and culinary delights influenced by Arab, Indian, and African traditions.",
    highlights: [
      "Stone Town UNESCO site",
      "Spice farm tours",
      "Nungwi & Kendwa beaches",
      "Swimming with dolphins",
      "Jozani Forest (Red Colobus monkeys)",
      "Prison Island tortoises",
    ],
    bestTime:
      "June to October (dry season); December to February for sunshine.",
    gallery: [
      destZanzibar,
      destDiani,
      destMaldives,
      destSeychelles,
      destMauritius,
      destLamu,
    ],
    price: 2200,
    duration: "6 Days / 5 Nights",
    accommodation: "Boutique beach resort",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Zanzibar (Abeid Amani Karume International Airport)",
      "All in-island transfers",
      "Accommodation at boutique beach resort (full-board, all meals & drinks)",
      "Guided Stone Town heritage walk",
      "Spice farm tour with tropical fruit tasting",
      "Dolphin watching excursion at Kizimkazi",
      "Jozani Forest guided walk (Red Colobus monkeys)",
      "Prison Island excursion (giant tortoises) & sunset dhow cruise",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Scuba diving (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town Heritage Walk",
        route: "NAIROBI – ZANZIBAR (approx. 2-hr flight) – STONE TOWN",
        description:
          "Fly from Nairobi to Zanzibar, arriving mid-morning. Transfer to Stone Town — the historic heart of Zanzibar City and a UNESCO World Heritage Site — for a guided walking tour before heading to your beach resort. Your guide leads you through the labyrinthine alleyways of Stone Town, past elaborately carved wooden doors (each one tells the story of its owner through its design), ancient mosques, the old Arab Fort, the House of Wonders, and the site of the former slave market. The atmosphere is extraordinary — the smell of cloves and cardamom, the call to prayer from a dozen minarets, and the colourful chaos of the Forodhani Night Market (evening, highly recommended). Late afternoon transfer to your north coast beach resort.",
        mealPlan: "Lunch, Dinner",
        accommodation: "Boutique Beach Resort, Nungwi",
      },
      {
        day: 2,
        title: "Spice Island Tour & Nungwi Beach",
        route: "NUNGWI – SPICE FARM – NUNGWI BEACH",
        description:
          "Morning visit to a traditional Zanzibar spice farm — Zanzibar was once the world's leading producer of cloves, and the island's spice farming heritage is central to its identity. Your guide leads you through the farm, identifying and tasting vanilla, cinnamon, cardamom, black pepper, nutmeg, and the famous Zanzibar clove, as well as tropical fruits like jackfruit, starfruit, and soursop. The afternoon is entirely dedicated to the extraordinary beach at Nungwi — clear turquoise water with no tides (thanks to the protected reef), white sand, and the gentle rocking of colourful outrigger fishing boats on the horizon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Beach Resort, Nungwi",
      },
      {
        day: 3,
        title: "Dolphins at Kizimkazi",
        route: "NUNGWI – KIZIMKAZI (south coast, 1.5-hr drive)",
        description:
          "Early morning departure to the south-west village of Kizimkazi, where Zanzibar's famous resident pod of spinner and humpback dolphins make their morning rounds in the warm coastal waters. Board a traditional dhow and head out to the dolphin grounds — when the pod is found, you have the option to slip into the water and snorkel alongside them as they play and feed in their natural environment. An extraordinary wildlife encounter just minutes offshore. Return to the north coast for a beach lunch, then a relaxed afternoon at the resort.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Beach Resort, Nungwi",
      },
      {
        day: 4,
        title: "Jozani Forest – Red Colobus Monkeys",
        route:
          "NUNGWI – JOZANI CHWAKA BAY NATIONAL PARK (centre of the island)",
        description:
          "Drive to Jozani Forest — Zanzibar's only national park and home to the highly endangered Zanzibar Red Colobus monkey, found nowhere else on earth. This beautiful endemic primate lives in family groups in the forest canopy and is surprisingly approachable, allowing for remarkable close-up viewing and photography. Your guide also identifies the forest's other wildlife — rare duikers, Sykes monkeys, and a magnificent diversity of birds — and explains the unique ecology of this ancient coastal forest with its mangrove boardwalk. Return via the scenic east coast past the iconic sandbars and turquoise flats of the East Coast.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Beach Resort, Nungwi",
      },
      {
        day: 5,
        title: "Prison Island & Sunset Dhow Cruise",
        route: "NUNGWI – PRISON ISLAND (CHANGUU) – ZANZIBAR CHANNEL",
        description:
          "Morning boat trip to Prison Island (Changuu Island) — a tiny coral islet 5 km north of Stone Town, originally built as a prison for rebellious slaves but never used as one. Today it is famous for a sanctuary of over 100 giant Aldabra tortoises, some over 100 years old, that roam freely across the island. Hand-feed these gentle ancient creatures and snorkel over the vibrant reef surrounding the island. In the late afternoon, a traditional wooden dhow sails into the golden sunset over the Zanzibar Channel — one of Africa's most iconic sunset settings — with cold drinks and light snacks served on deck.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Beach Resort, Nungwi",
      },
      {
        day: 6,
        title: "Final Morning Beach & Departure",
        route: "NUNGWI – ZANZIBAR AIRPORT – NAIROBI",
        description:
          "A slow, indulgent final morning at Nungwi Beach — swim one last time in the flat turquoise water, enjoy a long breakfast, and collect any final souvenirs from the beach craft market. Transfer to Zanzibar's Abeid Amani Karume International Airport for the early afternoon flight back to Nairobi. The 'Spice Island' sends you home with a full heart, a lingering scent of cloves, and the ambition to return.",
        mealPlan: "Breakfast, Brunch",
      },
    ],
  },

  {
    id: 11,
    slug: "maldives",
    country: "Maldives",
    tripTypes: ["beach-holiday", "luxury"],
    name: "Maldives",
    description:
      "The ultimate tropical paradise — overwater villas, turquoise lagoons, and world-class diving.",
    distance: "International",
    image: destMaldives,
    category: "international",
    longDescription:
      "The Maldives is a tropical nation of 1,190 coral islands grouped into 26 atolls, famous for its stunning overwater bungalows, crystal-clear lagoons, vibrant coral reefs, and unmatched luxury. It's the world's premier honeymoon destination and a diver's paradise with whale sharks, manta rays, and colorful reef life.",
    highlights: [
      "Overwater villa experience",
      "World-class diving & snorkeling",
      "Bioluminescent beaches",
      "Whale shark encounters",
      "Underwater restaurants",
      "Private island resorts",
    ],
    bestTime: "November to April (dry northeast monsoon season).",
    gallery: [
      destMaldives,
      destZanzibar,
      destDiani,
      destSeychelles,
      destMauritius,
      destLamu,
    ],
    price: 4500,
    duration: "6 Days / 5 Nights",
    accommodation: "Overwater bungalow",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Malé (Velana International Airport)",
      "Seaplane transfer to resort atoll",
      "Accommodation in overwater bungalow (full-board, all meals & drinks)",
      "Two-dive excursion at premier reef sites",
      "Island hopping excursion to local Maldivian islands",
      "Sunset dolphin watching cruise",
      "Traditional Maldivian line fishing evening",
      "Complimentary snorkeling gear & non-motorised water sports",
      "Government taxes, service charges and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Additional dive excursions (available at extra cost)",
      "Spa treatments (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Malé & Seaplane to Resort",
        route: "NAIROBI – MALÉ – RESORT ATOLL (seaplane, 20–45 min)",
        description:
          "Fly from Nairobi to Malé, arriving to the extraordinary experience of an island capital barely above sea level, surrounded by an ocean of impossible blue. Transfer to the seaplane terminal for what is itself one of the Maldives' most spectacular experiences — a low-level flight over the atolls, looking down on a patchwork of turquoise lagoons, dark reef rings, and white sandy islands that stretches to the horizon in every direction. Land beside your resort island and step off the seaplane onto a jetty leading to your overwater bungalow — glass floor panels revealing the reef below, a private deck over the lagoon, and a ladder directly into the warm sea. Settle in and enjoy a welcome dinner as the sun sets over the Indian Ocean.",
        mealPlan: "Dinner",
        accommodation: "Overwater Bungalow",
      },
      {
        day: 2,
        title: "House Reef Snorkeling & Lagoon Day",
        route: "RESORT ISLAND – HOUSE REEF",
        description:
          "Your first full day begins at the house reef — the coral reef surrounding the resort island that is accessible directly from the beach or your bungalow ladder. Spend the morning snorkeling among an extraordinary diversity of tropical fish, coral formations, turtles, and rays in water of 28–30°C and visibility of up to 30 metres. The Maldives has some of the highest marine biodiversity on earth, and even a casual snorkel reveals more colour and life than most people have ever seen underwater. The afternoon is at leisure — kayak the lagoon, paddleboard, or simply lie on the white sand and let the Indian Ocean do the rest.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Overwater Bungalow",
      },
      {
        day: 3,
        title: "Two-Dive Excursion – Premier Reef & Channel Sites",
        route: "RESORT – DIVE SITES (boat, 15–30 min)",
        description:
          "A guided two-dive excursion to some of the atoll's most spectacular dive sites. The morning dive visits a vibrant coral garden populated by Napoleon wrasse, turtles, reef sharks, and vast schools of fish. The second dive takes you to a channel site where the current brings pelagic life — manta rays, eagle rays, and occasionally whale sharks sweep through the blue water. Your PADI dive guides brief you thoroughly and accompany you throughout. Non-divers can join the boat and snorkel at the surface above the dive sites, often seeing much of the same marine life. Lunch back at the resort, followed by a relaxed afternoon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Overwater Bungalow",
      },
      {
        day: 4,
        title: "Island Hopping – Local Maldivian Islands",
        route: "RESORT – LOCAL ISLAND EXCURSION (boat)",
        description:
          "A morning boat excursion to a local inhabited Maldivian island — a fascinating contrast to the resort experience. Most visitors to the Maldives never see how local Maldivians actually live, but these compact, colourful islands are full of life — fishing boats, workshops where traditional dhoni vessels are built by hand, coral mosques, and the warmth of island hospitality. Visit the local market, try freshly made Maldivian snacks (tuna-based short eats and sweet coconut roti), and chat with locals in this friendly community. Return to the resort in the afternoon for a final swim in the lagoon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Overwater Bungalow",
      },
      {
        day: 5,
        title: "Sunset Dolphins & Traditional Night Fishing",
        route: "RESORT – OPEN OCEAN (boat, afternoon & evening)",
        description:
          "Spend a free morning doing whatever the Maldives does best — swimming, snorkeling, lying in a hammock over the lagoon, or simply staring at the horizon from your private deck with a cold drink. In the late afternoon, board a dhoni (traditional Maldivian sailboat) for a sunset dolphin cruise — large pods of spinner dolphins are regularly encountered spinning and leaping in the bow wave at dusk. As darkness falls, try traditional Maldivian line fishing — the simplest form of fishing with a hand line and hook — to catch reef fish that your chef can cook for you on return. The night sky over the middle of the Indian Ocean, far from any light pollution, is among the most spectacular on earth.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Overwater Bungalow",
      },
      {
        day: 6,
        title: "Final Morning Swim & Departure",
        route: "RESORT – MALÉ (seaplane) – NAIROBI",
        description:
          "A last, lingering morning in paradise. Take a final snorkel from your bungalow ladder, eat breakfast on your deck watching the lagoon, and take a thousand mental photographs of this extraordinary place. Seaplane transfer back to Malé and your connecting flight to Nairobi. The Maldives is one of those places that changes you — quieter, slower, more attuned to the water and the light. You will be back.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 12,
    slug: "cape-town",
    country: "South Africa",
    tripTypes: ["adventure", "cultural", "city-break"],
    name: "Cape Town, South Africa",
    description:
      "Where mountains meet the ocean — stunning landscapes, wine country, and vibrant culture.",
    distance: "International",
    image: destCapetown,
    category: "international",
    longDescription:
      "Cape Town is consistently rated one of the world's most beautiful cities, nestled between the iconic Table Mountain and the Atlantic Ocean. From wine tasting in Stellenbosch to cage diving with great white sharks at Gansbaai, Cape Town offers breathtaking natural beauty, rich history, world-class cuisine, and incredible adventures.",
    highlights: [
      "Table Mountain cable car",
      "Cape of Good Hope",
      "Robben Island",
      "Stellenbosch wine route",
      "Boulder's Beach penguins",
      "V&A Waterfront",
    ],
    bestTime:
      "October to March (South African summer) for warm, sunny weather.",
    gallery: [
      destCapetown,
      destDubai,
      destEgypt,
      destTurkey,
      destMaldives,
      destZanzibar,
    ],
    price: 3200,
    duration: "7 Days / 6 Nights",
    accommodation: "4-star boutique hotel",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Cape Town (Cape Town International Airport)",
      "All in-city & day-trip transfers",
      "Accommodation (full-board, all meals as per itinerary)",
      "Table Mountain cable car tickets",
      "Cape Peninsula full-day tour (Chapman's Peak, Cape of Good Hope, Boulder's Beach)",
      "Robben Island ferry & guided tour",
      "Stellenbosch & Franschhoek wine tasting day trip",
      "Shark cage diving excursion to Gansbaai",
      "Complimentary bottled drinking water",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Alcoholic beverages beyond included meals",
      "Helicopter tour (available at extra cost)",
      "Extra shopping & personal expenses",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & V&A Waterfront",
        route:
          "NAIROBI – CAPE TOWN INTERNATIONAL AIRPORT (approx. 5-hr flight)",
        description:
          "Fly from Nairobi to Cape Town, arriving in the afternoon. The approach into Cape Town is one of the most dramatic in the world — Table Mountain suddenly appearing through the clouds, flanked by the Twelve Apostles and Lion's Head, with the city and ocean laid out below. Transfer to your boutique hotel in the City Bowl or Sea Point area. After checking in, head to the V&A Waterfront — Cape Town's magnificent Victorian harbour development where restaurants, craft markets, museums, and world-class shopping sit alongside working fishing boats and the backdrop of Table Mountain across the water. Watch the sun set over the Atlantic from the harbour boardwalk.",
        mealPlan: "Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 2,
        title: "Table Mountain & Bo-Kaap",
        route: "CAPE TOWN – TABLE MOUNTAIN – BO-KAAP",
        description:
          "Take the iconic Table Mountain Aerial Cableway to the flat summit of one of the world's most recognisable natural landmarks — on a clear day, the views extend from the Cape Peninsula to the Hottentots Holland Mountains and across both the Atlantic and Indian Oceans simultaneously. Walk the summit trails among proteas and endemic fynbos, and spot rock hyraxes (dassies) sunning themselves on the boulders. In the afternoon, walk through Bo-Kaap — Cape Town's most colourful neighbourhood, with its candy-painted houses, cobblestone streets, and rich Cape Malay heritage. Visit the Bo-Kaap Museum and stop for freshly baked koesisters (Cape Malay doughnuts) from a local bakery.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 3,
        title: "Robben Island – A Powerful History",
        route: "V&A WATERFRONT – ROBBEN ISLAND (ferry, 30 min)",
        description:
          "Ferry to Robben Island — where Nelson Mandela spent 18 of his 27 years in prison and which has become one of the world's most important symbols of the struggle against oppression and the triumph of human dignity. The guided tour is conducted by a former political prisoner who shares the reality of life on the island with extraordinary emotional power. Visit Mandela's actual cell, the lime quarry where prisoners were forced to labour, and the general prison section. Return by ferry in the early afternoon with a deeper understanding of South Africa's extraordinary journey from apartheid to democracy. Afternoon free for Company's Garden or District Six Museum.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 4,
        title: "Cape Peninsula – Chapman's Peak, Cape Point & Penguins",
        route: "CAPE TOWN – CAPE PENINSULA (full day)",
        description:
          "A full-day drive along one of the most spectacular coastal roads in the world. Begin with the legendary Chapman's Peak Drive — a narrow road carved into the sheer cliff face above the Atlantic, with 114 curves over 9 kilometres. Continue south to the Cape of Good Hope — the south-western tip of the African continent and the point where the Atlantic and Indian Oceans meet — where dramatic cliffs plunge into churning seas and baboons roam the fynbos. On the return, stop at Boulders Beach near Simon's Town — home to a colony of over 3,000 African penguins that waddle along the beach and swim in the sheltered cove entirely unperturbed by human company.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 5,
        title: "Shark Cage Diving at Gansbaai",
        route: "CAPE TOWN – GANSBAAI (approx. 2-hr drive)",
        description:
          "Early morning departure for Gansbaai — the great white shark capital of the world. The stretch of ocean between Dyer Island and Geyser Rock, known as 'Shark Alley', is home to the highest concentration of great white sharks anywhere on earth. Suit up in a wetsuit and lower yourself into the cage submerged from the side of the research vessel — great whites approach to within arm's reach, circling the cage with their extraordinary power and presence. No diving experience is necessary. Non-cage-divers can watch from the boat deck where the sharks are clearly visible circling on the surface. Return to Cape Town in the afternoon — exhilarated.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 6,
        title: "Winelands – Stellenbosch & Franschhoek",
        route: "CAPE TOWN – STELLENBOSCH – FRANSCHHOEK (45-min drive)",
        description:
          "A day in the Cape Winelands — among the most beautiful wine regions in the world. The Franschhoek Valley is a patchwork of vineyards backed by dramatic mountain amphitheatres, and the town itself is a charming mix of French Huguenot heritage, world-class restaurants, and acclaimed wine estates. Visit two or three estates for guided cellar tours and structured wine tastings — Stellenbosch's robust Cabernets and Franschhoek's elegant Chardonnays and Cap Classiques (Champagne-method sparkling wines) are particular highlights. A gourmet lunch at one of Franschhoek's celebrated restaurants rounds off a truly indulgent day.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Boutique Hotel",
      },
      {
        day: 7,
        title: "Final Morning & Departure",
        route: "CAPE TOWN – CAPE TOWN INTERNATIONAL AIRPORT – NAIROBI",
        description:
          "A free final morning in Cape Town — perhaps a last coffee at a Sea Point café watching the Atlantic, a walk along the promenade with Table Mountain behind you, or last-minute shopping at the Old Biscuit Mill craft market (Saturdays) or Greenmarket Square. Transfer to Cape Town International Airport for your afternoon flight back to Nairobi. Cape Town is frequently described as the most beautiful city in the world — it is hard to argue as you watch the mountain and the ocean disappear below the aircraft.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 13,
    slug: "egypt",
    country: "Egypt",
    tripTypes: ["cultural", "adventure"],
    name: "Egypt",
    description:
      "Walk among the ancient pyramids, cruise the Nile, and explore pharaonic wonders.",
    distance: "International",
    image: destEgypt,
    category: "international",
    longDescription:
      "Egypt is a living museum of ancient civilization, home to the Great Pyramids of Giza, the Sphinx, and the treasures of Tutankhamun. A Nile cruise from Luxor to Aswan reveals magnificent temples, while Cairo's bustling markets and Alexandria's Mediterranean charm complete this timeless journey through 5,000 years of history.",
    highlights: [
      "Great Pyramids of Giza",
      "The Sphinx",
      "Nile River cruise",
      "Valley of the Kings",
      "Luxor & Karnak Temples",
      "Egyptian Museum",
    ],
    bestTime: "October to April for cooler, comfortable temperatures.",
    gallery: [
      destEgypt,
      destDubai,
      destTurkey,
      destCapetown,
      destMaldives,
      destZanzibar,
    ],
    price: 3500,
    duration: "8 Days / 7 Nights",
    accommodation: "4-star hotel (Cairo) + 4-star Nile cruise ship",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Cairo (Cairo International Airport)",
      "Domestic flight Cairo–Luxor",
      "All in-city and cruise transfers",
      "Accommodation (Cairo hotel full-board + 3-night Nile cruise all-inclusive)",
      "Egyptologist guide throughout",
      "Giza Pyramids & Sphinx guided tour",
      "Egyptian Museum visit (Tutankhamun collection)",
      "Karnak & Luxor Temples",
      "Valley of the Kings (West Bank)",
      "Philae Temple & High Dam (Aswan)",
      "All Nile cruise meals and excursions",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Visa fees (Egypt e-visa, approx. USD 25)",
      "Alcoholic beverages",
      "Hot air balloon Luxor (available at extra cost ~USD 100/person)",
      "Camera fees at certain monuments",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        route: "NAIROBI – CAIRO INTERNATIONAL AIRPORT (approx. 5-hr flight)",
        description:
          "Fly from Nairobi to Cairo, arriving in the evening. Your Egyptologist guide and driver meet you at the airport and transfer you to your hotel in central Cairo or Giza. If arriving in time, a stroll along the Nile Corniche at night — with the city lights reflected in the river and the sounds of Cairo's famous evening energy filling the air — is a compelling introduction to the ancient capital. Dinner at the hotel and briefing from your guide on the extraordinary days ahead.",
        mealPlan: "Dinner",
        accommodation: "4-Star Hotel, Cairo",
      },
      {
        day: 2,
        title: "Giza Pyramids, Sphinx & Egyptian Museum",
        route: "CAIRO – GIZA PLATEAU",
        description:
          "The morning begins at the Giza Plateau — one of the most extraordinary human achievements in history. The Great Pyramid of Khufu, built c. 2560 BC and still one of the world's tallest structures, rises above the desert with a scale that photographs simply cannot convey. Your Egyptologist explains the astonishing engineering feats, astronomical alignments, and historical context behind the three pyramids and the Valley Temples. An optional camel ride around the plateau puts the scale in perspective. The Great Sphinx — 73 metres long and carved from a single limestone outcrop — guards the plateau complex. In the afternoon, the Egyptian Museum in Tahrir Square houses the most important collection of ancient Egyptian artefacts in the world — including the complete treasury of Tutankhamun's tomb.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Cairo",
      },
      {
        day: 3,
        title: "Cairo Highlights – Citadel, Khan el-Khalili & Nile Dinner",
        route: "CAIRO – ISLAMIC CAIRO – NILE CORNICHE",
        description:
          "A day in Islamic Cairo — the medieval heart of the city. Visit the Saladin Citadel, a medieval Islamic fortification built in the 12th century that dominates the Cairo skyline, and the magnificent Muhammad Ali Mosque within it. Walk through the Al-Azhar district — one of the oldest continuously operating universities in the world, founded in 970 AD. The afternoon is spent in Khan el-Khalili — one of the world's great bazaars, where the medieval market tradition has been continuous for 700 years. Narrow lanes are packed with goldsmiths, spice merchants, perfumers, and carpet sellers in a sensory overwhelming experience. Dinner is a sunset Nile dinner cruise with Egyptian music.",
        mealPlan: "Breakfast, Lunch, Dinner (Nile cruise)",
        accommodation: "4-Star Hotel, Cairo",
      },
      {
        day: 4,
        title: "Fly to Luxor & Board Nile Cruise",
        route: "CAIRO – LUXOR (domestic flight) – NILE CRUISE EMBARKATION",
        description:
          "Morning domestic flight to Luxor — ancient Thebes, capital of Egypt at the height of its New Kingdom power from 1550–1069 BC. Board your comfortable Nile cruise ship and enjoy lunch on deck as the vessel moves through Luxor. In the afternoon, visit Karnak Temple Complex — the largest religious building ever constructed, developed over 2,000 years and covering an area of 200 acres. The Avenue of Sphinxes, the Great Hypostyle Hall with its 134 towering columns, and the sacred lake create an atmosphere of extraordinary ancient grandeur. As evening falls, Luxor Temple — lit up dramatically at night along the Nile — is equally mesmerising.",
        mealPlan: "Breakfast, Lunch, Dinner (on board)",
        accommodation: "4-Star Nile Cruise Ship",
      },
      {
        day: 5,
        title: "Valley of the Kings & West Bank",
        route: "LUXOR WEST BANK – VALLEY OF THE KINGS",
        description:
          "Cross the Nile to the West Bank for a full morning in Egypt's greatest royal necropolis. The Valley of the Kings was the burial place of Egypt's New Kingdom pharaohs for nearly 500 years — 63 tombs have been discovered here, including Tutankhamun's (found by Howard Carter in 1922). Entry includes three tombs from a rotating selection, their walls covered in intricate painted hieroglyphic inscriptions and scenes from the afterlife in colours that have barely faded in 3,000 years. Visit the mortuary temple of Queen Hatshepsut — Egypt's most powerful female pharaoh — and the Colossi of Memnon, two massive 18-metre seated statues that once guarded her mortuary temple. Sail south in the afternoon.",
        mealPlan: "Breakfast, Lunch, Dinner (on board)",
        accommodation: "4-Star Nile Cruise Ship",
      },
      {
        day: 6,
        title: "Edfu & Kom Ombo Temples",
        route: "LUXOR – EDFU – KOM OMBO (sailing)",
        description:
          "A magical day of Nile sailing and temple exploration. Moor at Edfu to visit the Temple of Horus — the best-preserved temple in all of Egypt, built between 237 and 57 BC and dedicated to the falcon-headed god of the sky. Its towering entrance pylons and inner sanctuary give the most complete picture of an intact Egyptian temple anywhere in the country. Continue south to Kom Ombo — a unique double temple dedicated simultaneously to the crocodile god Sobek and the falcon god Haroeris, perched dramatically on a bend in the Nile with views of Nubian villages and sugarcane fields stretching to the desert edge.",
        mealPlan: "Breakfast, Lunch, Dinner (on board)",
        accommodation: "4-Star Nile Cruise Ship",
      },
      {
        day: 7,
        title: "Aswan – High Dam, Philae Temple & Felucca",
        route: "ASWAN – HIGH DAM – PHILAE ISLAND",
        description:
          "Arrive in Aswan — Egypt's most laid-back and beautiful city, where the Nile narrows between granite boulders and the desert meets lush palm-fringed islands. Visit the Aswan High Dam — the colossal engineering project completed in 1971 that created Lake Nasser (one of the world's largest man-made lakes) and required the relocation of the Abu Simbel temples. Boat across to the island of Philae for the Temple of Isis — relocated stone by stone to save it from the rising waters of Lake Nasser in one of history's greatest archaeological rescue operations. In the evening, hire a traditional felucca sailboat for a sunset cruise among Aswan's islands, watching the Nubian villages and palm groves drift past.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Aswan",
      },
      {
        day: 8,
        title: "Return Flight & Departure to Nairobi",
        route: "ASWAN – CAIRO – NAIROBI",
        description:
          "A free morning in Aswan — perhaps visit the Nubian Museum (the finest collection of Nubian artefacts in the world) or the Unfinished Obelisk in the granite quarry, where you can see how the ancient Egyptians carved these monumental structures from solid rock. Fly from Aswan to Cairo for your connecting flight back to Nairobi. Eight extraordinary days immersed in 5,000 years of human history come to a close — but ancient Egypt, once encountered, never quite leaves you.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },

  {
    id: 14,
    slug: "turkey",
    country: "Turkey",
    tripTypes: ["cultural", "adventure"],
    name: "Turkey",
    description:
      "Where East meets West — hot air balloons, ancient ruins, bazaars, and stunning coastlines.",
    distance: "International",
    image: destTurkey,
    category: "international",
    longDescription:
      "Turkey bridges two continents, offering an extraordinary mix of ancient history, vibrant culture, and natural wonders. From the surreal fairy chimneys and hot air balloons of Cappadocia to the grandeur of Istanbul's Hagia Sophia and Blue Mosque, Turkey captivates every traveler with its cuisine, hospitality, and diverse landscapes.",
    highlights: [
      "Cappadocia hot air balloons",
      "Hagia Sophia & Blue Mosque",
      "Grand Bazaar Istanbul",
      "Pamukkale thermal pools",
      "Ephesus ancient city",
      "Bosphorus cruise",
    ],
    bestTime: "April to June and September to November for mild weather.",
    gallery: [
      destTurkey,
      destEgypt,
      destDubai,
      destCapetown,
      destMaldives,
      destZanzibar,
    ],
    price: 3200,
    duration: "8 Days / 7 Nights",
    accommodation: "4-star hotels + cave hotel in Cappadocia",
    mealBasis: "Full Board – Dinner, Bed, Breakfast & Lunch",
    includes: [
      "Return flights Nairobi–Istanbul (Istanbul Airport)",
      "Domestic flights Istanbul–Cappadocia and Cappadocia–Izmir",
      "All in-city & day-trip transfers",
      "Accommodation (full-board, all meals as per itinerary)",
      "Cappadocia hot air balloon ride at dawn",
      "Istanbul guided tour (Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar)",
      "Bosphorus cruise",
      "Göreme Open Air Museum & Cappadocia valleys hike",
      "Ephesus ancient city guided tour",
      "Pamukkale travertine pools & Hierapolis",
      "Government taxes and VAT",
    ],
    excludes: [
      "Personal travel insurance and medical inoculations",
      "Turkish visa (e-visa, approx. USD 50)",
      "Alcoholic beverages",
      "Turkish bath (hamam) experience (available at extra cost)",
      "Extra activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Istanbul",
        route: "NAIROBI – ISTANBUL AIRPORT (approx. 7-hr flight)",
        description:
          "Fly from Nairobi to Istanbul — a city that has been the capital of three great empires (Roman, Byzantine, Ottoman) and remains one of the world's most layered and captivating cities. Arrive in the evening and transfer to your hotel in the historic Sultanahmet district. If you arrive before midnight, a walk around Sultanahmet Square is irresistible — the floodlit minarets of the Blue Mosque and the dome of Hagia Sophia side by side in the night sky is one of the most beautiful urban scenes in the world.",
        mealPlan: "Dinner",
        accommodation: "4-Star Hotel, Istanbul (Sultanahmet)",
      },
      {
        day: 2,
        title: "Historic Istanbul – Hagia Sophia, Blue Mosque & Topkapi",
        route: "SULTANAHMET HISTORICAL PENINSULA",
        description:
          "A full day in the extraordinary concentration of world heritage sites in Sultanahmet. Begin at Hagia Sophia — built as a Byzantine Christian cathedral in 537 AD, converted to a mosque in 1453, made a museum in 1934, and reconverted to a mosque in 2020. Its vast dome, floating above the nave on seemingly weightless pendentives, has inspired architects for 1,500 years. Across the square, the Blue Mosque (Sultan Ahmed Mosque) is famous for its six minarets and 21,000 hand-painted blue İznik tiles covering the interior. Visit Topkapi Palace — the magnificent administrative centre of the Ottoman Empire for 400 years — and the Basilica Cistern, an underground Roman reservoir held up by 336 marble columns.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Istanbul",
      },
      {
        day: 3,
        title: "Grand Bazaar, Spice Bazaar & Bosphorus Cruise",
        route: "ISTANBUL – GRAND BAZAAR – BOSPHORUS",
        description:
          "Morning in the Grand Bazaar — one of the world's oldest and largest covered markets, with over 4,000 shops in a labyrinthine complex of 61 covered streets that has been operating continuously since 1461. Carpets, ceramics, jewellery, leather goods, spices, and Turkish lamps fill every corner in a sensory overwhelming but wonderful experience. Walk to the Spice Bazaar (Egyptian Bazaar) along the Golden Horn for saffron, Turkish delight, dried fruits, and every spice imaginable. After lunch, board a public ferry for a classic Bosphorus cruise — the 32-kilometre strait connecting the Black Sea to the Marmara, dividing Europe and Asia, with Ottoman palaces, fortresses, and wooden waterfront mansions (yalılar) on both banks.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Istanbul",
      },
      {
        day: 4,
        title: "Fly to Cappadocia – Fairy Chimneys at Sunset",
        route: "ISTANBUL – CAPPADOCIA (domestic flight, 1.5 hrs) – GÖREME",
        description:
          "Fly to Kayseri or Nevsehir and transfer to Göreme — the heart of Cappadocia. Nothing quite prepares you for the first sight of Cappadocia's landscape — a surreal lunar terrain of cone-shaped 'fairy chimneys,' cave churches, and ancient underground cities, all carved from volcanic tufa rock over millions of years and shaped into dwellings by civilisations stretching back to the Hittites. Check into your unique cave hotel — rooms carved from the soft rock maintain a constant temperature and create an atmospheric sleeping experience unlike anywhere else in the world. Sunset from the Love Valley viewpoint is extraordinary.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Cave Hotel, Cappadocia",
      },
      {
        day: 5,
        title: "Hot Air Balloon at Dawn & Valleys Exploration",
        route: "CAPPADOCIA – GÖREME OPEN AIR MUSEUM & VALLEYS",
        description:
          "Rise at 4:30 am for the experience Cappadocia is world-famous for. As the sun rises, up to 100 colourful hot air balloons ascend simultaneously above the fairy chimneys in a spectacle that is quite simply one of the most beautiful things you will ever see. Your balloon drifts silently over the fairy chimney valleys — Rose Valley, Pigeon Valley, Love Valley — in the golden morning light for approximately one hour, before a champagne celebration on landing. After a late breakfast, visit the Göreme Open Air Museum — a UNESCO World Heritage Site of rock-cut Byzantine churches from the 10th–12th centuries, their interiors covered in remarkable Byzantine frescoes. Hike Rose Valley in the afternoon.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "Cave Hotel, Cappadocia",
      },
      {
        day: 6,
        title: "Underground Cities & Fly to Izmir",
        route: "CAPPADOCIA – DERINKUYU – IZMIR (domestic flight)",
        description:
          "Morning visit to Derinkuyu Underground City — one of 36 known underground cities in Cappadocia, carved up to 85 metres deep into the volcanic rock and capable of sheltering 20,000 people with their livestock and provisions. Used as refuges from Roman and Arab invasions between the 7th and 12th centuries AD, the multilevel complexes have ventilation shafts, wells, kitchens, churches, and living quarters — an astonishing feat of ancient engineering. Afternoon flight to Izmir on the Aegean coast, transfer to your hotel near Pamukkale or Selçuk.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Aegean Region",
      },
      {
        day: 7,
        title: "Ephesus & Pamukkale",
        route: "SELÇUK – EPHESUS – PAMUKKALE",
        description:
          "Begin at Ephesus — the best-preserved ancient Greek and Roman city in the world, once a metropolis of 250,000 people. Walk the marble-paved Curetes Street past the Library of Celsus (one of antiquity's most beautiful buildings), the 25,000-seat Great Theatre, the Terrace Houses (where wealthy Ephesians lived in multi-story mansions with sophisticated heating systems), and the Temple of Hadrian. Your guide brings the city to life with vivid historical context. Drive to Pamukkale — a geological wonder where mineral-rich thermal waters cascade over white travertine terraces, creating a landscape of otherworldly frozen-looking pools and waterfalls. Bathe in the warm mineral pools at the top of the terraces before visiting the ancient Roman spa city of Hierapolis directly above.",
        mealPlan: "Breakfast, Lunch, Dinner",
        accommodation: "4-Star Hotel, Aegean Region",
      },
      {
        day: 8,
        title: "Return to Istanbul & Departure",
        route: "IZMIR – ISTANBUL – NAIROBI",
        description:
          "Morning flight from Izmir back to Istanbul for your connecting flight to Nairobi. If you have a few hours in Istanbul airport, the airport itself — one of the world's most spectacular — is worth exploring, with its grand atrium and extraordinary collection of Turkish culinary offerings. Fly back to Nairobi in the evening, carrying eight days of extraordinary experiences spanning two continents, six millennia of human history, and some of the world's most remarkable landscapes.",
        mealPlan: "Breakfast, Lunch",
      },
    ],
  },
];

export const themedHolidays = [
  {
    title: "Honeymoon & Anniversaries",
    description: "Romantic escapes crafted for couples",
    icon: "Heart",
    slugs: ["maldives", "zanzibar", "seychelles", "mauritius"],
  },
  {
    title: "Beach Holidays",
    description: "Sun, sand, and turquoise waters",
    icon: "Umbrella",
    slugs: [
      "diani-beach",
      "mombasa",
      "zanzibar",
      "maldives",
      "seychelles",
      "lamu",
      "malindi",
      "mauritius",
    ],
  },
  {
    title: "Wildlife Safaris",
    description: "Up close with Africa's Big Five",
    icon: "Binoculars",
    slugs: ["maasai-mara", "serengeti", "amboseli", "samburu"],
  },
  {
    title: "Adventure Tours",
    description: "Thrilling experiences for the bold",
    icon: "Mountain",
    slugs: ["turkey", "cape-town", "dubai"],
  },
  {
    title: "Cultural & Historical",
    description: "Ancient wonders and living traditions",
    icon: "Landmark",
    slugs: ["egypt", "turkey", "zanzibar", "lamu"],
  },
  {
    title: "Luxury Getaways",
    description: "Exclusive indulgence and premium comfort",
    icon: "Crown",
    slugs: ["maldives", "dubai", "seychelles", "mauritius"],
  },
];

export const testimonials = [
  {
    quote:
      "The safari was an unforgettable experience! Everything was so well-organized.",
    author: "John Doe",
  },
  {
    quote: "Breathtaking destinations and excellent service. Highly recommend!",
    author: "Jane Smith",
  },
  {
    quote:
      "The trip was seamless and beyond my expectations. Kudos to the team!",
    author: "Michael Lee",
  },
  {
    quote:
      "Our Dubai trip was absolutely magical. The desert safari was a highlight!",
    author: "Sarah Wanjiku",
  },
  {
    quote:
      "Zanzibar was paradise on earth. Can't wait to book the Maldives next!",
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
    answer:
      "Our safari packages typically include accommodation, meals, park entrance fees, guided game drives, and airport transfers. Specific inclusions vary by package.",
  },
  {
    question: "How do I book a safari?",
    answer:
      "You can book through our website using the Book page, email us at contact@msafari-tribe.com, or contact us via the Contact page. We'll help customize your perfect trip.",
  },
  {
    question: "What is the best time to go on safari?",
    answer:
      "The best time depends on the destination. For the Maasai Mara, July–October is ideal for the Great Migration. For Amboseli, January–February offers clear views of Kilimanjaro.",
  },
  {
    question: "Do I need a visa to visit Kenya or Tanzania?",
    answer:
      "Most visitors need a visa. Kenya and Tanzania both offer e-visas that can be obtained online before travel. We can assist with visa guidance.",
  },
  {
    question: "Do you offer international trip packages?",
    answer:
      "Yes! We offer curated packages to Dubai, Maldives, Egypt, Turkey, Cape Town, and Zanzibar, each with a detailed itinerary tailored to the destination.",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Pack lightweight, neutral-colored clothing, comfortable walking shoes, sunscreen, insect repellent, binoculars, a camera, and a hat. We provide a detailed packing list upon booking.",
  },
  {
    question: "Are safaris safe?",
    answer:
      "Yes, our safaris are conducted with experienced guides who prioritize safety. We follow all park regulations and use well-maintained vehicles.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Absolutely! We specialize in tailored experiences. Contact us with your preferences, budget, and travel dates, and we'll craft a personalized itinerary just for you.",
  },
];
