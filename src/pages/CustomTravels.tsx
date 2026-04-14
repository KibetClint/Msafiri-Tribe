// src/pages/CustomTravels.tsx
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/lib/data";
import {
  CheckCircle,
  CreditCard,
  Shield,
  Clock,
  Users,
  Star,
  Plane,
  CalendarDays,
  Utensils,
  Camera,
  Tent,
  Baby,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCurrencyContext } from "@/context/CurrencyContext";

// ─── Constants ────────────────────────────────────────────────────────────────

const installmentPlans = [
  { months: 3, label: "3 Months", discount: 0 },
  { months: 6, label: "6 Months", discount: 0 },
  { months: 12, label: "12 Months", discount: 5 },
];

const memberBenefits = [
  {
    icon: CreditCard,
    title: "Flexible Payments",
    desc: "Split your trip into easy monthly installments — zero interest, zero hidden fees.",
  },
  {
    icon: Shield,
    title: "Price Lock Guarantee",
    desc: "Lock today's price even if rates rise before your departure.",
  },
  {
    icon: Clock,
    title: "Early Access",
    desc: "Priority booking on new destinations and exclusive seasonal deals.",
  },
  {
    icon: Users,
    title: "Group Discounts",
    desc: "Bring friends or family and unlock group rate savings automatically.",
  },
  {
    icon: Star,
    title: "Loyalty Rewards",
    desc: "Earn points on every trip redeemable for free upgrades and add-ons.",
  },
  {
    icon: Baby,
    title: "Family-Friendly",
    desc: "Dedicated family packages with kid-safe activities, meals, and accommodations.",
  },
];

