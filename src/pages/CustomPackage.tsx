import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { destinations } from "@/lib/data";
import { Palette, MapPin, Calendar, Users, BedDouble, UtensilsCrossed, Plane, Camera, Heart, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const accommodationOptions = [
  { value: "budget", label: "Budget (Hostels & Guest Houses)" },
  { value: "standard", label: "Standard (3-Star Hotels & Lodges)" },
  { value: "mid-range", label: "Mid-Range (4-Star Hotels & Eco-Lodges)" },
  { value: "luxury", label: "Luxury (5-Star Resorts & Villas)" },
  { value: "ultra-luxury", label: "Ultra Luxury (Private Villas & Exclusive Camps)" },
];

const activityOptions = [
  { id: "game-drives", label: "Game Drives", icon: Camera },
  { id: "beach", label: "Beach & Water Sports", icon: Heart },
  { id: "hiking", label: "Hiking & Trekking", icon: MapPin },
  { id: "cultural", label: "Cultural Tours", icon: Users },
  { id: "balloon", label: "Hot Air Balloon", icon: Plane },
  { id: "diving", label: "Diving & Snorkeling", icon: Heart },
  { id: "spa", label: "Spa & Wellness", icon: Heart },
  { id: "photography", label: "Photography Safari", icon: Camera },
  { id: "fishing", label: "Deep-Sea Fishing", icon: Heart },
  { id: "nightlife", label: "Nightlife & Entertainment", icon: Heart },
  { id: "wine", label: "Wine & Food Tours", icon: UtensilsCrossed },
  { id: "skydiving", label: "Skydiving / Extreme Sports", icon: Shield },
];

const mealOptions = [
  { value: "breakfast-only", label: "Breakfast Only" },
  { value: "half-board", label: "Half Board (Breakfast & Dinner)" },
  { value: "full-board", label: "Full Board (All Meals)" },
  { value: "all-inclusive", label: "All-Inclusive (Meals & Drinks)" },
];

const CustomPackage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [travelDates, setTravelDates] = useState("");
  const [duration, setDuration] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [accommodation, setAccommodation] = useState("");
  const [mealPlan, setMealPlan] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const toggleDestination = (slug: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || selectedDestinations.length === 0) {
      toast({ title: "Please fill all required fields and select at least one destination.", variant: "destructive" });
      return;
    }
    toast({
      title: "Custom Package Request Submitted! 🎉",
      description: "Our travel experts will craft your personalized itinerary and contact you within 24 hours.",
    });
    setStep(4);
  };

  const totalSteps = 3;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-safari-cream">
        <div className="container text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Palette size={32} className="text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Design Your Own Safari</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tell us your dream trip and we'll craft a personalized itinerary tailored to your preferences, budget, and travel style.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Progress */}
      {step <= totalSteps && (
        <div className="container max-w-3xl pt-10">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              {["Destinations & Dates", "Preferences", "Your Details"].map((label, i) => (
                <div key={label} className="flex items-center gap-2 flex-1">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                    step > i + 1 ? "bg-primary text-primary-foreground" : step === i + 1 ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > i + 1 ? <CheckCircle size={16} /> : i + 1}
                  </div>
                  <span className={`text-sm hidden sm:block ${step === i + 1 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{label}</span>
                  {i < 2 && <div className={`flex-1 h-0.5 mx-2 transition-colors ${step > i + 1 ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Step Content */}
      <section className="pb-20">
        <div className="container max-w-3xl">
          {step === 1 && (
            <AnimatedSection>
              <Card className="border-none shadow-md">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">Where do you want to go?</h2>
                    <p className="text-sm text-muted-foreground mb-4">Select one or more destinations for your custom trip.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {destinations.map((d) => (
                        <button
                          key={d.slug}
                          onClick={() => toggleDestination(d.slug)}
                          className={`relative rounded-lg overflow-hidden aspect-[4/3] group ${
                            selectedDestinations.includes(d.slug) ? "ring-3 ring-primary" : ""
                          }`}
                        >
                          <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-transparent" />
                          {selectedDestinations.includes(d.slug) && (
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                              <CheckCircle size={14} />
                            </div>
                          )}
                          <span className="absolute bottom-2 left-2 right-2 text-primary-foreground text-xs font-semibold">{d.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label className="mb-1.5 block"><Calendar size={14} className="inline mr-1" />Preferred Dates</Label>
                      <Input type="date" value={travelDates} onChange={(e) => setTravelDates(e.target.value)} />
                    </div>
                    <div>
                      <Label className="mb-1.5 block">Duration (days)</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger><SelectValue placeholder="How long?" /></SelectTrigger>
                        <SelectContent>
                          {["3 days", "5 days", "7 days", "10 days", "14 days", "21 days", "Flexible"].map((d) => (
                            <SelectItem key={d} value={d}>{d}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-1.5 block"><Users size={14} className="inline mr-1" />Travelers</Label>
                      <Input type="number" min={1} max={50} value={travelers} onChange={(e) => setTravelers(e.target.value)} />
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    disabled={selectedDestinations.length === 0}
                    className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light"
                    size="lg"
                  >
                    Next: Preferences →
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {step === 2 && (
            <AnimatedSection>
              <Card className="border-none shadow-md">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">Your Preferences</h2>
                    <p className="text-sm text-muted-foreground">Help us tailor the perfect experience for you.</p>
                  </div>

                  <div>
                    <Label className="mb-1.5 block font-semibold"><BedDouble size={14} className="inline mr-1" />Accommodation Level</Label>
                    <Select value={accommodation} onValueChange={setAccommodation}>
                      <SelectTrigger><SelectValue placeholder="Choose accommodation" /></SelectTrigger>
                      <SelectContent>
                        {accommodationOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-1.5 block font-semibold"><UtensilsCrossed size={14} className="inline mr-1" />Meal Plan</Label>
                    <Select value={mealPlan} onValueChange={setMealPlan}>
                      <SelectTrigger><SelectValue placeholder="Choose meal plan" /></SelectTrigger>
                      <SelectContent>
                        {mealOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-3 block font-semibold">Activities & Experiences</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activityOptions.map((act) => (
                        <label
                          key={act.id}
                          className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all text-sm ${
                            selectedActivities.includes(act.id)
                              ? "bg-primary/10 border-2 border-primary"
                              : "bg-muted border-2 border-transparent hover:bg-accent"
                          }`}
                        >
                          <Checkbox
                            checked={selectedActivities.includes(act.id)}
                            onCheckedChange={() => toggleActivity(act.id)}
                          />
                          {act.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-1.5 block font-semibold">Budget Per Person (USD)</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger><SelectValue placeholder="Your budget range" /></SelectTrigger>
                      <SelectContent>
                        {["Under $500", "$500 – $1,000", "$1,000 – $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Flexible / No limit"].map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-1.5 block font-semibold">Special Requests</Label>
                    <Textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Honeymoon setup, dietary needs, accessibility requirements, surprise celebrations..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1" size="lg">← Back</Button>
                    <Button onClick={() => setStep(3)} className="flex-1 bg-primary text-primary-foreground hover:bg-safari-green-light" size="lg">Next: Your Details →</Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {step === 3 && (
            <AnimatedSection>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-2">Your Details</h2>
                  <p className="text-sm text-muted-foreground mb-6">We'll use these to send your personalized quote.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="cname">Full Name *</Label>
                      <Input id="cname" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="cemail">Email *</Label>
                      <Input id="cemail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required />
                    </div>
                    <div>
                      <Label htmlFor="cphone">Phone (WhatsApp) *</Label>
                      <Input id="cphone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 000 000" required />
                    </div>

                    <div className="bg-safari-cream rounded-xl p-5 space-y-2">
                      <h3 className="font-display font-semibold mb-3">Your Custom Trip Summary</h3>
                      <p className="text-sm"><strong>Destinations:</strong> {selectedDestinations.map((s) => destinations.find((d) => d.slug === s)?.name).join(", ") || "—"}</p>
                      <p className="text-sm"><strong>Dates:</strong> {travelDates || "Flexible"}</p>
                      <p className="text-sm"><strong>Duration:</strong> {duration || "—"}</p>
                      <p className="text-sm"><strong>Travelers:</strong> {travelers}</p>
                      <p className="text-sm"><strong>Accommodation:</strong> {accommodationOptions.find((o) => o.value === accommodation)?.label || "—"}</p>
                      <p className="text-sm"><strong>Meals:</strong> {mealOptions.find((o) => o.value === mealPlan)?.label || "—"}</p>
                      <p className="text-sm"><strong>Activities:</strong> {selectedActivities.map((id) => activityOptions.find((a) => a.id === id)?.label).join(", ") || "—"}</p>
                      <p className="text-sm"><strong>Budget:</strong> {budget || "—"}</p>
                      {specialRequests && <p className="text-sm"><strong>Special Requests:</strong> {specialRequests}</p>}
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1" size="lg">← Back</Button>
                      <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-safari-green-light" size="lg">Submit Request</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {step === 4 && (
            <AnimatedSection>
              <Card className="border-none shadow-md text-center">
                <CardContent className="p-12">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">Request Submitted!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Our travel experts are already working on your custom itinerary. You'll hear from us within 24 hours with a personalized quote.
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button onClick={() => { setStep(1); setSelectedDestinations([]); setSelectedActivities([]); }} variant="outline">Design Another Trip</Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-safari-green-light" asChild>
                      <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CustomPackage;
