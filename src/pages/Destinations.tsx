import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Globe, Palmtree, TreePine, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { destinations, themedHolidays, DestinationCategory } from "@/lib/data";
=======
import { destinations, themedHolidays, tripTypes, DestinationCategory, TripType } from "@/lib/data";
>>>>>>> 3478804c (update project)
import { Slider } from "@/components/ui/slider";

const categories: { key: DestinationCategory | "all"; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All Destinations", icon: Globe },
  { key: "local", label: "Local Safaris", icon: TreePine },
  { key: "beach", label: "Beach Holidays", icon: Palmtree },
  { key: "international", label: "International", icon: Globe },
];

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as DestinationCategory | null;
  const themeParam = searchParams.get("theme");
<<<<<<< HEAD
=======
  const tripTypeParam = searchParams.get("tripType") as TripType | null;
>>>>>>> 3478804c (update project)

  const [activeCategory, setActiveCategory] = useState<DestinationCategory | "all">(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const allPrices = destinations.map((d) => d.packages.basic.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  const themeSlugs = useMemo(() => {
    if (!themeParam) return null;
    const theme = themedHolidays.find(
      (t) => t.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") === themeParam
    );
    return theme?.slugs || null;
  }, [themeParam]);

  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
  }, [categoryParam]);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      if (themeSlugs) return themeSlugs.includes(d.slug);
      const matchCategory = activeCategory === "all" || d.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = d.packages.basic.price >= priceRange[0] && d.packages.basic.price <= priceRange[1];
<<<<<<< HEAD
      return matchCategory && matchSearch && matchPrice;
    });
  }, [activeCategory, searchQuery, priceRange, themeSlugs]);
=======
      const matchTripType = !tripTypeParam || d.tripTypes.includes(tripTypeParam);
      return matchCategory && matchSearch && matchPrice && matchTripType;
    });
  }, [activeCategory, searchQuery, priceRange, themeSlugs, tripTypeParam]);
>>>>>>> 3478804c (update project)

  const activeThemeTitle = themeParam
    ? themedHolidays.find(
        (t) => t.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") === themeParam
      )?.title
<<<<<<< HEAD
=======
    : tripTypeParam
    ? tripTypes.find(t => t.key === tripTypeParam)?.label
>>>>>>> 3478804c (update project)
    : null;

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
              {activeThemeTitle || "Destinations"}
            </h1>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              {activeThemeTitle
                ? `Explore our curated ${activeThemeTitle.toLowerCase()} destinations`
                : "From local wildlife safaris to exotic international getaways — explore hand-picked destinations for every traveler."}
            </p>
          </AnimatedSection>

          {!themeSlugs && (
            <AnimatedSection delay={100}>
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-11 pr-12 h-12 rounded-full border-2 focus-visible:ring-primary"
                  />
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${
                      showFilters ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <SlidersHorizontal size={18} />
                  </button>
                </div>

                {showFilters && (
                  <div className="mt-4 p-5 bg-muted/50 rounded-xl animate-fade-in">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold">Price Range (from)</span>
                      <span className="text-sm text-muted-foreground">${priceRange[0]} — ${priceRange[1]}</span>
                    </div>
                    <Slider
                      min={minPrice}
                      max={maxPrice}
                      step={50}
                      value={priceRange}
                      onValueChange={(val) => setPriceRange(val as [number, number])}
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.key
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <cat.icon size={16} />
                    {cat.label}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          )}

          {themeSlugs && (
            <AnimatedSection>
              <div className="text-center mb-8">
                <Link to="/destinations">
                  <Button variant="outline" size="sm">← View All Destinations</Button>
                </Link>
              </div>
            </AnimatedSection>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((d, i) => (
              <AnimatedSection key={d.id} delay={(i % 3) * 100}>
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full capitalize">
                      {d.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{d.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{d.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-safari-warm">From ${d.packages.basic.price}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {d.category === "international" ? "International" : d.distance}
                      </span>
                    </div>
                    <Link to={`/destinations/${d.slug}`}>
                      <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-2">No destinations found.</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([minPrice, maxPrice]);
                  setActiveCategory("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
