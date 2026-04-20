import { Link } from "react-router-dom";
import { Compass, Plane, Building, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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

const ServicesSection = () => (
  <section className="py-12 bg-background">
    <div className="container">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-2">
              What We Offer
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black leading-tight">
              Everything You Need,
              <br />
              <span className="text-safari-green">All in One Place</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors shrink-0">
            Get a custom quote <ArrowRight size={14} />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 80}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-safari-cream p-4 hover:border-safari-green/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-safari-green/10 group-hover:bg-safari-green group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                <s.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-sm mb-1">{s.title}</h3>
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-safari-green transition-all duration-500 rounded-b-2xl" />{" "}
              <p className="text-[12px] text-muted-foreground leading-snug">
                {s.subtitle}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
