import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { destinations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const tierColors = {
  basic: "border-muted-foreground/30",
  silver: "border-muted-foreground/50",
  premium: "border-secondary",
};

const tierLabels = { basic: "Basic", silver: "Silver", premium: "Premium" };

const tierBadgeColors = {
  basic: "bg-muted text-muted-foreground",
  silver: "bg-muted-foreground/20 text-foreground",
  premium: "bg-secondary text-secondary-foreground",
};

const DestinationDetail = () => {
  const { slug } = useParams();
  const dest = destinations.find((d) => d.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextImage = useCallback(() => {
    if (dest) setSelectedImage((prev) => (prev === dest.gallery.length - 1 ? 0 : prev + 1));
  }, [dest]);

  useEffect(() => {
    if (!dest || paused) return;
    const timer = setInterval(nextImage, 3500);
    return () => clearInterval(timer);
  }, [dest, paused, nextImage]);

  if (!dest) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Destination Not Found</h1>
          <Link to="/destinations"><Button>Back to Destinations</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">{dest.name}</h1>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin size={18} className="text-safari-gold" />
            <span>Distance from Nairobi: {dest.distance}</span>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container pt-6">
        <Link to="/destinations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} /> Back to Destinations
        </Link>
      </div>

      {/* Overview */}
      <section className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold mb-6">About This Destination</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{dest.longDescription}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Clock size={16} className="text-safari-warm" />
              <span><strong>Best Time to Visit:</strong> {dest.bestTime}</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">Highlights</h3>
            <ul className="space-y-2">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <Star size={16} className="text-safari-gold flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Gallery Slider - Autoplay */}
          <AnimatedSection delay={150}>
            <div
              className="relative rounded-lg overflow-hidden aspect-video group"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img src={dest.gallery[selectedImage]} alt={`${dest.name} gallery`} className="w-full h-full object-cover transition-all duration-500" />
              {dest.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? dest.gallery.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === dest.gallery.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background rotate-180"
                    aria-label="Next image"
                  >
                    <ArrowLeft size={18} />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {dest.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === selectedImage ? "bg-background scale-125" : "bg-background/50 hover:bg-background/80"}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Safari Packages</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the experience that suits your style — from budget-friendly to ultimate luxury.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="silver">Silver</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
              </TabsList>

              {(["basic", "silver", "premium"] as const).map((tier) => {
                const pkg = dest.packages[tier];
                return (
                  <TabsContent key={tier} value={tier}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <Card className={`border-2 ${tierColors[tier]} lg:col-span-1`}>
                        <CardContent className="p-8">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tierBadgeColors[tier]}`}>
                            {tierLabels[tier]}
                          </span>
                          <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                          <p className="text-3xl font-bold text-safari-warm mb-1">${pkg.price}</p>
                          <p className="text-sm text-muted-foreground mb-6">per person</p>
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm"><Clock size={14} className="text-muted-foreground" />{pkg.duration}</div>
                            <div className="flex items-center gap-2 text-sm"><MapPin size={14} className="text-muted-foreground" />{pkg.accommodation}</div>
                          </div>
                          <h4 className="font-semibold mb-3">What's Included</h4>
                          <ul className="space-y-2 mb-6">
                            {pkg.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm">
                                <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />{item}
                              </li>
                            ))}
                          </ul>
                          <Link to="/book"><Button className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light">Book Now</Button></Link>
                        </CardContent>
                      </Card>

                      <div className="lg:col-span-2">
                        <h3 className="font-display text-xl font-bold mb-6">Day-by-Day Itinerary</h3>
                        <div className="space-y-4">
                          {pkg.itinerary.map((day) => (
                            <div key={day.day} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">{day.day}</div>
                                {day.day < pkg.itinerary.length && <div className="w-0.5 flex-1 bg-border mt-2" />}
                              </div>
                              <Card className="flex-1 border-none shadow-sm">
                                <CardContent className="p-5">
                                  <h4 className="font-display font-semibold mb-1">Day {day.day}: {day.title}</h4>
                                  <p className="text-sm text-muted-foreground">{day.description}</p>
                                </CardContent>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Explore {dest.name.split(",")[0]}?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us for a customized itinerary or book one of our packages today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-safari-green-light">Book a Safari</Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline">Contact Us</Button></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
