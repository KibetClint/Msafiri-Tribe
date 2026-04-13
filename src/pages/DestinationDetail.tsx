import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { destinations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD
import { MapPin, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
=======
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Star, CheckCircle, ArrowLeft, Utensils, Hotel, Globe } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
>>>>>>> 3478804c (update project)

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
<<<<<<< HEAD
  const pointerStartX = useRef<number | null>(null);

  const nextImage = useCallback(() => {
    if (dest)
      setSelectedImage((prev) =>
        prev === dest.gallery.length - 1 ? 0 : prev + 1,
      );
=======

  const nextImage = useCallback(() => {
    if (dest) setSelectedImage((prev) => (prev === dest.gallery.length - 1 ? 0 : prev + 1));
>>>>>>> 3478804c (update project)
  }, [dest]);

  useEffect(() => {
    if (!dest || paused) return;
    const timer = setInterval(nextImage, 3500);
    return () => clearInterval(timer);
  }, [dest, paused, nextImage]);

<<<<<<< HEAD
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = e.clientX;
    setPaused(true);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || !dest) return;
    const diff = pointerStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setSelectedImage((prev) =>
          prev === dest.gallery.length - 1 ? 0 : prev + 1,
        );
      } else {
        setSelectedImage((prev) =>
          prev === 0 ? dest.gallery.length - 1 : prev - 1,
        );
      }
    }
    pointerStartX.current = null;
    setPaused(false);
  };

  const handlePointerLeave = () => {
    pointerStartX.current = null;
    setPaused(false);
  };
=======
  // Related destinations (same country or category)
  const related = destinations.filter(d => d.slug !== slug && (d.country === dest?.country || d.category === dest?.category)).slice(0, 3);
>>>>>>> 3478804c (update project)

  if (!dest) {
    return (
      <Layout>
        <div className="container py-20 text-center">
<<<<<<< HEAD
          <h1 className="font-display text-4xl font-bold mb-4">
            Destination Not Found
          </h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
=======
          <h1 className="font-display text-4xl font-bold mb-4">Destination Not Found</h1>
          <Link to="/destinations"><Button>Back to Destinations</Button></Link>
>>>>>>> 3478804c (update project)
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
<<<<<<< HEAD
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            {dest.name}
          </h1>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin size={18} className="text-safari-gold" />
            <span>Distance from Nairobi: {dest.distance}</span>
=======
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">{dest.name}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-safari-green-light" />
              {dest.country}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} className="text-safari-green-light" />
              {dest.packages.basic.duration}
            </span>
            <span className="flex items-center gap-2">
              <Globe size={18} className="text-safari-green-light" />
              {dest.tripTypes.map(t => t.replace(/-/g, ' ')).join(', ')}
            </span>
>>>>>>> 3478804c (update project)
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container pt-6">
<<<<<<< HEAD
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
=======
        <Link to="/destinations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
>>>>>>> 3478804c (update project)
          <ArrowLeft size={16} /> Back to Destinations
        </Link>
      </div>

<<<<<<< HEAD
      {/* Overview */}
      <section className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold mb-6">
              About This Destination
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {dest.longDescription}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Clock size={16} className="text-safari-warm" />
              <span>
                <strong>Best Time to Visit:</strong> {dest.bestTime}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Highlights
            </h3>
            <ul className="space-y-2">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <Star size={16} className="text-safari-gold flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Gallery Slider - Swipe/Touch */}
          <AnimatedSection delay={150}>
            <div
              className="relative rounded-lg overflow-hidden aspect-video"
              style={{ touchAction: "pan-y", cursor: "grab" }}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerLeave}>
              <img
                src={dest.gallery[selectedImage]}
                alt={`${dest.name} gallery`}
                className="w-full h-full object-cover transition-all duration-500 pointer-events-none select-none"
                draggable={false}
              />
              {dest.gallery.length > 1 && (
=======
      {/* Overview with tabs like Azani */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-4xl">{dest.longDescription}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card className="border-none bg-safari-cream">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock size={16} className="text-primary" /> Best Time to Visit
                    </div>
                    <p className="text-sm font-medium">{dest.bestTime}</p>
                  </CardContent>
                </Card>
                <Card className="border-none bg-safari-cream">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin size={16} className="text-primary" /> Distance
                    </div>
                    <p className="text-sm font-medium">{dest.distance} from Nairobi</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-2">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <Star size={16} className="text-safari-green-light flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Gallery Slider */}
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
>>>>>>> 3478804c (update project)
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {dest.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
<<<<<<< HEAD
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === selectedImage
                          ? "bg-background scale-125"
                          : "bg-background/50 hover:bg-background/80"
                      }`}
=======
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === selectedImage ? "bg-background scale-125" : "bg-background/50 hover:bg-background/80"}`}
>>>>>>> 3478804c (update project)
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
<<<<<<< HEAD
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Safari Packages
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the experience that suits your style — from budget-friendly
              to ultimate luxury.
=======
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Packages - Azani-style with detailed itinerary */}
      <section className="py-16 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Safari Packages</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the experience that suits your style — from budget-friendly to ultimate luxury.
