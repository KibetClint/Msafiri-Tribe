import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface UpcomingDestination {
  id: number;
  name: string;
  country: string;
  description: string;
  /**
   * Either an ISO date string ("2026-09-15") for exact-date countdown,
   * or a freeform label ("Q3 2026", "Coming Soon") as a fallback.
   */
  launchDate: string;
  tag: string;
  imageUrl: string;
  /**
   * When populated (from an existing destination), clicking the card on the
   * home page navigates to /destinations/:slug. Leave empty for custom entries.
   */
  slug?: string;
  /** Price for Kenyan residents in KES */
  localPrice?: number;
  /** Price for international visitors in USD (converted via currency context on display) */
  foreignerPrice?: number;
  /** Discount percentage, e.g. 20 = 20% off */
  discountPercent?: number;
  /** Short offer label shown on the badge, e.g. "Early Bird", "Group Deal" */
  offerLabel?: string;
  /** ISO date when the offer/discount expires, e.g. "2026-07-31" */
  offerExpiry?: string;
}

interface UpcomingCtx {
  upcoming: UpcomingDestination[];
  addUpcoming: (d: Omit<UpcomingDestination, "id">) => void;
  updateUpcoming: (d: UpcomingDestination) => void;
  deleteUpcoming: (id: number) => void;
}

const UpcomingDestinationsContext = createContext<UpcomingCtx>({
  upcoming: [],
  addUpcoming: () => {},
  updateUpcoming: () => {},
  deleteUpcoming: () => {},
});

const STORAGE_KEY = "msafiri_upcoming_destinations";

const defaultUpcoming: UpcomingDestination[] = [
  {
    id: 1,
    name: "Gorilla Trekking — Bwindi",
    country: "Uganda",
    description:
      "Trek deep into ancient rainforest to encounter mountain gorillas face to face.",
    launchDate: "2026-09-01",
    tag: "Adventure",
    imageUrl: "",
  },
  {
    id: 2,
    name: "Lamu Archipelago",
    country: "Kenya",
    description:
      "Sail between spice-scented islands on hand-carved dhows at golden hour.",
    launchDate: "2026-11-15",
    tag: "Beach",
    imageUrl: "",
  },
  {
    id: 3,
    name: "Victoria Falls",
    country: "Zimbabwe / Zambia",
    description:
      "Stand at the edge of the world's largest waterfall — the smoke that thunders.",
    launchDate: "2027-03-01",
    tag: "Safari",
    imageUrl: "",
  },
];

export const UpcomingDestinationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [upcoming, setUpcoming] = useState<UpcomingDestination[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultUpcoming;
    } catch {
      return defaultUpcoming;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(upcoming));
  }, [upcoming]);

  const addUpcoming = (d: Omit<UpcomingDestination, "id">) => {
    setUpcoming((prev) => [...prev, { ...d, id: Date.now() }]);
  };

  const updateUpcoming = (d: UpcomingDestination) => {
    setUpcoming((prev) => prev.map((u) => (u.id === d.id ? d : u)));
  };

  const deleteUpcoming = (id: number) => {
    setUpcoming((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <UpcomingDestinationsContext.Provider
      value={{ upcoming, addUpcoming, updateUpcoming, deleteUpcoming }}>
      {children}
    </UpcomingDestinationsContext.Provider>
  );
};

export const useUpcomingDestinations = () =>
  useContext(UpcomingDestinationsContext);
