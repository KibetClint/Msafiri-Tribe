import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ctas = [
  {
    title: "Get in Touch",
    desc: "Let's plan your dream trip together.",
    cta: "Contact Us",
    link: "/contact",
    solid: false,
  },
  {
    title: "Book a Tour",
    desc: "Choose a package and let us handle everything.",
    cta: "Book Now",
    link: "/book",
    solid: true,
  },
  {
    title: "Design Your Safari",
    desc: "A fully personalised experience, built around you.",
    cta: "Customise",
    link: "/customtravels",
    solid: false,
  },
];

const CTASection = () => (
  <section className="py-24 bg-safari-green relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
      }}
    />
    <div className="container relative z-10">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl font-black text-white text-center mb-3">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-white/55 text-center text-lg mb-14 max-w-xl mx-auto">
          Whether you know exactly where you're going or need inspiration — we're here.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {ctas.map((item) => (
          <AnimatedSection key={item.title}>
            <div className={`rounded-2xl p-7 text-center ${item.solid ? "bg-white" : "bg-white/10 border border-white/20"}`}>
              <h3 className={`font-display font-black text-xl mb-2 ${item.solid ? "text-safari-green" : "text-white"}`}>
                {item.title}
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${item.solid ? "text-muted-foreground" : "text-white/60"}`}>
                {item.desc}
              </p>
              <Link to={item.link}>
                <button
                  className={`group w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                    item.solid
                      ? "bg-safari-green text-white hover:bg-safari-dark"
                      : "bg-white/15 text-white hover:bg-white hover:text-safari-green"
                  }`}>
                  {item.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