>>>>>>> 3478804c (update project)
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
<<<<<<< HEAD
                      <Card
                        className={`border-2 ${tierColors[tier]} lg:col-span-1`}>
                        <CardContent className="p-8">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tierBadgeColors[tier]}`}>
                            {tierLabels[tier]}
                          </span>
                          <h3 className="font-display text-2xl font-bold mb-2">
                            {pkg.name}
                          </h3>
                          <p className="text-3xl font-bold text-safari-warm mb-1">
                            ${pkg.price}
                          </p>
                          <p className="text-sm text-muted-foreground mb-6">
                            per person
                          </p>
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock
                                size={14}
                                className="text-muted-foreground"
                              />
                              {pkg.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin
                                size={14}
                                className="text-muted-foreground"
                              />
                              {pkg.accommodation}
                            </div>
                          </div>
                          <h4 className="font-semibold mb-3">
                            What's Included
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {pkg.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm">
                                <CheckCircle
                                  size={14}
                                  className="text-primary mt-0.5 flex-shrink-0"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <Link to="/book">
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-safari-green-light">
                              Book Now
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>

                      <div className="lg:col-span-2">
                        <h3 className="font-display text-xl font-bold mb-6">
                          Day-by-Day Itinerary
                        </h3>
                        <div className="space-y-4">
                          {pkg.itinerary.map((day) => (
                            <div key={day.day} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                                  {day.day}
                                </div>
                                {day.day < pkg.itinerary.length && (
                                  <div className="w-0.5 flex-1 bg-border mt-2" />
                                )}
                              </div>
                              <Card className="flex-1 border-none shadow-sm">
                                <CardContent className="p-5">
                                  <h4 className="font-display font-semibold mb-1">
                                    Day {day.day}: {day.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {day.description}
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          ))}
                        </div>
=======
                      {/* Package Summary Card */}
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
                            <div className="flex items-center gap-2 text-sm"><Hotel size={14} className="text-muted-foreground" />{pkg.accommodation}</div>
                            <div className="flex items-center gap-2 text-sm"><Utensils size={14} className="text-muted-foreground" />{pkg.mealBasis}</div>
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

                      {/* Detailed Day-by-Day Itinerary (Azani style) */}
                      <div className="lg:col-span-2">
                        <h3 className="font-display text-xl font-bold mb-2">Tour Plan</h3>
                        <p className="text-sm text-muted-foreground mb-6">Detailed day-by-day itinerary</p>
                        
                        <Accordion type="single" collapsible className="space-y-3">
                          {pkg.itinerary.map((day) => (
                            <AccordionItem key={day.day} value={`day-${day.day}`} className="border rounded-lg bg-background overflow-hidden">
                              <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50">
                                <div className="flex items-center gap-4 text-left">
                                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    Day {day.day}
                                  </div>
                                  <div>
                                    <h4 className="font-display font-semibold">{day.title}</h4>
                                    {day.destination && (
                                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                                        <MapPin size={10} /> {day.destination}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-5 pb-5">
                                <div className="pl-16 space-y-3">
                                  {day.destination && (
                                    <div className="flex items-center gap-2 text-sm">
                                      <MapPin size={14} className="text-primary" />
                                      <strong>Destination:</strong> {day.destination}
                                    </div>
                                  )}
                                  {day.mealBasis && (
                                    <div className="flex items-center gap-2 text-sm">
                                      <Utensils size={14} className="text-primary" />
                                      <strong>Basis:</strong> {day.mealBasis}
                                    </div>
                                  )}
                                  <p className="text-sm text-muted-foreground leading-relaxed">{day.description}</p>
                                  {day.accommodation && (
                                    <div className="mt-3 p-4 bg-safari-cream rounded-lg">
                                      <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                                        <Hotel size={14} className="text-primary" />
                                        Overnight: {day.accommodation}
                                      </div>
                                      {day.accommodationDescription && (
                                        <p className="text-xs text-muted-foreground">{day.accommodationDescription}</p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
>>>>>>> 3478804c (update project)
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Explore {dest.name.split(",")[0]}?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us for a customized itinerary or book one of our packages
              today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-safari-green-light">
                  Book a Safari
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
=======
      {/* Related Trips */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-bold mb-8">Related Trips You Might Like</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <AnimatedSection key={r.slug} delay={i * 100}>
                  <Link to={`/destinations/${r.slug}`}>
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                      <div className="relative overflow-hidden aspect-video">
                        <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-display text-lg font-semibold mb-1">{r.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{r.packages.basic.duration}</p>
                        <span className="text-lg font-bold text-safari-warm">From ${r.packages.basic.price}</span>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-safari-dark">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold mb-4 text-primary-foreground">Ready to Explore {dest.name.split(",")[0]}?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Contact us for a customized itinerary or book one of our packages today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-safari-green-light">Book a Safari</Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Contact Us</Button></Link>
>>>>>>> 3478804c (update project)
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
