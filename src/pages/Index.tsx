import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Compass,
  Headphones,
  Plane,
  Building,
  Quote,
  Heart,
  Umbrella,
  Binoculars,
  Mountain,
  Landmark,
  Crown,
} from "lucide-react";
import heroSafari from "@/assets/hero-safari.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import heroAdventure from "@/assets/hero-adventure.jpg";
import { destinations, testimonials, themedHolidays } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrencyContext } from "@/context/CurrencyContext"; // 👈

const heroSlides = [
  {
    image: heroSafari,
    title: "Experience the Wild Like Never Before",
    subtitle:
      "Embark on an unforgettable safari adventure tailored just for you.",
    cta: "Explore Destinations",
    link: "/destinations?category=local",
  },
  {
    image: heroBeach,
    title: "Discover Serene Coastal Escapes",
    subtitle:
      "Unwind at stunning beach destinations that rejuvenate your soul.",
    cta: "Beach Holidays",
    link: "/destinations?category=beach",
  },
  {
    image: heroAdventure,
    title: "International Adventures Await",
    subtitle:
      "Dubai, Maldives, Egypt, Turkey, Cape Town — the world is yours to explore.",
    cta: "Go International",
    link: "/destinations?category=international",
  },
];

const services = [
  {
    icon: Compass,
    title: "Tours & Travel",
    subtitle: "Domestic & International",
  },
  { icon: Plane, title: "Airport Transfer", subtitle: "Seamless pickups" },
  { icon: Plane, title: "Air Ticketing", subtitle: "Best flight deals" },
  { icon: Building, title: "Hotel Booking", subtitle: "Curated stays" },
];

const whyUs = [
  {
    icon: Compass,
    title: "Expert Guides",
    desc: "Our seasoned guides ensure you experience every adventure safely.",
  },
  {
    icon: MapPin,
    title: "Adventure Awaits",
    desc: "Handpicked tours that promise unforgettable memories.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We're here to assist you every step of the way, day or night.",
  },
];

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Umbrella,
  Binoculars,
  Mountain,
  Landmark,
  Crown,
};

const getThemeSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

// ── Hero Slider (no prices, no changes needed) ────────────────────────────────
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}>
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl leading-tight mb-6 animate-fade-in">
          {slide.title}
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}>
          {slide.subtitle}
        </p>
        <Link to={slide.link}>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-safari-warm text-base px-8 py-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}>
            {slide.cta}
          </Button>
        </Link>
      </div>
    </section>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const Index = () => {
  const { formatPrice, loading: currencyLoading } = useCurrencyContext(); // 👈

  const featuredDestinations = destinations.slice(0, 8);
  const internationalDestinations = destinations
    .filter((d) => d.category === "international")
    .slice(0, 6);

  return (
    <Layout>
      <HeroSlider />

      {/* ── Services ── */}
      <section className="py-20 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <Card className="text-center group hover:shadow-lg transition-shadow border-none bg-background hover-scale">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon size={28} />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {s.subtitle}
                    </p>
                    <h3 className="font-display font-semibold text-lg">
                      {s.title}
                    </h3>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Themed Holidays ── */}
      <section className="py-20 relative overflow-hidden safari-drive-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="safari-jeep safari-jeep-1" />
          <div className="safari-jeep safari-jeep-2" />
          <div className="safari-animal safari-animal-1" />
          <div className="safari-animal safari-animal-2" />
          <div className="safari-animal safari-animal-3" />
          <div className="safari-bird safari-bird-1" />
          <div className="safari-bird safari-bird-2" />
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Themed Holidays
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Hand-picked holiday categories for every type of traveler
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themedHolidays.map((theme, i) => {
              const Icon = iconMap[theme.icon] || Compass;
              return (
                <AnimatedSection key={theme.title} delay={i * 80}>
                  <Link
                    to={`/destinations?theme=${getThemeSlug(theme.title)}`}
                    className="group block">
                    <div className="text-center p-6 rounded-xl bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg">
                      <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3 transition-colors">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-display font-semibold text-sm mb-1">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                        {theme.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Destinations ── */}
      <section className="py-20 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Featured Destinations
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Local safaris, beach escapes, and international adventures
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((d, idx) => (
              <AnimatedSection key={d.id} delay={(idx % 4) * 100}>
                <Link to={`/destinations/${d.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      {d.category}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-lg font-bold text-primary-foreground">
                        {d.name}
                      </h3>
                      {/* 👇 UPDATED */}
                      <p className="text-primary-foreground/70 text-xs mt-1">
                        From{" "}
                        {currencyLoading
                          ? `$${d.packages.basic.price}`
                          : formatPrice(d.packages.basic.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-10">
              <Link to="/destinations">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-safari-green-light">
                  View All Destinations
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Popular International Trips ── */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Popular International Trips
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Explore the world's most fascinating destinations
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalDestinations.map((d, idx) => (
              <AnimatedSection key={d.id} delay={(idx % 3) * 120}>
                <Link to={`/destinations/${d.slug}`} className="group block">
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={d.image}
                        alt={d.name}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-1">
                        {d.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {d.description}
                      </p>
                      {/* 👇 UPDATED */}
                      <p className="text-2xl font-bold text-safari-warm">
                        From{" "}
                        {currencyLoading
                          ? `$${d.packages.basic.price}`
                          : formatPrice(d.packages.basic.price)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Travel With Us ── */}
      <section className="py-20 bg-safari-cream">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Why Travel With Us?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((w) => (
              <AnimatedSection key={w.title}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <w.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {w.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-safari-dark">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
              What Our Travelers Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={i}>
                <div className="bg-primary-foreground/5 rounded-lg p-8 border border-primary-foreground/10">
                  <Quote size={32} className="text-safari-green-light mb-4" />
                  <p className="text-primary-foreground/80 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <p className="font-display font-semibold text-safari-green-light">
                    — {t.author}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTAs ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ready to Start Your Adventure?",
                desc: "Contact us today and let's plan the journey of a lifetime.",
                cta: "Get in Touch",
                link: "/contact",
              },
              {
                title: "Know Your Destination?",
                desc: "Choose your tour package and let us handle the rest.",
                cta: "Book a Tour",
                link: "/book",
              },
              {
                title: "Design Your Own Safari",
                desc: "Create a personalized safari experience tailored to you.",
                cta: "Customize",
                link: "/customize",
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <Card className="text-center border-none bg-safari-cream p-8 hover-scale">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{item.desc}</p>
                  <Link to={item.link}>
                    <Button className="bg-primary text-primary-foreground hover:bg-safari-green-light">
                      {item.cta}
                    </Button>
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