// Each tier: multiplier on the base package price so we don't duplicate data
const tiers = [
  {
    key: "basic" as const,
    label: "Basic",
    multiplier: 1.0,
    color: "bg-muted text-muted-foreground",
    active: "bg-primary text-primary-foreground",
    badge: null,
    itinerary: [
      {
        day: 1,
        icon: Plane,
        title: "Arrival & Check-in",
        detail:
          "Airport pickup, hotel check-in, orientation briefing and welcome dinner.",
      },
      {
        day: 2,
        icon: Camera,
        title: "Guided Day Tour",
        detail:
          "Full-day guided tour of the main attraction with a certified local guide.",
      },
      {
        day: 3,
        icon: Utensils,
        title: "Cultural Experience",
        detail:
          "Local cuisine tasting, market visit, and community interaction session.",
      },
      {
        day: 4,
        icon: Plane,
        title: "Departure",
        detail: "Leisurely breakfast, check-out, and airport transfer.",
      },
    ],
  },
  {
    key: "silver" as const,
    label: "Silver",
    multiplier: 1.5,
    color: "bg-muted text-muted-foreground",
    active: "bg-secondary text-secondary-foreground",
    badge: "Popular",
    itinerary: [
      {
        day: 1,
        icon: Plane,
        title: "VIP Arrival",
        detail:
          "Private airport transfer, premium hotel check-in, champagne welcome.",
      },
      {
        day: 2,
        icon: Camera,
        title: "Wildlife Safari",
        detail:
          "Morning and evening game drives with a professional wildlife ranger.",
      },
      {
        day: 3,
        icon: Tent,
        title: "Bush Camp Experience",
        detail: "Overnight stay in a luxury tented camp under the African sky.",
      },
      {
        day: 4,
        icon: Utensils,
        title: "Farm-to-Table Dinner",
        detail:
          "Exclusive dinner at a scenic viewpoint with live cultural performances.",
      },
      {
        day: 5,
        icon: CalendarDays,
        title: "Leisure & Spa",
        detail:
          "Free morning for personal activities, spa access, afternoon nature walk.",
      },
      {
        day: 6,
        icon: Plane,
        title: "Departure",
        detail:
          "Private transfer, lounge access, and personalised farewell gifts.",
      },
    ],
  },
  {
    key: "premium" as const,
    label: "Premium",
    multiplier: 2.2,
    color: "bg-muted text-muted-foreground",
    active: "bg-safari-warm text-white",
    badge: "Best Value",
    itinerary: [
      {
        day: 1,
        icon: Plane,
        title: "Private Jet Arrival",
        detail:
          "Helicopter or private jet transfer, 5-star resort check-in, butler assigned.",
      },
      {
        day: 2,
        icon: Camera,
        title: "Exclusive Safari",
        detail:
          "Private game drive, Big Five tracking, and sundowner cocktails in the bush.",
      },
      {
        day: 3,
        icon: Tent,
        title: "Luxury Tented Lodge",
        detail:
          "Two nights at an award-winning lodge with plunge pool and panoramic views.",
      },
      {
        day: 4,
        icon: Utensils,
        title: "Chef's Table Experience",
        detail:
          "Private chef-curated 5-course dinner with local wine pairings.",
      },
      {
        day: 5,
        icon: Users,
        title: "Community & Culture",
        detail:
          "Private guided village tour, craft workshop, and school donation ceremony.",
      },
      {
        day: 6,
        icon: CalendarDays,
        title: "Adventure Day",
        detail: "Hot air balloon, zip line, or water sport of your choice.",
      },
      {
        day: 7,
        icon: Star,
        title: "Gala Night & Farewell",
        detail:
          "Black-tie farewell dinner, personalized photo book, VIP departure lounge.",
      },
      {
        day: 8,
        icon: Plane,
        title: "Departure",
        detail:
          "Private transfer, airport concierge, and 24/7 post-trip support.",
      },
    ],
  },
  {
    key: "family" as const,
    label: "Family",
    multiplier: 1.8,
    color: "bg-muted text-muted-foreground",
    active: "bg-green-600 text-white",
    badge: "New",
    itinerary: [
      {
        day: 1,
        icon: Plane,
        title: "Family Arrival",
        detail:
          "Family-size vehicle transfer, adjoining rooms/family suite, kids welcome pack.",
      },
      {
        day: 2,
        icon: Baby,
        title: "Kids Safari Morning",
        detail:
          "Child-friendly game drive with a junior ranger badge activity for the kids.",
      },
      {
        day: 3,
        icon: Utensils,
        title: "Family Cooking Class",
        detail:
          "Interactive cooking session where kids and parents make local dishes together.",
      },
      {
        day: 4,
        icon: Camera,
        title: "Nature Scavenger Hunt",
        detail:
          "Guided family scavenger hunt through the bush with prizes and certificates.",
      },
      {
        day: 5,
        icon: Tent,
        title: "Family Camp Night",
        detail:
          "Stargazing session, campfire stories, and s'mores under the open sky.",
      },
      {
        day: 6,
        icon: Users,
        title: "Community Visit",
        detail:
          "Family-friendly village tour and school interaction with local children.",
      },
      {
        day: 7,
        icon: Plane,
        title: "Departure",
        detail:
          "Relaxed checkout, family airport transfer, and kids souvenir pack.",
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CustomTravels = () => {
  const { formatPrice, loading: currencyLoading } = useCurrencyContext();
  const { toast } = useToast();

  const [selectedDest, setSelectedDest] = useState("");
  const [selectedTier, setSelectedTier] = useState<
    "basic" | "silver" | "premium" | "family"
  >("basic");
  const [selectedPlan, setSelectedPlan] = useState(6);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [travelDate, setTravelDate] = useState("");

  const dest = destinations.find((d) => d.slug === selectedDest);
  const tierInfo = tiers.find((t) => t.key === selectedTier)!;
  const plan = installmentPlans.find((p) => p.months === selectedPlan)!;

  // Family tier uses premium base price × family multiplier (covers ~2 adults + 2 kids)
  const basePriceUSD = dest
    ? Math.round(dest.packages.basic.price * tierInfo.multiplier)
    : 0;
  const totalPriceUSD = dest
    ? Math.round(basePriceUSD * (1 - plan.discount / 100))
    : 0;
  const monthlyUSD = dest ? Math.round(totalPriceUSD / plan.months) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDest || !name || !email || !phone || !travelDate) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Custom Travel Request Submitted! 🎉",
      description: `We'll contact you within 24 hours to finalize your ${tierInfo.label} package to ${dest?.name}.`,
    });
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="py-24 bg-safari-cream">
        <div className="container text-center">
          <AnimatedSection>
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Tailored Just for You
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
              Custom Travel Plans
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Design your perfect trip — solo adventure, romantic getaway, or a
              full family expedition. Pay in flexible monthly installments with
              zero interest and total peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                "Zero Interest",
                "Price Lock Guarantee",
                "24/7 Support",
                "Cancel Anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary" /> {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Why Travel With Us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <Card className="text-center border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <b.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Package Tiers Overview ── */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Choose Your Experience
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Every tier is fully customizable. Pick the one that fits your
              style and we'll handle the rest.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.key} delay={i * 80}>
                <Card
                  onClick={() => setSelectedTier(tier.key)}
                  className={`cursor-pointer border-2 transition-all hover:shadow-lg relative ${
                    selectedTier === tier.key
                      ? "border-primary shadow-md"
                      : "border-transparent"
                  }`}>
                  {tier.badge && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">
                      {tier.badge}
                    </span>
                  )}
                  <CardContent className="pt-8 pb-6 text-center">
                    <h3 className="font-display text-lg font-bold mb-2">
                      {tier.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      {tier.itinerary.length}-day itinerary
                    </p>
                    <ul className="text-left space-y-2">
                      {tier.itinerary.slice(0, 3).map((item) => (
                        <li
                          key={item.day}
                          className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle
                            size={11}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          {item.title}
                        </li>
                      ))}
                      {tier.itinerary.length > 3 && (
                        <li className="text-xs text-primary font-medium pl-4">
                          +{tier.itinerary.length - 3} more days…
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Itinerary Preview ── */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-2">
              {tierInfo.label} Itinerary
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              A day-by-day look at what your {tierInfo.label.toLowerCase()}{" "}
              experience includes.
            </p>
          </AnimatedSection>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-6">
              {tierInfo.itinerary.map((item, i) => (
                <AnimatedSection key={item.day} delay={i * 80}>
                  <div className="flex gap-5 items-start">
                    {/* icon bubble */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex flex-col items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                      <span className="text-[9px] font-bold text-primary leading-none mt-0.5">
                        Day {item.day}
                      </span>
                    </div>
                    <div className="bg-muted/40 rounded-xl p-4 flex-1">
                      <h4 className="font-display font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator & Form ── */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Plan Your Custom Trip
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Configure your destination, package, and payment plan — then
              submit your request.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* ── Left: Calculator ── */}
            <AnimatedSection delay={100}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8 space-y-6">
                  {/* Destination */}
                  <div>
                    <Label className="mb-2 block font-semibold">
                      Destination
                    </Label>
                    <Select
                      value={selectedDest}
                      onValueChange={setSelectedDest}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((d) => (
                          <SelectItem key={d.slug} value={d.slug}>
                            {d.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Package Tier */}
                  <div>
                    <Label className="mb-2 block font-semibold">
                      Package Tier
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {tiers.map((tier) => (
                        <button
                          key={tier.key}
                          onClick={() => setSelectedTier(tier.key)}
                          className={`py-2.5 rounded-lg text-sm font-medium capitalize transition-all relative ${
                            selectedTier === tier.key
                              ? tier.active + " shadow-md"
                              : tier.color + " hover:bg-accent"
                          }`}>
                          {tier.label}
                          {tier.badge && (
                            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                              {tier.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Installment Plan */}
                  <div>
                    <Label className="mb-2 block font-semibold">
                      Installment Plan
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      {installmentPlans.map((p) => (
                        <button
                          key={p.months}
                          onClick={() => setSelectedPlan(p.months)}
                          className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                            selectedPlan === p.months
                              ? "bg-secondary text-secondary-foreground shadow-md"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}>
                          {p.label}
                          {p.discount > 0 && (
                            <span className="block text-[10px] mt-0.5">
                              ({p.discount}% off)
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Summary */}
                  {dest ? (
                    <div className="bg-primary/5 rounded-xl p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {dest.name} — {tierInfo.label} Package
                      </p>
                      <p className="text-4xl font-bold text-primary mb-1">
                        {currencyLoading
                          ? `$${monthlyUSD}`
                          : formatPrice(monthlyUSD)}
                        <span className="text-base font-normal text-muted-foreground">
                          /mo
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total:{" "}
                        {currencyLoading
                          ? `$${totalPriceUSD}`
                          : formatPrice(totalPriceUSD)}{" "}
                        over {plan.months} months
                      </p>
                      {plan.discount > 0 && (
                        <p className="text-xs text-primary mt-1 font-semibold">
                          You save{" "}
                          {currencyLoading
                            ? `$${basePriceUSD - totalPriceUSD}`
                            : formatPrice(basePriceUSD - totalPriceUSD)}
                          !
                        </p>
                      )}
                      {selectedTier === "family" && (
                        <p className="text-xs text-muted-foreground mt-2 bg-green-50 text-green-700 rounded-lg px-3 py-1.5">
                          👨‍👩‍👧‍👦 Covers 2 adults + 2 children (ages 3–12)
                        </p>
                      )}
                      {/* Mini itinerary highlights */}
                      <div className="mt-4 text-left space-y-1.5">
                        {tierInfo.itinerary.slice(0, 4).map((item) => (
                          <div
                            key={item.day}
                            className="flex items-center gap-2 text-xs">
                            <CheckCircle
                              size={11}
                              className="text-primary flex-shrink-0"
                            />
                            <span className="font-medium">Day {item.day}:</span>
                            <span className="text-muted-foreground">
                              {item.title}
                            </span>
                          </div>
                        ))}
                        {tierInfo.itinerary.length > 4 && (
                          <p className="text-xs text-primary pl-4 font-medium">
                            +{tierInfo.itinerary.length - 4} more days included
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-muted/40 rounded-xl p-6 text-center text-sm text-muted-foreground">
                      Select a destination above to see your personalized price
                      breakdown.
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* ── Right: Form ── */}
            <AnimatedSection delay={200}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-6">
                    Request Your Custom Trip
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (WhatsApp) *</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="travelers">Travelers</Label>
                        <Select value={travelers} onValueChange={setTravelers}>
                          <SelectTrigger id="travelers">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {["1", "2", "3", "4", "5", "6", "7", "8+"].map(
                              (n) => (
                                <SelectItem key={n} value={n}>
                                  {n} {n === "1" ? "person" : "people"}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date">Travel Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground mb-2">
                        How it works:
                      </p>
                      <ol className="list-decimal list-inside space-y-1.5">
                        <li>Submit your custom travel request</li>
                        <li>Our team contacts you within 24 hours</li>
                        <li>We build a fully tailored itinerary for you</li>
                        <li>
                          Sign a simple agreement & pay your first installment
                        </li>
                        <li>Travel when your payments are complete!</li>
                      </ol>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light"
                      size="lg">
                      Submit Custom Travel Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              {
                q: "Is there any interest on installments?",
                a: "None at all. Our plans are 100% interest-free — you only ever pay the trip cost.",
              },
              {
                q: "When do I actually travel?",
                a: "You travel once your installment plan is fully paid. We lock in your dates at sign-up so nothing changes.",
              },
              {
                q: "Can I pay off my balance early?",
                a: "Absolutely. Pay off any remaining balance at any time with zero penalties or fees.",
              },
              {
                q: "What if I need to cancel?",
                a: "Most payments are refundable. A small admin fee may apply. Full details are in your trip agreement.",
              },
              {
                q: "How does the Family package work?",
                a: "The Family package covers 2 adults and up to 2 children (ages 3–12) with kid-safe activities, family rooms, and dedicated child-friendly guides.",
              },
              {
                q: "Can I customise the itinerary further?",
                a: "Yes! After you submit your request our travel designers will work with you to tailor every detail to your preferences.",
              },
              {
                q: "Are group discounts available?",
                a: "Yes. Groups of 4 or more travelers receive automatic discounts. Contact us for large-group custom quotes.",
              },
            ].map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 60}>
                <div className="border-b pb-5">
                  <h4 className="font-display font-semibold mb-1.5">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomTravels;
