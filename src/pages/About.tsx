import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
>>>>>>> 3478804c (update project)
import { Link } from "react-router-dom";
import { teamMembers } from "@/lib/data";
import heroSafari from "@/assets/hero-safari.jpg";
import destMara from "@/assets/dest-mara.jpg";
import destAmboseli from "@/assets/dest-amboseli.jpg";
import destSerengeti from "@/assets/dest-serengeti.jpg";
<<<<<<< HEAD

const teamImages = [destMara, destAmboseli, destSerengeti];

const aboutCards = [
  { title: "About Us", text: "At Tribeless Safaris, we are more than just a travel agency—we are your partners in creating lifelong memories. Our team of travel enthusiasts, planners, and destination experts is dedicated to making your journeys seamless, enriching, and unforgettable." },
  { title: "Our Mission", text: "Our mission is simple: to inspire, guide, and enable travelers to explore the world with confidence and joy." },
  { title: "Who We Are", text: 'Welcome to Tribeless Safaris — your trusted partner in creating unforgettable travel experiences.' },
  { title: "Why Choose Us", text: "With years of expertise in the travel industry, we understand what makes a trip truly special. We partner with trusted local guides, handpick accommodations, and offer curated activities." },
];

const About = () => {
=======
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, Users, Award, Globe, Heart } from "lucide-react";

const teamImages = [destMara, destAmboseli, destSerengeti];

const whyUsReasons = [
  { icon: Award, title: "Expert Guides", description: "Our team consists of certified wildlife guides with years of experience in East African safaris." },
  { icon: Globe, title: "Curated Destinations", description: "We handpick every destination, accommodation, and activity to ensure the highest quality experience." },
  { icon: Heart, title: "Personalized Service", description: "Every itinerary is tailored to your preferences, budget, and travel style." },
  { icon: Users, title: "Trusted Partners", description: "We work with the best lodges, airlines, and local operators across Africa and beyond." },
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
    }
  }, [hash]);

>>>>>>> 3478804c (update project)
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroSafari} alt="About us" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* About Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <Accordion type="single" collapsible defaultValue="about-us" className="space-y-4">
              <AccordionItem value="about-us" className="border rounded-lg bg-safari-cream overflow-hidden">
                <AccordionTrigger className="px-6 py-5 text-xl font-display font-bold hover:no-underline">
                  About Msafari-Tribe
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At <span className="text-primary font-semibold">Msafari-Tribe</span>, we are more than just a travel agency—we are your partners in creating lifelong memories. Our team of travel enthusiasts, planners, and destination experts is dedicated to making your journeys seamless, enriching, and unforgettable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Msafari-Tribe — your trusted partner in creating unforgettable travel experiences. Whether it's a thrilling wildlife safari, a relaxing beach getaway, or an international adventure, we craft every trip with care, passion, and attention to detail.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="our-mission" className="border rounded-lg bg-safari-cream overflow-hidden">
                <AccordionTrigger className="px-6 py-5 text-xl font-display font-bold hover:no-underline">
                  Our Mission
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is simple: to inspire, guide, and enable travelers to explore the world with confidence and joy. We believe that travel transforms lives, broadens perspectives, and creates bonds that last a lifetime.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-safari-cream scroll-mt-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              With years of expertise in the travel industry, we understand what makes a trip truly special.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsReasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 100}>
                <Card className="border-none shadow-md h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <reason.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
>>>>>>> 3478804c (update project)
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
<<<<<<< HEAD

          {/* Team */}
=======
        </div>
      </section>

      {/* Team */}
      <section id="our-team" className="py-20 scroll-mt-20">
        <div className="container">
>>>>>>> 3478804c (update project)
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
