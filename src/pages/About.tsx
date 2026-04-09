import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { teamMembers } from "@/lib/data";
import heroSafari from "@/assets/hero-safari.jpg";
import destMara from "@/assets/dest-mara.jpg";
import destAmboseli from "@/assets/dest-amboseli.jpg";
import destSerengeti from "@/assets/dest-serengeti.jpg";

const teamImages = [destMara, destAmboseli, destSerengeti];

const aboutCards = [
  { title: "About Us", text: "At Tribeless Safaris, we are more than just a travel agency—we are your partners in creating lifelong memories. Our team of travel enthusiasts, planners, and destination experts is dedicated to making your journeys seamless, enriching, and unforgettable." },
  { title: "Our Mission", text: "Our mission is simple: to inspire, guide, and enable travelers to explore the world with confidence and joy." },
  { title: "Who We Are", text: 'Welcome to Tribeless Safaris — your trusted partner in creating unforgettable travel experiences.' },
  { title: "Why Choose Us", text: "With years of expertise in the travel industry, we understand what makes a trip truly special. We partner with trusted local guides, handpick accommodations, and offer curated activities." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroSafari} alt="About us" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aboutCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 100}>
                <Card className="border-none bg-safari-cream h-full">
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">{card.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.title === "Who We Are" ? (
                        <>Welcome to <span className="text-primary font-semibold">Tribeless Safaris</span> — your trusted partner in creating unforgettable travel experiences.</>
                      ) : card.text}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Team */}
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 120}>
                <Card className="text-center overflow-hidden border-none shadow-md">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={teamImages[i]}
                      alt={m.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                    <p className="text-muted-foreground">{m.role}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-safari-dark text-center">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Explore the World?</h2>
            <p className="text-primary-foreground/70 mb-8">Contact us today to plan your next adventure!</p>
            <Link to="/book">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-safari-warm px-8">
                Book a Trip
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
