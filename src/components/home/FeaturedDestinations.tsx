import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrencyContext } from "@/context/CurrencyContext";
import { destinations } from "@/lib/data";

const FeaturedDestinations = () => {
  const { formatPrice, loading: currencyLoading } = useCurrencyContext();
  const featured = destinations.slice(0, 8);

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm mb-2">
                Top Picks
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-black leading-tight">
                Featured
                <br />
                <span className="text-safari-green">Destinations</span>
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors shrink-0">
              All destinations <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((d, idx) => (
            <AnimatedSection key={d.id} delay={(idx % 4) * 90}>
              <Link to={`/destinations/${d.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
                    {d.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-black text-white leading-tight mb-2">
                      {d.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white/60 text-xs">
                        From{" "}
                        <span className="text-safari-warm font-bold text-sm">
                          {currencyLoading
                            ? `$${d.packages.basic.price}`
                            : formatPrice(d.packages.basic.price)}
                        </span>
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-safari-warm transition-colors duration-300">
                        <ArrowRight size={14} className="text-white" />
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

export default FeaturedDestinations;
