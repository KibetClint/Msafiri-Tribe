import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrencyContext } from "@/context/CurrencyContext";
import { useUpcomingDestinations } from "@/context/UpcomingDestinationsContext";

// ── Countdown helpers ─────────────────────────────────────────────────────────

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (dateStr: string): TimeLeft | null => {
  const target = new Date(dateStr);
  if (isNaN(target.getTime())) return null;
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(targetDate),
  );

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!timeLeft) return null;

  const units: [string, number][] = [
    ["days", timeLeft.days],
    ["hrs", timeLeft.hours],
    ["min", timeLeft.minutes],
    ["sec", timeLeft.seconds],
  ];

  return (
    <div className="flex items-center gap-1">
      {units.map(([label, val], i) => (
        <div key={label} className="flex items-center gap-1">
          <div className="flex flex-col items-center min-w-[28px]">
            <span className="font-black text-white text-sm tabular-nums leading-none">
              {String(val).padStart(2, "0")}
            </span>
            <span className="text-[8px] text-white/40 uppercase tracking-wider leading-tight mt-0.5">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-white/30 text-xs font-bold mb-2">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────

const ComingSoonSection = () => {
  const { upcoming } = useUpcomingDestinations();
  const { formatPrice } = useCurrencyContext();

  if (upcoming.length === 0) return null;

  const afterDiscount = (price: number, pct?: number) =>
    pct ? Math.round(price * (1 - pct / 100)) : price;

  const fmtKes = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

  const offerDaysLeft = (expiry?: string) => {
    if (!expiry) return null;
    const diff = new Date(expiry).getTime() - Date.now();
    if (diff <= 0) return null;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <section className="py-10 bg-safari-cream relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3a3a2a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safari-green/40 to-transparent" />

      <div className="container relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={12} className="text-safari-warm" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-safari-warm">
                  Upcoming Destinations
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-safari-dark leading-tight">
                Ready
                <br />
                <span className="text-safari-green">
                  For Your Next Adventure?
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
              Be the first to know when these destinations open for booking.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((d, i) => {
            const hasCountdown = getTimeLeft(d.launchDate) !== null;
            const detailHref = d.slug ? `/destinations/${d.slug}` : "/book";
            const isLinked = !!d.slug;
            const hasOffer = d.discountPercent || d.offerLabel;
            const daysLeft = offerDaysLeft(d.offerExpiry);

            return (
              <AnimatedSection key={d.id} delay={i * 100}>
                <Link to={detailHref}>
                  <div className="group relative rounded-2xl overflow-hidden border border-border bg-white hover:border-safari-green/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-safari-green/5">
                      {d.imageUrl ? (
                        <img
                          src={d.imageUrl}
                          alt={d.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <MapPin size={40} className="text-safari-green/25" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Tag */}
                      <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-safari-green text-white">
                        {d.tag}
                      </span>

                      {/* "View details" hover badge */}
                      {isLinked && (
                        <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 border border-white/40 text-safari-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View details <ArrowRight size={9} />
                        </span>
                      )}

                      {/* Launch date / countdown pill */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-safari-dark/80 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                        <Clock
                          size={10}
                          className="text-safari-warm shrink-0"
                        />
                        {hasCountdown ? (
                          <CountdownTimer targetDate={d.launchDate} />
                        ) : (
                          <span className="text-[11px] font-bold text-white/90">
                            {d.launchDate || "Coming Soon"}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-safari-warm text-xs font-bold uppercase tracking-widest mb-1.5">
                        {d.country}
                      </p>
                      <h3 className="font-display text-xl font-black text-safari-dark mb-2 leading-tight">
                        {d.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {d.description}
                      </p>

                      {/* Offer badges */}
                      {hasOffer && (
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {d.discountPercent && (
                            <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-safari-warm/15 border border-safari-warm/30 text-safari-warm">
                              {d.discountPercent}% OFF
                            </span>
                          )}
                          {d.offerLabel && (
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-safari-green/10 border border-safari-green/20 text-safari-green">
                              {d.offerLabel}
                            </span>
                          )}
                          {daysLeft !== null && (
                            <span className="text-[10px] text-muted-foreground italic">
                              Offer ends in {daysLeft}d
                            </span>
                          )}
                        </div>
                      )}

                      {/* Pricing — always shown */}
                      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
                        {/* Residents */}
                        <div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-0.5">
                            Residents
                          </p>
                          {d.localPrice ? (
                            d.discountPercent ? (
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-black text-safari-green text-sm leading-none">
                                  {fmtKes(
                                    afterDiscount(
                                      d.localPrice,
                                      d.discountPercent,
                                    ),
                                  )}
                                </span>
                                <span className="text-[10px] text-muted-foreground line-through">
                                  {fmtKes(d.localPrice)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-black text-safari-green text-sm">
                                {fmtKes(d.localPrice)}
                              </span>
                            )
                          ) : (
                            <span className="text-xs text-muted-foreground italic">
                              TBA
                            </span>
                          )}
                        </div>

                        {/* International */}
                        <div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-0.5">
                            International
                          </p>
                          {d.foreignerPrice ? (
                            d.discountPercent ? (
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-black text-safari-warm text-sm leading-none">
                                  {formatPrice(
                                    afterDiscount(
                                      d.foreignerPrice,
                                      d.discountPercent,
                                    ),
                                  )}
                                </span>
                                <span className="text-[10px] text-muted-foreground line-through">
                                  {formatPrice(d.foreignerPrice)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-black text-safari-warm text-sm">
                                {formatPrice(d.foreignerPrice)}
                              </span>
                            )
                          ) : (
                            <span className="text-xs text-muted-foreground italic">
                              TBA
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-muted-foreground group-hover:border-safari-green group-hover:text-safari-green group-hover:bg-safari-green/5 transition-all duration-300 text-xs font-bold tracking-widest uppercase">
                        {isLinked ? "View Details" : "Book a Spot"}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-0 h-0 group-hover:w-12 group-hover:h-12 transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(225deg, rgba(107,140,62,0.2) 0%, transparent 60%)",
                        borderTopRightRadius: "1rem",
                      }}
                    />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
