import { Link } from "react-router-dom";
import { Compass, MapPin, Headphones, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  {
    icon: Compass,
    title: "Expert Guides",
    desc: "Our seasoned guides ensure you experience every adventure safely and memorably.",
  },
  {
    icon: MapPin,
    title: "Handpicked Adventures",
    desc: "Every tour is carefully curated to deliver moments that stay with you for life.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We're with you every step of the journey — day or night, wherever you are.",
  },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-safari-dark overflow-hidden">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            We Don't Just Book Trips.
            <br />
            <span className="text-safari-green-light">We Build Memories.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            From first enquiry to final farewell, the Msafiri Tribe team is devoted to
            crafting experiences that exceed every expectation.
          </p>
          <Link to="/about">
            <button className="group flex items-center gap-3 px-7 py-3.5 border border-safari-green text-safari-green-light font-bold text-sm tracking-widest uppercase rounded hover:bg-safari-green hover:text-white transition-all duration-300">
              Meet Our Team{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </AnimatedSection>

        <div className="grid gap-5">
          {reasons.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 100}>
              <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-safari-green/20 group-hover:bg-safari-green flex items-center justify-center shrink-0 transition-colors duration-300">
                  <w.icon size={20} className="text-safari-green-light group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">{w.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
