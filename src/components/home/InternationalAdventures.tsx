import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrencyContext } from "@/context/CurrencyContext";
import { destinations } from "@/lib/data";

const InternationalAdventures = () => {
  const { formatPrice, loading: currencyLoading } = useCurrencyContext();
  const international = destinations.filter((d) => d.category === "international").slice(0, 6);

  return (
    <section className="py-24 bg-safari-cream">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-2">
                Beyond Borders
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-black leading-tight">
                International
                <br />
                <span className="text-safari-green">Adventures</span>
              </h2>
            </div>
            <Link to="/destinations?category=international" className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors shrink-0">
              See all international <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {international.map((d, idx) => (
            <AnimatedSection key={d.id} delay={(idx % 3) * 100}>
              <Link to={`/destinations/${d.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-background shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-black mb-1">{d.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{d.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                          Starting from
                        </p>
                        <p className="text-2xl font-black text-safari-warm">
                          {currencyLoading ? `$${d.packages.basic.price}` : formatPrice(d.packages.basic.price)}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-safari-cream border border-border flex items-center justify-center group-hover:bg-safari-green group-hover:border-safari-green group-hover:text-white transition-all duration-300">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalAdventures;
